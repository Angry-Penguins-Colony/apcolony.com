import { refreshAccount, transactionServices } from '@elrondnetwork/dapp-core';

import { mintAddress } from 'config';
import { egldToWei, numberToHex } from 'utils/convert';

export default async function mintEggs(egld: number, eggsCount: number) {

    const customizeTransaction = {
        value: egldToWei(egld),
        data: 'buy@' + numberToHex(eggsCount),
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
