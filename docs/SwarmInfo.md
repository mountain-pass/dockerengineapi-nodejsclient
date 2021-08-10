# DockerEngineApi.SwarmInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodeID** | **String** | Unique identifier of for this node in the swarm. | [optional] [default to &#39;&#39;]
**nodeAddr** | **String** | IP address at which this node can be reached by other nodes in the swarm.  | [optional] [default to &#39;&#39;]
**localNodeState** | [**LocalNodeState**](LocalNodeState.md) |  | [optional] 
**controlAvailable** | **Boolean** |  | [optional] [default to false]
**error** | **String** |  | [optional] [default to &#39;&#39;]
**remoteManagers** | [**[PeerNode]**](PeerNode.md) | List of ID&#39;s and addresses of other managers in the swarm.  | [optional] 
**nodes** | **Number** | Total number of nodes in the swarm. | [optional] 
**managers** | **Number** | Total number of managers in the swarm. | [optional] 
**cluster** | [**ClusterInfo**](ClusterInfo.md) |  | [optional] 


