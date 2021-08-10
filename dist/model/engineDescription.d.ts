import { EngineDescriptionPlugins } from './engineDescriptionPlugins';
export declare class EngineDescription {
    'engineVersion'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'plugins'?: Array<EngineDescriptionPlugins>;
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
