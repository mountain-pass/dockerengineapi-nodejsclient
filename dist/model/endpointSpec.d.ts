import { EndpointPortConfig } from './endpointPortConfig';
export declare class EndpointSpec {
    'mode'?: EndpointSpec.ModeEnum;
    'ports'?: Array<EndpointPortConfig>;
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
export declare namespace EndpointSpec {
    enum ModeEnum {
        Vip,
        Dnsrr
    }
}
