import { GatewayLogger } from './GatewayLogger';

export class GatewayCaching {

    public readonly boughtAmount: CacheMap<string, number>;
    public readonly remainingNft: CacheValue<number>;
    public readonly hasDiscount: CacheMap<string, boolean>;
    public readonly whitelisted: CacheMap<string, boolean>;

    constructor(readonly logger: GatewayLogger) {
        this.remainingNft = new CacheValue<number>(5_000, 'remainingNfts');
        this.boughtAmount = new CacheMap<string, number>(15_000, 'boughtAmount');
        this.hasDiscount = new CacheMap<string, boolean>(3_600_000, 'hasDiscount');
        this.whitelisted = new CacheMap<string, boolean>(3_600_000, 'isWhitelisted');
    }
}

export class CacheValue<T> {

    private cachedValue: Promise<T> | undefined;
    private expireTimestamp: number | undefined;
    private readonly key: string;

    constructor(
        private readonly msTTL: number,
        key: string
    ) {
        const PREFIX = 'apc-cache:';
        this.key = PREFIX + key;

        this.loadFromStorage();
    }

    private async saveToStorage() {
        window.sessionStorage.setItem(this.key, JSON.stringify({
            value: await this.cachedValue,
            expireAt: this.expireTimestamp
        }));
    }

    private loadFromStorage() {
        const value = window.sessionStorage.getItem(this.key);

        if (value) {
            const parsed = JSON.parse(value);
            this.cachedValue = Promise.resolve(parsed.value as T);
            this.expireTimestamp = parsed.expireAt;
        }
    }

    public get(getter: () => Promise<T>): Promise<T> {
        if (this.cachedValue != null && this.isCacheValid()) {
            return this.cachedValue;
        }
        else {
            this.cachedValue = getter();
            this.expireTimestamp = Date.now() + this.msTTL;

            this.saveToStorage();

            return this.cachedValue;
        }
    }

    public clear(): void {
        this.expireTimestamp = undefined;
        this.cachedValue = undefined;

        window.sessionStorage.removeItem(this.key);
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
        private readonly keyPrefix: string
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
            const value = new CacheValue<V>(this.msTTL, this.keyPrefix + '#' + key);
            this.map.set(key, value);

            return value;
        }
    }

    public clear(): void {
        this.map.clear();
    }
}