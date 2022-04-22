import { Address } from '@elrondnetwork/erdjs/out';

export interface HatchConfig {
    hatchAddress: Address;
    eggsIdentifier: string;
    penguinsIdentifier: string;
}