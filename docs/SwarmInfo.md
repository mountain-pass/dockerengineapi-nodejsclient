# DockerEngineApi.SwarmInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodeID** | **String** | Unique identifier of for this node in the swarm. | [optional] [default to '']
**nodeAddr** | **String** | IP address at which this node can be reached by other nodes in the swarm.  | [optional] [default to '']
**localNodeState** | [**LocalNodeState**](LocalNodeState.md) |  | [optional] 
**controlAvailable** | **Boolean** |  | [optional] [default to false]
**error** | **String** |  | [optional] [default to '']
**remoteManagers** | [**[PeerNode]**](PeerNode.md) | List of ID's and addresses of other managers in the swarm.  | [optional] 
**nodes** | **Number** | Total number of nodes in the swarm. | [optional] 
**managers** | **Number** | Total number of managers in the swarm. | [optional] 
**cluster** | [**ClusterInfo**](ClusterInfo.md) |  | [optional] 


