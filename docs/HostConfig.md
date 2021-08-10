# DockerEngineApi.HostConfig

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**binds** | **[String]** | A list of volume bindings for this container. Each volume binding is a string in one of these forms:  - `host-src:container-dest[:options]` to bind-mount a host path   into the container. Both `host-src`, and `container-dest` must   be an _absolute_ path. - `volume-name:container-dest[:options]` to bind-mount a volume   managed by a volume driver into the container. `container-dest`   must be an _absolute_ path.  `options` is an optional, comma-delimited list of:  - `nocopy` disables automatic copying of data from the container   path to the volume. The `nocopy` flag only applies to named volumes. - `[ro|rw]` mounts a volume read-only or read-write, respectively.   If omitted or set to `rw`, volumes are mounted read-write. - `[z|Z]` applies SELinux labels to allow or deny multiple containers   to read and write to the same volume.     - `z`: a _shared_ content label is applied to the content. This       label indicates that multiple containers can share the volume       content, for both reading and writing.     - `Z`: a _private unshared_ label is applied to the content.       This label indicates that only the current container can use       a private volume. Labeling systems such as SELinux require       proper labels to be placed on volume content that is mounted       into a container. Without a label, the security system can       prevent a container's processes from using the content. By       default, the labels set by the host operating system are not       modified. - `[[r]shared|[r]slave|[r]private]` specifies mount   [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).   This only applies to bind-mounted volumes, not internal volumes   or named volumes. Mount propagation requires the source mount   point (the location where the source directory is mounted in the   host operating system) to have the correct propagation properties.   For shared volumes, the source mount point must be set to `shared`.   For slave volumes, the mount must be set to either `shared` or   `slave`.  | [optional] 
**containerIDFile** | **String** | Path to a file where the container ID is written | [optional] 
**logConfig** | [**HostConfigLogConfig**](HostConfigLogConfig.md) |  | [optional] 
**networkMode** | **String** | Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to.  | [optional] 
**portBindings** | [**PortMap**](PortMap.md) |  | [optional] 
**restartPolicy** | [**RestartPolicy**](RestartPolicy.md) |  | [optional] 
**autoRemove** | **Boolean** | Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set.  | [optional] 
**volumeDriver** | **String** | Driver that this container uses to mount volumes. | [optional] 
**volumesFrom** | **[String]** | A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`.  | [optional] 
**mounts** | [**[Mount]**](Mount.md) | Specification for mounts to be added to the container.  | [optional] 
**capAdd** | **[String]** | A list of kernel capabilities to add to the container. Conflicts with option 'Capabilities'.  | [optional] 
**capDrop** | **[String]** | A list of kernel capabilities to drop from the container. Conflicts with option 'Capabilities'.  | [optional] 
**cgroupnsMode** | **String** | cgroup namespace mode for the container. Possible values are:  - `\"private\"`: the container runs in its own private cgroup namespace - `\"host\"`: use the host system's cgroup namespace  If not specified, the daemon default is used, which can either be `\"private\"` or `\"host\"`, depending on daemon version, kernel support and configuration.  | [optional] 
**dns** | **[String]** | A list of DNS servers for the container to use. | [optional] 
**dnsOptions** | **[String]** | A list of DNS options. | [optional] 
**dnsSearch** | **[String]** | A list of DNS search domains. | [optional] 
**extraHosts** | **[String]** | A list of hostnames/IP mappings to add to the container's `/etc/hosts` file. Specified in the form `[\"hostname:IP\"]`.  | [optional] 
**groupAdd** | **[String]** | A list of additional groups that the container process will run as.  | [optional] 
**ipcMode** | **String** | IPC sharing mode for the container. Possible values are:  - `\"none\"`: own private IPC namespace, with /dev/shm not mounted - `\"private\"`: own private IPC namespace - `\"shareable\"`: own private IPC namespace, with a possibility to share it with other containers - `\"container:<name|id>\"`: join another (shareable) container's IPC namespace - `\"host\"`: use the host system's IPC namespace  If not specified, daemon default is used, which can either be `\"private\"` or `\"shareable\"`, depending on daemon version and configuration.  | [optional] 
**cgroup** | **String** | Cgroup to use for the container. | [optional] 
**links** | **[String]** | A list of links for the container in the form `container_name:alias`.  | [optional] 
**oomScoreAdj** | **Number** | An integer value containing the score given to the container in order to tune OOM killer preferences.  | [optional] 
**pidMode** | **String** | Set the PID (Process) Namespace mode for the container. It can be either:  - `\"container:<name|id>\"`: joins another container's PID namespace - `\"host\"`: use the host's PID namespace inside the container  | [optional] 
**privileged** | **Boolean** | Gives the container full access to the host. | [optional] 
**publishAllPorts** | **Boolean** | Allocates an ephemeral host port for all of a container's exposed ports.  Ports are de-allocated when the container stops and allocated when the container starts. The allocated port might be changed when restarting the container.  The port is selected from the ephemeral port range that depends on the kernel. For example, on Linux the range is defined by `/proc/sys/net/ipv4/ip_local_port_range`.  | [optional] 
**readonlyRootfs** | **Boolean** | Mount the container's root filesystem as read only. | [optional] 
**securityOpt** | **[String]** | A list of string values to customize labels for MLS systems, such as SELinux. | [optional] 
**storageOpt** | **{String: String}** | Storage driver options for this container, in the form `{\"size\": \"120G\"}`.  | [optional] 
**tmpfs** | **{String: String}** | A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example:  ``` { \"/run\": \"rw,noexec,nosuid,size=65536k\" } ```  | [optional] 
**uTSMode** | **String** | UTS namespace to use for the container. | [optional] 
**usernsMode** | **String** | Sets the usernamespace mode for the container when usernamespace remapping option is enabled.  | [optional] 
**shmSize** | **Number** | Size of `/dev/shm` in bytes. If omitted, the system uses 64MB.  | [optional] 
**sysctls** | **{String: String}** | A list of kernel parameters (sysctls) to set in the container. For example:  ``` {\"net.ipv4.ip_forward\": \"1\"} ```  | [optional] 
**runtime** | **String** | Runtime to use with this container. | [optional] 
**consoleSize** | **[Number]** | Initial console size, as an `[height, width]` array. (Windows only)  | [optional] 
**isolation** | **String** | Isolation technology of the container. (Windows only)  | [optional] 
**maskedPaths** | **[String]** | The list of paths to be masked inside the container (this overrides the default set of paths).  | [optional] 
**readonlyPaths** | **[String]** | The list of paths to be set as read-only inside the container (this overrides the default set of paths).  | [optional] 


<a name="CgroupnsModeEnum"></a>
## Enum: CgroupnsModeEnum


* `_private` (value: `"private"`)

* `host` (value: `"host"`)




<a name="IsolationEnum"></a>
## Enum: IsolationEnum


* `_default` (value: `"default"`)

* `process` (value: `"process"`)

* `hyperv` (value: `"hyperv"`)




