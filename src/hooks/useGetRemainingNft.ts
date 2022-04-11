import { API } from 'config';
import { useFetch } from './useFetch';

export const useGetRemainingNfts = () => {

    const { output, refresh } = useFetch(API.getRemainingNfts());
    return {
        remainingNfts: output,
        refresh: () => {
            API.clearCache();
            refresh();
        }
    };
};