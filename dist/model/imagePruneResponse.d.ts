import { ImageDeleteResponseItem } from './imageDeleteResponseItem';
export declare class ImagePruneResponse {
    'imagesDeleted'?: Array<ImageDeleteResponseItem>;
    'spaceReclaimed'?: number;
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
