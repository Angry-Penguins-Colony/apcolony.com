import { mintConfig } from 'config';

export const useGetMaxPerWallet = () => {
    return mintConfig.maxPerWallet;
};