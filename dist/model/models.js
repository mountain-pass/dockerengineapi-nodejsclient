"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBearerAuth = exports.HttpBasicAuth = exports.ObjectSerializer = void 0;
__exportStar(require("./address"), exports);
__exportStar(require("./authConfig"), exports);
__exportStar(require("./buildCache"), exports);
__exportStar(require("./buildInfo"), exports);
__exportStar(require("./buildPruneResponse"), exports);
__exportStar(require("./clusterInfo"), exports);
__exportStar(require("./commit"), exports);
__exportStar(require("./config"), exports);
__exportStar(require("./configSpec"), exports);
__exportStar(require("./containerChangeResponseItem"), exports);
__exportStar(require("./containerConfig"), exports);
__exportStar(require("./containerCreateResponse"), exports);
__exportStar(require("./containerInspectResponse"), exports);
__exportStar(require("./containerPruneResponse"), exports);
__exportStar(require("./containerState"), exports);
__exportStar(require("./containerTopResponse"), exports);
__exportStar(require("./containerUpdateResponse"), exports);
__exportStar(require("./containerWaitResponse"), exports);
__exportStar(require("./containerWaitResponseError"), exports);
__exportStar(require("./createImageInfo"), exports);
__exportStar(require("./deviceMapping"), exports);
__exportStar(require("./deviceRequest"), exports);
__exportStar(require("./distributionInspectResponse"), exports);
__exportStar(require("./distributionInspectResponseDescriptor"), exports);
__exportStar(require("./distributionInspectResponsePlatforms"), exports);
__exportStar(require("./driver"), exports);
__exportStar(require("./endpointIPAMConfig"), exports);
__exportStar(require("./endpointPortConfig"), exports);
__exportStar(require("./endpointSettings"), exports);
__exportStar(require("./endpointSpec"), exports);
__exportStar(require("./engineDescription"), exports);
__exportStar(require("./engineDescriptionPlugins"), exports);
__exportStar(require("./errorDetail"), exports);
__exportStar(require("./errorResponse"), exports);
__exportStar(require("./execInspectResponse"), exports);
__exportStar(require("./graphDriverData"), exports);
__exportStar(require("./health"), exports);
__exportStar(require("./healthConfig"), exports);
__exportStar(require("./healthcheckResult"), exports);
__exportStar(require("./historyResponseItem"), exports);
__exportStar(require("./hostConfig"), exports);
__exportStar(require("./hostConfigAllOf"), exports);
__exportStar(require("./hostConfigAllOfLogConfig"), exports);
__exportStar(require("./iPAM"), exports);
__exportStar(require("./idResponse"), exports);
__exportStar(require("./image"), exports);
__exportStar(require("./imageDeleteResponseItem"), exports);
__exportStar(require("./imageID"), exports);
__exportStar(require("./imageMetadata"), exports);
__exportStar(require("./imagePruneResponse"), exports);
__exportStar(require("./imageRootFS"), exports);
__exportStar(require("./imageSearchResponseItem"), exports);
__exportStar(require("./imageSummary"), exports);
__exportStar(require("./indexInfo"), exports);
__exportStar(require("./inlineObject"), exports);
__exportStar(require("./inlineObject1"), exports);
__exportStar(require("./inlineObject2"), exports);
__exportStar(require("./inlineObject3"), exports);
__exportStar(require("./inlineObject4"), exports);
__exportStar(require("./inlineObject5"), exports);
__exportStar(require("./inlineObject6"), exports);
__exportStar(require("./inlineObject7"), exports);
__exportStar(require("./inlineResponse400"), exports);
__exportStar(require("./joinTokens"), exports);
__exportStar(require("./limit"), exports);
__exportStar(require("./localNodeState"), exports);
__exportStar(require("./managerStatus"), exports);
__exportStar(require("./mount"), exports);
__exportStar(require("./mountBindOptions"), exports);
__exportStar(require("./mountPoint"), exports);
__exportStar(require("./mountTmpfsOptions"), exports);
__exportStar(require("./mountVolumeOptions"), exports);
__exportStar(require("./mountVolumeOptionsDriverConfig"), exports);
__exportStar(require("./network"), exports);
__exportStar(require("./networkAttachmentConfig"), exports);
__exportStar(require("./networkContainer"), exports);
__exportStar(require("./networkCreateResponse"), exports);
__exportStar(require("./networkPruneResponse"), exports);
__exportStar(require("./networkSettings"), exports);
__exportStar(require("./networkingConfig"), exports);
__exportStar(require("./node"), exports);
__exportStar(require("./nodeDescription"), exports);
__exportStar(require("./nodeSpec"), exports);
__exportStar(require("./nodeState"), exports);
__exportStar(require("./nodeStatus"), exports);
__exportStar(require("./objectVersion"), exports);
__exportStar(require("./peerNode"), exports);
__exportStar(require("./platform"), exports);
__exportStar(require("./plugin"), exports);
__exportStar(require("./pluginConfig"), exports);
__exportStar(require("./pluginConfigArgs"), exports);
__exportStar(require("./pluginConfigInterface"), exports);
__exportStar(require("./pluginConfigLinux"), exports);
__exportStar(require("./pluginConfigNetwork"), exports);
__exportStar(require("./pluginConfigRootfs"), exports);
__exportStar(require("./pluginConfigUser"), exports);
__exportStar(require("./pluginDevice"), exports);
__exportStar(require("./pluginEnv"), exports);
__exportStar(require("./pluginInterfaceType"), exports);
__exportStar(require("./pluginMount"), exports);
__exportStar(require("./pluginPrivilegeItem"), exports);
__exportStar(require("./pluginSettings"), exports);
__exportStar(require("./pluginsInfo"), exports);
__exportStar(require("./port"), exports);
__exportStar(require("./portBinding"), exports);
__exportStar(require("./processConfig"), exports);
__exportStar(require("./progressDetail"), exports);
__exportStar(require("./pushImageInfo"), exports);
__exportStar(require("./reachability"), exports);
__exportStar(require("./registryServiceConfig"), exports);
__exportStar(require("./resourceObject"), exports);
__exportStar(require("./resources"), exports);
__exportStar(require("./resourcesBlkioWeightDevice"), exports);
__exportStar(require("./resourcesUlimits"), exports);
__exportStar(require("./restartPolicy"), exports);
__exportStar(require("./runtime"), exports);
__exportStar(require("./secret"), exports);
__exportStar(require("./secretSpec"), exports);
__exportStar(require("./service"), exports);
__exportStar(require("./serviceCreateResponse"), exports);
__exportStar(require("./serviceEndpoint"), exports);
__exportStar(require("./serviceEndpointVirtualIPs"), exports);
__exportStar(require("./serviceJobStatus"), exports);
__exportStar(require("./serviceServiceStatus"), exports);
__exportStar(require("./serviceSpec"), exports);
__exportStar(require("./serviceSpecMode"), exports);
__exportStar(require("./serviceSpecModeReplicated"), exports);
__exportStar(require("./serviceSpecModeReplicatedJob"), exports);
__exportStar(require("./serviceSpecRollbackConfig"), exports);
__exportStar(require("./serviceSpecUpdateConfig"), exports);
__exportStar(require("./serviceUpdateResponse"), exports);
__exportStar(require("./serviceUpdateStatus"), exports);
__exportStar(require("./swarm"), exports);
__exportStar(require("./swarmAllOf"), exports);
__exportStar(require("./swarmInfo"), exports);
__exportStar(require("./swarmSpec"), exports);
__exportStar(require("./swarmSpecCAConfig"), exports);
__exportStar(require("./swarmSpecCAConfigExternalCAs"), exports);
__exportStar(require("./swarmSpecDispatcher"), exports);
__exportStar(require("./swarmSpecEncryptionConfig"), exports);
__exportStar(require("./swarmSpecOrchestration"), exports);
__exportStar(require("./swarmSpecRaft"), exports);
__exportStar(require("./swarmSpecTaskDefaults"), exports);
__exportStar(require("./swarmSpecTaskDefaultsLogDriver"), exports);
__exportStar(require("./systemAuthResponse"), exports);
__exportStar(require("./systemDataUsageResponse"), exports);
__exportStar(require("./systemEventsResponse"), exports);
__exportStar(require("./systemEventsResponseActor"), exports);
__exportStar(require("./systemInfo"), exports);
__exportStar(require("./systemInfoDefaultAddressPools"), exports);
__exportStar(require("./systemVersion"), exports);
__exportStar(require("./systemVersionComponents"), exports);
__exportStar(require("./systemVersionPlatform"), exports);
__exportStar(require("./tLSInfo"), exports);
__exportStar(require("./task"), exports);
__exportStar(require("./taskSpec"), exports);
__exportStar(require("./taskSpecContainerSpec"), exports);
__exportStar(require("./taskSpecContainerSpecConfigs"), exports);
__exportStar(require("./taskSpecContainerSpecDNSConfig"), exports);
__exportStar(require("./taskSpecContainerSpecFile"), exports);
__exportStar(require("./taskSpecContainerSpecFile1"), exports);
__exportStar(require("./taskSpecContainerSpecPrivileges"), exports);
__exportStar(require("./taskSpecContainerSpecPrivilegesCredentialSpec"), exports);
__exportStar(require("./taskSpecContainerSpecPrivilegesSELinuxContext"), exports);
__exportStar(require("./taskSpecContainerSpecSecrets"), exports);
__exportStar(require("./taskSpecLogDriver"), exports);
__exportStar(require("./taskSpecNetworkAttachmentSpec"), exports);
__exportStar(require("./taskSpecPlacement"), exports);
__exportStar(require("./taskSpecPlacementPreferences"), exports);
__exportStar(require("./taskSpecPlacementSpread"), exports);
__exportStar(require("./taskSpecPluginSpec"), exports);
__exportStar(require("./taskSpecResources"), exports);
__exportStar(require("./taskSpecRestartPolicy"), exports);
__exportStar(require("./taskState"), exports);
__exportStar(require("./taskStatus"), exports);
__exportStar(require("./taskStatusContainerStatus"), exports);
__exportStar(require("./throttleDevice"), exports);
__exportStar(require("./unlockKeyResponse"), exports);
__exportStar(require("./volume"), exports);
__exportStar(require("./volumeConfig"), exports);
__exportStar(require("./volumeListResponse"), exports);
__exportStar(require("./volumePruneResponse"), exports);
__exportStar(require("./volumeUsageData"), exports);
var address_1 = require("./address");
var authConfig_1 = require("./authConfig");
var buildCache_1 = require("./buildCache");
var buildInfo_1 = require("./buildInfo");
var buildPruneResponse_1 = require("./buildPruneResponse");
var clusterInfo_1 = require("./clusterInfo");
var commit_1 = require("./commit");
var config_1 = require("./config");
var configSpec_1 = require("./configSpec");
var containerChangeResponseItem_1 = require("./containerChangeResponseItem");
var containerConfig_1 = require("./containerConfig");
var containerCreateResponse_1 = require("./containerCreateResponse");
var containerInspectResponse_1 = require("./containerInspectResponse");
var containerPruneResponse_1 = require("./containerPruneResponse");
var containerState_1 = require("./containerState");
var containerTopResponse_1 = require("./containerTopResponse");
var containerUpdateResponse_1 = require("./containerUpdateResponse");
var containerWaitResponse_1 = require("./containerWaitResponse");
var containerWaitResponseError_1 = require("./containerWaitResponseError");
var createImageInfo_1 = require("./createImageInfo");
var deviceMapping_1 = require("./deviceMapping");
var deviceRequest_1 = require("./deviceRequest");
var distributionInspectResponse_1 = require("./distributionInspectResponse");
var distributionInspectResponseDescriptor_1 = require("./distributionInspectResponseDescriptor");
var distributionInspectResponsePlatforms_1 = require("./distributionInspectResponsePlatforms");
var driver_1 = require("./driver");
var endpointIPAMConfig_1 = require("./endpointIPAMConfig");
var endpointPortConfig_1 = require("./endpointPortConfig");
var endpointSettings_1 = require("./endpointSettings");
var endpointSpec_1 = require("./endpointSpec");
var engineDescription_1 = require("./engineDescription");
var engineDescriptionPlugins_1 = require("./engineDescriptionPlugins");
var errorDetail_1 = require("./errorDetail");
var errorResponse_1 = require("./errorResponse");
var execInspectResponse_1 = require("./execInspectResponse");
var graphDriverData_1 = require("./graphDriverData");
var health_1 = require("./health");
var healthConfig_1 = require("./healthConfig");
var healthcheckResult_1 = require("./healthcheckResult");
var historyResponseItem_1 = require("./historyResponseItem");
var hostConfig_1 = require("./hostConfig");
var hostConfigAllOf_1 = require("./hostConfigAllOf");
var hostConfigAllOfLogConfig_1 = require("./hostConfigAllOfLogConfig");
var iPAM_1 = require("./iPAM");
var idResponse_1 = require("./idResponse");
var image_1 = require("./image");
var imageDeleteResponseItem_1 = require("./imageDeleteResponseItem");
var imageID_1 = require("./imageID");
var imageMetadata_1 = require("./imageMetadata");
var imagePruneResponse_1 = require("./imagePruneResponse");
var imageRootFS_1 = require("./imageRootFS");
var imageSearchResponseItem_1 = require("./imageSearchResponseItem");
var imageSummary_1 = require("./imageSummary");
var indexInfo_1 = require("./indexInfo");
var inlineObject_1 = require("./inlineObject");
var inlineObject1_1 = require("./inlineObject1");
var inlineObject2_1 = require("./inlineObject2");
var inlineObject3_1 = require("./inlineObject3");
var inlineObject4_1 = require("./inlineObject4");
var inlineObject5_1 = require("./inlineObject5");
var inlineObject6_1 = require("./inlineObject6");
var inlineObject7_1 = require("./inlineObject7");
var inlineResponse400_1 = require("./inlineResponse400");
var joinTokens_1 = require("./joinTokens");
var limit_1 = require("./limit");
var localNodeState_1 = require("./localNodeState");
var managerStatus_1 = require("./managerStatus");
var mount_1 = require("./mount");
var mountBindOptions_1 = require("./mountBindOptions");
var mountPoint_1 = require("./mountPoint");
var mountTmpfsOptions_1 = require("./mountTmpfsOptions");
var mountVolumeOptions_1 = require("./mountVolumeOptions");
var mountVolumeOptionsDriverConfig_1 = require("./mountVolumeOptionsDriverConfig");
var network_1 = require("./network");
var networkAttachmentConfig_1 = require("./networkAttachmentConfig");
var networkContainer_1 = require("./networkContainer");
var networkCreateResponse_1 = require("./networkCreateResponse");
var networkPruneResponse_1 = require("./networkPruneResponse");
var networkSettings_1 = require("./networkSettings");
var networkingConfig_1 = require("./networkingConfig");
var node_1 = require("./node");
var nodeDescription_1 = require("./nodeDescription");
var nodeSpec_1 = require("./nodeSpec");
var nodeState_1 = require("./nodeState");
var nodeStatus_1 = require("./nodeStatus");
var objectVersion_1 = require("./objectVersion");
var peerNode_1 = require("./peerNode");
var platform_1 = require("./platform");
var plugin_1 = require("./plugin");
var pluginConfig_1 = require("./pluginConfig");
var pluginConfigArgs_1 = require("./pluginConfigArgs");
var pluginConfigInterface_1 = require("./pluginConfigInterface");
var pluginConfigLinux_1 = require("./pluginConfigLinux");
var pluginConfigNetwork_1 = require("./pluginConfigNetwork");
var pluginConfigRootfs_1 = require("./pluginConfigRootfs");
var pluginConfigUser_1 = require("./pluginConfigUser");
var pluginDevice_1 = require("./pluginDevice");
var pluginEnv_1 = require("./pluginEnv");
var pluginInterfaceType_1 = require("./pluginInterfaceType");
var pluginMount_1 = require("./pluginMount");
var pluginPrivilegeItem_1 = require("./pluginPrivilegeItem");
var pluginSettings_1 = require("./pluginSettings");
var pluginsInfo_1 = require("./pluginsInfo");
var port_1 = require("./port");
var portBinding_1 = require("./portBinding");
var processConfig_1 = require("./processConfig");
var progressDetail_1 = require("./progressDetail");
var pushImageInfo_1 = require("./pushImageInfo");
var reachability_1 = require("./reachability");
var registryServiceConfig_1 = require("./registryServiceConfig");
var resourceObject_1 = require("./resourceObject");
var resources_1 = require("./resources");
var resourcesBlkioWeightDevice_1 = require("./resourcesBlkioWeightDevice");
var resourcesUlimits_1 = require("./resourcesUlimits");
var restartPolicy_1 = require("./restartPolicy");
var runtime_1 = require("./runtime");
var secret_1 = require("./secret");
var secretSpec_1 = require("./secretSpec");
var service_1 = require("./service");
var serviceCreateResponse_1 = require("./serviceCreateResponse");
var serviceEndpoint_1 = require("./serviceEndpoint");
var serviceEndpointVirtualIPs_1 = require("./serviceEndpointVirtualIPs");
var serviceJobStatus_1 = require("./serviceJobStatus");
var serviceServiceStatus_1 = require("./serviceServiceStatus");
var serviceSpec_1 = require("./serviceSpec");
var serviceSpecMode_1 = require("./serviceSpecMode");
var serviceSpecModeReplicated_1 = require("./serviceSpecModeReplicated");
var serviceSpecModeReplicatedJob_1 = require("./serviceSpecModeReplicatedJob");
var serviceSpecRollbackConfig_1 = require("./serviceSpecRollbackConfig");
var serviceSpecUpdateConfig_1 = require("./serviceSpecUpdateConfig");
var serviceUpdateResponse_1 = require("./serviceUpdateResponse");
var serviceUpdateStatus_1 = require("./serviceUpdateStatus");
var swarm_1 = require("./swarm");
var swarmAllOf_1 = require("./swarmAllOf");
var swarmInfo_1 = require("./swarmInfo");
var swarmSpec_1 = require("./swarmSpec");
var swarmSpecCAConfig_1 = require("./swarmSpecCAConfig");
var swarmSpecCAConfigExternalCAs_1 = require("./swarmSpecCAConfigExternalCAs");
var swarmSpecDispatcher_1 = require("./swarmSpecDispatcher");
var swarmSpecEncryptionConfig_1 = require("./swarmSpecEncryptionConfig");
var swarmSpecOrchestration_1 = require("./swarmSpecOrchestration");
var swarmSpecRaft_1 = require("./swarmSpecRaft");
var swarmSpecTaskDefaults_1 = require("./swarmSpecTaskDefaults");
var swarmSpecTaskDefaultsLogDriver_1 = require("./swarmSpecTaskDefaultsLogDriver");
var systemAuthResponse_1 = require("./systemAuthResponse");
var systemDataUsageResponse_1 = require("./systemDataUsageResponse");
var systemEventsResponse_1 = require("./systemEventsResponse");
var systemEventsResponseActor_1 = require("./systemEventsResponseActor");
var systemInfo_1 = require("./systemInfo");
var systemInfoDefaultAddressPools_1 = require("./systemInfoDefaultAddressPools");
var systemVersion_1 = require("./systemVersion");
var systemVersionComponents_1 = require("./systemVersionComponents");
var systemVersionPlatform_1 = require("./systemVersionPlatform");
var tLSInfo_1 = require("./tLSInfo");
var task_1 = require("./task");
var taskSpec_1 = require("./taskSpec");
var taskSpecContainerSpec_1 = require("./taskSpecContainerSpec");
var taskSpecContainerSpecConfigs_1 = require("./taskSpecContainerSpecConfigs");
var taskSpecContainerSpecDNSConfig_1 = require("./taskSpecContainerSpecDNSConfig");
var taskSpecContainerSpecFile_1 = require("./taskSpecContainerSpecFile");
var taskSpecContainerSpecFile1_1 = require("./taskSpecContainerSpecFile1");
var taskSpecContainerSpecPrivileges_1 = require("./taskSpecContainerSpecPrivileges");
var taskSpecContainerSpecPrivilegesCredentialSpec_1 = require("./taskSpecContainerSpecPrivilegesCredentialSpec");
var taskSpecContainerSpecPrivilegesSELinuxContext_1 = require("./taskSpecContainerSpecPrivilegesSELinuxContext");
var taskSpecContainerSpecSecrets_1 = require("./taskSpecContainerSpecSecrets");
var taskSpecLogDriver_1 = require("./taskSpecLogDriver");
var taskSpecNetworkAttachmentSpec_1 = require("./taskSpecNetworkAttachmentSpec");
var taskSpecPlacement_1 = require("./taskSpecPlacement");
var taskSpecPlacementPreferences_1 = require("./taskSpecPlacementPreferences");
var taskSpecPlacementSpread_1 = require("./taskSpecPlacementSpread");
var taskSpecPluginSpec_1 = require("./taskSpecPluginSpec");
var taskSpecResources_1 = require("./taskSpecResources");
var taskSpecRestartPolicy_1 = require("./taskSpecRestartPolicy");
var taskState_1 = require("./taskState");
var taskStatus_1 = require("./taskStatus");
var taskStatusContainerStatus_1 = require("./taskStatusContainerStatus");
var throttleDevice_1 = require("./throttleDevice");
var unlockKeyResponse_1 = require("./unlockKeyResponse");
var volume_1 = require("./volume");
var volumeConfig_1 = require("./volumeConfig");
var volumeListResponse_1 = require("./volumeListResponse");
var volumePruneResponse_1 = require("./volumePruneResponse");
var volumeUsageData_1 = require("./volumeUsageData");
var primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
var enumsMap = {
    "ContainerState.StatusEnum": containerState_1.ContainerState.StatusEnum,
    "EndpointPortConfig.ProtocolEnum": endpointPortConfig_1.EndpointPortConfig.ProtocolEnum,
    "EndpointPortConfig.PublishModeEnum": endpointPortConfig_1.EndpointPortConfig.PublishModeEnum,
    "EndpointSpec.ModeEnum": endpointSpec_1.EndpointSpec.ModeEnum,
    "Health.StatusEnum": health_1.Health.StatusEnum,
    "HostConfig.CgroupnsModeEnum": hostConfig_1.HostConfig.CgroupnsModeEnum,
    "HostConfig.IsolationEnum": hostConfig_1.HostConfig.IsolationEnum,
    "HostConfigAllOf.CgroupnsModeEnum": hostConfigAllOf_1.HostConfigAllOf.CgroupnsModeEnum,
    "HostConfigAllOf.IsolationEnum": hostConfigAllOf_1.HostConfigAllOf.IsolationEnum,
    "HostConfigAllOfLogConfig.TypeEnum": hostConfigAllOfLogConfig_1.HostConfigAllOfLogConfig.TypeEnum,
    "LocalNodeState": localNodeState_1.LocalNodeState,
    "Mount.TypeEnum": mount_1.Mount.TypeEnum,
    "MountBindOptions.PropagationEnum": mountBindOptions_1.MountBindOptions.PropagationEnum,
    "NodeSpec.RoleEnum": nodeSpec_1.NodeSpec.RoleEnum,
    "NodeSpec.AvailabilityEnum": nodeSpec_1.NodeSpec.AvailabilityEnum,
    "NodeState": nodeState_1.NodeState,
    "PluginConfigInterface.ProtocolSchemeEnum": pluginConfigInterface_1.PluginConfigInterface.ProtocolSchemeEnum,
    "Port.TypeEnum": port_1.Port.TypeEnum,
    "Reachability": reachability_1.Reachability,
    "RestartPolicy.NameEnum": restartPolicy_1.RestartPolicy.NameEnum,
    "ServiceSpecRollbackConfig.FailureActionEnum": serviceSpecRollbackConfig_1.ServiceSpecRollbackConfig.FailureActionEnum,
    "ServiceSpecRollbackConfig.OrderEnum": serviceSpecRollbackConfig_1.ServiceSpecRollbackConfig.OrderEnum,
    "ServiceSpecUpdateConfig.FailureActionEnum": serviceSpecUpdateConfig_1.ServiceSpecUpdateConfig.FailureActionEnum,
    "ServiceSpecUpdateConfig.OrderEnum": serviceSpecUpdateConfig_1.ServiceSpecUpdateConfig.OrderEnum,
    "ServiceUpdateStatus.StateEnum": serviceUpdateStatus_1.ServiceUpdateStatus.StateEnum,
    "SwarmSpecCAConfigExternalCAs.ProtocolEnum": swarmSpecCAConfigExternalCAs_1.SwarmSpecCAConfigExternalCAs.ProtocolEnum,
    "SystemInfo.CgroupDriverEnum": systemInfo_1.SystemInfo.CgroupDriverEnum,
    "SystemInfo.CgroupVersionEnum": systemInfo_1.SystemInfo.CgroupVersionEnum,
    "SystemInfo.IsolationEnum": systemInfo_1.SystemInfo.IsolationEnum,
    "TaskSpecContainerSpec.IsolationEnum": taskSpecContainerSpec_1.TaskSpecContainerSpec.IsolationEnum,
    "TaskSpecRestartPolicy.ConditionEnum": taskSpecRestartPolicy_1.TaskSpecRestartPolicy.ConditionEnum,
    "TaskState": taskState_1.TaskState,
    "Volume.ScopeEnum": volume_1.Volume.ScopeEnum,
};
var typeMap = {
    "Address": address_1.Address,
    "AuthConfig": authConfig_1.AuthConfig,
    "BuildCache": buildCache_1.BuildCache,
    "BuildInfo": buildInfo_1.BuildInfo,
    "BuildPruneResponse": buildPruneResponse_1.BuildPruneResponse,
    "ClusterInfo": clusterInfo_1.ClusterInfo,
    "Commit": commit_1.Commit,
    "Config": config_1.Config,
    "ConfigSpec": configSpec_1.ConfigSpec,
    "ContainerChangeResponseItem": containerChangeResponseItem_1.ContainerChangeResponseItem,
    "ContainerConfig": containerConfig_1.ContainerConfig,
    "ContainerCreateResponse": containerCreateResponse_1.ContainerCreateResponse,
    "ContainerInspectResponse": containerInspectResponse_1.ContainerInspectResponse,
    "ContainerPruneResponse": containerPruneResponse_1.ContainerPruneResponse,
    "ContainerState": containerState_1.ContainerState,
    "ContainerTopResponse": containerTopResponse_1.ContainerTopResponse,
    "ContainerUpdateResponse": containerUpdateResponse_1.ContainerUpdateResponse,
    "ContainerWaitResponse": containerWaitResponse_1.ContainerWaitResponse,
    "ContainerWaitResponseError": containerWaitResponseError_1.ContainerWaitResponseError,
    "CreateImageInfo": createImageInfo_1.CreateImageInfo,
    "DeviceMapping": deviceMapping_1.DeviceMapping,
    "DeviceRequest": deviceRequest_1.DeviceRequest,
    "DistributionInspectResponse": distributionInspectResponse_1.DistributionInspectResponse,
    "DistributionInspectResponseDescriptor": distributionInspectResponseDescriptor_1.DistributionInspectResponseDescriptor,
    "DistributionInspectResponsePlatforms": distributionInspectResponsePlatforms_1.DistributionInspectResponsePlatforms,
    "Driver": driver_1.Driver,
    "EndpointIPAMConfig": endpointIPAMConfig_1.EndpointIPAMConfig,
    "EndpointPortConfig": endpointPortConfig_1.EndpointPortConfig,
    "EndpointSettings": endpointSettings_1.EndpointSettings,
    "EndpointSpec": endpointSpec_1.EndpointSpec,
    "EngineDescription": engineDescription_1.EngineDescription,
    "EngineDescriptionPlugins": engineDescriptionPlugins_1.EngineDescriptionPlugins,
    "ErrorDetail": errorDetail_1.ErrorDetail,
    "ErrorResponse": errorResponse_1.ErrorResponse,
    "ExecInspectResponse": execInspectResponse_1.ExecInspectResponse,
    "GraphDriverData": graphDriverData_1.GraphDriverData,
    "Health": health_1.Health,
    "HealthConfig": healthConfig_1.HealthConfig,
    "HealthcheckResult": healthcheckResult_1.HealthcheckResult,
    "HistoryResponseItem": historyResponseItem_1.HistoryResponseItem,
    "HostConfig": hostConfig_1.HostConfig,
    "HostConfigAllOf": hostConfigAllOf_1.HostConfigAllOf,
    "HostConfigAllOfLogConfig": hostConfigAllOfLogConfig_1.HostConfigAllOfLogConfig,
    "IPAM": iPAM_1.IPAM,
    "IdResponse": idResponse_1.IdResponse,
    "Image": image_1.Image,
    "ImageDeleteResponseItem": imageDeleteResponseItem_1.ImageDeleteResponseItem,
    "ImageID": imageID_1.ImageID,
    "ImageMetadata": imageMetadata_1.ImageMetadata,
    "ImagePruneResponse": imagePruneResponse_1.ImagePruneResponse,
    "ImageRootFS": imageRootFS_1.ImageRootFS,
    "ImageSearchResponseItem": imageSearchResponseItem_1.ImageSearchResponseItem,
    "ImageSummary": imageSummary_1.ImageSummary,
    "IndexInfo": indexInfo_1.IndexInfo,
    "InlineObject": inlineObject_1.InlineObject,
    "InlineObject1": inlineObject1_1.InlineObject1,
    "InlineObject2": inlineObject2_1.InlineObject2,
    "InlineObject3": inlineObject3_1.InlineObject3,
    "InlineObject4": inlineObject4_1.InlineObject4,
    "InlineObject5": inlineObject5_1.InlineObject5,
    "InlineObject6": inlineObject6_1.InlineObject6,
    "InlineObject7": inlineObject7_1.InlineObject7,
    "InlineResponse400": inlineResponse400_1.InlineResponse400,
    "JoinTokens": joinTokens_1.JoinTokens,
    "Limit": limit_1.Limit,
    "ManagerStatus": managerStatus_1.ManagerStatus,
    "Mount": mount_1.Mount,
    "MountBindOptions": mountBindOptions_1.MountBindOptions,
    "MountPoint": mountPoint_1.MountPoint,
    "MountTmpfsOptions": mountTmpfsOptions_1.MountTmpfsOptions,
    "MountVolumeOptions": mountVolumeOptions_1.MountVolumeOptions,
    "MountVolumeOptionsDriverConfig": mountVolumeOptionsDriverConfig_1.MountVolumeOptionsDriverConfig,
    "Network": network_1.Network,
    "NetworkAttachmentConfig": networkAttachmentConfig_1.NetworkAttachmentConfig,
    "NetworkContainer": networkContainer_1.NetworkContainer,
    "NetworkCreateResponse": networkCreateResponse_1.NetworkCreateResponse,
    "NetworkPruneResponse": networkPruneResponse_1.NetworkPruneResponse,
    "NetworkSettings": networkSettings_1.NetworkSettings,
    "NetworkingConfig": networkingConfig_1.NetworkingConfig,
    "Node": node_1.Node,
    "NodeDescription": nodeDescription_1.NodeDescription,
    "NodeSpec": nodeSpec_1.NodeSpec,
    "NodeStatus": nodeStatus_1.NodeStatus,
    "ObjectVersion": objectVersion_1.ObjectVersion,
    "PeerNode": peerNode_1.PeerNode,
    "Platform": platform_1.Platform,
    "Plugin": plugin_1.Plugin,
    "PluginConfig": pluginConfig_1.PluginConfig,
    "PluginConfigArgs": pluginConfigArgs_1.PluginConfigArgs,
    "PluginConfigInterface": pluginConfigInterface_1.PluginConfigInterface,
    "PluginConfigLinux": pluginConfigLinux_1.PluginConfigLinux,
    "PluginConfigNetwork": pluginConfigNetwork_1.PluginConfigNetwork,
    "PluginConfigRootfs": pluginConfigRootfs_1.PluginConfigRootfs,
    "PluginConfigUser": pluginConfigUser_1.PluginConfigUser,
    "PluginDevice": pluginDevice_1.PluginDevice,
    "PluginEnv": pluginEnv_1.PluginEnv,
    "PluginInterfaceType": pluginInterfaceType_1.PluginInterfaceType,
    "PluginMount": pluginMount_1.PluginMount,
    "PluginPrivilegeItem": pluginPrivilegeItem_1.PluginPrivilegeItem,
    "PluginSettings": pluginSettings_1.PluginSettings,
    "PluginsInfo": pluginsInfo_1.PluginsInfo,
    "Port": port_1.Port,
    "PortBinding": portBinding_1.PortBinding,
    "ProcessConfig": processConfig_1.ProcessConfig,
    "ProgressDetail": progressDetail_1.ProgressDetail,
    "PushImageInfo": pushImageInfo_1.PushImageInfo,
    "RegistryServiceConfig": registryServiceConfig_1.RegistryServiceConfig,
    "ResourceObject": resourceObject_1.ResourceObject,
    "Resources": resources_1.Resources,
    "ResourcesBlkioWeightDevice": resourcesBlkioWeightDevice_1.ResourcesBlkioWeightDevice,
    "ResourcesUlimits": resourcesUlimits_1.ResourcesUlimits,
    "RestartPolicy": restartPolicy_1.RestartPolicy,
    "Runtime": runtime_1.Runtime,
    "Secret": secret_1.Secret,
    "SecretSpec": secretSpec_1.SecretSpec,
    "Service": service_1.Service,
    "ServiceCreateResponse": serviceCreateResponse_1.ServiceCreateResponse,
    "ServiceEndpoint": serviceEndpoint_1.ServiceEndpoint,
    "ServiceEndpointVirtualIPs": serviceEndpointVirtualIPs_1.ServiceEndpointVirtualIPs,
    "ServiceJobStatus": serviceJobStatus_1.ServiceJobStatus,
    "ServiceServiceStatus": serviceServiceStatus_1.ServiceServiceStatus,
    "ServiceSpec": serviceSpec_1.ServiceSpec,
    "ServiceSpecMode": serviceSpecMode_1.ServiceSpecMode,
    "ServiceSpecModeReplicated": serviceSpecModeReplicated_1.ServiceSpecModeReplicated,
    "ServiceSpecModeReplicatedJob": serviceSpecModeReplicatedJob_1.ServiceSpecModeReplicatedJob,
    "ServiceSpecRollbackConfig": serviceSpecRollbackConfig_1.ServiceSpecRollbackConfig,
    "ServiceSpecUpdateConfig": serviceSpecUpdateConfig_1.ServiceSpecUpdateConfig,
    "ServiceUpdateResponse": serviceUpdateResponse_1.ServiceUpdateResponse,
    "ServiceUpdateStatus": serviceUpdateStatus_1.ServiceUpdateStatus,
    "Swarm": swarm_1.Swarm,
    "SwarmAllOf": swarmAllOf_1.SwarmAllOf,
    "SwarmInfo": swarmInfo_1.SwarmInfo,
    "SwarmSpec": swarmSpec_1.SwarmSpec,
    "SwarmSpecCAConfig": swarmSpecCAConfig_1.SwarmSpecCAConfig,
    "SwarmSpecCAConfigExternalCAs": swarmSpecCAConfigExternalCAs_1.SwarmSpecCAConfigExternalCAs,
    "SwarmSpecDispatcher": swarmSpecDispatcher_1.SwarmSpecDispatcher,
    "SwarmSpecEncryptionConfig": swarmSpecEncryptionConfig_1.SwarmSpecEncryptionConfig,
    "SwarmSpecOrchestration": swarmSpecOrchestration_1.SwarmSpecOrchestration,
    "SwarmSpecRaft": swarmSpecRaft_1.SwarmSpecRaft,
    "SwarmSpecTaskDefaults": swarmSpecTaskDefaults_1.SwarmSpecTaskDefaults,
    "SwarmSpecTaskDefaultsLogDriver": swarmSpecTaskDefaultsLogDriver_1.SwarmSpecTaskDefaultsLogDriver,
    "SystemAuthResponse": systemAuthResponse_1.SystemAuthResponse,
    "SystemDataUsageResponse": systemDataUsageResponse_1.SystemDataUsageResponse,
    "SystemEventsResponse": systemEventsResponse_1.SystemEventsResponse,
    "SystemEventsResponseActor": systemEventsResponseActor_1.SystemEventsResponseActor,
    "SystemInfo": systemInfo_1.SystemInfo,
    "SystemInfoDefaultAddressPools": systemInfoDefaultAddressPools_1.SystemInfoDefaultAddressPools,
    "SystemVersion": systemVersion_1.SystemVersion,
    "SystemVersionComponents": systemVersionComponents_1.SystemVersionComponents,
    "SystemVersionPlatform": systemVersionPlatform_1.SystemVersionPlatform,
    "TLSInfo": tLSInfo_1.TLSInfo,
    "Task": task_1.Task,
    "TaskSpec": taskSpec_1.TaskSpec,
    "TaskSpecContainerSpec": taskSpecContainerSpec_1.TaskSpecContainerSpec,
    "TaskSpecContainerSpecConfigs": taskSpecContainerSpecConfigs_1.TaskSpecContainerSpecConfigs,
    "TaskSpecContainerSpecDNSConfig": taskSpecContainerSpecDNSConfig_1.TaskSpecContainerSpecDNSConfig,
    "TaskSpecContainerSpecFile": taskSpecContainerSpecFile_1.TaskSpecContainerSpecFile,
    "TaskSpecContainerSpecFile1": taskSpecContainerSpecFile1_1.TaskSpecContainerSpecFile1,
    "TaskSpecContainerSpecPrivileges": taskSpecContainerSpecPrivileges_1.TaskSpecContainerSpecPrivileges,
    "TaskSpecContainerSpecPrivilegesCredentialSpec": taskSpecContainerSpecPrivilegesCredentialSpec_1.TaskSpecContainerSpecPrivilegesCredentialSpec,
    "TaskSpecContainerSpecPrivilegesSELinuxContext": taskSpecContainerSpecPrivilegesSELinuxContext_1.TaskSpecContainerSpecPrivilegesSELinuxContext,
    "TaskSpecContainerSpecSecrets": taskSpecContainerSpecSecrets_1.TaskSpecContainerSpecSecrets,
    "TaskSpecLogDriver": taskSpecLogDriver_1.TaskSpecLogDriver,
    "TaskSpecNetworkAttachmentSpec": taskSpecNetworkAttachmentSpec_1.TaskSpecNetworkAttachmentSpec,
    "TaskSpecPlacement": taskSpecPlacement_1.TaskSpecPlacement,
    "TaskSpecPlacementPreferences": taskSpecPlacementPreferences_1.TaskSpecPlacementPreferences,
    "TaskSpecPlacementSpread": taskSpecPlacementSpread_1.TaskSpecPlacementSpread,
    "TaskSpecPluginSpec": taskSpecPluginSpec_1.TaskSpecPluginSpec,
    "TaskSpecResources": taskSpecResources_1.TaskSpecResources,
    "TaskSpecRestartPolicy": taskSpecRestartPolicy_1.TaskSpecRestartPolicy,
    "TaskStatus": taskStatus_1.TaskStatus,
    "TaskStatusContainerStatus": taskStatusContainerStatus_1.TaskStatusContainerStatus,
    "ThrottleDevice": throttleDevice_1.ThrottleDevice,
    "UnlockKeyResponse": unlockKeyResponse_1.UnlockKeyResponse,
    "Volume": volume_1.Volume,
    "VolumeConfig": volumeConfig_1.VolumeConfig,
    "VolumeListResponse": volumeListResponse_1.VolumeListResponse,
    "VolumePruneResponse": volumePruneResponse_1.VolumePruneResponse,
    "VolumeUsageData": volumeUsageData_1.VolumeUsageData,
};
var ObjectSerializer = (function () {
    function ObjectSerializer() {
    }
    ObjectSerializer.findCorrectType = function (data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            var discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    };
    ObjectSerializer.serialize = function (data, type) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toISOString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    };
    ObjectSerializer.deserialize = function (data, type) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            var subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            var transformedData = [];
            for (var index = 0; index < data.length; index++) {
                var datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var instance = new typeMap[type]();
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            for (var index = 0; index < attributeTypes.length; index++) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
exports.ObjectSerializer = ObjectSerializer;
var HttpBasicAuth = (function () {
    function HttpBasicAuth() {
        this.username = '';
        this.password = '';
    }
    HttpBasicAuth.prototype.applyToRequest = function (requestOptions) {
        requestOptions.auth = {
            username: this.username, password: this.password
        };
    };
    return HttpBasicAuth;
}());
exports.HttpBasicAuth = HttpBasicAuth;
var HttpBearerAuth = (function () {
    function HttpBearerAuth() {
        this.accessToken = '';
    }
    HttpBearerAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            var accessToken = typeof this.accessToken === 'function'
                ? this.accessToken()
                : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    };
    return HttpBearerAuth;
}());
exports.HttpBearerAuth = HttpBearerAuth;
var ApiKeyAuth = (function () {
    function ApiKeyAuth(location, paramName) {
        this.location = location;
        this.paramName = paramName;
        this.apiKey = '';
    }
    ApiKeyAuth.prototype.applyToRequest = function (requestOptions) {
        if (this.location == "query") {
            requestOptions.qs[this.paramName] = this.apiKey;
        }
        else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        }
        else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    };
    return ApiKeyAuth;
}());
exports.ApiKeyAuth = ApiKeyAuth;
var OAuth = (function () {
    function OAuth() {
        this.accessToken = '';
    }
    OAuth.prototype.applyToRequest = function (requestOptions) {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    };
    return OAuth;
}());
exports.OAuth = OAuth;
var VoidAuth = (function () {
    function VoidAuth() {
        this.username = '';
        this.password = '';
    }
    VoidAuth.prototype.applyToRequest = function (_) {
    };
    return VoidAuth;
}());
exports.VoidAuth = VoidAuth;
//# sourceMappingURL=models.js.map