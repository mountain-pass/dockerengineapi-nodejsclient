import { NetworkAttachmentConfig } from './networkAttachmentConfig';
import { TaskSpecContainerSpec } from './taskSpecContainerSpec';
import { TaskSpecLogDriver } from './taskSpecLogDriver';
import { TaskSpecNetworkAttachmentSpec } from './taskSpecNetworkAttachmentSpec';
import { TaskSpecPlacement } from './taskSpecPlacement';
import { TaskSpecPluginSpec } from './taskSpecPluginSpec';
import { TaskSpecResources } from './taskSpecResources';
import { TaskSpecRestartPolicy } from './taskSpecRestartPolicy';
export declare class TaskSpec {
    'pluginSpec'?: TaskSpecPluginSpec;
    'containerSpec'?: TaskSpecContainerSpec;
    'networkAttachmentSpec'?: TaskSpecNetworkAttachmentSpec;
    'resources'?: TaskSpecResources;
    'restartPolicy'?: TaskSpecRestartPolicy;
    'placement'?: TaskSpecPlacement;
    'forceUpdate'?: number;
    'runtime'?: string;
    'networks'?: Array<NetworkAttachmentConfig>;
    'logDriver'?: TaskSpecLogDriver;
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
