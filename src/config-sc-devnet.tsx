import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import { MintConfig } from 'structs/MintConfig';

const publicSaleOpen = new Date('11 April 2022 17:00:00 UTC');

export const devnetConfig: MintConfig = {

    contractAddress: new Address('erd1qqqqqqqqqqqqqpgq7hfgu77wfla4nwg6n3glkkl6p89ly3zk2c8qw7440k'),
    publicSaleOpen: publicSaleOpen,
    publicSaleClose: new Date(publicSaleOpen.getTime() + 60 * 60 * 24 * 3 * 1000),
    maxPerWallet: 20,
    fullPriceList: [
        100 + '0'.repeat(16),
        100 + '0'.repeat(16),
        950 + '0'.repeat(15),
        950 + '0'.repeat(15),
        920 + '0'.repeat(15),
        920 + '0'.repeat(15),
        900 + '0'.repeat(15),
        900 + '0'.repeat(15),
        875 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        800 + '0'.repeat(15),

    ].map(n => new BigNumber(n)),

    reducedPriceList: [
        0.9,
        0.9,
        0.875,
        0.875,
        0.85,
        0.85,
        0.825,
        0.825,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.8,
        0.75
    ].map(n => new BigNumber(n))
};