import * as React from 'react';
import DiscordIcon from 'components/Icon/Discord';
import styles from './awardpopup.module.scss';
import Popup from './Popup';

const AwardPopup = () => {
    const [isOpen, setIsOpen] = React.useState('');

    React.useEffect(() => {
        setTimeout(() => {
            setIsOpen(Math.random().toString());
        }, 1000);
    }, []);

    const closePopup = () => {
        setIsOpen('');
    };

    return (
        <Popup isOpen={isOpen} position='right'>
            <div className={styles.main}>
                <div className={styles.closePopup} onClick={closePopup}>
                    <img src="/img/icons/close.svg" alt="close" />
                </div>
                <img src="/img/popup.png" />
                <div className={styles.content}>
                    <h3>YOU RECEIVED AN ANGRY PENGUINS STATUE ON YOUR WALLET ?</h3>
                    <p>Go to the « statue-airdrop-contest! » channel of our discord & follow the instructions to participate !</p>
                    <a href='TODO: add discord link' className={styles.button + ' button'}><DiscordIcon /><span className={styles.text}>JOIN NOW</span></a>
                </div>
            </div>
        </Popup>
    );
};

export default AwardPopup;