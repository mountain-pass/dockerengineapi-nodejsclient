import { PluginDevice } from './pluginDevice';
export declare class PluginConfigLinux {
    'capabilities': Array<string>;
    'allowAllDevices': boolean;
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
