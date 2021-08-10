export declare class TaskSpecContainerSpecPrivilegesSELinuxContext {
    'disable'?: boolean;
    'user'?: string;
    'role'?: string;
    'type'?: string;
    'level'?: string;
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
