# DockerEngineApi.Resources

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cpuShares** | **Number** | An integer value representing this container&#39;s relative CPU weight versus other containers.  | [optional] 
**memory** | **Number** | Memory limit in bytes. | [optional] [default to 0]
**cgroupParent** | **String** | Path to &#x60;cgroups&#x60; under which the container&#39;s &#x60;cgroup&#x60; is created. If the path is not absolute, the path is considered to be relative to the &#x60;cgroups&#x60; path of the init process. Cgroups are created if they do not already exist.  | [optional] 
**blkioWeight** | **Number** | Block IO weight (relative weight). | [optional] 
**blkioWeightDevice** | [**[ResourcesBlkioWeightDevice]**](ResourcesBlkioWeightDevice.md) | Block IO weight (relative device weight) in the form:  &#x60;&#x60;&#x60; [{\&quot;Path\&quot;: \&quot;device_path\&quot;, \&quot;Weight\&quot;: weight}] &#x60;&#x60;&#x60;  | [optional] 
**blkioDeviceReadBps** | [**[ThrottleDevice]**](ThrottleDevice.md) | Limit read rate (bytes per second) from a device, in the form:  &#x60;&#x60;&#x60; [{\&quot;Path\&quot;: \&quot;device_path\&quot;, \&quot;Rate\&quot;: rate}] &#x60;&#x60;&#x60;  | [optional] 
**blkioDeviceWriteBps** | [**[ThrottleDevice]**](ThrottleDevice.md) | Limit write rate (bytes per second) to a device, in the form:  &#x60;&#x60;&#x60; [{\&quot;Path\&quot;: \&quot;device_path\&quot;, \&quot;Rate\&quot;: rate}] &#x60;&#x60;&#x60;  | [optional] 
**blkioDeviceReadIOps** | [**[ThrottleDevice]**](ThrottleDevice.md) | Limit read rate (IO per second) from a device, in the form:  &#x60;&#x60;&#x60; [{\&quot;Path\&quot;: \&quot;device_path\&quot;, \&quot;Rate\&quot;: rate}] &#x60;&#x60;&#x60;  | [optional] 
**blkioDeviceWriteIOps** | [**[ThrottleDevice]**](ThrottleDevice.md) | Limit write rate (IO per second) to a device, in the form:  &#x60;&#x60;&#x60; [{\&quot;Path\&quot;: \&quot;device_path\&quot;, \&quot;Rate\&quot;: rate}] &#x60;&#x60;&#x60;  | [optional] 
**cpuPeriod** | **Number** | The length of a CPU period in microseconds. | [optional] 
**cpuQuota** | **Number** | Microseconds of CPU time that the container can get in a CPU period.  | [optional] 
**cpuRealtimePeriod** | **Number** | The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks.  | [optional] 
**cpuRealtimeRuntime** | **Number** | The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks.  | [optional] 
**cpusetCpus** | **String** | CPUs in which to allow execution (e.g., &#x60;0-3&#x60;, &#x60;0,1&#x60;).  | [optional] 
**cpusetMems** | **String** | Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems.  | [optional] 
**devices** | [**[DeviceMapping]**](DeviceMapping.md) | A list of devices to add to the container. | [optional] 
**deviceCgroupRules** | **[String]** | a list of cgroup rules to apply to the container | [optional] 
**deviceRequests** | [**[DeviceRequest]**](DeviceRequest.md) | A list of requests for devices to be sent to device drivers.  | [optional] 
**kernelMemory** | **Number** | Kernel memory limit in bytes.  &lt;p&gt;&lt;br /&gt;&lt;/p&gt;  &gt; **Deprecated**: This field is deprecated as the kernel 5.4 deprecated &gt; &#x60;kmem.limit_in_bytes&#x60;.  | [optional] 
**kernelMemoryTCP** | **Number** | Hard limit for kernel TCP buffer memory (in bytes). | [optional] 
**memoryReservation** | **Number** | Memory soft limit in bytes. | [optional] 
**memorySwap** | **Number** | Total memory limit (memory + swap). Set as &#x60;-1&#x60; to enable unlimited swap.  | [optional] 
**memorySwappiness** | **Number** | Tune a container&#39;s memory swappiness behavior. Accepts an integer between 0 and 100.  | [optional] 
**nanoCpus** | **Number** | CPU quota in units of 10&lt;sup&gt;-9&lt;/sup&gt; CPUs. | [optional] 
**oomKillDisable** | **Boolean** | Disable OOM Killer for the container. | [optional] 
**init** | **Boolean** | Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used.  | [optional] 
**pidsLimit** | **Number** | Tune a container&#39;s PIDs limit. Set &#x60;0&#x60; or &#x60;-1&#x60; for unlimited, or &#x60;null&#x60; to not change.  | [optional] 
**ulimits** | [**[ResourcesUlimits]**](ResourcesUlimits.md) | A list of resource limits to set in the container. For example:  &#x60;&#x60;&#x60; {\&quot;Name\&quot;: \&quot;nofile\&quot;, \&quot;Soft\&quot;: 1024, \&quot;Hard\&quot;: 2048} &#x60;&#x60;&#x60;  | [optional] 
**cpuCount** | **Number** | The number of usable CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is &#x60;CPUCount&#x60; first, then &#x60;CPUShares&#x60;, and &#x60;CPUPercent&#x60; last.  | [optional] 
**cpuPercent** | **Number** | The usable percentage of the available CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is &#x60;CPUCount&#x60; first, then &#x60;CPUShares&#x60;, and &#x60;CPUPercent&#x60; last.  | [optional] 
**iOMaximumIOps** | **Number** | Maximum IOps for the container system drive (Windows only) | [optional] 
**iOMaximumBandwidth** | **Number** | Maximum IO in bytes per second for the container system drive (Windows only).  | [optional] 


