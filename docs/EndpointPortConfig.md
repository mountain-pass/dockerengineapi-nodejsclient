# DockerEngineApi.EndpointPortConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** |  | [optional] 
**protocol** | **String** |  | [optional] 
**targetPort** | **Number** | The port inside the container. | [optional] 
**publishedPort** | **Number** | The port on the swarm hosts. | [optional] 
**publishMode** | **String** | The mode in which port is published.  <p><br /></p>  - \"ingress\" makes the target port accessible on every node,   regardless of whether there is a task for the service running on   that node or not. - \"host\" bypasses the routing mesh and publish the port directly on   the swarm node where that service is running.  | [optional] [default to 'ingress']


<a name="ProtocolEnum"></a>
## Enum: ProtocolEnum


* `tcp` (value: `"tcp"`)

* `udp` (value: `"udp"`)

* `sctp` (value: `"sctp"`)




<a name="PublishModeEnum"></a>
## Enum: PublishModeEnum


* `ingress` (value: `"ingress"`)

* `host` (value: `"host"`)




