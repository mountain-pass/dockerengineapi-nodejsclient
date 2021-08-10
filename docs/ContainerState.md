# DockerEngineApi.ContainerState

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**status** | **String** | String representation of the container state. Can be one of \"created\", \"running\", \"paused\", \"restarting\", \"removing\", \"exited\", or \"dead\".  | [optional] 
**running** | **Boolean** | Whether this container is running.  Note that a running container can be _paused_. The `Running` and `Paused` booleans are not mutually exclusive:  When pausing a container (on Linux), the freezer cgroup is used to suspend all processes in the container. Freezing the process requires the process to be running. As a result, paused containers are both `Running` _and_ `Paused`.  Use the `Status` field instead to determine if a container's state is \"running\".  | [optional] 
**paused** | **Boolean** | Whether this container is paused. | [optional] 
**restarting** | **Boolean** | Whether this container is restarting. | [optional] 
**oOMKilled** | **Boolean** | Whether this container has been killed because it ran out of memory.  | [optional] 
**dead** | **Boolean** |  | [optional] 
**pid** | **Number** | The process ID of this container | [optional] 
**exitCode** | **Number** | The last exit code of this container | [optional] 
**error** | **String** |  | [optional] 
**startedAt** | **String** | The time when this container was last started. | [optional] 
**finishedAt** | **String** | The time when this container last exited. | [optional] 
**health** | [**Health**](Health.md) |  | [optional] 


<a name="StatusEnum"></a>
## Enum: StatusEnum


* `created` (value: `"created"`)

* `running` (value: `"running"`)

* `paused` (value: `"paused"`)

* `restarting` (value: `"restarting"`)

* `removing` (value: `"removing"`)

* `exited` (value: `"exited"`)

* `dead` (value: `"dead"`)




