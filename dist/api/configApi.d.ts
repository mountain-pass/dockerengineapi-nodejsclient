/// <reference types="node" />
import http from 'http';
import { Config } from '../model/config';
import { ConfigSpec } from '../model/configSpec';
import { IdResponse } from '../model/idResponse';
import { UNKNOWN_BASE_TYPE } from '../model/uNKNOWNBASETYPE';
import { Authentication, Interceptor } from '../model/models';
export declare enum ConfigApiApiKeys {
}
export declare class ConfigApi {
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
    setApiKey(key: ConfigApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    configCreate(body?: UNKNOWN_BASE_TYPE, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: IdResponse;
    }>;
    configDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    configInspect(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Config;
    }>;
    configList(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Config>;
    }>;
    configUpdate(id: string, version: number, body?: ConfigSpec, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
