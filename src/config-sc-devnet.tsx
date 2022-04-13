import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import { MintConfig } from 'structs/MintConfig';

const publicSaleOpen = new Date('Wed, 13 Apr 2022 18:18:07 GMT');
const threeDays = 60 * 60 * 24 * 3;
const thirtyMinutes = 60 * 10;


export const devnetConfig: MintConfig = {
    contractAddress: new Address('erd1qqqqqqqqqqqqqpgqgdvnzduxylk6nyrja8llptf52lxs0yvp2c8qld82qx'),
    publicSaleOpen: publicSaleOpen,
    publicSaleClose: new Date(publicSaleOpen.getTime() + threeDays * 1000),
    whitelistedOpen: new Date(publicSaleOpen.getTime() - thirtyMinutes * 1000),
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