# DockerEngineApi.TaskSpecRestartPolicy

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**condition** | **String** | Condition for restart. | [optional] 
**delay** | **Number** | Delay between restart attempts. | [optional] 
**maxAttempts** | **Number** | Maximum attempts to restart a given container before giving up (default value is 0, which is ignored).  | [optional] [default to 0]
**window** | **Number** | Windows is the time window used to evaluate the restart policy (default value is 0, which is unbounded).  | [optional] [default to 0]



## Enum: ConditionEnum


* `none` (value: `"none"`)

* `on-failure` (value: `"on-failure"`)

* `any` (value: `"any"`)




