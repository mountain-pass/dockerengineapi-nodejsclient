# DockerEngineApi.RestartPolicy

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **String** | - Empty string means not to restart - `always` Always restart - `unless-stopped` Restart always except when the user has manually stopped the container - `on-failure` Restart only when the container exit code is non-zero  | [optional] 
**maximumRetryCount** | **Number** | If `on-failure` is used, the number of times to retry before giving up.  | [optional] 


<a name="NameEnum"></a>
## Enum: NameEnum


* `empty` (value: `""`)

* `always` (value: `"always"`)

* `unlessStopped` (value: `"unless-stopped"`)

* `onFailure` (value: `"on-failure"`)




