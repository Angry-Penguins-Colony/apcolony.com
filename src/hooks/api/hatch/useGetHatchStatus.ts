import { useContext } from 'react';
import HatchContext from 'pages/hatching/HatchContext/HatchContext';

export enum HatchStatus {
    None = 'None',
    Hatching = 'Hatching',
    Hatched = 'Hatched'
}

export function useGetHatchStatus(props?: {
    onHatched?: () => void
}): HatchStatus {

    const { hatchStatus } = useContext(HatchContext);

    return hatchStatus;
} 