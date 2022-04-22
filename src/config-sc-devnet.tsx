import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import { HatchConfig } from 'structs/HatchConfig';
import { MintConfig } from 'structs/MintConfig';

const hatchInfos = { 'hatchAddresses': ['erd1qqqqqqqqqqqqqpgq89fge6p8rffmkzz3c4hpqnh9t05t7jkvgn2q6taupc', 'erd1qqqqqqqqqqqqqpgqk8qtsgfthheq2jjwdhujsnapja0v6vp5gn2qlpvcus', 'erd1qqqqqqqqqqqqqpgqjsjzvd6sdm75xc624e9atyfef4425swfgn2q6ac597'], 'eggsIdentifier': 'EGGS-69bc74', 'penguinsIdentifier': 'APC-325cf5' };

export const devnetHatchConfig: HatchConfig = {
    hatchAddress: new Address(hatchInfos.hatchAddresses[0]),
    eggsIdentifier: hatchInfos['eggsIdentifier'],
    penguinsIdentifier: hatchInfos['penguinsIdentifier']
};

export const devnetMintConfig: MintConfig = {
    contractAddress: new Address('erd1qqqqqqqqqqqqqpgqd8cz8uhsezxzpgqlrasag05g45xyuxnx2c8q2e9u4j'),
    publicSaleOpen: new Date('Thu, 14 Apr 2022 16:28:27 GMT'),
    whitelistedOpen: new Date('Thu, 14 Apr 2022 15:58:27 GMT'),
    publicSaleClose: new Date('Sun, 17 Apr 2022 16:28:27 GMT'),
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