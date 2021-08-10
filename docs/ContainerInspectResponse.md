# DockerEngineApi.ContainerInspectResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The ID of the container | [optional] 
**created** | **String** | The time the container was created | [optional] 
**path** | **String** | The path to the command being run | [optional] 
**args** | **[String]** | The arguments to the command being run | [optional] 
**state** | [**ContainerState**](ContainerState.md) |  | [optional] 
**image** | **String** | The container's image ID | [optional] 
**resolvConfPath** | **String** |  | [optional] 
**hostnamePath** | **String** |  | [optional] 
**hostsPath** | **String** |  | [optional] 
**logPath** | **String** |  | [optional] 
**name** | **String** |  | [optional] 
**restartCount** | **Number** |  | [optional] 
**driver** | **String** |  | [optional] 
**platform** | **String** |  | [optional] 
**mountLabel** | **String** |  | [optional] 
**processLabel** | **String** |  | [optional] 
**appArmorProfile** | **String** |  | [optional] 
**execIDs** | **[String]** | IDs of exec instances that are running in the container. | [optional] 
**hostConfig** | [**HostConfig**](HostConfig.md) |  | [optional] 
**graphDriver** | [**GraphDriverData**](GraphDriverData.md) |  | [optional] 
**sizeRw** | **Number** | The size of files that have been created or changed by this container.  | [optional] 
**sizeRootFs** | **Number** | The total size of all the files in this container. | [optional] 
**mounts** | [**[MountPoint]**](MountPoint.md) |  | [optional] 
**config** | [**ContainerConfig**](ContainerConfig.md) |  | [optional] 
**networkSettings** | [**NetworkSettings**](NetworkSettings.md) |  | [optional] 


