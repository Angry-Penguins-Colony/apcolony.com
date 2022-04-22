import React from 'react';
import { transactionServices } from '@elrondnetwork/dapp-core';
import useGetHatchTransaction from './useGetHatchTransaction';

export enum HatchStatus {
    None = 'None',
    Hatching = 'Hatching',
    Hatched = 'Hatched'
}

export function useGetHatchStatus(props?: {
    onHatched?: () => void
}): HatchStatus {

    const hatchSessionId = useGetHatchTransaction();
    const [hatchStatus, setHatchStatus] = React.useState(HatchStatus.None);

    const transactionStatus = transactionServices.useTrackTransactionStatus({
        transactionId: hatchSessionId
    });

    if (hatchSessionId == null) {
        if (hatchStatus != HatchStatus.None) {
            setHatchStatus(HatchStatus.None);
        }
    }
    else {
        if (transactionStatus.isCompleted) {
            if (hatchStatus != HatchStatus.Hatched) {
                setHatchStatus(HatchStatus.Hatched);

                if (props && props.onHatched) {
                    props.onHatched();
                }
            }
        }
        else {
            if (hatchStatus != HatchStatus.Hatching) {
                setHatchStatus(HatchStatus.Hatching);
            }
        }
    }

    console.log('Current hatchStatus: ' + hatchStatus);
    return hatchStatus;
} 