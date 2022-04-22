import { BigNumber } from 'bignumber.js';
import { egldToWei, numberToHex, weiToEgld } from './convert';

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


describe('wei to egld', () => {
    it('convert 1', () => {
        expect(weiToEgld(new BigNumber('1' + '0'.repeat(18))))
            .toBe(1);
    });

    it('convert 0.9', () => {
        expect(weiToEgld(new BigNumber('9' + '0'.repeat(18 - 1))))
            .toBe(0.9);
    });

    it('convert 0.875', () => {
        expect(weiToEgld(new BigNumber('875' + '0'.repeat(18 - 3))))
            .toBe(0.875);
    });

    expect(weiToEgld(new BigNumber('10' + '0'.repeat(18))))
        .toBe(10);
});

it('numberTOHex', () => {
    expect(numberToHex(0)).toEqual('00');
    expect(numberToHex(1)).toEqual('01');
    expect(numberToHex(10)).toEqual('0a');
    expect(numberToHex(16)).toEqual('10');
});