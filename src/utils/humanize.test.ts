import { humanizeNumber } from './humanize';







describe('humanizeNumber', () => {
    it('should', () => {
        expect(humanizeNumber(1000)).toBe('1 000');
        expect(humanizeNumber(100)).toBe('100');
        expect(humanizeNumber(10)).toBe('10');
    });

    it('should humanize floating', () => {
        expect(humanizeNumber(1000.1)).toBe('1 000.1');
        expect(humanizeNumber(1.1)).toBe('1.1');
    });
});