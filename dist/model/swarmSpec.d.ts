import { SwarmSpecCAConfig } from './swarmSpecCAConfig';
import { SwarmSpecDispatcher } from './swarmSpecDispatcher';
import { SwarmSpecEncryptionConfig } from './swarmSpecEncryptionConfig';
import { SwarmSpecOrchestration } from './swarmSpecOrchestration';
import { SwarmSpecRaft } from './swarmSpecRaft';
import { SwarmSpecTaskDefaults } from './swarmSpecTaskDefaults';
export declare class SwarmSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'orchestration'?: SwarmSpecOrchestration | null;
    'raft'?: SwarmSpecRaft;
    'dispatcher'?: SwarmSpecDispatcher | null;
    'cAConfig'?: SwarmSpecCAConfig | null;
    'encryptionConfig'?: SwarmSpecEncryptionConfig;
    'taskDefaults'?: SwarmSpecTaskDefaults;
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
