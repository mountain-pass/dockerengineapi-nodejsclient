export declare class MountBindOptions {
    'propagation'?: MountBindOptions.PropagationEnum;
    'nonRecursive'?: boolean;
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
export declare namespace MountBindOptions {
    enum PropagationEnum {
        Private,
        Rprivate,
        Shared,
        Rshared,
        Slave,
        Rslave
    }
}
