export declare class ProcessConfig {
    'privileged'?: boolean;
    'user'?: string;
    'tty'?: boolean;
    'entrypoint'?: string;
    'arguments'?: Array<string>;
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
