import React from 'react';
import FollowUs from 'components/FollowUs/FollowUs';
import styles from './index.module.scss';


const NavElements = (props: { isOpen?: boolean; }) => {
    const isOpen = props.isOpen || false;

    return (
        <nav className={'d-flex flex-column' + ' ' + (isOpen ? styles.isOpen : styles.isClose)
        }>
            <div className={styles.navLinksContainer}>

                <a href="#roadMap">ROADMAP</a>
                <a href="#theTeam">TEAM</a>
                <a href="#ourCommunity">COMMUNITY</a>
                <a href="#ourLaunchpad">LAUNCHPAD</a>
                <a href="#globalPenguinSociety">ASSOCIATION</a>
                <a href="#faq">FAQ</a>
                <a href="/LITE PAPER.pdf">LITEPAPER</a>
            </div>
            <FollowUs />
        </nav >
    );
};

export default NavElements;
