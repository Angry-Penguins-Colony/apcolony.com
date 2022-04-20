import React from 'react';
import { ItemData } from 'structs/ItemData';

const useGetInventory = () => {

    const [items, setItems] = React.useState<ItemData[]>([]);

    // TODO: replace mockup by a real API call
    React.useEffect(() => {
        setTimeout(() => {
            setItems(mockupData);
        }, 1000);
    }, []);

    return { items };
};

export default useGetInventory;

const mockupData = [
    {
        type: 'egg',
        title: 'Tier 1 Egg',
        thumbail: '/img/eggs/Silver_egg.png',
        tier: 1,
        id: '8745',
    },
    {
        type: 'egg',
        title: 'Tier 1 Egg',
        thumbail: '/img/eggs/Silver_egg.png',
        tier: 1,
        id: '2783',
    },
    {
        type: 'egg',
        title: 'Tier 1 Egg',
        thumbail: '/img/eggs/Silver_egg.png',
        tier: 1,
        id: '387451',
    },
    {
        type: 'egg',
        title: 'Tier 2 Egg',
        thumbail: '/img/eggs/Gold_egg.png',
        tier: 2,
        id: '7',
    },
    {
        type: 'egg',
        title: 'Tier 2 Egg',
        thumbail: '/img/eggs/Gold_egg.png',
        tier: 2,
        id: '8754245',
    },
    {
        type: 'egg',
        title: 'Tier 3 Egg',
        thumbail: '/img/eggs/Diamond_egg.png',
        tier: 3,
        id: '574',
    },
    {
        type: 'egg',
        title: 'Tier 3 Egg',
        thumbail: '/img/eggs/Diamond_egg.png',
        tier: 3,
        id: '7461',
    },
    {
        type: 'egg',
        title: 'Tier 3 Egg',
        thumbail: '/img/eggs/Diamond_egg.png',
        tier: 3,
        id: '8741',
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-2.png',
        id: '17',
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-3.png',
        id: '57',
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-4.png',
        id: '872',
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-5.png',
        id: '8767825734',
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-6.png',
        id: '387',
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-7.png',
        id: '8753',
    },
    {
        type: 'penguin',
        thumbail: '/img/penguins/Untitled design-8.png',
        id: '558758785',
    }
];
