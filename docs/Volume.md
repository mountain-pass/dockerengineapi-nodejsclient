# DockerEngineApi.Volume

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name of the volume. | 
**driver** | **String** | Name of the volume driver used by the volume. | 
**mountpoint** | **String** | Mount path of the volume on the host. | 
**createdAt** | **String** | Date/Time the volume was created. | [optional] 
**status** | **{String: Object}** | Low-level details about the volume, provided by the volume driver. Details are returned as a map with key/value pairs: `{\"key\":\"value\",\"key2\":\"value2\"}`.  The `Status` field is optional, and is omitted if the volume driver does not support this feature.  | [optional] 
**labels** | **{String: String}** | User-defined key/value metadata. | 
**scope** | **String** | The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level.  | [default to 'local']
**options** | **{String: String}** | The driver specific options used when creating the volume.  | 
**usageData** | [**VolumeUsageData**](VolumeUsageData.md) |  | [optional] 


<a name="ScopeEnum"></a>
## Enum: ScopeEnum


* `local` (value: `"local"`)

* `global` (value: `"global"`)




