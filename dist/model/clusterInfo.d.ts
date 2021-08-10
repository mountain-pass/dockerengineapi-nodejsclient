import { ObjectVersion } from './objectVersion';
import { SwarmSpec } from './swarmSpec';
import { TLSInfo } from './tLSInfo';
export declare class ClusterInfo {
    'iD'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: SwarmSpec;
    'tLSInfo'?: TLSInfo;
    'rootRotationInProgress'?: boolean;
    'dataPathPort'?: number;
    'defaultAddrPool'?: Array<string>;
    'subnetSize'?: number;
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
