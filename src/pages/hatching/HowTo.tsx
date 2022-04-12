import * as React from 'react';
import styles from './howTo.module.scss';

const HowToHatch = () => {

    return (
        <div className={'howTo ' + styles.howTo}>
            <div className={styles.instruction}>
                <div className={styles.number}>
                    <span>01</span>
                </div>
                <div className={styles.content}>
                    <p><b>Connect your wallet.</b> <br />The eggs you have in your wallet will be displayed in the Penguin Nest below.</p>
                </div>
            </div>
            <hr />
            <div className={styles.instruction}>
                <div className={styles.number}>
                    <span>02</span>
                </div>
                <div className={styles.content}>
                    <p><b>Select how many and which eggs you want to hatch.</b></p>
                </div>
            </div>
            <hr />
            <div className={styles.instruction}>
                <div className={styles.number}>
                    <span>03</span>
                </div>
                <div className={styles.content}>
                    <p><b>Confirm the hatching</b> and <b>find out which penguins have hatched from your eggs</b> in the Penguin Nest below!</p>
                </div>
            </div>
        </div>
    );
};

export default HowToHatch;