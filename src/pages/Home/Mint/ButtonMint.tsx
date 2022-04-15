import React from 'react';
import { Balance } from '@elrondnetwork/erdjs/out';
import { faPlus as plusIcon, faMinus as minusIcon } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { BigNumber } from 'bignumber.js';
import { Alert } from 'react-bootstrap';
import { weiToEgld } from 'utils/convert';
import { calculatePriceFromNft } from 'utils/priceCalculation';

const MintButton = (props: {
    mint: (valueToSend: BigNumber, amount: number) => void,
    priceList: BigNumber[] | undefined,
    boughtNfts: number | undefined,
    userBalance: Balance,
    maxPerWallet: number,
    nftsAmount: number,
    onNftsAmountChanged: (amount: number) => void,
    currencyDenomation: string
}) => {

    const priceList = props.priceList;
    const boughtNfts = props.boughtNfts;
    const maxPerWallet = props.maxPerWallet;
    const userBalance = props.userBalance;
    const nftsAmount = props.nftsAmount;
    const setNftsAmount = (amount: number) => {
        props.onNftsAmountChanged(amount);
    };

    const price = calculatePrice();

    return <>
        <div className="mintButton">
            <div className="numberSelector">
                <div className={'minus centerText' + ' ' + (canDecrement() ? '' : 'disabled')} onClick={decrementNftsAmount}>
                    <FontAwesomeIcon icon={minusIcon} />
                </div>
                <div className="numberSelect centerText">
                    {nftsAmount}
                </div>
                <div className={'plus centerText' + ' ' + (canIncrement() ? '' : 'disabled')} onClick={incrementNftsAmount} >
                    <FontAwesomeIcon icon={plusIcon} />
                </div>
            </div>
            <button className={'button mintNow' + ' ' + (canMint() ? '' : 'disabled')} disabled={canBuy() == false} onClick={mint}>
                MINT NOW ({price != null ? weiToEgld(price).toFixed(2) : '--'} {props.currencyDenomation})
            </button>
        </div>

        {getWarningComponent()}
    </>;

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

        props.mint(price, nftsAmount);
    }

    function canIncrement(): boolean {

        return !hasMaxPerWallet() && canBuyNext();
    }

    function canDecrement(): boolean {
        return nftsAmount > 1;
    }

    function canMint(): boolean {
        return canBuy() && !hasBuyAllNfts();
    }

    function hasBuyAllNfts(): boolean {
        return boughtNfts != null && boughtNfts >= (maxPerWallet);
    }

    function canBuy(): boolean {
        return price != null && userBalance.valueOf().comparedTo(price) >= 0;
    }

    function canBuyNext() {
        if (boughtNfts != null && priceList != null) {

            if (hasMaxPerWallet() == false) {
                const newPrice = calculatePriceFromNft(nftsAmount + 1, boughtNfts, priceList);

                return userBalance.valueOf().comparedTo(newPrice) >= 0;
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
        }
    }

    function decrementNftsAmount() {
        if (nftsAmount >= 2) {
            setNftsAmount(nftsAmount - 1);
        }
    }


    function getWarningComponent() {

        if (canBuy() == false) {
            return <Alert variant="danger" className='mt-5'>
                You don&apos;t have enough eGLD to buy any.
            </Alert>;
        }
        else if (hasMaxPerWallet() == true) {
            return <Alert variant="warning" className='mt-5'>
                You have reached the maximum amount of NFTs you can buy on this wallet.
            </Alert>;
        }
        else if (canBuyNext() == false) {
            return <Alert variant="warning" className='mt-5'>
                You don&apos;t have enough eGLD to buy more.
            </Alert>;
        }
        else {
            return <></>;
        }
    }
};

export default MintButton;