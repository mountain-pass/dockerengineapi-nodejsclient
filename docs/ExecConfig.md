# DockerEngineApi.ExecConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attachStdin** | **Boolean** | Attach to `stdin` of the exec command. | [optional] 
**attachStdout** | **Boolean** | Attach to `stdout` of the exec command. | [optional] 
**attachStderr** | **Boolean** | Attach to `stderr` of the exec command. | [optional] 
**detachKeys** | **String** | Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.  | [optional] 
**tty** | **Boolean** | Allocate a pseudo-TTY. | [optional] 
**env** | **[String]** | A list of environment variables in the form `[\"VAR=value\", ...]`.  | [optional] 
**cmd** | **[String]** | Command to run, as a string or array of strings. | [optional] 
**privileged** | **Boolean** | Runs the exec process with extended privileges. | [optional] [default to false]
**user** | **String** | The user, and optionally, group to run the exec process inside the container. Format is one of: `user`, `user:group`, `uid`, or `uid:gid`.  | [optional] 
**workingDir** | **String** | The working directory for the exec process inside the container.  | [optional] 


