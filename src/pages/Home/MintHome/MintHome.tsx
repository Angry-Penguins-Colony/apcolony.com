import React from 'react';
import { useGetLoginInfo } from '@elrondnetwork/dapp-core';
import { ConnectWalletButton } from 'components/ConnectWallet/ConnectWalletButton';
import { DisconnectWalletButton } from 'components/DisconnectWallet/DisconnectWalletButton';
import { mintConfig } from 'config';
import { useOnAnyTransactionSuccess } from 'hooks/api/common/useOnAnyTransactionSuccess';
import { useGetSaleStatus, SaleStatus } from 'hooks/api/sale/useGetSaleStatus';
import { useIsWhitelisted } from 'hooks/api/sale/useIsWhitelisted';
import Timer from '../Timer';
import { NftsLeft } from './NftsLeft';

export const MintHome = (props: {
    openMint: () => void;
    closeMint: () => void;
}) => {

    const { isLoggedIn } = useGetLoginInfo();
    const { isWhitelisted } = useIsWhitelisted();

    const { saleStatus, forceRefresh } = useGetSaleStatus();


    useOnAnyTransactionSuccess(() => {
        forceRefresh();
    });

    if (saleStatus == undefined) {
        return <p>
            Loading...
        </p>;
    }



    const saleSoonForUser = saleStatus == SaleStatus.Soon
        || (saleStatus == SaleStatus.WhitelistOpen && !isWhitelisted);
    const saleOpenForUser = saleStatus == SaleStatus.OnSale
        || (saleStatus == SaleStatus.WhitelistOpen && isWhitelisted);

    if (saleSoonForUser) {

        const displayTimer = (isLoggedIn && isWhitelisted) ? mintConfig.whitelistedOpen : mintConfig.publicSaleOpen;

        return <>
            <Timer date={displayTimer} />
            {saleStatus == SaleStatus.WhitelistOpen &&
                <div className='mint mb-5 mt-1'>
                    <NftsLeft />
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
                <NftsLeft />
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
    else if (saleStatus == SaleStatus.SoldOut) {
        return <>
            <div className="semiBanner">
                <p>THE SALE IS OVER</p>
            </div>
            <div className='mint'>
                <NftsLeft />
            </div>
        </>;

    }
    else {
        throw new Error('Unknown sale status');
    }
};