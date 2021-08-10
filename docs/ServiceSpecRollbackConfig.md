# DockerEngineApi.ServiceSpecRollbackConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parallelism** | **Number** | Maximum number of tasks to be rolled back in one iteration (0 means unlimited parallelism).  | [optional] 
**delay** | **Number** | Amount of time between rollback iterations, in nanoseconds.  | [optional] 
**failureAction** | **String** | Action to take if an rolled back task fails to run, or stops running during the rollback.  | [optional] 
**monitor** | **Number** | Amount of time to monitor each rolled back task for failures, in nanoseconds.  | [optional] 
**maxFailureRatio** | **Number** | The fraction of tasks that may fail during a rollback before the failure action is invoked, specified as a floating point number between 0 and 1.  | [optional] 
**order** | **String** | The order of operations when rolling back a task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down.  | [optional] 


<a name="FailureActionEnum"></a>
## Enum: FailureActionEnum


* `_continue` (value: `"continue"`)

* `pause` (value: `"pause"`)




<a name="OrderEnum"></a>
## Enum: OrderEnum


* `stopFirst` (value: `"stop-first"`)

* `startFirst` (value: `"start-first"`)




