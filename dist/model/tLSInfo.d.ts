export declare class TLSInfo {
    'trustRoot'?: string;
    'certIssuerSubject'?: string;
    'certIssuerPublicKey'?: string;
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
