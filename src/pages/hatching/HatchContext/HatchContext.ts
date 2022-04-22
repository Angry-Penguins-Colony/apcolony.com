import { createContext } from 'react';
import { HatchStatus } from 'hooks/api/hatch/useGetHatchStatus';

const HatchContext = createContext({
    hatchStatus: HatchStatus.None
});

export default HatchContext;