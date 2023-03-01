import React from 'react';
import {
  TransactionsToastList,
  SignTransactionsModals,
  NotificationModal
} from '@multiversx/sdk-dapp/UI';
import { DappProvider } from '@multiversx/sdk-dapp/wrappers';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Layout from 'components/Layout';
import { environment, routeNames } from 'config';
import PageNotFound from 'pages/PageNotFound';
import routes from 'routes';

const App = () => {
  return (
    <Router>
      <DappProvider
        environment={environment}
        customNetworkConfig={{ name: 'customConfig', apiTimeout: 6000, walletConnectV2ProjectId: '91e54fcb2227b2c58e3c052f9806bdbe' }}
      >
        <Layout>
          <TransactionsToastList />
          <NotificationModal />
          <SignTransactionsModals className='custom-class-for-modals' />
          <Routes>
            {routes.map((route: any, index: number) => (
              <Route
                path={route.path}
                key={'route-key-' + index}
                element={<route.component />}
              />
            ))}
            <Route path="/unlock" element={<Navigate to={routeNames.home} />} />
            <Route path='*' element={<PageNotFound />} />
          </Routes>
        </Layout>
      </DappProvider>
    </Router>
  );
};

export default App;
