# DockerEngineApi.Health

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | Status is one of &#x60;none&#x60;, &#x60;starting&#x60;, &#x60;healthy&#x60; or &#x60;unhealthy&#x60;  - \&quot;none\&quot;      Indicates there is no healthcheck - \&quot;starting\&quot;  Starting indicates that the container is not yet ready - \&quot;healthy\&quot;   Healthy indicates that the container is running correctly - \&quot;unhealthy\&quot; Unhealthy indicates that the container has a problem  | [optional] 
**failingStreak** | **Number** | FailingStreak is the number of consecutive failures | [optional] 
**log** | [**[HealthcheckResult]**](HealthcheckResult.md) | Log contains the last few results (oldest first)  | [optional] 



## Enum: StatusEnum


* `none` (value: `"none"`)

* `starting` (value: `"starting"`)

* `healthy` (value: `"healthy"`)

* `unhealthy` (value: `"unhealthy"`)




