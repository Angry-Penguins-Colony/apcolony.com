import { Address } from '@elrondnetwork/erdjs/out';
import { devModeActivate } from 'config';
import { GatewayLogger } from './GatewayLogger';

export class GatewayAPI {
    private readonly logger = new GatewayLogger(devModeActivate);

    constructor(public readonly url: string,
        public readonly mintAddress: Address) { }

    public getRemainingNfts(): Promise<number> {
        return this.queryInt('getRemainingNft');
    }

    public getMyBoughtNfts(address: Address) {
        return this.queryInt('getBoughtAmount', [address.hex()]);
    }

    private async queryInt(funcName: string, args = [] as any[]): Promise<number> {

        this.logger.logFetch(`Querying ${funcName}`);

        const url = this.url + '/vm-values/int';
        const data = {
            'scAddress': this.mintAddress.bech32(),
            'funcName': funcName,
            'args': args
        };

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

// getBoughtAmount