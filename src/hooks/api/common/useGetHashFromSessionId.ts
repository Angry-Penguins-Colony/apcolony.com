import { SignedTransactionsType, transactionServices } from '@elrondnetwork/dapp-core';

export default function useGetHashFromSessionId(sessionId: string | null) {

    const { pendingTransactions } = transactionServices.useGetPendingTransactions();
    const { successfulTransactions } = transactionServices.useGetSuccessfulTransactions();

    if (sessionId == null) return null;

    const pendingHash = getHash(sessionId, pendingTransactions);
    if (pendingHash) return pendingHash;

    const successfulHash = getHash(sessionId, successfulTransactions);
    if (successfulHash) return successfulHash;

    return null;
}

function getHash(sessionId: string, txs: SignedTransactionsType) {
    for (const txId in txs) {

        if (txId === sessionId) {
            const { transactions } = txs[sessionId];

            if (transactions) {
                return transactions[0].hash;
            }
        }
    }

    return null;
}