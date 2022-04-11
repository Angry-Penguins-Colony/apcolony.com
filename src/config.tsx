import { Address } from '@elrondnetwork/erdjs/out';
import { GatewayAPI } from 'apiRequests/GatewayAPI';

export const dAppName = 'Angry Penguins';

export const mintAddress = new Address('erd1qqqqqqqqqqqqqpgqc6045edgy0sde50u7qpmtxjdp32jvulx2c8qkju6vv');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainnetGateway = 'https://api-eu1.tatum.io/v3/egld/node/6cf90622-7c84-4dad-9ced-95d929227e9d_100';
const devnetGateway = 'https://api-eu1.tatum.io/v3/egld/node/5a64b68c-ef24-4a43-966c-18da2cb1eb02_100';

export const API = new GatewayAPI(devnetGateway, mintAddress);
export const totalSupply = 10000;

// GET THEM FROM SC
export const publicSaleOpen = new Date('10 April 2022 16:00:00 UTC');
export const publicSaleClose = new Date('13 April 2022 16:00:00 UTC');
export const maxPerWallet = 20;
export const priceList = [
    1,
    1,
    0.95,
    0.95,
    0.92,
    0.92,
    0.9,
    0.9,
    0.875,
    0.85,
    0.85,
    0.85,
    0.85,
    0.85,
    0.85,
    0.85,
    0.85,
    0.85,
    0.85,
    0.8
];

export const reducedPriceList = [
    0.9,
    0.9,
    0.875,
    0.875,
    0.85,
    0.85,
    0.825,
    0.825,
    0.8,
    0.8,
    0.8,
    0.8,
    0.8,
    0.8,
    0.8,
    0.8,
    0.8,
    0.8,
    0.8,
    0.75
];