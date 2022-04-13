import { API } from 'config';
import { useFetchWithAddress } from './useFetchWithAddress';

export const useHasDiscount = () => {

    const fetchObject = useFetchWithAddress<boolean>(
        (addr) => API.hasDiscount(addr),
        Promise.resolve(false)
    );

    return {
        hasDiscount: fetchObject.output,
        refresh: fetchObject.refresh
    };
};