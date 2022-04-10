import React from 'react';
import { gateway, mintAddress } from 'config';

export const useGetRemainingNfts = () => {
    const [balance, setBalance] = React.useState<undefined | number>(undefined);

    React.useEffect(() => {
        const getBalance = async () => {

            const url = gateway + '/vm-values/int';
            const data = {
                'scAddress': mintAddress,
                'funcName': 'get_remaining_nft'
            };


            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const json = await response.json();

            setBalance(parseInt(json.data.data));
        };

        getBalance();
    }, []);

    return balance;
};