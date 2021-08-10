import { MountVolumeOptionsDriverConfig } from './mountVolumeOptionsDriverConfig';
export declare class MountVolumeOptions {
    'noCopy'?: boolean;
    'labels'?: {
        [key: string]: string;
    };
    'driverConfig'?: MountVolumeOptionsDriverConfig;
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
