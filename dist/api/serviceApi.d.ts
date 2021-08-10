/// <reference types="node" />
import http from 'http';
import { Service } from '../model/service';
import { ServiceCreateResponse } from '../model/serviceCreateResponse';
import { ServiceUpdateResponse } from '../model/serviceUpdateResponse';
import { UNKNOWN_BASE_TYPE } from '../model/uNKNOWNBASETYPE';
import { Authentication, Interceptor } from '../model/models';
export declare enum ServiceApiApiKeys {
}
export declare class ServiceApi {
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
    setApiKey(key: ServiceApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    serviceCreate(body: UNKNOWN_BASE_TYPE, xRegistryAuth?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ServiceCreateResponse;
    }>;
    serviceDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    serviceInspect(id: string, insertDefaults?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Service;
    }>;
    serviceList(filters?: string, status?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Service>;
    }>;
    serviceLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    serviceUpdate(id: string, version: number, body: UNKNOWN_BASE_TYPE, registryAuthFrom?: 'spec' | 'previous-spec', rollback?: string, xRegistryAuth?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ServiceUpdateResponse;
    }>;
}
