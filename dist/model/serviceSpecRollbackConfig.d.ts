export declare class ServiceSpecRollbackConfig {
    'parallelism'?: number;
    'delay'?: number;
    'failureAction'?: ServiceSpecRollbackConfig.FailureActionEnum;
    'monitor'?: number;
    'maxFailureRatio'?: number;
    'order'?: ServiceSpecRollbackConfig.OrderEnum;
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
export declare namespace ServiceSpecRollbackConfig {
    enum FailureActionEnum {
        Continue,
        Pause
    }
    enum OrderEnum {
        StopFirst,
        StartFirst
    }
}
