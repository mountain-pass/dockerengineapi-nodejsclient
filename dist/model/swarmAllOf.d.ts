import { JoinTokens } from './joinTokens';
export declare class SwarmAllOf {
    'joinTokens'?: JoinTokens;
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
