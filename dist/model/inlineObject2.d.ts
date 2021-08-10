import { IPAM } from './iPAM';
export declare class InlineObject2 {
    'name': string;
    'checkDuplicate'?: boolean;
    'driver'?: string;
    'internal'?: boolean;
    'attachable'?: boolean;
    'ingress'?: boolean;
    'iPAM'?: IPAM;
    'enableIPv6'?: boolean;
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
