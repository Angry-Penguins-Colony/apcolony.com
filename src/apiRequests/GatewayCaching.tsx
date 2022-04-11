import { Address } from '@elrondnetwork/erdjs/out';
import { GatewayLogger } from './GatewayLogger';

export class GatewayCaching {

    public readonly boughtAmount: CacheMap<Address, number>;
    public readonly remainingNft: CacheValue<number>;

    constructor(private readonly logger: GatewayLogger) {
        this.boughtAmount = new CacheMap<Address, number>(2500, logger, 'boughtAmount');
        this.remainingNft = new CacheValue<number>(2500, logger, 'remainingNft');
    }
}

export class CacheValue<T> {

    private cachedValue: Promise<T> | undefined;

    constructor(
        private readonly msTTL: number,
        private readonly logger: GatewayLogger,
        private readonly logContent: string
    ) { }

    public get(getter: () => Promise<T>): Promise<T> {
        if (this.cachedValue) {
            this.logger.logCache(this.logContent);
            return this.cachedValue;
        }
        else {
            this.cachedValue = getter();
            return this.cachedValue;
        }
    }
}

export class CacheMap<K, V> {
    private readonly map = new Map<K, V>();

    constructor(
        private readonly msTTL: number,
        private readonly logger: GatewayLogger,
        private readonly logContent: string
    ) { }

    // TODO: use msTTL to refresh
    public async get(key: K, fallback: () => Promise<V>): Promise<V> {
        const cached = this.map.get(key);

        if (cached) {
            this.logger.logCache(this.logContent);
            return cached;
        }
        else {
            const value = await fallback();
            this.map.set(key, value);

            return value;
        }
    }

    public clear(): void {
        this.map.clear();
    }
}