# DockerEngineApi.Body2

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**listenAddr** | **String** | Listen address used for inter-manager communication if the node gets promoted to manager, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP).  | [optional] 
**advertiseAddr** | **String** | Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible.  | [optional] 
**dataPathAddr** | **String** | Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`, or an interface, like `eth0`. If `DataPathAddr` is unspecified, the same addres as `AdvertiseAddr` is used.  The `DataPathAddr` specifies the address that global scope network drivers will publish towards other nodes in order to reach the containers running on this node. Using this parameter it is possible to separate the container data traffic from the management traffic of the cluster.  | [optional] 
**remoteAddrs** | **[String]** | Addresses of manager nodes already participating in the swarm.  | [optional] 
**joinToken** | **String** | Secret token for joining this swarm. | [optional] 


