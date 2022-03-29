import * as React from 'react';
import styles from './bonustable.module.scss';

const BonusTable = () => {
    return (
        <table className={styles.bonusTable}>
            <tbody>
                <tr>
                    <td className={styles.price}>FOR 1 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 1 EGG</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 2 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 2 EGG</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 3 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 3 EGGS & AN ACCESSORY A</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 4 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 4 EGGS & AN ACCESSORY A</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 5 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 5 EGGS & AN ACCESSORY B*</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 6 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 6 EGGS & AN ACCESSORY B</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 7 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 7 EGGS & AN ACCESSORY B</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 8 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 8 EGGS & 2 ACCESSORIES (A+B)</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 9 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 9 EGGS & 2 ACCESSORIES (A+B)</td>
                </tr>
                <tr>
                    <td className={styles.price}>FOR 10 EGLD</td>
                    <td className={styles.arrow}><img src='/img/icons/arrow-right.svg' /></td>
                    <td className={styles.advantage}>YOU GET 11 EGGS & 2 ACCESSORIES (A+B)</td>
                </tr>
            </tbody>
        </table>
    );
};

export default BonusTable;