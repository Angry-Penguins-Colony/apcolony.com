import React from 'react';
import DiscordIcon from 'components/Icon/Discord';
import { routeNames } from 'config';
import { EggTier } from 'structs/EggTier';

export function getPenguinDescription() {
    return 'This is your penguin! Soon, you will be able to customize him.';
}

export function getEggDescription(tier: EggTier) {
    switch (tier) {
        case EggTier.Silver:
            return 'This is a silver egg from the public sale.';

        case EggTier.Gold:
            return 'This is a gold egg from the second presale. You slightly increase your chance to get a better penguin.';

        case EggTier.Diamond:
            return 'This is a diamond egg from the first presale. You will have chance to get a better penguin.';

        default:
            throw new Error('Invalid tier');
    }
}

export const questionsFaq = [
    {
        question: 'What are the Angry Penguins ?',
        answer: 'Angry Penguins are a committed colony of 5,555 (max 10,000) randomly generated and customizable NFTs living on the Elrond blockchain. By owning Angry Penguins, you support the environmental protection that penguins and many other species call home.',
    },
    {
        question: 'Why are they angry ?',
        answer: 'The Earth has lost 28,000 billion tons of ice in 23 years. In addition to directly threatening human beings, this phenomenon endangers the survival of species living on the ice pack. We have therefore decided to inspire our entire collection around the protection of this environment and to donate 10% of the sales of each NFT to the Global Penguin Society.'
    },
    {
        question: 'How to buy an Angry Penguin ?',
        answer: 'Both presales were SOLD OUT. Public sale is over, you can buy Angry Penguins on other secondary marketplaces. You will be able to buy our NFTs on our marketplace once we launch it. Currently, the colony is composed of 5,555 penguins. The holders may decide to launch a new egg sale in the future if they wish.'
    },
    {
        question: 'I have purchased an egg, what do I do with it ?',
        answer: 'You can now hatch it in the "Hatch Now" tab of our site. You can also choose to keep it warm, the hatch feature will remain available indefinitely.'
    },
    {
        question: 'Why Elrond ?',
        answer: 'We strongly believe that the Elrond blockchain is revolutionary and in line with the values the team stands for through this project. We put the contribution to the development of Elrond as one of our priorities.'
    },
    {
        question: 'How to get your Emperor role in the discord ?',
        answer: <>
            Go to the #join channel and thanks to your erd address, our bot will check if you have eggs in your wallet. If you have eggs, you will then have access to some channels that only Emperors can see (the voting station, the chat for emperors and others)

            <div className='mt-5 d-flex justify-content-center align-items-center flex-column'>

                <a href={routeNames.discord} target="_blank" rel="noopener noreferrer" className='button button-outline icon' >
                    <DiscordIcon />
                </a>
            </div>
        </>
    },
    {
        question: 'What is the percentage of royalties on penguins & accessories ?',
        answer: <>
            The percentage of royalties for the Angry Penguins is set at 5% and only 2.5% for the accessories. These percentages were voted by our colony.<br />
            <br />
            On the eggs, the royalties had been fixed at 25% by holders (12.5% for the holders, 2.5% for the association and 10% for the project). As the percentage is divided by 5, this will no longer apply.<br />
        </>
    }
];