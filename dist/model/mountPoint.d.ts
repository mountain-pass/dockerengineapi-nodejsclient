export declare class MountPoint {
    'type'?: string;
    'name'?: string;
    'source'?: string;
    'destination'?: string;
    'driver'?: string;
    'mode'?: string;
    'rW'?: boolean;
    'propagation'?: string;
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
