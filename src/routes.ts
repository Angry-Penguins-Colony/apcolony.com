import { dAppName } from 'config';
import HatchingHome from 'pages/hatching/HatchingHome/HatchingHome';
import HatchingSelection from 'pages/hatching/HatchingSelection/HatchingSelection';
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
  hatchingHome: '/hatch',
  hatchingSelection: '/hatch/selection',
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
    path: routeNames.hatchingHome,
    title: 'Hatching',
    component: HatchingHome
  },
  {
    path: routeNames.hatchingSelection,
    title: 'Hatching Selection',
    component: HatchingSelection
  },
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
