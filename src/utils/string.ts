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