/// <reference types="node" />
import http from 'http';
import { ContainerChangeResponseItem } from '../model/containerChangeResponseItem';
import { ContainerCreateResponse } from '../model/containerCreateResponse';
import { ContainerInspectResponse } from '../model/containerInspectResponse';
import { ContainerPruneResponse } from '../model/containerPruneResponse';
import { ContainerTopResponse } from '../model/containerTopResponse';
import { ContainerUpdateResponse } from '../model/containerUpdateResponse';
import { ContainerWaitResponse } from '../model/containerWaitResponse';
import { UNKNOWN_BASE_TYPE } from '../model/uNKNOWNBASETYPE';
import { Authentication, Interceptor } from '../model/models';
import { RequestFile } from './apis';
export declare enum ContainerApiApiKeys {
}
export declare class ContainerApi {
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
    setApiKey(key: ContainerApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    containerArchive(id: string, path: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerArchiveInfo(id: string, path: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerAttach(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerAttachWebsocket(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerChanges(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ContainerChangeResponseItem>;
    }>;
    containerCreate(body: UNKNOWN_BASE_TYPE, name?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContainerCreateResponse;
    }>;
    containerDelete(id: string, v?: boolean, force?: boolean, link?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerExport(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerInspect(id: string, size?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContainerInspectResponse;
    }>;
    containerKill(id: string, signal?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerList(all?: boolean, limit?: number, size?: boolean, filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<object>;
    }>;
    containerLogs(id: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, until?: number, timestamps?: boolean, tail?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    containerPause(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerPrune(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContainerPruneResponse;
    }>;
    containerRename(id: string, name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerResize(id: string, h?: number, w?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerRestart(id: string, t?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerStart(id: string, detachKeys?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerStats(id: string, stream?: boolean, oneShot?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: object;
    }>;
    containerStop(id: string, t?: number, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerTop(id: string, psArgs?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContainerTopResponse;
    }>;
    containerUnpause(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    containerUpdate(id: string, update: UNKNOWN_BASE_TYPE, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContainerUpdateResponse;
    }>;
    containerWait(id: string, condition?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ContainerWaitResponse;
    }>;
    putContainerArchive(id: string, path: string, inputStream: RequestFile, noOverwriteDirNonDir?: string, copyUIDGID?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
