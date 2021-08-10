import { HealthConfig } from './healthConfig';
import { Mount } from './mount';
import { ResourcesUlimits } from './resourcesUlimits';
import { TaskSpecContainerSpecConfigs } from './taskSpecContainerSpecConfigs';
import { TaskSpecContainerSpecDNSConfig } from './taskSpecContainerSpecDNSConfig';
import { TaskSpecContainerSpecPrivileges } from './taskSpecContainerSpecPrivileges';
import { TaskSpecContainerSpecSecrets } from './taskSpecContainerSpecSecrets';
export declare class TaskSpecContainerSpec {
    'image'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'command'?: Array<string>;
    'args'?: Array<string>;
    'hostname'?: string;
    'env'?: Array<string>;
    'dir'?: string;
    'user'?: string;
    'groups'?: Array<string>;
    'privileges'?: TaskSpecContainerSpecPrivileges;
    'tTY'?: boolean;
    'openStdin'?: boolean;
    'readOnly'?: boolean;
    'mounts'?: Array<Mount>;
    'stopSignal'?: string;
    'stopGracePeriod'?: number;
    'healthCheck'?: HealthConfig;
    'hosts'?: Array<string>;
    'dNSConfig'?: TaskSpecContainerSpecDNSConfig;
    'secrets'?: Array<TaskSpecContainerSpecSecrets>;
    'configs'?: Array<TaskSpecContainerSpecConfigs>;
    'isolation'?: TaskSpecContainerSpec.IsolationEnum;
    'init'?: boolean | null;
    'sysctls'?: {
        [key: string]: string;
    };
    'capabilityAdd'?: Array<string>;
    'capabilityDrop'?: Array<string>;
    'ulimits'?: Array<ResourcesUlimits>;
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
export declare namespace TaskSpecContainerSpec {
    enum IsolationEnum {
        Default,
        Process,
        Hyperv
    }
}
