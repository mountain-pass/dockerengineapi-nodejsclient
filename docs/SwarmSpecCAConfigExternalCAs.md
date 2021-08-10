# DockerEngineApi.SwarmSpecCAConfigExternalCAs

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **String** | Protocol for communication with the external CA (currently only &#x60;cfssl&#x60; is supported).  | [optional] [default to &#39;cfssl&#39;]
**URL** | **String** | URL where certificate signing requests should be sent.  | [optional] 
**options** | **{String: String}** | An object with key/value pairs that are interpreted as protocol-specific options for the external CA driver.  | [optional] 
**cACert** | **String** | The root CA certificate (in PEM format) this external CA uses to issue TLS certificates (assumed to be to the current swarm root CA certificate if not provided).  | [optional] 



## Enum: ProtocolEnum


* `cfssl` (value: `"cfssl"`)




