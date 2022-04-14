import React from 'react';
import { useGetAccountInfo, useGetNetworkConfig } from '@elrondnetwork/dapp-core';
import { faPlus as plusIcon, faMinus as minusIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BigNumber } from 'bignumber.js';
import { Alert } from 'react-bootstrap';
import { useGetBalance } from 'hooks/useGetBalance';
import { useGetMaxPerWallet } from 'hooks/useGetMaxPerWallet';
import { useGetMyBoughtNfts } from 'hooks/useGetMyBoughtNfts';
import { useGetPriceList } from 'hooks/useGetPriceList';
import { useOnAnyTransactionSuccess } from 'hooks/useOnAnyTransactionSuccess';
import mintEggs from 'transactions/mint';
import { weiToEgld } from 'utils/convert';
import { humanizeBalance } from 'utils/humanize';
import { calculatePriceFromNft } from 'utils/priceCalculation';
import BonusTable, { CLASS_HIGHLIGHTED } from './BonusTable';
import './Mint.scss';

export const Mint = (props: {
    onClose?: () => void
}) => {

    const [bonusTableRef, setBonusTableRef] = React.useState<HTMLTableElement | null>(null);
    const [nftsAmount, setNftsAmount] = React.useState(1);
    const { address } = useGetAccountInfo();
    const { network } = useGetNetworkConfig();
    const priceList = useGetPriceList();
    const maxPerWallet = useGetMaxPerWallet();
    const { boughtNfts, refresh: refreshNfts } = useGetMyBoughtNfts();
    const weiBalance = useGetBalance();

    useOnAnyTransactionSuccess(() => {
        refreshNfts();
    });

    const price = calculatePrice();

    const explorerUrl = network.explorerAddress;
    const accountExplorer = explorerUrl + '/accounts/' + address;



    return <div id='mint'>
        <div className="header container">
            <div className="logo">
                <img src="/img/APC_LOGO_BLUE_WHITE.svg" />
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
                    <p className="mb-3 text-muted balance">
                        <a href={accountExplorer} target="_blank" rel="noopener noreferrer">
                            My balance: {humanizeBalance(weiBalance)} eGLD
                        </a>
                    </p>
                    {getWarningComponent()}

                    <div className="mintButton">
                        <div className="numberSelector">
                            <div className="minus centerText" onClick={decrementNftsAmount}>
                                <FontAwesomeIcon icon={minusIcon} />
                            </div>
                            <div className="numberSelect centerText">
                                {nftsAmount}
                            </div>
                            <div className="plus centerText" onClick={incrementNftsAmount}>
                                <FontAwesomeIcon icon={plusIcon} />
                            </div>
                        </div>
                        <button className={'button mintNow' + ' ' + (canMint() ? '' : 'disabled')} disabled={canBuy() == false} onClick={mint}>
                            MINT NOW ({price != null ? weiToEgld(price).toFixed(2) : '--'} eGLD)
                        </button>
                    </div>


                    <div className="advantages pb-0">
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
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>;

    function calculatePrice(): BigNumber | undefined {

        if (priceList != null && boughtNfts != null) {

            if (nftsAmount + boughtNfts <= maxPerWallet) {
                return calculatePriceFromNft(nftsAmount, boughtNfts ?? 0, priceList);
            }
            else {
                return new BigNumber(0);
            }
        }
        else {
            return undefined;
        }
    }

    function mint() {
        if (!price) return;

        mintEggs(price, nftsAmount);
    }

    function canIncrement(): boolean {

        return !hasMaxPerWallet() && canBuyNext();
    }

    function canMint(): boolean {
        return canBuy() && !hasBuyAllNfts();
    }

    function hasBuyAllNfts(): boolean {
        return boughtNfts != null && boughtNfts >= (maxPerWallet);
    }

    function canBuy(): boolean {
        return price != null && weiBalance.valueOf().comparedTo(price) >= 0;
    }

    function canBuyNext() {
        if (boughtNfts != null && priceList != null) {

            if (hasMaxPerWallet() == false) {
                const newPrice = calculatePriceFromNft(nftsAmount + 1, boughtNfts, priceList);

                return weiBalance.valueOf().comparedTo(newPrice) >= 0;
            }
        }

        return false;
    }

    function hasMaxPerWallet() {
        return boughtNfts != null && nftsAmount + boughtNfts >= (maxPerWallet);
    }

    function incrementNftsAmount() {
        if (canIncrement()) {
            setNftsAmount(nftsAmount + 1);
            scrollToHighlightedTable();
        }
    }

    function decrementNftsAmount() {
        if (nftsAmount >= 2) {
            setNftsAmount(nftsAmount - 1);
            scrollToHighlightedTable();
        }
    }

    function scrollToHighlightedTable() {

        if (bonusTableRef) {
            const highlighted = bonusTableRef.getElementsByClassName(CLASS_HIGHLIGHTED);

            if (highlighted.length > 0) {
                highlighted[0].scrollIntoView({ block: 'center' });
            }
        }
    }

    function getWarningComponent() {

        if (canBuy() == false) {
            return <Alert variant="danger">
                You don&apos;t have enough eGLD to buy any.
            </Alert>;
        }
        else if (hasMaxPerWallet() == true) {
            return <Alert variant="warning">
                You have reached the maximum amount of NFTs you can buy on this wallet.
            </Alert>;
        }
        else if (canBuyNext() == false) {
            return <Alert variant="warning">
                You don&apos;t have enough eGLD to buy more.
            </Alert>;
        }
        else {
            return <></>;
        }
    }
};