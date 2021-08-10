export declare class SwarmSpecCAConfigExternalCAs {
    'protocol'?: SwarmSpecCAConfigExternalCAs.ProtocolEnum;
    'uRL'?: string;
    'options'?: {
        [key: string]: string;
    };
    'cACert'?: string;
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
export declare namespace SwarmSpecCAConfigExternalCAs {
    enum ProtocolEnum {
        Cfssl
    }
}
