import { Address } from '@elrondnetwork/erdjs/out';

export function truncateAddress(address: Address, displayCharCount: number) {

    const PREFIX_SIZE = 4;
    const MIDDLE_CONTENT = '...';

    if (displayCharCount <= PREFIX_SIZE + MIDDLE_CONTENT.length) {
        throw new Error('displayCharCount must be greater than ' + PREFIX_SIZE + MIDDLE_CONTENT);
    }

    const trailingSize = displayCharCount - (PREFIX_SIZE + MIDDLE_CONTENT.length);

    const bech32 = address.bech32();

    if (displayCharCount < bech32.length) {
        return bech32.slice(0, PREFIX_SIZE) + MIDDLE_CONTENT + bech32.slice(bech32.length - 1 - trailingSize);
    }
    else {
        return bech32;
    }
}

export function cut_nonce(str: string) {
    const split = str.split('-').length;

    if (split == 2) {
        // no nonce to cut
        return str;
    }
    else if (split == 3) {
        return str.substring(0, str.lastIndexOf('-'));
    }
    else {
        if (!str) throw Error('str is empty');
        throw Error('unhandled case for ' + str);
    }
}

export function getNonceFromData(data: string) {

    if (data.startsWith('ESDTNFTTransfer') == false) {
        throw new Error('Data provided is not a transfer');
    }

    return parseInt(data.split('@')[2], 16);
}