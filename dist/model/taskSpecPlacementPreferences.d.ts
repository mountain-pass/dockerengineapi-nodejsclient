import { TaskSpecPlacementSpread } from './taskSpecPlacementSpread';
export declare class TaskSpecPlacementPreferences {
    'spread'?: TaskSpecPlacementSpread;
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
