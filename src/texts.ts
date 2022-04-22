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