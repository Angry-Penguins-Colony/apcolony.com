import { Address } from '@elrondnetwork/erdjs/out';

export class GatewayAPI {
    constructor(public readonly url: string,
        public readonly mintAddress: Address) { }

    public async getRemainingNfts(): Promise<number> {
        const url = this.url + '/vm-values/int';
        const data = {
            'scAddress': this.mintAddress.bech32(),
            'funcName': 'get_remaining_nft'
        };

        console.log('Fetching remaining nfts');

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