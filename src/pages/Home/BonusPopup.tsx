import * as React from 'react';
import styles from './bonuspopup.module.scss';
import BonusTable from './BonusTable';
import Popup from './Popup';

const BonusPopup = (props: any) => {
    return (
        <Popup position='bottom' {...props}>
            <div className={styles.content}>
                <h3 className={styles.information}>INFORMATION ABOUT BONUSES</h3>
                <p className={styles.subTitle}>Starting</p>
                <h3 className={styles.price}>PRICE 1 EGLD</h3>
                <BonusTable />
                <div className={styles.info}>*The rarity rank of accessory B is higher than accessory A</div>
            </div>
        </Popup>
    );
};

export default BonusPopup;