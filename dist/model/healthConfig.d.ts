export declare class HealthConfig {
    'test'?: Array<string>;
    'interval'?: number;
    'timeout'?: number;
    'retries'?: number;
    'startPeriod'?: number;
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
