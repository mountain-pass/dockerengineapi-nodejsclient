# DockerEngineApi.TaskSpecContainerSpecConfigs

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | [**TaskSpecContainerSpecFile1**](TaskSpecContainerSpecFile1.md) |  | [optional] 
**runtime** | **Object** | Runtime represents a target that is not mounted into the container but is used by the task  <p><br /><p>  > **Note**: `Configs.File` and `Configs.Runtime` are mutually > exclusive  | [optional] 
**configID** | **String** | ConfigID represents the ID of the specific config that we're referencing.  | [optional] 
**configName** | **String** | ConfigName is the name of the config that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID.  | [optional] 


