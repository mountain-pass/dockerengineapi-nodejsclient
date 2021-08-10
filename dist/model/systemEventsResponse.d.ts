import { SystemEventsResponseActor } from './systemEventsResponseActor';
export declare class SystemEventsResponse {
    'type'?: string;
    'action'?: string;
    'actor'?: SystemEventsResponseActor;
    'time'?: number;
    'timeNano'?: number;
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
