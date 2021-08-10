# DockerEngineApi.NodeSpec

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | Name for the node. | [optional] 
**labels** | **{String: String}** | User-defined key/value metadata. | [optional] 
**role** | **String** | Role of the node. | [optional] 
**availability** | **String** | Availability of the node. | [optional] 


<a name="RoleEnum"></a>
## Enum: RoleEnum


* `worker` (value: `"worker"`)

* `manager` (value: `"manager"`)




<a name="AvailabilityEnum"></a>
## Enum: AvailabilityEnum


* `active` (value: `"active"`)

* `pause` (value: `"pause"`)

* `drain` (value: `"drain"`)




