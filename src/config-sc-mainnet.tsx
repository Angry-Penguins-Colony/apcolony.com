import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import { MintConfig } from 'structs/MintConfig';

const publicSaleOpen = new Date('14 April 2022 19:00:00 UTC');
const threeDays = 60 * 60 * 24 * 3;
const thirtyMinutes = 60 * 30;

export const mainnetConfig: MintConfig = {
    contractAddress: new Address(''),
    publicSaleOpen: publicSaleOpen,
    publicSaleClose: new Date(publicSaleOpen.getTime() + threeDays * 1000),
    whitelistedOpen: new Date(publicSaleOpen.getTime() - thirtyMinutes * 1000),
    maxPerWallet: 20,
    fullPriceList: [
        '1e18',
        '1e18',
        '0.95e18',
        '0.95e18',
        '0.92e18',
        '0.92e18',
        '0.9e18',
        '0.9e18',
        '0.875e18',
        '0.85e18',
        '0.85e18',
        '0.85e18',
        '0.85e18',
        '0.85e18',
        '0.85e18',
        '0.85e18',
        '0.85e18',
        '0.85e18',
        '0.85e18',
        '0.80e18',

    ].map(n => new BigNumber(n)),

    reducedPriceList: [
        '0.9e18',
        '0.9e18',
        '0.875e18',
        '0.875e18',
        '0.85e18',
        '0.85e18',
        '0.825e18',
        '0.825e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.8e18',
        '0.75e18',
    ].map(n => new BigNumber(n))
};