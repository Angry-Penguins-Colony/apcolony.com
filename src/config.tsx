import { GatewayAPI } from 'apiRequests/GatewayAPI';
import { devnetHatchConfig, devnetMintConfig } from 'config-sc-devnet';
import { mainnetHatchConfig, mainnetMintConfig } from 'config-sc-mainnet';
import { assertValid } from 'structs/MintConfig';

const discord = 'https://discord.gg/KxxrVQTVCV';
const twitter = 'https://twitter.com/angrypenguins_';

export const routeNames = {
    home: '/',
    transaction: '/transaction',
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

export const environment = process.env.REACT_APP_NET?.trim() ?? '';

const getTotalConfig = () => {
    switch (environment) {
        case 'mainnet':
            assertValid(mainnetMintConfig);
            return {
                mintConfig: mainnetMintConfig,
                hatchConfig: mainnetHatchConfig,
                gateway: 'https://api-eu1.tatum.io/v3/egld/node/6cf90622-7c84-4dad-9ced-95d929227e9d',
                api: 'https://api.elrond.com'
            };

        case 'devnet':
            assertValid(devnetMintConfig);
            return {
                mintConfig: devnetMintConfig,
                hatchConfig: devnetHatchConfig,
                gateway: 'https://api-eu1.tatum.io/v3/egld/node/6ecbdd2a-31e1-4296-b33c-1720e4130263',
                api: 'https://devnet-api.elrond.com'
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
export const API = new GatewayAPI(totalConfig.gateway, totalConfig.api, mintConfig.contractAddress);

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

