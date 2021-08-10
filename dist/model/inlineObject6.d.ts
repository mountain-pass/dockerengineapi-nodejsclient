export declare class InlineObject6 {
    'listenAddr'?: string;
    'advertiseAddr'?: string;
    'dataPathAddr'?: string;
    'remoteAddrs'?: Array<string>;
    'joinToken'?: string;
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
