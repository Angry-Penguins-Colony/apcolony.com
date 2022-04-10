import * as React from 'react';
import styles from './popup.module.scss';

const Popup = (props: {
    isOpen?: boolean;
    onClose: () => void;
    position?: string;
    children: any;
    backdrop?: boolean;
}) => {
    const position = props.position || 'bottom';
    const children = props.children;

    const classNames = [
        styles.popup,
        (props.isOpen ? styles.isOpen : styles.isClose),
        styles[position],

    ];

    return <>
        <div className={(props.backdrop && props.isOpen) ? styles.backdrop : ''}></div>
        <div className={classNames.join(' ')}>
            <div className={styles.closePopup} onClick={props.onClose}>
                <img src="/img/icons/close.svg" alt="close" />
            </div>
            {children}
        </div>
    </>;
};

export default Popup;