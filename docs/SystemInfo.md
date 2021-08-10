# DockerEngineApi.SystemInfo

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ID** | **String** | Unique identifier of the daemon.  <p><br /></p>  > **Note**: The format of the ID itself is not part of the API, and > should not be considered stable.  | [optional] 
**containers** | **Number** | Total number of containers on the host. | [optional] 
**containersRunning** | **Number** | Number of containers with status `\"running\"`.  | [optional] 
**containersPaused** | **Number** | Number of containers with status `\"paused\"`.  | [optional] 
**containersStopped** | **Number** | Number of containers with status `\"stopped\"`.  | [optional] 
**images** | **Number** | Total number of images on the host.  Both _tagged_ and _untagged_ (dangling) images are counted.  | [optional] 
**driver** | **String** | Name of the storage driver in use. | [optional] 
**driverStatus** | **[[String]]** | Information specific to the storage driver, provided as \"label\" / \"value\" pairs.  This information is provided by the storage driver, and formatted in a way consistent with the output of `docker info` on the command line.  <p><br /></p>  > **Note**: The information returned in this field, including the > formatting of values and labels, should not be considered stable, > and may change without notice.  | [optional] 
**dockerRootDir** | **String** | Root directory of persistent Docker state.  Defaults to `/var/lib/docker` on Linux, and `C:\\ProgramData\\docker` on Windows.  | [optional] 
**plugins** | [**PluginsInfo**](PluginsInfo.md) |  | [optional] 
**memoryLimit** | **Boolean** | Indicates if the host has memory limit support enabled. | [optional] 
**swapLimit** | **Boolean** | Indicates if the host has memory swap limit support enabled. | [optional] 
**kernelMemory** | **Boolean** | Indicates if the host has kernel memory limit support enabled.  <p><br /></p>  > **Deprecated**: This field is deprecated as the kernel 5.4 deprecated > `kmem.limit_in_bytes`.  | [optional] 
**cpuCfsPeriod** | **Boolean** | Indicates if CPU CFS(Completely Fair Scheduler) period is supported by the host.  | [optional] 
**cpuCfsQuota** | **Boolean** | Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by the host.  | [optional] 
**cPUShares** | **Boolean** | Indicates if CPU Shares limiting is supported by the host.  | [optional] 
**cPUSet** | **Boolean** | Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.  See [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt)  | [optional] 
**pidsLimit** | **Boolean** | Indicates if the host kernel has PID limit support enabled. | [optional] 
**oomKillDisable** | **Boolean** | Indicates if OOM killer disable is supported on the host. | [optional] 
**iPv4Forwarding** | **Boolean** | Indicates IPv4 forwarding is enabled. | [optional] 
**bridgeNfIptables** | **Boolean** | Indicates if `bridge-nf-call-iptables` is available on the host. | [optional] 
**bridgeNfIp6tables** | **Boolean** | Indicates if `bridge-nf-call-ip6tables` is available on the host. | [optional] 
**debug** | **Boolean** | Indicates if the daemon is running in debug-mode / with debug-level logging enabled.  | [optional] 
**nFd** | **Number** | The total number of file Descriptors in use by the daemon process.  This information is only returned if debug-mode is enabled.  | [optional] 
**nGoroutines** | **Number** | The  number of goroutines that currently exist.  This information is only returned if debug-mode is enabled.  | [optional] 
**systemTime** | **String** | Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds.  | [optional] 
**loggingDriver** | **String** | The logging driver to use as a default for new containers.  | [optional] 
**cgroupDriver** | **String** | The driver to use for managing cgroups.  | [optional] [default to 'cgroupfs']
**cgroupVersion** | **String** | The version of the cgroup.  | [optional] [default to '1']
**nEventsListener** | **Number** | Number of event listeners subscribed. | [optional] 
**kernelVersion** | **String** | Kernel version of the host.  On Linux, this information obtained from `uname`. On Windows this information is queried from the <kbd>HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows NT\\\\CurrentVersion\\\\</kbd> registry value, for example _\"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)\"_.  | [optional] 
**operatingSystem** | **String** | Name of the host's operating system, for example: \"Ubuntu 16.04.2 LTS\" or \"Windows Server 2016 Datacenter\"  | [optional] 
**oSVersion** | **String** | Version of the host's operating system  <p><br /></p>  > **Note**: The information returned in this field, including its > very existence, and the formatting of values, should not be considered > stable, and may change without notice.  | [optional] 
**oSType** | **String** | Generic type of the operating system of the host, as returned by the Go runtime (`GOOS`).  Currently returned values are \"linux\" and \"windows\". A full list of possible values can be found in the [Go documentation](https://golang.org/doc/install/source#environment).  | [optional] 
**architecture** | **String** | Hardware architecture of the host, as returned by the Go runtime (`GOARCH`).  A full list of possible values can be found in the [Go documentation](https://golang.org/doc/install/source#environment).  | [optional] 
**NCPU** | **Number** | The number of logical CPUs usable by the daemon.  The number of available CPUs is checked by querying the operating system when the daemon starts. Changes to operating system CPU allocation after the daemon is started are not reflected.  | [optional] 
**memTotal** | **Number** | Total amount of physical memory available on the host, in bytes.  | [optional] 
**indexServerAddress** | **String** | Address / URL of the index server that is used for image search, and as a default for user authentication for Docker Hub and Docker Cloud.  | [optional] [default to 'https://index.docker.io/v1/']
**registryConfig** | [**RegistryServiceConfig**](RegistryServiceConfig.md) |  | [optional] 
**genericResources** | [**GenericResources**](GenericResources.md) |  | [optional] 
**httpProxy** | **String** | HTTP-proxy configured for the daemon. This value is obtained from the [`HTTP_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable. Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL are masked in the API response.  Containers do not automatically inherit this configuration.  | [optional] 
**httpsProxy** | **String** | HTTPS-proxy configured for the daemon. This value is obtained from the [`HTTPS_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable. Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL are masked in the API response.  Containers do not automatically inherit this configuration.  | [optional] 
**noProxy** | **String** | Comma-separated list of domain extensions for which no proxy should be used. This value is obtained from the [`NO_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.  Containers do not automatically inherit this configuration.  | [optional] 
**name** | **String** | Hostname of the host. | [optional] 
**labels** | **[String]** | User-defined labels (key/value metadata) as set on the daemon.  <p><br /></p>  > **Note**: When part of a Swarm, nodes can both have _daemon_ labels, > set through the daemon configuration, and _node_ labels, set from a > manager node in the Swarm. Node labels are not included in this > field. Node labels can be retrieved using the `/nodes/(id)` endpoint > on a manager node in the Swarm.  | [optional] 
**experimentalBuild** | **Boolean** | Indicates if experimental features are enabled on the daemon.  | [optional] 
**serverVersion** | **String** | Version string of the daemon.  > **Note**: the [standalone Swarm API](/swarm/swarm-api/) > returns the Swarm version instead of the daemon  version, for example > `swarm/1.2.8`.  | [optional] 
**clusterStore** | **String** | URL of the distributed storage backend.   The storage backend is used for multihost networking (to store network and endpoint information) and by the node discovery mechanism.  <p><br /></p>  > **Deprecated**: This field is only propagated when using standalone Swarm > mode, and overlay networking using an external k/v store. Overlay > networks with Swarm mode enabled use the built-in raft store, and > this field will be empty.  | [optional] 
**clusterAdvertise** | **String** | The network endpoint that the Engine advertises for the purpose of node discovery. ClusterAdvertise is a `host:port` combination on which the daemon is reachable by other hosts.  <p><br /></p>  > **Deprecated**: This field is only propagated when using standalone Swarm > mode, and overlay networking using an external k/v store. Overlay > networks with Swarm mode enabled use the built-in raft store, and > this field will be empty.  | [optional] 
**runtimes** | [**{String: Runtime}**](Runtime.md) | List of [OCI compliant](https://github.com/opencontainers/runtime-spec) runtimes configured on the daemon. Keys hold the \"name\" used to reference the runtime.  The Docker daemon relies on an OCI compliant runtime (invoked via the `containerd` daemon) as its interface to the Linux kernel namespaces, cgroups, and SELinux.  The default runtime is `runc`, and automatically configured. Additional runtimes can be configured by the user and will be listed here.  | [optional] 
**defaultRuntime** | **String** | Name of the default OCI runtime that is used when starting containers.  The default can be overridden per-container at create time.  | [optional] [default to 'runc']
**swarm** | [**SwarmInfo**](SwarmInfo.md) |  | [optional] 
**liveRestoreEnabled** | **Boolean** | Indicates if live restore is enabled.  If enabled, containers are kept running when the daemon is shutdown or upon daemon start if running containers are detected.  | [optional] [default to false]
**isolation** | **String** | Represents the isolation technology to use as a default for containers. The supported values are platform-specific.  If no isolation value is specified on daemon start, on Windows client, the default is `hyperv`, and on Windows server, the default is `process`.  This option is currently not used on other platforms.  | [optional] [default to 'default']
**initBinary** | **String** | Name and, optional, path of the `docker-init` binary.  If the path is omitted, the daemon searches the host's `$PATH` for the binary and uses the first result.  | [optional] 
**containerdCommit** | [**Commit**](Commit.md) |  | [optional] 
**runcCommit** | [**Commit**](Commit.md) |  | [optional] 
**initCommit** | [**Commit**](Commit.md) |  | [optional] 
**securityOptions** | **[String]** | List of security features that are enabled on the daemon, such as apparmor, seccomp, SELinux, user-namespaces (userns), and rootless.  Additional configuration options for each security feature may be present, and are included as a comma-separated list of key/value pairs.  | [optional] 
**productLicense** | **String** | Reports a summary of the product license on the daemon.  If a commercial license has been applied to the daemon, information such as number of nodes, and expiration are included.  | [optional] 
**defaultAddressPools** | [**[SystemInfoDefaultAddressPools]**](SystemInfoDefaultAddressPools.md) | List of custom default address pools for local networks, which can be specified in the daemon.json file or dockerd option.  Example: a Base \"10.10.0.0/16\" with Size 24 will define the set of 256 10.10.[0-255].0/24 address pools.  | [optional] 
**warnings** | **[String]** | List of warnings / informational messages about missing features, or issues related to the daemon configuration.  These messages can be printed by the client as information to the user.  | [optional] 


<a name="CgroupDriverEnum"></a>
## Enum: CgroupDriverEnum


* `cgroupfs` (value: `"cgroupfs"`)

* `systemd` (value: `"systemd"`)

* `none` (value: `"none"`)




<a name="CgroupVersionEnum"></a>
## Enum: CgroupVersionEnum


* `_1` (value: `"1"`)

* `_2` (value: `"2"`)




<a name="IsolationEnum"></a>
## Enum: IsolationEnum


* `_default` (value: `"default"`)

* `hyperv` (value: `"hyperv"`)

* `process` (value: `"process"`)




