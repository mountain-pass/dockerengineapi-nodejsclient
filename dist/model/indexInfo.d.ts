export declare class IndexInfo {
    'name'?: string;
    'mirrors'?: Array<string>;
    'secure'?: boolean;
    'official'?: boolean;
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
