import * as React from 'react';
import styles from './itemsSlider.module.scss';

const ItemsSlider = () => {

    return (
        <div className={styles.itemsSlider}>
            <div className={styles.track}>
                <AnItem src='/img/items/CGS_Submachine gun_TK02.png' />
                <AnItem src='/img/items/CGS_Gold Bec Fermé_TK02.png' />
                <AnItem src='/img/items/CGS_Couronne_TK02.png' />
                <AnItem src='/img/items/CGS_Bec Piece EGLD_TK02.png' />
                <AnItem src='/img/items/CGS_Mariniere Bleu_TK01.png' />
                <AnItem src='/img/items/CGS_Yeux Vert_TK02.png' />
                <AnItem src='/img/items/CGS_Skin Leopard_TK01.png' />
                <AnItem src='/img/items/CGS_Bec Party Horn_TK02.png' />
                <AnItem src='/img/items/CGS_Anchor_TK01-1.png' />
                <AnItem src='/img/items/CGS_Spear_TK03_Version Frost.png' />

                <AnItem src='/img/items/CGS_Submachine gun_TK02.png' />
                <AnItem src='/img/items/CGS_Gold Bec Fermé_TK02.png' />
                <AnItem src='/img/items/CGS_Couronne_TK02.png' />
                <AnItem src='/img/items/CGS_Bec Piece EGLD_TK02.png' />
                <AnItem src='/img/items/CGS_Mariniere Bleu_TK01.png' />
                <AnItem src='/img/items/CGS_Yeux Vert_TK02.png' />
                <AnItem src='/img/items/CGS_Skin Leopard_TK01.png' />
                <AnItem src='/img/items/CGS_Bec Party Horn_TK02.png' />
                <AnItem src='/img/items/CGS_Anchor_TK01-1.png' />
                <AnItem src='/img/items/CGS_Spear_TK03_Version Frost.png' />
            </div>
            <div className={styles.track + ' ' + styles.revert}>
                <AnItem src='/img/items/CGS_Bec Dagger_TK01.png' />
                <AnItem src='/img/items/CGS_Chaine Rappeur 2_TK01.png' />
                <AnItem src='/img/items/CGS_Feather_TK02.png' />
                <AnItem src='/img/items/CGS_Lifeguard_TK01.png' />
                <AnItem src='/img/items/CGS_Penguin Joker Vest_TK01.png' />
                <AnItem src='/img/items/CGS_Oeil Rouge_TK01.png' />
                <AnItem src='/img/items/CGS_Spear_TK03_Version Normale.png' />
                <AnItem src='/img/items/CGS_Yeux Serpent_TK02.png' />
                <AnItem src='/img/items/fisherman jacket.png' />
                <AnItem src='/img/items/CGS_Hawai Bleu_TK03.png' />

                <AnItem src='/img/items/CGS_Bec Dagger_TK01.png' />
                <AnItem src='/img/items/CGS_Chaine Rappeur 2_TK01.png' />
                <AnItem src='/img/items/CGS_Feather_TK02.png' />
                <AnItem src='/img/items/CGS_Lifeguard_TK01.png' />
                <AnItem src='/img/items/CGS_Penguin Joker Vest_TK01.png' />
                <AnItem src='/img/items/CGS_Oeil Rouge_TK01.png' />
                <AnItem src='/img/items/CGS_Spear_TK03_Version Normale.png' />
                <AnItem src='/img/items/CGS_Yeux Serpent_TK02.png' />
                <AnItem src='/img/items/fisherman jacket.png' />
                <AnItem src='/img/items/CGS_Hawai Bleu_TK03.png' />
            </div>
        </div>
    );
};

export default ItemsSlider;



const AnItem = (props: {
    src: string;
}) => {
    const src = props.src;

    return (
        <div className={styles.anItem}>
            <img src={src} />
        </div>
    );
};