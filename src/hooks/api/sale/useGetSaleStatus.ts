import { useState } from 'react';
import { mintConfig } from 'config';
import { useGetRemainingNfts } from './useGetRemainingNft';

export enum SaleStatus {
    Soon = 0,
    OnSale = 1,
    SoldOut = 2,
    WhitelistOpen = 3
}

export function useGetSaleStatus() {

    const [saleStatus, setSaleStatus] = useState<SaleStatus | undefined>(undefined);
    const { remainingNfts, refresh } = useGetRemainingNfts();

    if (remainingNfts != null) {
        const newStatus = getSaleStatus();

        if (saleStatus != newStatus) {
            setSaleStatus(newStatus);
        }
    }

    return {
        saleStatus,
        forceRefresh: refresh
    };

    function getSaleStatus(): SaleStatus {

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
}