import { HostConfigAllOfLogConfig } from './hostConfigAllOfLogConfig';
import { Mount } from './mount';
import { PortBinding } from './portBinding';
import { RestartPolicy } from './restartPolicy';
export declare class HostConfigAllOf {
    'binds'?: Array<string>;
    'containerIDFile'?: string;
    'logConfig'?: HostConfigAllOfLogConfig;
    'networkMode'?: string;
    'portBindings'?: {
        [key: string]: Array<PortBinding>;
    };
    'restartPolicy'?: RestartPolicy;
    'autoRemove'?: boolean;
    'volumeDriver'?: string;
    'volumesFrom'?: Array<string>;
    'mounts'?: Array<Mount>;
    'capAdd'?: Array<string>;
    'capDrop'?: Array<string>;
    'cgroupnsMode'?: HostConfigAllOf.CgroupnsModeEnum;
    'dns'?: Array<string>;
    'dnsOptions'?: Array<string>;
    'dnsSearch'?: Array<string>;
    'extraHosts'?: Array<string>;
    'groupAdd'?: Array<string>;
    'ipcMode'?: string;
    'cgroup'?: string;
    'links'?: Array<string>;
    'oomScoreAdj'?: number;
    'pidMode'?: string;
    'privileged'?: boolean;
    'publishAllPorts'?: boolean;
    'readonlyRootfs'?: boolean;
    'securityOpt'?: Array<string>;
    'storageOpt'?: {
        [key: string]: string;
    };
    'tmpfs'?: {
        [key: string]: string;
    };
    'uTSMode'?: string;
    'usernsMode'?: string;
    'shmSize'?: number;
    'sysctls'?: {
        [key: string]: string;
    };
    'runtime'?: string;
    'consoleSize'?: Array<number>;
    'isolation'?: HostConfigAllOf.IsolationEnum;
    'maskedPaths'?: Array<string>;
    'readonlyPaths'?: Array<string>;
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
export declare namespace HostConfigAllOf {
    enum CgroupnsModeEnum {
        Private,
        Host
    }
    enum IsolationEnum {
        Default,
        Process,
        Hyperv
    }
}
