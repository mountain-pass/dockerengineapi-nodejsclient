# DockerEngineApi.VolumeUsageData

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**size** | **Number** | Amount of disk space used by the volume (in bytes). This information is only available for volumes created with the `\"local\"` volume driver. For volumes created with other volume drivers, this field is set to `-1` (\"not available\")  | 
**refCount** | **Number** | The number of containers referencing this volume. This field is set to `-1` if the reference-count is not available.  | 


