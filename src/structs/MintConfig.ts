import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';

export interface MintConfig {
    contractAddress: Address;
    publicSaleOpen: Date;
    publicSaleClose: Date;
    whitelistedOpen: Date;
    maxPerWallet: number;
    lkMexPriceList: BigNumber[];
    lkMexMaxPerWallet: number;
    fullPriceList: BigNumber[];
    reducedPriceList: BigNumber[];
}

export function assertValid(config: MintConfig) {
    if (config.contractAddress.isEmpty()) {
        console.warn('Mint contract address is not set');
    }
}