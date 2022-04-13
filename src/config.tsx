import { GatewayAPI } from 'apiRequests/GatewayAPI';
import { getMintConfig } from 'structs/MintConfig';
import 'dotenv/config';

export const environment = process.env.REACT_APP_NET?.trim() ?? '';
export const dAppName = 'Angry Penguins';

export const devModeActivate = process.env.NODE_ENV === 'development';
export const totalSupply = 10000;
export const mintConfig = getMintConfig();

const getGateway = () => {
    switch (environment) {
        case 'mainnet':
            return 'https://api-eu1.tatum.io/v3/egld/node/6cf90622-7c84-4dad-9ced-95d929227e9d_100';

        case 'devnet':
            return 'https://api-eu1.tatum.io/v3/egld/node/5a64b68c-ef24-4a43-966c-18da2cb1eb02_100';

        default:
            throw new Error('Unknown environment: "' + environment + '"');
    }
};

export const API = new GatewayAPI(getGateway(), mintConfig.contractAddress);