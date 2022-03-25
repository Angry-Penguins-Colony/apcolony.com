import * as React from 'react';
import styles from './bigTitleSlide.module.scss';

const BigTitleSlide = () => {
    return (
        <div className={styles.bigTitleSlide + ' container-xl'}>
            <Floor className={styles.floor_1}>
                <Penguin src='/img/penguins/Untitled design-7.png' />
            </Floor>
            <Floor className={styles.floor_2}>
                <Penguin src='/img/penguins/Untitled design-13.png' />
                <Penguin src='/img/penguins/Untitled design copie.png' />
            </Floor>
            <div className={styles.text + ' ' + styles.ourCommunity}>
                <h2 className={styles.content}>OUR COMMUNITY</h2>
                <div className={styles.backText}></div>
            </div>
            <Floor className={styles.floor_3}>
                <Penguin src='/img/penguins/Untitled design-9.png' />
                <Penguin src='/img/penguins/Untitled design-5.png' />
            </Floor>
            <div className={styles.text + ' ' + styles.subTitle}>
                <p className={styles.content}>OWNING AN ANGRY PENGUIN MEANS<br />DECIDING THE FUTURE OF THE PROJECT;</p>
                <div className={styles.backText}></div>
            </div>
            <Floor className={styles.floor_4}>
                <Penguin src='/img/penguins/Untitled design-12.png' />
                <Penguin src='/img/penguins/Untitled design-10.png' />
                <Penguin src='/img/penguins/Untitled design-3.png' />
            </Floor>
        </div >
    );
};

export default BigTitleSlide;


const Floor = (props: {
    className: string;
    children: React.ReactNode;
}) => {
    const specificClassName = props.className;
    const children = props.children;

    return (
        <div className={styles.floor + ' ' + specificClassName}>
            {children}
            <div className={styles.gradient}></div>
        </div>
    );
};

const Penguin = (props: {
    src: string;
}) => {
    const src = props.src;

    return (
        <div className={styles.penguin}>
            <img src={src} />
        </div>
    );
};