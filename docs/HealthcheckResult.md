# DockerEngineApi.HealthcheckResult

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**start** | **Date** | Date and time at which this check started in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.  | [optional] 
**end** | **String** | Date and time at which this check ended in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.  | [optional] 
**exitCode** | **Number** | ExitCode meanings:  - `0` healthy - `1` unhealthy - `2` reserved (considered unhealthy) - other values: error running probe  | [optional] 
**output** | **String** | Output from last check | [optional] 


