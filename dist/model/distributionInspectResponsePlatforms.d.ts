export declare class DistributionInspectResponsePlatforms {
    'architecture'?: string;
    'oS'?: string;
    'oSVersion'?: string;
    'oSFeatures'?: Array<string>;
    'variant'?: string;
    'features'?: Array<string>;
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
