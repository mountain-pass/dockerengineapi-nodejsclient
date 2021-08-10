export declare class EndpointPortConfig {
    'name'?: string;
    'protocol'?: EndpointPortConfig.ProtocolEnum;
    'targetPort'?: number;
    'publishedPort'?: number;
    'publishMode'?: EndpointPortConfig.PublishModeEnum;
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
export declare namespace EndpointPortConfig {
    enum ProtocolEnum {
        Tcp,
        Udp,
        Sctp
    }
    enum PublishModeEnum {
        Ingress,
        Host
    }
}
