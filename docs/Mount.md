# DockerEngineApi.Mount

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**target** | **String** | Container path. | [optional] 
**source** | **String** | Mount source (e.g. a volume name, a host path). | [optional] 
**type** | **String** | The mount type. Available types:  - `bind` Mounts a file or directory from the host into the container. Must exist prior to creating the container. - `volume` Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options). These are **not** removed when the container is removed. - `tmpfs` Create a tmpfs with the given options. The mount source cannot be specified for tmpfs. - `npipe` Mounts a named pipe from the host into the container. Must exist prior to creating the container.  | [optional] 
**readOnly** | **Boolean** | Whether the mount should be read-only. | [optional] 
**consistency** | **String** | The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`. | [optional] 
**bindOptions** | [**MountBindOptions**](MountBindOptions.md) |  | [optional] 
**volumeOptions** | [**MountVolumeOptions**](MountVolumeOptions.md) |  | [optional] 
**tmpfsOptions** | [**MountTmpfsOptions**](MountTmpfsOptions.md) |  | [optional] 


<a name="TypeEnum"></a>
## Enum: TypeEnum


* `bind` (value: `"bind"`)

* `volume` (value: `"volume"`)

* `tmpfs` (value: `"tmpfs"`)

* `npipe` (value: `"npipe"`)




