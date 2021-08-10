import { TaskState } from './taskState';
import { TaskStatusContainerStatus } from './taskStatusContainerStatus';
export declare class TaskStatus {
    'timestamp'?: string;
    'state'?: TaskState;
    'message'?: string;
    'err'?: string;
    'containerStatus'?: TaskStatusContainerStatus;
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
