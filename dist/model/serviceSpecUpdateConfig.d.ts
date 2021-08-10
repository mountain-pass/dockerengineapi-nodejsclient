export declare class ServiceSpecUpdateConfig {
    'parallelism'?: number;
    'delay'?: number;
    'failureAction'?: ServiceSpecUpdateConfig.FailureActionEnum;
    'monitor'?: number;
    'maxFailureRatio'?: number;
    'order'?: ServiceSpecUpdateConfig.OrderEnum;
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
export declare namespace ServiceSpecUpdateConfig {
    enum FailureActionEnum {
        Continue,
        Pause,
        Rollback
    }
    enum OrderEnum {
        StopFirst,
        StartFirst
    }
}
