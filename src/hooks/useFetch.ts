import React from 'react';

export const useFetch = <T>(promise: Promise<T>) => {
    const [output, setOutput] = React.useState<undefined | T>(undefined);

    const refresh = () => promise.then(setOutput);

    React.useEffect(() => {
        refresh();
    }, []);

    return { output, refresh };
};