import React from 'react';
import FollowUs from 'components/FollowUs/FollowUs';
import NavElements from '../NavElements';
import './index.scss';

const Footer = () => {
  return (
    <footer>
      <div className='container content'>
        <img src="/img/APC_LOGO_BLUE.svg" alt="Angry Penguins Logo" className='logo' />
        <NavElements />
        <a className="button">CONNECT WALLET</a>
        {/* TODO: bind button */}
        <FollowUs />
      </div>
    </footer>
  );
};

export default Footer;
