import React from 'react';
import { transactionServices } from '@elrondnetwork/dapp-core';

export const useOnAnyTransactionSuccess = (onSuccess: (sessionId: string) => void) => {

    const [sessionIdTriggered, setTriggeredSessionId] = React.useState([] as string[]);

    const { successfulTransactions } = transactionServices.useGetSuccessfulTransactions();

    for (const sessionId in successfulTransactions) {

        if (sessionIdTriggered.indexOf(sessionId) != -1)
            continue;

        onSuccess(sessionId);

        sessionIdTriggered.push(sessionId);
        setTriggeredSessionId(sessionIdTriggered);
    }
};