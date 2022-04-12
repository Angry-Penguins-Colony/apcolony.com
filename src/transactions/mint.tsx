import { refreshAccount, transactionServices } from '@elrondnetwork/dapp-core';
import { BigNumber } from 'bignumber.js';
import { mintAddress } from 'config';

export default async function mintEggs(egld: number, eggsCount: number) {

    const wei = new BigNumber(egld).times(new BigNumber(10).pow(18)).toString();

    const customizeTransaction = {
        value: wei,
        data: 'buy',
        receiver: mintAddress.bech32(),
        gasLimit: 20_000_000
    };

    await refreshAccount();



    const { sessionId } = await transactionServices.sendTransactions({
        transactions: customizeTransaction,
        transactionsDisplayInfo: {
            processingMessage: `Mint ${eggsCount} eggs`,
            errorMessage: 'An error has occured during minting',
            successMessage: `${eggsCount} eggs minted`,
            transactionDuration: 50000
        },
        redirectAfterSign: false
    });

    return sessionId;
}