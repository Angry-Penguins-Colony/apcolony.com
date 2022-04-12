import { BigNumber } from 'bignumber.js';

export function numberToHex(number: number): string {
    let hex = number.toString(16);

    if (hex.length % 2 !== 0) {
        hex = '0' + hex;
    }

    return hex;
}


export function egldToWei(egld: number) {
    const wei = new BigNumber(egld)
        .times(new BigNumber(10).pow(18)).toString();

    return wei;
}