import React from 'react';
import styles from './index.module.scss';


const NavElements = () => {
    return (
        <nav className={styles.nav}>
            <a href="#roadMap">ROADMAP</a>
            <a href="#theTeam">TEAM</a>
            <a href="#ourCommunity">COMUNITY</a>
            <a href="#ourLaunchpad">LAUNCHPAD</a>
            <a href="#globalPenguinSociety">ASSOCIATION</a>
            <a href="#faq">FAQ</a>
            <a href="/LITE PAPER.pdf">LITEPAPER</a>
        </nav>
    );
};

export default NavElements;
