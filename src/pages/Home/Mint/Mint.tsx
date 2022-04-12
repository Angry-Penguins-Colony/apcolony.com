import React from 'react';
import { useGetBalance } from 'hooks/useGetBalance';
import { useGetMaxPerWallet } from 'hooks/useGetMaxPerWallet';
import { useGetMyBoughtNfts } from 'hooks/useGetMyBoughtNfts';
import { useGetPriceList } from 'hooks/useGetPriceList';
import mintEggs from 'transactions/mint';
import { humanizeBalance } from 'utils/humanize';
import { calculatePriceFromNft } from 'utils/priceCalculation';
import BonusTable, { CLASS_HIGHLIGHTED } from './BonusTable';
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

    const [bonusTableRef, setBonusTableRef] = React.useState<HTMLTableElement | null>(null);

    console.log(bonusTableRef);

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
                    scrollToHighlitedTabe();
                }
            }
        }
    };

    const decrementNftsAmount = () => {
        if (nftsAmount >= 2) {
            setNftsAmount(nftsAmount - 1);
            scrollToHighlitedTabe();
        }
    };

    const scrollToHighlitedTabe = () => {

        if (bonusTableRef) {
            const highlighted = bonusTableRef.getElementsByClassName(CLASS_HIGHLIGHTED);

            if (highlighted.length > 0) {
                highlighted[0].scrollIntoView({ block: 'center' });
            }
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

                <div className="mintButton">
                    <div className="minus" onClick={decrementNftsAmount}>-</div>
                    <div className="numberSelect">{nftsAmount}</div>
                    <div className="plus" onClick={incrementNftsAmount}>+</div>
                    <a className='button' onClick={mint}>MINT NOW ({price.toFixed(2)} EGLD)</a>
                </div>
                <div className="advantages pb-0">
                    {/* <p>My balance: {humanizeBalance(weiBalance)} eGLD</p> */}
                    <BonusTable setRef={setBonusTableRef} className="compactBonusTable mt-0 mb-0 pb-0" highlightRowIndex={nftsAmount - 1} />
                </div>
            </div>
        </div>
    </div>;
};

