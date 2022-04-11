import { API } from 'config';
import { useFetch } from './useFetch';

export const useGetRemainingNfts = () => {
    return useFetch(API.getRemainingNfts());
};