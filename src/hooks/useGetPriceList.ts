import { fullPriceList } from 'config';

export const useGetPriceList = () => {
    // TODO: return reduced price if whitelisted
    return fullPriceList;
};