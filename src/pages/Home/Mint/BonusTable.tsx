import * as React from 'react';
import { faCircleQuestion as bonusIcon } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { OverlayTrigger, Tooltip } from 'react-bootstrap';
import { getImagesFor, mintConfig } from 'config';
import { useGetPriceList } from 'hooks/useGetPriceList';
import { weiToEgld } from 'utils/convert';
import styles from './bonustable.module.scss';


export const CLASS_HIGHLIGHTED = styles.highlighted;


const BonusTable = (props: {
    className?: string,
    highlightRowIndex?: number,
    boughtNfts?: number,
    setRef?: (ref: HTMLTableElement | null) => void,
    onRowClick?: (nftAmount: number) => void

}) => {

    const priceList = useGetPriceList();

    const [bonusTableRef, setBonusTableRef] = React.useState<HTMLTableElement | null>(null);
    const [forceClose, setForceClose] = React.useState<false | undefined>(undefined);
    const handleNavigation = () => {
        if (forceClose == undefined) {
            setForceClose(false);
        }
    };

    // when forceClose is set to false, we change the boolean flag
    // without this hook, the popup cannot be open
    React.useEffect(() => {
        setForceClose(undefined);
    }, [forceClose]);

    React.useEffect(() => {
        if (!bonusTableRef) return;

        bonusTableRef.addEventListener('scroll', handleNavigation);

        return () => {
            bonusTableRef.removeEventListener('scroll', handleNavigation);
        };
    }, [bonusTableRef]);

    return (
        <table ref={ref => {

            setBonusTableRef(ref);

            if (props.setRef) {
                props.setRef(ref);
            }
        }} className={buildRootClassName()} >
            <thead>
                <tr>
                    <th scope="col">Eggs</th>
                    <th scope="col">Price Per Egg</th>
                    <th scope="col">Discount</th>
                    <OverlayTrigger
                        placement="left"
                        trigger={['click']}
                        onEnter={() => setForceClose(undefined)}
                        show={forceClose}
                        overlay={renderTooltip}>

                        <th scope="col" role="button">
                            Bonus <FontAwesomeIcon icon={bonusIcon} />
                        </th>
                    </OverlayTrigger>
                </tr>
            </thead>
            <tbody>
                {buildTable()}
            </tbody>
        </table >
    );

    function buildRootClassName() {
        return [
            styles.bonusTable,
            props.className,
            'table table-striped table-bordered'
        ].join(' ');
    }

    function buildTable() {

        if (!priceList) return [];

        return priceList.map((price, index) => {
            const nftAmount = index + 1;
            const egldPrice = weiToEgld(price);
            const notReducedPricePerEgg = weiToEgld(mintConfig.fullPriceList[0]);
            const discount = (notReducedPricePerEgg - egldPrice) * nftAmount;
            const discountPercent = Math.round(discount / nftAmount * 100);


            const getClass = () => {

                if (props.boughtNfts && props.boughtNfts >= nftAmount) {
                    return styles.bought;
                }
                else {
                    let className = '';

                    if (props.highlightRowIndex == index) {
                        className += CLASS_HIGHLIGHTED + ' ';
                    }

                    if (props.onRowClick != undefined) {
                        className += styles.clickable;
                    }

                    return className;
                }
            };

            const getImagePath = () => {
                if (index == 0) {
                    return 'img/table_eggs/eggs_1.png';
                }
                else if (index == 1) {
                    return 'img/table_eggs/eggs_2.png';
                }
                else {
                    return 'img/table_eggs/eggs_3.png';
                }
            };

            return <tr key={index} className={getClass()} onClick={() => {
                if (props.onRowClick) {
                    props.onRowClick(index);
                }
            }}>
                <td className={styles.eggs}>
                    <img src={getImagePath()} alt={`${nftAmount} eggs`} />
                    <p className={styles.nftsAmount}>
                        <span className={styles.prefix}>x</span>
                        <span className={styles.amount}>{nftAmount}</span>
                    </p>
                </td>
                <td>
                    {egldPrice}
                    <span style={{ float: 'right' }}>eGLD</span>
                </td>
                <td>{discountPercent > 0 ? (discountPercent + '%') : ''}</td>
                <td className={styles.item}>
                    {getImagesFor(nftAmount) &&
                        <img src={'img/items-bonus/' + getImagesFor(nftAmount)} />
                    }
                </td>
            </tr>;
        });
    }

};

const renderTooltip = (props: any) => (
    <Tooltip rootClose id="button-tooltip" className="overflow-hidden" {...props}>
        You will receive the item after the public sale is finished.
    </Tooltip>
);

export default BonusTable;

