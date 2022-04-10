import * as React from 'react';
import styles from './popup.module.scss';

const Popup = (props: {
    isOpen?: boolean;
    onClose: () => void;
    position?: string;
    children: any;
}) => {
    const position = props.position || 'bottom';
    const children = props.children;

    return (
        <div className={styles.popup + ' ' + (props.isOpen ? styles.isOpen : styles.isClose) + ' ' + styles[position]}>
            <div className={styles.closePopup} onClick={props.onClose}>
                <img src="/img/icons/close.svg" alt="close" />
            </div>
            {children}
        </div>
    );
};

export default Popup;