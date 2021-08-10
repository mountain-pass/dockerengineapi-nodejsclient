import localVarRequest from 'request';

export * from './address';
export * from './authConfig';
export * from './buildCache';
export * from './buildInfo';
export * from './buildPruneResponse';
export * from './clusterInfo';
export * from './commit';
export * from './config';
export * from './configSpec';
export * from './containerChangeResponseItem';
export * from './containerConfig';
export * from './containerCreateResponse';
export * from './containerInspectResponse';
export * from './containerPruneResponse';
export * from './containerState';
export * from './containerTopResponse';
export * from './containerUpdateResponse';
export * from './containerWaitResponse';
export * from './containerWaitResponseError';
export * from './createImageInfo';
export * from './deviceMapping';
export * from './deviceRequest';
export * from './distributionInspectResponse';
export * from './distributionInspectResponseDescriptor';
export * from './distributionInspectResponsePlatforms';
export * from './driver';
export * from './endpointIPAMConfig';
export * from './endpointPortConfig';
export * from './endpointSettings';
export * from './endpointSpec';
export * from './engineDescription';
export * from './engineDescriptionPlugins';
export * from './errorDetail';
export * from './errorResponse';
export * from './execInspectResponse';
export * from './graphDriverData';
export * from './health';
export * from './healthConfig';
export * from './healthcheckResult';
export * from './historyResponseItem';
export * from './hostConfig';
export * from './hostConfigAllOf';
export * from './hostConfigAllOfLogConfig';
export * from './iPAM';
export * from './idResponse';
export * from './image';
export * from './imageDeleteResponseItem';
export * from './imageID';
export * from './imageMetadata';
export * from './imagePruneResponse';
export * from './imageRootFS';
export * from './imageSearchResponseItem';
export * from './imageSummary';
export * from './indexInfo';
export * from './inlineObject';
export * from './inlineObject1';
export * from './inlineObject2';
export * from './inlineObject3';
export * from './inlineObject4';
export * from './inlineObject5';
export * from './inlineObject6';
export * from './inlineObject7';
export * from './inlineResponse400';
export * from './joinTokens';
export * from './limit';
export * from './localNodeState';
export * from './managerStatus';
export * from './mount';
export * from './mountBindOptions';
export * from './mountPoint';
export * from './mountTmpfsOptions';
export * from './mountVolumeOptions';
export * from './mountVolumeOptionsDriverConfig';
export * from './network';
export * from './networkAttachmentConfig';
export * from './networkContainer';
export * from './networkCreateResponse';
export * from './networkPruneResponse';
export * from './networkSettings';
export * from './networkingConfig';
export * from './node';
export * from './nodeDescription';
export * from './nodeSpec';
export * from './nodeState';
export * from './nodeStatus';
export * from './objectVersion';
export * from './peerNode';
export * from './platform';
export * from './plugin';
export * from './pluginConfig';
export * from './pluginConfigArgs';
export * from './pluginConfigInterface';
export * from './pluginConfigLinux';
export * from './pluginConfigNetwork';
export * from './pluginConfigRootfs';
export * from './pluginConfigUser';
export * from './pluginDevice';
export * from './pluginEnv';
export * from './pluginInterfaceType';
export * from './pluginMount';
export * from './pluginPrivilegeItem';
export * from './pluginSettings';
export * from './pluginsInfo';
export * from './port';
export * from './portBinding';
export * from './processConfig';
export * from './progressDetail';
export * from './pushImageInfo';
export * from './reachability';
export * from './registryServiceConfig';
export * from './resourceObject';
export * from './resources';
export * from './resourcesBlkioWeightDevice';
export * from './resourcesUlimits';
export * from './restartPolicy';
export * from './runtime';
export * from './secret';
export * from './secretSpec';
export * from './service';
export * from './serviceCreateResponse';
export * from './serviceEndpoint';
export * from './serviceEndpointVirtualIPs';
export * from './serviceJobStatus';
export * from './serviceServiceStatus';
export * from './serviceSpec';
export * from './serviceSpecMode';
export * from './serviceSpecModeReplicated';
export * from './serviceSpecModeReplicatedJob';
export * from './serviceSpecRollbackConfig';
export * from './serviceSpecUpdateConfig';
export * from './serviceUpdateResponse';
export * from './serviceUpdateStatus';
export * from './swarm';
export * from './swarmAllOf';
export * from './swarmInfo';
export * from './swarmSpec';
export * from './swarmSpecCAConfig';
export * from './swarmSpecCAConfigExternalCAs';
export * from './swarmSpecDispatcher';
export * from './swarmSpecEncryptionConfig';
export * from './swarmSpecOrchestration';
export * from './swarmSpecRaft';
export * from './swarmSpecTaskDefaults';
export * from './swarmSpecTaskDefaultsLogDriver';
export * from './systemAuthResponse';
export * from './systemDataUsageResponse';
export * from './systemEventsResponse';
export * from './systemEventsResponseActor';
export * from './systemInfo';
export * from './systemInfoDefaultAddressPools';
export * from './systemVersion';
export * from './systemVersionComponents';
export * from './systemVersionPlatform';
export * from './tLSInfo';
export * from './task';
export * from './taskSpec';
export * from './taskSpecContainerSpec';
export * from './taskSpecContainerSpecConfigs';
export * from './taskSpecContainerSpecDNSConfig';
export * from './taskSpecContainerSpecFile';
export * from './taskSpecContainerSpecFile1';
export * from './taskSpecContainerSpecPrivileges';
export * from './taskSpecContainerSpecPrivilegesCredentialSpec';
export * from './taskSpecContainerSpecPrivilegesSELinuxContext';
export * from './taskSpecContainerSpecSecrets';
export * from './taskSpecLogDriver';
export * from './taskSpecNetworkAttachmentSpec';
export * from './taskSpecPlacement';
export * from './taskSpecPlacementPreferences';
export * from './taskSpecPlacementSpread';
export * from './taskSpecPluginSpec';
export * from './taskSpecResources';
export * from './taskSpecRestartPolicy';
export * from './taskState';
export * from './taskStatus';
export * from './taskStatusContainerStatus';
export * from './throttleDevice';
export * from './unlockKeyResponse';
export * from './volume';
export * from './volumeConfig';
export * from './volumeListResponse';
export * from './volumePruneResponse';
export * from './volumeUsageData';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { Address } from './address';
import { AuthConfig } from './authConfig';
import { BuildCache } from './buildCache';
import { BuildInfo } from './buildInfo';
import { BuildPruneResponse } from './buildPruneResponse';
import { ClusterInfo } from './clusterInfo';
import { Commit } from './commit';
import { Config } from './config';
import { ConfigSpec } from './configSpec';
import { ContainerChangeResponseItem } from './containerChangeResponseItem';
import { ContainerConfig } from './containerConfig';
import { ContainerCreateResponse } from './containerCreateResponse';
import { ContainerInspectResponse } from './containerInspectResponse';
import { ContainerPruneResponse } from './containerPruneResponse';
import { ContainerState } from './containerState';
import { ContainerTopResponse } from './containerTopResponse';
import { ContainerUpdateResponse } from './containerUpdateResponse';
import { ContainerWaitResponse } from './containerWaitResponse';
import { ContainerWaitResponseError } from './containerWaitResponseError';
import { CreateImageInfo } from './createImageInfo';
import { DeviceMapping } from './deviceMapping';
import { DeviceRequest } from './deviceRequest';
import { DistributionInspectResponse } from './distributionInspectResponse';
import { DistributionInspectResponseDescriptor } from './distributionInspectResponseDescriptor';
import { DistributionInspectResponsePlatforms } from './distributionInspectResponsePlatforms';
import { Driver } from './driver';
import { EndpointIPAMConfig } from './endpointIPAMConfig';
import { EndpointPortConfig } from './endpointPortConfig';
import { EndpointSettings } from './endpointSettings';
import { EndpointSpec } from './endpointSpec';
import { EngineDescription } from './engineDescription';
import { EngineDescriptionPlugins } from './engineDescriptionPlugins';
import { ErrorDetail } from './errorDetail';
import { ErrorResponse } from './errorResponse';
import { ExecInspectResponse } from './execInspectResponse';
import { GraphDriverData } from './graphDriverData';
import { Health } from './health';
import { HealthConfig } from './healthConfig';
import { HealthcheckResult } from './healthcheckResult';
import { HistoryResponseItem } from './historyResponseItem';
import { HostConfig } from './hostConfig';
import { HostConfigAllOf } from './hostConfigAllOf';
import { HostConfigAllOfLogConfig } from './hostConfigAllOfLogConfig';
import { IPAM } from './iPAM';
import { IdResponse } from './idResponse';
import { Image } from './image';
import { ImageDeleteResponseItem } from './imageDeleteResponseItem';
import { ImageID } from './imageID';
import { ImageMetadata } from './imageMetadata';
import { ImagePruneResponse } from './imagePruneResponse';
import { ImageRootFS } from './imageRootFS';
import { ImageSearchResponseItem } from './imageSearchResponseItem';
import { ImageSummary } from './imageSummary';
import { IndexInfo } from './indexInfo';
import { InlineObject } from './inlineObject';
import { InlineObject1 } from './inlineObject1';
import { InlineObject2 } from './inlineObject2';
import { InlineObject3 } from './inlineObject3';
import { InlineObject4 } from './inlineObject4';
import { InlineObject5 } from './inlineObject5';
import { InlineObject6 } from './inlineObject6';
import { InlineObject7 } from './inlineObject7';
import { InlineResponse400 } from './inlineResponse400';
import { JoinTokens } from './joinTokens';
import { Limit } from './limit';
import { LocalNodeState } from './localNodeState';
import { ManagerStatus } from './managerStatus';
import { Mount } from './mount';
import { MountBindOptions } from './mountBindOptions';
import { MountPoint } from './mountPoint';
import { MountTmpfsOptions } from './mountTmpfsOptions';
import { MountVolumeOptions } from './mountVolumeOptions';
import { MountVolumeOptionsDriverConfig } from './mountVolumeOptionsDriverConfig';
import { Network } from './network';
import { NetworkAttachmentConfig } from './networkAttachmentConfig';
import { NetworkContainer } from './networkContainer';
import { NetworkCreateResponse } from './networkCreateResponse';
import { NetworkPruneResponse } from './networkPruneResponse';
import { NetworkSettings } from './networkSettings';
import { NetworkingConfig } from './networkingConfig';
import { Node } from './node';
import { NodeDescription } from './nodeDescription';
import { NodeSpec } from './nodeSpec';
import { NodeState } from './nodeState';
import { NodeStatus } from './nodeStatus';
import { ObjectVersion } from './objectVersion';
import { PeerNode } from './peerNode';
import { Platform } from './platform';
import { Plugin } from './plugin';
import { PluginConfig } from './pluginConfig';
import { PluginConfigArgs } from './pluginConfigArgs';
import { PluginConfigInterface } from './pluginConfigInterface';
import { PluginConfigLinux } from './pluginConfigLinux';
import { PluginConfigNetwork } from './pluginConfigNetwork';
import { PluginConfigRootfs } from './pluginConfigRootfs';
import { PluginConfigUser } from './pluginConfigUser';
import { PluginDevice } from './pluginDevice';
import { PluginEnv } from './pluginEnv';
import { PluginInterfaceType } from './pluginInterfaceType';
import { PluginMount } from './pluginMount';
import { PluginPrivilegeItem } from './pluginPrivilegeItem';
import { PluginSettings } from './pluginSettings';
import { PluginsInfo } from './pluginsInfo';
import { Port } from './port';
import { PortBinding } from './portBinding';
import { ProcessConfig } from './processConfig';
import { ProgressDetail } from './progressDetail';
import { PushImageInfo } from './pushImageInfo';
import { Reachability } from './reachability';
import { RegistryServiceConfig } from './registryServiceConfig';
import { ResourceObject } from './resourceObject';
import { Resources } from './resources';
import { ResourcesBlkioWeightDevice } from './resourcesBlkioWeightDevice';
import { ResourcesUlimits } from './resourcesUlimits';
import { RestartPolicy } from './restartPolicy';
import { Runtime } from './runtime';
import { Secret } from './secret';
import { SecretSpec } from './secretSpec';
import { Service } from './service';
import { ServiceCreateResponse } from './serviceCreateResponse';
import { ServiceEndpoint } from './serviceEndpoint';
import { ServiceEndpointVirtualIPs } from './serviceEndpointVirtualIPs';
import { ServiceJobStatus } from './serviceJobStatus';
import { ServiceServiceStatus } from './serviceServiceStatus';
import { ServiceSpec } from './serviceSpec';
import { ServiceSpecMode } from './serviceSpecMode';
import { ServiceSpecModeReplicated } from './serviceSpecModeReplicated';
import { ServiceSpecModeReplicatedJob } from './serviceSpecModeReplicatedJob';
import { ServiceSpecRollbackConfig } from './serviceSpecRollbackConfig';
import { ServiceSpecUpdateConfig } from './serviceSpecUpdateConfig';
import { ServiceUpdateResponse } from './serviceUpdateResponse';
import { ServiceUpdateStatus } from './serviceUpdateStatus';
import { Swarm } from './swarm';
import { SwarmAllOf } from './swarmAllOf';
import { SwarmInfo } from './swarmInfo';
import { SwarmSpec } from './swarmSpec';
import { SwarmSpecCAConfig } from './swarmSpecCAConfig';
import { SwarmSpecCAConfigExternalCAs } from './swarmSpecCAConfigExternalCAs';
import { SwarmSpecDispatcher } from './swarmSpecDispatcher';
import { SwarmSpecEncryptionConfig } from './swarmSpecEncryptionConfig';
import { SwarmSpecOrchestration } from './swarmSpecOrchestration';
import { SwarmSpecRaft } from './swarmSpecRaft';
import { SwarmSpecTaskDefaults } from './swarmSpecTaskDefaults';
import { SwarmSpecTaskDefaultsLogDriver } from './swarmSpecTaskDefaultsLogDriver';
import { SystemAuthResponse } from './systemAuthResponse';
import { SystemDataUsageResponse } from './systemDataUsageResponse';
import { SystemEventsResponse } from './systemEventsResponse';
import { SystemEventsResponseActor } from './systemEventsResponseActor';
import { SystemInfo } from './systemInfo';
import { SystemInfoDefaultAddressPools } from './systemInfoDefaultAddressPools';
import { SystemVersion } from './systemVersion';
import { SystemVersionComponents } from './systemVersionComponents';
import { SystemVersionPlatform } from './systemVersionPlatform';
import { TLSInfo } from './tLSInfo';
import { Task } from './task';
import { TaskSpec } from './taskSpec';
import { TaskSpecContainerSpec } from './taskSpecContainerSpec';
import { TaskSpecContainerSpecConfigs } from './taskSpecContainerSpecConfigs';
import { TaskSpecContainerSpecDNSConfig } from './taskSpecContainerSpecDNSConfig';
import { TaskSpecContainerSpecFile } from './taskSpecContainerSpecFile';
import { TaskSpecContainerSpecFile1 } from './taskSpecContainerSpecFile1';
import { TaskSpecContainerSpecPrivileges } from './taskSpecContainerSpecPrivileges';
import { TaskSpecContainerSpecPrivilegesCredentialSpec } from './taskSpecContainerSpecPrivilegesCredentialSpec';
import { TaskSpecContainerSpecPrivilegesSELinuxContext } from './taskSpecContainerSpecPrivilegesSELinuxContext';
import { TaskSpecContainerSpecSecrets } from './taskSpecContainerSpecSecrets';
import { TaskSpecLogDriver } from './taskSpecLogDriver';
import { TaskSpecNetworkAttachmentSpec } from './taskSpecNetworkAttachmentSpec';
import { TaskSpecPlacement } from './taskSpecPlacement';
import { TaskSpecPlacementPreferences } from './taskSpecPlacementPreferences';
import { TaskSpecPlacementSpread } from './taskSpecPlacementSpread';
import { TaskSpecPluginSpec } from './taskSpecPluginSpec';
import { TaskSpecResources } from './taskSpecResources';
import { TaskSpecRestartPolicy } from './taskSpecRestartPolicy';
import { TaskState } from './taskState';
import { TaskStatus } from './taskStatus';
import { TaskStatusContainerStatus } from './taskStatusContainerStatus';
import { ThrottleDevice } from './throttleDevice';
import { UnlockKeyResponse } from './unlockKeyResponse';
import { Volume } from './volume';
import { VolumeConfig } from './volumeConfig';
import { VolumeListResponse } from './volumeListResponse';
import { VolumePruneResponse } from './volumePruneResponse';
import { VolumeUsageData } from './volumeUsageData';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "ContainerState.StatusEnum": ContainerState.StatusEnum,
        "EndpointPortConfig.ProtocolEnum": EndpointPortConfig.ProtocolEnum,
        "EndpointPortConfig.PublishModeEnum": EndpointPortConfig.PublishModeEnum,
        "EndpointSpec.ModeEnum": EndpointSpec.ModeEnum,
        "Health.StatusEnum": Health.StatusEnum,
        "HostConfig.CgroupnsModeEnum": HostConfig.CgroupnsModeEnum,
        "HostConfig.IsolationEnum": HostConfig.IsolationEnum,
        "HostConfigAllOf.CgroupnsModeEnum": HostConfigAllOf.CgroupnsModeEnum,
        "HostConfigAllOf.IsolationEnum": HostConfigAllOf.IsolationEnum,
        "HostConfigAllOfLogConfig.TypeEnum": HostConfigAllOfLogConfig.TypeEnum,
        "LocalNodeState": LocalNodeState,
        "Mount.TypeEnum": Mount.TypeEnum,
        "MountBindOptions.PropagationEnum": MountBindOptions.PropagationEnum,
        "NodeSpec.RoleEnum": NodeSpec.RoleEnum,
        "NodeSpec.AvailabilityEnum": NodeSpec.AvailabilityEnum,
        "NodeState": NodeState,
        "PluginConfigInterface.ProtocolSchemeEnum": PluginConfigInterface.ProtocolSchemeEnum,
        "Port.TypeEnum": Port.TypeEnum,
        "Reachability": Reachability,
        "RestartPolicy.NameEnum": RestartPolicy.NameEnum,
        "ServiceSpecRollbackConfig.FailureActionEnum": ServiceSpecRollbackConfig.FailureActionEnum,
        "ServiceSpecRollbackConfig.OrderEnum": ServiceSpecRollbackConfig.OrderEnum,
        "ServiceSpecUpdateConfig.FailureActionEnum": ServiceSpecUpdateConfig.FailureActionEnum,
        "ServiceSpecUpdateConfig.OrderEnum": ServiceSpecUpdateConfig.OrderEnum,
        "ServiceUpdateStatus.StateEnum": ServiceUpdateStatus.StateEnum,
        "SwarmSpecCAConfigExternalCAs.ProtocolEnum": SwarmSpecCAConfigExternalCAs.ProtocolEnum,
        "SystemInfo.CgroupDriverEnum": SystemInfo.CgroupDriverEnum,
        "SystemInfo.CgroupVersionEnum": SystemInfo.CgroupVersionEnum,
        "SystemInfo.IsolationEnum": SystemInfo.IsolationEnum,
        "TaskSpecContainerSpec.IsolationEnum": TaskSpecContainerSpec.IsolationEnum,
        "TaskSpecRestartPolicy.ConditionEnum": TaskSpecRestartPolicy.ConditionEnum,
        "TaskState": TaskState,
        "Volume.ScopeEnum": Volume.ScopeEnum,
}

