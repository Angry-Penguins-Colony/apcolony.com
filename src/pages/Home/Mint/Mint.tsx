import React from 'react';
import { useGetAccountInfo, useGetNetworkConfig } from '@elrondnetwork/dapp-core';
import { ToggleButton } from 'react-bootstrap';
import { useGetBalance } from 'hooks/useGetBalance';
import { useGetMaxPerWallet } from 'hooks/useGetMaxPerWallet';
import { useGetMyBoughtNfts } from 'hooks/useGetMyBoughtNfts';
import { useGetPriceList } from 'hooks/useGetPriceList';
import { useOnAnyTransactionSuccess } from 'hooks/useOnAnyTransactionSuccess';
import mintEggs from 'transactions/mint';
import { humanizeBalance } from 'utils/humanize';
import BonusTable, { CLASS_HIGHLIGHTED } from './BonusTable';
import MintButton from './ButtonMint';
import './Mint.scss';

export enum MintCurrency {
    eGLD = 'eGLD',
    LKMex = 'LKMex'
}

export const Mint = (props: {
    onClose?: () => void
}) => {

    const [bonusTableRef, setBonusTableRef] = React.useState<HTMLTableElement | null>(null);

    const [nftsAmount, _setNftsAmount] = React.useState(1);
    const { address } = useGetAccountInfo();
    const { network } = useGetNetworkConfig();
    const priceList = useGetPriceList();
    const maxPerWallet = useGetMaxPerWallet();
    const { boughtNfts, refresh: refreshNfts } = useGetMyBoughtNfts();
    const weiBalance = useGetBalance();
    const [currencyUsed, setCurrencyUsed] = React.useState<MintCurrency>(MintCurrency.eGLD);

    useOnAnyTransactionSuccess(() => {
        refreshNfts();
    });


    const setNftsAmount = (amount: number) => {
        _setNftsAmount(amount);
        scrollToHighlightedTable();
    };


    const explorerUrl = network.explorerAddress;
    const accountExplorer = explorerUrl + '/accounts/' + address;

    const toggleUsedToken = () => {

        switch (currencyUsed) {
            case MintCurrency.eGLD:
                setCurrencyUsed(MintCurrency.LKMex);
                break;

            case MintCurrency.LKMex:
                setCurrencyUsed(MintCurrency.eGLD);
                break;

            default:
                throw new Error('Unknown currency');
        }
    };



    return <div id='mint'>
        <div className="header">
            <div className="logo">
                <img src="/img/APC_LOGO_BLUE_WHITE.svg" role="button" onClick={props.onClose} />
            </div>
            <h1>PUBLIC SALE</h1>
            <div className="closeIcon">
                <img src='/img/icons/close.svg' onClick={props.onClose} />
            </div>
        </div>
        <div className="left">
            <div className="emptyPenguin">
                <img src="/img/penguins/Random_Pinguin.png" />
            </div>
        </div>
        <div className="right">
            <div className="content">
                <h1>PUBLIC SALE</h1>

                <div>

                    <div className='d-flex justify-content-between'>
                        <div className="custom-control custom-switch">
                            <input type="checkbox" className="custom-control-input" id="customSwitch1" onChange={() => toggleUsedToken()} />
                            <label className="custom-control-label" htmlFor="customSwitch1">Use LKMex</label>
                        </div>

                        <p className="mb-3 text-muted balance">
                            <a href={accountExplorer} target="_blank" rel="noopener noreferrer">
                                My balance: {humanizeBalance(weiBalance)} {currencyUsed.toString()}
                            </a>
                        </p>
                    </div>

                    <MintButton
                        priceList={priceList}
                        boughtNfts={boughtNfts}
                        maxPerWallet={maxPerWallet}
                        userBalance={weiBalance}
                        nftsAmount={nftsAmount}
                        onNftsAmountChanged={setNftsAmount}
                        mint={mintEggs}
                        currencyDenomation={currencyUsed.toString()}
                    />


                    <div className="advantages pb-0">
                        {currencyUsed == MintCurrency.eGLD &&
                            <BonusTable
                                setRef={setBonusTableRef}
                                className="compactBonusTable mt-0 mb-0 pb-0"
                                highlightRowIndex={(boughtNfts ?? 0) + nftsAmount - 1}
                                boughtNfts={boughtNfts}
                                onRowClick={(index) => {

                                    if (boughtNfts == undefined) return;

                                    const selectedAmount = index + 1 - boughtNfts;

                                    if (selectedAmount > 0) {
                                        setNftsAmount(selectedAmount);
                                    }
                                }}
                            />}

                        {currencyUsed == MintCurrency.LKMex &&
                            <p className="discount-disabled">Sorry, discounts are disabled when paying in LKMex.</p>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>;


    function scrollToHighlightedTable() {

        if (bonusTableRef) {
            const highlighted = bonusTableRef.getElementsByClassName(CLASS_HIGHLIGHTED);

            if (highlighted.length > 0) {
                highlighted[0].scrollIntoView({ block: 'center' });
            }
        }
    }

};