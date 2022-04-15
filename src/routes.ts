import { dAppName } from 'config';
import UnlockPage from 'pages/UnlockPage';
import withPageTitle from './components/PageTitle';
import Home from './pages/Home';
import Transaction from './pages/Transaction';

const discord = 'https://discord.com/invite/aZ3Fjp8Vna';
const twitter = 'https://twitter.com/angrypenguins_';

export const routeNames = {
  home: '/',
  transaction: '/transaction',
  unlock: '/unlock',
  ledger: '/ledger',
  walletconnect: '/walletconnect',
  discord: discord,
  twitter: twitter,
  skipperDiscord: discord,
  skipperTwitter: 'https://twitter.com/APCSkipper',
  fargerikDiscord: discord,
  fargerikTwitter: twitter,
  seymourDiscord: discord,
  seymourTwitter: twitter,
  ricoDiscord: discord,
  ricoTwitter: twitter,
  bossQcDiscord: discord,
  bossQcTwitter: twitter,
};

const routes: Array<any> = [
  {
    path: routeNames.home,
    title: 'Home',
    component: Home
  },
  {
    path: routeNames.transaction,
    title: 'Transaction',
    component: Transaction
  },
  {
    path: routeNames.unlock,
    title: 'Connect wallet',
    component: UnlockPage
  }
];

const mappedRoutes = routes.map((route) => {
  const title = route.title
    ? `${route.title} • ${dAppName}`
    : `${dAppName}`;

  const requiresAuth = Boolean(route.authenticatedRoute);
  const wrappedComponent = withPageTitle(title, route.component);

  return {
    path: route.path,
    component: wrappedComponent,
    authenticatedRoute: requiresAuth
  };
});

export default mappedRoutes;
