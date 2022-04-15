import { Balance } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';

export function humanizeBalance(balance: Balance | BigNumber, precision = 3): string {

    const weiNumber = balance instanceof Balance ? balance.valueOf() : balance;
    const denom = weiNumber.div(10 ** 18);

    const str = denom
        .precision(precision)
        .toString();

    return addSpaceEachThousand(str);
}

export function humanizeNumber(n: number): string {
    return addSpaceEachThousand(n.toString());

}

function addSpaceEachThousand(str: string): string {
    return str.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}