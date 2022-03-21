import React from 'react';
// import { ReactComponent as HeartIcon } from '../../../assets/img/heart.svg';
import './index.scss';

const Footer = () => {
  return (
    <footer className='container'>
      {/* <div>
        <a
          {...{
            target: '_blank'
          }}
          className='d-flex align-items-center'
          href='https://elrond.com/'
        >
          Made with <HeartIcon className='mx-1' /> by Elrond Network.
        </a>
      </div> */}

      <img src="" alt="" className='logo' />
      <nav>
        <a href="">ROADMAP</a>
        <a href="">TEAM</a>
        <a href="">LAUNCH PAD</a>
        <a href="">COMUNITY</a>
        <a href="">GLOBAL</a>
        <a href="">FAQ</a>
      </nav>
    </footer>
  );
};

export default Footer;
