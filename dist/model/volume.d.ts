import { VolumeUsageData } from './volumeUsageData';
export declare class Volume {
    'name': string;
    'driver': string;
    'mountpoint': string;
    'createdAt'?: string;
    'status'?: {
        [key: string]: object;
    };
    'labels': {
        [key: string]: string;
    };
    'scope': Volume.ScopeEnum;
    'options': {
        [key: string]: string;
    };
    'usageData'?: VolumeUsageData | null;
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
export declare namespace Volume {
    enum ScopeEnum {
        Local,
        Global
    }
}
