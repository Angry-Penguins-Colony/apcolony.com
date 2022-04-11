import React from 'react';
import { useGetMaxPerWallet } from 'hooks/useGetMaxPerWallet';
import { useGetPriceList } from 'hooks/useGetPriceList';
import { calculatePriceFromNft } from 'utils/priceCalculation';

export const Mint = (props: {
    onClose?: () => void
}) => {

    const [nftsAmount, setNftsAmount] = React.useState(1);
    const priceList = useGetPriceList();
    const maxPerWallet = useGetMaxPerWallet();
    const price = calculatePriceFromNft(nftsAmount, 0, priceList);
    const saving = nftsAmount - price;
    const savingPercent = Math.round(saving / nftsAmount * 100);

    const mint = () => {
        // TODO: mint NFT
    };

    const incrementNftsAmount = () => {
        if (nftsAmount < maxPerWallet) {
            setNftsAmount(nftsAmount + 1);
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
                <div className="advantages">
                    ⚠️ BONUS TABLE IS DESACTIVATED FOR THE MOMENT ⚠️
                    {/* <BonusTable /> */}
                </div>
                <p>Saving {saving.toFixed(2)} | {savingPercent}%</p>
                <div className="mintButton">
                    <div className="minus" onClick={decrementNftsAmount}>-</div>
                    <div className="numberSelect">{nftsAmount}</div>
                    <div className="plus" onClick={incrementNftsAmount}>+</div>
                    <a className='button' onClick={mint}>MINT NOW ({price.toFixed(2)} EGLD)</a>
                </div>
            </div>
            {/* <div className="info">*The rarity rank of accessory B is higher than accessory A</div> */}
        </div>
    </div>;
};