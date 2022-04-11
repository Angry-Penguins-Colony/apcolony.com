import { useState } from 'react';
import { publicSaleClose, publicSaleOpen, totalSupply } from 'config';
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

    const [saleInfos, setSaleInfos] = useState<SaleInfos>(getSaleInfos());
    const { remainingNfts, refresh: forceRefresh } = useGetRemainingNfts();

    if (remainingNfts) {

        const boughtNfts = totalSupply - remainingNfts;

        if (boughtNfts != saleInfos.boughtNfts) {
            saleInfos.boughtNfts = boughtNfts;
            setSaleInfos(saleInfos);
        }
    }

    return { saleInfos, refresh: forceRefresh };
}

function getSaleInfos() {
    switch (getSaleStatus()) {
        case SaleStatus.SoldOut:
            return {
                status: SaleStatus.SoldOut,
                date: new Date(),
                boughtNfts: 200 // TODO: get this value by api call
            };

        case SaleStatus.OnSale:
            return {
                status: SaleStatus.OnSale,
                date: publicSaleClose,
                boughtNfts: 200 // TODO: get this value by api call
            };

        case SaleStatus.Soon:
            return {
                status: SaleStatus.Soon,
                date: publicSaleOpen,
                boughtNfts: 0 // TODO: get this value by api call
            };

        default:
            throw new Error('Unknow Sale Status');
    }
}

function getSaleStatus(): SaleStatus {



    const now = new Date();

    if (now < publicSaleOpen) {
        return SaleStatus.Soon;
    }
    else {
        return SaleStatus.OnSale;
    }
    // TODO: add soldout
    // TODO: add sold over
}