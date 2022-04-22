import { Address } from '@elrondnetwork/erdjs/out';
import toHex from 'to-hex';
import { EggTier } from 'structs/EggTier';
import { numberToHex } from 'utils/convert';


export default async function hatch() {
    // send to self
    // Multi sender
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

    return data;
}