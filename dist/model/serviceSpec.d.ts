import { EndpointSpec } from './endpointSpec';
import { NetworkAttachmentConfig } from './networkAttachmentConfig';
import { ServiceSpecMode } from './serviceSpecMode';
import { ServiceSpecRollbackConfig } from './serviceSpecRollbackConfig';
import { ServiceSpecUpdateConfig } from './serviceSpecUpdateConfig';
import { TaskSpec } from './taskSpec';
export declare class ServiceSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'taskTemplate'?: TaskSpec;
    'mode'?: ServiceSpecMode;
    'updateConfig'?: ServiceSpecUpdateConfig;
    'rollbackConfig'?: ServiceSpecRollbackConfig;
    'networks'?: Array<NetworkAttachmentConfig>;
    'endpointSpec'?: EndpointSpec;
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
