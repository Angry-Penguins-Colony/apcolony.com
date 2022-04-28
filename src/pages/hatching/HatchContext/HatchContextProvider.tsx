import { EventEmitter } from 'events';
import * as React from 'react';
import { transactionServices } from '@elrondnetwork/dapp-core';
import useGetHashFromSessionId from 'hooks/api/common/useGetHashFromSessionId';
import { HatchStatus } from 'structs/HatchStatus';
import { getSessionIdFromSearchParams } from 'utils/misc';
import HatchContext from './HatchContext';

const EVENT_ON_HATCHED = 'onHatched';

const HatchContextProvider = (props: any) => {

    const events = new EventEmitter();

    const [hatchStatus, setHatchStatus] = React.useState(HatchStatus.None);
    const [isHatchingVideoEnded, setIsHatchingVideoEnded] = React.useState(false);
    const [hatchSessionId, setHatchSessionId] = React.useState<string | null>(null);

    const hatchHash = useGetHashFromSessionId(hatchSessionId);

    const transactionStatus = transactionServices.useTrackTransactionStatus({
        transactionId: hatchSessionId,
    });

    // updates values
    getHatchSessionFromUrl();
    updateHatchStatus();

    const value = buildValue();
    return <HatchContext.Provider value={value} >
        {props.children}
    </HatchContext.Provider >;


    function getHatchSessionFromUrl() {
        const sessionId = getSessionIdFromSearchParams();
        if (hatchSessionId == null) {
            if (sessionId != hatchSessionId) {
                setHatchSessionId(sessionId);
            }
        }
    }

    function buildValue() {
        return {
            hatchStatus: hatchStatus,
            onHatched: (fn: () => void) => {
                events.addListener(EVENT_ON_HATCHED, fn);
            },
            setHatchingVideoAsEnded: () => {
                setIsHatchingVideoEnded(true);
            },
            isHatchingVideoEnded: isHatchingVideoEnded,
            hatchSessionId,
            setHatchSessionId: (newSessionId: string | null) => setHatchSessionId(newSessionId),
            hatchHash,
        };
    }

    function updateHatchStatus() {
        if (hatchSessionId == null || hatchHash == null) {
            if (hatchStatus != HatchStatus.None) {
                setHatchStatus(HatchStatus.None);
            }
        }
        else {
            if (transactionStatus.isSuccessful || isHatchingVideoEnded) {
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
    }
};

export default HatchContextProvider;