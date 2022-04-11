import { refreshAccount, transactionServices } from '@elrondnetwork/dapp-core';
import { mintAddress } from 'config';

export default async function mintEggs(egld: number, eggsCount: number) {

    const { sendTransactions } = transactionServices;

    await refreshAccount();

    const customizeTransaction = {
        value: egld,
        data: 'buy',
        receiver: mintAddress,
        gasLimit: 20_000_000
    };

    const { sessionId } = await sendTransactions({
        transactions: customizeTransaction,
        transactionsDisplayInfo: {
            processingMessage: `Mint ${eggsCount} eggs`,
            errorMessage: 'An error has occured during minting',
            successMessage: `${eggsCount} eggs minted`,
            transactionDuration: 50000
        }
    });

    return sessionId;
}