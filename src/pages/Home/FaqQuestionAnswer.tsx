import * as React from 'react';
import styles from './faqQuestionAnswer.module.scss';

const FaqQuestionAnswer = (props: {
    question: string;
    children: React.ReactNode;
}) => {
    const question = props.question;
    const children = props.children;

    const [isOpen, setIsOpen] = React.useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={styles.faqQuestionAnswer + (isOpen ? ' ' + styles.isOpen : '')}>
            <div className={styles.head} onClick={toggleOpen}>
                <div className={styles.question}>{question}</div>
                <div className={styles.icon + ' button icon'}>
                    <img src="/img/icons/plus.svg" alt="Expand" className={styles.expand} />
                    <img src="/img/icons/minus.svg" alt="Reduce" className={styles.reduce} />
                </div>
            </div>
            <div className={styles.answer}>
                {children}
            </div>
        </div >
    );
};

export default FaqQuestionAnswer;