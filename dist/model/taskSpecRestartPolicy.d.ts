export declare class TaskSpecRestartPolicy {
    'condition'?: TaskSpecRestartPolicy.ConditionEnum;
    'delay'?: number;
    'maxAttempts'?: number;
    'window'?: number;
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
export declare namespace TaskSpecRestartPolicy {
    enum ConditionEnum {
        None,
        OnFailure,
        Any
    }
}
