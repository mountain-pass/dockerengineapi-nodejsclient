import { MountBindOptions } from './mountBindOptions';
import { MountTmpfsOptions } from './mountTmpfsOptions';
import { MountVolumeOptions } from './mountVolumeOptions';
export declare class Mount {
    'target'?: string;
    'source'?: string;
    'type'?: Mount.TypeEnum;
    'readOnly'?: boolean;
    'consistency'?: string;
    'bindOptions'?: MountBindOptions;
    'volumeOptions'?: MountVolumeOptions;
    'tmpfsOptions'?: MountTmpfsOptions;
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
export declare namespace Mount {
    enum TypeEnum {
        Bind,
        Volume,
        Tmpfs,
        Npipe
    }
}
