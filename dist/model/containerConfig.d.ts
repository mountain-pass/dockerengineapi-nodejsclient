import { HealthConfig } from './healthConfig';
export declare class ContainerConfig {
    'hostname'?: string;
    'domainname'?: string;
    'user'?: string;
    'attachStdin'?: boolean;
    'attachStdout'?: boolean;
    'attachStderr'?: boolean;
    'exposedPorts'?: {
        [key: string]: object;
    };
    'tty'?: boolean;
    'openStdin'?: boolean;
    'stdinOnce'?: boolean;
    'env'?: Array<string>;
    'cmd'?: Array<string>;
    'healthcheck'?: HealthConfig;
    'argsEscaped'?: boolean;
    'image'?: string;
    'volumes'?: {
        [key: string]: object;
    };
    'workingDir'?: string;
    'entrypoint'?: Array<string>;
    'networkDisabled'?: boolean;
    'macAddress'?: string;
    'onBuild'?: Array<string>;
    'labels'?: {
        [key: string]: string;
    };
    'stopSignal'?: string;
    'stopTimeout'?: number;
    'shell'?: Array<string>;
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
