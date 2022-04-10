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

export function useGetSaleInfos(): SaleInfos {

    const [saleInfo, setSaleInfo] = useState<SaleInfos>(getSaleInfos());
    const remainingNft = useGetRemainingNfts();

    if (remainingNft) {

        const boughtNfts = totalSupply - remainingNft;

        if (boughtNfts != saleInfo.boughtNfts) {
            saleInfo.boughtNfts = boughtNfts;
            setSaleInfo(saleInfo);
        }
    }

    return saleInfo;
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