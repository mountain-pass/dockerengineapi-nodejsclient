export declare class SwarmSpecRaft {
    'snapshotInterval'?: number;
    'keepOldSnapshots'?: number;
    'logEntriesForSlowFollowers'?: number;
    'electionTick'?: number;
    'heartbeatTick'?: number;
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
