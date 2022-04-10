import React from 'react';
import { API } from 'config';

export const useGetRemainingNfts = () => {
    const [balance, setBalance] = React.useState<undefined | number>(undefined);

    React.useEffect(() => {
        API.getRemainingNfts()
            .then(blc => {
                setBalance(blc);
            });
    }, []);

    return balance;
};