import { DistributionInspectResponseDescriptor } from './distributionInspectResponseDescriptor';
import { DistributionInspectResponsePlatforms } from './distributionInspectResponsePlatforms';
export declare class DistributionInspectResponse {
    'descriptor': DistributionInspectResponseDescriptor;
    'platforms': Array<DistributionInspectResponsePlatforms>;
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
