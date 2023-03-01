import BigNumber from 'bignumber.js';

export function humanizeBalance(balance: BigNumber, precision = 3): string {
    return balance
        .div(10 ** 18)
        .precision(precision)
        .toString();
}

export function humanizeNumber(n: number): string {
    return n.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}