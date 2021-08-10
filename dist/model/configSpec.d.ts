import { Driver } from './driver';
export declare class ConfigSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'data'?: string;
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
