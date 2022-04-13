import * as React from 'react';
import { BigNumber } from 'bignumber.js';
import { mintConfig } from 'config';
import { useGetPriceList } from 'hooks/useGetPriceList';
import { weiToEgld } from 'utils/convert';
import styles from './bonustable.module.scss';


export const CLASS_HIGHLIGHTED = styles.highlighted;


const BonusTable = (props: {
    className?: string,
    highlightRowIndex?: number,
    boughtNfts?: number
    setRef?: (ref: HTMLTableElement | null) => void
}) => {

    const rootClassName = [
        styles.bonusTable,
        props.className,
        'table table-striped table-bordered'
    ].join(' ');

    const priceList = useGetPriceList();

    const components = buildTable(priceList, props);

    return (
        <table ref={ref => {
            if (props.setRef) {
                props.setRef(ref);
            }
        }} className={rootClassName} >
            <thead>
                <tr>
                    <th scope="col">Eggs</th>
                    <th scope="col">Price Per Egg</th>
                    <th scope="col">Discount</th>
                    <th scope="col">Item</th>
                </tr>
            </thead>
            <tbody>
                {components}
            </tbody>
        </table >
    );
};

export default BonusTable;

function buildTable(priceList: BigNumber[] | undefined, props: { className?: string | undefined; highlightRowIndex?: number | undefined; boughtNfts?: number | undefined; setRef?: ((ref: HTMLTableElement | null) => void) | undefined; }) {

    if (!priceList) return [];

    return priceList.map((price, index) => {
        const nftAmount = index + 1;
        const egldPrice = weiToEgld(price);
        const notReducedPricePerEgg = weiToEgld(mintConfig.fullPriceList[0]);
        const discount = (notReducedPricePerEgg - egldPrice) * nftAmount;
        const discountPercent = Math.round(discount / nftAmount * 100);


        const getClass = () => {

            if (props.highlightRowIndex == index) {
                return CLASS_HIGHLIGHTED;
            }
            else if (props.boughtNfts && props.boughtNfts >= nftAmount) {
                return styles.bought;
            }
            else {

                return '';
            }
        };

        return <tr key={index} className={getClass()}>
            <td>{nftAmount}</td>
            <td>
                {egldPrice}
                <span style={{ float: 'right' }}>eGLD</span>
            </td>
            <td>{discountPercent > 0 ? (discountPercent + '%') : ''}</td>
            <td>⚠️</td>
        </tr>;
    });
}