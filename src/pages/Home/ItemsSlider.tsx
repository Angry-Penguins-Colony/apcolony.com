import * as React from 'react';
import styles from './itemsSlider.module.scss';

const ItemsSlider = () => {
    const [scrollPosition, setScrollPosition] = React.useState(0);
    const handleScroll = () => {
        const maxScroll = (200 * 12 + 13 * (12 + 1));
        let position = window.pageYOffset;

        while (position - maxScroll > 0) {
            position -= maxScroll;
        }

        setScrollPosition(position);
    };

    React.useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const normalStyle = {
        transform: `translateX(-${scrollPosition}px)`
    };

    const revertStyle = {
        transform: `translateX(${scrollPosition}px)`
    };

    return (
        <div className={styles.itemsSlider}>
            <div className={styles.track}>
                <AnItem src='/img/items/CGS_Anchor_TK01-1.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Bec Piece EGLD_TK02.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Chaine Rappeur 2_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Gold Bec Fermé_TK02.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Hoodie EGLD Noir_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Mariniere Bleu_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Penguin Joker Vest_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Skin Or_TK02.jpg ' style={normalStyle} />
                <AnItem src='/img/items/CGS_Yeux Bleu_TK02.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Yeux Serpent_TK02.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Chaine BTC Argent_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/fisherman jacket.jpg' style={normalStyle} />

                <AnItem src='/img/items/CGS_Anchor_TK01-1.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Bec Piece EGLD_TK02.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Chaine Rappeur 2_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Gold Bec Fermé_TK02.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Hoodie EGLD Noir_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Mariniere Bleu_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Penguin Joker Vest_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Skin Or_TK02.jpg ' style={normalStyle} />
                <AnItem src='/img/items/CGS_Yeux Bleu_TK02.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Yeux Serpent_TK02.jpg' style={normalStyle} />
                <AnItem src='/img/items/CGS_Chaine BTC Argent_TK01.jpg' style={normalStyle} />
                <AnItem src='/img/items/fisherman jacket.jpg' style={normalStyle} />
            </div>
            <div className={styles.track + ' ' + styles.revert}>
                <AnItem src='/img/items/CGS_Couronne_TK02.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Bec Party Horn_TK02.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Yeux qui pleure_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Submachine gun_TK02.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Skin Argent_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Oeil Rouge_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Trident_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Spear_TK03_Version Frost.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Hoodie EGLD Noir_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Bec Dagger_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Yeux Vert_TK02.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Lifeguard_TK01.jpg' style={revertStyle} />

                <AnItem src='/img/items/CGS_Couronne_TK02.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Bec Party Horn_TK02.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Yeux qui pleure_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Submachine gun_TK02.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Skin Argent_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Oeil Rouge_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Trident_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Spear_TK03_Version Frost.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Hoodie EGLD Noir_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Bec Dagger_TK01.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Yeux Vert_TK02.jpg' style={revertStyle} />
                <AnItem src='/img/items/CGS_Lifeguard_TK01.jpg' style={revertStyle} />
            </div>
        </div>
    );
};

export default ItemsSlider;



const AnItem = (props: {
    src: string;
    style: {
        transform: string;
    }
}) => {
    const src = props.src;
    const style = props.style;

    return (
        <div className={styles.anItem} style={style}>
            <img src={src} />
        </div>
    );
};