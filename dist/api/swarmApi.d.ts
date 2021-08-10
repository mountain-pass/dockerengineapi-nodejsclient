/// <reference types="node" />
import http from 'http';
import { InlineObject5 } from '../model/inlineObject5';
import { InlineObject6 } from '../model/inlineObject6';
import { InlineObject7 } from '../model/inlineObject7';
import { Swarm } from '../model/swarm';
import { SwarmSpec } from '../model/swarmSpec';
import { UnlockKeyResponse } from '../model/unlockKeyResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum SwarmApiApiKeys {
}
export declare class SwarmApi {
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
    setApiKey(key: SwarmApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    swarmInit(body: InlineObject5, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: string;
    }>;
    swarmInspect(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Swarm;
    }>;
    swarmJoin(body: InlineObject6, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    swarmLeave(force?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    swarmUnlock(body: InlineObject7, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    swarmUnlockkey(options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: UnlockKeyResponse;
    }>;
    swarmUpdate(version: number, body: SwarmSpec, rotateWorkerToken?: boolean, rotateManagerToken?: boolean, rotateManagerUnlockKey?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
