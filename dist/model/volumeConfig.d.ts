export declare class VolumeConfig {
    'name'?: string;
    'driver'?: string;
    'driverOpts'?: {
        [key: string]: string;
    };
    'labels'?: {
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
