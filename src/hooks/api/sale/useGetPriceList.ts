import { BigNumber } from 'bignumber.js';
import { mintConfig } from 'config';
import { useHasDiscount } from './useHasDiscount';

export const useGetPriceList = (): BigNumber[] | undefined => {

    const { hasDiscount } = useHasDiscount();

    if (hasDiscount != undefined) {
        if (hasDiscount) {
            return mintConfig.reducedPriceList;
        }
        else {
            return mintConfig.fullPriceList;
        }
    }

    return undefined;
};