# DockerEngineApi.EndpointSettings

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**iPAMConfig** | [**EndpointIPAMConfig**](EndpointIPAMConfig.md) |  | [optional] 
**links** | **[String]** |  | [optional] 
**aliases** | **[String]** |  | [optional] 
**networkID** | **String** | Unique ID of the network.  | [optional] 
**endpointID** | **String** | Unique ID for the service endpoint in a Sandbox.  | [optional] 
**gateway** | **String** | Gateway address for this network.  | [optional] 
**iPAddress** | **String** | IPv4 address.  | [optional] 
**iPPrefixLen** | **Number** | Mask length of the IPv4 address.  | [optional] 
**iPv6Gateway** | **String** | IPv6 gateway address.  | [optional] 
**globalIPv6Address** | **String** | Global IPv6 address.  | [optional] 
**globalIPv6PrefixLen** | **Number** | Mask length of the global IPv6 address.  | [optional] 
**macAddress** | **String** | MAC address for the endpoint on this network.  | [optional] 
**driverOpts** | **{String: String}** | DriverOpts is a mapping of driver options and values. These options are passed directly to the driver and are driver specific.  | [optional] 


