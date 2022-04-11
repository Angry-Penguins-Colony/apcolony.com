import { priceList } from 'config';

export const useGetPriceList = () => {
    // TODO: return reduced price if whitelisted
    return priceList;
};