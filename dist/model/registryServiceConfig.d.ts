import { IndexInfo } from './indexInfo';
export declare class RegistryServiceConfig {
    'allowNondistributableArtifactsCIDRs'?: Array<string>;
    'allowNondistributableArtifactsHostnames'?: Array<string>;
    'insecureRegistryCIDRs'?: Array<string>;
    'indexConfigs'?: {
        [key: string]: IndexInfo;
    };
    'mirrors'?: Array<string>;
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
