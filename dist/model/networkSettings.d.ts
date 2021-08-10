import { Address } from './address';
import { EndpointSettings } from './endpointSettings';
import { PortBinding } from './portBinding';
export declare class NetworkSettings {
    'bridge'?: string;
    'sandboxID'?: string;
    'hairpinMode'?: boolean;
    'linkLocalIPv6Address'?: string;
    'linkLocalIPv6PrefixLen'?: number;
    'ports'?: {
        [key: string]: Array<PortBinding>;
    };
    'sandboxKey'?: string;
    'secondaryIPAddresses'?: Array<Address> | null;
    'secondaryIPv6Addresses'?: Array<Address> | null;
    'endpointID'?: string;
    'gateway'?: string;
    'globalIPv6Address'?: string;
    'globalIPv6PrefixLen'?: number;
    'iPAddress'?: string;
    'iPPrefixLen'?: number;
    'iPv6Gateway'?: string;
    'macAddress'?: string;
    'networks'?: {
        [key: string]: EndpointSettings;
    };
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
