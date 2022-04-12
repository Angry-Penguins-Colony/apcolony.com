import { egldToWei } from './convert';

describe('egld to wei', () => {
    it('convert 1', () => {
        expect(egldToWei(1)).toBe('1' + '0'.repeat(18));
    });

    it('convert 0.9', () => {
        expect(egldToWei(0.9)).toBe('9' + '0'.repeat(18 - 1));
    });

    it('convert 0.875', () => {
        expect(egldToWei(0.875)).toBe('875' + '0'.repeat(18 - 3));
    });

    it('convert 10', () => {
        expect(egldToWei(10)).toBe('10' + '0'.repeat(18));
    });
});
