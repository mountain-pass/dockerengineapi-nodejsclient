export declare class BuildCache {
    'iD'?: string;
    'parent'?: string;
    'type'?: string;
    'description'?: string;
    'inUse'?: boolean;
    'shared'?: boolean;
    'size'?: number;
    'createdAt'?: string;
    'lastUsedAt'?: string | null;
    'usageCount'?: number;
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
