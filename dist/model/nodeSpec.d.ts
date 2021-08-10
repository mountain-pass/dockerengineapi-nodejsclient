export declare class NodeSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'role'?: NodeSpec.RoleEnum;
    'availability'?: NodeSpec.AvailabilityEnum;
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
export declare namespace NodeSpec {
    enum RoleEnum {
        Worker,
        Manager
    }
    enum AvailabilityEnum {
        Active,
        Pause,
        Drain
    }
}
