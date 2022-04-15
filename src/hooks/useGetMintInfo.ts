import { MintCurrency } from 'pages/Home/Mint/MintCurrency';
import { useGetBalance } from './useGetBalance';
import { useGetMaxPerWallet } from './useGetMaxPerWallet';
import { useGetMyBoughtNfts } from './useGetMyBoughtNfts';
import { useGetPriceList } from './useGetPriceList';

export const useGetMintInfo = (mintCurrency: MintCurrency) => {


    if (mintCurrency == MintCurrency.LKMex) {
        throw new Error('Not implemented');
    }

    const priceList = useGetPriceList();
    const { boughtNfts, refresh } = useGetMyBoughtNfts();
    const maxPerWallet = useGetMaxPerWallet();
    const balance = useGetBalance();

    return {
        priceList: priceList,
        boughtNfts: boughtNfts,
        maxPerWallet: maxPerWallet,
        userBalance: balance,
        refreshInfo: () => {
            refresh();
        }
    };
};