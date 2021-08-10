# DockerEngineApi.TaskSpecContainerSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **String** | The image name to use for the container | [optional] 
**labels** | **{String: String}** | User-defined key/value data. | [optional] 
**command** | **[String]** | The command to be run in the image. | [optional] 
**args** | **[String]** | Arguments to the command. | [optional] 
**hostname** | **String** | The hostname to use for the container, as a valid [RFC 1123](https://tools.ietf.org/html/rfc1123) hostname.  | [optional] 
**env** | **[String]** | A list of environment variables in the form `VAR=value`.  | [optional] 
**dir** | **String** | The working directory for commands to run in. | [optional] 
**user** | **String** | The user inside the container. | [optional] 
**groups** | **[String]** | A list of additional groups that the container process will run as.  | [optional] 
**privileges** | [**TaskSpecContainerSpecPrivileges**](TaskSpecContainerSpecPrivileges.md) |  | [optional] 
**TTY** | **Boolean** | Whether a pseudo-TTY should be allocated. | [optional] 
**openStdin** | **Boolean** | Open `stdin` | [optional] 
**readOnly** | **Boolean** | Mount the container's root filesystem as read only. | [optional] 
**mounts** | [**[Mount]**](Mount.md) | Specification for mounts to be added to containers created as part of the service.  | [optional] 
**stopSignal** | **String** | Signal to stop the container. | [optional] 
**stopGracePeriod** | **Number** | Amount of time to wait for the container to terminate before forcefully killing it.  | [optional] 
**healthCheck** | [**HealthConfig**](HealthConfig.md) |  | [optional] 
**hosts** | **[String]** | A list of hostname/IP mappings to add to the container's `hosts` file. The format of extra hosts is specified in the [hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html) man page:      IP_address canonical_hostname [aliases...]  | [optional] 
**dNSConfig** | [**TaskSpecContainerSpecDNSConfig**](TaskSpecContainerSpecDNSConfig.md) |  | [optional] 
**secrets** | [**[TaskSpecContainerSpecSecrets]**](TaskSpecContainerSpecSecrets.md) | Secrets contains references to zero or more secrets that will be exposed to the service.  | [optional] 
**configs** | [**[TaskSpecContainerSpecConfigs]**](TaskSpecContainerSpecConfigs.md) | Configs contains references to zero or more configs that will be exposed to the service.  | [optional] 
**isolation** | **String** | Isolation technology of the containers running the service. (Windows only)  | [optional] 
**init** | **Boolean** | Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used.  | [optional] 
**sysctls** | **{String: String}** | Set kernel namedspaced parameters (sysctls) in the container. The Sysctls option on services accepts the same sysctls as the are supported on containers. Note that while the same sysctls are supported, no guarantees or checks are made about their suitability for a clustered environment, and it's up to the user to determine whether a given sysctl will work properly in a Service.  | [optional] 
**capabilityAdd** | **[String]** | A list of kernel capabilities to add to the default set for the container.  | [optional] 
**capabilityDrop** | **[String]** | A list of kernel capabilities to drop from the default set for the container.  | [optional] 
**ulimits** | [**[ResourcesUlimits]**](ResourcesUlimits.md) | A list of resource limits to set in the container. For example: `{\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048}`\"  | [optional] 


<a name="IsolationEnum"></a>
## Enum: IsolationEnum


* `_default` (value: `"default"`)

* `process` (value: `"process"`)

* `hyperv` (value: `"hyperv"`)




