import { ObjectVersion } from './objectVersion';
import { TaskSpec } from './taskSpec';
import { TaskState } from './taskState';
import { TaskStatus } from './taskStatus';
export declare class Task {
    'iD'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'spec'?: TaskSpec;
    'serviceID'?: string;
    'slot'?: number;
    'nodeID'?: string;
    'assignedGenericResources'?: Array<object>;
    'status'?: TaskStatus;
    'desiredState'?: TaskState;
    'jobIteration'?: ObjectVersion;
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
