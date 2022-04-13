import { useState } from 'react';
import { mintConfig, startingSupply, totalSupply } from 'config';
import { useGetRemainingNfts } from './useGetRemainingNft';

export enum SaleStatus {
    Soon = 0,
    OnSale = 1,
    SoldOut = 2
}

export interface SaleInfos {
    status: SaleStatus,
    date: Date,
    boughtNfts: number
}

export function useGetSaleInfos() {

    const [saleInfos, setSaleInfos] = useState<SaleInfos | undefined>(undefined);
    const { remainingNfts, refresh: forceRefresh } = useGetRemainingNfts();

    if (remainingNfts) {


        const status = getSaleStatus();
        const date = getDate(status);
        const boughtNfts = totalSupply - remainingNfts + startingSupply;

        const newInfos = {
            status,
            date,
            boughtNfts
        };

        if (!saleInfos || equals(saleInfos, newInfos) == false) {
            console.log('update');
            setSaleInfos(newInfos);
        }
    }

    return { saleInfos, refresh: forceRefresh };
}

function equals(a: SaleInfos, b: SaleInfos) {
    return a.status === b.status && a.date.getTime() === b.date.getTime() && a.boughtNfts === b.boughtNfts;
}

function getSaleStatus(): SaleStatus {


    const now = new Date();

    if (now < mintConfig.publicSaleOpen) {
        return SaleStatus.Soon;
    }
    else if (now < mintConfig.publicSaleClose) {
        return SaleStatus.OnSale;
    }
    else {
        return SaleStatus.SoldOut;
    }
}

function getDate(status: SaleStatus): Date {
    switch (status) {
        case SaleStatus.SoldOut:
            return new Date();

        case SaleStatus.OnSale:
            return mintConfig.publicSaleClose;

        case SaleStatus.Soon:
            return mintConfig.publicSaleOpen;

        default:
            throw new Error('Unknow Sale Status');
    }
}