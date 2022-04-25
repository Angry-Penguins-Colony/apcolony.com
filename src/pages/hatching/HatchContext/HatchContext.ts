import { createContext } from 'react';
import { HatchStatus } from 'structs/HatchStatus';

interface Context {
    hatchStatus: HatchStatus;
    isHatchingVideoEnded: boolean;
    onHatched: (fn: () => void) => void,
    setHatchingVideoAsEnded: () => void
}

const HatchContext = createContext<Context>({
    hatchStatus: HatchStatus.None,
    isHatchingVideoEnded: false,
    onHatched: () => { },
    setHatchingVideoAsEnded: () => { }
});

export default HatchContext;