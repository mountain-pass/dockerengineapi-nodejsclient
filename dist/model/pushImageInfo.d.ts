import { ProgressDetail } from './progressDetail';
export declare class PushImageInfo {
    'error'?: string;
    'status'?: string;
    'progress'?: string;
    'progressDetail'?: ProgressDetail;
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
