import { SignedTransactionType, transactionServices, useGetAccountInfo, useGetSignedTransactions } from '@elrondnetwork/dapp-core';
import { Address } from '@elrondnetwork/erdjs/out';
import toHex from 'to-hex';

export default function useGetHatchTransaction() {
    const { address: bech32 } = useGetAccountInfo();
    const address = new Address(bech32);

    const { pendingTransactions } = transactionServices.useGetPendingTransactions();
    const { successfulTransactions } = transactionServices.useGetSuccessfulTransactions();
    const { signedTransactions } = useGetSignedTransactions();

    for (const sessionId in pendingTransactions) {

        const { transactions } = signedTransactions[sessionId];

        if (isHatchTransaction(transactions, address)) {
            return { sessionId, hash: transactions[0].hash };
        }
    }

    for (const sessionId in successfulTransactions) {

        const { transactions } = signedTransactions[sessionId];

        if (isHatchTransaction(transactions, address)) {
            return { sessionId, hash: transactions[0].hash };
        }
    }

    return {
        sessionId: null,
        hash: null
    };
}

function isHatchTransaction(transactions: SignedTransactionType[], address: Address) {

    if (transactions == undefined) return false;

    const data = Buffer.from(transactions[0].data, 'base64').toString();

    return transactions[0].receiver === address.bech32()
        && transactions[0].sender === address.bech32()
        && data.includes(toHex('hatch'));
}