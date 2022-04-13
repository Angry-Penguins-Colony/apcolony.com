import { GatewayAPI } from 'apiRequests/GatewayAPI';
import { getMintConfig } from 'structs/MintConfig';
import 'dotenv/config';

export const environment = process.env.REACT_APP_NET?.trim() ?? '';
export const dAppName = 'Angry Penguins';

export const devModeActivate = process.env.NODE_ENV === 'development';
export const totalSupply = 10000;
export const startingSupply = 3000;
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

export const getImagesFor = (n: number) => {
    if (n == 1) {
        return undefined;
    }
    else if (n == 2 || n == 3) {
        return 'A-hat-cap-egld-black.png';
    }
    else if (n == 4 || n == 5) {
        return 'B-chain-apc-silver.png';
    }
    else if (n == 6 || n == 7) {
        return 'C-weapon-fishing-rod.png';
    }
    else if (n == 8 || n == 9 || n == 10) {
        return 'D-skin-reversed.png';
    }
    else {
        return 'E-chain-egld-gold.png';
    }
};

export const API = new GatewayAPI(getGateway(), mintConfig.contractAddress);