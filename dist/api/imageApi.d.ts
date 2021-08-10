/// <reference types="node" />
import http from 'http';
import { BuildPruneResponse } from '../model/buildPruneResponse';
import { ContainerConfig } from '../model/containerConfig';
import { HistoryResponseItem } from '../model/historyResponseItem';
import { IdResponse } from '../model/idResponse';
import { Image } from '../model/image';
import { ImageDeleteResponseItem } from '../model/imageDeleteResponseItem';
import { ImagePruneResponse } from '../model/imagePruneResponse';
import { ImageSearchResponseItem } from '../model/imageSearchResponseItem';
import { ImageSummary } from '../model/imageSummary';
import { Authentication, Interceptor } from '../model/models';
import { RequestFile } from './apis';
export declare enum ImageApiApiKeys {
}
export declare class ImageApi {
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
    setApiKey(key: ImageApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    buildPrune(keepStorage?: number, all?: boolean, filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: BuildPruneResponse;
    }>;
    imageBuild(dockerfile?: string, t?: string, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: string, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, networkmode?: string, contentType?: 'application/x-tar', xRegistryConfig?: string, platform?: string, target?: string, outputs?: string, inputStream?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    imageCommit(container?: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: string, containerConfig?: ContainerConfig, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: IdResponse;
    }>;
    imageCreate(fromImage?: string, fromSrc?: string, repo?: string, tag?: string, message?: string, xRegistryAuth?: string, platform?: string, inputImage?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    imageDelete(name: string, force?: boolean, noprune?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ImageDeleteResponseItem>;
    }>;
    imageGet(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    imageGetAll(names?: Array<string>, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
    imageHistory(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<HistoryResponseItem>;
    }>;
    imageInspect(name: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Image;
    }>;
    imageList(all?: boolean, filters?: string, digests?: boolean, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ImageSummary>;
    }>;
    imageLoad(quiet?: boolean, imagesTarball?: RequestFile, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    imagePrune(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: ImagePruneResponse;
    }>;
    imagePush(name: string, xRegistryAuth: string, tag?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
    imageSearch(term: string, limit?: number, filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<ImageSearchResponseItem>;
    }>;
    imageTag(name: string, repo?: string, tag?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body?: any;
    }>;
}
