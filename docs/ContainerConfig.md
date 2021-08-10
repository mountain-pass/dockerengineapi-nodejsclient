# DockerEngineApi.ContainerConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hostname** | **String** | The hostname to use for the container, as a valid RFC 1123 hostname. | [optional] 
**domainname** | **String** | The domain name to use for the container. | [optional] 
**user** | **String** | The user that commands are run as inside the container. | [optional] 
**attachStdin** | **Boolean** | Whether to attach to `stdin`. | [optional] [default to false]
**attachStdout** | **Boolean** | Whether to attach to `stdout`. | [optional] [default to true]
**attachStderr** | **Boolean** | Whether to attach to `stderr`. | [optional] [default to true]
**exposedPorts** | **{String: Object}** | An object mapping ports to an empty object in the form:  `{\"<port>/<tcp|udp|sctp>\": {}}`  | [optional] 
**tty** | **Boolean** | Attach standard streams to a TTY, including `stdin` if it is not closed.  | [optional] [default to false]
**openStdin** | **Boolean** | Open `stdin` | [optional] [default to false]
**stdinOnce** | **Boolean** | Close `stdin` after one attached client disconnects | [optional] [default to false]
**env** | **[String]** | A list of environment variables to set inside the container in the form `[\"VAR=value\", ...]`. A variable without `=` is removed from the environment, rather than to have an empty value.  | [optional] 
**cmd** | **[String]** | Command to run specified as a string or an array of strings.  | [optional] 
**healthcheck** | [**HealthConfig**](HealthConfig.md) |  | [optional] 
**argsEscaped** | **Boolean** | Command is already escaped (Windows only) | [optional] 
**image** | **String** | The name of the image to use when creating the container/  | [optional] 
**volumes** | **{String: Object}** | An object mapping mount point paths inside the container to empty objects.  | [optional] 
**workingDir** | **String** | The working directory for commands to run in. | [optional] 
**entrypoint** | **[String]** | The entry point for the container as a string or an array of strings.  If the array consists of exactly one empty string (`[\"\"]`) then the entry point is reset to system default (i.e., the entry point used by docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`).  | [optional] 
**networkDisabled** | **Boolean** | Disable networking for the container. | [optional] 
**macAddress** | **String** | MAC address of the container. | [optional] 
**onBuild** | **[String]** | `ONBUILD` metadata that were defined in the image's `Dockerfile`.  | [optional] 
**labels** | **{String: String}** | User-defined key/value metadata. | [optional] 
**stopSignal** | **String** | Signal to stop a container as a string or unsigned integer.  | [optional] [default to 'SIGTERM']
**stopTimeout** | **Number** | Timeout to stop a container in seconds. | [optional] 
**shell** | **[String]** | Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell.  | [optional] 


