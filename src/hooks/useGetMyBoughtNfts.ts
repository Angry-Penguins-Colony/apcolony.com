import { API } from 'config';
import { MintCurrency } from 'pages/Home/Mint/MintCurrency';
import { useFetchWithAddress } from './useFetchWithAddress';

export const useGetMyBoughtNfts = (mintCurrency = MintCurrency.eGLD) => {
    const o = useFetchWithAddress<number>(
        (address) => API.getMyBoughtNfts(address, mintCurrency),
        Promise.resolve(0)
    );

    return {
        boughtNfts: o.output,
        refresh: o.refresh
    };
};