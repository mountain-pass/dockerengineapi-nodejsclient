export declare class EndpointIPAMConfig {
    'iPv4Address'?: string;
    'iPv6Address'?: string;
    'linkLocalIPs'?: Array<string>;
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
