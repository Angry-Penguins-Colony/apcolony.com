import { useContext } from 'react';
import HatchContext from 'pages/hatching/HatchContext/HatchContext';
import { HatchStatus } from '../../../structs/HatchStatus';

export function useGetHatchStatus(props?: {
    onHatched?: () => void
}): HatchStatus {

    const context = useContext(HatchContext);


    if (props && props.onHatched) {
        context.onHatched(props.onHatched);
    }

    return context.hatchStatus;
} 