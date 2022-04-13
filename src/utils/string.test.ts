import { Address } from '@elrondnetwork/erdjs/out';
import { truncateAddress } from './string';

describe('truncate', () => {
    it('should truncate a string', () => {
        const result = truncateAddress(Address.fromBech32('erd1tlk4s9lr55a0azv6u90k396d594alsucct8u34lpezhuhng02c8q9zeuat'), 10);
        expect(result).toBe('erd1...euat');
    });

    it('should throw error', () => {
        expect(() => truncateAddress(Address.fromBech32('erd1tlk4s9lr55a0azv6u90k396d594alsucct8u34lpezhuhng02c8q9zeuat'), 6))
            .toThrow;
    });

    it('should not change address', () => {
        const result = truncateAddress(Address.fromBech32('erd1tlk4s9lr55a0azv6u90k396d594alsucct8u34lpezhuhng02c8q9zeuat'), 62);
        expect(result).toBe('erd1tlk4s9lr55a0azv6u90k396d594alsucct8u34lpezhuhng02c8q9zeuat');
    });
});