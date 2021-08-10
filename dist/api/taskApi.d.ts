/// <reference types="node" />
import http from 'http';
import { Task } from '../model/task';
import { Authentication, Interceptor } from '../model/models';
export declare enum TaskApiApiKeys {
}
export declare class TaskApi {
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
    setApiKey(key: TaskApiApiKeys, value: string): void;
    addInterceptor(interceptor: Interceptor): void;
    taskInspect(id: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Task;
    }>;
    taskList(filters?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Array<Task>;
    }>;
    taskLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, options?: {
        headers: {
            [name: string]: string;
        };
    }): Promise<{
        response: http.IncomingMessage;
        body: Buffer;
    }>;
}
