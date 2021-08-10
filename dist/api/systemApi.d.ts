/// <reference types="node" />
import http from 'http';
import { AuthConfig } from '../model/authConfig';
import { SystemAuthResponse } from '../model/systemAuthResponse';
import { SystemDataUsageResponse } from '../model/systemDataUsageResponse';
import { SystemEventsResponse } from '../model/systemEventsResponse';
import { SystemInfo } from '../model/systemInfo';
import { SystemVersion } from '../model/systemVersion';
import { Authentication, Interceptor } from '../model/models';
export declare enum SystemApiApiKeys {
}
export declare class SystemApi {
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
    setApiKey(key: SystemApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    systemAuth(authConfig?: AuthConfig, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SystemAuthResponse;
    }>;
    systemDataUsage(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SystemDataUsageResponse;
    }>;
    systemEvents(since?: string, until?: string, filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SystemEventsResponse;
    }>;
    systemInfo(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SystemInfo;
    }>;
    systemPing(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    systemPingHead(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    systemVersion(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: SystemVersion;
    }>;
}
