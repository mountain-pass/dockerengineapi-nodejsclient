# DockerEngineApi.ServiceSpecUpdateConfig

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parallelism** | **Number** | Maximum number of tasks to be updated in one iteration (0 means unlimited parallelism).  | [optional] 
**delay** | **Number** | Amount of time between updates, in nanoseconds. | [optional] 
**failureAction** | **String** | Action to take if an updated task fails to run, or stops running during the update.  | [optional] 
**monitor** | **Number** | Amount of time to monitor each updated task for failures, in nanoseconds.  | [optional] 
**maxFailureRatio** | **Number** | The fraction of tasks that may fail during an update before the failure action is invoked, specified as a floating point number between 0 and 1.  | [optional] 
**order** | **String** | The order of operations when rolling out an updated task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.  | [optional] 



## Enum: FailureActionEnum


* `continue` (value: `"continue"`)

* `pause` (value: `"pause"`)

* `rollback` (value: `"rollback"`)





## Enum: OrderEnum


* `stop-first` (value: `"stop-first"`)

* `start-first` (value: `"start-first"`)




