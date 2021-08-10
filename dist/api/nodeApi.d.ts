/// <reference types="node" />
import http from 'http';
import { Node } from '../model/node';
import { NodeSpec } from '../model/nodeSpec';
import { Authentication, Interceptor } from '../model/models';
export declare enum NodeApiApiKeys {
}
export declare class NodeApi {
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
    setApiKey(key: NodeApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    nodeDelete(id: string, force?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    nodeInspect(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Node;
    }>;
    nodeList(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Node>;
    }>;
    nodeUpdate(id: string, version: number, body?: NodeSpec, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
