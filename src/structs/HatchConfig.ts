import { Address } from '@elrondnetwork/erdjs/out';

export interface HatchConfig {
    hatchAddresses: Address[];
    eggsIdentifier: string;
    penguinsIdentifier: string;
}