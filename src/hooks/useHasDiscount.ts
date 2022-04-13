import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Address } from '@elrondnetwork/erdjs/out';
import { API } from 'config';
import { useFetch } from './useFetch';

export const useHasDiscount = () => {

    const { address } = useGetAccountInfo();

    const fetchDiscount = async (): Promise<boolean> => {
        if (address) {
            return API.hasDiscount(Address.fromBech32(address));
        }
        else {
            console.warn('Cannot refresh hasDiscount because address is undefined');
            return false;
        }
    };
    const fetchObject = useFetch<boolean>(fetchDiscount());

    return {
        hasDiscount: fetchObject.output,
        refresh: fetchObject.refresh
    };
};