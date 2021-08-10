import { ErrorDetail } from './errorDetail';
import { ImageID } from './imageID';
import { ProgressDetail } from './progressDetail';
export declare class BuildInfo {
    'id'?: string;
    'stream'?: string;
    'error'?: string;
    'errorDetail'?: ErrorDetail;
    'status'?: string;
    'progress'?: string;
    'progressDetail'?: ProgressDetail;
    'aux'?: ImageID;
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
