export declare class AuthConfig {
    'username'?: string;
    'password'?: string;
    'email'?: string;
    'serveraddress'?: string;
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
