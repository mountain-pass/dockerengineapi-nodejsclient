/// <reference types="node" />
import http from 'http';
import { InlineObject } from '../model/inlineObject';
import { Plugin } from '../model/plugin';
import { PluginPrivilegeItem } from '../model/pluginPrivilegeItem';
import { Authentication, Interceptor } from '../model/models';
import { RequestFile } from './apis';
export declare enum PluginApiApiKeys {
}
export declare class PluginApi {
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
    setApiKey(key: PluginApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    getPluginPrivileges(remote: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<PluginPrivilegeItem>;
    }>;
    pluginCreate(name: string, tarContext?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    pluginDelete(name: string, force?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Plugin;
    }>;
    pluginDisable(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    pluginEnable(name: string, timeout?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    pluginInspect(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Plugin;
    }>;
    pluginList(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Plugin>;
    }>;
    pluginPull(remote: string, name?: string, xRegistryAuth?: string, body?: Array<InlineObject>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    pluginPush(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    pluginSet(name: string, body?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    pluginUpgrade(name: string, remote: string, xRegistryAuth?: string, body?: Array<InlineObject>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
