/// <reference types="node" />
import http from 'http';
import { Volume } from '../model/volume';
import { VolumeConfig } from '../model/volumeConfig';
import { VolumeListResponse } from '../model/volumeListResponse';
import { VolumePruneResponse } from '../model/volumePruneResponse';
import { Authentication, Interceptor } from '../model/models';
export declare enum VolumeApiApiKeys {
}
export declare class VolumeApi {
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
    setApiKey(key: VolumeApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    volumeCreate(volumeConfig: VolumeConfig, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Volume;
    }>;
    volumeDelete(name: string, force?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    volumeInspect(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Volume;
    }>;
    volumeList(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VolumeListResponse;
    }>;
    volumePrune(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: VolumePruneResponse;
    }>;
}
