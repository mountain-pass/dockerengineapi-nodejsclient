import { EndpointPortConfig } from './endpointPortConfig';
import { EndpointSpec } from './endpointSpec';
import { ServiceEndpointVirtualIPs } from './serviceEndpointVirtualIPs';
export declare class ServiceEndpoint {
    'spec'?: EndpointSpec;
    'ports'?: Array<EndpointPortConfig>;
    'virtualIPs'?: Array<ServiceEndpointVirtualIPs>;
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
