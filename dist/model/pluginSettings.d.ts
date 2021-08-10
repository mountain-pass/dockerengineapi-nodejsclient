import { PluginDevice } from './pluginDevice';
import { PluginMount } from './pluginMount';
export declare class PluginSettings {
    'mounts': Array<PluginMount>;
    'env': Array<string>;
    'args': Array<string>;
    'devices': Array<PluginDevice>;
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
