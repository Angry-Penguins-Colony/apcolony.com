import React from 'react';
import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Address } from '@elrondnetwork/erdjs/out';

export const useFetchWithAddress = <T>(
    hasAddress: (addr: Address) => Promise<T>,
    noAddress: Promise<T>
) => {
    const [output, setOutput] = React.useState<undefined | T>(undefined);
    const { address } = useGetAccountInfo();

    const selectPromise = (): Promise<T> => {
        return address ? hasAddress(Address.fromBech32(address)) : noAddress;
    };

    const refresh = () => {
        selectPromise()
            .then(setOutput);
    };

    React.useEffect(() => {
        refresh();
    }, []);

    return { output, refresh };
};