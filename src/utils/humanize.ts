import { Balance } from '@elrondnetwork/erdjs/out';

export function humanizeBalance(balance: Balance, precision = 3): string {
    return balance.valueOf()
        .div(10 ** 18)
        .precision(precision)
        .toString();
}

export function humanizeNumber(n: number): string {
    return n.toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}