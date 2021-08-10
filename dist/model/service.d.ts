import { ObjectVersion } from './objectVersion';
import { ServiceEndpoint } from './serviceEndpoint';
import { ServiceJobStatus } from './serviceJobStatus';
import { ServiceServiceStatus } from './serviceServiceStatus';
import { ServiceSpec } from './serviceSpec';
import { ServiceUpdateStatus } from './serviceUpdateStatus';
export declare class Service {
    'iD'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: ServiceSpec;
    'endpoint'?: ServiceEndpoint;
    'updateStatus'?: ServiceUpdateStatus;
    'serviceStatus'?: ServiceServiceStatus;
    'jobStatus'?: ServiceJobStatus;
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
