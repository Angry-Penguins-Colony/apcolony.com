import React from 'react';

export const useFetch = <T>(promise: Promise<T>) => {
    const [output, setOutput] = React.useState<undefined | T>(undefined);

    React.useEffect(() => {
        promise.then(setOutput);
    }, []);

    return output;
};