export declare class Port {
    'iP'?: string;
    'privatePort': number;
    'publicPort'?: number;
    'type': Port.TypeEnum;
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
export declare namespace Port {
    enum TypeEnum {
        Tcp,
        Udp,
        Sctp
    }
}
