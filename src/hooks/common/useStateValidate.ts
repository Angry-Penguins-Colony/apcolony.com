import React from 'react';

export const useStateValidate = <T>(initial: T, validate: (input: T) => T): [
    T,
    (input: T) => void
] => {

    const [state, setState] = React.useState<T>(initial);

    const customSetState = (input: T) => {
        const validated = validate(input);
        setState(validated);
    };

    return [state, customSetState];
};