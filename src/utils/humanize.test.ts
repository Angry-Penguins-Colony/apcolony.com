import { BigNumber } from 'bignumber.js';
import { humanizeBalance, humanizeNumber } from './humanize';


describe('humanizeBalance', () => {
    it('should', () => {
        expect(humanizeBalance(new BigNumber('1e18'), 3)).toBe('1');
        expect(humanizeBalance(new BigNumber('1.18e18'), 3)).toBe('1.18');
    });

    it('should space between thousand', () => {
        expect(humanizeBalance(new BigNumber('1500000e18'), 2)).toBe('1 500 000');
        expect(humanizeBalance(new BigNumber('1.5e+24'), 3)).toBe('1 500 000');
    });
});




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