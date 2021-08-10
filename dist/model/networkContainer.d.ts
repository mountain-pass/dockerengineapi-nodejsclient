export declare class NetworkContainer {
    'name'?: string;
    'endpointID'?: string;
    'macAddress'?: string;
    'iPv4Address'?: string;
    'iPv6Address'?: string;
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
