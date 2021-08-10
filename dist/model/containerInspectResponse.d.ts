import { ContainerConfig } from './containerConfig';
import { ContainerState } from './containerState';
import { GraphDriverData } from './graphDriverData';
import { HostConfig } from './hostConfig';
import { MountPoint } from './mountPoint';
import { NetworkSettings } from './networkSettings';
export declare class ContainerInspectResponse {
    'id'?: string;
    'created'?: string;
    'path'?: string;
    'args'?: Array<string>;
    'state'?: ContainerState;
    'image'?: string;
    'resolvConfPath'?: string;
    'hostnamePath'?: string;
    'hostsPath'?: string;
    'logPath'?: string;
    'name'?: string;
    'restartCount'?: number;
    'driver'?: string;
    'platform'?: string;
    'mountLabel'?: string;
    'processLabel'?: string;
    'appArmorProfile'?: string;
    'execIDs'?: Array<string> | null;
    'hostConfig'?: HostConfig;
    'graphDriver'?: GraphDriverData;
    'sizeRw'?: number;
    'sizeRootFs'?: number;
    'mounts'?: Array<MountPoint>;
    'config'?: ContainerConfig;
    'networkSettings'?: NetworkSettings;
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
