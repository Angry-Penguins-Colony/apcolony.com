export function getPenguinDescription() {
    return 'This is a Angry Penguin NFT';
}

export function getEggDescription(tier: number) {
    switch (tier) {
        case 1:
            return 'This is a Egg Tier 1';

        case 2:
            return 'This is a Egg Tier 2';

        case 3:
            return 'This is a Egg Tier 3';

        default:
            throw new Error('Invalid tier');
    }
}