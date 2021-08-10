export declare class HostConfigAllOfLogConfig {
    'type'?: HostConfigAllOfLogConfig.TypeEnum;
    'config'?: {
        [key: string]: string;
    };
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
export declare namespace HostConfigAllOfLogConfig {
    enum TypeEnum {
        JsonFile,
        Syslog,
        Journald,
        Gelf,
        Fluentd,
        Awslogs,
        Splunk,
        Etwlogs,
        None
    }
}
