import { MintCurrency } from 'pages/Home/Mint/MintCurrency';
import { useGetBalance } from './useGetBalance';
import { useGetMaxPerWallet } from './useGetMaxPerWallet';
import { useGetMyBoughtNfts } from './useGetMyBoughtNfts';
import { useGetPriceList } from './useGetPriceList';

export const useGetMintInfo = (mintCurrency: MintCurrency) => {




    const priceList = useGetPriceList(mintCurrency);
    const { boughtNfts, refresh } = useGetMyBoughtNfts(mintCurrency);
    const maxPerWallet = useGetMaxPerWallet(mintCurrency);
    const balance = useGetBalance();

    if (mintCurrency == MintCurrency.LKMex) {
        throw new Error('Not implemented for balance');
    }


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