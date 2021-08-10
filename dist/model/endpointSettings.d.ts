import { EndpointIPAMConfig } from './endpointIPAMConfig';
export declare class EndpointSettings {
    'iPAMConfig'?: EndpointIPAMConfig | null;
    'links'?: Array<string>;
    'aliases'?: Array<string>;
    'networkID'?: string;
    'endpointID'?: string;
    'gateway'?: string;
    'iPAddress'?: string;
    'iPPrefixLen'?: number;
    'iPv6Gateway'?: string;
    'globalIPv6Address'?: string;
    'globalIPv6PrefixLen'?: number;
    'macAddress'?: string;
    'driverOpts'?: {
        [key: string]: string;
    } | null;
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
