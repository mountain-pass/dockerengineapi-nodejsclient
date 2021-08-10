# DockerEngineApi.EndpointSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | The mode of resolution to use for internal load balancing between tasks.  | [optional] [default to 'vip']
**ports** | [**[EndpointPortConfig]**](EndpointPortConfig.md) | List of exposed ports that this service is accessible on from the outside. Ports can only be provided if `vip` resolution mode is used.  | [optional] 


<a name="ModeEnum"></a>
## Enum: ModeEnum


* `vip` (value: `"vip"`)

* `dnsrr` (value: `"dnsrr"`)




