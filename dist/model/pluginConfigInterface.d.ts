import { PluginInterfaceType } from './pluginInterfaceType';
export declare class PluginConfigInterface {
    'types': Array<PluginInterfaceType>;
    'socket': string;
    'protocolScheme'?: PluginConfigInterface.ProtocolSchemeEnum;
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
export declare namespace PluginConfigInterface {
    enum ProtocolSchemeEnum {
        Empty,
        MobyPluginsHttpV1
    }
}
