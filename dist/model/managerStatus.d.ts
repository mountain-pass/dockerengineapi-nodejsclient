import { Reachability } from './reachability';
export declare class ManagerStatus {
    'leader'?: boolean;
    'reachability'?: Reachability;
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
