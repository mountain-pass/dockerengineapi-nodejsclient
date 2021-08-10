/// <reference types="node" />
import http from 'http';
import { IdResponse } from '../model/idResponse';
import { Secret } from '../model/secret';
import { SecretSpec } from '../model/secretSpec';
import { UNKNOWN_BASE_TYPE } from '../model/uNKNOWNBASETYPE';
import { Authentication, Interceptor } from '../model/models';
export declare enum SecretApiApiKeys {
}
export declare class SecretApi {
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
    setApiKey(key: SecretApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    secretCreate(body?: UNKNOWN_BASE_TYPE, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: IdResponse;
    }>;
    secretDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    secretInspect(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Secret;
    }>;
    secretList(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Secret>;
    }>;
    secretUpdate(id: string, version: number, body?: SecretSpec, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
