import React from 'react';
import { maxPerWallet } from 'config';

export const Mint = (props: {
    onClose?: () => void
}) => {

    const [nftsAmount, setNftsAmount] = React.useState(1);

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
                <div className="mintButton">
                    <div className="minus" onClick={decrementNftsAmount}>-</div>
                    <div className="numberSelect">{nftsAmount}</div>
                    <div className="plus" onClick={incrementNftsAmount}>+</div>
                    <a className='button' onClick={mint}>MINT NOW ({nftsAmount} EGLD)</a>
                </div>
            </div>
            {/* <div className="info">*The rarity rank of accessory B is higher than accessory A</div> */}
        </div>
    </div>;
};