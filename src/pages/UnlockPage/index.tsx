import React from 'react';
import {
  ExtensionLoginButton,
  WebWalletLoginButton,
  LedgerLoginButton,
  WalletConnectLoginButton
} from '@multiversx/sdk-dapp/UI';
import { routeNames } from 'config';
import './index.scss';

export const UnlockRoute: () => JSX.Element = () => {

  return (
    <div className='home d-flex flex-fill align-items-center'>
      <div className='m-auto' data-testid='unlockPage'>
        <div className='my-4 text-center'>
          <div className='py-4 px-2 px-sm-2 mx-lg-4'>
            <h4 className='mb-4'>Login</h4>
            <p className='mb-4'>pick a login method</p>

            <div className='d-flex flex-column justify-content-center unlock-page'>

              <WalletConnectLoginButton
                loginButtonText={'xPortal'}

                isWalletConnectV2={true}
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
