export declare class ImageSearchResponseItem {
    'description'?: string;
    'isOfficial'?: boolean;
    'isAutomated'?: boolean;
    'name'?: string;
    'starCount'?: number;
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
