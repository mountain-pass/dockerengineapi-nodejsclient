"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.GenericResourcesInnerDiscreteResourceSpec = exports.GenericResourcesInner = exports.GenericResources = exports.ExecStartConfig = exports.ExecInspectResponse = exports.ExecConfig = exports.ErrorResponse = exports.ErrorDetail = exports.EngineDescriptionPlugins = exports.EngineDescription = exports.EndpointSpec = exports.EndpointSettings = exports.EndpointPortConfig = exports.EndpointIPAMConfig = exports.Driver = exports.DistributionInspectResponsePlatforms = exports.DistributionInspectResponseDescriptor = exports.DistributionInspectResponse = exports.DeviceRequest = exports.DeviceMapping = exports.CreateImageInfo = exports.ContainerWaitResponseError = exports.ContainerWaitResponse = exports.ContainerUpdateResponse = exports.ContainerTopResponse = exports.ContainerSummaryInnerNetworkSettings = exports.ContainerSummaryInnerHostConfig = exports.ContainerSummaryInner = exports.ContainerSummary = exports.ContainerState = exports.ContainerPruneResponse = exports.ContainerInspectResponse = exports.ContainerCreateResponse = exports.ContainerConfig = exports.ContainerChangeResponseItem = exports.Container1 = exports.Container = exports.ConfigSpec = exports.Config = exports.Commit = exports.ClusterInfo = exports.BuildPruneResponse = exports.BuildInfo = exports.BuildCache = exports.Body3 = exports.Body2 = exports.Body1 = exports.Body = exports.AuthConfig = exports.Address = void 0;
exports.PluginConfigInterface = exports.PluginConfigArgs = exports.PluginConfig = exports.Plugin = exports.Platform = exports.PeerNode = exports.ObjectVersion = exports.NodeStatus = exports.NodeState = exports.NodeSpec = exports.NodeDescription = exports.Node = exports.NetworkingConfig = exports.NetworkSettings = exports.NetworkPruneResponse = exports.NetworkCreateResponse = exports.NetworkContainer = exports.NetworkConfig = exports.NetworkAttachmentConfig = exports.Network = exports.MountVolumeOptionsDriverConfig = exports.MountVolumeOptions = exports.MountTmpfsOptions = exports.MountPoint = exports.MountBindOptions = exports.Mount = exports.ManagerStatus = exports.LocalNodeState = exports.Limit = exports.JoinTokens = exports.InlineResponse400 = exports.IndexInfo = exports.ImageSummary = exports.ImageSearchResponseItem = exports.ImageRootFS = exports.ImagePruneResponse = exports.ImageMetadata = exports.ImageID = exports.ImageDeleteResponseItem = exports.Image = exports.IdResponse = exports.IPAM = exports.HostConfigLogConfig = exports.HostConfig = exports.HistoryResponseItem = exports.HealthcheckResult = exports.HealthConfig = exports.Health = exports.GraphDriverData = exports.GenericResourcesInnerNamedResourceSpec = void 0;
exports.SwarmSpecRaft = exports.SwarmSpecOrchestration = exports.SwarmSpecEncryptionConfig = exports.SwarmSpecDispatcher = exports.SwarmSpecCAConfigExternalCAs = exports.SwarmSpecCAConfig = exports.SwarmSpec = exports.SwarmInfo = exports.Swarm = exports.ServiceUpdateStatus = exports.ServiceUpdateResponse = exports.ServiceSpecUpdateConfig = exports.ServiceSpecRollbackConfig = exports.ServiceSpecModeReplicatedJob = exports.ServiceSpecModeReplicated = exports.ServiceSpecMode = exports.ServiceSpec = exports.ServiceServiceStatus = exports.ServiceJobStatus = exports.ServiceEndpointVirtualIPs = exports.ServiceEndpoint = exports.ServiceCreateResponse = exports.Service = exports.SecretSpec = exports.Secret = exports.Runtime = exports.RestartPolicy = exports.ResourcesUlimits = exports.ResourcesBlkioWeightDevice = exports.Resources = exports.ResourceObject = exports.RegistryServiceConfig = exports.Reachability = exports.PushImageInfo = exports.ProgressDetail = exports.ProcessConfig = exports.PortMap = exports.PortBinding = exports.Port = exports.PluginsInfo = exports.PluginSettings = exports.PluginPrivilegeItem = exports.PluginMount = exports.PluginInterfaceType = exports.PluginEnv = exports.PluginDevice = exports.PluginConfigUser = exports.PluginConfigRootfs = exports.PluginConfigNetwork = exports.PluginConfigLinux = void 0;
exports.DistributionApiApiKeys = exports.ContainerApi = exports.ContainerApiApiKeys = exports.ConfigApi = exports.ConfigApiApiKeys = exports.VoidAuth = exports.OAuth = exports.ApiKeyAuth = exports.HttpBasicAuth = exports.VolumeUsageData = exports.VolumePruneResponse = exports.VolumeListResponse = exports.VolumeConfig = exports.Volume = exports.UnlockKeyResponse = exports.ThrottleDevice = exports.TaskStatusContainerStatus = exports.TaskStatus = exports.TaskState = exports.TaskSpecRestartPolicy = exports.TaskSpecResources = exports.TaskSpecPluginSpec = exports.TaskSpecPlacementSpread = exports.TaskSpecPlacementPreferences = exports.TaskSpecPlacement = exports.TaskSpecNetworkAttachmentSpec = exports.TaskSpecLogDriver = exports.TaskSpecContainerSpecSecrets = exports.TaskSpecContainerSpecPrivilegesSELinuxContext = exports.TaskSpecContainerSpecPrivilegesCredentialSpec = exports.TaskSpecContainerSpecPrivileges = exports.TaskSpecContainerSpecFile1 = exports.TaskSpecContainerSpecFile = exports.TaskSpecContainerSpecDNSConfig = exports.TaskSpecContainerSpecConfigs = exports.TaskSpecContainerSpec = exports.TaskSpec = exports.Task = exports.TLSInfo = exports.SystemVersionPlatform = exports.SystemVersionComponents = exports.SystemVersion = exports.SystemInfoDefaultAddressPools = exports.SystemInfo = exports.SystemEventsResponseActor = exports.SystemEventsResponse = exports.SystemDataUsageResponse = exports.SystemAuthResponse = exports.SwarmSpecTaskDefaultsLogDriver = exports.SwarmSpecTaskDefaults = void 0;
exports.VolumeApi = exports.VolumeApiApiKeys = exports.TaskApi = exports.TaskApiApiKeys = exports.SystemApi = exports.SystemApiApiKeys = exports.SwarmApi = exports.SwarmApiApiKeys = exports.SessionApi = exports.SessionApiApiKeys = exports.ServiceApi = exports.ServiceApiApiKeys = exports.SecretApi = exports.SecretApiApiKeys = exports.PluginApi = exports.PluginApiApiKeys = exports.NodeApi = exports.NodeApiApiKeys = exports.NetworkApi = exports.NetworkApiApiKeys = exports.ImageApi = exports.ImageApiApiKeys = exports.ExecApi = exports.ExecApiApiKeys = exports.DistributionApi = void 0;
var localVarRequest = require("request");
var Promise = require("bluebird");
var defaultBasePath = 'http://localhost/v1.41';
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
                    return data[discriminatorProperty];
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
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return data.toString();
        }
        else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            var attributeTypes = typeMap[type].getAttributeTypeMap();
            var instance = {};
            for (var index in attributeTypes) {
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
            for (var index in data) {
                var date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType));
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
            for (var index in attributeTypes) {
                var attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    };
    return ObjectSerializer;
}());
var Address = (function () {
    function Address() {
    }
    Address.getAttributeTypeMap = function () {
        return Address.attributeTypeMap;
    };
    Address.discriminator = undefined;
    Address.attributeTypeMap = [
        {
            "name": "addr",
            "baseName": "Addr",
            "type": "string"
        },
        {
            "name": "prefixLen",
            "baseName": "PrefixLen",
            "type": "number"
        }
    ];
    return Address;
}());
exports.Address = Address;
var AuthConfig = (function () {
    function AuthConfig() {
    }
    AuthConfig.getAttributeTypeMap = function () {
        return AuthConfig.attributeTypeMap;
    };
    AuthConfig.discriminator = undefined;
    AuthConfig.attributeTypeMap = [
        {
            "name": "username",
            "baseName": "username",
            "type": "string"
        },
        {
            "name": "password",
            "baseName": "password",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "serveraddress",
            "baseName": "serveraddress",
            "type": "string"
        }
    ];
    return AuthConfig;
}());
exports.AuthConfig = AuthConfig;
var Body = (function () {
    function Body() {
    }
    Body.getAttributeTypeMap = function () {
        return Body.attributeTypeMap;
    };
    Body.discriminator = undefined;
    Body.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "Array<string>"
        }
    ];
    return Body;
}());
exports.Body = Body;
var Body1 = (function () {
    function Body1() {
    }
    Body1.getAttributeTypeMap = function () {
        return Body1.attributeTypeMap;
    };
    Body1.discriminator = undefined;
    Body1.attributeTypeMap = [
        {
            "name": "listenAddr",
            "baseName": "ListenAddr",
            "type": "string"
        },
        {
            "name": "advertiseAddr",
            "baseName": "AdvertiseAddr",
            "type": "string"
        },
        {
            "name": "dataPathAddr",
            "baseName": "DataPathAddr",
            "type": "string"
        },
        {
            "name": "dataPathPort",
            "baseName": "DataPathPort",
            "type": "number"
        },
        {
            "name": "defaultAddrPool",
            "baseName": "DefaultAddrPool",
            "type": "Array<string>"
        },
        {
            "name": "forceNewCluster",
            "baseName": "ForceNewCluster",
            "type": "boolean"
        },
        {
            "name": "subnetSize",
            "baseName": "SubnetSize",
            "type": "number"
        },
        {
            "name": "spec",
            "baseName": "Spec",
            "type": "SwarmSpec"
        }
    ];
    return Body1;
}());
exports.Body1 = Body1;
var Body2 = (function () {
    function Body2() {
    }
    Body2.getAttributeTypeMap = function () {
        return Body2.attributeTypeMap;
    };
    Body2.discriminator = undefined;
    Body2.attributeTypeMap = [
        {
            "name": "listenAddr",
            "baseName": "ListenAddr",
            "type": "string"
        },
        {
            "name": "advertiseAddr",
            "baseName": "AdvertiseAddr",
            "type": "string"
        },
        {
            "name": "dataPathAddr",
            "baseName": "DataPathAddr",
            "type": "string"
        },
        {
            "name": "remoteAddrs",
            "baseName": "RemoteAddrs",
            "type": "Array<string>"
        },
        {
            "name": "joinToken",
            "baseName": "JoinToken",
            "type": "string"
        }
    ];
    return Body2;
}());
exports.Body2 = Body2;
var Body3 = (function () {
    function Body3() {
    }
    Body3.getAttributeTypeMap = function () {
        return Body3.attributeTypeMap;
    };
    Body3.discriminator = undefined;
    Body3.attributeTypeMap = [
        {
            "name": "unlockKey",
            "baseName": "UnlockKey",
            "type": "string"
        }
    ];
    return Body3;
}());
exports.Body3 = Body3;
var BuildCache = (function () {
    function BuildCache() {
    }
    BuildCache.getAttributeTypeMap = function () {
        return BuildCache.attributeTypeMap;
    };
    BuildCache.discriminator = undefined;
    BuildCache.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "parent",
            "baseName": "Parent",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "inUse",
            "baseName": "InUse",
            "type": "boolean"
        },
        {
            "name": "shared",
            "baseName": "Shared",
            "type": "boolean"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "createdAt",
            "baseName": "CreatedAt",
            "type": "string"
        },
        {
            "name": "lastUsedAt",
            "baseName": "LastUsedAt",
            "type": "string"
        },
        {
            "name": "usageCount",
            "baseName": "UsageCount",
            "type": "number"
        }
    ];
    return BuildCache;
}());
exports.BuildCache = BuildCache;
var BuildInfo = (function () {
    function BuildInfo() {
    }
    BuildInfo.getAttributeTypeMap = function () {
        return BuildInfo.attributeTypeMap;
    };
    BuildInfo.discriminator = undefined;
    BuildInfo.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "stream",
            "baseName": "stream",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "errorDetail",
            "baseName": "errorDetail",
            "type": "ErrorDetail"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "progress",
            "baseName": "progress",
            "type": "string"
        },
        {
            "name": "progressDetail",
            "baseName": "progressDetail",
            "type": "ProgressDetail"
        },
        {
            "name": "aux",
            "baseName": "aux",
            "type": "ImageID"
        }
    ];
    return BuildInfo;
}());
exports.BuildInfo = BuildInfo;
var BuildPruneResponse = (function () {
    function BuildPruneResponse() {
    }
    BuildPruneResponse.getAttributeTypeMap = function () {
        return BuildPruneResponse.attributeTypeMap;
    };
    BuildPruneResponse.discriminator = undefined;
    BuildPruneResponse.attributeTypeMap = [
        {
            "name": "cachesDeleted",
            "baseName": "CachesDeleted",
            "type": "Array<string>"
        },
        {
            "name": "spaceReclaimed",
            "baseName": "SpaceReclaimed",
            "type": "number"
        }
    ];
    return BuildPruneResponse;
}());
exports.BuildPruneResponse = BuildPruneResponse;
var ClusterInfo = (function () {
    function ClusterInfo() {
    }
    ClusterInfo.getAttributeTypeMap = function () {
        return ClusterInfo.attributeTypeMap;
    };
    ClusterInfo.discriminator = undefined;
    ClusterInfo.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "ObjectVersion"
        },
        {
            "name": "createdAt",
            "baseName": "CreatedAt",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "UpdatedAt",
            "type": "string"
        },
        {
            "name": "spec",
            "baseName": "Spec",
            "type": "SwarmSpec"
        },
        {
            "name": "tLSInfo",
            "baseName": "TLSInfo",
            "type": "TLSInfo"
        },
        {
            "name": "rootRotationInProgress",
            "baseName": "RootRotationInProgress",
            "type": "boolean"
        },
        {
            "name": "dataPathPort",
            "baseName": "DataPathPort",
            "type": "number"
        },
        {
            "name": "defaultAddrPool",
            "baseName": "DefaultAddrPool",
            "type": "Array<string>"
        },
        {
            "name": "subnetSize",
            "baseName": "SubnetSize",
            "type": "number"
        }
    ];
    return ClusterInfo;
}());
exports.ClusterInfo = ClusterInfo;
var Commit = (function () {
    function Commit() {
    }
    Commit.getAttributeTypeMap = function () {
        return Commit.attributeTypeMap;
    };
    Commit.discriminator = undefined;
    Commit.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "expected",
            "baseName": "Expected",
            "type": "string"
        }
    ];
    return Commit;
}());
exports.Commit = Commit;
var Config = (function () {
    function Config() {
    }
    Config.getAttributeTypeMap = function () {
        return Config.attributeTypeMap;
    };
    Config.discriminator = undefined;
    Config.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "ObjectVersion"
        },
        {
            "name": "createdAt",
            "baseName": "CreatedAt",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "UpdatedAt",
            "type": "string"
        },
        {
            "name": "spec",
            "baseName": "Spec",
            "type": "ConfigSpec"
        }
    ];
    return Config;
}());
exports.Config = Config;
var ConfigSpec = (function () {
    function ConfigSpec() {
    }
    ConfigSpec.getAttributeTypeMap = function () {
        return ConfigSpec.attributeTypeMap;
    };
    ConfigSpec.discriminator = undefined;
    ConfigSpec.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "data",
            "baseName": "Data",
            "type": "string"
        },
        {
            "name": "templating",
            "baseName": "Templating",
            "type": "Driver"
        }
    ];
    return ConfigSpec;
}());
exports.ConfigSpec = ConfigSpec;
var Container = (function () {
    function Container() {
    }
    Container.getAttributeTypeMap = function () {
        return Container.attributeTypeMap;
    };
    Container.discriminator = undefined;
    Container.attributeTypeMap = [
        {
            "name": "container",
            "baseName": "Container",
            "type": "string"
        },
        {
            "name": "endpointConfig",
            "baseName": "EndpointConfig",
            "type": "EndpointSettings"
        }
    ];
    return Container;
}());
exports.Container = Container;
var Container1 = (function () {
    function Container1() {
    }
    Container1.getAttributeTypeMap = function () {
        return Container1.attributeTypeMap;
    };
    Container1.discriminator = undefined;
    Container1.attributeTypeMap = [
        {
            "name": "container",
            "baseName": "Container",
            "type": "string"
        },
        {
            "name": "force",
            "baseName": "Force",
            "type": "boolean"
        }
    ];
    return Container1;
}());
exports.Container1 = Container1;
var ContainerChangeResponseItem = (function () {
    function ContainerChangeResponseItem() {
    }
    ContainerChangeResponseItem.getAttributeTypeMap = function () {
        return ContainerChangeResponseItem.attributeTypeMap;
    };
    ContainerChangeResponseItem.discriminator = undefined;
    ContainerChangeResponseItem.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "Path",
            "type": "string"
        },
        {
            "name": "kind",
            "baseName": "Kind",
            "type": "number"
        }
    ];
    return ContainerChangeResponseItem;
}());
exports.ContainerChangeResponseItem = ContainerChangeResponseItem;
var ContainerConfig = (function () {
    function ContainerConfig() {
    }
    ContainerConfig.getAttributeTypeMap = function () {
        return ContainerConfig.attributeTypeMap;
    };
    ContainerConfig.discriminator = undefined;
    ContainerConfig.attributeTypeMap = [
        {
            "name": "hostname",
            "baseName": "Hostname",
            "type": "string"
        },
        {
            "name": "domainname",
            "baseName": "Domainname",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "string"
        },
        {
            "name": "attachStdin",
            "baseName": "AttachStdin",
            "type": "boolean"
        },
        {
            "name": "attachStdout",
            "baseName": "AttachStdout",
            "type": "boolean"
        },
        {
            "name": "attachStderr",
            "baseName": "AttachStderr",
            "type": "boolean"
        },
        {
            "name": "exposedPorts",
            "baseName": "ExposedPorts",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "tty",
            "baseName": "Tty",
            "type": "boolean"
        },
        {
            "name": "openStdin",
            "baseName": "OpenStdin",
            "type": "boolean"
        },
        {
            "name": "stdinOnce",
            "baseName": "StdinOnce",
            "type": "boolean"
        },
        {
            "name": "env",
            "baseName": "Env",
            "type": "Array<string>"
        },
        {
            "name": "cmd",
            "baseName": "Cmd",
            "type": "Array<string>"
        },
        {
            "name": "healthcheck",
            "baseName": "Healthcheck",
            "type": "HealthConfig"
        },
        {
            "name": "argsEscaped",
            "baseName": "ArgsEscaped",
            "type": "boolean"
        },
        {
            "name": "image",
            "baseName": "Image",
            "type": "string"
        },
        {
            "name": "volumes",
            "baseName": "Volumes",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "workingDir",
            "baseName": "WorkingDir",
            "type": "string"
        },
        {
            "name": "entrypoint",
            "baseName": "Entrypoint",
            "type": "Array<string>"
        },
        {
            "name": "networkDisabled",
            "baseName": "NetworkDisabled",
            "type": "boolean"
        },
        {
            "name": "macAddress",
            "baseName": "MacAddress",
            "type": "string"
        },
        {
            "name": "onBuild",
            "baseName": "OnBuild",
            "type": "Array<string>"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "stopSignal",
            "baseName": "StopSignal",
            "type": "string"
        },
        {
            "name": "stopTimeout",
            "baseName": "StopTimeout",
            "type": "number"
        },
        {
            "name": "shell",
            "baseName": "Shell",
            "type": "Array<string>"
        }
    ];
    return ContainerConfig;
}());
exports.ContainerConfig = ContainerConfig;
var ContainerCreateResponse = (function () {
    function ContainerCreateResponse() {
    }
    ContainerCreateResponse.getAttributeTypeMap = function () {
        return ContainerCreateResponse.attributeTypeMap;
    };
    ContainerCreateResponse.discriminator = undefined;
    ContainerCreateResponse.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "warnings",
            "baseName": "Warnings",
            "type": "Array<string>"
        }
    ];
    return ContainerCreateResponse;
}());
exports.ContainerCreateResponse = ContainerCreateResponse;
var ContainerInspectResponse = (function () {
    function ContainerInspectResponse() {
    }
    ContainerInspectResponse.getAttributeTypeMap = function () {
        return ContainerInspectResponse.attributeTypeMap;
    };
    ContainerInspectResponse.discriminator = undefined;
    ContainerInspectResponse.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "Created",
            "type": "string"
        },
        {
            "name": "path",
            "baseName": "Path",
            "type": "string"
        },
        {
            "name": "args",
            "baseName": "Args",
            "type": "Array<string>"
        },
        {
            "name": "state",
            "baseName": "State",
            "type": "ContainerState"
        },
        {
            "name": "image",
            "baseName": "Image",
            "type": "string"
        },
        {
            "name": "resolvConfPath",
            "baseName": "ResolvConfPath",
            "type": "string"
        },
        {
            "name": "hostnamePath",
            "baseName": "HostnamePath",
            "type": "string"
        },
        {
            "name": "hostsPath",
            "baseName": "HostsPath",
            "type": "string"
        },
        {
            "name": "logPath",
            "baseName": "LogPath",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "restartCount",
            "baseName": "RestartCount",
            "type": "number"
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "platform",
            "baseName": "Platform",
            "type": "string"
        },
        {
            "name": "mountLabel",
            "baseName": "MountLabel",
            "type": "string"
        },
        {
            "name": "processLabel",
            "baseName": "ProcessLabel",
            "type": "string"
        },
        {
            "name": "appArmorProfile",
            "baseName": "AppArmorProfile",
            "type": "string"
        },
        {
            "name": "execIDs",
            "baseName": "ExecIDs",
            "type": "Array<string>"
        },
        {
            "name": "hostConfig",
            "baseName": "HostConfig",
            "type": "HostConfig"
        },
        {
            "name": "graphDriver",
            "baseName": "GraphDriver",
            "type": "GraphDriverData"
        },
        {
            "name": "sizeRw",
            "baseName": "SizeRw",
            "type": "number"
        },
        {
            "name": "sizeRootFs",
            "baseName": "SizeRootFs",
            "type": "number"
        },
        {
            "name": "mounts",
            "baseName": "Mounts",
            "type": "Array<MountPoint>"
        },
        {
            "name": "config",
            "baseName": "Config",
            "type": "ContainerConfig"
        },
        {
            "name": "networkSettings",
            "baseName": "NetworkSettings",
            "type": "NetworkSettings"
        }
    ];
    return ContainerInspectResponse;
}());
exports.ContainerInspectResponse = ContainerInspectResponse;
var ContainerPruneResponse = (function () {
    function ContainerPruneResponse() {
    }
    ContainerPruneResponse.getAttributeTypeMap = function () {
        return ContainerPruneResponse.attributeTypeMap;
    };
    ContainerPruneResponse.discriminator = undefined;
    ContainerPruneResponse.attributeTypeMap = [
        {
            "name": "containersDeleted",
            "baseName": "ContainersDeleted",
            "type": "Array<string>"
        },
        {
            "name": "spaceReclaimed",
            "baseName": "SpaceReclaimed",
            "type": "number"
        }
    ];
    return ContainerPruneResponse;
}());
exports.ContainerPruneResponse = ContainerPruneResponse;
var ContainerState = (function () {
    function ContainerState() {
    }
    ContainerState.getAttributeTypeMap = function () {
        return ContainerState.attributeTypeMap;
    };
    ContainerState.discriminator = undefined;
    ContainerState.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "Status",
            "type": "ContainerState.StatusEnum"
        },
        {
            "name": "running",
            "baseName": "Running",
            "type": "boolean"
        },
        {
            "name": "paused",
            "baseName": "Paused",
            "type": "boolean"
        },
        {
            "name": "restarting",
            "baseName": "Restarting",
            "type": "boolean"
        },
        {
            "name": "oOMKilled",
            "baseName": "OOMKilled",
            "type": "boolean"
        },
        {
            "name": "dead",
            "baseName": "Dead",
            "type": "boolean"
        },
        {
            "name": "pid",
            "baseName": "Pid",
            "type": "number"
        },
        {
            "name": "exitCode",
            "baseName": "ExitCode",
            "type": "number"
        },
        {
            "name": "error",
            "baseName": "Error",
            "type": "string"
        },
        {
            "name": "startedAt",
            "baseName": "StartedAt",
            "type": "string"
        },
        {
            "name": "finishedAt",
            "baseName": "FinishedAt",
            "type": "string"
        },
        {
            "name": "health",
            "baseName": "Health",
            "type": "Health"
        }
    ];
    return ContainerState;
}());
exports.ContainerState = ContainerState;
(function (ContainerState) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["Created"] = 'created'] = "Created";
        StatusEnum[StatusEnum["Running"] = 'running'] = "Running";
        StatusEnum[StatusEnum["Paused"] = 'paused'] = "Paused";
        StatusEnum[StatusEnum["Restarting"] = 'restarting'] = "Restarting";
        StatusEnum[StatusEnum["Removing"] = 'removing'] = "Removing";
        StatusEnum[StatusEnum["Exited"] = 'exited'] = "Exited";
        StatusEnum[StatusEnum["Dead"] = 'dead'] = "Dead";
    })(StatusEnum = ContainerState.StatusEnum || (ContainerState.StatusEnum = {}));
})(ContainerState = exports.ContainerState || (exports.ContainerState = {}));
exports.ContainerState = ContainerState;
var ContainerSummary = (function (_super) {
    __extends(ContainerSummary, _super);
    function ContainerSummary() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ContainerSummary.discriminator = undefined;
    return ContainerSummary;
}(Array));
exports.ContainerSummary = ContainerSummary;
var ContainerSummaryInner = (function () {
    function ContainerSummaryInner() {
    }
    ContainerSummaryInner.getAttributeTypeMap = function () {
        return ContainerSummaryInner.attributeTypeMap;
    };
    ContainerSummaryInner.discriminator = undefined;
    ContainerSummaryInner.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "names",
            "baseName": "Names",
            "type": "Array<string>"
        },
        {
            "name": "image",
            "baseName": "Image",
            "type": "string"
        },
        {
            "name": "imageID",
            "baseName": "ImageID",
            "type": "string"
        },
        {
            "name": "command",
            "baseName": "Command",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "Created",
            "type": "number"
        },
        {
            "name": "ports",
            "baseName": "Ports",
            "type": "Array<Port>"
        },
        {
            "name": "sizeRw",
            "baseName": "SizeRw",
            "type": "number"
        },
        {
            "name": "sizeRootFs",
            "baseName": "SizeRootFs",
            "type": "number"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "state",
            "baseName": "State",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "string"
        },
        {
            "name": "hostConfig",
            "baseName": "HostConfig",
            "type": "ContainerSummaryInnerHostConfig"
        },
        {
            "name": "networkSettings",
            "baseName": "NetworkSettings",
            "type": "ContainerSummaryInnerNetworkSettings"
        },
        {
            "name": "mounts",
            "baseName": "Mounts",
            "type": "Array<Mount>"
        }
    ];
    return ContainerSummaryInner;
}());
exports.ContainerSummaryInner = ContainerSummaryInner;
var ContainerSummaryInnerHostConfig = (function () {
    function ContainerSummaryInnerHostConfig() {
    }
    ContainerSummaryInnerHostConfig.getAttributeTypeMap = function () {
        return ContainerSummaryInnerHostConfig.attributeTypeMap;
    };
    ContainerSummaryInnerHostConfig.discriminator = undefined;
    ContainerSummaryInnerHostConfig.attributeTypeMap = [
        {
            "name": "networkMode",
            "baseName": "NetworkMode",
            "type": "string"
        }
    ];
    return ContainerSummaryInnerHostConfig;
}());
exports.ContainerSummaryInnerHostConfig = ContainerSummaryInnerHostConfig;
var ContainerSummaryInnerNetworkSettings = (function () {
    function ContainerSummaryInnerNetworkSettings() {
    }
    ContainerSummaryInnerNetworkSettings.getAttributeTypeMap = function () {
        return ContainerSummaryInnerNetworkSettings.attributeTypeMap;
    };
    ContainerSummaryInnerNetworkSettings.discriminator = undefined;
    ContainerSummaryInnerNetworkSettings.attributeTypeMap = [
        {
            "name": "networks",
            "baseName": "Networks",
            "type": "{ [key: string]: EndpointSettings; }"
        }
    ];
    return ContainerSummaryInnerNetworkSettings;
}());
exports.ContainerSummaryInnerNetworkSettings = ContainerSummaryInnerNetworkSettings;
var ContainerTopResponse = (function () {
    function ContainerTopResponse() {
    }
    ContainerTopResponse.getAttributeTypeMap = function () {
        return ContainerTopResponse.attributeTypeMap;
    };
    ContainerTopResponse.discriminator = undefined;
    ContainerTopResponse.attributeTypeMap = [
        {
            "name": "titles",
            "baseName": "Titles",
            "type": "Array<string>"
        },
        {
            "name": "processes",
            "baseName": "Processes",
            "type": "Array<Array<string>>"
        }
    ];
    return ContainerTopResponse;
}());
exports.ContainerTopResponse = ContainerTopResponse;
var ContainerUpdateResponse = (function () {
    function ContainerUpdateResponse() {
    }
    ContainerUpdateResponse.getAttributeTypeMap = function () {
        return ContainerUpdateResponse.attributeTypeMap;
    };
    ContainerUpdateResponse.discriminator = undefined;
    ContainerUpdateResponse.attributeTypeMap = [
        {
            "name": "warnings",
            "baseName": "Warnings",
            "type": "Array<string>"
        }
    ];
    return ContainerUpdateResponse;
}());
exports.ContainerUpdateResponse = ContainerUpdateResponse;
var ContainerWaitResponse = (function () {
    function ContainerWaitResponse() {
    }
    ContainerWaitResponse.getAttributeTypeMap = function () {
        return ContainerWaitResponse.attributeTypeMap;
    };
    ContainerWaitResponse.discriminator = undefined;
    ContainerWaitResponse.attributeTypeMap = [
        {
            "name": "statusCode",
            "baseName": "StatusCode",
            "type": "number"
        },
        {
            "name": "error",
            "baseName": "Error",
            "type": "ContainerWaitResponseError"
        }
    ];
    return ContainerWaitResponse;
}());
exports.ContainerWaitResponse = ContainerWaitResponse;
var ContainerWaitResponseError = (function () {
    function ContainerWaitResponseError() {
    }
    ContainerWaitResponseError.getAttributeTypeMap = function () {
        return ContainerWaitResponseError.attributeTypeMap;
    };
    ContainerWaitResponseError.discriminator = undefined;
    ContainerWaitResponseError.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "Message",
            "type": "string"
        }
    ];
    return ContainerWaitResponseError;
}());
exports.ContainerWaitResponseError = ContainerWaitResponseError;
var CreateImageInfo = (function () {
    function CreateImageInfo() {
    }
    CreateImageInfo.getAttributeTypeMap = function () {
        return CreateImageInfo.attributeTypeMap;
    };
    CreateImageInfo.discriminator = undefined;
    CreateImageInfo.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "progress",
            "baseName": "progress",
            "type": "string"
        },
        {
            "name": "progressDetail",
            "baseName": "progressDetail",
            "type": "ProgressDetail"
        }
    ];
    return CreateImageInfo;
}());
exports.CreateImageInfo = CreateImageInfo;
var DeviceMapping = (function () {
    function DeviceMapping() {
    }
    DeviceMapping.getAttributeTypeMap = function () {
        return DeviceMapping.attributeTypeMap;
    };
    DeviceMapping.discriminator = undefined;
    DeviceMapping.attributeTypeMap = [
        {
            "name": "pathOnHost",
            "baseName": "PathOnHost",
            "type": "string"
        },
        {
            "name": "pathInContainer",
            "baseName": "PathInContainer",
            "type": "string"
        },
        {
            "name": "cgroupPermissions",
            "baseName": "CgroupPermissions",
            "type": "string"
        }
    ];
    return DeviceMapping;
}());
exports.DeviceMapping = DeviceMapping;
var DeviceRequest = (function () {
    function DeviceRequest() {
    }
    DeviceRequest.getAttributeTypeMap = function () {
        return DeviceRequest.attributeTypeMap;
    };
    DeviceRequest.discriminator = undefined;
    DeviceRequest.attributeTypeMap = [
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "count",
            "baseName": "Count",
            "type": "number"
        },
        {
            "name": "deviceIDs",
            "baseName": "DeviceIDs",
            "type": "Array<string>"
        },
        {
            "name": "capabilities",
            "baseName": "Capabilities",
            "type": "Array<Array<string>>"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        }
    ];
    return DeviceRequest;
}());
exports.DeviceRequest = DeviceRequest;
var DistributionInspectResponse = (function () {
    function DistributionInspectResponse() {
    }
    DistributionInspectResponse.getAttributeTypeMap = function () {
        return DistributionInspectResponse.attributeTypeMap;
    };
    DistributionInspectResponse.discriminator = undefined;
    DistributionInspectResponse.attributeTypeMap = [
        {
            "name": "descriptor",
            "baseName": "Descriptor",
            "type": "DistributionInspectResponseDescriptor"
        },
        {
            "name": "platforms",
            "baseName": "Platforms",
            "type": "Array<DistributionInspectResponsePlatforms>"
        }
    ];
    return DistributionInspectResponse;
}());
exports.DistributionInspectResponse = DistributionInspectResponse;
var DistributionInspectResponseDescriptor = (function () {
    function DistributionInspectResponseDescriptor() {
    }
    DistributionInspectResponseDescriptor.getAttributeTypeMap = function () {
        return DistributionInspectResponseDescriptor.attributeTypeMap;
    };
    DistributionInspectResponseDescriptor.discriminator = undefined;
    DistributionInspectResponseDescriptor.attributeTypeMap = [
        {
            "name": "mediaType",
            "baseName": "MediaType",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "digest",
            "baseName": "Digest",
            "type": "string"
        },
        {
            "name": "uRLs",
            "baseName": "URLs",
            "type": "Array<string>"
        }
    ];
    return DistributionInspectResponseDescriptor;
}());
exports.DistributionInspectResponseDescriptor = DistributionInspectResponseDescriptor;
var DistributionInspectResponsePlatforms = (function () {
    function DistributionInspectResponsePlatforms() {
    }
    DistributionInspectResponsePlatforms.getAttributeTypeMap = function () {
        return DistributionInspectResponsePlatforms.attributeTypeMap;
    };
    DistributionInspectResponsePlatforms.discriminator = undefined;
    DistributionInspectResponsePlatforms.attributeTypeMap = [
        {
            "name": "architecture",
            "baseName": "Architecture",
            "type": "string"
        },
        {
            "name": "OS",
            "baseName": "OS",
            "type": "string"
        },
        {
            "name": "oSVersion",
            "baseName": "OSVersion",
            "type": "string"
        },
        {
            "name": "oSFeatures",
            "baseName": "OSFeatures",
            "type": "Array<string>"
        },
        {
            "name": "variant",
            "baseName": "Variant",
            "type": "string"
        },
        {
            "name": "features",
            "baseName": "Features",
            "type": "Array<string>"
        }
    ];
    return DistributionInspectResponsePlatforms;
}());
exports.DistributionInspectResponsePlatforms = DistributionInspectResponsePlatforms;
var Driver = (function () {
    function Driver() {
    }
    Driver.getAttributeTypeMap = function () {
        return Driver.attributeTypeMap;
    };
    Driver.discriminator = undefined;
    Driver.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        }
    ];
    return Driver;
}());
exports.Driver = Driver;
var EndpointIPAMConfig = (function () {
    function EndpointIPAMConfig() {
    }
    EndpointIPAMConfig.getAttributeTypeMap = function () {
        return EndpointIPAMConfig.attributeTypeMap;
    };
    EndpointIPAMConfig.discriminator = undefined;
    EndpointIPAMConfig.attributeTypeMap = [
        {
            "name": "iPv4Address",
            "baseName": "IPv4Address",
            "type": "string"
        },
        {
            "name": "iPv6Address",
            "baseName": "IPv6Address",
            "type": "string"
        },
        {
            "name": "linkLocalIPs",
            "baseName": "LinkLocalIPs",
            "type": "Array<string>"
        }
    ];
    return EndpointIPAMConfig;
}());
exports.EndpointIPAMConfig = EndpointIPAMConfig;
var EndpointPortConfig = (function () {
    function EndpointPortConfig() {
    }
    EndpointPortConfig.getAttributeTypeMap = function () {
        return EndpointPortConfig.attributeTypeMap;
    };
    EndpointPortConfig.discriminator = undefined;
    EndpointPortConfig.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "protocol",
            "baseName": "Protocol",
            "type": "EndpointPortConfig.ProtocolEnum"
        },
        {
            "name": "targetPort",
            "baseName": "TargetPort",
            "type": "number"
        },
        {
            "name": "publishedPort",
            "baseName": "PublishedPort",
            "type": "number"
        },
        {
            "name": "publishMode",
            "baseName": "PublishMode",
            "type": "EndpointPortConfig.PublishModeEnum"
        }
    ];
    return EndpointPortConfig;
}());
exports.EndpointPortConfig = EndpointPortConfig;
(function (EndpointPortConfig) {
    var ProtocolEnum;
    (function (ProtocolEnum) {
        ProtocolEnum[ProtocolEnum["Tcp"] = 'tcp'] = "Tcp";
        ProtocolEnum[ProtocolEnum["Udp"] = 'udp'] = "Udp";
        ProtocolEnum[ProtocolEnum["Sctp"] = 'sctp'] = "Sctp";
    })(ProtocolEnum = EndpointPortConfig.ProtocolEnum || (EndpointPortConfig.ProtocolEnum = {}));
    var PublishModeEnum;
    (function (PublishModeEnum) {
        PublishModeEnum[PublishModeEnum["Ingress"] = 'ingress'] = "Ingress";
        PublishModeEnum[PublishModeEnum["Host"] = 'host'] = "Host";
    })(PublishModeEnum = EndpointPortConfig.PublishModeEnum || (EndpointPortConfig.PublishModeEnum = {}));
})(EndpointPortConfig = exports.EndpointPortConfig || (exports.EndpointPortConfig = {}));
exports.EndpointPortConfig = EndpointPortConfig;
var EndpointSettings = (function () {
    function EndpointSettings() {
    }
    EndpointSettings.getAttributeTypeMap = function () {
        return EndpointSettings.attributeTypeMap;
    };
    EndpointSettings.discriminator = undefined;
    EndpointSettings.attributeTypeMap = [
        {
            "name": "iPAMConfig",
            "baseName": "IPAMConfig",
            "type": "EndpointIPAMConfig"
        },
        {
            "name": "links",
            "baseName": "Links",
            "type": "Array<string>"
        },
        {
            "name": "aliases",
            "baseName": "Aliases",
            "type": "Array<string>"
        },
        {
            "name": "networkID",
            "baseName": "NetworkID",
            "type": "string"
        },
        {
            "name": "endpointID",
            "baseName": "EndpointID",
            "type": "string"
        },
        {
            "name": "gateway",
            "baseName": "Gateway",
            "type": "string"
        },
        {
            "name": "iPAddress",
            "baseName": "IPAddress",
            "type": "string"
        },
        {
            "name": "iPPrefixLen",
            "baseName": "IPPrefixLen",
            "type": "number"
        },
        {
            "name": "iPv6Gateway",
            "baseName": "IPv6Gateway",
            "type": "string"
        },
        {
            "name": "globalIPv6Address",
            "baseName": "GlobalIPv6Address",
            "type": "string"
        },
        {
            "name": "globalIPv6PrefixLen",
            "baseName": "GlobalIPv6PrefixLen",
            "type": "number"
        },
        {
            "name": "macAddress",
            "baseName": "MacAddress",
            "type": "string"
        },
        {
            "name": "driverOpts",
            "baseName": "DriverOpts",
            "type": "{ [key: string]: string; }"
        }
    ];
    return EndpointSettings;
}());
exports.EndpointSettings = EndpointSettings;
var EndpointSpec = (function () {
    function EndpointSpec() {
    }
    EndpointSpec.getAttributeTypeMap = function () {
        return EndpointSpec.attributeTypeMap;
    };
    EndpointSpec.discriminator = undefined;
    EndpointSpec.attributeTypeMap = [
        {
            "name": "mode",
            "baseName": "Mode",
            "type": "EndpointSpec.ModeEnum"
        },
        {
            "name": "ports",
            "baseName": "Ports",
            "type": "Array<EndpointPortConfig>"
        }
    ];
    return EndpointSpec;
}());
exports.EndpointSpec = EndpointSpec;
(function (EndpointSpec) {
    var ModeEnum;
    (function (ModeEnum) {
        ModeEnum[ModeEnum["Vip"] = 'vip'] = "Vip";
        ModeEnum[ModeEnum["Dnsrr"] = 'dnsrr'] = "Dnsrr";
    })(ModeEnum = EndpointSpec.ModeEnum || (EndpointSpec.ModeEnum = {}));
})(EndpointSpec = exports.EndpointSpec || (exports.EndpointSpec = {}));
exports.EndpointSpec = EndpointSpec;
var EngineDescription = (function () {
    function EngineDescription() {
    }
    EngineDescription.getAttributeTypeMap = function () {
        return EngineDescription.attributeTypeMap;
    };
    EngineDescription.discriminator = undefined;
    EngineDescription.attributeTypeMap = [
        {
            "name": "engineVersion",
            "baseName": "EngineVersion",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "plugins",
            "baseName": "Plugins",
            "type": "Array<EngineDescriptionPlugins>"
        }
    ];
    return EngineDescription;
}());
exports.EngineDescription = EngineDescription;
var EngineDescriptionPlugins = (function () {
    function EngineDescriptionPlugins() {
    }
    EngineDescriptionPlugins.getAttributeTypeMap = function () {
        return EngineDescriptionPlugins.attributeTypeMap;
    };
    EngineDescriptionPlugins.discriminator = undefined;
    EngineDescriptionPlugins.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        }
    ];
    return EngineDescriptionPlugins;
}());
exports.EngineDescriptionPlugins = EngineDescriptionPlugins;
var ErrorDetail = (function () {
    function ErrorDetail() {
    }
    ErrorDetail.getAttributeTypeMap = function () {
        return ErrorDetail.attributeTypeMap;
    };
    ErrorDetail.discriminator = undefined;
    ErrorDetail.attributeTypeMap = [
        {
            "name": "code",
            "baseName": "code",
            "type": "number"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }
    ];
    return ErrorDetail;
}());
exports.ErrorDetail = ErrorDetail;
var ErrorResponse = (function () {
    function ErrorResponse() {
    }
    ErrorResponse.getAttributeTypeMap = function () {
        return ErrorResponse.attributeTypeMap;
    };
    ErrorResponse.discriminator = undefined;
    ErrorResponse.attributeTypeMap = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }
    ];
    return ErrorResponse;
}());
exports.ErrorResponse = ErrorResponse;
var ExecConfig = (function () {
    function ExecConfig() {
    }
    ExecConfig.getAttributeTypeMap = function () {
        return ExecConfig.attributeTypeMap;
    };
    ExecConfig.discriminator = undefined;
    ExecConfig.attributeTypeMap = [
        {
            "name": "attachStdin",
            "baseName": "AttachStdin",
            "type": "boolean"
        },
        {
            "name": "attachStdout",
            "baseName": "AttachStdout",
            "type": "boolean"
        },
        {
            "name": "attachStderr",
            "baseName": "AttachStderr",
            "type": "boolean"
        },
        {
            "name": "detachKeys",
            "baseName": "DetachKeys",
            "type": "string"
        },
        {
            "name": "tty",
            "baseName": "Tty",
            "type": "boolean"
        },
        {
            "name": "env",
            "baseName": "Env",
            "type": "Array<string>"
        },
        {
            "name": "cmd",
            "baseName": "Cmd",
            "type": "Array<string>"
        },
        {
            "name": "privileged",
            "baseName": "Privileged",
            "type": "boolean"
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "string"
        },
        {
            "name": "workingDir",
            "baseName": "WorkingDir",
            "type": "string"
        }
    ];
    return ExecConfig;
}());
exports.ExecConfig = ExecConfig;
var ExecInspectResponse = (function () {
    function ExecInspectResponse() {
    }
    ExecInspectResponse.getAttributeTypeMap = function () {
        return ExecInspectResponse.attributeTypeMap;
    };
    ExecInspectResponse.discriminator = undefined;
    ExecInspectResponse.attributeTypeMap = [
        {
            "name": "canRemove",
            "baseName": "CanRemove",
            "type": "boolean"
        },
        {
            "name": "detachKeys",
            "baseName": "DetachKeys",
            "type": "string"
        },
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "running",
            "baseName": "Running",
            "type": "boolean"
        },
        {
            "name": "exitCode",
            "baseName": "ExitCode",
            "type": "number"
        },
        {
            "name": "processConfig",
            "baseName": "ProcessConfig",
            "type": "ProcessConfig"
        },
        {
            "name": "openStdin",
            "baseName": "OpenStdin",
            "type": "boolean"
        },
        {
            "name": "openStderr",
            "baseName": "OpenStderr",
            "type": "boolean"
        },
        {
            "name": "openStdout",
            "baseName": "OpenStdout",
            "type": "boolean"
        },
        {
            "name": "containerID",
            "baseName": "ContainerID",
            "type": "string"
        },
        {
            "name": "pid",
            "baseName": "Pid",
            "type": "number"
        }
    ];
    return ExecInspectResponse;
}());
exports.ExecInspectResponse = ExecInspectResponse;
var ExecStartConfig = (function () {
    function ExecStartConfig() {
    }
    ExecStartConfig.getAttributeTypeMap = function () {
        return ExecStartConfig.attributeTypeMap;
    };
    ExecStartConfig.discriminator = undefined;
    ExecStartConfig.attributeTypeMap = [
        {
            "name": "detach",
            "baseName": "Detach",
            "type": "boolean"
        },
        {
            "name": "tty",
            "baseName": "Tty",
            "type": "boolean"
        }
    ];
    return ExecStartConfig;
}());
exports.ExecStartConfig = ExecStartConfig;
var GenericResources = (function (_super) {
    __extends(GenericResources, _super);
    function GenericResources() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GenericResources.discriminator = undefined;
    return GenericResources;
}(Array));
exports.GenericResources = GenericResources;
var GenericResourcesInner = (function () {
    function GenericResourcesInner() {
    }
    GenericResourcesInner.getAttributeTypeMap = function () {
        return GenericResourcesInner.attributeTypeMap;
    };
    GenericResourcesInner.discriminator = undefined;
    GenericResourcesInner.attributeTypeMap = [
        {
            "name": "namedResourceSpec",
            "baseName": "NamedResourceSpec",
            "type": "GenericResourcesInnerNamedResourceSpec"
        },
        {
            "name": "discreteResourceSpec",
            "baseName": "DiscreteResourceSpec",
            "type": "GenericResourcesInnerDiscreteResourceSpec"
        }
    ];
    return GenericResourcesInner;
}());
exports.GenericResourcesInner = GenericResourcesInner;
var GenericResourcesInnerDiscreteResourceSpec = (function () {
    function GenericResourcesInnerDiscreteResourceSpec() {
    }
    GenericResourcesInnerDiscreteResourceSpec.getAttributeTypeMap = function () {
        return GenericResourcesInnerDiscreteResourceSpec.attributeTypeMap;
    };
    GenericResourcesInnerDiscreteResourceSpec.discriminator = undefined;
    GenericResourcesInnerDiscreteResourceSpec.attributeTypeMap = [
        {
            "name": "kind",
            "baseName": "Kind",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "number"
        }
    ];
    return GenericResourcesInnerDiscreteResourceSpec;
}());
exports.GenericResourcesInnerDiscreteResourceSpec = GenericResourcesInnerDiscreteResourceSpec;
var GenericResourcesInnerNamedResourceSpec = (function () {
    function GenericResourcesInnerNamedResourceSpec() {
    }
    GenericResourcesInnerNamedResourceSpec.getAttributeTypeMap = function () {
        return GenericResourcesInnerNamedResourceSpec.attributeTypeMap;
    };
    GenericResourcesInnerNamedResourceSpec.discriminator = undefined;
    GenericResourcesInnerNamedResourceSpec.attributeTypeMap = [
        {
            "name": "kind",
            "baseName": "Kind",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }
    ];
    return GenericResourcesInnerNamedResourceSpec;
}());
exports.GenericResourcesInnerNamedResourceSpec = GenericResourcesInnerNamedResourceSpec;
var GraphDriverData = (function () {
    function GraphDriverData() {
    }
    GraphDriverData.getAttributeTypeMap = function () {
        return GraphDriverData.attributeTypeMap;
    };
    GraphDriverData.discriminator = undefined;
    GraphDriverData.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "data",
            "baseName": "Data",
            "type": "{ [key: string]: string; }"
        }
    ];
    return GraphDriverData;
}());
exports.GraphDriverData = GraphDriverData;
var Health = (function () {
    function Health() {
    }
    Health.getAttributeTypeMap = function () {
        return Health.attributeTypeMap;
    };
    Health.discriminator = undefined;
    Health.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "Status",
            "type": "Health.StatusEnum"
        },
        {
            "name": "failingStreak",
            "baseName": "FailingStreak",
            "type": "number"
        },
        {
            "name": "log",
            "baseName": "Log",
            "type": "Array<HealthcheckResult>"
        }
    ];
    return Health;
}());
exports.Health = Health;
(function (Health) {
    var StatusEnum;
    (function (StatusEnum) {
        StatusEnum[StatusEnum["None"] = 'none'] = "None";
        StatusEnum[StatusEnum["Starting"] = 'starting'] = "Starting";
        StatusEnum[StatusEnum["Healthy"] = 'healthy'] = "Healthy";
        StatusEnum[StatusEnum["Unhealthy"] = 'unhealthy'] = "Unhealthy";
    })(StatusEnum = Health.StatusEnum || (Health.StatusEnum = {}));
})(Health = exports.Health || (exports.Health = {}));
exports.Health = Health;
var HealthConfig = (function () {
    function HealthConfig() {
    }
    HealthConfig.getAttributeTypeMap = function () {
        return HealthConfig.attributeTypeMap;
    };
    HealthConfig.discriminator = undefined;
    HealthConfig.attributeTypeMap = [
        {
            "name": "test",
            "baseName": "Test",
            "type": "Array<string>"
        },
        {
            "name": "interval",
            "baseName": "Interval",
            "type": "number"
        },
        {
            "name": "timeout",
            "baseName": "Timeout",
            "type": "number"
        },
        {
            "name": "retries",
            "baseName": "Retries",
            "type": "number"
        },
        {
            "name": "startPeriod",
            "baseName": "StartPeriod",
            "type": "number"
        }
    ];
    return HealthConfig;
}());
exports.HealthConfig = HealthConfig;
var HealthcheckResult = (function () {
    function HealthcheckResult() {
    }
    HealthcheckResult.getAttributeTypeMap = function () {
        return HealthcheckResult.attributeTypeMap;
    };
    HealthcheckResult.discriminator = undefined;
    HealthcheckResult.attributeTypeMap = [
        {
            "name": "start",
            "baseName": "Start",
            "type": "Date"
        },
        {
            "name": "end",
            "baseName": "End",
            "type": "string"
        },
        {
            "name": "exitCode",
            "baseName": "ExitCode",
            "type": "number"
        },
        {
            "name": "output",
            "baseName": "Output",
            "type": "string"
        }
    ];
    return HealthcheckResult;
}());
exports.HealthcheckResult = HealthcheckResult;
var HistoryResponseItem = (function () {
    function HistoryResponseItem() {
    }
    HistoryResponseItem.getAttributeTypeMap = function () {
        return HistoryResponseItem.attributeTypeMap;
    };
    HistoryResponseItem.discriminator = undefined;
    HistoryResponseItem.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "Created",
            "type": "number"
        },
        {
            "name": "createdBy",
            "baseName": "CreatedBy",
            "type": "string"
        },
        {
            "name": "tags",
            "baseName": "Tags",
            "type": "Array<string>"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "comment",
            "baseName": "Comment",
            "type": "string"
        }
    ];
    return HistoryResponseItem;
}());
exports.HistoryResponseItem = HistoryResponseItem;
var HostConfig = (function (_super) {
    __extends(HostConfig, _super);
    function HostConfig() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    HostConfig.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(HostConfig.attributeTypeMap);
    };
    HostConfig.discriminator = undefined;
    HostConfig.attributeTypeMap = [
        {
            "name": "binds",
            "baseName": "Binds",
            "type": "Array<string>"
        },
        {
            "name": "containerIDFile",
            "baseName": "ContainerIDFile",
            "type": "string"
        },
        {
            "name": "logConfig",
            "baseName": "LogConfig",
            "type": "HostConfigLogConfig"
        },
        {
            "name": "networkMode",
            "baseName": "NetworkMode",
            "type": "string"
        },
        {
            "name": "portBindings",
            "baseName": "PortBindings",
            "type": "PortMap"
        },
        {
            "name": "restartPolicy",
            "baseName": "RestartPolicy",
            "type": "RestartPolicy"
        },
        {
            "name": "autoRemove",
            "baseName": "AutoRemove",
            "type": "boolean"
        },
        {
            "name": "volumeDriver",
            "baseName": "VolumeDriver",
            "type": "string"
        },
        {
            "name": "volumesFrom",
            "baseName": "VolumesFrom",
            "type": "Array<string>"
        },
        {
            "name": "mounts",
            "baseName": "Mounts",
            "type": "Array<Mount>"
        },
        {
            "name": "capAdd",
            "baseName": "CapAdd",
            "type": "Array<string>"
        },
        {
            "name": "capDrop",
            "baseName": "CapDrop",
            "type": "Array<string>"
        },
        {
            "name": "cgroupnsMode",
            "baseName": "CgroupnsMode",
            "type": "HostConfig.CgroupnsModeEnum"
        },
        {
            "name": "dns",
            "baseName": "Dns",
            "type": "Array<string>"
        },
        {
            "name": "dnsOptions",
            "baseName": "DnsOptions",
            "type": "Array<string>"
        },
        {
            "name": "dnsSearch",
            "baseName": "DnsSearch",
            "type": "Array<string>"
        },
        {
            "name": "extraHosts",
            "baseName": "ExtraHosts",
            "type": "Array<string>"
        },
        {
            "name": "groupAdd",
            "baseName": "GroupAdd",
            "type": "Array<string>"
        },
        {
            "name": "ipcMode",
            "baseName": "IpcMode",
            "type": "string"
        },
        {
            "name": "cgroup",
            "baseName": "Cgroup",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "Links",
            "type": "Array<string>"
        },
        {
            "name": "oomScoreAdj",
            "baseName": "OomScoreAdj",
            "type": "number"
        },
        {
            "name": "pidMode",
            "baseName": "PidMode",
            "type": "string"
        },
        {
            "name": "privileged",
            "baseName": "Privileged",
            "type": "boolean"
        },
        {
            "name": "publishAllPorts",
            "baseName": "PublishAllPorts",
            "type": "boolean"
        },
        {
            "name": "readonlyRootfs",
            "baseName": "ReadonlyRootfs",
            "type": "boolean"
        },
        {
            "name": "securityOpt",
            "baseName": "SecurityOpt",
            "type": "Array<string>"
        },
        {
            "name": "storageOpt",
            "baseName": "StorageOpt",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "tmpfs",
            "baseName": "Tmpfs",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "uTSMode",
            "baseName": "UTSMode",
            "type": "string"
        },
        {
            "name": "usernsMode",
            "baseName": "UsernsMode",
            "type": "string"
        },
        {
            "name": "shmSize",
            "baseName": "ShmSize",
            "type": "number"
        },
        {
            "name": "sysctls",
            "baseName": "Sysctls",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "runtime",
            "baseName": "Runtime",
            "type": "string"
        },
        {
            "name": "consoleSize",
            "baseName": "ConsoleSize",
            "type": "Array<number>"
        },
        {
            "name": "isolation",
            "baseName": "Isolation",
            "type": "HostConfig.IsolationEnum"
        },
        {
            "name": "maskedPaths",
            "baseName": "MaskedPaths",
            "type": "Array<string>"
        },
        {
            "name": "readonlyPaths",
            "baseName": "ReadonlyPaths",
            "type": "Array<string>"
        }
    ];
    return HostConfig;
}(Resources));
exports.HostConfig = HostConfig;
(function (HostConfig) {
    var CgroupnsModeEnum;
    (function (CgroupnsModeEnum) {
        CgroupnsModeEnum[CgroupnsModeEnum["Private"] = 'private'] = "Private";
        CgroupnsModeEnum[CgroupnsModeEnum["Host"] = 'host'] = "Host";
    })(CgroupnsModeEnum = HostConfig.CgroupnsModeEnum || (HostConfig.CgroupnsModeEnum = {}));
    var IsolationEnum;
    (function (IsolationEnum) {
        IsolationEnum[IsolationEnum["Default"] = 'default'] = "Default";
        IsolationEnum[IsolationEnum["Process"] = 'process'] = "Process";
        IsolationEnum[IsolationEnum["Hyperv"] = 'hyperv'] = "Hyperv";
    })(IsolationEnum = HostConfig.IsolationEnum || (HostConfig.IsolationEnum = {}));
})(HostConfig = exports.HostConfig || (exports.HostConfig = {}));
exports.HostConfig = HostConfig;
var HostConfigLogConfig = (function () {
    function HostConfigLogConfig() {
    }
    HostConfigLogConfig.getAttributeTypeMap = function () {
        return HostConfigLogConfig.attributeTypeMap;
    };
    HostConfigLogConfig.discriminator = undefined;
    HostConfigLogConfig.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "HostConfigLogConfig.TypeEnum"
        },
        {
            "name": "config",
            "baseName": "Config",
            "type": "{ [key: string]: string; }"
        }
    ];
    return HostConfigLogConfig;
}());
exports.HostConfigLogConfig = HostConfigLogConfig;
(function (HostConfigLogConfig) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["JsonFile"] = 'json-file'] = "JsonFile";
        TypeEnum[TypeEnum["Syslog"] = 'syslog'] = "Syslog";
        TypeEnum[TypeEnum["Journald"] = 'journald'] = "Journald";
        TypeEnum[TypeEnum["Gelf"] = 'gelf'] = "Gelf";
        TypeEnum[TypeEnum["Fluentd"] = 'fluentd'] = "Fluentd";
        TypeEnum[TypeEnum["Awslogs"] = 'awslogs'] = "Awslogs";
        TypeEnum[TypeEnum["Splunk"] = 'splunk'] = "Splunk";
        TypeEnum[TypeEnum["Etwlogs"] = 'etwlogs'] = "Etwlogs";
        TypeEnum[TypeEnum["None"] = 'none'] = "None";
    })(TypeEnum = HostConfigLogConfig.TypeEnum || (HostConfigLogConfig.TypeEnum = {}));
})(HostConfigLogConfig = exports.HostConfigLogConfig || (exports.HostConfigLogConfig = {}));
exports.HostConfigLogConfig = HostConfigLogConfig;
var IPAM = (function () {
    function IPAM() {
    }
    IPAM.getAttributeTypeMap = function () {
        return IPAM.attributeTypeMap;
    };
    IPAM.discriminator = undefined;
    IPAM.attributeTypeMap = [
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "config",
            "baseName": "Config",
            "type": "Array<{ [key: string]: string; }>"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        }
    ];
    return IPAM;
}());
exports.IPAM = IPAM;
var IdResponse = (function () {
    function IdResponse() {
    }
    IdResponse.getAttributeTypeMap = function () {
        return IdResponse.attributeTypeMap;
    };
    IdResponse.discriminator = undefined;
    IdResponse.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        }
    ];
    return IdResponse;
}());
exports.IdResponse = IdResponse;
var Image = (function () {
    function Image() {
    }
    Image.getAttributeTypeMap = function () {
        return Image.attributeTypeMap;
    };
    Image.discriminator = undefined;
    Image.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "repoTags",
            "baseName": "RepoTags",
            "type": "Array<string>"
        },
        {
            "name": "repoDigests",
            "baseName": "RepoDigests",
            "type": "Array<string>"
        },
        {
            "name": "parent",
            "baseName": "Parent",
            "type": "string"
        },
        {
            "name": "comment",
            "baseName": "Comment",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "Created",
            "type": "string"
        },
        {
            "name": "container",
            "baseName": "Container",
            "type": "string"
        },
        {
            "name": "containerConfig",
            "baseName": "ContainerConfig",
            "type": "ContainerConfig"
        },
        {
            "name": "dockerVersion",
            "baseName": "DockerVersion",
            "type": "string"
        },
        {
            "name": "author",
            "baseName": "Author",
            "type": "string"
        },
        {
            "name": "config",
            "baseName": "Config",
            "type": "ContainerConfig"
        },
        {
            "name": "architecture",
            "baseName": "Architecture",
            "type": "string"
        },
        {
            "name": "os",
            "baseName": "Os",
            "type": "string"
        },
        {
            "name": "osVersion",
            "baseName": "OsVersion",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "virtualSize",
            "baseName": "VirtualSize",
            "type": "number"
        },
        {
            "name": "graphDriver",
            "baseName": "GraphDriver",
            "type": "GraphDriverData"
        },
        {
            "name": "rootFS",
            "baseName": "RootFS",
            "type": "ImageRootFS"
        },
        {
            "name": "metadata",
            "baseName": "Metadata",
            "type": "ImageMetadata"
        }
    ];
    return Image;
}());
exports.Image = Image;
var ImageDeleteResponseItem = (function () {
    function ImageDeleteResponseItem() {
    }
    ImageDeleteResponseItem.getAttributeTypeMap = function () {
        return ImageDeleteResponseItem.attributeTypeMap;
    };
    ImageDeleteResponseItem.discriminator = undefined;
    ImageDeleteResponseItem.attributeTypeMap = [
        {
            "name": "untagged",
            "baseName": "Untagged",
            "type": "string"
        },
        {
            "name": "deleted",
            "baseName": "Deleted",
            "type": "string"
        }
    ];
    return ImageDeleteResponseItem;
}());
exports.ImageDeleteResponseItem = ImageDeleteResponseItem;
var ImageID = (function () {
    function ImageID() {
    }
    ImageID.getAttributeTypeMap = function () {
        return ImageID.attributeTypeMap;
    };
    ImageID.discriminator = undefined;
    ImageID.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        }
    ];
    return ImageID;
}());
exports.ImageID = ImageID;
var ImageMetadata = (function () {
    function ImageMetadata() {
    }
    ImageMetadata.getAttributeTypeMap = function () {
        return ImageMetadata.attributeTypeMap;
    };
    ImageMetadata.discriminator = undefined;
    ImageMetadata.attributeTypeMap = [
        {
            "name": "lastTagTime",
            "baseName": "LastTagTime",
            "type": "string"
        }
    ];
    return ImageMetadata;
}());
exports.ImageMetadata = ImageMetadata;
var ImagePruneResponse = (function () {
    function ImagePruneResponse() {
    }
    ImagePruneResponse.getAttributeTypeMap = function () {
        return ImagePruneResponse.attributeTypeMap;
    };
    ImagePruneResponse.discriminator = undefined;
    ImagePruneResponse.attributeTypeMap = [
        {
            "name": "imagesDeleted",
            "baseName": "ImagesDeleted",
            "type": "Array<ImageDeleteResponseItem>"
        },
        {
            "name": "spaceReclaimed",
            "baseName": "SpaceReclaimed",
            "type": "number"
        }
    ];
    return ImagePruneResponse;
}());
exports.ImagePruneResponse = ImagePruneResponse;
var ImageRootFS = (function () {
    function ImageRootFS() {
    }
    ImageRootFS.getAttributeTypeMap = function () {
        return ImageRootFS.attributeTypeMap;
    };
    ImageRootFS.discriminator = undefined;
    ImageRootFS.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "layers",
            "baseName": "Layers",
            "type": "Array<string>"
        },
        {
            "name": "baseLayer",
            "baseName": "BaseLayer",
            "type": "string"
        }
    ];
    return ImageRootFS;
}());
exports.ImageRootFS = ImageRootFS;
var ImageSearchResponseItem = (function () {
    function ImageSearchResponseItem() {
    }
    ImageSearchResponseItem.getAttributeTypeMap = function () {
        return ImageSearchResponseItem.attributeTypeMap;
    };
    ImageSearchResponseItem.discriminator = undefined;
    ImageSearchResponseItem.attributeTypeMap = [
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "isOfficial",
            "baseName": "is_official",
            "type": "boolean"
        },
        {
            "name": "isAutomated",
            "baseName": "is_automated",
            "type": "boolean"
        },
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "starCount",
            "baseName": "star_count",
            "type": "number"
        }
    ];
    return ImageSearchResponseItem;
}());
exports.ImageSearchResponseItem = ImageSearchResponseItem;
var ImageSummary = (function () {
    function ImageSummary() {
    }
    ImageSummary.getAttributeTypeMap = function () {
        return ImageSummary.attributeTypeMap;
    };
    ImageSummary.discriminator = undefined;
    ImageSummary.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "parentId",
            "baseName": "ParentId",
            "type": "string"
        },
        {
            "name": "repoTags",
            "baseName": "RepoTags",
            "type": "Array<string>"
        },
        {
            "name": "repoDigests",
            "baseName": "RepoDigests",
            "type": "Array<string>"
        },
        {
            "name": "created",
            "baseName": "Created",
            "type": "number"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "sharedSize",
            "baseName": "SharedSize",
            "type": "number"
        },
        {
            "name": "virtualSize",
            "baseName": "VirtualSize",
            "type": "number"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "containers",
            "baseName": "Containers",
            "type": "number"
        }
    ];
    return ImageSummary;
}());
exports.ImageSummary = ImageSummary;
var IndexInfo = (function () {
    function IndexInfo() {
    }
    IndexInfo.getAttributeTypeMap = function () {
        return IndexInfo.attributeTypeMap;
    };
    IndexInfo.discriminator = undefined;
    IndexInfo.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "mirrors",
            "baseName": "Mirrors",
            "type": "Array<string>"
        },
        {
            "name": "secure",
            "baseName": "Secure",
            "type": "boolean"
        },
        {
            "name": "official",
            "baseName": "Official",
            "type": "boolean"
        }
    ];
    return IndexInfo;
}());
exports.IndexInfo = IndexInfo;
var InlineResponse400 = (function () {
    function InlineResponse400() {
    }
    InlineResponse400.getAttributeTypeMap = function () {
        return InlineResponse400.attributeTypeMap;
    };
    InlineResponse400.discriminator = undefined;
    InlineResponse400.attributeTypeMap = [
        {
            "name": "errorResponse",
            "baseName": "ErrorResponse",
            "type": "ErrorResponse"
        },
        {
            "name": "message",
            "baseName": "message",
            "type": "string"
        }
    ];
    return InlineResponse400;
}());
exports.InlineResponse400 = InlineResponse400;
var JoinTokens = (function () {
    function JoinTokens() {
    }
    JoinTokens.getAttributeTypeMap = function () {
        return JoinTokens.attributeTypeMap;
    };
    JoinTokens.discriminator = undefined;
    JoinTokens.attributeTypeMap = [
        {
            "name": "worker",
            "baseName": "Worker",
            "type": "string"
        },
        {
            "name": "manager",
            "baseName": "Manager",
            "type": "string"
        }
    ];
    return JoinTokens;
}());
exports.JoinTokens = JoinTokens;
var Limit = (function () {
    function Limit() {
    }
    Limit.getAttributeTypeMap = function () {
        return Limit.attributeTypeMap;
    };
    Limit.discriminator = undefined;
    Limit.attributeTypeMap = [
        {
            "name": "nanoCPUs",
            "baseName": "NanoCPUs",
            "type": "number"
        },
        {
            "name": "memoryBytes",
            "baseName": "MemoryBytes",
            "type": "number"
        },
        {
            "name": "pids",
            "baseName": "Pids",
            "type": "number"
        }
    ];
    return Limit;
}());
exports.Limit = Limit;
var LocalNodeState = (function () {
    function LocalNodeState() {
    }
    LocalNodeState.getAttributeTypeMap = function () {
        return LocalNodeState.attributeTypeMap;
    };
    LocalNodeState.discriminator = undefined;
    LocalNodeState.attributeTypeMap = [];
    return LocalNodeState;
}());
exports.LocalNodeState = LocalNodeState;
var ManagerStatus = (function () {
    function ManagerStatus() {
    }
    ManagerStatus.getAttributeTypeMap = function () {
        return ManagerStatus.attributeTypeMap;
    };
    ManagerStatus.discriminator = undefined;
    ManagerStatus.attributeTypeMap = [
        {
            "name": "leader",
            "baseName": "Leader",
            "type": "boolean"
        },
        {
            "name": "reachability",
            "baseName": "Reachability",
            "type": "Reachability"
        },
        {
            "name": "addr",
            "baseName": "Addr",
            "type": "string"
        }
    ];
    return ManagerStatus;
}());
exports.ManagerStatus = ManagerStatus;
var Mount = (function () {
    function Mount() {
    }
    Mount.getAttributeTypeMap = function () {
        return Mount.attributeTypeMap;
    };
    Mount.discriminator = undefined;
    Mount.attributeTypeMap = [
        {
            "name": "target",
            "baseName": "Target",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "Source",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "Mount.TypeEnum"
        },
        {
            "name": "readOnly",
            "baseName": "ReadOnly",
            "type": "boolean"
        },
        {
            "name": "consistency",
            "baseName": "Consistency",
            "type": "string"
        },
        {
            "name": "bindOptions",
            "baseName": "BindOptions",
            "type": "MountBindOptions"
        },
        {
            "name": "volumeOptions",
            "baseName": "VolumeOptions",
            "type": "MountVolumeOptions"
        },
        {
            "name": "tmpfsOptions",
            "baseName": "TmpfsOptions",
            "type": "MountTmpfsOptions"
        }
    ];
    return Mount;
}());
exports.Mount = Mount;
(function (Mount) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Bind"] = 'bind'] = "Bind";
        TypeEnum[TypeEnum["Volume"] = 'volume'] = "Volume";
        TypeEnum[TypeEnum["Tmpfs"] = 'tmpfs'] = "Tmpfs";
        TypeEnum[TypeEnum["Npipe"] = 'npipe'] = "Npipe";
    })(TypeEnum = Mount.TypeEnum || (Mount.TypeEnum = {}));
})(Mount = exports.Mount || (exports.Mount = {}));
exports.Mount = Mount;
var MountBindOptions = (function () {
    function MountBindOptions() {
    }
    MountBindOptions.getAttributeTypeMap = function () {
        return MountBindOptions.attributeTypeMap;
    };
    MountBindOptions.discriminator = undefined;
    MountBindOptions.attributeTypeMap = [
        {
            "name": "propagation",
            "baseName": "Propagation",
            "type": "MountBindOptions.PropagationEnum"
        },
        {
            "name": "nonRecursive",
            "baseName": "NonRecursive",
            "type": "boolean"
        }
    ];
    return MountBindOptions;
}());
exports.MountBindOptions = MountBindOptions;
(function (MountBindOptions) {
    var PropagationEnum;
    (function (PropagationEnum) {
        PropagationEnum[PropagationEnum["Private"] = 'private'] = "Private";
        PropagationEnum[PropagationEnum["Rprivate"] = 'rprivate'] = "Rprivate";
        PropagationEnum[PropagationEnum["Shared"] = 'shared'] = "Shared";
        PropagationEnum[PropagationEnum["Rshared"] = 'rshared'] = "Rshared";
        PropagationEnum[PropagationEnum["Slave"] = 'slave'] = "Slave";
        PropagationEnum[PropagationEnum["Rslave"] = 'rslave'] = "Rslave";
    })(PropagationEnum = MountBindOptions.PropagationEnum || (MountBindOptions.PropagationEnum = {}));
})(MountBindOptions = exports.MountBindOptions || (exports.MountBindOptions = {}));
exports.MountBindOptions = MountBindOptions;
var MountPoint = (function () {
    function MountPoint() {
    }
    MountPoint.getAttributeTypeMap = function () {
        return MountPoint.attributeTypeMap;
    };
    MountPoint.discriminator = undefined;
    MountPoint.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "source",
            "baseName": "Source",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "Destination",
            "type": "string"
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "Mode",
            "type": "string"
        },
        {
            "name": "RW",
            "baseName": "RW",
            "type": "boolean"
        },
        {
            "name": "propagation",
            "baseName": "Propagation",
            "type": "string"
        }
    ];
    return MountPoint;
}());
exports.MountPoint = MountPoint;
var MountTmpfsOptions = (function () {
    function MountTmpfsOptions() {
    }
    MountTmpfsOptions.getAttributeTypeMap = function () {
        return MountTmpfsOptions.attributeTypeMap;
    };
    MountTmpfsOptions.discriminator = undefined;
    MountTmpfsOptions.attributeTypeMap = [
        {
            "name": "sizeBytes",
            "baseName": "SizeBytes",
            "type": "number"
        },
        {
            "name": "mode",
            "baseName": "Mode",
            "type": "number"
        }
    ];
    return MountTmpfsOptions;
}());
exports.MountTmpfsOptions = MountTmpfsOptions;
var MountVolumeOptions = (function () {
    function MountVolumeOptions() {
    }
    MountVolumeOptions.getAttributeTypeMap = function () {
        return MountVolumeOptions.attributeTypeMap;
    };
    MountVolumeOptions.discriminator = undefined;
    MountVolumeOptions.attributeTypeMap = [
        {
            "name": "noCopy",
            "baseName": "NoCopy",
            "type": "boolean"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "driverConfig",
            "baseName": "DriverConfig",
            "type": "MountVolumeOptionsDriverConfig"
        }
    ];
    return MountVolumeOptions;
}());
exports.MountVolumeOptions = MountVolumeOptions;
var MountVolumeOptionsDriverConfig = (function () {
    function MountVolumeOptionsDriverConfig() {
    }
    MountVolumeOptionsDriverConfig.getAttributeTypeMap = function () {
        return MountVolumeOptionsDriverConfig.attributeTypeMap;
    };
    MountVolumeOptionsDriverConfig.discriminator = undefined;
    MountVolumeOptionsDriverConfig.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        }
    ];
    return MountVolumeOptionsDriverConfig;
}());
exports.MountVolumeOptionsDriverConfig = MountVolumeOptionsDriverConfig;
var Network = (function () {
    function Network() {
    }
    Network.getAttributeTypeMap = function () {
        return Network.attributeTypeMap;
    };
    Network.discriminator = undefined;
    Network.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "created",
            "baseName": "Created",
            "type": "string"
        },
        {
            "name": "scope",
            "baseName": "Scope",
            "type": "string"
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "enableIPv6",
            "baseName": "EnableIPv6",
            "type": "boolean"
        },
        {
            "name": "IPAM",
            "baseName": "IPAM",
            "type": "IPAM"
        },
        {
            "name": "internal",
            "baseName": "Internal",
            "type": "boolean"
        },
        {
            "name": "attachable",
            "baseName": "Attachable",
            "type": "boolean"
        },
        {
            "name": "ingress",
            "baseName": "Ingress",
            "type": "boolean"
        },
        {
            "name": "containers",
            "baseName": "Containers",
            "type": "{ [key: string]: NetworkContainer; }"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        }
    ];
    return Network;
}());
exports.Network = Network;
var NetworkAttachmentConfig = (function () {
    function NetworkAttachmentConfig() {
    }
    NetworkAttachmentConfig.getAttributeTypeMap = function () {
        return NetworkAttachmentConfig.attributeTypeMap;
    };
    NetworkAttachmentConfig.discriminator = undefined;
    NetworkAttachmentConfig.attributeTypeMap = [
        {
            "name": "target",
            "baseName": "Target",
            "type": "string"
        },
        {
            "name": "aliases",
            "baseName": "Aliases",
            "type": "Array<string>"
        },
        {
            "name": "driverOpts",
            "baseName": "DriverOpts",
            "type": "{ [key: string]: string; }"
        }
    ];
    return NetworkAttachmentConfig;
}());
exports.NetworkAttachmentConfig = NetworkAttachmentConfig;
var NetworkConfig = (function () {
    function NetworkConfig() {
    }
    NetworkConfig.getAttributeTypeMap = function () {
        return NetworkConfig.attributeTypeMap;
    };
    NetworkConfig.discriminator = undefined;
    NetworkConfig.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "checkDuplicate",
            "baseName": "CheckDuplicate",
            "type": "boolean"
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "internal",
            "baseName": "Internal",
            "type": "boolean"
        },
        {
            "name": "attachable",
            "baseName": "Attachable",
            "type": "boolean"
        },
        {
            "name": "ingress",
            "baseName": "Ingress",
            "type": "boolean"
        },
        {
            "name": "IPAM",
            "baseName": "IPAM",
            "type": "IPAM"
        },
        {
            "name": "enableIPv6",
            "baseName": "EnableIPv6",
            "type": "boolean"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        }
    ];
    return NetworkConfig;
}());
exports.NetworkConfig = NetworkConfig;
var NetworkContainer = (function () {
    function NetworkContainer() {
    }
    NetworkContainer.getAttributeTypeMap = function () {
        return NetworkContainer.attributeTypeMap;
    };
    NetworkContainer.discriminator = undefined;
    NetworkContainer.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "endpointID",
            "baseName": "EndpointID",
            "type": "string"
        },
        {
            "name": "macAddress",
            "baseName": "MacAddress",
            "type": "string"
        },
        {
            "name": "iPv4Address",
            "baseName": "IPv4Address",
            "type": "string"
        },
        {
            "name": "iPv6Address",
            "baseName": "IPv6Address",
            "type": "string"
        }
    ];
    return NetworkContainer;
}());
exports.NetworkContainer = NetworkContainer;
var NetworkCreateResponse = (function () {
    function NetworkCreateResponse() {
    }
    NetworkCreateResponse.getAttributeTypeMap = function () {
        return NetworkCreateResponse.attributeTypeMap;
    };
    NetworkCreateResponse.discriminator = undefined;
    NetworkCreateResponse.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "warning",
            "baseName": "Warning",
            "type": "string"
        }
    ];
    return NetworkCreateResponse;
}());
exports.NetworkCreateResponse = NetworkCreateResponse;
var NetworkPruneResponse = (function () {
    function NetworkPruneResponse() {
    }
    NetworkPruneResponse.getAttributeTypeMap = function () {
        return NetworkPruneResponse.attributeTypeMap;
    };
    NetworkPruneResponse.discriminator = undefined;
    NetworkPruneResponse.attributeTypeMap = [
        {
            "name": "networksDeleted",
            "baseName": "NetworksDeleted",
            "type": "Array<string>"
        }
    ];
    return NetworkPruneResponse;
}());
exports.NetworkPruneResponse = NetworkPruneResponse;
var NetworkSettings = (function () {
    function NetworkSettings() {
    }
    NetworkSettings.getAttributeTypeMap = function () {
        return NetworkSettings.attributeTypeMap;
    };
    NetworkSettings.discriminator = undefined;
    NetworkSettings.attributeTypeMap = [
        {
            "name": "bridge",
            "baseName": "Bridge",
            "type": "string"
        },
        {
            "name": "sandboxID",
            "baseName": "SandboxID",
            "type": "string"
        },
        {
            "name": "hairpinMode",
            "baseName": "HairpinMode",
            "type": "boolean"
        },
        {
            "name": "linkLocalIPv6Address",
            "baseName": "LinkLocalIPv6Address",
            "type": "string"
        },
        {
            "name": "linkLocalIPv6PrefixLen",
            "baseName": "LinkLocalIPv6PrefixLen",
            "type": "number"
        },
        {
            "name": "ports",
            "baseName": "Ports",
            "type": "PortMap"
        },
        {
            "name": "sandboxKey",
            "baseName": "SandboxKey",
            "type": "string"
        },
        {
            "name": "secondaryIPAddresses",
            "baseName": "SecondaryIPAddresses",
            "type": "Array<Address>"
        },
        {
            "name": "secondaryIPv6Addresses",
            "baseName": "SecondaryIPv6Addresses",
            "type": "Array<Address>"
        },
        {
            "name": "endpointID",
            "baseName": "EndpointID",
            "type": "string"
        },
        {
            "name": "gateway",
            "baseName": "Gateway",
            "type": "string"
        },
        {
            "name": "globalIPv6Address",
            "baseName": "GlobalIPv6Address",
            "type": "string"
        },
        {
            "name": "globalIPv6PrefixLen",
            "baseName": "GlobalIPv6PrefixLen",
            "type": "number"
        },
        {
            "name": "iPAddress",
            "baseName": "IPAddress",
            "type": "string"
        },
        {
            "name": "iPPrefixLen",
            "baseName": "IPPrefixLen",
            "type": "number"
        },
        {
            "name": "iPv6Gateway",
            "baseName": "IPv6Gateway",
            "type": "string"
        },
        {
            "name": "macAddress",
            "baseName": "MacAddress",
            "type": "string"
        },
        {
            "name": "networks",
            "baseName": "Networks",
            "type": "{ [key: string]: EndpointSettings; }"
        }
    ];
    return NetworkSettings;
}());
exports.NetworkSettings = NetworkSettings;
var NetworkingConfig = (function () {
    function NetworkingConfig() {
    }
    NetworkingConfig.getAttributeTypeMap = function () {
        return NetworkingConfig.attributeTypeMap;
    };
    NetworkingConfig.discriminator = undefined;
    NetworkingConfig.attributeTypeMap = [
        {
            "name": "endpointsConfig",
            "baseName": "EndpointsConfig",
            "type": "{ [key: string]: EndpointSettings; }"
        }
    ];
    return NetworkingConfig;
}());
exports.NetworkingConfig = NetworkingConfig;
var Node = (function () {
    function Node() {
    }
    Node.getAttributeTypeMap = function () {
        return Node.attributeTypeMap;
    };
    Node.discriminator = undefined;
    Node.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "ObjectVersion"
        },
        {
            "name": "createdAt",
            "baseName": "CreatedAt",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "UpdatedAt",
            "type": "string"
        },
        {
            "name": "spec",
            "baseName": "Spec",
            "type": "NodeSpec"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "NodeDescription"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "NodeStatus"
        },
        {
            "name": "managerStatus",
            "baseName": "ManagerStatus",
            "type": "ManagerStatus"
        }
    ];
    return Node;
}());
exports.Node = Node;
var NodeDescription = (function () {
    function NodeDescription() {
    }
    NodeDescription.getAttributeTypeMap = function () {
        return NodeDescription.attributeTypeMap;
    };
    NodeDescription.discriminator = undefined;
    NodeDescription.attributeTypeMap = [
        {
            "name": "hostname",
            "baseName": "Hostname",
            "type": "string"
        },
        {
            "name": "platform",
            "baseName": "Platform",
            "type": "Platform"
        },
        {
            "name": "resources",
            "baseName": "Resources",
            "type": "ResourceObject"
        },
        {
            "name": "engine",
            "baseName": "Engine",
            "type": "EngineDescription"
        },
        {
            "name": "tLSInfo",
            "baseName": "TLSInfo",
            "type": "TLSInfo"
        }
    ];
    return NodeDescription;
}());
exports.NodeDescription = NodeDescription;
var NodeSpec = (function () {
    function NodeSpec() {
    }
    NodeSpec.getAttributeTypeMap = function () {
        return NodeSpec.attributeTypeMap;
    };
    NodeSpec.discriminator = undefined;
    NodeSpec.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "role",
            "baseName": "Role",
            "type": "NodeSpec.RoleEnum"
        },
        {
            "name": "availability",
            "baseName": "Availability",
            "type": "NodeSpec.AvailabilityEnum"
        }
    ];
    return NodeSpec;
}());
exports.NodeSpec = NodeSpec;
(function (NodeSpec) {
    var RoleEnum;
    (function (RoleEnum) {
        RoleEnum[RoleEnum["Worker"] = 'worker'] = "Worker";
        RoleEnum[RoleEnum["Manager"] = 'manager'] = "Manager";
    })(RoleEnum = NodeSpec.RoleEnum || (NodeSpec.RoleEnum = {}));
    var AvailabilityEnum;
    (function (AvailabilityEnum) {
        AvailabilityEnum[AvailabilityEnum["Active"] = 'active'] = "Active";
        AvailabilityEnum[AvailabilityEnum["Pause"] = 'pause'] = "Pause";
        AvailabilityEnum[AvailabilityEnum["Drain"] = 'drain'] = "Drain";
    })(AvailabilityEnum = NodeSpec.AvailabilityEnum || (NodeSpec.AvailabilityEnum = {}));
})(NodeSpec = exports.NodeSpec || (exports.NodeSpec = {}));
exports.NodeSpec = NodeSpec;
var NodeState = (function () {
    function NodeState() {
    }
    NodeState.getAttributeTypeMap = function () {
        return NodeState.attributeTypeMap;
    };
    NodeState.discriminator = undefined;
    NodeState.attributeTypeMap = [];
    return NodeState;
}());
exports.NodeState = NodeState;
var NodeStatus = (function () {
    function NodeStatus() {
    }
    NodeStatus.getAttributeTypeMap = function () {
        return NodeStatus.attributeTypeMap;
    };
    NodeStatus.discriminator = undefined;
    NodeStatus.attributeTypeMap = [
        {
            "name": "state",
            "baseName": "State",
            "type": "NodeState"
        },
        {
            "name": "message",
            "baseName": "Message",
            "type": "string"
        },
        {
            "name": "addr",
            "baseName": "Addr",
            "type": "string"
        }
    ];
    return NodeStatus;
}());
exports.NodeStatus = NodeStatus;
var ObjectVersion = (function () {
    function ObjectVersion() {
    }
    ObjectVersion.getAttributeTypeMap = function () {
        return ObjectVersion.attributeTypeMap;
    };
    ObjectVersion.discriminator = undefined;
    ObjectVersion.attributeTypeMap = [
        {
            "name": "index",
            "baseName": "Index",
            "type": "number"
        }
    ];
    return ObjectVersion;
}());
exports.ObjectVersion = ObjectVersion;
var PeerNode = (function () {
    function PeerNode() {
    }
    PeerNode.getAttributeTypeMap = function () {
        return PeerNode.attributeTypeMap;
    };
    PeerNode.discriminator = undefined;
    PeerNode.attributeTypeMap = [
        {
            "name": "nodeID",
            "baseName": "NodeID",
            "type": "string"
        },
        {
            "name": "addr",
            "baseName": "Addr",
            "type": "string"
        }
    ];
    return PeerNode;
}());
exports.PeerNode = PeerNode;
var Platform = (function () {
    function Platform() {
    }
    Platform.getAttributeTypeMap = function () {
        return Platform.attributeTypeMap;
    };
    Platform.discriminator = undefined;
    Platform.attributeTypeMap = [
        {
            "name": "architecture",
            "baseName": "Architecture",
            "type": "string"
        },
        {
            "name": "OS",
            "baseName": "OS",
            "type": "string"
        }
    ];
    return Platform;
}());
exports.Platform = Platform;
var Plugin = (function () {
    function Plugin() {
    }
    Plugin.getAttributeTypeMap = function () {
        return Plugin.attributeTypeMap;
    };
    Plugin.discriminator = undefined;
    Plugin.attributeTypeMap = [
        {
            "name": "id",
            "baseName": "Id",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "enabled",
            "baseName": "Enabled",
            "type": "boolean"
        },
        {
            "name": "settings",
            "baseName": "Settings",
            "type": "PluginSettings"
        },
        {
            "name": "pluginReference",
            "baseName": "PluginReference",
            "type": "string"
        },
        {
            "name": "config",
            "baseName": "Config",
            "type": "PluginConfig"
        }
    ];
    return Plugin;
}());
exports.Plugin = Plugin;
var PluginConfig = (function () {
    function PluginConfig() {
    }
    PluginConfig.getAttributeTypeMap = function () {
        return PluginConfig.attributeTypeMap;
    };
    PluginConfig.discriminator = undefined;
    PluginConfig.attributeTypeMap = [
        {
            "name": "dockerVersion",
            "baseName": "DockerVersion",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "documentation",
            "baseName": "Documentation",
            "type": "string"
        },
        {
            "name": "_interface",
            "baseName": "Interface",
            "type": "PluginConfigInterface"
        },
        {
            "name": "entrypoint",
            "baseName": "Entrypoint",
            "type": "Array<string>"
        },
        {
            "name": "workDir",
            "baseName": "WorkDir",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "PluginConfigUser"
        },
        {
            "name": "network",
            "baseName": "Network",
            "type": "PluginConfigNetwork"
        },
        {
            "name": "linux",
            "baseName": "Linux",
            "type": "PluginConfigLinux"
        },
        {
            "name": "propagatedMount",
            "baseName": "PropagatedMount",
            "type": "string"
        },
        {
            "name": "ipcHost",
            "baseName": "IpcHost",
            "type": "boolean"
        },
        {
            "name": "pidHost",
            "baseName": "PidHost",
            "type": "boolean"
        },
        {
            "name": "mounts",
            "baseName": "Mounts",
            "type": "Array<PluginMount>"
        },
        {
            "name": "env",
            "baseName": "Env",
            "type": "Array<PluginEnv>"
        },
        {
            "name": "args",
            "baseName": "Args",
            "type": "PluginConfigArgs"
        },
        {
            "name": "rootfs",
            "baseName": "rootfs",
            "type": "PluginConfigRootfs"
        }
    ];
    return PluginConfig;
}());
exports.PluginConfig = PluginConfig;
var PluginConfigArgs = (function () {
    function PluginConfigArgs() {
    }
    PluginConfigArgs.getAttributeTypeMap = function () {
        return PluginConfigArgs.attributeTypeMap;
    };
    PluginConfigArgs.discriminator = undefined;
    PluginConfigArgs.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "settable",
            "baseName": "Settable",
            "type": "Array<string>"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "Array<string>"
        }
    ];
    return PluginConfigArgs;
}());
exports.PluginConfigArgs = PluginConfigArgs;
var PluginConfigInterface = (function () {
    function PluginConfigInterface() {
    }
    PluginConfigInterface.getAttributeTypeMap = function () {
        return PluginConfigInterface.attributeTypeMap;
    };
    PluginConfigInterface.discriminator = undefined;
    PluginConfigInterface.attributeTypeMap = [
        {
            "name": "types",
            "baseName": "Types",
            "type": "Array<PluginInterfaceType>"
        },
        {
            "name": "socket",
            "baseName": "Socket",
            "type": "string"
        },
        {
            "name": "protocolScheme",
            "baseName": "ProtocolScheme",
            "type": "PluginConfigInterface.ProtocolSchemeEnum"
        }
    ];
    return PluginConfigInterface;
}());
exports.PluginConfigInterface = PluginConfigInterface;
(function (PluginConfigInterface) {
    var ProtocolSchemeEnum;
    (function (ProtocolSchemeEnum) {
        ProtocolSchemeEnum[ProtocolSchemeEnum["Empty"] = ''] = "Empty";
        ProtocolSchemeEnum[ProtocolSchemeEnum["MobyPluginsHttpv1"] = 'moby.plugins.http/v1'] = "MobyPluginsHttpv1";
    })(ProtocolSchemeEnum = PluginConfigInterface.ProtocolSchemeEnum || (PluginConfigInterface.ProtocolSchemeEnum = {}));
})(PluginConfigInterface = exports.PluginConfigInterface || (exports.PluginConfigInterface = {}));
exports.PluginConfigInterface = PluginConfigInterface;
var PluginConfigLinux = (function () {
    function PluginConfigLinux() {
    }
    PluginConfigLinux.getAttributeTypeMap = function () {
        return PluginConfigLinux.attributeTypeMap;
    };
    PluginConfigLinux.discriminator = undefined;
    PluginConfigLinux.attributeTypeMap = [
        {
            "name": "capabilities",
            "baseName": "Capabilities",
            "type": "Array<string>"
        },
        {
            "name": "allowAllDevices",
            "baseName": "AllowAllDevices",
            "type": "boolean"
        },
        {
            "name": "devices",
            "baseName": "Devices",
            "type": "Array<PluginDevice>"
        }
    ];
    return PluginConfigLinux;
}());
exports.PluginConfigLinux = PluginConfigLinux;
var PluginConfigNetwork = (function () {
    function PluginConfigNetwork() {
    }
    PluginConfigNetwork.getAttributeTypeMap = function () {
        return PluginConfigNetwork.attributeTypeMap;
    };
    PluginConfigNetwork.discriminator = undefined;
    PluginConfigNetwork.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        }
    ];
    return PluginConfigNetwork;
}());
exports.PluginConfigNetwork = PluginConfigNetwork;
var PluginConfigRootfs = (function () {
    function PluginConfigRootfs() {
    }
    PluginConfigRootfs.getAttributeTypeMap = function () {
        return PluginConfigRootfs.attributeTypeMap;
    };
    PluginConfigRootfs.discriminator = undefined;
    PluginConfigRootfs.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "type",
            "type": "string"
        },
        {
            "name": "diffIds",
            "baseName": "diff_ids",
            "type": "Array<string>"
        }
    ];
    return PluginConfigRootfs;
}());
exports.PluginConfigRootfs = PluginConfigRootfs;
var PluginConfigUser = (function () {
    function PluginConfigUser() {
    }
    PluginConfigUser.getAttributeTypeMap = function () {
        return PluginConfigUser.attributeTypeMap;
    };
    PluginConfigUser.discriminator = undefined;
    PluginConfigUser.attributeTypeMap = [
        {
            "name": "UID",
            "baseName": "UID",
            "type": "number"
        },
        {
            "name": "GID",
            "baseName": "GID",
            "type": "number"
        }
    ];
    return PluginConfigUser;
}());
exports.PluginConfigUser = PluginConfigUser;
var PluginDevice = (function () {
    function PluginDevice() {
    }
    PluginDevice.getAttributeTypeMap = function () {
        return PluginDevice.attributeTypeMap;
    };
    PluginDevice.discriminator = undefined;
    PluginDevice.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "settable",
            "baseName": "Settable",
            "type": "Array<string>"
        },
        {
            "name": "path",
            "baseName": "Path",
            "type": "string"
        }
    ];
    return PluginDevice;
}());
exports.PluginDevice = PluginDevice;
var PluginEnv = (function () {
    function PluginEnv() {
    }
    PluginEnv.getAttributeTypeMap = function () {
        return PluginEnv.attributeTypeMap;
    };
    PluginEnv.discriminator = undefined;
    PluginEnv.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "settable",
            "baseName": "Settable",
            "type": "Array<string>"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "string"
        }
    ];
    return PluginEnv;
}());
exports.PluginEnv = PluginEnv;
var PluginInterfaceType = (function () {
    function PluginInterfaceType() {
    }
    PluginInterfaceType.getAttributeTypeMap = function () {
        return PluginInterfaceType.attributeTypeMap;
    };
    PluginInterfaceType.discriminator = undefined;
    PluginInterfaceType.attributeTypeMap = [
        {
            "name": "prefix",
            "baseName": "Prefix",
            "type": "string"
        },
        {
            "name": "capability",
            "baseName": "Capability",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "string"
        }
    ];
    return PluginInterfaceType;
}());
exports.PluginInterfaceType = PluginInterfaceType;
var PluginMount = (function () {
    function PluginMount() {
    }
    PluginMount.getAttributeTypeMap = function () {
        return PluginMount.attributeTypeMap;
    };
    PluginMount.discriminator = undefined;
    PluginMount.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "settable",
            "baseName": "Settable",
            "type": "Array<string>"
        },
        {
            "name": "source",
            "baseName": "Source",
            "type": "string"
        },
        {
            "name": "destination",
            "baseName": "Destination",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "Array<string>"
        }
    ];
    return PluginMount;
}());
exports.PluginMount = PluginMount;
var PluginPrivilegeItem = (function () {
    function PluginPrivilegeItem() {
    }
    PluginPrivilegeItem.getAttributeTypeMap = function () {
        return PluginPrivilegeItem.attributeTypeMap;
    };
    PluginPrivilegeItem.discriminator = undefined;
    PluginPrivilegeItem.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "Description",
            "type": "string"
        },
        {
            "name": "value",
            "baseName": "Value",
            "type": "Array<string>"
        }
    ];
    return PluginPrivilegeItem;
}());
exports.PluginPrivilegeItem = PluginPrivilegeItem;
var PluginSettings = (function () {
    function PluginSettings() {
    }
    PluginSettings.getAttributeTypeMap = function () {
        return PluginSettings.attributeTypeMap;
    };
    PluginSettings.discriminator = undefined;
    PluginSettings.attributeTypeMap = [
        {
            "name": "mounts",
            "baseName": "Mounts",
            "type": "Array<PluginMount>"
        },
        {
            "name": "env",
            "baseName": "Env",
            "type": "Array<string>"
        },
        {
            "name": "args",
            "baseName": "Args",
            "type": "Array<string>"
        },
        {
            "name": "devices",
            "baseName": "Devices",
            "type": "Array<PluginDevice>"
        }
    ];
    return PluginSettings;
}());
exports.PluginSettings = PluginSettings;
var PluginsInfo = (function () {
    function PluginsInfo() {
    }
    PluginsInfo.getAttributeTypeMap = function () {
        return PluginsInfo.attributeTypeMap;
    };
    PluginsInfo.discriminator = undefined;
    PluginsInfo.attributeTypeMap = [
        {
            "name": "volume",
            "baseName": "Volume",
            "type": "Array<string>"
        },
        {
            "name": "network",
            "baseName": "Network",
            "type": "Array<string>"
        },
        {
            "name": "authorization",
            "baseName": "Authorization",
            "type": "Array<string>"
        },
        {
            "name": "log",
            "baseName": "Log",
            "type": "Array<string>"
        }
    ];
    return PluginsInfo;
}());
exports.PluginsInfo = PluginsInfo;
var Port = (function () {
    function Port() {
    }
    Port.getAttributeTypeMap = function () {
        return Port.attributeTypeMap;
    };
    Port.discriminator = undefined;
    Port.attributeTypeMap = [
        {
            "name": "IP",
            "baseName": "IP",
            "type": "string"
        },
        {
            "name": "privatePort",
            "baseName": "PrivatePort",
            "type": "number"
        },
        {
            "name": "publicPort",
            "baseName": "PublicPort",
            "type": "number"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "Port.TypeEnum"
        }
    ];
    return Port;
}());
exports.Port = Port;
(function (Port) {
    var TypeEnum;
    (function (TypeEnum) {
        TypeEnum[TypeEnum["Tcp"] = 'tcp'] = "Tcp";
        TypeEnum[TypeEnum["Udp"] = 'udp'] = "Udp";
        TypeEnum[TypeEnum["Sctp"] = 'sctp'] = "Sctp";
    })(TypeEnum = Port.TypeEnum || (Port.TypeEnum = {}));
})(Port = exports.Port || (exports.Port = {}));
exports.Port = Port;
var PortBinding = (function () {
    function PortBinding() {
    }
    PortBinding.getAttributeTypeMap = function () {
        return PortBinding.attributeTypeMap;
    };
    PortBinding.discriminator = undefined;
    PortBinding.attributeTypeMap = [
        {
            "name": "hostIp",
            "baseName": "HostIp",
            "type": "string"
        },
        {
            "name": "hostPort",
            "baseName": "HostPort",
            "type": "string"
        }
    ];
    return PortBinding;
}());
exports.PortBinding = PortBinding;
var PortMap = (function (_super) {
    __extends(PortMap, _super);
    function PortMap() {
    }
    PortMap.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(PortMap.attributeTypeMap);
    };
    PortMap.discriminator = undefined;
    PortMap.attributeTypeMap = [];
    return PortMap;
}(null));
exports.PortMap = PortMap;
var ProcessConfig = (function () {
    function ProcessConfig() {
    }
    ProcessConfig.getAttributeTypeMap = function () {
        return ProcessConfig.attributeTypeMap;
    };
    ProcessConfig.discriminator = undefined;
    ProcessConfig.attributeTypeMap = [
        {
            "name": "privileged",
            "baseName": "privileged",
            "type": "boolean"
        },
        {
            "name": "user",
            "baseName": "user",
            "type": "string"
        },
        {
            "name": "tty",
            "baseName": "tty",
            "type": "boolean"
        },
        {
            "name": "entrypoint",
            "baseName": "entrypoint",
            "type": "string"
        },
        {
            "name": "arguments",
            "baseName": "arguments",
            "type": "Array<string>"
        }
    ];
    return ProcessConfig;
}());
exports.ProcessConfig = ProcessConfig;
var ProgressDetail = (function () {
    function ProgressDetail() {
    }
    ProgressDetail.getAttributeTypeMap = function () {
        return ProgressDetail.attributeTypeMap;
    };
    ProgressDetail.discriminator = undefined;
    ProgressDetail.attributeTypeMap = [
        {
            "name": "current",
            "baseName": "current",
            "type": "number"
        },
        {
            "name": "total",
            "baseName": "total",
            "type": "number"
        }
    ];
    return ProgressDetail;
}());
exports.ProgressDetail = ProgressDetail;
var PushImageInfo = (function () {
    function PushImageInfo() {
    }
    PushImageInfo.getAttributeTypeMap = function () {
        return PushImageInfo.attributeTypeMap;
    };
    PushImageInfo.discriminator = undefined;
    PushImageInfo.attributeTypeMap = [
        {
            "name": "error",
            "baseName": "error",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "status",
            "type": "string"
        },
        {
            "name": "progress",
            "baseName": "progress",
            "type": "string"
        },
        {
            "name": "progressDetail",
            "baseName": "progressDetail",
            "type": "ProgressDetail"
        }
    ];
    return PushImageInfo;
}());
exports.PushImageInfo = PushImageInfo;
var Reachability = (function () {
    function Reachability() {
    }
    Reachability.getAttributeTypeMap = function () {
        return Reachability.attributeTypeMap;
    };
    Reachability.discriminator = undefined;
    Reachability.attributeTypeMap = [];
    return Reachability;
}());
exports.Reachability = Reachability;
var RegistryServiceConfig = (function () {
    function RegistryServiceConfig() {
    }
    RegistryServiceConfig.getAttributeTypeMap = function () {
        return RegistryServiceConfig.attributeTypeMap;
    };
    RegistryServiceConfig.discriminator = undefined;
    RegistryServiceConfig.attributeTypeMap = [
        {
            "name": "allowNondistributableArtifactsCIDRs",
            "baseName": "AllowNondistributableArtifactsCIDRs",
            "type": "Array<string>"
        },
        {
            "name": "allowNondistributableArtifactsHostnames",
            "baseName": "AllowNondistributableArtifactsHostnames",
            "type": "Array<string>"
        },
        {
            "name": "insecureRegistryCIDRs",
            "baseName": "InsecureRegistryCIDRs",
            "type": "Array<string>"
        },
        {
            "name": "indexConfigs",
            "baseName": "IndexConfigs",
            "type": "{ [key: string]: IndexInfo; }"
        },
        {
            "name": "mirrors",
            "baseName": "Mirrors",
            "type": "Array<string>"
        }
    ];
    return RegistryServiceConfig;
}());
exports.RegistryServiceConfig = RegistryServiceConfig;
var ResourceObject = (function () {
    function ResourceObject() {
    }
    ResourceObject.getAttributeTypeMap = function () {
        return ResourceObject.attributeTypeMap;
    };
    ResourceObject.discriminator = undefined;
    ResourceObject.attributeTypeMap = [
        {
            "name": "nanoCPUs",
            "baseName": "NanoCPUs",
            "type": "number"
        },
        {
            "name": "memoryBytes",
            "baseName": "MemoryBytes",
            "type": "number"
        },
        {
            "name": "genericResources",
            "baseName": "GenericResources",
            "type": "GenericResources"
        }
    ];
    return ResourceObject;
}());
exports.ResourceObject = ResourceObject;
var Resources = (function () {
    function Resources() {
    }
    Resources.getAttributeTypeMap = function () {
        return Resources.attributeTypeMap;
    };
    Resources.discriminator = undefined;
    Resources.attributeTypeMap = [
        {
            "name": "cpuShares",
            "baseName": "CpuShares",
            "type": "number"
        },
        {
            "name": "memory",
            "baseName": "Memory",
            "type": "number"
        },
        {
            "name": "cgroupParent",
            "baseName": "CgroupParent",
            "type": "string"
        },
        {
            "name": "blkioWeight",
            "baseName": "BlkioWeight",
            "type": "number"
        },
        {
            "name": "blkioWeightDevice",
            "baseName": "BlkioWeightDevice",
            "type": "Array<ResourcesBlkioWeightDevice>"
        },
        {
            "name": "blkioDeviceReadBps",
            "baseName": "BlkioDeviceReadBps",
            "type": "Array<ThrottleDevice>"
        },
        {
            "name": "blkioDeviceWriteBps",
            "baseName": "BlkioDeviceWriteBps",
            "type": "Array<ThrottleDevice>"
        },
        {
            "name": "blkioDeviceReadIOps",
            "baseName": "BlkioDeviceReadIOps",
            "type": "Array<ThrottleDevice>"
        },
        {
            "name": "blkioDeviceWriteIOps",
            "baseName": "BlkioDeviceWriteIOps",
            "type": "Array<ThrottleDevice>"
        },
        {
            "name": "cpuPeriod",
            "baseName": "CpuPeriod",
            "type": "number"
        },
        {
            "name": "cpuQuota",
            "baseName": "CpuQuota",
            "type": "number"
        },
        {
            "name": "cpuRealtimePeriod",
            "baseName": "CpuRealtimePeriod",
            "type": "number"
        },
        {
            "name": "cpuRealtimeRuntime",
            "baseName": "CpuRealtimeRuntime",
            "type": "number"
        },
        {
            "name": "cpusetCpus",
            "baseName": "CpusetCpus",
            "type": "string"
        },
        {
            "name": "cpusetMems",
            "baseName": "CpusetMems",
            "type": "string"
        },
        {
            "name": "devices",
            "baseName": "Devices",
            "type": "Array<DeviceMapping>"
        },
        {
            "name": "deviceCgroupRules",
            "baseName": "DeviceCgroupRules",
            "type": "Array<string>"
        },
        {
            "name": "deviceRequests",
            "baseName": "DeviceRequests",
            "type": "Array<DeviceRequest>"
        },
        {
            "name": "kernelMemory",
            "baseName": "KernelMemory",
            "type": "number"
        },
        {
            "name": "kernelMemoryTCP",
            "baseName": "KernelMemoryTCP",
            "type": "number"
        },
        {
            "name": "memoryReservation",
            "baseName": "MemoryReservation",
            "type": "number"
        },
        {
            "name": "memorySwap",
            "baseName": "MemorySwap",
            "type": "number"
        },
        {
            "name": "memorySwappiness",
            "baseName": "MemorySwappiness",
            "type": "number"
        },
        {
            "name": "nanoCpus",
            "baseName": "NanoCpus",
            "type": "number"
        },
        {
            "name": "oomKillDisable",
            "baseName": "OomKillDisable",
            "type": "boolean"
        },
        {
            "name": "init",
            "baseName": "Init",
            "type": "boolean"
        },
        {
            "name": "pidsLimit",
            "baseName": "PidsLimit",
            "type": "number"
        },
        {
            "name": "ulimits",
            "baseName": "Ulimits",
            "type": "Array<ResourcesUlimits>"
        },
        {
            "name": "cpuCount",
            "baseName": "CpuCount",
            "type": "number"
        },
        {
            "name": "cpuPercent",
            "baseName": "CpuPercent",
            "type": "number"
        },
        {
            "name": "iOMaximumIOps",
            "baseName": "IOMaximumIOps",
            "type": "number"
        },
        {
            "name": "iOMaximumBandwidth",
            "baseName": "IOMaximumBandwidth",
            "type": "number"
        }
    ];
    return Resources;
}());
exports.Resources = Resources;
var ResourcesBlkioWeightDevice = (function () {
    function ResourcesBlkioWeightDevice() {
    }
    ResourcesBlkioWeightDevice.getAttributeTypeMap = function () {
        return ResourcesBlkioWeightDevice.attributeTypeMap;
    };
    ResourcesBlkioWeightDevice.discriminator = undefined;
    ResourcesBlkioWeightDevice.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "Path",
            "type": "string"
        },
        {
            "name": "weight",
            "baseName": "Weight",
            "type": "number"
        }
    ];
    return ResourcesBlkioWeightDevice;
}());
exports.ResourcesBlkioWeightDevice = ResourcesBlkioWeightDevice;
var ResourcesUlimits = (function () {
    function ResourcesUlimits() {
    }
    ResourcesUlimits.getAttributeTypeMap = function () {
        return ResourcesUlimits.attributeTypeMap;
    };
    ResourcesUlimits.discriminator = undefined;
    ResourcesUlimits.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "soft",
            "baseName": "Soft",
            "type": "number"
        },
        {
            "name": "hard",
            "baseName": "Hard",
            "type": "number"
        }
    ];
    return ResourcesUlimits;
}());
exports.ResourcesUlimits = ResourcesUlimits;
var RestartPolicy = (function () {
    function RestartPolicy() {
    }
    RestartPolicy.getAttributeTypeMap = function () {
        return RestartPolicy.attributeTypeMap;
    };
    RestartPolicy.discriminator = undefined;
    RestartPolicy.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "RestartPolicy.NameEnum"
        },
        {
            "name": "maximumRetryCount",
            "baseName": "MaximumRetryCount",
            "type": "number"
        }
    ];
    return RestartPolicy;
}());
exports.RestartPolicy = RestartPolicy;
(function (RestartPolicy) {
    var NameEnum;
    (function (NameEnum) {
        NameEnum[NameEnum["Empty"] = ''] = "Empty";
        NameEnum[NameEnum["Always"] = 'always'] = "Always";
        NameEnum[NameEnum["UnlessStopped"] = 'unless-stopped'] = "UnlessStopped";
        NameEnum[NameEnum["OnFailure"] = 'on-failure'] = "OnFailure";
    })(NameEnum = RestartPolicy.NameEnum || (RestartPolicy.NameEnum = {}));
})(RestartPolicy = exports.RestartPolicy || (exports.RestartPolicy = {}));
exports.RestartPolicy = RestartPolicy;
var Runtime = (function () {
    function Runtime() {
    }
    Runtime.getAttributeTypeMap = function () {
        return Runtime.attributeTypeMap;
    };
    Runtime.discriminator = undefined;
    Runtime.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "path",
            "type": "string"
        },
        {
            "name": "runtimeArgs",
            "baseName": "runtimeArgs",
            "type": "Array<string>"
        }
    ];
    return Runtime;
}());
exports.Runtime = Runtime;
var Secret = (function () {
    function Secret() {
    }
    Secret.getAttributeTypeMap = function () {
        return Secret.attributeTypeMap;
    };
    Secret.discriminator = undefined;
    Secret.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "ObjectVersion"
        },
        {
            "name": "createdAt",
            "baseName": "CreatedAt",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "UpdatedAt",
            "type": "string"
        },
        {
            "name": "spec",
            "baseName": "Spec",
            "type": "SecretSpec"
        }
    ];
    return Secret;
}());
exports.Secret = Secret;
var SecretSpec = (function () {
    function SecretSpec() {
    }
    SecretSpec.getAttributeTypeMap = function () {
        return SecretSpec.attributeTypeMap;
    };
    SecretSpec.discriminator = undefined;
    SecretSpec.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "data",
            "baseName": "Data",
            "type": "string"
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "Driver"
        },
        {
            "name": "templating",
            "baseName": "Templating",
            "type": "Driver"
        }
    ];
    return SecretSpec;
}());
exports.SecretSpec = SecretSpec;
var Service = (function () {
    function Service() {
    }
    Service.getAttributeTypeMap = function () {
        return Service.attributeTypeMap;
    };
    Service.discriminator = undefined;
    Service.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "ObjectVersion"
        },
        {
            "name": "createdAt",
            "baseName": "CreatedAt",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "UpdatedAt",
            "type": "string"
        },
        {
            "name": "spec",
            "baseName": "Spec",
            "type": "ServiceSpec"
        },
        {
            "name": "endpoint",
            "baseName": "Endpoint",
            "type": "ServiceEndpoint"
        },
        {
            "name": "updateStatus",
            "baseName": "UpdateStatus",
            "type": "ServiceUpdateStatus"
        },
        {
            "name": "serviceStatus",
            "baseName": "ServiceStatus",
            "type": "ServiceServiceStatus"
        },
        {
            "name": "jobStatus",
            "baseName": "JobStatus",
            "type": "ServiceJobStatus"
        }
    ];
    return Service;
}());
exports.Service = Service;
var ServiceCreateResponse = (function () {
    function ServiceCreateResponse() {
    }
    ServiceCreateResponse.getAttributeTypeMap = function () {
        return ServiceCreateResponse.attributeTypeMap;
    };
    ServiceCreateResponse.discriminator = undefined;
    ServiceCreateResponse.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "warning",
            "baseName": "Warning",
            "type": "string"
        }
    ];
    return ServiceCreateResponse;
}());
exports.ServiceCreateResponse = ServiceCreateResponse;
var ServiceEndpoint = (function () {
    function ServiceEndpoint() {
    }
    ServiceEndpoint.getAttributeTypeMap = function () {
        return ServiceEndpoint.attributeTypeMap;
    };
    ServiceEndpoint.discriminator = undefined;
    ServiceEndpoint.attributeTypeMap = [
        {
            "name": "spec",
            "baseName": "Spec",
            "type": "EndpointSpec"
        },
        {
            "name": "ports",
            "baseName": "Ports",
            "type": "Array<EndpointPortConfig>"
        },
        {
            "name": "virtualIPs",
            "baseName": "VirtualIPs",
            "type": "Array<ServiceEndpointVirtualIPs>"
        }
    ];
    return ServiceEndpoint;
}());
exports.ServiceEndpoint = ServiceEndpoint;
var ServiceEndpointVirtualIPs = (function () {
    function ServiceEndpointVirtualIPs() {
    }
    ServiceEndpointVirtualIPs.getAttributeTypeMap = function () {
        return ServiceEndpointVirtualIPs.attributeTypeMap;
    };
    ServiceEndpointVirtualIPs.discriminator = undefined;
    ServiceEndpointVirtualIPs.attributeTypeMap = [
        {
            "name": "networkID",
            "baseName": "NetworkID",
            "type": "string"
        },
        {
            "name": "addr",
            "baseName": "Addr",
            "type": "string"
        }
    ];
    return ServiceEndpointVirtualIPs;
}());
exports.ServiceEndpointVirtualIPs = ServiceEndpointVirtualIPs;
var ServiceJobStatus = (function () {
    function ServiceJobStatus() {
    }
    ServiceJobStatus.getAttributeTypeMap = function () {
        return ServiceJobStatus.attributeTypeMap;
    };
    ServiceJobStatus.discriminator = undefined;
    ServiceJobStatus.attributeTypeMap = [
        {
            "name": "jobIteration",
            "baseName": "JobIteration",
            "type": "ObjectVersion"
        },
        {
            "name": "lastExecution",
            "baseName": "LastExecution",
            "type": "string"
        }
    ];
    return ServiceJobStatus;
}());
exports.ServiceJobStatus = ServiceJobStatus;
var ServiceServiceStatus = (function () {
    function ServiceServiceStatus() {
    }
    ServiceServiceStatus.getAttributeTypeMap = function () {
        return ServiceServiceStatus.attributeTypeMap;
    };
    ServiceServiceStatus.discriminator = undefined;
    ServiceServiceStatus.attributeTypeMap = [
        {
            "name": "runningTasks",
            "baseName": "RunningTasks",
            "type": "number"
        },
        {
            "name": "desiredTasks",
            "baseName": "DesiredTasks",
            "type": "number"
        },
        {
            "name": "completedTasks",
            "baseName": "CompletedTasks",
            "type": "number"
        }
    ];
    return ServiceServiceStatus;
}());
exports.ServiceServiceStatus = ServiceServiceStatus;
var ServiceSpec = (function () {
    function ServiceSpec() {
    }
    ServiceSpec.getAttributeTypeMap = function () {
        return ServiceSpec.attributeTypeMap;
    };
    ServiceSpec.discriminator = undefined;
    ServiceSpec.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "taskTemplate",
            "baseName": "TaskTemplate",
            "type": "TaskSpec"
        },
        {
            "name": "mode",
            "baseName": "Mode",
            "type": "ServiceSpecMode"
        },
        {
            "name": "updateConfig",
            "baseName": "UpdateConfig",
            "type": "ServiceSpecUpdateConfig"
        },
        {
            "name": "rollbackConfig",
            "baseName": "RollbackConfig",
            "type": "ServiceSpecRollbackConfig"
        },
        {
            "name": "networks",
            "baseName": "Networks",
            "type": "Array<NetworkAttachmentConfig>"
        },
        {
            "name": "endpointSpec",
            "baseName": "EndpointSpec",
            "type": "EndpointSpec"
        }
    ];
    return ServiceSpec;
}());
exports.ServiceSpec = ServiceSpec;
var ServiceSpecMode = (function () {
    function ServiceSpecMode() {
    }
    ServiceSpecMode.getAttributeTypeMap = function () {
        return ServiceSpecMode.attributeTypeMap;
    };
    ServiceSpecMode.discriminator = undefined;
    ServiceSpecMode.attributeTypeMap = [
        {
            "name": "replicated",
            "baseName": "Replicated",
            "type": "ServiceSpecModeReplicated"
        },
        {
            "name": "global",
            "baseName": "Global",
            "type": "any"
        },
        {
            "name": "replicatedJob",
            "baseName": "ReplicatedJob",
            "type": "ServiceSpecModeReplicatedJob"
        },
        {
            "name": "globalJob",
            "baseName": "GlobalJob",
            "type": "any"
        }
    ];
    return ServiceSpecMode;
}());
exports.ServiceSpecMode = ServiceSpecMode;
var ServiceSpecModeReplicated = (function () {
    function ServiceSpecModeReplicated() {
    }
    ServiceSpecModeReplicated.getAttributeTypeMap = function () {
        return ServiceSpecModeReplicated.attributeTypeMap;
    };
    ServiceSpecModeReplicated.discriminator = undefined;
    ServiceSpecModeReplicated.attributeTypeMap = [
        {
            "name": "replicas",
            "baseName": "Replicas",
            "type": "number"
        }
    ];
    return ServiceSpecModeReplicated;
}());
exports.ServiceSpecModeReplicated = ServiceSpecModeReplicated;
var ServiceSpecModeReplicatedJob = (function () {
    function ServiceSpecModeReplicatedJob() {
    }
    ServiceSpecModeReplicatedJob.getAttributeTypeMap = function () {
        return ServiceSpecModeReplicatedJob.attributeTypeMap;
    };
    ServiceSpecModeReplicatedJob.discriminator = undefined;
    ServiceSpecModeReplicatedJob.attributeTypeMap = [
        {
            "name": "maxConcurrent",
            "baseName": "MaxConcurrent",
            "type": "number"
        },
        {
            "name": "totalCompletions",
            "baseName": "TotalCompletions",
            "type": "number"
        }
    ];
    return ServiceSpecModeReplicatedJob;
}());
exports.ServiceSpecModeReplicatedJob = ServiceSpecModeReplicatedJob;
var ServiceSpecRollbackConfig = (function () {
    function ServiceSpecRollbackConfig() {
    }
    ServiceSpecRollbackConfig.getAttributeTypeMap = function () {
        return ServiceSpecRollbackConfig.attributeTypeMap;
    };
    ServiceSpecRollbackConfig.discriminator = undefined;
    ServiceSpecRollbackConfig.attributeTypeMap = [
        {
            "name": "parallelism",
            "baseName": "Parallelism",
            "type": "number"
        },
        {
            "name": "delay",
            "baseName": "Delay",
            "type": "number"
        },
        {
            "name": "failureAction",
            "baseName": "FailureAction",
            "type": "ServiceSpecRollbackConfig.FailureActionEnum"
        },
        {
            "name": "monitor",
            "baseName": "Monitor",
            "type": "number"
        },
        {
            "name": "maxFailureRatio",
            "baseName": "MaxFailureRatio",
            "type": "number"
        },
        {
            "name": "order",
            "baseName": "Order",
            "type": "ServiceSpecRollbackConfig.OrderEnum"
        }
    ];
    return ServiceSpecRollbackConfig;
}());
exports.ServiceSpecRollbackConfig = ServiceSpecRollbackConfig;
(function (ServiceSpecRollbackConfig) {
    var FailureActionEnum;
    (function (FailureActionEnum) {
        FailureActionEnum[FailureActionEnum["Continue"] = 'continue'] = "Continue";
        FailureActionEnum[FailureActionEnum["Pause"] = 'pause'] = "Pause";
    })(FailureActionEnum = ServiceSpecRollbackConfig.FailureActionEnum || (ServiceSpecRollbackConfig.FailureActionEnum = {}));
    var OrderEnum;
    (function (OrderEnum) {
        OrderEnum[OrderEnum["StopFirst"] = 'stop-first'] = "StopFirst";
        OrderEnum[OrderEnum["StartFirst"] = 'start-first'] = "StartFirst";
    })(OrderEnum = ServiceSpecRollbackConfig.OrderEnum || (ServiceSpecRollbackConfig.OrderEnum = {}));
})(ServiceSpecRollbackConfig = exports.ServiceSpecRollbackConfig || (exports.ServiceSpecRollbackConfig = {}));
exports.ServiceSpecRollbackConfig = ServiceSpecRollbackConfig;
var ServiceSpecUpdateConfig = (function () {
    function ServiceSpecUpdateConfig() {
    }
    ServiceSpecUpdateConfig.getAttributeTypeMap = function () {
        return ServiceSpecUpdateConfig.attributeTypeMap;
    };
    ServiceSpecUpdateConfig.discriminator = undefined;
    ServiceSpecUpdateConfig.attributeTypeMap = [
        {
            "name": "parallelism",
            "baseName": "Parallelism",
            "type": "number"
        },
        {
            "name": "delay",
            "baseName": "Delay",
            "type": "number"
        },
        {
            "name": "failureAction",
            "baseName": "FailureAction",
            "type": "ServiceSpecUpdateConfig.FailureActionEnum"
        },
        {
            "name": "monitor",
            "baseName": "Monitor",
            "type": "number"
        },
        {
            "name": "maxFailureRatio",
            "baseName": "MaxFailureRatio",
            "type": "number"
        },
        {
            "name": "order",
            "baseName": "Order",
            "type": "ServiceSpecUpdateConfig.OrderEnum"
        }
    ];
    return ServiceSpecUpdateConfig;
}());
exports.ServiceSpecUpdateConfig = ServiceSpecUpdateConfig;
(function (ServiceSpecUpdateConfig) {
    var FailureActionEnum;
    (function (FailureActionEnum) {
        FailureActionEnum[FailureActionEnum["Continue"] = 'continue'] = "Continue";
        FailureActionEnum[FailureActionEnum["Pause"] = 'pause'] = "Pause";
        FailureActionEnum[FailureActionEnum["Rollback"] = 'rollback'] = "Rollback";
    })(FailureActionEnum = ServiceSpecUpdateConfig.FailureActionEnum || (ServiceSpecUpdateConfig.FailureActionEnum = {}));
    var OrderEnum;
    (function (OrderEnum) {
        OrderEnum[OrderEnum["StopFirst"] = 'stop-first'] = "StopFirst";
        OrderEnum[OrderEnum["StartFirst"] = 'start-first'] = "StartFirst";
    })(OrderEnum = ServiceSpecUpdateConfig.OrderEnum || (ServiceSpecUpdateConfig.OrderEnum = {}));
})(ServiceSpecUpdateConfig = exports.ServiceSpecUpdateConfig || (exports.ServiceSpecUpdateConfig = {}));
exports.ServiceSpecUpdateConfig = ServiceSpecUpdateConfig;
var ServiceUpdateResponse = (function () {
    function ServiceUpdateResponse() {
    }
    ServiceUpdateResponse.getAttributeTypeMap = function () {
        return ServiceUpdateResponse.attributeTypeMap;
    };
    ServiceUpdateResponse.discriminator = undefined;
    ServiceUpdateResponse.attributeTypeMap = [
        {
            "name": "warnings",
            "baseName": "Warnings",
            "type": "Array<string>"
        }
    ];
    return ServiceUpdateResponse;
}());
exports.ServiceUpdateResponse = ServiceUpdateResponse;
var ServiceUpdateStatus = (function () {
    function ServiceUpdateStatus() {
    }
    ServiceUpdateStatus.getAttributeTypeMap = function () {
        return ServiceUpdateStatus.attributeTypeMap;
    };
    ServiceUpdateStatus.discriminator = undefined;
    ServiceUpdateStatus.attributeTypeMap = [
        {
            "name": "state",
            "baseName": "State",
            "type": "ServiceUpdateStatus.StateEnum"
        },
        {
            "name": "startedAt",
            "baseName": "StartedAt",
            "type": "string"
        },
        {
            "name": "completedAt",
            "baseName": "CompletedAt",
            "type": "string"
        },
        {
            "name": "message",
            "baseName": "Message",
            "type": "string"
        }
    ];
    return ServiceUpdateStatus;
}());
exports.ServiceUpdateStatus = ServiceUpdateStatus;
(function (ServiceUpdateStatus) {
    var StateEnum;
    (function (StateEnum) {
        StateEnum[StateEnum["Updating"] = 'updating'] = "Updating";
        StateEnum[StateEnum["Paused"] = 'paused'] = "Paused";
        StateEnum[StateEnum["Completed"] = 'completed'] = "Completed";
    })(StateEnum = ServiceUpdateStatus.StateEnum || (ServiceUpdateStatus.StateEnum = {}));
})(ServiceUpdateStatus = exports.ServiceUpdateStatus || (exports.ServiceUpdateStatus = {}));
exports.ServiceUpdateStatus = ServiceUpdateStatus;
var Swarm = (function (_super) {
    __extends(Swarm, _super);
    function Swarm() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Swarm.getAttributeTypeMap = function () {
        return _super.getAttributeTypeMap.call(this).concat(Swarm.attributeTypeMap);
    };
    Swarm.discriminator = undefined;
    Swarm.attributeTypeMap = [
        {
            "name": "joinTokens",
            "baseName": "JoinTokens",
            "type": "JoinTokens"
        }
    ];
    return Swarm;
}(ClusterInfo));
exports.Swarm = Swarm;
var SwarmInfo = (function () {
    function SwarmInfo() {
    }
    SwarmInfo.getAttributeTypeMap = function () {
        return SwarmInfo.attributeTypeMap;
    };
    SwarmInfo.discriminator = undefined;
    SwarmInfo.attributeTypeMap = [
        {
            "name": "nodeID",
            "baseName": "NodeID",
            "type": "string"
        },
        {
            "name": "nodeAddr",
            "baseName": "NodeAddr",
            "type": "string"
        },
        {
            "name": "localNodeState",
            "baseName": "LocalNodeState",
            "type": "LocalNodeState"
        },
        {
            "name": "controlAvailable",
            "baseName": "ControlAvailable",
            "type": "boolean"
        },
        {
            "name": "error",
            "baseName": "Error",
            "type": "string"
        },
        {
            "name": "remoteManagers",
            "baseName": "RemoteManagers",
            "type": "Array<PeerNode>"
        },
        {
            "name": "nodes",
            "baseName": "Nodes",
            "type": "number"
        },
        {
            "name": "managers",
            "baseName": "Managers",
            "type": "number"
        },
        {
            "name": "cluster",
            "baseName": "Cluster",
            "type": "ClusterInfo"
        }
    ];
    return SwarmInfo;
}());
exports.SwarmInfo = SwarmInfo;
var SwarmSpec = (function () {
    function SwarmSpec() {
    }
    SwarmSpec.getAttributeTypeMap = function () {
        return SwarmSpec.attributeTypeMap;
    };
    SwarmSpec.discriminator = undefined;
    SwarmSpec.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "orchestration",
            "baseName": "Orchestration",
            "type": "SwarmSpecOrchestration"
        },
        {
            "name": "raft",
            "baseName": "Raft",
            "type": "SwarmSpecRaft"
        },
        {
            "name": "dispatcher",
            "baseName": "Dispatcher",
            "type": "SwarmSpecDispatcher"
        },
        {
            "name": "cAConfig",
            "baseName": "CAConfig",
            "type": "SwarmSpecCAConfig"
        },
        {
            "name": "encryptionConfig",
            "baseName": "EncryptionConfig",
            "type": "SwarmSpecEncryptionConfig"
        },
        {
            "name": "taskDefaults",
            "baseName": "TaskDefaults",
            "type": "SwarmSpecTaskDefaults"
        }
    ];
    return SwarmSpec;
}());
exports.SwarmSpec = SwarmSpec;
var SwarmSpecCAConfig = (function () {
    function SwarmSpecCAConfig() {
    }
    SwarmSpecCAConfig.getAttributeTypeMap = function () {
        return SwarmSpecCAConfig.attributeTypeMap;
    };
    SwarmSpecCAConfig.discriminator = undefined;
    SwarmSpecCAConfig.attributeTypeMap = [
        {
            "name": "nodeCertExpiry",
            "baseName": "NodeCertExpiry",
            "type": "number"
        },
        {
            "name": "externalCAs",
            "baseName": "ExternalCAs",
            "type": "Array<SwarmSpecCAConfigExternalCAs>"
        },
        {
            "name": "signingCACert",
            "baseName": "SigningCACert",
            "type": "string"
        },
        {
            "name": "signingCAKey",
            "baseName": "SigningCAKey",
            "type": "string"
        },
        {
            "name": "forceRotate",
            "baseName": "ForceRotate",
            "type": "number"
        }
    ];
    return SwarmSpecCAConfig;
}());
exports.SwarmSpecCAConfig = SwarmSpecCAConfig;
var SwarmSpecCAConfigExternalCAs = (function () {
    function SwarmSpecCAConfigExternalCAs() {
    }
    SwarmSpecCAConfigExternalCAs.getAttributeTypeMap = function () {
        return SwarmSpecCAConfigExternalCAs.attributeTypeMap;
    };
    SwarmSpecCAConfigExternalCAs.discriminator = undefined;
    SwarmSpecCAConfigExternalCAs.attributeTypeMap = [
        {
            "name": "protocol",
            "baseName": "Protocol",
            "type": "SwarmSpecCAConfigExternalCAs.ProtocolEnum"
        },
        {
            "name": "URL",
            "baseName": "URL",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "cACert",
            "baseName": "CACert",
            "type": "string"
        }
    ];
    return SwarmSpecCAConfigExternalCAs;
}());
exports.SwarmSpecCAConfigExternalCAs = SwarmSpecCAConfigExternalCAs;
(function (SwarmSpecCAConfigExternalCAs) {
    var ProtocolEnum;
    (function (ProtocolEnum) {
        ProtocolEnum[ProtocolEnum["Cfssl"] = 'cfssl'] = "Cfssl";
    })(ProtocolEnum = SwarmSpecCAConfigExternalCAs.ProtocolEnum || (SwarmSpecCAConfigExternalCAs.ProtocolEnum = {}));
})(SwarmSpecCAConfigExternalCAs = exports.SwarmSpecCAConfigExternalCAs || (exports.SwarmSpecCAConfigExternalCAs = {}));
exports.SwarmSpecCAConfigExternalCAs = SwarmSpecCAConfigExternalCAs;
var SwarmSpecDispatcher = (function () {
    function SwarmSpecDispatcher() {
    }
    SwarmSpecDispatcher.getAttributeTypeMap = function () {
        return SwarmSpecDispatcher.attributeTypeMap;
    };
    SwarmSpecDispatcher.discriminator = undefined;
    SwarmSpecDispatcher.attributeTypeMap = [
        {
            "name": "heartbeatPeriod",
            "baseName": "HeartbeatPeriod",
            "type": "number"
        }
    ];
    return SwarmSpecDispatcher;
}());
exports.SwarmSpecDispatcher = SwarmSpecDispatcher;
var SwarmSpecEncryptionConfig = (function () {
    function SwarmSpecEncryptionConfig() {
    }
    SwarmSpecEncryptionConfig.getAttributeTypeMap = function () {
        return SwarmSpecEncryptionConfig.attributeTypeMap;
    };
    SwarmSpecEncryptionConfig.discriminator = undefined;
    SwarmSpecEncryptionConfig.attributeTypeMap = [
        {
            "name": "autoLockManagers",
            "baseName": "AutoLockManagers",
            "type": "boolean"
        }
    ];
    return SwarmSpecEncryptionConfig;
}());
exports.SwarmSpecEncryptionConfig = SwarmSpecEncryptionConfig;
var SwarmSpecOrchestration = (function () {
    function SwarmSpecOrchestration() {
    }
    SwarmSpecOrchestration.getAttributeTypeMap = function () {
        return SwarmSpecOrchestration.attributeTypeMap;
    };
    SwarmSpecOrchestration.discriminator = undefined;
    SwarmSpecOrchestration.attributeTypeMap = [
        {
            "name": "taskHistoryRetentionLimit",
            "baseName": "TaskHistoryRetentionLimit",
            "type": "number"
        }
    ];
    return SwarmSpecOrchestration;
}());
exports.SwarmSpecOrchestration = SwarmSpecOrchestration;
var SwarmSpecRaft = (function () {
    function SwarmSpecRaft() {
    }
    SwarmSpecRaft.getAttributeTypeMap = function () {
        return SwarmSpecRaft.attributeTypeMap;
    };
    SwarmSpecRaft.discriminator = undefined;
    SwarmSpecRaft.attributeTypeMap = [
        {
            "name": "snapshotInterval",
            "baseName": "SnapshotInterval",
            "type": "number"
        },
        {
            "name": "keepOldSnapshots",
            "baseName": "KeepOldSnapshots",
            "type": "number"
        },
        {
            "name": "logEntriesForSlowFollowers",
            "baseName": "LogEntriesForSlowFollowers",
            "type": "number"
        },
        {
            "name": "electionTick",
            "baseName": "ElectionTick",
            "type": "number"
        },
        {
            "name": "heartbeatTick",
            "baseName": "HeartbeatTick",
            "type": "number"
        }
    ];
    return SwarmSpecRaft;
}());
exports.SwarmSpecRaft = SwarmSpecRaft;
var SwarmSpecTaskDefaults = (function () {
    function SwarmSpecTaskDefaults() {
    }
    SwarmSpecTaskDefaults.getAttributeTypeMap = function () {
        return SwarmSpecTaskDefaults.attributeTypeMap;
    };
    SwarmSpecTaskDefaults.discriminator = undefined;
    SwarmSpecTaskDefaults.attributeTypeMap = [
        {
            "name": "logDriver",
            "baseName": "LogDriver",
            "type": "SwarmSpecTaskDefaultsLogDriver"
        }
    ];
    return SwarmSpecTaskDefaults;
}());
exports.SwarmSpecTaskDefaults = SwarmSpecTaskDefaults;
var SwarmSpecTaskDefaultsLogDriver = (function () {
    function SwarmSpecTaskDefaultsLogDriver() {
    }
    SwarmSpecTaskDefaultsLogDriver.getAttributeTypeMap = function () {
        return SwarmSpecTaskDefaultsLogDriver.attributeTypeMap;
    };
    SwarmSpecTaskDefaultsLogDriver.discriminator = undefined;
    SwarmSpecTaskDefaultsLogDriver.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        }
    ];
    return SwarmSpecTaskDefaultsLogDriver;
}());
exports.SwarmSpecTaskDefaultsLogDriver = SwarmSpecTaskDefaultsLogDriver;
var SystemAuthResponse = (function () {
    function SystemAuthResponse() {
    }
    SystemAuthResponse.getAttributeTypeMap = function () {
        return SystemAuthResponse.attributeTypeMap;
    };
    SystemAuthResponse.discriminator = undefined;
    SystemAuthResponse.attributeTypeMap = [
        {
            "name": "status",
            "baseName": "Status",
            "type": "string"
        },
        {
            "name": "identityToken",
            "baseName": "IdentityToken",
            "type": "string"
        }
    ];
    return SystemAuthResponse;
}());
exports.SystemAuthResponse = SystemAuthResponse;
var SystemDataUsageResponse = (function () {
    function SystemDataUsageResponse() {
    }
    SystemDataUsageResponse.getAttributeTypeMap = function () {
        return SystemDataUsageResponse.attributeTypeMap;
    };
    SystemDataUsageResponse.discriminator = undefined;
    SystemDataUsageResponse.attributeTypeMap = [
        {
            "name": "layersSize",
            "baseName": "LayersSize",
            "type": "number"
        },
        {
            "name": "images",
            "baseName": "Images",
            "type": "Array<ImageSummary>"
        },
        {
            "name": "containers",
            "baseName": "Containers",
            "type": "Array<ContainerSummary>"
        },
        {
            "name": "volumes",
            "baseName": "Volumes",
            "type": "Array<Volume>"
        },
        {
            "name": "buildCache",
            "baseName": "BuildCache",
            "type": "Array<BuildCache>"
        }
    ];
    return SystemDataUsageResponse;
}());
exports.SystemDataUsageResponse = SystemDataUsageResponse;
var SystemEventsResponse = (function () {
    function SystemEventsResponse() {
    }
    SystemEventsResponse.getAttributeTypeMap = function () {
        return SystemEventsResponse.attributeTypeMap;
    };
    SystemEventsResponse.discriminator = undefined;
    SystemEventsResponse.attributeTypeMap = [
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "action",
            "baseName": "Action",
            "type": "string"
        },
        {
            "name": "actor",
            "baseName": "Actor",
            "type": "SystemEventsResponseActor"
        },
        {
            "name": "time",
            "baseName": "time",
            "type": "number"
        },
        {
            "name": "timeNano",
            "baseName": "timeNano",
            "type": "number"
        }
    ];
    return SystemEventsResponse;
}());
exports.SystemEventsResponse = SystemEventsResponse;
var SystemEventsResponseActor = (function () {
    function SystemEventsResponseActor() {
    }
    SystemEventsResponseActor.getAttributeTypeMap = function () {
        return SystemEventsResponseActor.attributeTypeMap;
    };
    SystemEventsResponseActor.discriminator = undefined;
    SystemEventsResponseActor.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "attributes",
            "baseName": "Attributes",
            "type": "{ [key: string]: string; }"
        }
    ];
    return SystemEventsResponseActor;
}());
exports.SystemEventsResponseActor = SystemEventsResponseActor;
var SystemInfo = (function () {
    function SystemInfo() {
    }
    SystemInfo.getAttributeTypeMap = function () {
        return SystemInfo.attributeTypeMap;
    };
    SystemInfo.discriminator = undefined;
    SystemInfo.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "containers",
            "baseName": "Containers",
            "type": "number"
        },
        {
            "name": "containersRunning",
            "baseName": "ContainersRunning",
            "type": "number"
        },
        {
            "name": "containersPaused",
            "baseName": "ContainersPaused",
            "type": "number"
        },
        {
            "name": "containersStopped",
            "baseName": "ContainersStopped",
            "type": "number"
        },
        {
            "name": "images",
            "baseName": "Images",
            "type": "number"
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "driverStatus",
            "baseName": "DriverStatus",
            "type": "Array<Array<string>>"
        },
        {
            "name": "dockerRootDir",
            "baseName": "DockerRootDir",
            "type": "string"
        },
        {
            "name": "plugins",
            "baseName": "Plugins",
            "type": "PluginsInfo"
        },
        {
            "name": "memoryLimit",
            "baseName": "MemoryLimit",
            "type": "boolean"
        },
        {
            "name": "swapLimit",
            "baseName": "SwapLimit",
            "type": "boolean"
        },
        {
            "name": "kernelMemory",
            "baseName": "KernelMemory",
            "type": "boolean"
        },
        {
            "name": "cpuCfsPeriod",
            "baseName": "CpuCfsPeriod",
            "type": "boolean"
        },
        {
            "name": "cpuCfsQuota",
            "baseName": "CpuCfsQuota",
            "type": "boolean"
        },
        {
            "name": "cPUShares",
            "baseName": "CPUShares",
            "type": "boolean"
        },
        {
            "name": "cPUSet",
            "baseName": "CPUSet",
            "type": "boolean"
        },
        {
            "name": "pidsLimit",
            "baseName": "PidsLimit",
            "type": "boolean"
        },
        {
            "name": "oomKillDisable",
            "baseName": "OomKillDisable",
            "type": "boolean"
        },
        {
            "name": "iPv4Forwarding",
            "baseName": "IPv4Forwarding",
            "type": "boolean"
        },
        {
            "name": "bridgeNfIptables",
            "baseName": "BridgeNfIptables",
            "type": "boolean"
        },
        {
            "name": "bridgeNfIp6tables",
            "baseName": "BridgeNfIp6tables",
            "type": "boolean"
        },
        {
            "name": "debug",
            "baseName": "Debug",
            "type": "boolean"
        },
        {
            "name": "nFd",
            "baseName": "NFd",
            "type": "number"
        },
        {
            "name": "nGoroutines",
            "baseName": "NGoroutines",
            "type": "number"
        },
        {
            "name": "systemTime",
            "baseName": "SystemTime",
            "type": "string"
        },
        {
            "name": "loggingDriver",
            "baseName": "LoggingDriver",
            "type": "string"
        },
        {
            "name": "cgroupDriver",
            "baseName": "CgroupDriver",
            "type": "SystemInfo.CgroupDriverEnum"
        },
        {
            "name": "cgroupVersion",
            "baseName": "CgroupVersion",
            "type": "SystemInfo.CgroupVersionEnum"
        },
        {
            "name": "nEventsListener",
            "baseName": "NEventsListener",
            "type": "number"
        },
        {
            "name": "kernelVersion",
            "baseName": "KernelVersion",
            "type": "string"
        },
        {
            "name": "operatingSystem",
            "baseName": "OperatingSystem",
            "type": "string"
        },
        {
            "name": "oSVersion",
            "baseName": "OSVersion",
            "type": "string"
        },
        {
            "name": "oSType",
            "baseName": "OSType",
            "type": "string"
        },
        {
            "name": "architecture",
            "baseName": "Architecture",
            "type": "string"
        },
        {
            "name": "NCPU",
            "baseName": "NCPU",
            "type": "number"
        },
        {
            "name": "memTotal",
            "baseName": "MemTotal",
            "type": "number"
        },
        {
            "name": "indexServerAddress",
            "baseName": "IndexServerAddress",
            "type": "string"
        },
        {
            "name": "registryConfig",
            "baseName": "RegistryConfig",
            "type": "RegistryServiceConfig"
        },
        {
            "name": "genericResources",
            "baseName": "GenericResources",
            "type": "GenericResources"
        },
        {
            "name": "httpProxy",
            "baseName": "HttpProxy",
            "type": "string"
        },
        {
            "name": "httpsProxy",
            "baseName": "HttpsProxy",
            "type": "string"
        },
        {
            "name": "noProxy",
            "baseName": "NoProxy",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "Array<string>"
        },
        {
            "name": "experimentalBuild",
            "baseName": "ExperimentalBuild",
            "type": "boolean"
        },
        {
            "name": "serverVersion",
            "baseName": "ServerVersion",
            "type": "string"
        },
        {
            "name": "clusterStore",
            "baseName": "ClusterStore",
            "type": "string"
        },
        {
            "name": "clusterAdvertise",
            "baseName": "ClusterAdvertise",
            "type": "string"
        },
        {
            "name": "runtimes",
            "baseName": "Runtimes",
            "type": "{ [key: string]: Runtime; }"
        },
        {
            "name": "defaultRuntime",
            "baseName": "DefaultRuntime",
            "type": "string"
        },
        {
            "name": "swarm",
            "baseName": "Swarm",
            "type": "SwarmInfo"
        },
        {
            "name": "liveRestoreEnabled",
            "baseName": "LiveRestoreEnabled",
            "type": "boolean"
        },
        {
            "name": "isolation",
            "baseName": "Isolation",
            "type": "SystemInfo.IsolationEnum"
        },
        {
            "name": "initBinary",
            "baseName": "InitBinary",
            "type": "string"
        },
        {
            "name": "containerdCommit",
            "baseName": "ContainerdCommit",
            "type": "Commit"
        },
        {
            "name": "runcCommit",
            "baseName": "RuncCommit",
            "type": "Commit"
        },
        {
            "name": "initCommit",
            "baseName": "InitCommit",
            "type": "Commit"
        },
        {
            "name": "securityOptions",
            "baseName": "SecurityOptions",
            "type": "Array<string>"
        },
        {
            "name": "productLicense",
            "baseName": "ProductLicense",
            "type": "string"
        },
        {
            "name": "defaultAddressPools",
            "baseName": "DefaultAddressPools",
            "type": "Array<SystemInfoDefaultAddressPools>"
        },
        {
            "name": "warnings",
            "baseName": "Warnings",
            "type": "Array<string>"
        }
    ];
    return SystemInfo;
}());
exports.SystemInfo = SystemInfo;
(function (SystemInfo) {
    var CgroupDriverEnum;
    (function (CgroupDriverEnum) {
        CgroupDriverEnum[CgroupDriverEnum["Cgroupfs"] = 'cgroupfs'] = "Cgroupfs";
        CgroupDriverEnum[CgroupDriverEnum["Systemd"] = 'systemd'] = "Systemd";
        CgroupDriverEnum[CgroupDriverEnum["None"] = 'none'] = "None";
    })(CgroupDriverEnum = SystemInfo.CgroupDriverEnum || (SystemInfo.CgroupDriverEnum = {}));
    var CgroupVersionEnum;
    (function (CgroupVersionEnum) {
        CgroupVersionEnum[CgroupVersionEnum["_1"] = '1'] = "_1";
        CgroupVersionEnum[CgroupVersionEnum["_2"] = '2'] = "_2";
    })(CgroupVersionEnum = SystemInfo.CgroupVersionEnum || (SystemInfo.CgroupVersionEnum = {}));
    var IsolationEnum;
    (function (IsolationEnum) {
        IsolationEnum[IsolationEnum["Default"] = 'default'] = "Default";
        IsolationEnum[IsolationEnum["Hyperv"] = 'hyperv'] = "Hyperv";
        IsolationEnum[IsolationEnum["Process"] = 'process'] = "Process";
    })(IsolationEnum = SystemInfo.IsolationEnum || (SystemInfo.IsolationEnum = {}));
})(SystemInfo = exports.SystemInfo || (exports.SystemInfo = {}));
exports.SystemInfo = SystemInfo;
var SystemInfoDefaultAddressPools = (function () {
    function SystemInfoDefaultAddressPools() {
    }
    SystemInfoDefaultAddressPools.getAttributeTypeMap = function () {
        return SystemInfoDefaultAddressPools.attributeTypeMap;
    };
    SystemInfoDefaultAddressPools.discriminator = undefined;
    SystemInfoDefaultAddressPools.attributeTypeMap = [
        {
            "name": "base",
            "baseName": "Base",
            "type": "string"
        },
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        }
    ];
    return SystemInfoDefaultAddressPools;
}());
exports.SystemInfoDefaultAddressPools = SystemInfoDefaultAddressPools;
var SystemVersion = (function () {
    function SystemVersion() {
    }
    SystemVersion.getAttributeTypeMap = function () {
        return SystemVersion.attributeTypeMap;
    };
    SystemVersion.discriminator = undefined;
    SystemVersion.attributeTypeMap = [
        {
            "name": "platform",
            "baseName": "Platform",
            "type": "SystemVersionPlatform"
        },
        {
            "name": "components",
            "baseName": "Components",
            "type": "Array<SystemVersionComponents>"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "string"
        },
        {
            "name": "apiVersion",
            "baseName": "ApiVersion",
            "type": "string"
        },
        {
            "name": "minAPIVersion",
            "baseName": "MinAPIVersion",
            "type": "string"
        },
        {
            "name": "gitCommit",
            "baseName": "GitCommit",
            "type": "string"
        },
        {
            "name": "goVersion",
            "baseName": "GoVersion",
            "type": "string"
        },
        {
            "name": "os",
            "baseName": "Os",
            "type": "string"
        },
        {
            "name": "arch",
            "baseName": "Arch",
            "type": "string"
        },
        {
            "name": "kernelVersion",
            "baseName": "KernelVersion",
            "type": "string"
        },
        {
            "name": "experimental",
            "baseName": "Experimental",
            "type": "boolean"
        },
        {
            "name": "buildTime",
            "baseName": "BuildTime",
            "type": "string"
        }
    ];
    return SystemVersion;
}());
exports.SystemVersion = SystemVersion;
var SystemVersionComponents = (function () {
    function SystemVersionComponents() {
    }
    SystemVersionComponents.getAttributeTypeMap = function () {
        return SystemVersionComponents.attributeTypeMap;
    };
    SystemVersionComponents.discriminator = undefined;
    SystemVersionComponents.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "string"
        },
        {
            "name": "details",
            "baseName": "Details",
            "type": "any"
        }
    ];
    return SystemVersionComponents;
}());
exports.SystemVersionComponents = SystemVersionComponents;
var SystemVersionPlatform = (function () {
    function SystemVersionPlatform() {
    }
    SystemVersionPlatform.getAttributeTypeMap = function () {
        return SystemVersionPlatform.attributeTypeMap;
    };
    SystemVersionPlatform.discriminator = undefined;
    SystemVersionPlatform.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        }
    ];
    return SystemVersionPlatform;
}());
exports.SystemVersionPlatform = SystemVersionPlatform;
var TLSInfo = (function () {
    function TLSInfo() {
    }
    TLSInfo.getAttributeTypeMap = function () {
        return TLSInfo.attributeTypeMap;
    };
    TLSInfo.discriminator = undefined;
    TLSInfo.attributeTypeMap = [
        {
            "name": "trustRoot",
            "baseName": "TrustRoot",
            "type": "string"
        },
        {
            "name": "certIssuerSubject",
            "baseName": "CertIssuerSubject",
            "type": "string"
        },
        {
            "name": "certIssuerPublicKey",
            "baseName": "CertIssuerPublicKey",
            "type": "string"
        }
    ];
    return TLSInfo;
}());
exports.TLSInfo = TLSInfo;
var Task = (function () {
    function Task() {
    }
    Task.getAttributeTypeMap = function () {
        return Task.attributeTypeMap;
    };
    Task.discriminator = undefined;
    Task.attributeTypeMap = [
        {
            "name": "ID",
            "baseName": "ID",
            "type": "string"
        },
        {
            "name": "version",
            "baseName": "Version",
            "type": "ObjectVersion"
        },
        {
            "name": "createdAt",
            "baseName": "CreatedAt",
            "type": "string"
        },
        {
            "name": "updatedAt",
            "baseName": "UpdatedAt",
            "type": "string"
        },
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "spec",
            "baseName": "Spec",
            "type": "TaskSpec"
        },
        {
            "name": "serviceID",
            "baseName": "ServiceID",
            "type": "string"
        },
        {
            "name": "slot",
            "baseName": "Slot",
            "type": "number"
        },
        {
            "name": "nodeID",
            "baseName": "NodeID",
            "type": "string"
        },
        {
            "name": "assignedGenericResources",
            "baseName": "AssignedGenericResources",
            "type": "GenericResources"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "TaskStatus"
        },
        {
            "name": "desiredState",
            "baseName": "DesiredState",
            "type": "TaskState"
        },
        {
            "name": "jobIteration",
            "baseName": "JobIteration",
            "type": "ObjectVersion"
        }
    ];
    return Task;
}());
exports.Task = Task;
var TaskSpec = (function () {
    function TaskSpec() {
    }
    TaskSpec.getAttributeTypeMap = function () {
        return TaskSpec.attributeTypeMap;
    };
    TaskSpec.discriminator = undefined;
    TaskSpec.attributeTypeMap = [
        {
            "name": "pluginSpec",
            "baseName": "PluginSpec",
            "type": "TaskSpecPluginSpec"
        },
        {
            "name": "containerSpec",
            "baseName": "ContainerSpec",
            "type": "TaskSpecContainerSpec"
        },
        {
            "name": "networkAttachmentSpec",
            "baseName": "NetworkAttachmentSpec",
            "type": "TaskSpecNetworkAttachmentSpec"
        },
        {
            "name": "resources",
            "baseName": "Resources",
            "type": "TaskSpecResources"
        },
        {
            "name": "restartPolicy",
            "baseName": "RestartPolicy",
            "type": "TaskSpecRestartPolicy"
        },
        {
            "name": "placement",
            "baseName": "Placement",
            "type": "TaskSpecPlacement"
        },
        {
            "name": "forceUpdate",
            "baseName": "ForceUpdate",
            "type": "number"
        },
        {
            "name": "runtime",
            "baseName": "Runtime",
            "type": "string"
        },
        {
            "name": "networks",
            "baseName": "Networks",
            "type": "Array<NetworkAttachmentConfig>"
        },
        {
            "name": "logDriver",
            "baseName": "LogDriver",
            "type": "TaskSpecLogDriver"
        }
    ];
    return TaskSpec;
}());
exports.TaskSpec = TaskSpec;
var TaskSpecContainerSpec = (function () {
    function TaskSpecContainerSpec() {
    }
    TaskSpecContainerSpec.getAttributeTypeMap = function () {
        return TaskSpecContainerSpec.attributeTypeMap;
    };
    TaskSpecContainerSpec.discriminator = undefined;
    TaskSpecContainerSpec.attributeTypeMap = [
        {
            "name": "image",
            "baseName": "Image",
            "type": "string"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "command",
            "baseName": "Command",
            "type": "Array<string>"
        },
        {
            "name": "args",
            "baseName": "Args",
            "type": "Array<string>"
        },
        {
            "name": "hostname",
            "baseName": "Hostname",
            "type": "string"
        },
        {
            "name": "env",
            "baseName": "Env",
            "type": "Array<string>"
        },
        {
            "name": "dir",
            "baseName": "Dir",
            "type": "string"
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "string"
        },
        {
            "name": "groups",
            "baseName": "Groups",
            "type": "Array<string>"
        },
        {
            "name": "privileges",
            "baseName": "Privileges",
            "type": "TaskSpecContainerSpecPrivileges"
        },
        {
            "name": "TTY",
            "baseName": "TTY",
            "type": "boolean"
        },
        {
            "name": "openStdin",
            "baseName": "OpenStdin",
            "type": "boolean"
        },
        {
            "name": "readOnly",
            "baseName": "ReadOnly",
            "type": "boolean"
        },
        {
            "name": "mounts",
            "baseName": "Mounts",
            "type": "Array<Mount>"
        },
        {
            "name": "stopSignal",
            "baseName": "StopSignal",
            "type": "string"
        },
        {
            "name": "stopGracePeriod",
            "baseName": "StopGracePeriod",
            "type": "number"
        },
        {
            "name": "healthCheck",
            "baseName": "HealthCheck",
            "type": "HealthConfig"
        },
        {
            "name": "hosts",
            "baseName": "Hosts",
            "type": "Array<string>"
        },
        {
            "name": "dNSConfig",
            "baseName": "DNSConfig",
            "type": "TaskSpecContainerSpecDNSConfig"
        },
        {
            "name": "secrets",
            "baseName": "Secrets",
            "type": "Array<TaskSpecContainerSpecSecrets>"
        },
        {
            "name": "configs",
            "baseName": "Configs",
            "type": "Array<TaskSpecContainerSpecConfigs>"
        },
        {
            "name": "isolation",
            "baseName": "Isolation",
            "type": "TaskSpecContainerSpec.IsolationEnum"
        },
        {
            "name": "init",
            "baseName": "Init",
            "type": "boolean"
        },
        {
            "name": "sysctls",
            "baseName": "Sysctls",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "capabilityAdd",
            "baseName": "CapabilityAdd",
            "type": "Array<string>"
        },
        {
            "name": "capabilityDrop",
            "baseName": "CapabilityDrop",
            "type": "Array<string>"
        },
        {
            "name": "ulimits",
            "baseName": "Ulimits",
            "type": "Array<ResourcesUlimits>"
        }
    ];
    return TaskSpecContainerSpec;
}());
exports.TaskSpecContainerSpec = TaskSpecContainerSpec;
(function (TaskSpecContainerSpec) {
    var IsolationEnum;
    (function (IsolationEnum) {
        IsolationEnum[IsolationEnum["Default"] = 'default'] = "Default";
        IsolationEnum[IsolationEnum["Process"] = 'process'] = "Process";
        IsolationEnum[IsolationEnum["Hyperv"] = 'hyperv'] = "Hyperv";
    })(IsolationEnum = TaskSpecContainerSpec.IsolationEnum || (TaskSpecContainerSpec.IsolationEnum = {}));
})(TaskSpecContainerSpec = exports.TaskSpecContainerSpec || (exports.TaskSpecContainerSpec = {}));
exports.TaskSpecContainerSpec = TaskSpecContainerSpec;
var TaskSpecContainerSpecConfigs = (function () {
    function TaskSpecContainerSpecConfigs() {
    }
    TaskSpecContainerSpecConfigs.getAttributeTypeMap = function () {
        return TaskSpecContainerSpecConfigs.attributeTypeMap;
    };
    TaskSpecContainerSpecConfigs.discriminator = undefined;
    TaskSpecContainerSpecConfigs.attributeTypeMap = [
        {
            "name": "file",
            "baseName": "File",
            "type": "TaskSpecContainerSpecFile1"
        },
        {
            "name": "runtime",
            "baseName": "Runtime",
            "type": "any"
        },
        {
            "name": "configID",
            "baseName": "ConfigID",
            "type": "string"
        },
        {
            "name": "configName",
            "baseName": "ConfigName",
            "type": "string"
        }
    ];
    return TaskSpecContainerSpecConfigs;
}());
exports.TaskSpecContainerSpecConfigs = TaskSpecContainerSpecConfigs;
var TaskSpecContainerSpecDNSConfig = (function () {
    function TaskSpecContainerSpecDNSConfig() {
    }
    TaskSpecContainerSpecDNSConfig.getAttributeTypeMap = function () {
        return TaskSpecContainerSpecDNSConfig.attributeTypeMap;
    };
    TaskSpecContainerSpecDNSConfig.discriminator = undefined;
    TaskSpecContainerSpecDNSConfig.attributeTypeMap = [
        {
            "name": "nameservers",
            "baseName": "Nameservers",
            "type": "Array<string>"
        },
        {
            "name": "search",
            "baseName": "Search",
            "type": "Array<string>"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "Array<string>"
        }
    ];
    return TaskSpecContainerSpecDNSConfig;
}());
exports.TaskSpecContainerSpecDNSConfig = TaskSpecContainerSpecDNSConfig;
var TaskSpecContainerSpecFile = (function () {
    function TaskSpecContainerSpecFile() {
    }
    TaskSpecContainerSpecFile.getAttributeTypeMap = function () {
        return TaskSpecContainerSpecFile.attributeTypeMap;
    };
    TaskSpecContainerSpecFile.discriminator = undefined;
    TaskSpecContainerSpecFile.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "UID",
            "baseName": "UID",
            "type": "string"
        },
        {
            "name": "GID",
            "baseName": "GID",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "Mode",
            "type": "number"
        }
    ];
    return TaskSpecContainerSpecFile;
}());
exports.TaskSpecContainerSpecFile = TaskSpecContainerSpecFile;
var TaskSpecContainerSpecFile1 = (function () {
    function TaskSpecContainerSpecFile1() {
    }
    TaskSpecContainerSpecFile1.getAttributeTypeMap = function () {
        return TaskSpecContainerSpecFile1.attributeTypeMap;
    };
    TaskSpecContainerSpecFile1.discriminator = undefined;
    TaskSpecContainerSpecFile1.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "UID",
            "baseName": "UID",
            "type": "string"
        },
        {
            "name": "GID",
            "baseName": "GID",
            "type": "string"
        },
        {
            "name": "mode",
            "baseName": "Mode",
            "type": "number"
        }
    ];
    return TaskSpecContainerSpecFile1;
}());
exports.TaskSpecContainerSpecFile1 = TaskSpecContainerSpecFile1;
var TaskSpecContainerSpecPrivileges = (function () {
    function TaskSpecContainerSpecPrivileges() {
    }
    TaskSpecContainerSpecPrivileges.getAttributeTypeMap = function () {
        return TaskSpecContainerSpecPrivileges.attributeTypeMap;
    };
    TaskSpecContainerSpecPrivileges.discriminator = undefined;
    TaskSpecContainerSpecPrivileges.attributeTypeMap = [
        {
            "name": "credentialSpec",
            "baseName": "CredentialSpec",
            "type": "TaskSpecContainerSpecPrivilegesCredentialSpec"
        },
        {
            "name": "sELinuxContext",
            "baseName": "SELinuxContext",
            "type": "TaskSpecContainerSpecPrivilegesSELinuxContext"
        }
    ];
    return TaskSpecContainerSpecPrivileges;
}());
exports.TaskSpecContainerSpecPrivileges = TaskSpecContainerSpecPrivileges;
var TaskSpecContainerSpecPrivilegesCredentialSpec = (function () {
    function TaskSpecContainerSpecPrivilegesCredentialSpec() {
    }
    TaskSpecContainerSpecPrivilegesCredentialSpec.getAttributeTypeMap = function () {
        return TaskSpecContainerSpecPrivilegesCredentialSpec.attributeTypeMap;
    };
    TaskSpecContainerSpecPrivilegesCredentialSpec.discriminator = undefined;
    TaskSpecContainerSpecPrivilegesCredentialSpec.attributeTypeMap = [
        {
            "name": "config",
            "baseName": "Config",
            "type": "string"
        },
        {
            "name": "file",
            "baseName": "File",
            "type": "string"
        },
        {
            "name": "registry",
            "baseName": "Registry",
            "type": "string"
        }
    ];
    return TaskSpecContainerSpecPrivilegesCredentialSpec;
}());
exports.TaskSpecContainerSpecPrivilegesCredentialSpec = TaskSpecContainerSpecPrivilegesCredentialSpec;
var TaskSpecContainerSpecPrivilegesSELinuxContext = (function () {
    function TaskSpecContainerSpecPrivilegesSELinuxContext() {
    }
    TaskSpecContainerSpecPrivilegesSELinuxContext.getAttributeTypeMap = function () {
        return TaskSpecContainerSpecPrivilegesSELinuxContext.attributeTypeMap;
    };
    TaskSpecContainerSpecPrivilegesSELinuxContext.discriminator = undefined;
    TaskSpecContainerSpecPrivilegesSELinuxContext.attributeTypeMap = [
        {
            "name": "disable",
            "baseName": "Disable",
            "type": "boolean"
        },
        {
            "name": "user",
            "baseName": "User",
            "type": "string"
        },
        {
            "name": "role",
            "baseName": "Role",
            "type": "string"
        },
        {
            "name": "type",
            "baseName": "Type",
            "type": "string"
        },
        {
            "name": "level",
            "baseName": "Level",
            "type": "string"
        }
    ];
    return TaskSpecContainerSpecPrivilegesSELinuxContext;
}());
exports.TaskSpecContainerSpecPrivilegesSELinuxContext = TaskSpecContainerSpecPrivilegesSELinuxContext;
var TaskSpecContainerSpecSecrets = (function () {
    function TaskSpecContainerSpecSecrets() {
    }
    TaskSpecContainerSpecSecrets.getAttributeTypeMap = function () {
        return TaskSpecContainerSpecSecrets.attributeTypeMap;
    };
    TaskSpecContainerSpecSecrets.discriminator = undefined;
    TaskSpecContainerSpecSecrets.attributeTypeMap = [
        {
            "name": "file",
            "baseName": "File",
            "type": "TaskSpecContainerSpecFile"
        },
        {
            "name": "secretID",
            "baseName": "SecretID",
            "type": "string"
        },
        {
            "name": "secretName",
            "baseName": "SecretName",
            "type": "string"
        }
    ];
    return TaskSpecContainerSpecSecrets;
}());
exports.TaskSpecContainerSpecSecrets = TaskSpecContainerSpecSecrets;
var TaskSpecLogDriver = (function () {
    function TaskSpecLogDriver() {
    }
    TaskSpecLogDriver.getAttributeTypeMap = function () {
        return TaskSpecLogDriver.attributeTypeMap;
    };
    TaskSpecLogDriver.discriminator = undefined;
    TaskSpecLogDriver.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        }
    ];
    return TaskSpecLogDriver;
}());
exports.TaskSpecLogDriver = TaskSpecLogDriver;
var TaskSpecNetworkAttachmentSpec = (function () {
    function TaskSpecNetworkAttachmentSpec() {
    }
    TaskSpecNetworkAttachmentSpec.getAttributeTypeMap = function () {
        return TaskSpecNetworkAttachmentSpec.attributeTypeMap;
    };
    TaskSpecNetworkAttachmentSpec.discriminator = undefined;
    TaskSpecNetworkAttachmentSpec.attributeTypeMap = [
        {
            "name": "containerID",
            "baseName": "ContainerID",
            "type": "string"
        }
    ];
    return TaskSpecNetworkAttachmentSpec;
}());
exports.TaskSpecNetworkAttachmentSpec = TaskSpecNetworkAttachmentSpec;
var TaskSpecPlacement = (function () {
    function TaskSpecPlacement() {
    }
    TaskSpecPlacement.getAttributeTypeMap = function () {
        return TaskSpecPlacement.attributeTypeMap;
    };
    TaskSpecPlacement.discriminator = undefined;
    TaskSpecPlacement.attributeTypeMap = [
        {
            "name": "constraints",
            "baseName": "Constraints",
            "type": "Array<string>"
        },
        {
            "name": "preferences",
            "baseName": "Preferences",
            "type": "Array<TaskSpecPlacementPreferences>"
        },
        {
            "name": "maxReplicas",
            "baseName": "MaxReplicas",
            "type": "number"
        },
        {
            "name": "platforms",
            "baseName": "Platforms",
            "type": "Array<Platform>"
        }
    ];
    return TaskSpecPlacement;
}());
exports.TaskSpecPlacement = TaskSpecPlacement;
var TaskSpecPlacementPreferences = (function () {
    function TaskSpecPlacementPreferences() {
    }
    TaskSpecPlacementPreferences.getAttributeTypeMap = function () {
        return TaskSpecPlacementPreferences.attributeTypeMap;
    };
    TaskSpecPlacementPreferences.discriminator = undefined;
    TaskSpecPlacementPreferences.attributeTypeMap = [
        {
            "name": "spread",
            "baseName": "Spread",
            "type": "TaskSpecPlacementSpread"
        }
    ];
    return TaskSpecPlacementPreferences;
}());
exports.TaskSpecPlacementPreferences = TaskSpecPlacementPreferences;
var TaskSpecPlacementSpread = (function () {
    function TaskSpecPlacementSpread() {
    }
    TaskSpecPlacementSpread.getAttributeTypeMap = function () {
        return TaskSpecPlacementSpread.attributeTypeMap;
    };
    TaskSpecPlacementSpread.discriminator = undefined;
    TaskSpecPlacementSpread.attributeTypeMap = [
        {
            "name": "spreadDescriptor",
            "baseName": "SpreadDescriptor",
            "type": "string"
        }
    ];
    return TaskSpecPlacementSpread;
}());
exports.TaskSpecPlacementSpread = TaskSpecPlacementSpread;
var TaskSpecPluginSpec = (function () {
    function TaskSpecPluginSpec() {
    }
    TaskSpecPluginSpec.getAttributeTypeMap = function () {
        return TaskSpecPluginSpec.attributeTypeMap;
    };
    TaskSpecPluginSpec.discriminator = undefined;
    TaskSpecPluginSpec.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "remote",
            "baseName": "Remote",
            "type": "string"
        },
        {
            "name": "disabled",
            "baseName": "Disabled",
            "type": "boolean"
        },
        {
            "name": "pluginPrivilege",
            "baseName": "PluginPrivilege",
            "type": "Array<Body>"
        }
    ];
    return TaskSpecPluginSpec;
}());
exports.TaskSpecPluginSpec = TaskSpecPluginSpec;
var TaskSpecResources = (function () {
    function TaskSpecResources() {
    }
    TaskSpecResources.getAttributeTypeMap = function () {
        return TaskSpecResources.attributeTypeMap;
    };
    TaskSpecResources.discriminator = undefined;
    TaskSpecResources.attributeTypeMap = [
        {
            "name": "limits",
            "baseName": "Limits",
            "type": "Limit"
        },
        {
            "name": "reservation",
            "baseName": "Reservation",
            "type": "ResourceObject"
        }
    ];
    return TaskSpecResources;
}());
exports.TaskSpecResources = TaskSpecResources;
var TaskSpecRestartPolicy = (function () {
    function TaskSpecRestartPolicy() {
    }
    TaskSpecRestartPolicy.getAttributeTypeMap = function () {
        return TaskSpecRestartPolicy.attributeTypeMap;
    };
    TaskSpecRestartPolicy.discriminator = undefined;
    TaskSpecRestartPolicy.attributeTypeMap = [
        {
            "name": "condition",
            "baseName": "Condition",
            "type": "TaskSpecRestartPolicy.ConditionEnum"
        },
        {
            "name": "delay",
            "baseName": "Delay",
            "type": "number"
        },
        {
            "name": "maxAttempts",
            "baseName": "MaxAttempts",
            "type": "number"
        },
        {
            "name": "window",
            "baseName": "Window",
            "type": "number"
        }
    ];
    return TaskSpecRestartPolicy;
}());
exports.TaskSpecRestartPolicy = TaskSpecRestartPolicy;
(function (TaskSpecRestartPolicy) {
    var ConditionEnum;
    (function (ConditionEnum) {
        ConditionEnum[ConditionEnum["None"] = 'none'] = "None";
        ConditionEnum[ConditionEnum["OnFailure"] = 'on-failure'] = "OnFailure";
        ConditionEnum[ConditionEnum["Any"] = 'any'] = "Any";
    })(ConditionEnum = TaskSpecRestartPolicy.ConditionEnum || (TaskSpecRestartPolicy.ConditionEnum = {}));
})(TaskSpecRestartPolicy = exports.TaskSpecRestartPolicy || (exports.TaskSpecRestartPolicy = {}));
exports.TaskSpecRestartPolicy = TaskSpecRestartPolicy;
var TaskState = (function () {
    function TaskState() {
    }
    TaskState.getAttributeTypeMap = function () {
        return TaskState.attributeTypeMap;
    };
    TaskState.discriminator = undefined;
    TaskState.attributeTypeMap = [];
    return TaskState;
}());
exports.TaskState = TaskState;
var TaskStatus = (function () {
    function TaskStatus() {
    }
    TaskStatus.getAttributeTypeMap = function () {
        return TaskStatus.attributeTypeMap;
    };
    TaskStatus.discriminator = undefined;
    TaskStatus.attributeTypeMap = [
        {
            "name": "timestamp",
            "baseName": "Timestamp",
            "type": "string"
        },
        {
            "name": "state",
            "baseName": "State",
            "type": "TaskState"
        },
        {
            "name": "message",
            "baseName": "Message",
            "type": "string"
        },
        {
            "name": "err",
            "baseName": "Err",
            "type": "string"
        },
        {
            "name": "containerStatus",
            "baseName": "ContainerStatus",
            "type": "TaskStatusContainerStatus"
        }
    ];
    return TaskStatus;
}());
exports.TaskStatus = TaskStatus;
var TaskStatusContainerStatus = (function () {
    function TaskStatusContainerStatus() {
    }
    TaskStatusContainerStatus.getAttributeTypeMap = function () {
        return TaskStatusContainerStatus.attributeTypeMap;
    };
    TaskStatusContainerStatus.discriminator = undefined;
    TaskStatusContainerStatus.attributeTypeMap = [
        {
            "name": "containerID",
            "baseName": "ContainerID",
            "type": "string"
        },
        {
            "name": "PID",
            "baseName": "PID",
            "type": "number"
        },
        {
            "name": "exitCode",
            "baseName": "ExitCode",
            "type": "number"
        }
    ];
    return TaskStatusContainerStatus;
}());
exports.TaskStatusContainerStatus = TaskStatusContainerStatus;
var ThrottleDevice = (function () {
    function ThrottleDevice() {
    }
    ThrottleDevice.getAttributeTypeMap = function () {
        return ThrottleDevice.attributeTypeMap;
    };
    ThrottleDevice.discriminator = undefined;
    ThrottleDevice.attributeTypeMap = [
        {
            "name": "path",
            "baseName": "Path",
            "type": "string"
        },
        {
            "name": "rate",
            "baseName": "Rate",
            "type": "number"
        }
    ];
    return ThrottleDevice;
}());
exports.ThrottleDevice = ThrottleDevice;
var UnlockKeyResponse = (function () {
    function UnlockKeyResponse() {
    }
    UnlockKeyResponse.getAttributeTypeMap = function () {
        return UnlockKeyResponse.attributeTypeMap;
    };
    UnlockKeyResponse.discriminator = undefined;
    UnlockKeyResponse.attributeTypeMap = [
        {
            "name": "unlockKey",
            "baseName": "UnlockKey",
            "type": "string"
        }
    ];
    return UnlockKeyResponse;
}());
exports.UnlockKeyResponse = UnlockKeyResponse;
var Volume = (function () {
    function Volume() {
    }
    Volume.getAttributeTypeMap = function () {
        return Volume.attributeTypeMap;
    };
    Volume.discriminator = undefined;
    Volume.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "mountpoint",
            "baseName": "Mountpoint",
            "type": "string"
        },
        {
            "name": "createdAt",
            "baseName": "CreatedAt",
            "type": "string"
        },
        {
            "name": "status",
            "baseName": "Status",
            "type": "{ [key: string]: any; }"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "scope",
            "baseName": "Scope",
            "type": "Volume.ScopeEnum"
        },
        {
            "name": "options",
            "baseName": "Options",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "usageData",
            "baseName": "UsageData",
            "type": "VolumeUsageData"
        }
    ];
    return Volume;
}());
exports.Volume = Volume;
(function (Volume) {
    var ScopeEnum;
    (function (ScopeEnum) {
        ScopeEnum[ScopeEnum["Local"] = 'local'] = "Local";
        ScopeEnum[ScopeEnum["Global"] = 'global'] = "Global";
    })(ScopeEnum = Volume.ScopeEnum || (Volume.ScopeEnum = {}));
})(Volume = exports.Volume || (exports.Volume = {}));
exports.Volume = Volume;
var VolumeConfig = (function () {
    function VolumeConfig() {
    }
    VolumeConfig.getAttributeTypeMap = function () {
        return VolumeConfig.attributeTypeMap;
    };
    VolumeConfig.discriminator = undefined;
    VolumeConfig.attributeTypeMap = [
        {
            "name": "name",
            "baseName": "Name",
            "type": "string"
        },
        {
            "name": "driver",
            "baseName": "Driver",
            "type": "string"
        },
        {
            "name": "driverOpts",
            "baseName": "DriverOpts",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "labels",
            "baseName": "Labels",
            "type": "{ [key: string]: string; }"
        }
    ];
    return VolumeConfig;
}());
exports.VolumeConfig = VolumeConfig;
var VolumeListResponse = (function () {
    function VolumeListResponse() {
    }
    VolumeListResponse.getAttributeTypeMap = function () {
        return VolumeListResponse.attributeTypeMap;
    };
    VolumeListResponse.discriminator = undefined;
    VolumeListResponse.attributeTypeMap = [
        {
            "name": "volumes",
            "baseName": "Volumes",
            "type": "Array<Volume>"
        },
        {
            "name": "warnings",
            "baseName": "Warnings",
            "type": "Array<string>"
        }
    ];
    return VolumeListResponse;
}());
exports.VolumeListResponse = VolumeListResponse;
var VolumePruneResponse = (function () {
    function VolumePruneResponse() {
    }
    VolumePruneResponse.getAttributeTypeMap = function () {
        return VolumePruneResponse.attributeTypeMap;
    };
    VolumePruneResponse.discriminator = undefined;
    VolumePruneResponse.attributeTypeMap = [
        {
            "name": "volumesDeleted",
            "baseName": "VolumesDeleted",
            "type": "Array<string>"
        },
        {
            "name": "spaceReclaimed",
            "baseName": "SpaceReclaimed",
            "type": "number"
        }
    ];
    return VolumePruneResponse;
}());
exports.VolumePruneResponse = VolumePruneResponse;
var VolumeUsageData = (function () {
    function VolumeUsageData() {
    }
    VolumeUsageData.getAttributeTypeMap = function () {
        return VolumeUsageData.attributeTypeMap;
    };
    VolumeUsageData.discriminator = undefined;
    VolumeUsageData.attributeTypeMap = [
        {
            "name": "size",
            "baseName": "Size",
            "type": "number"
        },
        {
            "name": "refCount",
            "baseName": "RefCount",
            "type": "number"
        }
    ];
    return VolumeUsageData;
}());
exports.VolumeUsageData = VolumeUsageData;
var enumsMap = {
    "ContainerState.StatusEnum": ContainerState.StatusEnum,
    "EndpointPortConfig.ProtocolEnum": EndpointPortConfig.ProtocolEnum,
    "EndpointPortConfig.PublishModeEnum": EndpointPortConfig.PublishModeEnum,
    "EndpointSpec.ModeEnum": EndpointSpec.ModeEnum,
    "Health.StatusEnum": Health.StatusEnum,
    "HostConfig.CgroupnsModeEnum": HostConfig.CgroupnsModeEnum,
    "HostConfig.IsolationEnum": HostConfig.IsolationEnum,
    "HostConfigLogConfig.TypeEnum": HostConfigLogConfig.TypeEnum,
    "Mount.TypeEnum": Mount.TypeEnum,
    "MountBindOptions.PropagationEnum": MountBindOptions.PropagationEnum,
    "NodeSpec.RoleEnum": NodeSpec.RoleEnum,
    "NodeSpec.AvailabilityEnum": NodeSpec.AvailabilityEnum,
    "PluginConfigInterface.ProtocolSchemeEnum": PluginConfigInterface.ProtocolSchemeEnum,
    "Port.TypeEnum": Port.TypeEnum,
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
    "Volume.ScopeEnum": Volume.ScopeEnum,
};
var typeMap = {
    "Address": Address,
    "AuthConfig": AuthConfig,
    "Body": Body,
    "Body1": Body1,
    "Body2": Body2,
    "Body3": Body3,
    "BuildCache": BuildCache,
    "BuildInfo": BuildInfo,
    "BuildPruneResponse": BuildPruneResponse,
    "ClusterInfo": ClusterInfo,
    "Commit": Commit,
    "Config": Config,
    "ConfigSpec": ConfigSpec,
    "Container": Container,
    "Container1": Container1,
    "ContainerChangeResponseItem": ContainerChangeResponseItem,
    "ContainerConfig": ContainerConfig,
    "ContainerCreateResponse": ContainerCreateResponse,
    "ContainerInspectResponse": ContainerInspectResponse,
    "ContainerPruneResponse": ContainerPruneResponse,
    "ContainerState": ContainerState,
    "ContainerSummary": ContainerSummary,
    "ContainerSummaryInner": ContainerSummaryInner,
    "ContainerSummaryInnerHostConfig": ContainerSummaryInnerHostConfig,
    "ContainerSummaryInnerNetworkSettings": ContainerSummaryInnerNetworkSettings,
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
    "ExecConfig": ExecConfig,
    "ExecInspectResponse": ExecInspectResponse,
    "ExecStartConfig": ExecStartConfig,
    "GenericResources": GenericResources,
    "GenericResourcesInner": GenericResourcesInner,
    "GenericResourcesInnerDiscreteResourceSpec": GenericResourcesInnerDiscreteResourceSpec,
    "GenericResourcesInnerNamedResourceSpec": GenericResourcesInnerNamedResourceSpec,
    "GraphDriverData": GraphDriverData,
    "Health": Health,
    "HealthConfig": HealthConfig,
    "HealthcheckResult": HealthcheckResult,
    "HistoryResponseItem": HistoryResponseItem,
    "HostConfig": HostConfig,
    "HostConfigLogConfig": HostConfigLogConfig,
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
    "InlineResponse400": InlineResponse400,
    "JoinTokens": JoinTokens,
    "Limit": Limit,
    "LocalNodeState": LocalNodeState,
    "ManagerStatus": ManagerStatus,
    "Mount": Mount,
    "MountBindOptions": MountBindOptions,
    "MountPoint": MountPoint,
    "MountTmpfsOptions": MountTmpfsOptions,
    "MountVolumeOptions": MountVolumeOptions,
    "MountVolumeOptionsDriverConfig": MountVolumeOptionsDriverConfig,
    "Network": Network,
    "NetworkAttachmentConfig": NetworkAttachmentConfig,
    "NetworkConfig": NetworkConfig,
    "NetworkContainer": NetworkContainer,
    "NetworkCreateResponse": NetworkCreateResponse,
    "NetworkPruneResponse": NetworkPruneResponse,
    "NetworkSettings": NetworkSettings,
    "NetworkingConfig": NetworkingConfig,
    "Node": Node,
    "NodeDescription": NodeDescription,
    "NodeSpec": NodeSpec,
    "NodeState": NodeState,
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
    "PortMap": PortMap,
    "ProcessConfig": ProcessConfig,
    "ProgressDetail": ProgressDetail,
    "PushImageInfo": PushImageInfo,
    "Reachability": Reachability,
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
    "TaskState": TaskState,
    "TaskStatus": TaskStatus,
    "TaskStatusContainerStatus": TaskStatusContainerStatus,
    "ThrottleDevice": ThrottleDevice,
    "UnlockKeyResponse": UnlockKeyResponse,
    "Volume": Volume,
    "VolumeConfig": VolumeConfig,
    "VolumeListResponse": VolumeListResponse,
    "VolumePruneResponse": VolumePruneResponse,
    "VolumeUsageData": VolumeUsageData,
};
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
var ConfigApiApiKeys;
(function (ConfigApiApiKeys) {
})(ConfigApiApiKeys = exports.ConfigApiApiKeys || (exports.ConfigApiApiKeys = {}));
var ConfigApi = (function () {
    function ConfigApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ConfigApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConfigApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    ConfigApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ConfigApi.prototype.setApiKey = function (key, value) {
        this.authentications[ConfigApiApiKeys[key]].apiKey = value;
    };
    ConfigApi.prototype.configCreate = function (body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/configs/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "object")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "IdResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ConfigApi.prototype.configDelete = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/configs/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling configDelete.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ConfigApi.prototype.configInspect = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/configs/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling configInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Config");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ConfigApi.prototype.configList = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/configs';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<Config>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ConfigApi.prototype.configUpdate = function (id, version, body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/configs/{id}/update'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling configUpdate.');
        }
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling configUpdate.');
        }
        if (version !== undefined) {
            localVarQueryParameters['version'] = ObjectSerializer.serialize(version, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "ConfigSpec")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ConfigApi;
}());
exports.ConfigApi = ConfigApi;
var ContainerApiApiKeys;
(function (ContainerApiApiKeys) {
})(ContainerApiApiKeys = exports.ContainerApiApiKeys || (exports.ContainerApiApiKeys = {}));
var ContainerApi = (function () {
    function ContainerApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ContainerApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ContainerApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    ContainerApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ContainerApi.prototype.setApiKey = function (key, value) {
        this.authentications[ContainerApiApiKeys[key]].apiKey = value;
    };
    ContainerApi.prototype.containerArchive = function (id, path, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/archive'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerArchive.');
        }
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling containerArchive.');
        }
        if (path !== undefined) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerArchiveInfo = function (id, path, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/archive'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerArchiveInfo.');
        }
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling containerArchiveInfo.');
        }
        if (path !== undefined) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'HEAD',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerAttach = function (id, detachKeys, logs, stream, stdin, stdout, stderr, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/attach'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerAttach.');
        }
        if (detachKeys !== undefined) {
            localVarQueryParameters['detachKeys'] = ObjectSerializer.serialize(detachKeys, "string");
        }
        if (logs !== undefined) {
            localVarQueryParameters['logs'] = ObjectSerializer.serialize(logs, "boolean");
        }
        if (stream !== undefined) {
            localVarQueryParameters['stream'] = ObjectSerializer.serialize(stream, "boolean");
        }
        if (stdin !== undefined) {
            localVarQueryParameters['stdin'] = ObjectSerializer.serialize(stdin, "boolean");
        }
        if (stdout !== undefined) {
            localVarQueryParameters['stdout'] = ObjectSerializer.serialize(stdout, "boolean");
        }
        if (stderr !== undefined) {
            localVarQueryParameters['stderr'] = ObjectSerializer.serialize(stderr, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerAttachWebsocket = function (id, detachKeys, logs, stream, stdin, stdout, stderr, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/attach/ws'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerAttachWebsocket.');
        }
        if (detachKeys !== undefined) {
            localVarQueryParameters['detachKeys'] = ObjectSerializer.serialize(detachKeys, "string");
        }
        if (logs !== undefined) {
            localVarQueryParameters['logs'] = ObjectSerializer.serialize(logs, "boolean");
        }
        if (stream !== undefined) {
            localVarQueryParameters['stream'] = ObjectSerializer.serialize(stream, "boolean");
        }
        if (stdin !== undefined) {
            localVarQueryParameters['stdin'] = ObjectSerializer.serialize(stdin, "boolean");
        }
        if (stdout !== undefined) {
            localVarQueryParameters['stdout'] = ObjectSerializer.serialize(stdout, "boolean");
        }
        if (stderr !== undefined) {
            localVarQueryParameters['stderr'] = ObjectSerializer.serialize(stderr, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerChanges = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/changes'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerChanges.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<ContainerChangeResponseItem>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerCreate = function (body, name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling containerCreate.');
        }
        if (name !== undefined) {
            localVarQueryParameters['name'] = ObjectSerializer.serialize(name, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "object")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ContainerCreateResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerDelete = function (id, v, force, link, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerDelete.');
        }
        if (v !== undefined) {
            localVarQueryParameters['v'] = ObjectSerializer.serialize(v, "boolean");
        }
        if (force !== undefined) {
            localVarQueryParameters['force'] = ObjectSerializer.serialize(force, "boolean");
        }
        if (link !== undefined) {
            localVarQueryParameters['link'] = ObjectSerializer.serialize(link, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerExport = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/export'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerExport.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerInspect = function (id, size, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/json'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerInspect.');
        }
        if (size !== undefined) {
            localVarQueryParameters['size'] = ObjectSerializer.serialize(size, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ContainerInspectResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerKill = function (id, signal, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/kill'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerKill.');
        }
        if (signal !== undefined) {
            localVarQueryParameters['signal'] = ObjectSerializer.serialize(signal, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerList = function (all, limit, size, filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/json';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (all !== undefined) {
            localVarQueryParameters['all'] = ObjectSerializer.serialize(all, "boolean");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (size !== undefined) {
            localVarQueryParameters['size'] = ObjectSerializer.serialize(size, "boolean");
        }
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ContainerSummary");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerLogs = function (id, follow, stdout, stderr, since, until, timestamps, tail, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/logs'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerLogs.');
        }
        if (follow !== undefined) {
            localVarQueryParameters['follow'] = ObjectSerializer.serialize(follow, "boolean");
        }
        if (stdout !== undefined) {
            localVarQueryParameters['stdout'] = ObjectSerializer.serialize(stdout, "boolean");
        }
        if (stderr !== undefined) {
            localVarQueryParameters['stderr'] = ObjectSerializer.serialize(stderr, "boolean");
        }
        if (since !== undefined) {
            localVarQueryParameters['since'] = ObjectSerializer.serialize(since, "number");
        }
        if (until !== undefined) {
            localVarQueryParameters['until'] = ObjectSerializer.serialize(until, "number");
        }
        if (timestamps !== undefined) {
            localVarQueryParameters['timestamps'] = ObjectSerializer.serialize(timestamps, "boolean");
        }
        if (tail !== undefined) {
            localVarQueryParameters['tail'] = ObjectSerializer.serialize(tail, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerPause = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/pause'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerPause.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerPrune = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/prune';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ContainerPruneResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerRename = function (id, name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/rename'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerRename.');
        }
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling containerRename.');
        }
        if (name !== undefined) {
            localVarQueryParameters['name'] = ObjectSerializer.serialize(name, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerResize = function (id, h, w, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/resize'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerResize.');
        }
        if (h !== undefined) {
            localVarQueryParameters['h'] = ObjectSerializer.serialize(h, "number");
        }
        if (w !== undefined) {
            localVarQueryParameters['w'] = ObjectSerializer.serialize(w, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerRestart = function (id, t, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/restart'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerRestart.');
        }
        if (t !== undefined) {
            localVarQueryParameters['t'] = ObjectSerializer.serialize(t, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerStart = function (id, detachKeys, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/start'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerStart.');
        }
        if (detachKeys !== undefined) {
            localVarQueryParameters['detachKeys'] = ObjectSerializer.serialize(detachKeys, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerStats = function (id, stream, oneShot, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/stats'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerStats.');
        }
        if (stream !== undefined) {
            localVarQueryParameters['stream'] = ObjectSerializer.serialize(stream, "boolean");
        }
        if (oneShot !== undefined) {
            localVarQueryParameters['one-shot'] = ObjectSerializer.serialize(oneShot, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "any");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerStop = function (id, t, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/stop'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerStop.');
        }
        if (t !== undefined) {
            localVarQueryParameters['t'] = ObjectSerializer.serialize(t, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerTop = function (id, psArgs, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/top'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerTop.');
        }
        if (psArgs !== undefined) {
            localVarQueryParameters['ps_args'] = ObjectSerializer.serialize(psArgs, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ContainerTopResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerUnpause = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/unpause'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerUnpause.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerUpdate = function (id, update, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/update'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerUpdate.');
        }
        if (update === null || update === undefined) {
            throw new Error('Required parameter update was null or undefined when calling containerUpdate.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(update, "object")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ContainerUpdateResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.containerWait = function (id, condition, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/wait'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerWait.');
        }
        if (condition !== undefined) {
            localVarQueryParameters['condition'] = ObjectSerializer.serialize(condition, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ContainerWaitResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ContainerApi.prototype.putContainerArchive = function (id, path, inputStream, noOverwriteDirNonDir, copyUIDGID, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/archive'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling putContainerArchive.');
        }
        if (path === null || path === undefined) {
            throw new Error('Required parameter path was null or undefined when calling putContainerArchive.');
        }
        if (inputStream === null || inputStream === undefined) {
            throw new Error('Required parameter inputStream was null or undefined when calling putContainerArchive.');
        }
        if (path !== undefined) {
            localVarQueryParameters['path'] = ObjectSerializer.serialize(path, "string");
        }
        if (noOverwriteDirNonDir !== undefined) {
            localVarQueryParameters['noOverwriteDirNonDir'] = ObjectSerializer.serialize(noOverwriteDirNonDir, "string");
        }
        if (copyUIDGID !== undefined) {
            localVarQueryParameters['copyUIDGID'] = ObjectSerializer.serialize(copyUIDGID, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'PUT',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(inputStream, "string")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ContainerApi;
}());
exports.ContainerApi = ContainerApi;
var DistributionApiApiKeys;
(function (DistributionApiApiKeys) {
})(DistributionApiApiKeys = exports.DistributionApiApiKeys || (exports.DistributionApiApiKeys = {}));
var DistributionApi = (function () {
    function DistributionApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(DistributionApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(DistributionApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    DistributionApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    DistributionApi.prototype.setApiKey = function (key, value) {
        this.authentications[DistributionApiApiKeys[key]].apiKey = value;
    };
    DistributionApi.prototype.distributionInspect = function (name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/distribution/{name}/json'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling distributionInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "DistributionInspectResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return DistributionApi;
}());
exports.DistributionApi = DistributionApi;
var ExecApiApiKeys;
(function (ExecApiApiKeys) {
})(ExecApiApiKeys = exports.ExecApiApiKeys || (exports.ExecApiApiKeys = {}));
var ExecApi = (function () {
    function ExecApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ExecApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ExecApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    ExecApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ExecApi.prototype.setApiKey = function (key, value) {
        this.authentications[ExecApiApiKeys[key]].apiKey = value;
    };
    ExecApi.prototype.containerExec = function (execConfig, id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/containers/{id}/exec'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (execConfig === null || execConfig === undefined) {
            throw new Error('Required parameter execConfig was null or undefined when calling containerExec.');
        }
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling containerExec.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(execConfig, "ExecConfig")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "IdResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ExecApi.prototype.execInspect = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/exec/{id}/json'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling execInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ExecInspectResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ExecApi.prototype.execResize = function (id, h, w, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/exec/{id}/resize'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling execResize.');
        }
        if (h !== undefined) {
            localVarQueryParameters['h'] = ObjectSerializer.serialize(h, "number");
        }
        if (w !== undefined) {
            localVarQueryParameters['w'] = ObjectSerializer.serialize(w, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ExecApi.prototype.execStart = function (id, execStartConfig, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/exec/{id}/start'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling execStart.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(execStartConfig, "ExecStartConfig")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ExecApi;
}());
exports.ExecApi = ExecApi;
var ImageApiApiKeys;
(function (ImageApiApiKeys) {
})(ImageApiApiKeys = exports.ImageApiApiKeys || (exports.ImageApiApiKeys = {}));
var ImageApi = (function () {
    function ImageApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ImageApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ImageApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    ImageApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ImageApi.prototype.setApiKey = function (key, value) {
        this.authentications[ImageApiApiKeys[key]].apiKey = value;
    };
    ImageApi.prototype.buildPrune = function (keepStorage, all, filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/build/prune';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (keepStorage !== undefined) {
            localVarQueryParameters['keep-storage'] = ObjectSerializer.serialize(keepStorage, "number");
        }
        if (all !== undefined) {
            localVarQueryParameters['all'] = ObjectSerializer.serialize(all, "boolean");
        }
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "BuildPruneResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageBuild = function (inputStream, dockerfile, t, extrahosts, remote, q, nocache, cachefrom, pull, rm, forcerm, memory, memswap, cpushares, cpusetcpus, cpuperiod, cpuquota, buildargs, shmsize, squash, labels, networkmode, contentType, xRegistryConfig, platform, target, outputs, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/build';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (dockerfile !== undefined) {
            localVarQueryParameters['dockerfile'] = ObjectSerializer.serialize(dockerfile, "string");
        }
        if (t !== undefined) {
            localVarQueryParameters['t'] = ObjectSerializer.serialize(t, "string");
        }
        if (extrahosts !== undefined) {
            localVarQueryParameters['extrahosts'] = ObjectSerializer.serialize(extrahosts, "string");
        }
        if (remote !== undefined) {
            localVarQueryParameters['remote'] = ObjectSerializer.serialize(remote, "string");
        }
        if (q !== undefined) {
            localVarQueryParameters['q'] = ObjectSerializer.serialize(q, "boolean");
        }
        if (nocache !== undefined) {
            localVarQueryParameters['nocache'] = ObjectSerializer.serialize(nocache, "boolean");
        }
        if (cachefrom !== undefined) {
            localVarQueryParameters['cachefrom'] = ObjectSerializer.serialize(cachefrom, "string");
        }
        if (pull !== undefined) {
            localVarQueryParameters['pull'] = ObjectSerializer.serialize(pull, "string");
        }
        if (rm !== undefined) {
            localVarQueryParameters['rm'] = ObjectSerializer.serialize(rm, "boolean");
        }
        if (forcerm !== undefined) {
            localVarQueryParameters['forcerm'] = ObjectSerializer.serialize(forcerm, "boolean");
        }
        if (memory !== undefined) {
            localVarQueryParameters['memory'] = ObjectSerializer.serialize(memory, "number");
        }
        if (memswap !== undefined) {
            localVarQueryParameters['memswap'] = ObjectSerializer.serialize(memswap, "number");
        }
        if (cpushares !== undefined) {
            localVarQueryParameters['cpushares'] = ObjectSerializer.serialize(cpushares, "number");
        }
        if (cpusetcpus !== undefined) {
            localVarQueryParameters['cpusetcpus'] = ObjectSerializer.serialize(cpusetcpus, "string");
        }
        if (cpuperiod !== undefined) {
            localVarQueryParameters['cpuperiod'] = ObjectSerializer.serialize(cpuperiod, "number");
        }
        if (cpuquota !== undefined) {
            localVarQueryParameters['cpuquota'] = ObjectSerializer.serialize(cpuquota, "number");
        }
        if (buildargs !== undefined) {
            localVarQueryParameters['buildargs'] = ObjectSerializer.serialize(buildargs, "string");
        }
        if (shmsize !== undefined) {
            localVarQueryParameters['shmsize'] = ObjectSerializer.serialize(shmsize, "number");
        }
        if (squash !== undefined) {
            localVarQueryParameters['squash'] = ObjectSerializer.serialize(squash, "boolean");
        }
        if (labels !== undefined) {
            localVarQueryParameters['labels'] = ObjectSerializer.serialize(labels, "string");
        }
        if (networkmode !== undefined) {
            localVarQueryParameters['networkmode'] = ObjectSerializer.serialize(networkmode, "string");
        }
        if (platform !== undefined) {
            localVarQueryParameters['platform'] = ObjectSerializer.serialize(platform, "string");
        }
        if (target !== undefined) {
            localVarQueryParameters['target'] = ObjectSerializer.serialize(target, "string");
        }
        if (outputs !== undefined) {
            localVarQueryParameters['outputs'] = ObjectSerializer.serialize(outputs, "string");
        }
        localVarHeaderParams['Content-type'] = ObjectSerializer.serialize(contentType, "'application/x-tar'");
        localVarHeaderParams['X-Registry-Config'] = ObjectSerializer.serialize(xRegistryConfig, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(inputStream, "string")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageCommit = function (containerConfig, container, repo, tag, comment, author, pause, changes, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/commit';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (container !== undefined) {
            localVarQueryParameters['container'] = ObjectSerializer.serialize(container, "string");
        }
        if (repo !== undefined) {
            localVarQueryParameters['repo'] = ObjectSerializer.serialize(repo, "string");
        }
        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }
        if (comment !== undefined) {
            localVarQueryParameters['comment'] = ObjectSerializer.serialize(comment, "string");
        }
        if (author !== undefined) {
            localVarQueryParameters['author'] = ObjectSerializer.serialize(author, "string");
        }
        if (pause !== undefined) {
            localVarQueryParameters['pause'] = ObjectSerializer.serialize(pause, "boolean");
        }
        if (changes !== undefined) {
            localVarQueryParameters['changes'] = ObjectSerializer.serialize(changes, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(containerConfig, "ContainerConfig")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "IdResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageCreate = function (fromImage, fromSrc, repo, tag, message, inputImage, xRegistryAuth, platform, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (fromImage !== undefined) {
            localVarQueryParameters['fromImage'] = ObjectSerializer.serialize(fromImage, "string");
        }
        if (fromSrc !== undefined) {
            localVarQueryParameters['fromSrc'] = ObjectSerializer.serialize(fromSrc, "string");
        }
        if (repo !== undefined) {
            localVarQueryParameters['repo'] = ObjectSerializer.serialize(repo, "string");
        }
        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }
        if (message !== undefined) {
            localVarQueryParameters['message'] = ObjectSerializer.serialize(message, "string");
        }
        if (platform !== undefined) {
            localVarQueryParameters['platform'] = ObjectSerializer.serialize(platform, "string");
        }
        localVarHeaderParams['X-Registry-Auth'] = ObjectSerializer.serialize(xRegistryAuth, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(inputImage, "string")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageDelete = function (name, force, noprune, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling imageDelete.');
        }
        if (force !== undefined) {
            localVarQueryParameters['force'] = ObjectSerializer.serialize(force, "boolean");
        }
        if (noprune !== undefined) {
            localVarQueryParameters['noprune'] = ObjectSerializer.serialize(noprune, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<ImageDeleteResponseItem>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageGet = function (name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/{name}/get'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling imageGet.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageGetAll = function (names, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/get';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (names !== undefined) {
            localVarQueryParameters['names'] = ObjectSerializer.serialize(names, "Array<string>");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageHistory = function (name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/{name}/history'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling imageHistory.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<HistoryResponseItem>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageInspect = function (name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/{name}/json'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling imageInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Image");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageList = function (all, filters, digests, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/json';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (all !== undefined) {
            localVarQueryParameters['all'] = ObjectSerializer.serialize(all, "boolean");
        }
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        if (digests !== undefined) {
            localVarQueryParameters['digests'] = ObjectSerializer.serialize(digests, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<ImageSummary>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageLoad = function (imagesTarball, quiet, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/load';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (quiet !== undefined) {
            localVarQueryParameters['quiet'] = ObjectSerializer.serialize(quiet, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(imagesTarball, "string")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imagePrune = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/prune';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ImagePruneResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imagePush = function (name, xRegistryAuth, tag, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/{name}/push'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling imagePush.');
        }
        if (xRegistryAuth === null || xRegistryAuth === undefined) {
            throw new Error('Required parameter xRegistryAuth was null or undefined when calling imagePush.');
        }
        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }
        localVarHeaderParams['X-Registry-Auth'] = ObjectSerializer.serialize(xRegistryAuth, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageSearch = function (term, limit, filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/search';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (term === null || term === undefined) {
            throw new Error('Required parameter term was null or undefined when calling imageSearch.');
        }
        if (term !== undefined) {
            localVarQueryParameters['term'] = ObjectSerializer.serialize(term, "string");
        }
        if (limit !== undefined) {
            localVarQueryParameters['limit'] = ObjectSerializer.serialize(limit, "number");
        }
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<ImageSearchResponseItem>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ImageApi.prototype.imageTag = function (name, repo, tag, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/images/{name}/tag'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling imageTag.');
        }
        if (repo !== undefined) {
            localVarQueryParameters['repo'] = ObjectSerializer.serialize(repo, "string");
        }
        if (tag !== undefined) {
            localVarQueryParameters['tag'] = ObjectSerializer.serialize(tag, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ImageApi;
}());
exports.ImageApi = ImageApi;
var NetworkApiApiKeys;
(function (NetworkApiApiKeys) {
})(NetworkApiApiKeys = exports.NetworkApiApiKeys || (exports.NetworkApiApiKeys = {}));
var NetworkApi = (function () {
    function NetworkApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(NetworkApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NetworkApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    NetworkApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    NetworkApi.prototype.setApiKey = function (key, value) {
        this.authentications[NetworkApiApiKeys[key]].apiKey = value;
    };
    NetworkApi.prototype.networkConnect = function (id, container, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/networks/{id}/connect'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling networkConnect.');
        }
        if (container === null || container === undefined) {
            throw new Error('Required parameter container was null or undefined when calling networkConnect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(container, "Container")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NetworkApi.prototype.networkCreate = function (networkConfig, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/networks/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (networkConfig === null || networkConfig === undefined) {
            throw new Error('Required parameter networkConfig was null or undefined when calling networkCreate.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(networkConfig, "NetworkConfig")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "NetworkCreateResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NetworkApi.prototype.networkDelete = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/networks/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling networkDelete.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NetworkApi.prototype.networkDisconnect = function (id, container, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/networks/{id}/disconnect'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling networkDisconnect.');
        }
        if (container === null || container === undefined) {
            throw new Error('Required parameter container was null or undefined when calling networkDisconnect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(container, "Container1")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NetworkApi.prototype.networkInspect = function (id, verbose, scope, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/networks/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling networkInspect.');
        }
        if (verbose !== undefined) {
            localVarQueryParameters['verbose'] = ObjectSerializer.serialize(verbose, "boolean");
        }
        if (scope !== undefined) {
            localVarQueryParameters['scope'] = ObjectSerializer.serialize(scope, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Network");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NetworkApi.prototype.networkList = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/networks';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<Network>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NetworkApi.prototype.networkPrune = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/networks/prune';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "NetworkPruneResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return NetworkApi;
}());
exports.NetworkApi = NetworkApi;
var NodeApiApiKeys;
(function (NodeApiApiKeys) {
})(NodeApiApiKeys = exports.NodeApiApiKeys || (exports.NodeApiApiKeys = {}));
var NodeApi = (function () {
    function NodeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(NodeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(NodeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    NodeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    NodeApi.prototype.setApiKey = function (key, value) {
        this.authentications[NodeApiApiKeys[key]].apiKey = value;
    };
    NodeApi.prototype.nodeDelete = function (id, force, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/nodes/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling nodeDelete.');
        }
        if (force !== undefined) {
            localVarQueryParameters['force'] = ObjectSerializer.serialize(force, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NodeApi.prototype.nodeInspect = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/nodes/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling nodeInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Node");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NodeApi.prototype.nodeList = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/nodes';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<Node>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    NodeApi.prototype.nodeUpdate = function (id, version, body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/nodes/{id}/update'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling nodeUpdate.');
        }
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling nodeUpdate.');
        }
        if (version !== undefined) {
            localVarQueryParameters['version'] = ObjectSerializer.serialize(version, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "NodeSpec")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return NodeApi;
}());
exports.NodeApi = NodeApi;
var PluginApiApiKeys;
(function (PluginApiApiKeys) {
})(PluginApiApiKeys = exports.PluginApiApiKeys || (exports.PluginApiApiKeys = {}));
var PluginApi = (function () {
    function PluginApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(PluginApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(PluginApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    PluginApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    PluginApi.prototype.setApiKey = function (key, value) {
        this.authentications[PluginApiApiKeys[key]].apiKey = value;
    };
    PluginApi.prototype.getPluginPrivileges = function (remote, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/privileges';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (remote === null || remote === undefined) {
            throw new Error('Required parameter remote was null or undefined when calling getPluginPrivileges.');
        }
        if (remote !== undefined) {
            localVarQueryParameters['remote'] = ObjectSerializer.serialize(remote, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<PluginPrivilegeItem>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginCreate = function (name, tarContext, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pluginCreate.');
        }
        if (name !== undefined) {
            localVarQueryParameters['name'] = ObjectSerializer.serialize(name, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(tarContext, "string")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginDelete = function (name, force, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pluginDelete.');
        }
        if (force !== undefined) {
            localVarQueryParameters['force'] = ObjectSerializer.serialize(force, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Plugin");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginDisable = function (name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/{name}/disable'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pluginDisable.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginEnable = function (name, timeout, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/{name}/enable'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pluginEnable.');
        }
        if (timeout !== undefined) {
            localVarQueryParameters['timeout'] = ObjectSerializer.serialize(timeout, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginInspect = function (name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/{name}/json'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pluginInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Plugin");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginList = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<Plugin>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginPull = function (remote, name, xRegistryAuth, body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/pull';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (remote === null || remote === undefined) {
            throw new Error('Required parameter remote was null or undefined when calling pluginPull.');
        }
        if (remote !== undefined) {
            localVarQueryParameters['remote'] = ObjectSerializer.serialize(remote, "string");
        }
        if (name !== undefined) {
            localVarQueryParameters['name'] = ObjectSerializer.serialize(name, "string");
        }
        localVarHeaderParams['X-Registry-Auth'] = ObjectSerializer.serialize(xRegistryAuth, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "Array<Body>")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginPush = function (name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/{name}/push'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pluginPush.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginSet = function (name, body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/{name}/set'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pluginSet.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "Array<string>")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    PluginApi.prototype.pluginUpgrade = function (name, remote, xRegistryAuth, body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/plugins/{name}/upgrade'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling pluginUpgrade.');
        }
        if (remote === null || remote === undefined) {
            throw new Error('Required parameter remote was null or undefined when calling pluginUpgrade.');
        }
        if (remote !== undefined) {
            localVarQueryParameters['remote'] = ObjectSerializer.serialize(remote, "string");
        }
        localVarHeaderParams['X-Registry-Auth'] = ObjectSerializer.serialize(xRegistryAuth, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "Array<Body>")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return PluginApi;
}());
exports.PluginApi = PluginApi;
var SecretApiApiKeys;
(function (SecretApiApiKeys) {
})(SecretApiApiKeys = exports.SecretApiApiKeys || (exports.SecretApiApiKeys = {}));
var SecretApi = (function () {
    function SecretApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SecretApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SecretApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    SecretApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SecretApi.prototype.setApiKey = function (key, value) {
        this.authentications[SecretApiApiKeys[key]].apiKey = value;
    };
    SecretApi.prototype.secretCreate = function (body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/secrets/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "object")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "IdResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SecretApi.prototype.secretDelete = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/secrets/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling secretDelete.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SecretApi.prototype.secretInspect = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/secrets/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling secretInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Secret");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SecretApi.prototype.secretList = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/secrets';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<Secret>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SecretApi.prototype.secretUpdate = function (id, version, body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/secrets/{id}/update'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling secretUpdate.');
        }
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling secretUpdate.');
        }
        if (version !== undefined) {
            localVarQueryParameters['version'] = ObjectSerializer.serialize(version, "number");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "SecretSpec")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SecretApi;
}());
exports.SecretApi = SecretApi;
var ServiceApiApiKeys;
(function (ServiceApiApiKeys) {
})(ServiceApiApiKeys = exports.ServiceApiApiKeys || (exports.ServiceApiApiKeys = {}));
var ServiceApi = (function () {
    function ServiceApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(ServiceApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ServiceApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    ServiceApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    ServiceApi.prototype.setApiKey = function (key, value) {
        this.authentications[ServiceApiApiKeys[key]].apiKey = value;
    };
    ServiceApi.prototype.serviceCreate = function (body, xRegistryAuth, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/services/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling serviceCreate.');
        }
        localVarHeaderParams['X-Registry-Auth'] = ObjectSerializer.serialize(xRegistryAuth, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "object")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ServiceCreateResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ServiceApi.prototype.serviceDelete = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/services/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling serviceDelete.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ServiceApi.prototype.serviceInspect = function (id, insertDefaults, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/services/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling serviceInspect.');
        }
        if (insertDefaults !== undefined) {
            localVarQueryParameters['insertDefaults'] = ObjectSerializer.serialize(insertDefaults, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Service");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ServiceApi.prototype.serviceList = function (filters, status, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/services';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        if (status !== undefined) {
            localVarQueryParameters['status'] = ObjectSerializer.serialize(status, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<Service>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ServiceApi.prototype.serviceLogs = function (id, details, follow, stdout, stderr, since, timestamps, tail, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/services/{id}/logs'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling serviceLogs.');
        }
        if (details !== undefined) {
            localVarQueryParameters['details'] = ObjectSerializer.serialize(details, "boolean");
        }
        if (follow !== undefined) {
            localVarQueryParameters['follow'] = ObjectSerializer.serialize(follow, "boolean");
        }
        if (stdout !== undefined) {
            localVarQueryParameters['stdout'] = ObjectSerializer.serialize(stdout, "boolean");
        }
        if (stderr !== undefined) {
            localVarQueryParameters['stderr'] = ObjectSerializer.serialize(stderr, "boolean");
        }
        if (since !== undefined) {
            localVarQueryParameters['since'] = ObjectSerializer.serialize(since, "number");
        }
        if (timestamps !== undefined) {
            localVarQueryParameters['timestamps'] = ObjectSerializer.serialize(timestamps, "boolean");
        }
        if (tail !== undefined) {
            localVarQueryParameters['tail'] = ObjectSerializer.serialize(tail, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    ServiceApi.prototype.serviceUpdate = function (id, body, version, registryAuthFrom, rollback, xRegistryAuth, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/services/{id}/update'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling serviceUpdate.');
        }
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling serviceUpdate.');
        }
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling serviceUpdate.');
        }
        if (version !== undefined) {
            localVarQueryParameters['version'] = ObjectSerializer.serialize(version, "number");
        }
        if (registryAuthFrom !== undefined) {
            localVarQueryParameters['registryAuthFrom'] = ObjectSerializer.serialize(registryAuthFrom, "'spec' | 'previous-spec'");
        }
        if (rollback !== undefined) {
            localVarQueryParameters['rollback'] = ObjectSerializer.serialize(rollback, "string");
        }
        localVarHeaderParams['X-Registry-Auth'] = ObjectSerializer.serialize(xRegistryAuth, "string");
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "object")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "ServiceUpdateResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return ServiceApi;
}());
exports.ServiceApi = ServiceApi;
var SessionApiApiKeys;
(function (SessionApiApiKeys) {
})(SessionApiApiKeys = exports.SessionApiApiKeys || (exports.SessionApiApiKeys = {}));
var SessionApi = (function () {
    function SessionApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SessionApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SessionApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    SessionApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SessionApi.prototype.setApiKey = function (key, value) {
        this.authentications[SessionApiApiKeys[key]].apiKey = value;
    };
    SessionApi.prototype.session = function (options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/session';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SessionApi;
}());
exports.SessionApi = SessionApi;
var SwarmApiApiKeys;
(function (SwarmApiApiKeys) {
})(SwarmApiApiKeys = exports.SwarmApiApiKeys || (exports.SwarmApiApiKeys = {}));
var SwarmApi = (function () {
    function SwarmApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SwarmApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SwarmApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    SwarmApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SwarmApi.prototype.setApiKey = function (key, value) {
        this.authentications[SwarmApiApiKeys[key]].apiKey = value;
    };
    SwarmApi.prototype.swarmInit = function (body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/swarm/init';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling swarmInit.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "Body1")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SwarmApi.prototype.swarmInspect = function (options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/swarm';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Swarm");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SwarmApi.prototype.swarmJoin = function (body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/swarm/join';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling swarmJoin.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "Body2")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SwarmApi.prototype.swarmLeave = function (force, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/swarm/leave';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (force !== undefined) {
            localVarQueryParameters['force'] = ObjectSerializer.serialize(force, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SwarmApi.prototype.swarmUnlock = function (body, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/swarm/unlock';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling swarmUnlock.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "Body3")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SwarmApi.prototype.swarmUnlockkey = function (options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/swarm/unlockkey';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "UnlockKeyResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SwarmApi.prototype.swarmUpdate = function (body, version, rotateWorkerToken, rotateManagerToken, rotateManagerUnlockKey, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/swarm/update';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (body === null || body === undefined) {
            throw new Error('Required parameter body was null or undefined when calling swarmUpdate.');
        }
        if (version === null || version === undefined) {
            throw new Error('Required parameter version was null or undefined when calling swarmUpdate.');
        }
        if (version !== undefined) {
            localVarQueryParameters['version'] = ObjectSerializer.serialize(version, "number");
        }
        if (rotateWorkerToken !== undefined) {
            localVarQueryParameters['rotateWorkerToken'] = ObjectSerializer.serialize(rotateWorkerToken, "boolean");
        }
        if (rotateManagerToken !== undefined) {
            localVarQueryParameters['rotateManagerToken'] = ObjectSerializer.serialize(rotateManagerToken, "boolean");
        }
        if (rotateManagerUnlockKey !== undefined) {
            localVarQueryParameters['rotateManagerUnlockKey'] = ObjectSerializer.serialize(rotateManagerUnlockKey, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(body, "SwarmSpec")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SwarmApi;
}());
exports.SwarmApi = SwarmApi;
var SystemApiApiKeys;
(function (SystemApiApiKeys) {
})(SystemApiApiKeys = exports.SystemApiApiKeys || (exports.SystemApiApiKeys = {}));
var SystemApi = (function () {
    function SystemApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(SystemApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(SystemApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    SystemApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    SystemApi.prototype.setApiKey = function (key, value) {
        this.authentications[SystemApiApiKeys[key]].apiKey = value;
    };
    SystemApi.prototype.systemAuth = function (authConfig, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/auth';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(authConfig, "AuthConfig")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "SystemAuthResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SystemApi.prototype.systemDataUsage = function (options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/system/df';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "SystemDataUsageResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SystemApi.prototype.systemEvents = function (since, until, filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/events';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (since !== undefined) {
            localVarQueryParameters['since'] = ObjectSerializer.serialize(since, "string");
        }
        if (until !== undefined) {
            localVarQueryParameters['until'] = ObjectSerializer.serialize(until, "string");
        }
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "SystemEventsResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SystemApi.prototype.systemInfo = function (options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/info';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "SystemInfo");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SystemApi.prototype.systemPing = function (options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/_ping';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SystemApi.prototype.systemPingHead = function (options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/_ping';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'HEAD',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    SystemApi.prototype.systemVersion = function (options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/version';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "SystemVersion");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return SystemApi;
}());
exports.SystemApi = SystemApi;
var TaskApiApiKeys;
(function (TaskApiApiKeys) {
})(TaskApiApiKeys = exports.TaskApiApiKeys || (exports.TaskApiApiKeys = {}));
var TaskApi = (function () {
    function TaskApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(TaskApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TaskApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    TaskApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    TaskApi.prototype.setApiKey = function (key, value) {
        this.authentications[TaskApiApiKeys[key]].apiKey = value;
    };
    TaskApi.prototype.taskInspect = function (id, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/tasks/{id}'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling taskInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Task");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    TaskApi.prototype.taskList = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/tasks';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Array<Task>");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    TaskApi.prototype.taskLogs = function (id, details, follow, stdout, stderr, since, timestamps, tail, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/tasks/{id}/logs'
            .replace('{' + 'id' + '}', encodeURIComponent(String(id)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (id === null || id === undefined) {
            throw new Error('Required parameter id was null or undefined when calling taskLogs.');
        }
        if (details !== undefined) {
            localVarQueryParameters['details'] = ObjectSerializer.serialize(details, "boolean");
        }
        if (follow !== undefined) {
            localVarQueryParameters['follow'] = ObjectSerializer.serialize(follow, "boolean");
        }
        if (stdout !== undefined) {
            localVarQueryParameters['stdout'] = ObjectSerializer.serialize(stdout, "boolean");
        }
        if (stderr !== undefined) {
            localVarQueryParameters['stderr'] = ObjectSerializer.serialize(stderr, "boolean");
        }
        if (since !== undefined) {
            localVarQueryParameters['since'] = ObjectSerializer.serialize(since, "number");
        }
        if (timestamps !== undefined) {
            localVarQueryParameters['timestamps'] = ObjectSerializer.serialize(timestamps, "boolean");
        }
        if (tail !== undefined) {
            localVarQueryParameters['tail'] = ObjectSerializer.serialize(tail, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "string");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return TaskApi;
}());
exports.TaskApi = TaskApi;
var VolumeApiApiKeys;
(function (VolumeApiApiKeys) {
})(VolumeApiApiKeys = exports.VolumeApiApiKeys || (exports.VolumeApiApiKeys = {}));
var VolumeApi = (function () {
    function VolumeApi(basePathOrUsername, password, basePath) {
        this._basePath = defaultBasePath;
        this.defaultHeaders = {};
        this._useQuerystring = false;
        this.authentications = {
            'default': new VoidAuth(),
        };
        if (password) {
            if (basePath) {
                this.basePath = basePath;
            }
        }
        else {
            if (basePathOrUsername) {
                this.basePath = basePathOrUsername;
            }
        }
    }
    Object.defineProperty(VolumeApi.prototype, "useQuerystring", {
        set: function (value) {
            this._useQuerystring = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(VolumeApi.prototype, "basePath", {
        get: function () {
            return this._basePath;
        },
        set: function (basePath) {
            this._basePath = basePath;
        },
        enumerable: false,
        configurable: true
    });
    VolumeApi.prototype.setDefaultAuthentication = function (auth) {
        this.authentications.default = auth;
    };
    VolumeApi.prototype.setApiKey = function (key, value) {
        this.authentications[VolumeApiApiKeys[key]].apiKey = value;
    };
    VolumeApi.prototype.volumeCreate = function (volumeConfig, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/volumes/create';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (volumeConfig === null || volumeConfig === undefined) {
            throw new Error('Required parameter volumeConfig was null or undefined when calling volumeCreate.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
            body: ObjectSerializer.serialize(volumeConfig, "VolumeConfig")
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Volume");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    VolumeApi.prototype.volumeDelete = function (name, force, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/volumes/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling volumeDelete.');
        }
        if (force !== undefined) {
            localVarQueryParameters['force'] = ObjectSerializer.serialize(force, "boolean");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'DELETE',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    VolumeApi.prototype.volumeInspect = function (name, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/volumes/{name}'
            .replace('{' + 'name' + '}', encodeURIComponent(String(name)));
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (name === null || name === undefined) {
            throw new Error('Required parameter name was null or undefined when calling volumeInspect.');
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "Volume");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    VolumeApi.prototype.volumeList = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/volumes';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'GET',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "VolumeListResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    VolumeApi.prototype.volumePrune = function (filters, options) {
        if (options === void 0) { options = {}; }
        var localVarPath = this.basePath + '/volumes/prune';
        var localVarQueryParameters = {};
        var localVarHeaderParams = Object.assign({}, this.defaultHeaders);
        var localVarFormParams = {};
        if (filters !== undefined) {
            localVarQueryParameters['filters'] = ObjectSerializer.serialize(filters, "string");
        }
        Object.assign(localVarHeaderParams, options.headers);
        var localVarUseFormData = false;
        var localVarRequestOptions = {
            method: 'POST',
            qs: localVarQueryParameters,
            headers: localVarHeaderParams,
            uri: localVarPath,
            useQuerystring: this._useQuerystring,
            json: true,
        };
        this.authentications.default.applyToRequest(localVarRequestOptions);
        if (Object.keys(localVarFormParams).length) {
            if (localVarUseFormData) {
                localVarRequestOptions.formData = localVarFormParams;
            }
            else {
                localVarRequestOptions.form = localVarFormParams;
            }
        }
        return new Promise(function (resolve, reject) {
            localVarRequest(localVarRequestOptions, function (error, response, body) {
                if (error) {
                    reject(error);
                }
                else {
                    body = ObjectSerializer.deserialize(body, "VolumePruneResponse");
                    if (response.statusCode && response.statusCode >= 200 && response.statusCode <= 299) {
                        resolve({ response: response, body: body });
                    }
                    else {
                        reject({ response: response, body: body });
                    }
                }
            });
        });
    };
    return VolumeApi;
}());
exports.VolumeApi = VolumeApi;
//# sourceMappingURL=api.js.map