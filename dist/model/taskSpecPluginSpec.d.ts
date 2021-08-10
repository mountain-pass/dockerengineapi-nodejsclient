import { InlineObject } from './inlineObject';
export declare class TaskSpecPluginSpec {
    'name'?: string;
    'remote'?: string;
    'disabled'?: boolean;
    'pluginPrivilege'?: Array<InlineObject>;
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
