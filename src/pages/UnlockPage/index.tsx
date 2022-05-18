import React from 'react';
import { DappUI } from '@elrondnetwork/dapp-core';
import { routeNames } from 'config';
import './index.scss';

export const UnlockRoute: () => JSX.Element = () => {
  const {
    ExtensionLoginButton,
    WebWalletLoginButton,
    LedgerLoginButton,
    WalletConnectLoginButton
  } = DappUI;

  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto' data-testid='unlockPage'>
        <div className='my-4 text-center'>
          <div className='py-4 px-2 px-sm-2 mx-lg-4'>
            <h4 className='mb-4'>Login</h4>
            <p className='mb-4'>pick a login method</p>

            <div className='d-flex flex-column justify-content-center unlock-page'>

              <WalletConnectLoginButton
                callbackRoute={routeNames.home}
                loginButtonText={'Maiar'}
              />
              <WebWalletLoginButton
                callbackRoute={routeNames.home}
                loginButtonText={'Web wallet'}
              />
              <LedgerLoginButton
                loginButtonText={'Ledger'}
                callbackRoute={routeNames.home}
                className={'test-class_name'}
              />

              <ExtensionLoginButton
                callbackRoute={routeNames.home}
                loginButtonText={'Extension'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnlockRoute;
