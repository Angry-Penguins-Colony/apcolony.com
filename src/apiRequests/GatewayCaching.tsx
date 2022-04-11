import { GatewayLogger } from './GatewayLogger';

export class GatewayCaching {

    public readonly boughtAmount: CacheMap<string, number>;
    public readonly remainingNft: CacheValue<number>;

    constructor(readonly logger: GatewayLogger) {
        this.boughtAmount = new CacheMap<string, number>(15000, logger, 'getBoughtAmount');
        this.remainingNft = new CacheValue<number>(5000, logger, 'getRemainingNft');
    }

    public clear(): void {
        this.boughtAmount.clear();
        this.remainingNft.clear();
    }
}

export class CacheValue<T> {

    private cachedValue: Promise<T> | undefined;
    private expireTimestamp: number | undefined;

    constructor(
        private readonly msTTL: number,
        private readonly logger: GatewayLogger,
        private readonly logContent: string
    ) { }

    public get(getter: () => Promise<T>): Promise<T> {
        if (this.cachedValue && this.isCacheValid()) {
            this.logger.logCache(this.logContent);
            return this.cachedValue;
        }
        else {
            this.cachedValue = getter();
            this.expireTimestamp = Date.now() + this.msTTL;
            return this.cachedValue;
        }
    }

    public clear(): void {
        this.expireTimestamp = undefined;
        this.cachedValue = undefined;
    }

    private isCacheValid(): boolean {
        return this.hasExpired() == false;
    }

    private hasExpired(): boolean {
        if (this.expireTimestamp == undefined) return false;

        return this.expireTimestamp < Date.now();
    }
}

export class CacheMap<K, V> {
    private readonly map = new Map<K, CacheValue<V>>();

    constructor(
        private readonly msTTL: number,
        private readonly logger: GatewayLogger,
        private readonly logContent: string
    ) { }

    public async get(key: K, fallback: () => Promise<V>): Promise<V> {
        return this.getOrInitKey(key)
            .get(fallback);
    }

    private getOrInitKey(key: K): CacheValue<V> {
        const cached = this.map.get(key);

        if (cached) {
            return cached;
        }
        else {
            const value = new CacheValue<V>(this.msTTL, this.logger, this.logContent);
            this.map.set(key, value);

            return value;
        }
    }

    public clear(): void {
        this.map.clear();
    }
}