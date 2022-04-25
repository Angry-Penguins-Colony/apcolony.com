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
    nonce: number;
    title?: string;
    tier?: EggTier;
}

export function fromNft(nft: NFT): ItemData[] {

    switch (nft.identifier) {
        case hatchConfig.eggsIdentifier:

            const tier = fromNonce(nft.nonce);

            return generateItems({
                type: ItemType.Egg,
                thumbnail: getEggThumbnail(tier),
                description: getEggDescription(tier),
                id: '',
                nonce: nft.nonce,
                title: `Rank ${nft.nonce} Egg`,
                tier,
            }, nft.balance);

        case hatchConfig.penguinsIdentifier:
            return generateItems({
                type: ItemType.Penguin,
                thumbnail: nft.uri[0],
                description: getPenguinDescription(),
                title: 'Penguin #' + nft.nonce,
                nonce: nft.nonce,
                id: '',
            }, nft.balance);

        default:
            throw new Error(`Unknown identifier: ${nft.identifier}`);
    }
}

function generateItems(item: ItemData, balance: number): ItemData[] {

    const items = [];

    for (let i = 0; i < balance; i++) {

        // copy object
        const newItem = { key: i, ...item };

        // generate id
        newItem.id = hash(newItem);
        items.push(newItem);
    }

    return items;
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