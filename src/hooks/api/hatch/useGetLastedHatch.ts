import React from 'react';
import { ItemData } from 'structs/ItemData';
import { getPenguinDescription } from 'texts';

export const useGetLastedHatch = () => {

    const [eggsHatch, setEggsHatch] = React.useState<ItemData[]>([]);

    React.useEffect(() => {

        setTimeout(() => {
            setEggsHatch([
                {
                    id: '1',
                    type: 'penguin',
                    title: 'Angry Pinguin #0550',
                    thumbail: '/img/penguins/Untitled design-2.png',
                    description: getPenguinDescription()
                },
                {
                    id: '2',
                    type: 'penguin',
                    title: 'Angry Pinguin #8745',
                    thumbail: '/img/penguins/Untitled design-3.png',
                    description: getPenguinDescription()
                },
                {
                    id: '3',
                    type: 'penguin',
                    title: 'Angry Pinguin #8272',
                    thumbail: '/img/penguins/Untitled design-5.png',
                    description: getPenguinDescription()
                },
                {
                    id: '4',
                    type: 'penguin',
                    title: 'Angry Pinguin #2887',
                    thumbail: '/img/penguins/Untitled design-7.png',
                    description: getPenguinDescription()
                }
            ]);
        }, 3500);
    });

    return eggsHatch;
};