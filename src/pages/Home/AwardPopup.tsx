import * as React from 'react';
import DiscordIcon from 'components/Icon/Discord';
import { routeNames } from 'routes';
import styles from './awardpopup.module.scss';
import Popup from './Popup';

const AwardPopup = () => {
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
        setTimeout(() => {
            setIsOpen(true);
        }, 1000);
    }, []);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <Popup isOpen={isOpen} position='right' onClose={closePopup}>
            <div className={styles.main}>
                <div className={styles.closePopup} onClick={closePopup}>
                    <img src="/img/icons/close.svg" alt="close" />
                </div>
                <img src="/img/popup.png" />
                <div className={styles.content}>
                    <h3>YOU RECEIVED AN ANGRY PENGUINS STATUE ON YOUR WALLET ?</h3>
                    <p>Go to the « statue-airdrop-contest! » channel of our discord & follow the instructions to participate !</p>
                    <a href={routeNames.discord} target="_blank" rel="noopener noreferrer" className={styles.button + ' button'}><DiscordIcon /><span className={styles.text}>JOIN NOW</span></a>
                </div>
            </div>
        </Popup>
    );
};

export default AwardPopup;