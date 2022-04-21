import React from 'react';
import { ItemData, ItemType } from 'structs/ItemData';
import { getPenguinDescription } from 'texts';

export const useGetLastedHatch = () => {

    const [eggsHatch, setEggsHatch] = React.useState<ItemData[]>([]);

    React.useEffect(() => {

        setTimeout(() => {
            setEggsHatch([
                {
                    id: '1',
                    type: ItemType.Penguin,
                    title: 'Angry Pinguin #0550',
                    thumbnail: '/img/penguins/Untitled design-2.png',
                    description: getPenguinDescription()
                },
                {
                    id: '2',
                    type: ItemType.Penguin,
                    title: 'Angry Pinguin #8745',
                    thumbnail: '/img/penguins/Untitled design-3.png',
                    description: getPenguinDescription()
                },
                {
                    id: '3',
                    type: ItemType.Penguin,
                    title: 'Angry Pinguin #8272',
                    thumbnail: '/img/penguins/Untitled design-5.png',
                    description: getPenguinDescription()
                },
                {
                    id: '4',
                    type: ItemType.Penguin,
                    title: 'Angry Pinguin #2887',
                    thumbnail: '/img/penguins/Untitled design-7.png',
                    description: getPenguinDescription()
                }
            ]);
        }, 3500);
    });

    return eggsHatch;
};