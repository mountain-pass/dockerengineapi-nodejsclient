import { EngineDescription } from './engineDescription';
import { Platform } from './platform';
import { ResourceObject } from './resourceObject';
import { TLSInfo } from './tLSInfo';
export declare class NodeDescription {
    'hostname'?: string;
    'platform'?: Platform;
    'resources'?: ResourceObject;
    'engine'?: EngineDescription;
    'tLSInfo'?: TLSInfo;
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
