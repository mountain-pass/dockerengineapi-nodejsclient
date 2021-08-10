# DockerEngineApi.Task

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **String** | The ID of the task. | [optional] 
**version** | [**ObjectVersion**](ObjectVersion.md) |  | [optional] 
**createdAt** | **String** |  | [optional] 
**updatedAt** | **String** |  | [optional] 
**name** | **String** | Name of the task. | [optional] 
**labels** | **{String: String}** | User-defined key/value metadata. | [optional] 
**spec** | [**TaskSpec**](TaskSpec.md) |  | [optional] 
**serviceID** | **String** | The ID of the service this task is part of. | [optional] 
**slot** | **Number** |  | [optional] 
**nodeID** | **String** | The ID of the node that this task is on. | [optional] 
**assignedGenericResources** | [**GenericResources**](GenericResources.md) |  | [optional] 
**status** | [**TaskStatus**](TaskStatus.md) |  | [optional] 
**desiredState** | [**TaskState**](TaskState.md) |  | [optional] 
**jobIteration** | [**ObjectVersion**](ObjectVersion.md) | If the Service this Task belongs to is a job-mode service, contains the JobIteration of the Service this Task was created for. Absent if the Task was created for a Replicated or Global Service.  | [optional] 


