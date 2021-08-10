import { SwarmSpec } from './swarmSpec';
export declare class InlineObject5 {
    'listenAddr'?: string;
    'advertiseAddr'?: string;
    'dataPathAddr'?: string;
    'dataPathPort'?: number;
    'defaultAddrPool'?: Array<string>;
    'forceNewCluster'?: boolean;
    'subnetSize'?: number;
    'spec'?: SwarmSpec;
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
