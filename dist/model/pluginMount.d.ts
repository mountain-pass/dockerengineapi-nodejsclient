export declare class PluginMount {
    'name': string;
    'description': string;
    'settable': Array<string>;
    'source': string;
    'destination': string;
    'type': string;
    'options': Array<string>;
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
