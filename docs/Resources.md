# DockerEngineApi.Resources

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpuShares** | **Number** | An integer value representing this container's relative CPU weight versus other containers.  | [optional] 
**memory** | **Number** | Memory limit in bytes. | [optional] [default to 0]
**cgroupParent** | **String** | Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist.  | [optional] 
**blkioWeight** | **Number** | Block IO weight (relative weight). | [optional] 
**blkioWeightDevice** | [**[ResourcesBlkioWeightDevice]**](ResourcesBlkioWeightDevice.md) | Block IO weight (relative device weight) in the form:  ``` [{\"Path\": \"device_path\", \"Weight\": weight}] ```  | [optional] 
**blkioDeviceReadBps** | [**[ThrottleDevice]**](ThrottleDevice.md) | Limit read rate (bytes per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ```  | [optional] 
**blkioDeviceWriteBps** | [**[ThrottleDevice]**](ThrottleDevice.md) | Limit write rate (bytes per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ```  | [optional] 
**blkioDeviceReadIOps** | [**[ThrottleDevice]**](ThrottleDevice.md) | Limit read rate (IO per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ```  | [optional] 
**blkioDeviceWriteIOps** | [**[ThrottleDevice]**](ThrottleDevice.md) | Limit write rate (IO per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ```  | [optional] 
**cpuPeriod** | **Number** | The length of a CPU period in microseconds. | [optional] 
**cpuQuota** | **Number** | Microseconds of CPU time that the container can get in a CPU period.  | [optional] 
**cpuRealtimePeriod** | **Number** | The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks.  | [optional] 
**cpuRealtimeRuntime** | **Number** | The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks.  | [optional] 
**cpusetCpus** | **String** | CPUs in which to allow execution (e.g., `0-3`, `0,1`).  | [optional] 
**cpusetMems** | **String** | Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems.  | [optional] 
**devices** | [**[DeviceMapping]**](DeviceMapping.md) | A list of devices to add to the container. | [optional] 
**deviceCgroupRules** | **[String]** | a list of cgroup rules to apply to the container | [optional] 
**deviceRequests** | [**[DeviceRequest]**](DeviceRequest.md) | A list of requests for devices to be sent to device drivers.  | [optional] 
**kernelMemory** | **Number** | Kernel memory limit in bytes.  <p><br /></p>  > **Deprecated**: This field is deprecated as the kernel 5.4 deprecated > `kmem.limit_in_bytes`.  | [optional] 
**kernelMemoryTCP** | **Number** | Hard limit for kernel TCP buffer memory (in bytes). | [optional] 
**memoryReservation** | **Number** | Memory soft limit in bytes. | [optional] 
**memorySwap** | **Number** | Total memory limit (memory + swap). Set as `-1` to enable unlimited swap.  | [optional] 
**memorySwappiness** | **Number** | Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100.  | [optional] 
**nanoCpus** | **Number** | CPU quota in units of 10<sup>-9</sup> CPUs. | [optional] 
**oomKillDisable** | **Boolean** | Disable OOM Killer for the container. | [optional] 
**init** | **Boolean** | Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used.  | [optional] 
**pidsLimit** | **Number** | Tune a container's PIDs limit. Set `0` or `-1` for unlimited, or `null` to not change.  | [optional] 
**ulimits** | [**[ResourcesUlimits]**](ResourcesUlimits.md) | A list of resource limits to set in the container. For example:  ``` {\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048} ```  | [optional] 
**cpuCount** | **Number** | The number of usable CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.  | [optional] 
**cpuPercent** | **Number** | The usable percentage of the available CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last.  | [optional] 
**iOMaximumIOps** | **Number** | Maximum IOps for the container system drive (Windows only) | [optional] 
**iOMaximumBandwidth** | **Number** | Maximum IO in bytes per second for the container system drive (Windows only).  | [optional] 


