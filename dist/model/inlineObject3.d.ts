import { EndpointSettings } from './endpointSettings';
export declare class InlineObject3 {
    'container'?: string;
    'endpointConfig'?: EndpointSettings;
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
