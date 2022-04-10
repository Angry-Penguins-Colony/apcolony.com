import React, { useState } from 'react';
import { publicSaleClose, publicSaleOpen } from 'config';

export enum SaleStatus {
    Soon = 0,
    OnSale = 1,
    SoldOut = 2
}

export interface SaleInfos {
    status: SaleStatus,
    date: Date,
    nftLeft: number
}

export function useGetSaleInfos(): SaleInfos {

    const [saleInfo, setSaleInfo] = useState<SaleInfos>(getSaleInfos());

    React.useEffect(() => {
        // TODO: get value by API call
    }, []);

    return saleInfo;
}

function getSaleInfos() {
    switch (getSaleStatus()) {
        case SaleStatus.SoldOut:
            return {
                status: SaleStatus.SoldOut,
                date: new Date(),
                nftLeft: 200 // TODO: get this value by api call
            };

        case SaleStatus.OnSale:
            return {
                status: SaleStatus.OnSale,
                date: publicSaleClose,
                nftLeft: 200 // TODO: get this value by api call
            };

        case SaleStatus.Soon:
            return {
                status: SaleStatus.Soon,
                date: publicSaleOpen,
                nftLeft: 0 // TODO: get this value by api call
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