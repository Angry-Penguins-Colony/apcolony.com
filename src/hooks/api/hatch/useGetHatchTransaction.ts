import { transactionServices, useGetAccountInfo, useGetSignedTransactions } from '@elrondnetwork/dapp-core';

export default function useGetHatchTransaction(): string | null {
    const { address } = useGetAccountInfo();

    const { pendingTransactions } = transactionServices.useGetPendingTransactions();
    const { signedTransactions } = useGetSignedTransactions();

    for (const sessionId in pendingTransactions) {

        const { transactions } = signedTransactions[sessionId];

        if (transactions == undefined) continue;

        const data = Buffer.from(transactions[0].data, 'base64').toString();
        console.log(data);

        if (transactions[0].receiver === address && transactions[0].sender === address && data.includes('hatch')) {
            console.log('Found hatch transaction: ' + sessionId);
            return sessionId;
        }
    }

    return null;
}