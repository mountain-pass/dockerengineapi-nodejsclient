# DockerEngineApi.HealthConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test** | **[String]** | The test to perform. Possible values are:  - `[]` inherit healthcheck from image or parent image - `[\"NONE\"]` disable healthcheck - `[\"CMD\", args...]` exec arguments directly - `[\"CMD-SHELL\", command]` run command with system's default shell  | [optional] 
**interval** | **Number** | The time to wait between checks in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit.  | [optional] 
**timeout** | **Number** | The time to wait before considering the check to have hung. It should be 0 or at least 1000000 (1 ms). 0 means inherit.  | [optional] 
**retries** | **Number** | The number of consecutive failures needed to consider a container as unhealthy. 0 means inherit.  | [optional] 
**startPeriod** | **Number** | Start period for the container to initialize before starting health-retries countdown in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit.  | [optional] 


