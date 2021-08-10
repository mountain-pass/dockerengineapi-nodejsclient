# DockerEngineApi.IPAM

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**driver** | **String** | Name of the IPAM driver to use. | [optional] [default to 'default']
**config** | **[{String: String}]** | List of IPAM configuration options, specified as a map:  ``` {\"Subnet\": <CIDR>, \"IPRange\": <CIDR>, \"Gateway\": <IP address>, \"AuxAddress\": <device_name:IP address>} ```  | [optional] 
**options** | **{String: String}** | Driver-specific options, specified as a map. | [optional] 


