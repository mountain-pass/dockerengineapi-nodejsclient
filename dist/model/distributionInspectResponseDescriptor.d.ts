export declare class DistributionInspectResponseDescriptor {
    'mediaType'?: string;
    'size'?: number;
    'digest'?: string;
    'uRLs'?: Array<string>;
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
