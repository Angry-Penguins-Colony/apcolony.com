import { Address } from '@elrondnetwork/erdjs/out';
import { EggTier } from './EggTier';

export interface HatchConfig {
    hatchAddresses: Map<EggTier, Address>;
    eggsIdentifier: string;
    penguinsIdentifier: string;
}