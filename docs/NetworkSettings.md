# DockerEngineApi.NetworkSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bridge** | **String** | Name of the network'a bridge (for example, `docker0`). | [optional] 
**sandboxID** | **String** | SandboxID uniquely represents a container's network stack. | [optional] 
**hairpinMode** | **Boolean** | Indicates if hairpin NAT should be enabled on the virtual interface.  | [optional] 
**linkLocalIPv6Address** | **String** | IPv6 unicast address using the link-local prefix. | [optional] 
**linkLocalIPv6PrefixLen** | **Number** | Prefix length of the IPv6 unicast address. | [optional] 
**ports** | [**PortMap**](PortMap.md) |  | [optional] 
**sandboxKey** | **String** | SandboxKey identifies the sandbox | [optional] 
**secondaryIPAddresses** | [**[Address]**](Address.md) |  | [optional] 
**secondaryIPv6Addresses** | [**[Address]**](Address.md) |  | [optional] 
**endpointID** | **String** | EndpointID uniquely represents a service endpoint in a Sandbox.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0  | [optional] 
**gateway** | **String** | Gateway address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0  | [optional] 
**globalIPv6Address** | **String** | Global IPv6 address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0  | [optional] 
**globalIPv6PrefixLen** | **Number** | Mask length of the global IPv6 address.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0  | [optional] 
**iPAddress** | **String** | IPv4 address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0  | [optional] 
**iPPrefixLen** | **Number** | Mask length of the IPv4 address.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0  | [optional] 
**iPv6Gateway** | **String** | IPv6 gateway address for this network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0  | [optional] 
**macAddress** | **String** | MAC address for the container on the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0  | [optional] 
**networks** | [**{String: EndpointSettings}**](EndpointSettings.md) | Information about all networks that the container is connected to.  | [optional] 


