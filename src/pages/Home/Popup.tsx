import * as React from 'react';
import styles from './popup.module.scss';

const Popup = (props: { isOpen?: string; position?: string; children: any; }) => {
    const position = props.position || 'bottom';
    const children = props.children;

    const [isOpen, setIsOpen] = React.useState(props.isOpen || false);

    React.useEffect(() => {
        if (props.isOpen) {
            setIsOpen(true);
        } else {
            setIsOpen(false);
        }
    }, [props.isOpen]);

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <div className={styles.popup + ' ' + (isOpen ? styles.isOpen : styles.isClose) + ' ' + styles[position]}>
            <div className={styles.closePopup} onClick={closePopup}>
                <img src="/img/icons/close.svg" alt="close" />
            </div>
            {children}
        </div>
    );
};

export default Popup;