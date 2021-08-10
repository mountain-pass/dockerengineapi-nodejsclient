import { ServiceSpecModeReplicated } from './serviceSpecModeReplicated';
import { ServiceSpecModeReplicatedJob } from './serviceSpecModeReplicatedJob';
export declare class ServiceSpecMode {
    'replicated'?: ServiceSpecModeReplicated;
    'global'?: object;
    'replicatedJob'?: ServiceSpecModeReplicatedJob;
    'globalJob'?: object;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
