import { Address } from '@elrondnetwork/erdjs/out';
import { devModeActivate } from 'config';
import { MintCurrency } from 'pages/Home/Mint/MintCurrency';
import { GatewayCaching } from './GatewayCaching';
import { GatewayLogger } from './GatewayLogger';

export class GatewayAPI {
    private readonly logger: GatewayLogger;
    private readonly cache: GatewayCaching;

    constructor(public readonly url: string,
        public readonly mintAddress: Address) {

        this.logger = new GatewayLogger(devModeActivate);
        this.cache = new GatewayCaching(this.logger);
    }

    public clearCache(): void {
        console.log('Cache cleared');

        this.cache.boughtAmount.clear();
        this.cache.remainingNft.clear();
    }

    public hasDiscount(address: Address): Promise<boolean> {
        return this.cache.hasDiscount.get(address.bech32(),
            () => this.queryBoolean('check_contains_second', [address.hex()]));
    }

    public isWhitelisted(address: Address): Promise<boolean> {
        return this.cache.whitelisted.get(address.bech32(),
            () => get(this));

        async function get(_this: GatewayAPI): Promise<boolean> {
            const result = await _this.queryBoolean('check_contains_second', [address.hex()]);

            if (result == true) return result;

            return _this.queryBoolean('check_contains_first', [address.hex()]);
        }
    }

    public async getRemainingNfts(): Promise<number> {
        const result = await this.cache.remainingNft.get(() => this.queryInt('getRemainingNft'));

        console.log(result);

        return result;
    }

    public getMyBoughtNfts(address: Address, mintCurrency = MintCurrency.eGLD) {

        if (mintCurrency == MintCurrency.LKMex) {
            // TODO:
            throw new Error('LKMex is not supported');
        }

        return this.cache.boughtAmount.get(address.bech32(),
            () => this.queryInt('getBoughtAmount', [address.hex()])
        );
    }

    private async queryBoolean(funcName: string, args = [] as any[]): Promise<boolean> {
        const value = await this.queryInt(funcName, args);

        return value == 1;
    }

    private async queryInt(funcName: string, args = [] as any[]): Promise<number> {

        this.logger.logFetch(`${funcName}`);

        const url = this.url + '/vm-values/int';
        const data = {
            'scAddress': this.mintAddress.bech32(),
            'funcName': funcName,
            'args': args
        };

        console.log('fetch');

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        const json = await response.json();

        return parseInt(json.data.data);
    }
}