import { Balance } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';

export function humanizeBalance(balance: Balance | BigNumber, precision = 3): string {

    const bigNumber = balance instanceof Balance ? balance.valueOf() : balance;

    return bigNumber
        .div(10 ** 18)
        .precision(precision)
        .toString();
}

export function humanizeNumber(n: number): string {
    return n.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}