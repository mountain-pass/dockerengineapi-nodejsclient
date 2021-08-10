import { TaskSpecContainerSpecFile1 } from './taskSpecContainerSpecFile1';
export declare class TaskSpecContainerSpecConfigs {
    'file'?: TaskSpecContainerSpecFile1;
    'runtime'?: object;
    'configID'?: string;
    'configName'?: string;
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
