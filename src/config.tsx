import { Address } from '@elrondnetwork/erdjs/out';
import { GatewayAPI } from 'apiRequests/GatewayAPI';

export const dAppName = 'Angry Penguins';

export const mintAddress = new Address('erd1qqqqqqqqqqqqqpgqykzdq4xaa5jf0kq3fp76sd5tqgf40xpp2c8qlfr2lh');


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainnetGateway = 'https://api-eu1.tatum.io/v3/egld/node/6cf90622-7c84-4dad-9ced-95d929227e9d_100';
const devnetGateway = 'https://api-eu1.tatum.io/v3/egld/node/5a64b68c-ef24-4a43-966c-18da2cb1eb02_100';

export const API = new GatewayAPI(devnetGateway, mintAddress);
export const totalSupply = 10000;



// GET THEM FROM SC
export const publicSaleOpen = new Date('10 April 2022 16:00:00 UTC');
export const publicSaleClose = new Date('13 April 2022 16:00:00 UTC');