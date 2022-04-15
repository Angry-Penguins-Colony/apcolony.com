import { BigNumber } from 'bignumber.js';
import { mintConfig } from 'config';
import { MintCurrency } from 'pages/Home/Mint/MintCurrency';
import { useHasDiscount } from './useHasDiscount';

export const useGetPriceList = (mintCurrency = MintCurrency.eGLD): BigNumber[] | undefined => {

    const { hasDiscount } = useHasDiscount();

    switch (mintCurrency) {
        case MintCurrency.eGLD:

            if (hasDiscount != undefined) {
                if (hasDiscount) {
                    return mintConfig.reducedPriceList;
                }
                else {
                    return mintConfig.fullPriceList;
                }
            }

            return undefined;

        case MintCurrency.LKMex:
            return mintConfig.lkMexPriceList;

        default:
            throw new Error('Not implemented for mint currency');
    }
};