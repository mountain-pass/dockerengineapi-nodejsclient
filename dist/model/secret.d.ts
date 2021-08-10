import { ObjectVersion } from './objectVersion';
import { SecretSpec } from './secretSpec';
export declare class Secret {
    'iD'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: SecretSpec;
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
