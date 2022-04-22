import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import { EggTier } from 'structs/EggTier';
import { HatchConfig } from 'structs/HatchConfig';
import { MintConfig } from 'structs/MintConfig';


export const mainnetHatchConfig: HatchConfig = {
    hatchAddresses: new Map<EggTier, Address>(),
    eggsIdentifier: 'EGGS-502867',
    penguinsIdentifier: ''
};


export const mainnetMintConfig: MintConfig = {
    contractAddress: new Address('erd1qqqqqqqqqqqqqpgqe3qs6n7y5dkwsrydj82azdzxxdv66pkqv86q7782da'),
    publicSaleOpen: new Date('14 April 2022 19:00:00 UTC'),
    publicSaleClose: new Date('17 April 2022 19:00:00 UTC'),
    whitelistedOpen: new Date('14 April 2022 18:30:00 UTC'),
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