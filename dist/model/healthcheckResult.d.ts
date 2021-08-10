export declare class HealthcheckResult {
    'start'?: Date;
    'end'?: string;
    'exitCode'?: number;
    'output'?: string;
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
