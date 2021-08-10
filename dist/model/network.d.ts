import { IPAM } from './iPAM';
import { NetworkContainer } from './networkContainer';
export declare class Network {
    'name'?: string;
    'id'?: string;
    'created'?: string;
    'scope'?: string;
    'driver'?: string;
    'enableIPv6'?: boolean;
    'iPAM'?: IPAM;
    'internal'?: boolean;
    'attachable'?: boolean;
    'ingress'?: boolean;
    'containers'?: {
        [key: string]: NetworkContainer;
    };
    'options'?: {
        [key: string]: string;
    };
    'labels'?: {
        [key: string]: string;
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
