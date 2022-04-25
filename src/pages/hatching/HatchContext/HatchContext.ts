import { createContext } from 'react';
import { HatchStatus } from 'structs/HatchStatus';

interface Context {
    hatchStatus: HatchStatus;
    isHatchingVideoEnded: boolean;
    onHatched: (fn: () => void) => void,
    setHatchingVideoAsEnded: () => void,
    hatchSessionId: string | null,
    setHatchSessionId: (sessionId: string | null) => void,
    hatchHash: string | null
}

const HatchContext = createContext<Context>({
    hatchStatus: HatchStatus.None,
    isHatchingVideoEnded: false,
    onHatched: () => { },
    setHatchingVideoAsEnded: () => { },
    hatchSessionId: null,
    setHatchSessionId: () => { },
    hatchHash: null
});

export default HatchContext;