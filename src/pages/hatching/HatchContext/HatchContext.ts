import { createContext } from 'react';
import { HatchStatus } from 'structs/HatchStatus';

const HatchContext = createContext({
    hatchStatus: HatchStatus.None,
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    onHatched: (fn: () => void) => { },
});

export default HatchContext;