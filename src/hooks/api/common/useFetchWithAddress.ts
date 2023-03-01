import React from 'react';
import { Address } from '@elrondnetwork/erdjs/out';
import { useGetAccountInfo } from '@multiversx/sdk-dapp/hooks';

export const useFetchWithAddress = <T>(
    hasAddress: (addr: Address) => Promise<T>,
    noAddress: Promise<T>
) => {
    const [output, setOutput] = React.useState<undefined | T>(undefined);
    const { address } = useGetAccountInfo();

    const selectPromise = (): Promise<T> => {
        return address ? hasAddress(Address.fromBech32(address)) : noAddress;
    };

    const refresh = async () => {
        const value = await selectPromise();

        setOutput(value);

        return value;
    };

    React.useEffect(() => {
        refresh();
    }, []);

    return { output, refresh };
};