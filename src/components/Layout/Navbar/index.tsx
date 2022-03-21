import React from 'react';
// import { logout, useGetAccountInfo } from '@elrondnetwork/dapp-core';
// import { Navbar as BsNavbar, NavItem, Nav } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
// import { dAppName } from 'config';
// import { routeNames } from 'routes';
// import { ReactComponent as ElrondLogo } from './../../../assets/img/elrond.svg';
import './index.scss';


const Navbar = () => {
  // const { address } = useGetAccountInfo();

  // const handleLogout = () => {
  //   logout(`${window.location.origin}/unlock`);
  // };

  // const isLoggedIn = Boolean(address);

  return (
    // <BsNavbar className='bg-white border-bottom px-4 py-3'>
    //   <div className='container-fluid'>
    //     <Link
    //       className='d-flex align-items-center navbar-brand mr-0'
    //       to={routeNames.home}
    //     >
    //       <ElrondLogo className='elrond-logo' />
    //       <span className='dapp-name text-muted'>{dAppName}</span>
    //     </Link>

    //     <Nav className='ml-auto'>
    //       {isLoggedIn && (
    //         <NavItem>
    //           <button className='btn btn-link' onClick={handleLogout}>
    //             Close
    //           </button>
    //         </NavItem>
    //       )}
    //     </Nav>
    //   </div>
    // </BsNavbar>
    <header className='container'>
      <a href="/" className='logo'>
        <img src="/img/APC_LOGO_BLUE_WHITE.svg" alt="Angry Penguins Logo" />
      </a>
      <nav>
        <a href="">ROADMAP</a>
        <a href="">TEAM</a>
        <a href="">COMUNITY</a>
        <a href="">LAUNCHPAD</a>
        <a href="">ASSOCIATION</a>
        <a href="">FAQ</a>
      </nav>
      <div className="buttons">
        <a className="button button-outline icon twitter">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 514.26 418.08"><g id="a" /><path d="M161.7,417.93c164.67,1.15,299.09-131.41,300.24-296.09,0-1.38,0-2.77,0-4.15,0-4.56,0-9-.3-13.65,20.65-14.94,38.46-33.44,52.62-54.63-19.25,8.55-39.68,14.15-60.6,16.62,22.03-13.18,38.52-33.92,46.41-58.35-20.71,12.29-43.36,20.95-66.99,25.62-39.93-42.51-106.76-44.6-149.27-4.67-27.45,25.78-39.09,64.23-30.55,100.91-84.85-4.25-163.91-44.32-217.5-110.25-28.08,48.25-13.77,110.02,32.67,141-16.76-.51-33.15-5.04-47.79-13.2v1.35c0,50.23,35.42,93.5,84.66,103.44-15.54,4.24-31.85,4.85-47.67,1.8,13.82,42.99,53.43,72.44,98.58,73.29-37.37,29.34-83.53,45.25-131.04,45.18-8.41,0-16.82-.49-25.17-1.47,48.25,31,104.41,47.46,161.76,47.4" /></svg>
        </a>
        <a className="button button-outline icon discord">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 541.29 418.9"><path d="M458.41,35.08C422.93,18.48,385.4,6.68,346.81,0c-5.26,9.65-10.04,19.56-14.31,29.7-40.99-6.26-82.69-6.26-123.68,0-4.3-10.14-9.13-20.05-14.46-29.7-38.63,6.68-76.2,18.51-111.69,35.17C19.52,126.79-8.92,237.9,2.45,348.6c41.22,31.18,87.55,54.95,136.91,70.27,11.09-15.25,20.89-31.4,29.31-48.27-16.03-6.11-31.48-13.63-46.17-22.48,3.88-3.01,7.66-6.01,11.33-9.02,86.48,41.61,187.19,41.61,273.66,0,3.7,3.01,7.48,6.01,11.33,9.02-14.72,8.87-30.2,16.41-46.26,22.51,8.41,16.88,18.21,33.02,29.31,48.27,49.38-15.27,95.73-39.02,136.97-70.18,11.4-110.79-17.13-222.01-80.43-313.64ZM180.77,285.51c-28.6-2.07-50.25-26.7-48.63-55.33-1.79-28.69,19.95-53.43,48.63-55.36,28.61,1.74,50.4,26.35,48.66,54.97,0,.13-.02,.27-.03,.4,1.8,28.69-19.95,53.44-48.63,55.33Zm179.74,0c-28.6-2.07-50.25-26.7-48.63-55.33-1.79-28.69,19.95-53.43,48.63-55.36,28.61,1.74,50.4,26.35,48.66,54.97,0,.13-.02,.27-.03,.4,1.78,28.69-19.95,53.42-48.63,55.33Z" /></svg>
        </a>
        <a className="button">CONNECT WALLET</a>
        <a className="button button-outline">TEST CUSTOMIZATION</a>
      </div>
    </header>
  );
};

export default Navbar;
