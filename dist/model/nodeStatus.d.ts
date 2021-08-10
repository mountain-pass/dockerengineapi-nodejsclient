import { NodeState } from './nodeState';
export declare class NodeStatus {
    'state'?: NodeState;
    'message'?: string;
    'addr'?: string;
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
