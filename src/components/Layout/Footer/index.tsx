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
        {/* <a className="button">CONNECT WALLET</a> */}
        {/* TODO: bind button */}
        <FollowUs />



      </div>

      <div className={'signature' + ' ' + 'd-flex flex-column align-self-center align-items-center'}>
        <a href="https://gax.design" target="_blank" rel="noopener noreferrer">
          WEBDESIGN BY<br />
          <img src="/img/GAX_LOGO.svg" />
        </a>
      </div>

    </footer>
  );
};

export default Footer;
