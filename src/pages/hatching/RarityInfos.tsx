import * as React from 'react';
import Popup from 'pages/Home/Popup';
import styles from './rarityInfos.module.scss';

const RarityInfos = () => {

    const [rarityInfosOpen, setRarityInfosOpen] = React.useState(false);

    const [styleRarityInfo, setStyleRarityInfo] = React.useState({ 'bottom': 20 - window.scrollY * 2 + 'px' });

    React.useEffect(() => {
        const onScroll = () => setStyleRarityInfo({ 'bottom': 20 - window.scrollY * 2 + 'px' });

        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <div className={'rarityInfos ' + styles.rarityInfos} onClick={() => setRarityInfosOpen(true)} style={styleRarityInfo}>
                <div className={styles.content}>
                    <span className={styles.icon}>!</span>
                    <p>EGGS RARITY RANK INFOS</p>
                </div>
            </div>

            <Popup position="bottom" isOpen={rarityInfosOpen} onClose={() => setRarityInfosOpen(false)} className={styles.rarityPopup}>
                <div className={styles.content}>
                    <div className={styles.egg}>
                        <img src="/img/eggs/Diamond_egg.png" alt="Diamond Egg" />
                        <p>RANK 1 EGG</p>
                    </div>
                    <div className={styles.egg}>
                        <img src="/img/eggs/Gold_egg.png" alt="Gold Egg" />
                        <p>RANK 2 EGG</p>
                    </div>
                    <div className={styles.egg}>
                        <img src="/img/eggs/Silver_egg.png" alt="Silver Egg" />
                        <p>RANK 3 EGG</p>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default RarityInfos;