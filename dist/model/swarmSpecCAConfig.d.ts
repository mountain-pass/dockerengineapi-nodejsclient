import { SwarmSpecCAConfigExternalCAs } from './swarmSpecCAConfigExternalCAs';
export declare class SwarmSpecCAConfig {
    'nodeCertExpiry'?: number;
    'externalCAs'?: Array<SwarmSpecCAConfigExternalCAs>;
    'signingCACert'?: string;
    'signingCAKey'?: string;
    'forceRotate'?: number;
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
