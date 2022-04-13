import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import { environment } from 'config';
import { devnetConfig } from 'config-sc-devnet';
import { mainnetConfig } from 'config-sc-mainnet';

export interface MintConfig {
    contractAddress: Address;
    publicSaleOpen: Date;
    publicSaleClose: Date;
    maxPerWallet: number;
    fullPriceList: BigNumber[];
    reducedPriceList: BigNumber[];
}

// GET THEM FROM SC
export const getMintConfig = (): MintConfig => {
    switch (environment) {
        case 'mainnet':
            assertValid(mainnetConfig);
            return mainnetConfig;

        case 'devnet':
            assertValid(devnetConfig);
            return devnetConfig;

        default:
            throw new Error('Unknown environment: "' + environment + '"');
    }
};

function assertValid(config: MintConfig) {
    if (config.contractAddress.isEmpty()) {
        console.warn('Mint contract address is not set');
    }
}