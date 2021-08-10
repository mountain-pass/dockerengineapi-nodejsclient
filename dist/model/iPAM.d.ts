export declare class IPAM {
    'driver'?: string;
    'config'?: Array<{
        [key: string]: string;
    }>;
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
