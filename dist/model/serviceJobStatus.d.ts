import { ObjectVersion } from './objectVersion';
export declare class ServiceJobStatus {
    'jobIteration'?: ObjectVersion;
    'lastExecution'?: string;
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
