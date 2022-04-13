import { BigNumber } from 'bignumber.js';
import { mintConfig } from 'config';
import { useHasDiscount } from './useHasDiscount';

export const useGetPriceList = (): BigNumber[] | undefined => {

    const { hasDiscount } = useHasDiscount();

    if (hasDiscount != undefined) {
        if (hasDiscount) {
            console.log('Using discount price list');
            return mintConfig.reducedPriceList;
        }
        else {
            console.log('Using normal price list');
            return mintConfig.fullPriceList;
        }
    }

    return undefined;
};