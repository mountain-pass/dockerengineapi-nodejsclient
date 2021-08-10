# DockerEngineApi.Health

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Status is one of `none`, `starting`, `healthy` or `unhealthy`  - \"none\"      Indicates there is no healthcheck - \"starting\"  Starting indicates that the container is not yet ready - \"healthy\"   Healthy indicates that the container is running correctly - \"unhealthy\" Unhealthy indicates that the container has a problem  | [optional] 
**failingStreak** | **Number** | FailingStreak is the number of consecutive failures | [optional] 
**log** | [**[HealthcheckResult]**](HealthcheckResult.md) | Log contains the last few results (oldest first)  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `none` (value: `"none"`)

* `starting` (value: `"starting"`)

* `healthy` (value: `"healthy"`)

* `unhealthy` (value: `"unhealthy"`)




