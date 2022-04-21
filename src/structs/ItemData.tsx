import { v4 as uuidv4 } from 'uuid';
import { hatchConfig } from 'config';
import { getEggDescription, getPenguinDescription } from 'texts';
import { EggTier, fromNonce } from './EggTier';
import { NFT } from './NFT';

export enum ItemType {
    Penguin,
    Egg
}

export interface ItemData {
    type: ItemType;
    thumbnail: string;
    id: string;
    description: string;
    title?: string;
    tier?: EggTier;
}

export function fromNft(nft: NFT): ItemData {


    switch (nft.identifier) {
        case hatchConfig.eggsIdentifier:

            const tier = fromNonce(nft.nonce);

            return {
                type: ItemType.Egg,
                title: `Tier ${tier} Egg`,
                thumbnail: getEggThumbnail(tier),
                tier,
                id: uuidv4(),
                description: getEggDescription(tier),

            };

        case hatchConfig.penguinsIdentifier:
            return {
                type: ItemType.Penguin,
                thumbnail: nft.uri,
                id: uuidv4(),
                description: getPenguinDescription()
            };

        default:
            throw new Error(`Unknown identifier: ${nft.identifier}`);
    }
}

function getEggThumbnail(tier: EggTier): string {
    switch (tier) {
        case EggTier.Diamond:
            return '/img/eggs/Diamond_egg.png';
        case EggTier.Gold:
            return '/img/eggs/Gold_egg.png';
        case EggTier.Silver:
            return '/img/eggs/Silver_egg.png';
        default:
            throw new Error('Invalid egg tier');
    }
}