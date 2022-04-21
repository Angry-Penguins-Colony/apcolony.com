import { GatewayAPI } from 'apiRequests/GatewayAPI';
import { devnetHatchConfig, devnetMintConfig } from 'config-sc-devnet';
import { mainnetHatchConfig, mainnetMintConfig } from 'config-sc-mainnet';
import { assertValid } from 'structs/MintConfig';
import 'dotenv/config';

export const environment = process.env.REACT_APP_NET?.trim() ?? '';

const getTotalConfig = () => {
    switch (environment) {
        case 'mainnet':
            assertValid(mainnetMintConfig);
            return {
                mintConfig: mainnetMintConfig,
                hatchConfig: mainnetHatchConfig,
                gateway: 'https://api-eu1.tatum.io/v3/egld/node/6cf90622-7c84-4dad-9ced-95d929227e9d_100',
            };

        case 'devnet':
            assertValid(devnetMintConfig);
            return {
                mintConfig: devnetMintConfig,
                hatchConfig: devnetHatchConfig,
                gateway: 'https://api-eu1.tatum.io/v3/egld/node/5a64b68c-ef24-4a43-966c-18da2cb1eb02_100',
            };

        default:
            throw new Error('Unknown environment: "' + environment + '"');
    }
};

const totalConfig = getTotalConfig();


export const dAppName = 'Angry Penguins';

export const devModeActivate = process.env.NODE_ENV === 'development';
export const totalSupply = 10000;
export const startingSupply = 3000;

export const hatchConfig = totalConfig.hatchConfig;
export const mintConfig = totalConfig.mintConfig;
export const API = new GatewayAPI(totalConfig.gateway, mintConfig.contractAddress);

export const getImagesFor = (n: number) => {

    if (n == 1) {
        return undefined;
    }
    else if (n == 2 || n == 3) {
        return 'cap-egld-bonus.png';
    }
    else if (n == 4 || n == 5) {
        return 'chain-apc-silver.png';
    }
    else if (n == 6 || n == 7) {
        return 'fishingrod-bonus.png';
    }
    else if (n == 8 || n == 9 || n == 10) {
        return 'skin-reversed-bonus.png';
    }
    else {
        return 'chain-gold-bonus.png';
    }
};

