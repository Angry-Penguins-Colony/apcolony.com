import { Address } from '@elrondnetwork/erdjs/out';
import { devModeActivate } from 'config';
import { NFT } from 'structs/NFT';
import { cut_nonce } from 'utils/string';
import { GatewayCaching } from './GatewayCaching';
import { GatewayLogger } from './GatewayLogger';

export class GatewayAPI {
    private readonly logger: GatewayLogger;
    private readonly cache: GatewayCaching;

    constructor(public readonly baseURL: string,
        public readonly mintAddress: Address) {

        this.logger = new GatewayLogger(devModeActivate);
        this.cache = new GatewayCaching(this.logger);
    }

    public clearCache(): void {
        console.log('Cache cleared');

        this.cache.boughtAmount.clear();
        this.cache.remainingNft.clear();
    }

    public async getNfts(address: Address, ...identifier: string[]): Promise<NFT[]> {

        if (identifier.includes('')) {
            throw new Error('An identifier is empty in ' + identifier);
        }

        const nfts = await this.cache.nfts
            .get(address.bech32(), async () => {
                const response = await this.get('/address/' + address.bech32() + '/esdt/');

                console.log(response);
                const esdts = response.data.esdts;
                const output = [] as NFT[];

                for (const id in esdts) {

                    const esdt = esdts[id];

                    // skip tokens
                    if (esdt.nonce == undefined) continue;

                    const nft = {
                        name: esdt.name,
                        identifier: cut_nonce(esdt.tokenIdentifier),
                        nonce: parseInt(esdt.nonce),
                        uri: esdt.uris,
                        balance: parseInt(esdt.balance)
                    };

                    output.push(nft);
                }

                return output;
            });

        return nfts
            .filter(nft => identifier.includes(nft.identifier));
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

    public getMyBoughtNfts(address: Address) {

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

        const url = this.baseURL + '/vm-values/int';
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

    public async get(url: string) {
        this.logger.logFetch(`${url}`);

        const response = await fetch(this.baseURL + url, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        });
        const json = await response.json();

        return json;
    }
}