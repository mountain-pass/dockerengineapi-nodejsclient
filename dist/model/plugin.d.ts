import { PluginConfig } from './pluginConfig';
import { PluginSettings } from './pluginSettings';
export declare class Plugin {
    'id'?: string;
    'name': string;
    'enabled': boolean;
    'settings': PluginSettings;
    'pluginReference'?: string;
    'config': PluginConfig;
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
