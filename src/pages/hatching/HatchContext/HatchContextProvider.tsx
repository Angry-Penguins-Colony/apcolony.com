import { EventEmitter } from 'events';
import * as React from 'react';
import { transactionServices } from '@elrondnetwork/dapp-core';
import useGetHatchTransaction from 'hooks/api/hatch/useGetHatchTransaction';
import { HatchStatus } from 'structs/HatchStatus';
import HatchContext from './HatchContext';

const EVENT_ON_HATCHED = 'onHatched';

const HatchContextProvider = (props: any) => {

    const events = new EventEmitter();

    const [hatchStatus, setHatchStatus] = React.useState(HatchStatus.None);
    const [isHatchingVideoEnded, setIsHatchingVideoEnded] = React.useState(false);
    const { sessionId: hatchSessionId } = useGetHatchTransaction();

    const transactionStatus = transactionServices.useTrackTransactionStatus({
        transactionId: hatchSessionId
    });

    if (hatchSessionId == null) {
        if (hatchStatus != HatchStatus.None) {
            setHatchStatus(HatchStatus.None);
        }
    }
    else {
        if (transactionStatus.isSuccessful) {
            if (hatchStatus != HatchStatus.Hatched) {
                setHatchStatus(HatchStatus.Hatched);

                events.emit(EVENT_ON_HATCHED);
            }
        }
        else {
            if (hatchStatus != HatchStatus.Hatching) {
                setHatchStatus(HatchStatus.Hatching);
            }
        }
    }

    const value = {
        hatchStatus: hatchStatus,
        onHatched: (fn: () => void) => {
            events.addListener(EVENT_ON_HATCHED, fn);
        },
        setHatchingVideoAsEnded: () => {
            setIsHatchingVideoEnded(true);
        },
        isHatchingVideoEnded: isHatchingVideoEnded
    };

    console.log('hatchstatus', hatchStatus);

    return <HatchContext.Provider value={value} >
        {props.children}
    </HatchContext.Provider >;

};

export default HatchContextProvider;