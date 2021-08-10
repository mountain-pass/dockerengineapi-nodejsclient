import { BuildCache } from './buildCache';
import { ImageSummary } from './imageSummary';
import { Volume } from './volume';
export declare class SystemDataUsageResponse {
    'layersSize'?: number;
    'images'?: Array<ImageSummary>;
    'containers'?: Array<Array<object>>;
    'volumes'?: Array<Volume>;
    'buildCache'?: Array<BuildCache>;
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
