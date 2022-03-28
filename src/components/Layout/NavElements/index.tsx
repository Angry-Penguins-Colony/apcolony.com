import React from 'react';
import FollowUs from 'components/FollowUs/FollowUs';
import styles from './index.module.scss';


const NavElements = (props: { isOpen?: boolean; }) => {
    const isOpen = props.isOpen || false;

    return (
        <nav className={styles.nav + ' ' + (isOpen ? styles.isOpen : styles.isClose)
        }>
            <a href="#roadMap">ROADMAP</a>
            <a href="#theTeam">TEAM</a>
            <a href="#ourCommunity">COMUNITY</a>
            <a href="#ourLaunchpad">LAUNCHPAD</a>
            <a href="#globalPenguinSociety">ASSOCIATION</a>
            <a href="#faq">FAQ</a>
            <a href="/LITE PAPER.pdf">LITEPAPER</a>
            <FollowUs />
        </nav >
    );
};

export default NavElements;
