import { ProcessConfig } from './processConfig';
export declare class ExecInspectResponse {
    'canRemove'?: boolean;
    'detachKeys'?: string;
    'iD'?: string;
    'running'?: boolean;
    'exitCode'?: number;
    'processConfig'?: ProcessConfig;
    'openStdin'?: boolean;
    'openStderr'?: boolean;
    'openStdout'?: boolean;
    'containerID'?: string;
    'pid'?: number;
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
