import { ContainerWaitResponseError } from './containerWaitResponseError';
export declare class ContainerWaitResponse {
    'statusCode': number;
    'error'?: ContainerWaitResponseError;
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
