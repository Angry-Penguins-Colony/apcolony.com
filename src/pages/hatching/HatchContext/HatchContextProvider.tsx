import * as React from 'react';
import { transactionServices } from '@elrondnetwork/dapp-core';
import { HatchStatus } from 'hooks/api/hatch/useGetHatchStatus';
import useGetHatchTransaction from 'hooks/api/hatch/useGetHatchTransaction';
import HatchContext from './HatchContext';

const HatchContextProvider = (props: any) => {

    const [hatchStatus, setHatchStatus] = React.useState(HatchStatus.None);
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

    return <HatchContext.Provider value={{ hatchStatus }}>
        {props.children}
    </HatchContext.Provider>;
};

export default HatchContextProvider;