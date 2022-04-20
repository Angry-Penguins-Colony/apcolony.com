import React from 'react';
import { totalSupply } from 'config';
import { useGetRemainingNfts } from 'hooks/api/sale/useGetRemainingNft';
import { humanizeNumber } from 'utils/humanize';

export const NftsLeft = () => {
    const { remainingNfts } = useGetRemainingNfts();

    return <div className="nftLeft">{getBoughtNfts()} / 10 000</div>;

    function getBoughtNfts(): string {

        if (remainingNfts != undefined) {
            const boughtNfts = (totalSupply - remainingNfts);
            return humanizeNumber(boughtNfts);
        }
        else {
            return '-- ---';
        }
    }
};