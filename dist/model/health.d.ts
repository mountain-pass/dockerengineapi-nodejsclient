import { HealthcheckResult } from './healthcheckResult';
export declare class Health {
    'status'?: Health.StatusEnum;
    'failingStreak'?: number;
    'log'?: Array<HealthcheckResult>;
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
export declare namespace Health {
    enum StatusEnum {
        None,
        Starting,
        Healthy,
        Unhealthy
    }
}
