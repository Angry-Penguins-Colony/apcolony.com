import { useGetAccountInfo } from '@elrondnetwork/dapp-core';
import { BigNumber } from 'bignumber.js';
import { API } from 'config';
import { MintCurrency } from 'pages/Home/Mint/MintCurrency';
import { useFetchWithAddress } from './useFetchWithAddress';

export const useGetBalance = (mintCurrency: MintCurrency): BigNumber | undefined => {
    const { account } = useGetAccountInfo();
    const { output: lkMexBalance } = useFetchWithAddress<BigNumber>(
        async (addr) => API.getLkmexBalance(addr),
        Promise.resolve(new BigNumber(0))
    );

    switch (mintCurrency) {
        case MintCurrency.eGLD:
            const weiBalance: string = account.balance;

            const egldBalanceNumber = new BigNumber(weiBalance);

            return egldBalanceNumber;

        case MintCurrency.LKMex:
            return lkMexBalance;

        default:
            throw new Error('Unknown mint currency');
    }
};