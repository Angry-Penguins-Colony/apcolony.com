import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import { MintConfig } from 'structs/MintConfig';

const publicSaleOpen = new Date('14 April 2022 17:00:00 UTC');

export const mainnetConfig: MintConfig = {
    contractAddress: new Address(''),
    publicSaleOpen: publicSaleOpen,
    publicSaleClose: new Date(publicSaleOpen.getTime() + 60 * 60 * 24 * 3 * 1000),
    whitelistedOpen: new Date(publicSaleOpen.getTime() + 60 * 30),
    maxPerWallet: 20,
    fullPriceList: [
        1000 + '0'.repeat(15),
        1000 + '0'.repeat(15),
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
        900 + '0'.repeat(15),
        900 + '0'.repeat(15),
        875 + '0'.repeat(15),
        875 + '0'.repeat(15),
        850 + '0'.repeat(15),
        850 + '0'.repeat(15),
        825 + '0'.repeat(15),
        825 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        800 + '0'.repeat(15),
        750 + '0'.repeat(15)
    ].map(n => new BigNumber(n))
};