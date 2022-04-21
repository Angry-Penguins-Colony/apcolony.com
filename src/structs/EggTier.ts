export enum EggTier {
    Diamond = 1,
    Gold = 2,
    Silver = 3,
}

export function fromNonce(nonce: number): EggTier {
    switch (nonce) {
        case 1:
            return EggTier.Diamond;
        case 2:
            return EggTier.Gold;
        case 3:
            return EggTier.Silver;
        default:
            throw new Error(`Invalid nonce: ${nonce}`);
    }
}