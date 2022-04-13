import { API } from 'config';
import { useFetchWithAddress } from './useFetchWithAddress';

export const useIsWhitelisted = () => {
    const data = useFetchWithAddress(
        (addr) => API.isWhitelisted(addr),
        Promise.resolve(false)
    );

    return {
        isWhitelisted: data.output,
        refresh: data.refresh
    };
};