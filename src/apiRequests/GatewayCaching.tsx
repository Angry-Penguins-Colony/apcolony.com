import { GatewayLogger } from './GatewayLogger';

export class GatewayCaching {

    public readonly boughtAmount: CacheMap<string, number>;
    public readonly remainingNft: CacheValue<number>;
    public readonly hasDiscount: CacheMap<string, boolean>;
    public readonly whitelisted: CacheMap<string, boolean>;

    constructor(readonly logger: GatewayLogger) {
        this.boughtAmount = new CacheMap<string, number>(15_000);
        this.remainingNft = new CacheValue<number>(5_000);
        this.hasDiscount = new CacheMap<string, boolean>(Infinity);
        this.whitelisted = new CacheMap<string, boolean>(Infinity);
    }

    public clear(): void {
        this.boughtAmount.clear();
        this.remainingNft.clear();
        this.hasDiscount.clear();
        this.whitelisted.clear();
    }
}

export class CacheValue<T> {

    private cachedValue: Promise<T> | undefined;
    private expireTimestamp: number | undefined;

    constructor(
        private readonly msTTL: number
    ) {
        // TODO: retrieve from sessionStoage
    }

    public get(getter: () => Promise<T>): Promise<T> {
        if (this.cachedValue && this.isCacheValid()) {
            return this.cachedValue;
        }
        else {
            this.cachedValue = getter();
            this.expireTimestamp = Date.now() + this.msTTL;

            // TODO: save from sessionStorage

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
            const value = new CacheValue<V>(this.msTTL);
            this.map.set(key, value);

            return value;
        }
    }

    public clear(): void {
        this.map.clear();
    }
}