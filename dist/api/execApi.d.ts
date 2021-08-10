/// <reference types="node" />
import http from 'http';
import { ExecInspectResponse } from '../model/execInspectResponse';
import { IdResponse } from '../model/idResponse';
import { InlineObject } from '../model/inlineObject';
import { InlineObject1 } from '../model/inlineObject1';
import { Authentication, Interceptor } from '../model/models';
export declare enum ExecApiApiKeys {
}
export declare class ExecApi {
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
    setApiKey(key: ExecApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    containerExec(id: string, execConfig: InlineObject, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: IdResponse;
    }>;
    execInspect(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ExecInspectResponse;
    }>;
    execResize(id: string, h?: number, w?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    execStart(id: string, execStartConfig?: InlineObject1, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
