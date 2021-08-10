import { ConfigSpec } from './configSpec';
import { ObjectVersion } from './objectVersion';
export declare class Config {
    'iD'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: ConfigSpec;
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
