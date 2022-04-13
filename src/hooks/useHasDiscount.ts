import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Address } from '@elrondnetwork/erdjs/out';
import { API } from 'config';
import { useFetch } from './useFetch';

export const useHasDiscount = () => {

    const { address } = useGetAccountInfo();

    const fetchObject = useFetch(API.hasDiscount(Address.fromBech32(address)));
    return {
        hasDiscount: fetchObject.output,
        refresh: fetchObject.refresh
    };
};