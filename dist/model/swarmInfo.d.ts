import { ClusterInfo } from './clusterInfo';
import { LocalNodeState } from './localNodeState';
import { PeerNode } from './peerNode';
export declare class SwarmInfo {
    'nodeID'?: string;
    'nodeAddr'?: string;
    'localNodeState'?: LocalNodeState;
    'controlAvailable'?: boolean;
    'error'?: string;
    'remoteManagers'?: Array<PeerNode> | null;
    'nodes'?: number | null;
    'managers'?: number | null;
    'cluster'?: ClusterInfo | null;
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
