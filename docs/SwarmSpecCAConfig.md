# DockerEngineApi.SwarmSpecCAConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodeCertExpiry** | **Number** | The duration node certificates are issued for. | [optional] 
**externalCAs** | [**[SwarmSpecCAConfigExternalCAs]**](SwarmSpecCAConfigExternalCAs.md) | Configuration for forwarding signing requests to an external certificate authority.  | [optional] 
**signingCACert** | **String** | The desired signing CA certificate for all swarm node TLS leaf certificates, in PEM format.  | [optional] 
**signingCAKey** | **String** | The desired signing CA key for all swarm node TLS leaf certificates, in PEM format.  | [optional] 
**forceRotate** | **Number** | An integer whose purpose is to force swarm to generate a new signing CA certificate and key, if none have been specified in `SigningCACert` and `SigningCAKey`  | [optional] 


