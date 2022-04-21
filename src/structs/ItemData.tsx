import hash from 'object-hash';
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

            return setId({
                type: ItemType.Egg,
                title: `Tier ${tier} Egg`,
                thumbnail: getEggThumbnail(tier),
                tier,
                description: getEggDescription(tier),
                id: ''
            });

        case hatchConfig.penguinsIdentifier:
            return setId({
                type: ItemType.Penguin,
                thumbnail: nft.uri[0],
                description: getPenguinDescription(),
                id: ''
            });

        default:
            throw new Error(`Unknown identifier: ${nft.identifier}`);
    }
}

function setId(object: ItemData): ItemData {
    object.id = hash(object);

    return object;
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