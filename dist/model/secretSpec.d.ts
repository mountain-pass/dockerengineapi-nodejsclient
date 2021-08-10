import { Driver } from './driver';
export declare class SecretSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'data'?: string;
    'driver'?: Driver;
    'templating'?: Driver;
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
