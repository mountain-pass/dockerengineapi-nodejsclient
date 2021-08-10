import { SystemVersionComponents } from './systemVersionComponents';
import { SystemVersionPlatform } from './systemVersionPlatform';
export declare class SystemVersion {
    'platform'?: SystemVersionPlatform;
    'components'?: Array<SystemVersionComponents>;
    'version'?: string;
    'apiVersion'?: string;
    'minAPIVersion'?: string;
    'gitCommit'?: string;
    'goVersion'?: string;
    'os'?: string;
    'arch'?: string;
    'kernelVersion'?: string;
    'experimental'?: boolean;
    'buildTime'?: string;
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
