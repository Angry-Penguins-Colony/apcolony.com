import { Address } from '@elrondnetwork/erdjs/out';
import toHex from 'to-hex';
import { EggTier } from 'structs/EggTier';
import { buildHatchData, errors } from './hatch';

describe('build hatch data', () => {
    const hatchAddress = new Address('erd1qqqqqqqqqqqqqpgqawdgcrfmww5n5lufj9sq32gss5clvxxngn2q4d9gkv');
    const eggIdentifier = 'EGGS-000000';

    it('throw error if not eggs sent', () => {
        expect(() => buildHatchData(eggIdentifier, new Map<EggTier, number>(), hatchAddress))
            .toThrowError(errors.noEggToHatch);
    });

    it('throw error if egg identifier is empty', () => {
        expect(() => buildHatchData('', new Map<EggTier, number>([[EggTier.Diamond, 1]]), hatchAddress))
            .toThrowError(errors.invalidEggIdentifier);
    });

    it('throw error if hatch address is empty', () => {
        expect(() => buildHatchData(eggIdentifier, new Map<EggTier, number>([[EggTier.Diamond, 1]]), new Address('')))
            .toThrowError(errors.invalidHatchAddress);
    });

    it('throw error if nonces contains negative values is empty', () => {
        expect(() => buildHatchData(eggIdentifier, new Map<EggTier, number>([[EggTier.Diamond, -1]]), hatchAddress))
            .toThrowError(errors.invalidNonceAmount);
    });

    it('throw error if nonces contains zero values is empty', () => {
        expect(() => buildHatchData(eggIdentifier, new Map<EggTier, number>([[EggTier.Diamond, 0]]), hatchAddress))
            .toThrowError(errors.invalidNonceAmount);
    });

    it('send 1 diamond egg', () => {
        const expected = 'MultiESDTNFTTransfer'
            + '@' + hatchAddress.hex()
            + '@' + '01'
            + '@' + toHex(eggIdentifier) + '@01@01';

        const actual = buildHatchData(eggIdentifier, new Map<EggTier, number>([[EggTier.Diamond, 1]]), hatchAddress);

        expect(actual).toEqual(expected);
    });

    it('send 2 diamond eggs', () => {
        const expected = 'MultiESDTNFTTransfer'
            + '@' + hatchAddress.hex()
            + '@' + '01'
            + '@' + toHex(eggIdentifier) + '@01@02';

        const actual = buildHatchData(eggIdentifier, new Map<EggTier, number>([[EggTier.Diamond, 2]]), hatchAddress);

        expect(actual).toEqual(expected);
    });

    it('send 2 gold eggs', () => {
        const expected = 'MultiESDTNFTTransfer'
            + '@' + hatchAddress.hex()
            + '@' + '01'
            + '@' + toHex(eggIdentifier) + '@02@02';

        const actual = buildHatchData(eggIdentifier, new Map<EggTier, number>([[EggTier.Gold, 2]]), hatchAddress);

        expect(actual).toEqual(expected);
    });

    it('send multiple eggs', () => {
        const expected = 'MultiESDTNFTTransfer'
            + '@' + hatchAddress.hex()
            + '@' + '03'
            + '@' + toHex(eggIdentifier) + '@01@05'
            + '@' + toHex(eggIdentifier) + '@02@02'
            + '@' + toHex(eggIdentifier) + '@03@0a';

        const actual = buildHatchData(eggIdentifier, new Map<EggTier, number>([
            [EggTier.Diamond, 5],
            [EggTier.Gold, 2],
            [EggTier.Silver, 10],
        ]), hatchAddress);

        expect(actual).toEqual(expected);
    });
});