let typeMap: {[index: string]: any} = {
    "Address": Address,
    "AuthConfig": AuthConfig,
    "BuildCache": BuildCache,
    "BuildInfo": BuildInfo,
    "BuildPruneResponse": BuildPruneResponse,
    "ClusterInfo": ClusterInfo,
    "Commit": Commit,
    "Config": Config,
    "ConfigSpec": ConfigSpec,
    "ContainerChangeResponseItem": ContainerChangeResponseItem,
    "ContainerConfig": ContainerConfig,
    "ContainerCreateResponse": ContainerCreateResponse,
    "ContainerInspectResponse": ContainerInspectResponse,
    "ContainerPruneResponse": ContainerPruneResponse,
    "ContainerState": ContainerState,
    "ContainerTopResponse": ContainerTopResponse,
    "ContainerUpdateResponse": ContainerUpdateResponse,
    "ContainerWaitResponse": ContainerWaitResponse,
    "ContainerWaitResponseError": ContainerWaitResponseError,
    "CreateImageInfo": CreateImageInfo,
    "DeviceMapping": DeviceMapping,
    "DeviceRequest": DeviceRequest,
    "DistributionInspectResponse": DistributionInspectResponse,
    "DistributionInspectResponseDescriptor": DistributionInspectResponseDescriptor,
    "DistributionInspectResponsePlatforms": DistributionInspectResponsePlatforms,
    "Driver": Driver,
    "EndpointIPAMConfig": EndpointIPAMConfig,
    "EndpointPortConfig": EndpointPortConfig,
    "EndpointSettings": EndpointSettings,
    "EndpointSpec": EndpointSpec,
    "EngineDescription": EngineDescription,
    "EngineDescriptionPlugins": EngineDescriptionPlugins,
    "ErrorDetail": ErrorDetail,
    "ErrorResponse": ErrorResponse,
    "ExecInspectResponse": ExecInspectResponse,
    "GraphDriverData": GraphDriverData,
    "Health": Health,
    "HealthConfig": HealthConfig,
    "HealthcheckResult": HealthcheckResult,
    "HistoryResponseItem": HistoryResponseItem,
    "HostConfig": HostConfig,
    "HostConfigAllOf": HostConfigAllOf,
    "HostConfigAllOfLogConfig": HostConfigAllOfLogConfig,
    "IPAM": IPAM,
    "IdResponse": IdResponse,
    "Image": Image,
    "ImageDeleteResponseItem": ImageDeleteResponseItem,
    "ImageID": ImageID,
    "ImageMetadata": ImageMetadata,
    "ImagePruneResponse": ImagePruneResponse,
    "ImageRootFS": ImageRootFS,
    "ImageSearchResponseItem": ImageSearchResponseItem,
    "ImageSummary": ImageSummary,
    "IndexInfo": IndexInfo,
    "InlineObject": InlineObject,
    "InlineObject1": InlineObject1,
    "InlineObject2": InlineObject2,
    "InlineObject3": InlineObject3,
    "InlineObject4": InlineObject4,
    "InlineObject5": InlineObject5,
    "InlineObject6": InlineObject6,
    "InlineObject7": InlineObject7,
    "InlineResponse400": InlineResponse400,
    "JoinTokens": JoinTokens,
    "Limit": Limit,
    "ManagerStatus": ManagerStatus,
    "Mount": Mount,
    "MountBindOptions": MountBindOptions,
    "MountPoint": MountPoint,
    "MountTmpfsOptions": MountTmpfsOptions,
    "MountVolumeOptions": MountVolumeOptions,
    "MountVolumeOptionsDriverConfig": MountVolumeOptionsDriverConfig,
    "Network": Network,
    "NetworkAttachmentConfig": NetworkAttachmentConfig,
    "NetworkContainer": NetworkContainer,
    "NetworkCreateResponse": NetworkCreateResponse,
    "NetworkPruneResponse": NetworkPruneResponse,
    "NetworkSettings": NetworkSettings,
    "NetworkingConfig": NetworkingConfig,
    "Node": Node,
    "NodeDescription": NodeDescription,
    "NodeSpec": NodeSpec,
    "NodeStatus": NodeStatus,
    "ObjectVersion": ObjectVersion,
    "PeerNode": PeerNode,
    "Platform": Platform,
    "Plugin": Plugin,
    "PluginConfig": PluginConfig,
    "PluginConfigArgs": PluginConfigArgs,
    "PluginConfigInterface": PluginConfigInterface,
    "PluginConfigLinux": PluginConfigLinux,
    "PluginConfigNetwork": PluginConfigNetwork,
    "PluginConfigRootfs": PluginConfigRootfs,
    "PluginConfigUser": PluginConfigUser,
    "PluginDevice": PluginDevice,
    "PluginEnv": PluginEnv,
    "PluginInterfaceType": PluginInterfaceType,
    "PluginMount": PluginMount,
    "PluginPrivilegeItem": PluginPrivilegeItem,
    "PluginSettings": PluginSettings,
    "PluginsInfo": PluginsInfo,
    "Port": Port,
    "PortBinding": PortBinding,
    "ProcessConfig": ProcessConfig,
    "ProgressDetail": ProgressDetail,
    "PushImageInfo": PushImageInfo,
    "RegistryServiceConfig": RegistryServiceConfig,
    "ResourceObject": ResourceObject,
    "Resources": Resources,
    "ResourcesBlkioWeightDevice": ResourcesBlkioWeightDevice,
    "ResourcesUlimits": ResourcesUlimits,
    "RestartPolicy": RestartPolicy,
    "Runtime": Runtime,
    "Secret": Secret,
    "SecretSpec": SecretSpec,
    "Service": Service,
    "ServiceCreateResponse": ServiceCreateResponse,
    "ServiceEndpoint": ServiceEndpoint,
    "ServiceEndpointVirtualIPs": ServiceEndpointVirtualIPs,
    "ServiceJobStatus": ServiceJobStatus,
    "ServiceServiceStatus": ServiceServiceStatus,
    "ServiceSpec": ServiceSpec,
    "ServiceSpecMode": ServiceSpecMode,
    "ServiceSpecModeReplicated": ServiceSpecModeReplicated,
    "ServiceSpecModeReplicatedJob": ServiceSpecModeReplicatedJob,
    "ServiceSpecRollbackConfig": ServiceSpecRollbackConfig,
    "ServiceSpecUpdateConfig": ServiceSpecUpdateConfig,
    "ServiceUpdateResponse": ServiceUpdateResponse,
    "ServiceUpdateStatus": ServiceUpdateStatus,
    "Swarm": Swarm,
    "SwarmAllOf": SwarmAllOf,
    "SwarmInfo": SwarmInfo,
    "SwarmSpec": SwarmSpec,
    "SwarmSpecCAConfig": SwarmSpecCAConfig,
    "SwarmSpecCAConfigExternalCAs": SwarmSpecCAConfigExternalCAs,
    "SwarmSpecDispatcher": SwarmSpecDispatcher,
    "SwarmSpecEncryptionConfig": SwarmSpecEncryptionConfig,
    "SwarmSpecOrchestration": SwarmSpecOrchestration,
    "SwarmSpecRaft": SwarmSpecRaft,
    "SwarmSpecTaskDefaults": SwarmSpecTaskDefaults,
    "SwarmSpecTaskDefaultsLogDriver": SwarmSpecTaskDefaultsLogDriver,
    "SystemAuthResponse": SystemAuthResponse,
    "SystemDataUsageResponse": SystemDataUsageResponse,
    "SystemEventsResponse": SystemEventsResponse,
    "SystemEventsResponseActor": SystemEventsResponseActor,
    "SystemInfo": SystemInfo,
    "SystemInfoDefaultAddressPools": SystemInfoDefaultAddressPools,
    "SystemVersion": SystemVersion,
    "SystemVersionComponents": SystemVersionComponents,
    "SystemVersionPlatform": SystemVersionPlatform,
    "TLSInfo": TLSInfo,
    "Task": Task,
    "TaskSpec": TaskSpec,
    "TaskSpecContainerSpec": TaskSpecContainerSpec,
    "TaskSpecContainerSpecConfigs": TaskSpecContainerSpecConfigs,
    "TaskSpecContainerSpecDNSConfig": TaskSpecContainerSpecDNSConfig,
    "TaskSpecContainerSpecFile": TaskSpecContainerSpecFile,
    "TaskSpecContainerSpecFile1": TaskSpecContainerSpecFile1,
    "TaskSpecContainerSpecPrivileges": TaskSpecContainerSpecPrivileges,
    "TaskSpecContainerSpecPrivilegesCredentialSpec": TaskSpecContainerSpecPrivilegesCredentialSpec,
    "TaskSpecContainerSpecPrivilegesSELinuxContext": TaskSpecContainerSpecPrivilegesSELinuxContext,
    "TaskSpecContainerSpecSecrets": TaskSpecContainerSpecSecrets,
    "TaskSpecLogDriver": TaskSpecLogDriver,
    "TaskSpecNetworkAttachmentSpec": TaskSpecNetworkAttachmentSpec,
    "TaskSpecPlacement": TaskSpecPlacement,
    "TaskSpecPlacementPreferences": TaskSpecPlacementPreferences,
    "TaskSpecPlacementSpread": TaskSpecPlacementSpread,
    "TaskSpecPluginSpec": TaskSpecPluginSpec,
    "TaskSpecResources": TaskSpecResources,
    "TaskSpecRestartPolicy": TaskSpecRestartPolicy,
    "TaskStatus": TaskStatus,
    "TaskStatusContainerStatus": TaskStatusContainerStatus,
    "ThrottleDevice": ThrottleDevice,
    "UnlockKeyResponse": UnlockKeyResponse,
    "Volume": Volume,
    "VolumeConfig": VolumeConfig,
    "VolumeListResponse": VolumeListResponse,
    "VolumePruneResponse": VolumePruneResponse,
    "VolumeUsageData": VolumeUsageData,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
