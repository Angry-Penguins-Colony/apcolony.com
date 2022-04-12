import React from 'react';
import { useGetBalance } from 'hooks/useGetBalance';
import { useGetMaxPerWallet } from 'hooks/useGetMaxPerWallet';
import { useGetMyBoughtNfts } from 'hooks/useGetMyBoughtNfts';
import { useGetPriceList } from 'hooks/useGetPriceList';
import mintEggs from 'transactions/mint';
import { humanizeBalance } from 'utils/humanize';
import { calculatePriceFromNft } from 'utils/priceCalculation';
import BonusTable from './BonusTable';
import './Mint.scss';

export const Mint = (props: {
    onClose?: () => void
}) => {

    const [nftsAmount, setNftsAmount] = React.useState(1);
    const priceList = useGetPriceList();
    const maxPerWallet = useGetMaxPerWallet();
    const { boughtNfts } = useGetMyBoughtNfts();
    const weiBalance = useGetBalance();

    const price = calculatePriceFromNft(nftsAmount, boughtNfts ?? 0, priceList);
    const saving = nftsAmount - price;
    const savingPercent = Math.round(saving / nftsAmount * 100);

    const mint = () => {
        mintEggs(price, nftsAmount);
    };

    const incrementNftsAmount = () => {
        if (boughtNfts != null) {

            if (nftsAmount < maxPerWallet - boughtNfts) {
                const newPrice = calculatePriceFromNft(nftsAmount + 1, boughtNfts, priceList);
                const egldBalance = weiBalance.valueOf().div(10 ** 18).toNumber();

                if (egldBalance >= newPrice) {
                    setNftsAmount(nftsAmount + 1);
                }
            }
        }
    };

    const decrementNftsAmount = () => {
        if (nftsAmount >= 2) {
            setNftsAmount(nftsAmount - 1);
        }
    };

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

                {/* <p>My eggs: {boughtNfts} / {maxPerWallet}</p>
                <p>Saving {saving.toFixed(2)} | {savingPercent}%</p>
                <p>My balance: {humanizeBalance(weiBalance)} eGLD</p> */}
                <div className="mintButton">
                    <div className="minus" onClick={decrementNftsAmount}>-</div>
                    <div className="numberSelect">{nftsAmount}</div>
                    <div className="plus" onClick={incrementNftsAmount}>+</div>
                    <a className='button' onClick={mint}>MINT NOW ({price.toFixed(2)} EGLD)</a>
                </div>
                <div className="advantages pb-0">
                    {/* ⚠️ BONUS TABLE IS DESACTIVATED FOR THE MOMENT ⚠️ */}
                    <BonusTable className="compactBonusTable mt-0 mb-0 pb-0" highlightRowIndex={nftsAmount - 1} />
                </div>
            </div>
            {/* <div className="info">*The rarity rank of accessory B is higher than accessory A</div> */}
        </div>
    </div>;
};

