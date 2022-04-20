import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { Balance } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';

export const useGetBalance = (): Balance => {
    const { account } = useGetAccountInfo();
    const weiBalance: string = account.balance;

    const egldBalanceNumber = new BigNumber(weiBalance).div(10 ** 18);
    const balance = Balance.egld(egldBalanceNumber);

    return balance;
};