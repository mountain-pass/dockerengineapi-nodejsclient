import { PluginConfigArgs } from './pluginConfigArgs';
import { PluginConfigInterface } from './pluginConfigInterface';
import { PluginConfigLinux } from './pluginConfigLinux';
import { PluginConfigNetwork } from './pluginConfigNetwork';
import { PluginConfigRootfs } from './pluginConfigRootfs';
import { PluginConfigUser } from './pluginConfigUser';
import { PluginEnv } from './pluginEnv';
import { PluginMount } from './pluginMount';
export declare class PluginConfig {
    'dockerVersion'?: string;
    'description': string;
    'documentation': string;
    '_interface': PluginConfigInterface;
    'entrypoint': Array<string>;
    'workDir': string;
    'user'?: PluginConfigUser;
    'network': PluginConfigNetwork;
    'linux': PluginConfigLinux;
    'propagatedMount': string;
    'ipcHost': boolean;
    'pidHost': boolean;
    'mounts': Array<PluginMount>;
    'env': Array<PluginEnv>;
    'args': PluginConfigArgs;
    'rootfs'?: PluginConfigRootfs;
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
