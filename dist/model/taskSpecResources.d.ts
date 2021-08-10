import { Limit } from './limit';
import { ResourceObject } from './resourceObject';
export declare class TaskSpecResources {
    'limits'?: Limit;
    'reservation'?: ResourceObject;
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
