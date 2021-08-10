export declare class TaskSpecContainerSpecDNSConfig {
    'nameservers'?: Array<string>;
    'search'?: Array<string>;
    'options'?: Array<string>;
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
