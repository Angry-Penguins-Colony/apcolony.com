import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import { devModeActivate, lkMexTicker as lkMexTicker } from 'config';
import { MintCurrency } from 'pages/Home/Mint/MintCurrency';
import { GatewayCaching } from './GatewayCaching';
import { GatewayLogger } from './GatewayLogger';

interface Nft {
    id: string;
    balance: BigNumber;
}

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

    public async getLkmexBalance(address: Address): Promise<BigNumber> {
        const lkmexTokens = await this.getLkmexTokens(address);

        const sum = new BigNumber(0);

        lkmexTokens.forEach(a => sum.plus(a.balance));

        return sum;
    }

    public getLkmexTokens(address: Address): Promise<Nft[]> {
        return this.getNftsByTicker(address, lkMexTicker);
    }

    private async getNftsByTicker(address: Address, ticker: string): Promise<Nft[]> {
        const nfts = await this.getNfts(address);

        return nfts.filter(nft => nft.id == ticker);
    }

    private async getNfts(address: Address): Promise<Nft[]> {

        this.logger.logFetch('getNfts');

        const url = this.url + '/address/' + address.bech32() + '/esdt';

        const response = await fetch(url);
        const json = await response.json();


        const esdts = json.data.esdts;

        const nfts: Nft[] = [];

        for (const esdt in esdts) {
            const nft = esdts[esdt];

            nfts.push({
                id: esdt,
                balance: new BigNumber(nft.balance)
            });
        }

        return nfts;
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