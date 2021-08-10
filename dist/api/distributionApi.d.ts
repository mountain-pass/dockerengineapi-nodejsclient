/// <reference types="node" />
import http from 'http';
import { DistributionInspectResponse } from '../model/distributionInspectResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum DistributionApiApiKeys {
}
export declare class DistributionApi {
    protected _basePath: string;
    protected _defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    protected interceptors: Interceptor[];
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    set defaultHeaders(defaultHeaders: any);
    get defaultHeaders(): any;
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DistributionApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    distributionInspect(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: DistributionInspectResponse;
    }>;
}
