/// <reference types="node" />
import localVarRequest = require('request');
import http = require('http');
import Promise = require('bluebird');
export declare class Address {
    'addr'?: string;
    'prefixLen'?: number;
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
export declare class AuthConfig {
    'username'?: string;
    'password'?: string;
    'email'?: string;
    'serveraddress'?: string;
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
export declare class Body {
    'name'?: string;
    'description'?: string;
    'value'?: Array<string>;
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
export declare class Body1 {
    'listenAddr'?: string;
    'advertiseAddr'?: string;
    'dataPathAddr'?: string;
    'dataPathPort'?: number;
    'defaultAddrPool'?: Array<string>;
    'forceNewCluster'?: boolean;
    'subnetSize'?: number;
    'spec'?: SwarmSpec;
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
export declare class Body2 {
    'listenAddr'?: string;
    'advertiseAddr'?: string;
    'dataPathAddr'?: string;
    'remoteAddrs'?: Array<string>;
    'joinToken'?: string;
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
export declare class Body3 {
    'unlockKey'?: string;
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
export declare class BuildCache {
    'ID'?: string;
    'parent'?: string;
    'type'?: string;
    'description'?: string;
    'inUse'?: boolean;
    'shared'?: boolean;
    'size'?: number;
    'createdAt'?: string;
    'lastUsedAt'?: string;
    'usageCount'?: number;
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
export declare class BuildInfo {
    'id'?: string;
    'stream'?: string;
    'error'?: string;
    'errorDetail'?: ErrorDetail;
    'status'?: string;
    'progress'?: string;
    'progressDetail'?: ProgressDetail;
    'aux'?: ImageID;
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
export declare class BuildPruneResponse {
    'cachesDeleted'?: Array<string>;
    'spaceReclaimed'?: number;
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
export declare class ClusterInfo {
    'ID'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: SwarmSpec;
    'tLSInfo'?: TLSInfo;
    'rootRotationInProgress'?: boolean;
    'dataPathPort'?: number;
    'defaultAddrPool'?: Array<string>;
    'subnetSize'?: number;
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
export declare class Commit {
    'ID'?: string;
    'expected'?: string;
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
export declare class Config {
    'ID'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: ConfigSpec;
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
export declare class ConfigSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'data'?: string;
    'templating'?: Driver;
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
export declare class Container {
    'container'?: string;
    'endpointConfig'?: EndpointSettings;
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
export declare class Container1 {
    'container'?: string;
    'force'?: boolean;
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
export declare class ContainerChangeResponseItem {
    'path': string;
    'kind': number;
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
export declare class ContainerConfig {
    'hostname'?: string;
    'domainname'?: string;
    'user'?: string;
    'attachStdin'?: boolean;
    'attachStdout'?: boolean;
    'attachStderr'?: boolean;
    'exposedPorts'?: {
        [key: string]: any;
    };
    'tty'?: boolean;
    'openStdin'?: boolean;
    'stdinOnce'?: boolean;
    'env'?: Array<string>;
    'cmd'?: Array<string>;
    'healthcheck'?: HealthConfig;
    'argsEscaped'?: boolean;
    'image'?: string;
    'volumes'?: {
        [key: string]: any;
    };
    'workingDir'?: string;
    'entrypoint'?: Array<string>;
    'networkDisabled'?: boolean;
    'macAddress'?: string;
    'onBuild'?: Array<string>;
    'labels'?: {
        [key: string]: string;
    };
    'stopSignal'?: string;
    'stopTimeout'?: number;
    'shell'?: Array<string>;
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
export declare class ContainerCreateResponse {
    'id': string;
    'warnings': Array<string>;
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
export declare class ContainerInspectResponse {
    'id'?: string;
    'created'?: string;
    'path'?: string;
    'args'?: Array<string>;
    'state'?: ContainerState;
    'image'?: string;
    'resolvConfPath'?: string;
    'hostnamePath'?: string;
    'hostsPath'?: string;
    'logPath'?: string;
    'name'?: string;
    'restartCount'?: number;
    'driver'?: string;
    'platform'?: string;
    'mountLabel'?: string;
    'processLabel'?: string;
    'appArmorProfile'?: string;
    'execIDs'?: Array<string>;
    'hostConfig'?: HostConfig;
    'graphDriver'?: GraphDriverData;
    'sizeRw'?: number;
    'sizeRootFs'?: number;
    'mounts'?: Array<MountPoint>;
    'config'?: ContainerConfig;
    'networkSettings'?: NetworkSettings;
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
export declare class ContainerPruneResponse {
    'containersDeleted'?: Array<string>;
    'spaceReclaimed'?: number;
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
export declare class ContainerState {
    'status'?: ContainerState.StatusEnum;
    'running'?: boolean;
    'paused'?: boolean;
    'restarting'?: boolean;
    'oOMKilled'?: boolean;
    'dead'?: boolean;
    'pid'?: number;
    'exitCode'?: number;
    'error'?: string;
    'startedAt'?: string;
    'finishedAt'?: string;
    'health'?: Health;
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
export declare namespace ContainerState {
    enum StatusEnum {
        Created,
        Running,
        Paused,
        Restarting,
        Removing,
        Exited,
        Dead
    }
}
export declare class ContainerSummary extends Array<ContainerSummaryInner> {
    static discriminator: string | undefined;
}
export declare class ContainerSummaryInner {
    'id'?: string;
    'names'?: Array<string>;
    'image'?: string;
    'imageID'?: string;
    'command'?: string;
    'created'?: number;
    'ports'?: Array<Port>;
    'sizeRw'?: number;
    'sizeRootFs'?: number;
    'labels'?: {
        [key: string]: string;
    };
    'state'?: string;
    'status'?: string;
    'hostConfig'?: ContainerSummaryInnerHostConfig;
    'networkSettings'?: ContainerSummaryInnerNetworkSettings;
    'mounts'?: Array<Mount>;
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
export declare class ContainerSummaryInnerHostConfig {
    'networkMode'?: string;
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
export declare class ContainerSummaryInnerNetworkSettings {
    'networks'?: {
        [key: string]: EndpointSettings;
    };
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
export declare class ContainerTopResponse {
    'titles'?: Array<string>;
    'processes'?: Array<Array<string>>;
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
export declare class ContainerUpdateResponse {
    'warnings'?: Array<string>;
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
export declare class ContainerWaitResponse {
    'statusCode': number;
    'error'?: ContainerWaitResponseError;
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
export declare class ContainerWaitResponseError {
    'message'?: string;
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
export declare class CreateImageInfo {
    'id'?: string;
    'error'?: string;
    'status'?: string;
    'progress'?: string;
    'progressDetail'?: ProgressDetail;
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
export declare class DeviceMapping {
    'pathOnHost'?: string;
    'pathInContainer'?: string;
    'cgroupPermissions'?: string;
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
export declare class DeviceRequest {
    'driver'?: string;
    'count'?: number;
    'deviceIDs'?: Array<string>;
    'capabilities'?: Array<Array<string>>;
    'options'?: {
        [key: string]: string;
    };
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
export declare class DistributionInspectResponse {
    'descriptor': DistributionInspectResponseDescriptor;
    'platforms': Array<DistributionInspectResponsePlatforms>;
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
export declare class DistributionInspectResponseDescriptor {
    'mediaType'?: string;
    'size'?: number;
    'digest'?: string;
    'uRLs'?: Array<string>;
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
export declare class DistributionInspectResponsePlatforms {
    'architecture'?: string;
    'OS'?: string;
    'oSVersion'?: string;
    'oSFeatures'?: Array<string>;
    'variant'?: string;
    'features'?: Array<string>;
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
export declare class Driver {
    'name': string;
    'options'?: {
        [key: string]: string;
    };
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
export declare class EndpointIPAMConfig {
    'iPv4Address'?: string;
    'iPv6Address'?: string;
    'linkLocalIPs'?: Array<string>;
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
export declare class EndpointPortConfig {
    'name'?: string;
    'protocol'?: EndpointPortConfig.ProtocolEnum;
    'targetPort'?: number;
    'publishedPort'?: number;
    'publishMode'?: EndpointPortConfig.PublishModeEnum;
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
export declare namespace EndpointPortConfig {
    enum ProtocolEnum {
        Tcp,
        Udp,
        Sctp
    }
    enum PublishModeEnum {
        Ingress,
        Host
    }
}
export declare class EndpointSettings {
    'iPAMConfig'?: EndpointIPAMConfig;
    'links'?: Array<string>;
    'aliases'?: Array<string>;
    'networkID'?: string;
    'endpointID'?: string;
    'gateway'?: string;
    'iPAddress'?: string;
    'iPPrefixLen'?: number;
    'iPv6Gateway'?: string;
    'globalIPv6Address'?: string;
    'globalIPv6PrefixLen'?: number;
    'macAddress'?: string;
    'driverOpts'?: {
        [key: string]: string;
    };
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
export declare class EndpointSpec {
    'mode'?: EndpointSpec.ModeEnum;
    'ports'?: Array<EndpointPortConfig>;
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
export declare namespace EndpointSpec {
    enum ModeEnum {
        Vip,
        Dnsrr
    }
}
export declare class EngineDescription {
    'engineVersion'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'plugins'?: Array<EngineDescriptionPlugins>;
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
export declare class EngineDescriptionPlugins {
    'type'?: string;
    'name'?: string;
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
export declare class ErrorDetail {
    'code'?: number;
    'message'?: string;
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
export declare class ErrorResponse {
    'message': string;
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
export declare class ExecConfig {
    'attachStdin'?: boolean;
    'attachStdout'?: boolean;
    'attachStderr'?: boolean;
    'detachKeys'?: string;
    'tty'?: boolean;
    'env'?: Array<string>;
    'cmd'?: Array<string>;
    'privileged'?: boolean;
    'user'?: string;
    'workingDir'?: string;
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
export declare class ExecInspectResponse {
    'canRemove'?: boolean;
    'detachKeys'?: string;
    'ID'?: string;
    'running'?: boolean;
    'exitCode'?: number;
    'processConfig'?: ProcessConfig;
    'openStdin'?: boolean;
    'openStderr'?: boolean;
    'openStdout'?: boolean;
    'containerID'?: string;
    'pid'?: number;
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
export declare class ExecStartConfig {
    'detach'?: boolean;
    'tty'?: boolean;
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
export declare class GenericResources extends Array<GenericResourcesInner> {
    static discriminator: string | undefined;
}
export declare class GenericResourcesInner {
    'namedResourceSpec'?: GenericResourcesInnerNamedResourceSpec;
    'discreteResourceSpec'?: GenericResourcesInnerDiscreteResourceSpec;
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
export declare class GenericResourcesInnerDiscreteResourceSpec {
    'kind'?: string;
    'value'?: number;
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
export declare class GenericResourcesInnerNamedResourceSpec {
    'kind'?: string;
    'value'?: string;
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
export declare class GraphDriverData {
    'name': string;
    'data': {
        [key: string]: string;
    };
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
export declare class Health {
    'status'?: Health.StatusEnum;
    'failingStreak'?: number;
    'log'?: Array<HealthcheckResult>;
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
export declare namespace Health {
    enum StatusEnum {
        None,
        Starting,
        Healthy,
        Unhealthy
    }
}
export declare class HealthConfig {
    'test'?: Array<string>;
    'interval'?: number;
    'timeout'?: number;
    'retries'?: number;
    'startPeriod'?: number;
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
export declare class HealthcheckResult {
    'start'?: Date;
    'end'?: string;
    'exitCode'?: number;
    'output'?: string;
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
export declare class HistoryResponseItem {
    'id': string;
    'created': number;
    'createdBy': string;
    'tags': Array<string>;
    'size': number;
    'comment': string;
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
export declare class HostConfig extends Resources {
    'binds'?: Array<string>;
    'containerIDFile'?: string;
    'logConfig'?: HostConfigLogConfig;
    'networkMode'?: string;
    'portBindings'?: PortMap;
    'restartPolicy'?: RestartPolicy;
    'autoRemove'?: boolean;
    'volumeDriver'?: string;
    'volumesFrom'?: Array<string>;
    'mounts'?: Array<Mount>;
    'capAdd'?: Array<string>;
    'capDrop'?: Array<string>;
    'cgroupnsMode'?: HostConfig.CgroupnsModeEnum;
    'dns'?: Array<string>;
    'dnsOptions'?: Array<string>;
    'dnsSearch'?: Array<string>;
    'extraHosts'?: Array<string>;
    'groupAdd'?: Array<string>;
    'ipcMode'?: string;
    'cgroup'?: string;
    'links'?: Array<string>;
    'oomScoreAdj'?: number;
    'pidMode'?: string;
    'privileged'?: boolean;
    'publishAllPorts'?: boolean;
    'readonlyRootfs'?: boolean;
    'securityOpt'?: Array<string>;
    'storageOpt'?: {
        [key: string]: string;
    };
    'tmpfs'?: {
        [key: string]: string;
    };
    'uTSMode'?: string;
    'usernsMode'?: string;
    'shmSize'?: number;
    'sysctls'?: {
        [key: string]: string;
    };
    'runtime'?: string;
    'consoleSize'?: Array<number>;
    'isolation'?: HostConfig.IsolationEnum;
    'maskedPaths'?: Array<string>;
    'readonlyPaths'?: Array<string>;
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
export declare namespace HostConfig {
    enum CgroupnsModeEnum {
        Private,
        Host
    }
    enum IsolationEnum {
        Default,
        Process,
        Hyperv
    }
}
export declare class HostConfigLogConfig {
    'type'?: HostConfigLogConfig.TypeEnum;
    'config'?: {
        [key: string]: string;
    };
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
export declare namespace HostConfigLogConfig {
    enum TypeEnum {
        JsonFile,
        Syslog,
        Journald,
        Gelf,
        Fluentd,
        Awslogs,
        Splunk,
        Etwlogs,
        None
    }
}
export declare class IPAM {
    'driver'?: string;
    'config'?: Array<{
        [key: string]: string;
    }>;
    'options'?: {
        [key: string]: string;
    };
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
export declare class IdResponse {
    'id': string;
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
export declare class ImageDeleteResponseItem {
    'untagged'?: string;
    'deleted'?: string;
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
export declare class ImageID {
    'ID'?: string;
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
export declare class ImageMetadata {
    'lastTagTime'?: string;
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
export declare class ImagePruneResponse {
    'imagesDeleted'?: Array<ImageDeleteResponseItem>;
    'spaceReclaimed'?: number;
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
export declare class ImageRootFS {
    'type': string;
    'layers'?: Array<string>;
    'baseLayer'?: string;
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
export declare class ImageSearchResponseItem {
    'description'?: string;
    'isOfficial'?: boolean;
    'isAutomated'?: boolean;
    'name'?: string;
    'starCount'?: number;
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
export declare class ImageSummary {
    'id': string;
    'parentId': string;
    'repoTags': Array<string>;
    'repoDigests': Array<string>;
    'created': number;
    'size': number;
    'sharedSize': number;
    'virtualSize': number;
    'labels': {
        [key: string]: string;
    };
    'containers': number;
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
export declare class IndexInfo {
    'name'?: string;
    'mirrors'?: Array<string>;
    'secure'?: boolean;
    'official'?: boolean;
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
export declare class InlineResponse400 {
    'errorResponse'?: ErrorResponse;
    'message'?: string;
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
export declare class JoinTokens {
    'worker'?: string;
    'manager'?: string;
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
export declare class Limit {
    'nanoCPUs'?: number;
    'memoryBytes'?: number;
    'pids'?: number;
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
export declare class LocalNodeState {
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
export declare class ManagerStatus {
    'leader'?: boolean;
    'reachability'?: Reachability;
    'addr'?: string;
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
export declare class Mount {
    'target'?: string;
    'source'?: string;
    'type'?: Mount.TypeEnum;
    'readOnly'?: boolean;
    'consistency'?: string;
    'bindOptions'?: MountBindOptions;
    'volumeOptions'?: MountVolumeOptions;
    'tmpfsOptions'?: MountTmpfsOptions;
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
export declare namespace Mount {
    enum TypeEnum {
        Bind,
        Volume,
        Tmpfs,
        Npipe
    }
}
export declare class MountBindOptions {
    'propagation'?: MountBindOptions.PropagationEnum;
    'nonRecursive'?: boolean;
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
export declare namespace MountBindOptions {
    enum PropagationEnum {
        Private,
        Rprivate,
        Shared,
        Rshared,
        Slave,
        Rslave
    }
}
export declare class MountPoint {
    'type'?: string;
    'name'?: string;
    'source'?: string;
    'destination'?: string;
    'driver'?: string;
    'mode'?: string;
    'RW'?: boolean;
    'propagation'?: string;
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
export declare class MountTmpfsOptions {
    'sizeBytes'?: number;
    'mode'?: number;
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
export declare class MountVolumeOptions {
    'noCopy'?: boolean;
    'labels'?: {
        [key: string]: string;
    };
    'driverConfig'?: MountVolumeOptionsDriverConfig;
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
export declare class MountVolumeOptionsDriverConfig {
    'name'?: string;
    'options'?: {
        [key: string]: string;
    };
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
export declare class Network {
    'name'?: string;
    'id'?: string;
    'created'?: string;
    'scope'?: string;
    'driver'?: string;
    'enableIPv6'?: boolean;
    'IPAM'?: IPAM;
    'internal'?: boolean;
    'attachable'?: boolean;
    'ingress'?: boolean;
    'containers'?: {
        [key: string]: NetworkContainer;
    };
    'options'?: {
        [key: string]: string;
    };
    'labels'?: {
        [key: string]: string;
    };
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
export declare class NetworkAttachmentConfig {
    'target'?: string;
    'aliases'?: Array<string>;
    'driverOpts'?: {
        [key: string]: string;
    };
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
export declare class NetworkConfig {
    'name': string;
    'checkDuplicate'?: boolean;
    'driver'?: string;
    'internal'?: boolean;
    'attachable'?: boolean;
    'ingress'?: boolean;
    'IPAM'?: IPAM;
    'enableIPv6'?: boolean;
    'options'?: {
        [key: string]: string;
    };
    'labels'?: {
        [key: string]: string;
    };
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
export declare class NetworkContainer {
    'name'?: string;
    'endpointID'?: string;
    'macAddress'?: string;
    'iPv4Address'?: string;
    'iPv6Address'?: string;
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
export declare class NetworkCreateResponse {
    'id'?: string;
    'warning'?: string;
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
export declare class NetworkPruneResponse {
    'networksDeleted'?: Array<string>;
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
export declare class NetworkSettings {
    'bridge'?: string;
    'sandboxID'?: string;
    'hairpinMode'?: boolean;
    'linkLocalIPv6Address'?: string;
    'linkLocalIPv6PrefixLen'?: number;
    'ports'?: PortMap;
    'sandboxKey'?: string;
    'secondaryIPAddresses'?: Array<Address>;
    'secondaryIPv6Addresses'?: Array<Address>;
    'endpointID'?: string;
    'gateway'?: string;
    'globalIPv6Address'?: string;
    'globalIPv6PrefixLen'?: number;
    'iPAddress'?: string;
    'iPPrefixLen'?: number;
    'iPv6Gateway'?: string;
    'macAddress'?: string;
    'networks'?: {
        [key: string]: EndpointSettings;
    };
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
export declare class NetworkingConfig {
    'endpointsConfig'?: {
        [key: string]: EndpointSettings;
    };
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
export declare class Node {
    'ID'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: NodeSpec;
    'description'?: NodeDescription;
    'status'?: NodeStatus;
    'managerStatus'?: ManagerStatus;
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
export declare class NodeDescription {
    'hostname'?: string;
    'platform'?: Platform;
    'resources'?: ResourceObject;
    'engine'?: EngineDescription;
    'tLSInfo'?: TLSInfo;
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
export declare class NodeSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'role'?: NodeSpec.RoleEnum;
    'availability'?: NodeSpec.AvailabilityEnum;
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
export declare namespace NodeSpec {
    enum RoleEnum {
        Worker,
        Manager
    }
    enum AvailabilityEnum {
        Active,
        Pause,
        Drain
    }
}
export declare class NodeState {
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
export declare class NodeStatus {
    'state'?: NodeState;
    'message'?: string;
    'addr'?: string;
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
export declare class ObjectVersion {
    'index'?: number;
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
export declare class PeerNode {
    'nodeID'?: string;
    'addr'?: string;
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
export declare class Platform {
    'architecture'?: string;
    'OS'?: string;
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
export declare class Plugin {
    'id'?: string;
    'name': string;
    'enabled': boolean;
    'settings': PluginSettings;
    'pluginReference'?: string;
    'config': PluginConfig;
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
export declare class PluginConfig {
    'dockerVersion'?: string;
    'description': string;
    'documentation': string;
    '_interface': PluginConfigInterface;
    'entrypoint': Array<string>;
    'workDir': string;
    'user'?: PluginConfigUser;
    'network': PluginConfigNetwork;
    'linux': PluginConfigLinux;
    'propagatedMount': string;
    'ipcHost': boolean;
    'pidHost': boolean;
    'mounts': Array<PluginMount>;
    'env': Array<PluginEnv>;
    'args': PluginConfigArgs;
    'rootfs'?: PluginConfigRootfs;
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
export declare class PluginConfigArgs {
    'name': string;
    'description': string;
    'settable': Array<string>;
    'value': Array<string>;
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
export declare class PluginConfigInterface {
    'types': Array<PluginInterfaceType>;
    'socket': string;
    'protocolScheme'?: PluginConfigInterface.ProtocolSchemeEnum;
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
export declare namespace PluginConfigInterface {
    enum ProtocolSchemeEnum {
        Empty,
        MobyPluginsHttpv1
    }
}
export declare class PluginConfigLinux {
    'capabilities': Array<string>;
    'allowAllDevices': boolean;
    'devices': Array<PluginDevice>;
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
export declare class PluginConfigNetwork {
    'type': string;
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
export declare class PluginConfigRootfs {
    'type'?: string;
    'diffIds'?: Array<string>;
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
export declare class PluginConfigUser {
    'UID'?: number;
    'GID'?: number;
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
export declare class PluginDevice {
    'name': string;
    'description': string;
    'settable': Array<string>;
    'path': string;
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
export declare class PluginEnv {
    'name': string;
    'description': string;
    'settable': Array<string>;
    'value': string;
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
export declare class PluginInterfaceType {
    'prefix': string;
    'capability': string;
    'version': string;
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
export declare class PluginMount {
    'name': string;
    'description': string;
    'settable': Array<string>;
    'source': string;
    'destination': string;
    'type': string;
    'options': Array<string>;
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
export declare class PluginPrivilegeItem {
    'name'?: string;
    'description'?: string;
    'value'?: Array<string>;
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
export declare class PluginSettings {
    'mounts': Array<PluginMount>;
    'env': Array<string>;
    'args': Array<string>;
    'devices': Array<PluginDevice>;
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
export declare class PluginsInfo {
    'volume'?: Array<string>;
    'network'?: Array<string>;
    'authorization'?: Array<string>;
    'log'?: Array<string>;
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
export declare class Port {
    'IP'?: string;
    'privatePort': number;
    'publicPort'?: number;
    'type': Port.TypeEnum;
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
export declare namespace Port {
    enum TypeEnum {
        Tcp,
        Udp,
        Sctp
    }
}
export declare class PortBinding {
    'hostIp'?: string;
    'hostPort'?: string;
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
export declare class PortMap extends null<String, Array> {
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): any;
}
export declare class ProcessConfig {
    'privileged'?: boolean;
    'user'?: string;
    'tty'?: boolean;
    'entrypoint'?: string;
    'arguments'?: Array<string>;
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
export declare class ProgressDetail {
    'current'?: number;
    'total'?: number;
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
export declare class PushImageInfo {
    'error'?: string;
    'status'?: string;
    'progress'?: string;
    'progressDetail'?: ProgressDetail;
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
export declare class Reachability {
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
export declare class RegistryServiceConfig {
    'allowNondistributableArtifactsCIDRs'?: Array<string>;
    'allowNondistributableArtifactsHostnames'?: Array<string>;
    'insecureRegistryCIDRs'?: Array<string>;
    'indexConfigs'?: {
        [key: string]: IndexInfo;
    };
    'mirrors'?: Array<string>;
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
export declare class ResourceObject {
    'nanoCPUs'?: number;
    'memoryBytes'?: number;
    'genericResources'?: GenericResources;
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
export declare class Resources {
    'cpuShares'?: number;
    'memory'?: number;
    'cgroupParent'?: string;
    'blkioWeight'?: number;
    'blkioWeightDevice'?: Array<ResourcesBlkioWeightDevice>;
    'blkioDeviceReadBps'?: Array<ThrottleDevice>;
    'blkioDeviceWriteBps'?: Array<ThrottleDevice>;
    'blkioDeviceReadIOps'?: Array<ThrottleDevice>;
    'blkioDeviceWriteIOps'?: Array<ThrottleDevice>;
    'cpuPeriod'?: number;
    'cpuQuota'?: number;
    'cpuRealtimePeriod'?: number;
    'cpuRealtimeRuntime'?: number;
    'cpusetCpus'?: string;
    'cpusetMems'?: string;
    'devices'?: Array<DeviceMapping>;
    'deviceCgroupRules'?: Array<string>;
    'deviceRequests'?: Array<DeviceRequest>;
    'kernelMemory'?: number;
    'kernelMemoryTCP'?: number;
    'memoryReservation'?: number;
    'memorySwap'?: number;
    'memorySwappiness'?: number;
    'nanoCpus'?: number;
    'oomKillDisable'?: boolean;
    'init'?: boolean;
    'pidsLimit'?: number;
    'ulimits'?: Array<ResourcesUlimits>;
    'cpuCount'?: number;
    'cpuPercent'?: number;
    'iOMaximumIOps'?: number;
    'iOMaximumBandwidth'?: number;
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
export declare class ResourcesBlkioWeightDevice {
    'path'?: string;
    'weight'?: number;
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
export declare class ResourcesUlimits {
    'name'?: string;
    'soft'?: number;
    'hard'?: number;
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
export declare class RestartPolicy {
    'name'?: RestartPolicy.NameEnum;
    'maximumRetryCount'?: number;
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
export declare namespace RestartPolicy {
    enum NameEnum {
        Empty,
        Always,
        UnlessStopped,
        OnFailure
    }
}
export declare class Runtime {
    'path'?: string;
    'runtimeArgs'?: Array<string>;
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
export declare class Secret {
    'ID'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: SecretSpec;
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
export declare class SecretSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'data'?: string;
    'driver'?: Driver;
    'templating'?: Driver;
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
export declare class Service {
    'ID'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'spec'?: ServiceSpec;
    'endpoint'?: ServiceEndpoint;
    'updateStatus'?: ServiceUpdateStatus;
    'serviceStatus'?: ServiceServiceStatus;
    'jobStatus'?: ServiceJobStatus;
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
export declare class ServiceCreateResponse {
    'ID'?: string;
    'warning'?: string;
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
export declare class ServiceEndpoint {
    'spec'?: EndpointSpec;
    'ports'?: Array<EndpointPortConfig>;
    'virtualIPs'?: Array<ServiceEndpointVirtualIPs>;
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
export declare class ServiceEndpointVirtualIPs {
    'networkID'?: string;
    'addr'?: string;
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
export declare class ServiceJobStatus {
    'jobIteration'?: ObjectVersion;
    'lastExecution'?: string;
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
export declare class ServiceServiceStatus {
    'runningTasks'?: number;
    'desiredTasks'?: number;
    'completedTasks'?: number;
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
export declare class ServiceSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'taskTemplate'?: TaskSpec;
    'mode'?: ServiceSpecMode;
    'updateConfig'?: ServiceSpecUpdateConfig;
    'rollbackConfig'?: ServiceSpecRollbackConfig;
    'networks'?: Array<NetworkAttachmentConfig>;
    'endpointSpec'?: EndpointSpec;
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
export declare class ServiceSpecMode {
    'replicated'?: ServiceSpecModeReplicated;
    'global'?: any;
    'replicatedJob'?: ServiceSpecModeReplicatedJob;
    'globalJob'?: any;
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
export declare class ServiceSpecModeReplicated {
    'replicas'?: number;
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
export declare class ServiceSpecModeReplicatedJob {
    'maxConcurrent'?: number;
    'totalCompletions'?: number;
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
export declare class ServiceSpecRollbackConfig {
    'parallelism'?: number;
    'delay'?: number;
    'failureAction'?: ServiceSpecRollbackConfig.FailureActionEnum;
    'monitor'?: number;
    'maxFailureRatio'?: number;
    'order'?: ServiceSpecRollbackConfig.OrderEnum;
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
export declare namespace ServiceSpecRollbackConfig {
    enum FailureActionEnum {
        Continue,
        Pause
    }
    enum OrderEnum {
        StopFirst,
        StartFirst
    }
}
export declare class ServiceSpecUpdateConfig {
    'parallelism'?: number;
    'delay'?: number;
    'failureAction'?: ServiceSpecUpdateConfig.FailureActionEnum;
    'monitor'?: number;
    'maxFailureRatio'?: number;
    'order'?: ServiceSpecUpdateConfig.OrderEnum;
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
export declare namespace ServiceSpecUpdateConfig {
    enum FailureActionEnum {
        Continue,
        Pause,
        Rollback
    }
    enum OrderEnum {
        StopFirst,
        StartFirst
    }
}
export declare class ServiceUpdateResponse {
    'warnings'?: Array<string>;
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
export declare class ServiceUpdateStatus {
    'state'?: ServiceUpdateStatus.StateEnum;
    'startedAt'?: string;
    'completedAt'?: string;
    'message'?: string;
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
export declare namespace ServiceUpdateStatus {
    enum StateEnum {
        Updating,
        Paused,
        Completed
    }
}
export declare class Swarm extends ClusterInfo {
    'joinTokens'?: JoinTokens;
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
export declare class SwarmInfo {
    'nodeID'?: string;
    'nodeAddr'?: string;
    'localNodeState'?: LocalNodeState;
    'controlAvailable'?: boolean;
    'error'?: string;
    'remoteManagers'?: Array<PeerNode>;
    'nodes'?: number;
    'managers'?: number;
    'cluster'?: ClusterInfo;
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
export declare class SwarmSpec {
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'orchestration'?: SwarmSpecOrchestration;
    'raft'?: SwarmSpecRaft;
    'dispatcher'?: SwarmSpecDispatcher;
    'cAConfig'?: SwarmSpecCAConfig;
    'encryptionConfig'?: SwarmSpecEncryptionConfig;
    'taskDefaults'?: SwarmSpecTaskDefaults;
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
export declare class SwarmSpecCAConfig {
    'nodeCertExpiry'?: number;
    'externalCAs'?: Array<SwarmSpecCAConfigExternalCAs>;
    'signingCACert'?: string;
    'signingCAKey'?: string;
    'forceRotate'?: number;
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
export declare class SwarmSpecCAConfigExternalCAs {
    'protocol'?: SwarmSpecCAConfigExternalCAs.ProtocolEnum;
    'URL'?: string;
    'options'?: {
        [key: string]: string;
    };
    'cACert'?: string;
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
export declare namespace SwarmSpecCAConfigExternalCAs {
    enum ProtocolEnum {
        Cfssl
    }
}
export declare class SwarmSpecDispatcher {
    'heartbeatPeriod'?: number;
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
export declare class SwarmSpecEncryptionConfig {
    'autoLockManagers'?: boolean;
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
export declare class SwarmSpecOrchestration {
    'taskHistoryRetentionLimit'?: number;
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
export declare class SwarmSpecRaft {
    'snapshotInterval'?: number;
    'keepOldSnapshots'?: number;
    'logEntriesForSlowFollowers'?: number;
    'electionTick'?: number;
    'heartbeatTick'?: number;
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
export declare class SwarmSpecTaskDefaults {
    'logDriver'?: SwarmSpecTaskDefaultsLogDriver;
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
export declare class SwarmSpecTaskDefaultsLogDriver {
    'name'?: string;
    'options'?: {
        [key: string]: string;
    };
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
export declare class SystemAuthResponse {
    'status': string;
    'identityToken'?: string;
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
export declare class SystemDataUsageResponse {
    'layersSize'?: number;
    'images'?: Array<ImageSummary>;
    'containers'?: Array<ContainerSummary>;
    'volumes'?: Array<Volume>;
    'buildCache'?: Array<BuildCache>;
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
export declare class SystemEventsResponse {
    'type'?: string;
    'action'?: string;
    'actor'?: SystemEventsResponseActor;
    'time'?: number;
    'timeNano'?: number;
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
export declare class SystemEventsResponseActor {
    'ID'?: string;
    'attributes'?: {
        [key: string]: string;
    };
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
export declare class SystemInfo {
    'ID'?: string;
    'containers'?: number;
    'containersRunning'?: number;
    'containersPaused'?: number;
    'containersStopped'?: number;
    'images'?: number;
    'driver'?: string;
    'driverStatus'?: Array<Array<string>>;
    'dockerRootDir'?: string;
    'plugins'?: PluginsInfo;
    'memoryLimit'?: boolean;
    'swapLimit'?: boolean;
    'kernelMemory'?: boolean;
    'cpuCfsPeriod'?: boolean;
    'cpuCfsQuota'?: boolean;
    'cPUShares'?: boolean;
    'cPUSet'?: boolean;
    'pidsLimit'?: boolean;
    'oomKillDisable'?: boolean;
    'iPv4Forwarding'?: boolean;
    'bridgeNfIptables'?: boolean;
    'bridgeNfIp6tables'?: boolean;
    'debug'?: boolean;
    'nFd'?: number;
    'nGoroutines'?: number;
    'systemTime'?: string;
    'loggingDriver'?: string;
    'cgroupDriver'?: SystemInfo.CgroupDriverEnum;
    'cgroupVersion'?: SystemInfo.CgroupVersionEnum;
    'nEventsListener'?: number;
    'kernelVersion'?: string;
    'operatingSystem'?: string;
    'oSVersion'?: string;
    'oSType'?: string;
    'architecture'?: string;
    'NCPU'?: number;
    'memTotal'?: number;
    'indexServerAddress'?: string;
    'registryConfig'?: RegistryServiceConfig;
    'genericResources'?: GenericResources;
    'httpProxy'?: string;
    'httpsProxy'?: string;
    'noProxy'?: string;
    'name'?: string;
    'labels'?: Array<string>;
    'experimentalBuild'?: boolean;
    'serverVersion'?: string;
    'clusterStore'?: string;
    'clusterAdvertise'?: string;
    'runtimes'?: {
        [key: string]: Runtime;
    };
    'defaultRuntime'?: string;
    'swarm'?: SwarmInfo;
    'liveRestoreEnabled'?: boolean;
    'isolation'?: SystemInfo.IsolationEnum;
    'initBinary'?: string;
    'containerdCommit'?: Commit;
    'runcCommit'?: Commit;
    'initCommit'?: Commit;
    'securityOptions'?: Array<string>;
    'productLicense'?: string;
    'defaultAddressPools'?: Array<SystemInfoDefaultAddressPools>;
    'warnings'?: Array<string>;
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
export declare namespace SystemInfo {
    enum CgroupDriverEnum {
        Cgroupfs,
        Systemd,
        None
    }
    enum CgroupVersionEnum {
        _1,
        _2
    }
    enum IsolationEnum {
        Default,
        Hyperv,
        Process
    }
}
export declare class SystemInfoDefaultAddressPools {
    'base'?: string;
    'size'?: number;
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
export declare class SystemVersion {
    'platform'?: SystemVersionPlatform;
    'components'?: Array<SystemVersionComponents>;
    'version'?: string;
    'apiVersion'?: string;
    'minAPIVersion'?: string;
    'gitCommit'?: string;
    'goVersion'?: string;
    'os'?: string;
    'arch'?: string;
    'kernelVersion'?: string;
    'experimental'?: boolean;
    'buildTime'?: string;
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
export declare class SystemVersionComponents {
    'name': string;
    'version': string;
    'details'?: any;
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
export declare class SystemVersionPlatform {
    'name': string;
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
export declare class TLSInfo {
    'trustRoot'?: string;
    'certIssuerSubject'?: string;
    'certIssuerPublicKey'?: string;
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
export declare class Task {
    'ID'?: string;
    'version'?: ObjectVersion;
    'createdAt'?: string;
    'updatedAt'?: string;
    'name'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'spec'?: TaskSpec;
    'serviceID'?: string;
    'slot'?: number;
    'nodeID'?: string;
    'assignedGenericResources'?: GenericResources;
    'status'?: TaskStatus;
    'desiredState'?: TaskState;
    'jobIteration'?: ObjectVersion;
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
export declare class TaskSpec {
    'pluginSpec'?: TaskSpecPluginSpec;
    'containerSpec'?: TaskSpecContainerSpec;
    'networkAttachmentSpec'?: TaskSpecNetworkAttachmentSpec;
    'resources'?: TaskSpecResources;
    'restartPolicy'?: TaskSpecRestartPolicy;
    'placement'?: TaskSpecPlacement;
    'forceUpdate'?: number;
    'runtime'?: string;
    'networks'?: Array<NetworkAttachmentConfig>;
    'logDriver'?: TaskSpecLogDriver;
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
export declare class TaskSpecContainerSpec {
    'image'?: string;
    'labels'?: {
        [key: string]: string;
    };
    'command'?: Array<string>;
    'args'?: Array<string>;
    'hostname'?: string;
    'env'?: Array<string>;
    'dir'?: string;
    'user'?: string;
    'groups'?: Array<string>;
    'privileges'?: TaskSpecContainerSpecPrivileges;
    'TTY'?: boolean;
    'openStdin'?: boolean;
    'readOnly'?: boolean;
    'mounts'?: Array<Mount>;
    'stopSignal'?: string;
    'stopGracePeriod'?: number;
    'healthCheck'?: HealthConfig;
    'hosts'?: Array<string>;
    'dNSConfig'?: TaskSpecContainerSpecDNSConfig;
    'secrets'?: Array<TaskSpecContainerSpecSecrets>;
    'configs'?: Array<TaskSpecContainerSpecConfigs>;
    'isolation'?: TaskSpecContainerSpec.IsolationEnum;
    'init'?: boolean;
    'sysctls'?: {
        [key: string]: string;
    };
    'capabilityAdd'?: Array<string>;
    'capabilityDrop'?: Array<string>;
    'ulimits'?: Array<ResourcesUlimits>;
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
export declare namespace TaskSpecContainerSpec {
    enum IsolationEnum {
        Default,
        Process,
        Hyperv
    }
}
export declare class TaskSpecContainerSpecConfigs {
    'file'?: TaskSpecContainerSpecFile1;
    'runtime'?: any;
    'configID'?: string;
    'configName'?: string;
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
export declare class TaskSpecContainerSpecDNSConfig {
    'nameservers'?: Array<string>;
    'search'?: Array<string>;
    'options'?: Array<string>;
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
export declare class TaskSpecContainerSpecFile {
    'name'?: string;
    'UID'?: string;
    'GID'?: string;
    'mode'?: number;
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
export declare class TaskSpecContainerSpecFile1 {
    'name'?: string;
    'UID'?: string;
    'GID'?: string;
    'mode'?: number;
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
export declare class TaskSpecContainerSpecPrivileges {
    'credentialSpec'?: TaskSpecContainerSpecPrivilegesCredentialSpec;
    'sELinuxContext'?: TaskSpecContainerSpecPrivilegesSELinuxContext;
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
export declare class TaskSpecContainerSpecPrivilegesCredentialSpec {
    'config'?: string;
    'file'?: string;
    'registry'?: string;
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
export declare class TaskSpecContainerSpecPrivilegesSELinuxContext {
    'disable'?: boolean;
    'user'?: string;
    'role'?: string;
    'type'?: string;
    'level'?: string;
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
export declare class TaskSpecContainerSpecSecrets {
    'file'?: TaskSpecContainerSpecFile;
    'secretID'?: string;
    'secretName'?: string;
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
export declare class TaskSpecLogDriver {
    'name'?: string;
    'options'?: {
        [key: string]: string;
    };
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
export declare class TaskSpecNetworkAttachmentSpec {
    'containerID'?: string;
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
export declare class TaskSpecPlacement {
    'constraints'?: Array<string>;
    'preferences'?: Array<TaskSpecPlacementPreferences>;
    'maxReplicas'?: number;
    'platforms'?: Array<Platform>;
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
export declare class TaskSpecPlacementPreferences {
    'spread'?: TaskSpecPlacementSpread;
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
export declare class TaskSpecPlacementSpread {
    'spreadDescriptor'?: string;
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
export declare class TaskSpecPluginSpec {
    'name'?: string;
    'remote'?: string;
    'disabled'?: boolean;
    'pluginPrivilege'?: Array<Body>;
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
export declare class TaskSpecResources {
    'limits'?: Limit;
    'reservation'?: ResourceObject;
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
export declare class TaskSpecRestartPolicy {
    'condition'?: TaskSpecRestartPolicy.ConditionEnum;
    'delay'?: number;
    'maxAttempts'?: number;
    'window'?: number;
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
export declare namespace TaskSpecRestartPolicy {
    enum ConditionEnum {
        None,
        OnFailure,
        Any
    }
}
export declare class TaskState {
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
export declare class TaskStatus {
    'timestamp'?: string;
    'state'?: TaskState;
    'message'?: string;
    'err'?: string;
    'containerStatus'?: TaskStatusContainerStatus;
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
export declare class TaskStatusContainerStatus {
    'containerID'?: string;
    'PID'?: number;
    'exitCode'?: number;
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
export declare class ThrottleDevice {
    'path'?: string;
    'rate'?: number;
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
export declare class UnlockKeyResponse {
    'unlockKey'?: string;
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
export declare class Volume {
    'name': string;
    'driver': string;
    'mountpoint': string;
    'createdAt'?: string;
    'status'?: {
        [key: string]: any;
    };
    'labels': {
        [key: string]: string;
    };
    'scope': Volume.ScopeEnum;
    'options': {
        [key: string]: string;
    };
    'usageData'?: VolumeUsageData;
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
export declare namespace Volume {
    enum ScopeEnum {
        Local,
        Global
    }
}
export declare class VolumeConfig {
    'name'?: string;
    'driver'?: string;
    'driverOpts'?: {
        [key: string]: string;
    };
    'labels'?: {
        [key: string]: string;
    };
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
export declare class VolumeListResponse {
    'volumes': Array<Volume>;
    'warnings': Array<string>;
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
export declare class VolumePruneResponse {
    'volumesDeleted'?: Array<string>;
    'spaceReclaimed'?: number;
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
export declare class VolumeUsageData {
    'size': number;
    'refCount': number;
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
export interface Authentication {
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class HttpBasicAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class ApiKeyAuth implements Authentication {
    private location;
    private paramName;
    apiKey: string;
    constructor(location: string, paramName: string);
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class OAuth implements Authentication {
    accessToken: string;
    applyToRequest(requestOptions: localVarRequest.Options): void;
}
export declare class VoidAuth implements Authentication {
    username: string;
    password: string;
    applyToRequest(_: localVarRequest.Options): void;
}
export declare enum ConfigApiApiKeys {
}
export declare class ConfigApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ConfigApiApiKeys, value: string): void;
    configCreate(body?: object, options?: any): Promise<{
        response: http.ClientResponse;
        body: IdResponse;
    }>;
    configDelete(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    configInspect(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Config;
    }>;
    configList(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<Config>;
    }>;
    configUpdate(id: string, version: number, body?: ConfigSpec, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum ContainerApiApiKeys {
}
export declare class ContainerApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ContainerApiApiKeys, value: string): void;
    containerArchive(id: string, path: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerArchiveInfo(id: string, path: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerAttach(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerAttachWebsocket(id: string, detachKeys?: string, logs?: boolean, stream?: boolean, stdin?: boolean, stdout?: boolean, stderr?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerChanges(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<ContainerChangeResponseItem>;
    }>;
    containerCreate(body: object, name?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ContainerCreateResponse;
    }>;
    containerDelete(id: string, v?: boolean, force?: boolean, link?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerExport(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerInspect(id: string, size?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: ContainerInspectResponse;
    }>;
    containerKill(id: string, signal?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerList(all?: boolean, limit?: number, size?: boolean, filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ContainerSummary;
    }>;
    containerLogs(id: string, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, until?: number, timestamps?: boolean, tail?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    containerPause(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerPrune(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ContainerPruneResponse;
    }>;
    containerRename(id: string, name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerResize(id: string, h?: number, w?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerRestart(id: string, t?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerStart(id: string, detachKeys?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerStats(id: string, stream?: boolean, oneShot?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: any;
    }>;
    containerStop(id: string, t?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerTop(id: string, psArgs?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ContainerTopResponse;
    }>;
    containerUnpause(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    containerUpdate(id: string, update: object, options?: any): Promise<{
        response: http.ClientResponse;
        body: ContainerUpdateResponse;
    }>;
    containerWait(id: string, condition?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ContainerWaitResponse;
    }>;
    putContainerArchive(id: string, path: string, inputStream: string, noOverwriteDirNonDir?: string, copyUIDGID?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum DistributionApiApiKeys {
}
export declare class DistributionApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: DistributionApiApiKeys, value: string): void;
    distributionInspect(name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: DistributionInspectResponse;
    }>;
}
export declare enum ExecApiApiKeys {
}
export declare class ExecApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ExecApiApiKeys, value: string): void;
    containerExec(execConfig: ExecConfig, id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: IdResponse;
    }>;
    execInspect(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ExecInspectResponse;
    }>;
    execResize(id: string, h?: number, w?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    execStart(id: string, execStartConfig?: ExecStartConfig, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum ImageApiApiKeys {
}
export declare class ImageApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ImageApiApiKeys, value: string): void;
    buildPrune(keepStorage?: number, all?: boolean, filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: BuildPruneResponse;
    }>;
    imageBuild(inputStream?: string, dockerfile?: string, t?: string, extrahosts?: string, remote?: string, q?: boolean, nocache?: boolean, cachefrom?: string, pull?: string, rm?: boolean, forcerm?: boolean, memory?: number, memswap?: number, cpushares?: number, cpusetcpus?: string, cpuperiod?: number, cpuquota?: number, buildargs?: string, shmsize?: number, squash?: boolean, labels?: string, networkmode?: string, contentType?: 'application/x-tar', xRegistryConfig?: string, platform?: string, target?: string, outputs?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    imageCommit(containerConfig?: ContainerConfig, container?: string, repo?: string, tag?: string, comment?: string, author?: string, pause?: boolean, changes?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: IdResponse;
    }>;
    imageCreate(fromImage?: string, fromSrc?: string, repo?: string, tag?: string, message?: string, inputImage?: string, xRegistryAuth?: string, platform?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    imageDelete(name: string, force?: boolean, noprune?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<ImageDeleteResponseItem>;
    }>;
    imageGet(name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    imageGetAll(names?: Array<string>, options?: any): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    imageHistory(name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<HistoryResponseItem>;
    }>;
    imageInspect(name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Image;
    }>;
    imageList(all?: boolean, filters?: string, digests?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<ImageSummary>;
    }>;
    imageLoad(imagesTarball?: string, quiet?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    imagePrune(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ImagePruneResponse;
    }>;
    imagePush(name: string, xRegistryAuth: string, tag?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    imageSearch(term: string, limit?: number, filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<ImageSearchResponseItem>;
    }>;
    imageTag(name: string, repo?: string, tag?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum NetworkApiApiKeys {
}
export declare class NetworkApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: NetworkApiApiKeys, value: string): void;
    networkConnect(id: string, container: Container, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    networkCreate(networkConfig: NetworkConfig, options?: any): Promise<{
        response: http.ClientResponse;
        body: NetworkCreateResponse;
    }>;
    networkDelete(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    networkDisconnect(id: string, container: Container1, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    networkInspect(id: string, verbose?: boolean, scope?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Network;
    }>;
    networkList(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<Network>;
    }>;
    networkPrune(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: NetworkPruneResponse;
    }>;
}
export declare enum NodeApiApiKeys {
}
export declare class NodeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: NodeApiApiKeys, value: string): void;
    nodeDelete(id: string, force?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    nodeInspect(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Node;
    }>;
    nodeList(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<Node>;
    }>;
    nodeUpdate(id: string, version: number, body?: NodeSpec, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum PluginApiApiKeys {
}
export declare class PluginApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: PluginApiApiKeys, value: string): void;
    getPluginPrivileges(remote: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<PluginPrivilegeItem>;
    }>;
    pluginCreate(name: string, tarContext?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    pluginDelete(name: string, force?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: Plugin;
    }>;
    pluginDisable(name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    pluginEnable(name: string, timeout?: number, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    pluginInspect(name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Plugin;
    }>;
    pluginList(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<Plugin>;
    }>;
    pluginPull(remote: string, name?: string, xRegistryAuth?: string, body?: Array<Body>, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    pluginPush(name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    pluginSet(name: string, body?: Array<string>, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    pluginUpgrade(name: string, remote: string, xRegistryAuth?: string, body?: Array<Body>, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum SecretApiApiKeys {
}
export declare class SecretApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SecretApiApiKeys, value: string): void;
    secretCreate(body?: object, options?: any): Promise<{
        response: http.ClientResponse;
        body: IdResponse;
    }>;
    secretDelete(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    secretInspect(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Secret;
    }>;
    secretList(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<Secret>;
    }>;
    secretUpdate(id: string, version: number, body?: SecretSpec, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum ServiceApiApiKeys {
}
export declare class ServiceApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: ServiceApiApiKeys, value: string): void;
    serviceCreate(body: object, xRegistryAuth?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ServiceCreateResponse;
    }>;
    serviceDelete(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    serviceInspect(id: string, insertDefaults?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: Service;
    }>;
    serviceList(filters?: string, status?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<Service>;
    }>;
    serviceLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    serviceUpdate(id: string, body: object, version: number, registryAuthFrom?: 'spec' | 'previous-spec', rollback?: string, xRegistryAuth?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: ServiceUpdateResponse;
    }>;
}
export declare enum SessionApiApiKeys {
}
export declare class SessionApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SessionApiApiKeys, value: string): void;
    session(options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum SwarmApiApiKeys {
}
export declare class SwarmApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SwarmApiApiKeys, value: string): void;
    swarmInit(body: Body1, options?: any): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    swarmInspect(options?: any): Promise<{
        response: http.ClientResponse;
        body: Swarm;
    }>;
    swarmJoin(body: Body2, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    swarmLeave(force?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    swarmUnlock(body: Body3, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    swarmUnlockkey(options?: any): Promise<{
        response: http.ClientResponse;
        body: UnlockKeyResponse;
    }>;
    swarmUpdate(body: SwarmSpec, version: number, rotateWorkerToken?: boolean, rotateManagerToken?: boolean, rotateManagerUnlockKey?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
}
export declare enum SystemApiApiKeys {
}
export declare class SystemApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: SystemApiApiKeys, value: string): void;
    systemAuth(authConfig?: AuthConfig, options?: any): Promise<{
        response: http.ClientResponse;
        body: SystemAuthResponse;
    }>;
    systemDataUsage(options?: any): Promise<{
        response: http.ClientResponse;
        body: SystemDataUsageResponse;
    }>;
    systemEvents(since?: string, until?: string, filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: SystemEventsResponse;
    }>;
    systemInfo(options?: any): Promise<{
        response: http.ClientResponse;
        body: SystemInfo;
    }>;
    systemPing(options?: any): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    systemPingHead(options?: any): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
    systemVersion(options?: any): Promise<{
        response: http.ClientResponse;
        body: SystemVersion;
    }>;
}
export declare enum TaskApiApiKeys {
}
export declare class TaskApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: TaskApiApiKeys, value: string): void;
    taskInspect(id: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Task;
    }>;
    taskList(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Array<Task>;
    }>;
    taskLogs(id: string, details?: boolean, follow?: boolean, stdout?: boolean, stderr?: boolean, since?: number, timestamps?: boolean, tail?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: string;
    }>;
}
export declare enum VolumeApiApiKeys {
}
export declare class VolumeApi {
    protected _basePath: string;
    protected defaultHeaders: any;
    protected _useQuerystring: boolean;
    protected authentications: {
        default: Authentication;
    };
    constructor(basePath?: string);
    set useQuerystring(value: boolean);
    set basePath(basePath: string);
    get basePath(): string;
    setDefaultAuthentication(auth: Authentication): void;
    setApiKey(key: VolumeApiApiKeys, value: string): void;
    volumeCreate(volumeConfig: VolumeConfig, options?: any): Promise<{
        response: http.ClientResponse;
        body: Volume;
    }>;
    volumeDelete(name: string, force?: boolean, options?: any): Promise<{
        response: http.ClientResponse;
        body?: any;
    }>;
    volumeInspect(name: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: Volume;
    }>;
    volumeList(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: VolumeListResponse;
    }>;
    volumePrune(filters?: string, options?: any): Promise<{
        response: http.ClientResponse;
        body: VolumePruneResponse;
    }>;
}
