import { Address } from '@elrondnetwork/erdjs/out';
import { sendTransactions } from '@multiversx/sdk-dapp/services';
import { refreshAccount } from '@multiversx/sdk-dapp/utils';
import toHex from 'to-hex';
import { hatchConfig } from 'config';
import { EggTier } from 'structs/EggTier';
import { numberToHex } from 'utils/convert';


export default async function hatch(noncesToHatch: Map<EggTier, number>) {
    const data = buildHatchData(hatchConfig.eggsIdentifier, noncesToHatch, hatchConfig.hatchAddress);

    const sender = await refreshAccount();

    const customizeTransaction = {
        value: '0',
        data: data,
        receiver: sender?.address,
        gasLimit: 20_000_000
    };

    const { sessionId } = await sendTransactions({
        transactions: customizeTransaction,
        transactionsDisplayInfo: {
            processingMessage: 'Hatching...',
            errorMessage: 'An error has occured during hatching',
            successMessage: 'Hatched!',
            transactionDuration: 60000
        }
    });

    return sessionId;
}

export const errors = {
    noEggToHatch: 'No egg to hatch',
    invalidEggIdentifier: 'Invalid egg identifier',
    invalidHatchAddress: 'Invalid hatch address',
    invalidNonceAmount: 'Invalid nonce amount. It is either negative or equals to zero.'
};

export function buildHatchData(eggIdentifier: string, noncesToHatch: Map<EggTier, number>, hatchAddress: Address): string {

    if (!eggIdentifier) {
        throw new Error(errors.invalidEggIdentifier);
    }

    if (noncesToHatch.size == 0) {
        throw new Error(errors.noEggToHatch);
    }

    if (hatchAddress.isEmpty()) {
        throw new Error(errors.invalidHatchAddress);
    }

    if (Array.from(noncesToHatch.values()).some(n => n <= 0)) {
        throw new Error(errors.invalidNonceAmount);
    }

    let data = 'MultiESDTNFTTransfer'
        + '@' + hatchAddress.hex()
        + '@' + numberToHex(noncesToHatch.size);

    noncesToHatch.forEach((nonce, tier) => {
        data += '@' + toHex(eggIdentifier) + '@' + numberToHex(tier) + '@' + numberToHex(nonce);
    });

    data += '@' + toHex('hatch');

    return data;
}