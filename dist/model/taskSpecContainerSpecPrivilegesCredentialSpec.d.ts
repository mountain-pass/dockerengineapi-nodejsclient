export declare class TaskSpecContainerSpecPrivilegesCredentialSpec {
    'config'?: string;
    'file'?: string;
    'registry'?: string;
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
