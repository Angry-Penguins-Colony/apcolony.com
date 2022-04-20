import { API } from 'config';
import { useFetchWithAddress } from '../common/useFetchWithAddress';

export const useGetMyBoughtNfts = () => {
    const o = useFetchWithAddress<number>(
        (address) => API.getMyBoughtNfts(address),
        Promise.resolve(0)
    );

    return {
        boughtNfts: o.output,
        refresh: o.refresh
    };
};