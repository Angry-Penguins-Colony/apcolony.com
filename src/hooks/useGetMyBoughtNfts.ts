import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Address } from '@elrondnetwork/erdjs/out';
import { API } from 'config';
import { useFetch } from './useFetch';

export const useGetMyBoughtNfts = () => {
    const { address } = useGetAccountInfo();

    const o = useFetch(API.getMyBoughtNfts(Address.fromBech32(address)));
    return {
        boughtNfts: o.output,
        refresh: o.refresh
    };
};