import React from 'react';
import { API, hatchConfig } from 'config';
import { useStateValidate } from 'hooks/common/useStateValidate';
import { fromNft, ItemData, ItemType } from 'structs/ItemData';
import { NFT } from 'structs/NFT';
import { getEggDescription, getPenguinDescription } from 'texts';
import { useFetchWithAddress } from '../common/useFetchWithAddress';

const useGetInventory = () => {

    const { output: nfts } = useFetchWithAddress(
        (addr) => API.getNfts(addr, [hatchConfig.eggsIdentifier, hatchConfig.penguinsIdentifier]),
        Promise.resolve([] as NFT[])
    );

    const items = nfts != undefined ? sortItems(nfts?.map(fromNft)) : undefined;


    return { items };
};

export default useGetInventory;

function sortItems(items: ItemData[]) {
    return items.sort((a, b) => {
        if (a.type === ItemType.Penguin) {
            return -1;
        } else if (b.type === ItemType.Egg) {
            return 1;
        } else {
            return 0;
        }
    });
}

const mockupData = [
    {
        type: 'egg',
        title: 'Tier 1 Egg',
        thumbail: '/img/eggs/Silver_egg.png',
        tier: 1,
        id: '8745',
        description: getEggDescription(1)
    },
    {
        type: 'egg',
        title: 'Tier 1 Egg',
        thumbail: '/img/eggs/Silver_egg.png',
        tier: 1,
        id: '2783',
        description: getEggDescription(1)
    },
    {
        type: 'egg',
        title: 'Tier 1 Egg',
        thumbail: '/img/eggs/Silver_egg.png',
        tier: 1,
        id: '387451',
        description: getEggDescription(1)
    },
    {
        type: 'egg',
        title: 'Tier 2 Egg',
        thumbail: '/img/eggs/Gold_egg.png',
        tier: 2,
        id: '7',
        description: getEggDescription(2)
    },
    {
        type: 'egg',
        title: 'Tier 2 Egg',
        thumbail: '/img/eggs/Gold_egg.png',
        tier: 2,
        id: '8754245',
        description: getEggDescription(2)
    },
    {
        type: 'egg',
        title: 'Tier 3 Egg',
        thumbail: '/img/eggs/Diamond_egg.png',
        tier: 3,
        id: '574',
        description: getEggDescription(3)
    },
    {
        type: 'egg',
        title: 'Tier 3 Egg',
        thumbail: '/img/eggs/Diamond_egg.png',
        tier: 3,
        id: '7461',
        description: getEggDescription(3)
    },
    {
        type: 'egg',
        title: 'Tier 3 Egg',
        thumbail: '/img/eggs/Diamond_egg.png',
        tier: 3,
        id: '8741',
        description: getEggDescription(3)
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-2.png',
        id: '17',
        description: getPenguinDescription()
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-3.png',
        id: '57',
        description: getPenguinDescription()
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-4.png',
        id: '872',
        description: getPenguinDescription()
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-5.png',
        id: '8767825734',
        description: getPenguinDescription()
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-6.png',
        id: '387',
        description: getPenguinDescription()
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-7.png',
        id: '8753',
        description: getPenguinDescription()
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-8.png',
        id: '558758785',
        description: getPenguinDescription()
    }
];
