# DockerEngineApi.EndpointSpec

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**mode** | **String** | The mode of resolution to use for internal load balancing between tasks.  | [optional] [default to &#39;vip&#39;]
**ports** | [**[EndpointPortConfig]**](EndpointPortConfig.md) | List of exposed ports that this service is accessible on from the outside. Ports can only be provided if &#x60;vip&#x60; resolution mode is used.  | [optional] 



## Enum: ModeEnum


* `vip` (value: `"vip"`)

* `dnsrr` (value: `"dnsrr"`)




