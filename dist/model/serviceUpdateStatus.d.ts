export declare class ServiceUpdateStatus {
    'state'?: ServiceUpdateStatus.StateEnum;
    'startedAt'?: string;
    'completedAt'?: string;
    'message'?: string;
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
export declare namespace ServiceUpdateStatus {
    enum StateEnum {
        Updating,
        Paused,
        Completed
    }
}
