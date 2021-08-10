import { Platform } from './platform';
import { TaskSpecPlacementPreferences } from './taskSpecPlacementPreferences';
export declare class TaskSpecPlacement {
    'constraints'?: Array<string>;
    'preferences'?: Array<TaskSpecPlacementPreferences>;
    'maxReplicas'?: number;
    'platforms'?: Array<Platform>;
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
