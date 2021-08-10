/// <reference types="node" />
import http from 'http';
import { InlineObject2 } from '../model/inlineObject2';
import { InlineObject3 } from '../model/inlineObject3';
import { InlineObject4 } from '../model/inlineObject4';
import { Network } from '../model/network';
import { NetworkCreateResponse } from '../model/networkCreateResponse';
import { NetworkPruneResponse } from '../model/networkPruneResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum NetworkApiApiKeys {
}
export declare class NetworkApi {
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
    setApiKey(key: NetworkApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    networkConnect(id: string, container: InlineObject3, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    networkCreate(networkConfig: InlineObject2, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NetworkCreateResponse;
    }>;
    networkDelete(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    networkDisconnect(id: string, container: InlineObject4, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    networkInspect(id: string, verbose?: boolean, scope?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Network;
    }>;
    networkList(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Network>;
    }>;
    networkPrune(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: NetworkPruneResponse;
    }>;
}
