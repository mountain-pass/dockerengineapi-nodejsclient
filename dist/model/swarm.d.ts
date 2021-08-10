import { JoinTokens } from './joinTokens';
import { ObjectVersion } from './objectVersion';
import { SwarmSpec } from './swarmSpec';
import { TLSInfo } from './tLSInfo';
export declare class Swarm {
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
    'joinTokens'?: JoinTokens;
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
