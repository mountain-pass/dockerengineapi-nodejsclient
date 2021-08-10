export declare class HistoryResponseItem {
    'id': string;
    'created': number;
    'createdBy': string;
    'tags': Array<string>;
    'size': number;
    'comment': string;
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
