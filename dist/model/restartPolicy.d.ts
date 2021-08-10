export declare class RestartPolicy {
    'name'?: RestartPolicy.NameEnum;
    'maximumRetryCount'?: number;
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
export declare namespace RestartPolicy {
    enum NameEnum {
        Empty,
        Always,
        UnlessStopped,
        OnFailure
    }
}
