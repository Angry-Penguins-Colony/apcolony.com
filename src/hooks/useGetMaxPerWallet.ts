import { mintConfig } from 'config';
import { MintCurrency } from 'pages/Home/Mint/MintCurrency';

export const useGetMaxPerWallet = (mintCurrency = MintCurrency.eGLD) => {
    switch (mintCurrency) {
        case MintCurrency.eGLD:
            return mintConfig.maxPerWallet;

        case MintCurrency.LKMex:
            return mintConfig.lkMexMaxPerWallet;

        default:
            throw new Error('Not implemented for mint currency');
    }
};