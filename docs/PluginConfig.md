# DockerEngineApi.PluginConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dockerVersion** | **String** | Docker Version used to create the plugin | [optional] 
**description** | **String** |  | 
**documentation** | **String** |  | 
**_interface** | [**PluginConfigInterface**](PluginConfigInterface.md) |  | 
**entrypoint** | **[String]** |  | 
**workDir** | **String** |  | 
**user** | [**PluginConfigUser**](PluginConfigUser.md) |  | [optional] 
**network** | [**PluginConfigNetwork**](PluginConfigNetwork.md) |  | 
**linux** | [**PluginConfigLinux**](PluginConfigLinux.md) |  | 
**propagatedMount** | **String** |  | 
**ipcHost** | **Boolean** |  | 
**pidHost** | **Boolean** |  | 
**mounts** | [**[PluginMount]**](PluginMount.md) |  | 
**env** | [**[PluginEnv]**](PluginEnv.md) |  | 
**args** | [**PluginConfigArgs**](PluginConfigArgs.md) |  | 
**rootfs** | [**PluginConfigRootfs**](PluginConfigRootfs.md) |  | [optional] 


