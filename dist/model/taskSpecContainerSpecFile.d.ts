export declare class TaskSpecContainerSpecFile {
    'name'?: string;
    'uID'?: string;
    'gID'?: string;
    'mode'?: number;
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
