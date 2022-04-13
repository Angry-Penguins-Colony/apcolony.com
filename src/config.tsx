import { Address } from '@elrondnetwork/erdjs/out';
import { BigNumber } from 'bignumber.js';
import colors from 'colors';
import { GatewayAPI } from 'apiRequests/GatewayAPI';

colors.enable();

export const environment: 'mainnet' | 'devnet' = 'devnet';
export const dAppName = 'Angry Penguins';

console.log('Environment is ' + colors.green(environment));

export const devModeActivate = process.env.NODE_ENV === 'development';
export const mintAddress = new Address('erd1qqqqqqqqqqqqqpgqqlda8fa4707zqmjz5e9feeg2ncttz6j82c8q26fwzp');

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const mainnetGateway = 'https://api-eu1.tatum.io/v3/egld/node/6cf90622-7c84-4dad-9ced-95d929227e9d_100';
const devnetGateway = 'https://api-eu1.tatum.io/v3/egld/node/5a64b68c-ef24-4a43-966c-18da2cb1eb02_100';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const API = new GatewayAPI(environment == 'mainnet' ? mainnetGateway : devnetGateway, mintAddress);
export const totalSupply = 10000;

// GET THEM FROM SC
export const publicSaleOpen = new Date('11 April 2022 17:00:00 UTC');
export const publicSaleClose = new Date(publicSaleOpen.getTime() + 60 * 60 * 24 * 3 * 1000);
export const maxPerWallet = 20;
export const fullPriceList: BigNumber[] = [
    100 + '0'.repeat(16),
    100 + '0'.repeat(16),
    950 + '0'.repeat(15),
    950 + '0'.repeat(15),
    920 + '0'.repeat(15),
    920 + '0'.repeat(15),
    900 + '0'.repeat(15),
    900 + '0'.repeat(15),
    875 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    850 + '0'.repeat(15),
    800 + '0'.repeat(15),

].map(n => new BigNumber(n));

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
].map(n => new BigNumber(n));