import { Health } from './health';
export declare class ContainerState {
    'status'?: ContainerState.StatusEnum;
    'running'?: boolean;
    'paused'?: boolean;
    'restarting'?: boolean;
    'oOMKilled'?: boolean;
    'dead'?: boolean;
    'pid'?: number;
    'exitCode'?: number;
    'error'?: string;
    'startedAt'?: string;
    'finishedAt'?: string;
    'health'?: Health;
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
export declare namespace ContainerState {
    enum StatusEnum {
        Created,
        Running,
        Paused,
        Restarting,
        Removing,
        Exited,
        Dead
    }
}
