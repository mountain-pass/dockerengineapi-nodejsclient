export declare class ImageSummary {
    'id': string;
    'parentId': string;
    'repoTags': Array<string>;
    'repoDigests': Array<string>;
    'created': number;
    'size': number;
    'sharedSize': number;
    'virtualSize': number;
    'labels': {
        [key: string]: string;
    };
    'containers': number;
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
