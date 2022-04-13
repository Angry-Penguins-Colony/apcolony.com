import React from 'react';
import { useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { DisconnectWalletButton } from 'components/DisconnectWallet/DisconnectWalletButton';
import { mintConfig } from 'config';
import { SaleStatus, useGetSaleInfos } from 'hooks/useGetSaleInfos';
import { useIsWhitelisted } from 'hooks/useIsWhitelisted';
import { useOnAnyTransactionSuccess } from 'hooks/useOnAnyTransactionSuccess';
import Timer from '../Timer';

export const MintHome = (props: {
    openMint: () => void;
    closeMint: () => void;
}) => {

    const { isLoggedIn } = useGetLoginInfo();
    const { isWhitelisted } = useIsWhitelisted();

    const { saleInfos, refresh: refreshSaleInfos } = useGetSaleInfos();
    useOnAnyTransactionSuccess(() => {
        refreshSaleInfos();
    });

    if (!saleInfos) {
        return <p>
            Loading...
        </p>;
    }

    switch (saleInfos.status) {
        case SaleStatus.Soon:
            return <>
                <Timer date={mintConfig.publicSaleOpen} />
                {isLoggedIn ?
                    <DisconnectWalletButton /> : <ConnectWalletButton />
                }
            </>;

        case SaleStatus.WhitelistOpen:
        case SaleStatus.OnSale:

            const canMint = saleInfos.status == SaleStatus.OnSale
                || (saleInfos.status == SaleStatus.WhitelistOpen && isWhitelisted);

            return <>
                <h2>TIME REMAINING</h2>
                <Timer date={mintConfig.publicSaleClose} />
                <div className='mint'>
                    <div className="nftLeft">{saleInfos.boughtNfts}/10 000</div>
                    {isLoggedIn ?
                        <>
                            <button
                                onClick={props.openMint}
                                className="button mintNow"
                                disabled={canMint}
                            >
                                MINT NOW
                            </button>
                            <DisconnectWalletButton />
                        </> :
                        <ConnectWalletButton />
                    }

                </div>
            </>;

        case SaleStatus.SoldOut:
            return <div className="semiBanner">
                <p>SOLD OUT</p>
            </div>;

        default:
            throw new Error('Unknown sale status');
    }
};