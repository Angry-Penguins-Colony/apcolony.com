import * as React from 'react';
import Popup from 'pages/Home/Popup';
import styles from './rarityInfos.module.scss';

const RarityInfos = () => {

    const [rarityInfosOpen, setRarityInfosOpen] = React.useState(false);

    return (
        <>
            <div className={styles.rarityInfos} onClick={() => setRarityInfosOpen(true)}>
                <div className={styles.content}>
                    <span className={styles.icon}>!</span>
                    <p>EGGS RARITY RANK INFOS</p>
                </div>
            </div>

            <Popup position="bottom" isOpen={rarityInfosOpen} onClose={() => setRarityInfosOpen(false)} className={styles.rarityPopup}>
                <div className={styles.content}>
                    <div className={styles.egg}>
                        <img src="/img/eggs/Silver_egg.png" alt="Silver Egg" />
                        <p>RANK 1 EGG</p>
                    </div>
                    <div className={styles.egg}>
                        <img src="/img/eggs/Gold_egg.png" alt="Gold Egg" />
                        <p>RANK 2 EGG</p>
                    </div>
                    <div className={styles.egg}>
                        <img src="/img/eggs/Diamond_egg.png" alt="Diamond Egg" />
                        <p>RANK 3 EGG</p>
                    </div>
                </div>
            </Popup>
        </>
    );
};

export default RarityInfos;