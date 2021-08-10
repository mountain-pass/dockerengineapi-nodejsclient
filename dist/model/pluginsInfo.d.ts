export declare class PluginsInfo {
    'volume'?: Array<string>;
    'network'?: Array<string>;
    'authorization'?: Array<string>;
    'log'?: Array<string>;
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
