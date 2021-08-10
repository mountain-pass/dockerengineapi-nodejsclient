import { DeviceMapping } from './deviceMapping';
import { DeviceRequest } from './deviceRequest';
import { HostConfigAllOfLogConfig } from './hostConfigAllOfLogConfig';
import { Mount } from './mount';
import { PortBinding } from './portBinding';
import { ResourcesBlkioWeightDevice } from './resourcesBlkioWeightDevice';
import { ResourcesUlimits } from './resourcesUlimits';
import { RestartPolicy } from './restartPolicy';
import { ThrottleDevice } from './throttleDevice';
export declare class HostConfig {
    'cpuShares'?: number;
    'memory'?: number;
    'cgroupParent'?: string;
    'blkioWeight'?: number;
    'blkioWeightDevice'?: Array<ResourcesBlkioWeightDevice>;
    'blkioDeviceReadBps'?: Array<ThrottleDevice>;
    'blkioDeviceWriteBps'?: Array<ThrottleDevice>;
    'blkioDeviceReadIOps'?: Array<ThrottleDevice>;
    'blkioDeviceWriteIOps'?: Array<ThrottleDevice>;
    'cpuPeriod'?: number;
    'cpuQuota'?: number;
    'cpuRealtimePeriod'?: number;
    'cpuRealtimeRuntime'?: number;
    'cpusetCpus'?: string;
    'cpusetMems'?: string;
    'devices'?: Array<DeviceMapping>;
    'deviceCgroupRules'?: Array<string>;
    'deviceRequests'?: Array<DeviceRequest>;
    'kernelMemory'?: number;
    'kernelMemoryTCP'?: number;
    'memoryReservation'?: number;
    'memorySwap'?: number;
    'memorySwappiness'?: number;
    'nanoCpus'?: number;
    'oomKillDisable'?: boolean;
    'init'?: boolean | null;
    'pidsLimit'?: number | null;
    'ulimits'?: Array<ResourcesUlimits>;
    'cpuCount'?: number;
    'cpuPercent'?: number;
    'iOMaximumIOps'?: number;
    'iOMaximumBandwidth'?: number;
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
    'cgroupnsMode'?: HostConfig.CgroupnsModeEnum;
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
    'isolation'?: HostConfig.IsolationEnum;
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
export declare namespace HostConfig {
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
