import { useState } from 'react';
import { mintConfig, startingSupply, totalSupply } from 'config';
import { useGetRemainingNfts } from './useGetRemainingNft';

export enum SaleStatus {
    Soon = 0,
    OnSale = 1,
    SoldOut = 2,
    WhitelistOpen = 3
}

export interface SaleInfos {
    status: SaleStatus,
    boughtNfts: number
}

export function useGetSaleInfos() {

    const [saleInfos, setSaleInfos] = useState<SaleInfos | undefined>(undefined);
    const { remainingNfts, refresh: forceRefresh } = useGetRemainingNfts();

    if (remainingNfts) {


        const status = getSaleStatus(remainingNfts);
        const boughtNfts = totalSupply - remainingNfts + startingSupply;

        const newInfos = {
            status,
            boughtNfts: boughtNfts
        };

        if (!saleInfos || equals(saleInfos, newInfos) == false) {
            setSaleInfos(newInfos);
        }
    }

    return { saleInfos, refresh: forceRefresh };
}

function equals(a: SaleInfos, b: SaleInfos) {
    return a.status === b.status && a.boughtNfts === b.boughtNfts;
}

function getSaleStatus(remainingNfts: number): SaleStatus {

    if (remainingNfts == 0) {
        return SaleStatus.SoldOut;
    }

    const now = new Date();

    if (now < mintConfig.whitelistedOpen) {
        return SaleStatus.Soon;
    }
    else if (now < mintConfig.publicSaleOpen) {
        return SaleStatus.WhitelistOpen;
    }
    else if (now < mintConfig.publicSaleClose) {
        return SaleStatus.OnSale;
    }
    else {
        return SaleStatus.SoldOut;
    }
}