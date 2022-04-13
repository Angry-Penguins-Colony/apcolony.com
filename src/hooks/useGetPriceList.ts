import { mintConfig } from 'config';

export const useGetPriceList = () => {
    // TODO: return reduced price if whitelisted
    return mintConfig.fullPriceList;
};