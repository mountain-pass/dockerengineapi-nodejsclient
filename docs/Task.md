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
**assignedGenericResources** | **[Object]** | User-defined resources can be either Integer resources (e.g, &#x60;SSD&#x3D;3&#x60;) or String resources (e.g, &#x60;GPU&#x3D;UUID1&#x60;).  | [optional] 
**status** | [**TaskStatus**](TaskStatus.md) |  | [optional] 
**desiredState** | [**TaskState**](TaskState.md) |  | [optional] 
**jobIteration** | [**ObjectVersion**](ObjectVersion.md) |  | [optional] 


