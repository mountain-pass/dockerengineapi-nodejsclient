import { ManagerStatus } from './managerStatus';
import { NodeDescription } from './nodeDescription';
import { NodeSpec } from './nodeSpec';
import { NodeStatus } from './nodeStatus';
import { ObjectVersion } from './objectVersion';
export declare class Node {
    'iD'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: NodeSpec;
    'description'?: NodeDescription;
    'status'?: NodeStatus;
    'managerStatus'?: ManagerStatus | null;
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
