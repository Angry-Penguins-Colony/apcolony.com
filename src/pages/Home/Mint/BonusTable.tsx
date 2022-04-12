import * as React from 'react';
import { useGetPriceList } from 'hooks/useGetPriceList';
import styles from './bonustable.module.scss';


export const CLASS_HIGHLIGHTED = styles.highlighted;


const BonusTable = (props: {
    className?: string,
    highlightRowIndex?: number,
    setRef?: (ref: HTMLTableElement | null) => void
}) => {

    const rootClassName = [
        styles.bonusTable,
        props.className,
        'table table-striped table-bordered'
    ].join(' ');

    const priceList = useGetPriceList();

    const components = priceList.map((price, index) => {
        const nftAmount = index + 1;
        const discount = nftAmount - (price * nftAmount);
        const discountPercent = Math.round(discount / nftAmount * 100);
        const isHighlighted = props.highlightRowIndex == index;

        return <tr key={index} className={isHighlighted ? CLASS_HIGHLIGHTED : ''}>
            <td>{nftAmount}</td>
            <td>
                {price}
                <span style={{ float: 'right' }}>eGLD</span>
            </td >
            <td>{discountPercent > 0 ? (discountPercent + '%') : ''}</td>
            <td>⚠️</td>
        </tr >;
    });

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