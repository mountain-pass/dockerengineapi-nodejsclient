export declare class DeviceRequest {
    'driver'?: string;
    'count'?: number;
    'deviceIDs'?: Array<string>;
    'capabilities'?: Array<Array<string>>;
    'options'?: {
        [key: string]: string;
    };
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
