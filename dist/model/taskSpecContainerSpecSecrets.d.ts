import { TaskSpecContainerSpecFile } from './taskSpecContainerSpecFile';
export declare class TaskSpecContainerSpecSecrets {
    'file'?: TaskSpecContainerSpecFile;
    'secretID'?: string;
    'secretName'?: string;
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
