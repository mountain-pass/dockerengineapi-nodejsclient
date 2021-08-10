import { Commit } from './commit';
import { PluginsInfo } from './pluginsInfo';
import { RegistryServiceConfig } from './registryServiceConfig';
import { Runtime } from './runtime';
import { SwarmInfo } from './swarmInfo';
import { SystemInfoDefaultAddressPools } from './systemInfoDefaultAddressPools';
export declare class SystemInfo {
    'iD'?: string;
    'containers'?: number;
    'containersRunning'?: number;
    'containersPaused'?: number;
    'containersStopped'?: number;
    'images'?: number;
    'driver'?: string;
    'driverStatus'?: Array<Array<string>>;
    'dockerRootDir'?: string;
    'plugins'?: PluginsInfo;
    'memoryLimit'?: boolean;
    'swapLimit'?: boolean;
    'kernelMemory'?: boolean;
    'cpuCfsPeriod'?: boolean;
    'cpuCfsQuota'?: boolean;
    'cPUShares'?: boolean;
    'cPUSet'?: boolean;
    'pidsLimit'?: boolean;
    'oomKillDisable'?: boolean;
    'iPv4Forwarding'?: boolean;
    'bridgeNfIptables'?: boolean;
    'bridgeNfIp6tables'?: boolean;
    'debug'?: boolean;
    'nFd'?: number;
    'nGoroutines'?: number;
    'systemTime'?: string;
    'loggingDriver'?: string;
    'cgroupDriver'?: SystemInfo.CgroupDriverEnum;
    'cgroupVersion'?: SystemInfo.CgroupVersionEnum;
    'nEventsListener'?: number;
    'kernelVersion'?: string;
    'operatingSystem'?: string;
    'oSVersion'?: string;
    'oSType'?: string;
    'architecture'?: string;
    'nCPU'?: number;
    'memTotal'?: number;
    'indexServerAddress'?: string;
    'registryConfig'?: RegistryServiceConfig | null;
    'genericResources'?: Array<object>;
    'httpProxy'?: string;
    'httpsProxy'?: string;
    'noProxy'?: string;
    'name'?: string;
    'labels'?: Array<string>;
    'experimentalBuild'?: boolean;
    'serverVersion'?: string;
    'clusterStore'?: string;
    'clusterAdvertise'?: string;
    'runtimes'?: {
        [key: string]: Runtime;
    };
    'defaultRuntime'?: string;
    'swarm'?: SwarmInfo;
    'liveRestoreEnabled'?: boolean;
    'isolation'?: SystemInfo.IsolationEnum;
    'initBinary'?: string;
    'containerdCommit'?: Commit;
    'runcCommit'?: Commit;
    'initCommit'?: Commit;
    'securityOptions'?: Array<string>;
    'productLicense'?: string;
    'defaultAddressPools'?: Array<SystemInfoDefaultAddressPools>;
    'warnings'?: Array<string>;
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
export declare namespace SystemInfo {
    enum CgroupDriverEnum {
        Cgroupfs,
        Systemd,
        None
    }
    enum CgroupVersionEnum {
        _1,
        _2
    }
    enum IsolationEnum {
        Default,
        Hyperv,
        Process
    }
}
