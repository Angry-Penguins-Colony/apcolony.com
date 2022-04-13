import { refreshAccount, transactionServices } from '@elrondnetwork/dapp-core';
import { BigNumber } from 'bignumber.js';
import { mintConfig } from 'config';
import { numberToHex } from 'utils/convert';

export default async function mintEggs(wei: BigNumber, eggsCount: number) {

    const customizeTransaction = {
        value: wei,
        data: 'buy@' + numberToHex(eggsCount),
        receiver: mintConfig.contractAddress.bech32(),
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
