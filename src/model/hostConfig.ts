/**
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client\'s commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don\'t break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.41) is used. For example, calling `/info` is the same as calling `/v1.41/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ``` 
 *
 * The version of the OpenAPI document: 1.41
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { DeviceMapping } from './deviceMapping';
import { DeviceRequest } from './deviceRequest';
import { HostConfigAllOf } from './hostConfigAllOf';
import { HostConfigAllOfLogConfig } from './hostConfigAllOfLogConfig';
import { Mount } from './mount';
import { PortBinding } from './portBinding';
import { Resources } from './resources';
import { ResourcesBlkioWeightDevice } from './resourcesBlkioWeightDevice';
import { ResourcesUlimits } from './resourcesUlimits';
import { RestartPolicy } from './restartPolicy';
import { ThrottleDevice } from './throttleDevice';

/**
* Container configuration that depends on the host we are running on
*/
export class HostConfig {
    /**
    * An integer value representing this container\'s relative CPU weight versus other containers. 
    */
    'cpuShares'?: number;
    /**
    * Memory limit in bytes.
    */
    'memory'?: number;
    /**
    * Path to `cgroups` under which the container\'s `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist. 
    */
    'cgroupParent'?: string;
    /**
    * Block IO weight (relative weight).
    */
    'blkioWeight'?: number;
    /**
    * Block IO weight (relative device weight) in the form:  ``` [{\"Path\": \"device_path\", \"Weight\": weight}] ``` 
    */
    'blkioWeightDevice'?: Array<ResourcesBlkioWeightDevice>;
    /**
    * Limit read rate (bytes per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
    */
    'blkioDeviceReadBps'?: Array<ThrottleDevice>;
    /**
    * Limit write rate (bytes per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
    */
    'blkioDeviceWriteBps'?: Array<ThrottleDevice>;
    /**
    * Limit read rate (IO per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
    */
    'blkioDeviceReadIOps'?: Array<ThrottleDevice>;
    /**
    * Limit write rate (IO per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
    */
    'blkioDeviceWriteIOps'?: Array<ThrottleDevice>;
    /**
    * The length of a CPU period in microseconds.
    */
    'cpuPeriod'?: number;
    /**
    * Microseconds of CPU time that the container can get in a CPU period. 
    */
    'cpuQuota'?: number;
    /**
    * The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks. 
    */
    'cpuRealtimePeriod'?: number;
    /**
    * The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks. 
    */
    'cpuRealtimeRuntime'?: number;
    /**
    * CPUs in which to allow execution (e.g., `0-3`, `0,1`). 
    */
    'cpusetCpus'?: string;
    /**
    * Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems. 
    */
    'cpusetMems'?: string;
    /**
    * A list of devices to add to the container.
    */
    'devices'?: Array<DeviceMapping>;
    /**
    * a list of cgroup rules to apply to the container
    */
    'deviceCgroupRules'?: Array<string>;
    /**
    * A list of requests for devices to be sent to device drivers. 
    */
    'deviceRequests'?: Array<DeviceRequest>;
    /**
    * Kernel memory limit in bytes.  <p><br /></p>  > **Deprecated**: This field is deprecated as the kernel 5.4 deprecated > `kmem.limit_in_bytes`. 
    */
    'kernelMemory'?: number;
    /**
    * Hard limit for kernel TCP buffer memory (in bytes).
    */
    'kernelMemoryTCP'?: number;
    /**
    * Memory soft limit in bytes.
    */
    'memoryReservation'?: number;
    /**
    * Total memory limit (memory + swap). Set as `-1` to enable unlimited swap. 
    */
    'memorySwap'?: number;
    /**
    * Tune a container\'s memory swappiness behavior. Accepts an integer between 0 and 100. 
    */
    'memorySwappiness'?: number;
    /**
    * CPU quota in units of 10<sup>-9</sup> CPUs.
    */
    'nanoCpus'?: number;
    /**
    * Disable OOM Killer for the container.
    */
    'oomKillDisable'?: boolean;
    /**
    * Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used. 
    */
    'init'?: boolean | null;
    /**
    * Tune a container\'s PIDs limit. Set `0` or `-1` for unlimited, or `null` to not change. 
    */
    'pidsLimit'?: number | null;
    /**
    * A list of resource limits to set in the container. For example:  ``` {\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048} ``` 
    */
    'ulimits'?: Array<ResourcesUlimits>;
    /**
    * The number of usable CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last. 
    */
    'cpuCount'?: number;
    /**
    * The usable percentage of the available CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last. 
    */
    'cpuPercent'?: number;
    /**
    * Maximum IOps for the container system drive (Windows only)
    */
    'iOMaximumIOps'?: number;
    /**
    * Maximum IO in bytes per second for the container system drive (Windows only). 
    */
    'iOMaximumBandwidth'?: number;
    /**
    * A list of volume bindings for this container. Each volume binding is a string in one of these forms:  - `host-src:container-dest[:options]` to bind-mount a host path   into the container. Both `host-src`, and `container-dest` must   be an _absolute_ path. - `volume-name:container-dest[:options]` to bind-mount a volume   managed by a volume driver into the container. `container-dest`   must be an _absolute_ path.  `options` is an optional, comma-delimited list of:  - `nocopy` disables automatic copying of data from the container   path to the volume. The `nocopy` flag only applies to named volumes. - `[ro|rw]` mounts a volume read-only or read-write, respectively.   If omitted or set to `rw`, volumes are mounted read-write. - `[z|Z]` applies SELinux labels to allow or deny multiple containers   to read and write to the same volume.     - `z`: a _shared_ content label is applied to the content. This       label indicates that multiple containers can share the volume       content, for both reading and writing.     - `Z`: a _private unshared_ label is applied to the content.       This label indicates that only the current container can use       a private volume. Labeling systems such as SELinux require       proper labels to be placed on volume content that is mounted       into a container. Without a label, the security system can       prevent a container\'s processes from using the content. By       default, the labels set by the host operating system are not       modified. - `[[r]shared|[r]slave|[r]private]` specifies mount   [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).   This only applies to bind-mounted volumes, not internal volumes   or named volumes. Mount propagation requires the source mount   point (the location where the source directory is mounted in the   host operating system) to have the correct propagation properties.   For shared volumes, the source mount point must be set to `shared`.   For slave volumes, the mount must be set to either `shared` or   `slave`. 
    */
    'binds'?: Array<string>;
    /**
    * Path to a file where the container ID is written
    */
    'containerIDFile'?: string;
    'logConfig'?: HostConfigAllOfLogConfig;
    /**
    * Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network\'s name to which this container should connect to. 
    */
    'networkMode'?: string;
    /**
    * PortMap describes the mapping of container ports to host ports, using the container\'s port-number and protocol as key in the format `<port>/<protocol>`, for example, `80/udp`.  If a container\'s port is mapped for multiple protocols, separate entries are added to the mapping table. 
    */
    'portBindings'?: { [key: string]: Array<PortBinding>; };
    'restartPolicy'?: RestartPolicy;
    /**
    * Automatically remove the container when the container\'s process exits. This has no effect if `RestartPolicy` is set. 
    */
    'autoRemove'?: boolean;
    /**
    * Driver that this container uses to mount volumes.
    */
    'volumeDriver'?: string;
    /**
    * A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`. 
    */
    'volumesFrom'?: Array<string>;
    /**
    * Specification for mounts to be added to the container. 
    */
    'mounts'?: Array<Mount>;
    /**
    * A list of kernel capabilities to add to the container. Conflicts with option \'Capabilities\'. 
    */
    'capAdd'?: Array<string>;
    /**
    * A list of kernel capabilities to drop from the container. Conflicts with option \'Capabilities\'. 
    */
    'capDrop'?: Array<string>;
    /**
    * cgroup namespace mode for the container. Possible values are:  - `\"private\"`: the container runs in its own private cgroup namespace - `\"host\"`: use the host system\'s cgroup namespace  If not specified, the daemon default is used, which can either be `\"private\"` or `\"host\"`, depending on daemon version, kernel support and configuration. 
    */
    'cgroupnsMode'?: HostConfig.CgroupnsModeEnum;
    /**
    * A list of DNS servers for the container to use.
    */
    'dns'?: Array<string>;
    /**
    * A list of DNS options.
    */
    'dnsOptions'?: Array<string>;
    /**
    * A list of DNS search domains.
    */
    'dnsSearch'?: Array<string>;
    /**
    * A list of hostnames/IP mappings to add to the container\'s `/etc/hosts` file. Specified in the form `[\"hostname:IP\"]`. 
    */
    'extraHosts'?: Array<string>;
    /**
    * A list of additional groups that the container process will run as. 
    */
    'groupAdd'?: Array<string>;
    /**
    * IPC sharing mode for the container. Possible values are:  - `\"none\"`: own private IPC namespace, with /dev/shm not mounted - `\"private\"`: own private IPC namespace - `\"shareable\"`: own private IPC namespace, with a possibility to share it with other containers - `\"container:<name|id>\"`: join another (shareable) container\'s IPC namespace - `\"host\"`: use the host system\'s IPC namespace  If not specified, daemon default is used, which can either be `\"private\"` or `\"shareable\"`, depending on daemon version and configuration. 
    */
    'ipcMode'?: string;
    /**
    * Cgroup to use for the container.
    */
    'cgroup'?: string;
    /**
    * A list of links for the container in the form `container_name:alias`. 
    */
    'links'?: Array<string>;
    /**
    * An integer value containing the score given to the container in order to tune OOM killer preferences. 
    */
    'oomScoreAdj'?: number;
    /**
    * Set the PID (Process) Namespace mode for the container. It can be either:  - `\"container:<name|id>\"`: joins another container\'s PID namespace - `\"host\"`: use the host\'s PID namespace inside the container 
    */
    'pidMode'?: string;
    /**
    * Gives the container full access to the host.
    */
    'privileged'?: boolean;
    /**
    * Allocates an ephemeral host port for all of a container\'s exposed ports.  Ports are de-allocated when the container stops and allocated when the container starts. The allocated port might be changed when restarting the container.  The port is selected from the ephemeral port range that depends on the kernel. For example, on Linux the range is defined by `/proc/sys/net/ipv4/ip_local_port_range`. 
    */
    'publishAllPorts'?: boolean;
    /**
    * Mount the container\'s root filesystem as read only.
    */
    'readonlyRootfs'?: boolean;
    /**
    * A list of string values to customize labels for MLS systems, such as SELinux.
    */
    'securityOpt'?: Array<string>;
    /**
    * Storage driver options for this container, in the form `{\"size\": \"120G\"}`. 
    */
    'storageOpt'?: { [key: string]: string; };
    /**
    * A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example:  ``` { \"/run\": \"rw,noexec,nosuid,size=65536k\" } ``` 
    */
    'tmpfs'?: { [key: string]: string; };
    /**
    * UTS namespace to use for the container.
    */
    'uTSMode'?: string;
    /**
    * Sets the usernamespace mode for the container when usernamespace remapping option is enabled. 
    */
    'usernsMode'?: string;
    /**
    * Size of `/dev/shm` in bytes. If omitted, the system uses 64MB. 
    */
    'shmSize'?: number;
    /**
    * A list of kernel parameters (sysctls) to set in the container. For example:  ``` {\"net.ipv4.ip_forward\": \"1\"} ``` 
    */
    'sysctls'?: { [key: string]: string; };
    /**
    * Runtime to use with this container.
    */
    'runtime'?: string;
    /**
    * Initial console size, as an `[height, width]` array. (Windows only) 
    */
    'consoleSize'?: Array<number>;
    /**
    * Isolation technology of the container. (Windows only) 
    */
    'isolation'?: HostConfig.IsolationEnum;
    /**
    * The list of paths to be masked inside the container (this overrides the default set of paths). 
    */
    'maskedPaths'?: Array<string>;
    /**
    * The list of paths to be set as read-only inside the container (this overrides the default set of paths). 
    */
    'readonlyPaths'?: Array<string>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "cpuShares",
            "baseName": "CpuShares",
            "type": "number"
        },
        {
            "name": "memory",
            "baseName": "Memory",
            "type": "number"
        },
        {
            "name": "cgroupParent",
            "baseName": "CgroupParent",
            "type": "string"
        },
        {
            "name": "blkioWeight",
            "baseName": "BlkioWeight",
            "type": "number"
        },
        {
            "name": "blkioWeightDevice",
            "baseName": "BlkioWeightDevice",
            "type": "Array<ResourcesBlkioWeightDevice>"
        },
        {
            "name": "blkioDeviceReadBps",
            "baseName": "BlkioDeviceReadBps",
            "type": "Array<ThrottleDevice>"
        },
        {
            "name": "blkioDeviceWriteBps",
            "baseName": "BlkioDeviceWriteBps",
            "type": "Array<ThrottleDevice>"
        },
        {
            "name": "blkioDeviceReadIOps",
            "baseName": "BlkioDeviceReadIOps",
            "type": "Array<ThrottleDevice>"
        },
        {
            "name": "blkioDeviceWriteIOps",
            "baseName": "BlkioDeviceWriteIOps",
            "type": "Array<ThrottleDevice>"
        },
        {
            "name": "cpuPeriod",
            "baseName": "CpuPeriod",
            "type": "number"
        },
        {
            "name": "cpuQuota",
            "baseName": "CpuQuota",
            "type": "number"
        },
        {
            "name": "cpuRealtimePeriod",
            "baseName": "CpuRealtimePeriod",
            "type": "number"
        },
        {
            "name": "cpuRealtimeRuntime",
            "baseName": "CpuRealtimeRuntime",
            "type": "number"
        },
        {
            "name": "cpusetCpus",
            "baseName": "CpusetCpus",
            "type": "string"
        },
        {
            "name": "cpusetMems",
            "baseName": "CpusetMems",
            "type": "string"
        },
        {
            "name": "devices",
            "baseName": "Devices",
            "type": "Array<DeviceMapping>"
        },
        {
            "name": "deviceCgroupRules",
            "baseName": "DeviceCgroupRules",
            "type": "Array<string>"
        },
        {
            "name": "deviceRequests",
            "baseName": "DeviceRequests",
            "type": "Array<DeviceRequest>"
        },
        {
            "name": "kernelMemory",
            "baseName": "KernelMemory",
            "type": "number"
        },
        {
            "name": "kernelMemoryTCP",
            "baseName": "KernelMemoryTCP",
            "type": "number"
        },
        {
            "name": "memoryReservation",
            "baseName": "MemoryReservation",
            "type": "number"
        },
        {
            "name": "memorySwap",
            "baseName": "MemorySwap",
            "type": "number"
        },
        {
            "name": "memorySwappiness",
            "baseName": "MemorySwappiness",
            "type": "number"
        },
        {
            "name": "nanoCpus",
            "baseName": "NanoCpus",
            "type": "number"
        },
        {
            "name": "oomKillDisable",
            "baseName": "OomKillDisable",
            "type": "boolean"
        },
        {
            "name": "init",
            "baseName": "Init",
            "type": "boolean"
        },
        {
            "name": "pidsLimit",
            "baseName": "PidsLimit",
            "type": "number"
        },
        {
            "name": "ulimits",
            "baseName": "Ulimits",
            "type": "Array<ResourcesUlimits>"
        },
        {
            "name": "cpuCount",
            "baseName": "CpuCount",
            "type": "number"
        },
        {
            "name": "cpuPercent",
            "baseName": "CpuPercent",
            "type": "number"
        },
        {
            "name": "iOMaximumIOps",
            "baseName": "IOMaximumIOps",
            "type": "number"
        },
        {
            "name": "iOMaximumBandwidth",
            "baseName": "IOMaximumBandwidth",
            "type": "number"
        },
        {
            "name": "binds",
            "baseName": "Binds",
            "type": "Array<string>"
        },
        {
            "name": "containerIDFile",
            "baseName": "ContainerIDFile",
            "type": "string"
        },
        {
            "name": "logConfig",
            "baseName": "LogConfig",
            "type": "HostConfigAllOfLogConfig"
        },
        {
            "name": "networkMode",
            "baseName": "NetworkMode",
            "type": "string"
        },
        {
            "name": "portBindings",
            "baseName": "PortBindings",
            "type": "{ [key: string]: Array<PortBinding>; }"
        },
        {
            "name": "restartPolicy",
            "baseName": "RestartPolicy",
            "type": "RestartPolicy"
        },
        {
            "name": "autoRemove",
            "baseName": "AutoRemove",
            "type": "boolean"
        },
        {
            "name": "volumeDriver",
            "baseName": "VolumeDriver",
            "type": "string"
        },
        {
            "name": "volumesFrom",
            "baseName": "VolumesFrom",
            "type": "Array<string>"
        },
        {
            "name": "mounts",
            "baseName": "Mounts",
            "type": "Array<Mount>"
        },
        {
            "name": "capAdd",
            "baseName": "CapAdd",
            "type": "Array<string>"
        },
        {
            "name": "capDrop",
            "baseName": "CapDrop",
            "type": "Array<string>"
        },
        {
            "name": "cgroupnsMode",
            "baseName": "CgroupnsMode",
            "type": "HostConfig.CgroupnsModeEnum"
        },
        {
            "name": "dns",
            "baseName": "Dns",
            "type": "Array<string>"
        },
        {
            "name": "dnsOptions",
            "baseName": "DnsOptions",
            "type": "Array<string>"
        },
        {
            "name": "dnsSearch",
            "baseName": "DnsSearch",
            "type": "Array<string>"
        },
        {
            "name": "extraHosts",
            "baseName": "ExtraHosts",
            "type": "Array<string>"
        },
        {
            "name": "groupAdd",
            "baseName": "GroupAdd",
            "type": "Array<string>"
        },
        {
            "name": "ipcMode",
            "baseName": "IpcMode",
            "type": "string"
        },
        {
            "name": "cgroup",
            "baseName": "Cgroup",
            "type": "string"
        },
        {
            "name": "links",
            "baseName": "Links",
            "type": "Array<string>"
        },
        {
            "name": "oomScoreAdj",
            "baseName": "OomScoreAdj",
            "type": "number"
        },
        {
            "name": "pidMode",
            "baseName": "PidMode",
            "type": "string"
        },
        {
            "name": "privileged",
            "baseName": "Privileged",
            "type": "boolean"
        },
        {
            "name": "publishAllPorts",
            "baseName": "PublishAllPorts",
            "type": "boolean"
        },
        {
            "name": "readonlyRootfs",
            "baseName": "ReadonlyRootfs",
            "type": "boolean"
        },
        {
            "name": "securityOpt",
            "baseName": "SecurityOpt",
            "type": "Array<string>"
        },
        {
            "name": "storageOpt",
            "baseName": "StorageOpt",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "tmpfs",
            "baseName": "Tmpfs",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "uTSMode",
            "baseName": "UTSMode",
            "type": "string"
        },
        {
            "name": "usernsMode",
            "baseName": "UsernsMode",
            "type": "string"
        },
        {
            "name": "shmSize",
            "baseName": "ShmSize",
            "type": "number"
        },
        {
            "name": "sysctls",
            "baseName": "Sysctls",
            "type": "{ [key: string]: string; }"
        },
        {
            "name": "runtime",
            "baseName": "Runtime",
            "type": "string"
        },
        {
            "name": "consoleSize",
            "baseName": "ConsoleSize",
            "type": "Array<number>"
        },
        {
            "name": "isolation",
            "baseName": "Isolation",
            "type": "HostConfig.IsolationEnum"
        },
        {
            "name": "maskedPaths",
            "baseName": "MaskedPaths",
            "type": "Array<string>"
        },
        {
            "name": "readonlyPaths",
            "baseName": "ReadonlyPaths",
            "type": "Array<string>"
        }    ];

    static getAttributeTypeMap() {
        return HostConfig.attributeTypeMap;
    }
}

export namespace HostConfig {
    export enum CgroupnsModeEnum {
        Private = <any> 'private',
        Host = <any> 'host'
    }
    export enum IsolationEnum {
        Default = <any> 'default',
        Process = <any> 'process',
        Hyperv = <any> 'hyperv'
    }
}
