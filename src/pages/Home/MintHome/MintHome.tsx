import React from 'react';
import { useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { DisconnectWalletButton } from 'components/DisconnectWallet/DisconnectWalletButton';
import { mintConfig } from 'config';
import { SaleStatus, useGetSaleInfos } from 'hooks/useGetSaleInfos';
import { useIsWhitelisted } from 'hooks/useIsWhitelisted';
import { useOnAnyTransactionSuccess } from 'hooks/useOnAnyTransactionSuccess';
import { humanizeNumber } from 'utils/humanize';
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

    if (saleInfos == undefined) {
        return <p>
            Loading...
        </p>;
    }

    const saleSoonForUser = saleInfos.status == SaleStatus.Soon
        || (saleInfos.status == SaleStatus.WhitelistOpen && !isWhitelisted);
    const saleOpenForUser = saleInfos.status == SaleStatus.OnSale
        || (saleInfos.status == SaleStatus.WhitelistOpen && isWhitelisted);

    if (saleSoonForUser) {
        return <>
            <Timer date={mintConfig.publicSaleOpen} />
            {saleInfos.status == SaleStatus.WhitelistOpen &&
                <div className='mint mb-5 mt-1'>
                    <div className="nftLeft">{humanizeNumber(saleInfos.boughtNfts)}/10 000</div>
                </div>
            }

            {isLoggedIn ?
                <DisconnectWalletButton /> : <ConnectWalletButton />
            }

        </>;
    }
    else if (saleOpenForUser) {

        return <>
            <h2>TIME REMAINING</h2>
            <Timer date={mintConfig.publicSaleClose} />
            <div className='mint'>
                <div className="nftLeft">{humanizeNumber(saleInfos.boughtNfts)}/10 000</div>
                {isLoggedIn ?
                    <>
                        <button
                            onClick={props.openMint}
                            className='button mintNow'>
                            MINT NOW
                        </button>
                        <DisconnectWalletButton />
                    </> :
                    <ConnectWalletButton />
                }

            </div>
        </>;
    }
    else if (saleInfos.status == SaleStatus.SoldOut) {
        return <>
            <div className="semiBanner">
                <p>SOLD OUT</p>
            </div>;
            <div className='mint'>
                <div className="nftLeft">10 000/10 000</div>
            </div>
        </>;

    }
    else {
        throw new Error('Unknown sale status');
    }
};