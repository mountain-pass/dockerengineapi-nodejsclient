import { ContainerConfig } from './containerConfig';
import { GraphDriverData } from './graphDriverData';
import { ImageMetadata } from './imageMetadata';
import { ImageRootFS } from './imageRootFS';
export declare class Image {
    'id': string;
    'repoTags'?: Array<string>;
    'repoDigests'?: Array<string>;
    'parent': string;
    'comment': string;
    'created': string;
    'container': string;
    'containerConfig'?: ContainerConfig;
    'dockerVersion': string;
    'author': string;
    'config'?: ContainerConfig;
    'architecture': string;
    'os': string;
    'osVersion'?: string;
    'size': number;
    'virtualSize': number;
    'graphDriver': GraphDriverData;
    'rootFS': ImageRootFS;
    'metadata'?: ImageMetadata;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
