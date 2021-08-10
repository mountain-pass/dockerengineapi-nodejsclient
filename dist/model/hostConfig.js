"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeviceMapping = _interopRequireDefault(require("./DeviceMapping"));

var _DeviceRequest = _interopRequireDefault(require("./DeviceRequest"));

var _HostConfigAllOf = _interopRequireDefault(require("./HostConfigAllOf"));

var _HostConfigAllOfLogConfig = _interopRequireDefault(require("./HostConfigAllOfLogConfig"));

var _Mount = _interopRequireDefault(require("./Mount"));

var _PortBinding = _interopRequireDefault(require("./PortBinding"));

var _Resources = _interopRequireDefault(require("./Resources"));

var _ResourcesBlkioWeightDevice = _interopRequireDefault(require("./ResourcesBlkioWeightDevice"));

var _ResourcesUlimits = _interopRequireDefault(require("./ResourcesUlimits"));

var _RestartPolicy = _interopRequireDefault(require("./RestartPolicy"));

var _ThrottleDevice = _interopRequireDefault(require("./ThrottleDevice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HostConfig model module.
 * @module model/HostConfig
 * @version 1.41
 */
var HostConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HostConfig</code>.
   * Container configuration that depends on the host we are running on
   * @alias module:model/HostConfig
   * @implements module:model/Resources
   * @implements module:model/HostConfigAllOf
   */
  function HostConfig() {
    _classCallCheck(this, HostConfig);

    _Resources["default"].initialize(this);

    _HostConfigAllOf["default"].initialize(this);

    HostConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HostConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HostConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HostConfig} obj Optional instance to populate.
     * @return {module:model/HostConfig} The populated <code>HostConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HostConfig();

        _Resources["default"].constructFromObject(data, obj);

        _HostConfigAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('CpuShares')) {
          obj['CpuShares'] = _ApiClient["default"].convertToType(data['CpuShares'], 'Number');
        }

        if (data.hasOwnProperty('Memory')) {
          obj['Memory'] = _ApiClient["default"].convertToType(data['Memory'], 'Number');
        }

        if (data.hasOwnProperty('CgroupParent')) {
          obj['CgroupParent'] = _ApiClient["default"].convertToType(data['CgroupParent'], 'String');
        }

        if (data.hasOwnProperty('BlkioWeight')) {
          obj['BlkioWeight'] = _ApiClient["default"].convertToType(data['BlkioWeight'], 'Number');
        }

        if (data.hasOwnProperty('BlkioWeightDevice')) {
          obj['BlkioWeightDevice'] = _ApiClient["default"].convertToType(data['BlkioWeightDevice'], [_ResourcesBlkioWeightDevice["default"]]);
        }

        if (data.hasOwnProperty('BlkioDeviceReadBps')) {
          obj['BlkioDeviceReadBps'] = _ApiClient["default"].convertToType(data['BlkioDeviceReadBps'], [_ThrottleDevice["default"]]);
        }

        if (data.hasOwnProperty('BlkioDeviceWriteBps')) {
          obj['BlkioDeviceWriteBps'] = _ApiClient["default"].convertToType(data['BlkioDeviceWriteBps'], [_ThrottleDevice["default"]]);
        }

        if (data.hasOwnProperty('BlkioDeviceReadIOps')) {
          obj['BlkioDeviceReadIOps'] = _ApiClient["default"].convertToType(data['BlkioDeviceReadIOps'], [_ThrottleDevice["default"]]);
        }

        if (data.hasOwnProperty('BlkioDeviceWriteIOps')) {
          obj['BlkioDeviceWriteIOps'] = _ApiClient["default"].convertToType(data['BlkioDeviceWriteIOps'], [_ThrottleDevice["default"]]);
        }

        if (data.hasOwnProperty('CpuPeriod')) {
          obj['CpuPeriod'] = _ApiClient["default"].convertToType(data['CpuPeriod'], 'Number');
        }

        if (data.hasOwnProperty('CpuQuota')) {
          obj['CpuQuota'] = _ApiClient["default"].convertToType(data['CpuQuota'], 'Number');
        }

        if (data.hasOwnProperty('CpuRealtimePeriod')) {
          obj['CpuRealtimePeriod'] = _ApiClient["default"].convertToType(data['CpuRealtimePeriod'], 'Number');
        }

        if (data.hasOwnProperty('CpuRealtimeRuntime')) {
          obj['CpuRealtimeRuntime'] = _ApiClient["default"].convertToType(data['CpuRealtimeRuntime'], 'Number');
        }

        if (data.hasOwnProperty('CpusetCpus')) {
          obj['CpusetCpus'] = _ApiClient["default"].convertToType(data['CpusetCpus'], 'String');
        }

        if (data.hasOwnProperty('CpusetMems')) {
          obj['CpusetMems'] = _ApiClient["default"].convertToType(data['CpusetMems'], 'String');
        }

        if (data.hasOwnProperty('Devices')) {
          obj['Devices'] = _ApiClient["default"].convertToType(data['Devices'], [_DeviceMapping["default"]]);
        }

        if (data.hasOwnProperty('DeviceCgroupRules')) {
          obj['DeviceCgroupRules'] = _ApiClient["default"].convertToType(data['DeviceCgroupRules'], ['String']);
        }

        if (data.hasOwnProperty('DeviceRequests')) {
          obj['DeviceRequests'] = _ApiClient["default"].convertToType(data['DeviceRequests'], [_DeviceRequest["default"]]);
        }

        if (data.hasOwnProperty('KernelMemory')) {
          obj['KernelMemory'] = _ApiClient["default"].convertToType(data['KernelMemory'], 'Number');
        }

        if (data.hasOwnProperty('KernelMemoryTCP')) {
          obj['KernelMemoryTCP'] = _ApiClient["default"].convertToType(data['KernelMemoryTCP'], 'Number');
        }

        if (data.hasOwnProperty('MemoryReservation')) {
          obj['MemoryReservation'] = _ApiClient["default"].convertToType(data['MemoryReservation'], 'Number');
        }

        if (data.hasOwnProperty('MemorySwap')) {
          obj['MemorySwap'] = _ApiClient["default"].convertToType(data['MemorySwap'], 'Number');
        }

        if (data.hasOwnProperty('MemorySwappiness')) {
          obj['MemorySwappiness'] = _ApiClient["default"].convertToType(data['MemorySwappiness'], 'Number');
        }

        if (data.hasOwnProperty('NanoCpus')) {
          obj['NanoCpus'] = _ApiClient["default"].convertToType(data['NanoCpus'], 'Number');
        }

        if (data.hasOwnProperty('OomKillDisable')) {
          obj['OomKillDisable'] = _ApiClient["default"].convertToType(data['OomKillDisable'], 'Boolean');
        }

        if (data.hasOwnProperty('Init')) {
          obj['Init'] = _ApiClient["default"].convertToType(data['Init'], 'Boolean');
        }

        if (data.hasOwnProperty('PidsLimit')) {
          obj['PidsLimit'] = _ApiClient["default"].convertToType(data['PidsLimit'], 'Number');
        }

        if (data.hasOwnProperty('Ulimits')) {
          obj['Ulimits'] = _ApiClient["default"].convertToType(data['Ulimits'], [_ResourcesUlimits["default"]]);
        }

        if (data.hasOwnProperty('CpuCount')) {
          obj['CpuCount'] = _ApiClient["default"].convertToType(data['CpuCount'], 'Number');
        }

        if (data.hasOwnProperty('CpuPercent')) {
          obj['CpuPercent'] = _ApiClient["default"].convertToType(data['CpuPercent'], 'Number');
        }

        if (data.hasOwnProperty('IOMaximumIOps')) {
          obj['IOMaximumIOps'] = _ApiClient["default"].convertToType(data['IOMaximumIOps'], 'Number');
        }

        if (data.hasOwnProperty('IOMaximumBandwidth')) {
          obj['IOMaximumBandwidth'] = _ApiClient["default"].convertToType(data['IOMaximumBandwidth'], 'Number');
        }

        if (data.hasOwnProperty('Binds')) {
          obj['Binds'] = _ApiClient["default"].convertToType(data['Binds'], ['String']);
        }

        if (data.hasOwnProperty('ContainerIDFile')) {
          obj['ContainerIDFile'] = _ApiClient["default"].convertToType(data['ContainerIDFile'], 'String');
        }

        if (data.hasOwnProperty('LogConfig')) {
          obj['LogConfig'] = _HostConfigAllOfLogConfig["default"].constructFromObject(data['LogConfig']);
        }

        if (data.hasOwnProperty('NetworkMode')) {
          obj['NetworkMode'] = _ApiClient["default"].convertToType(data['NetworkMode'], 'String');
        }

        if (data.hasOwnProperty('PortBindings')) {
          obj['PortBindings'] = _ApiClient["default"].convertToType(data['PortBindings'], {
            'String': [_PortBinding["default"]]
          });
        }

        if (data.hasOwnProperty('RestartPolicy')) {
          obj['RestartPolicy'] = _RestartPolicy["default"].constructFromObject(data['RestartPolicy']);
        }

        if (data.hasOwnProperty('AutoRemove')) {
          obj['AutoRemove'] = _ApiClient["default"].convertToType(data['AutoRemove'], 'Boolean');
        }

        if (data.hasOwnProperty('VolumeDriver')) {
          obj['VolumeDriver'] = _ApiClient["default"].convertToType(data['VolumeDriver'], 'String');
        }

        if (data.hasOwnProperty('VolumesFrom')) {
          obj['VolumesFrom'] = _ApiClient["default"].convertToType(data['VolumesFrom'], ['String']);
        }

        if (data.hasOwnProperty('Mounts')) {
          obj['Mounts'] = _ApiClient["default"].convertToType(data['Mounts'], [_Mount["default"]]);
        }

        if (data.hasOwnProperty('CapAdd')) {
          obj['CapAdd'] = _ApiClient["default"].convertToType(data['CapAdd'], ['String']);
        }

        if (data.hasOwnProperty('CapDrop')) {
          obj['CapDrop'] = _ApiClient["default"].convertToType(data['CapDrop'], ['String']);
        }

        if (data.hasOwnProperty('CgroupnsMode')) {
          obj['CgroupnsMode'] = _ApiClient["default"].convertToType(data['CgroupnsMode'], 'String');
        }

        if (data.hasOwnProperty('Dns')) {
          obj['Dns'] = _ApiClient["default"].convertToType(data['Dns'], ['String']);
        }

        if (data.hasOwnProperty('DnsOptions')) {
          obj['DnsOptions'] = _ApiClient["default"].convertToType(data['DnsOptions'], ['String']);
        }

        if (data.hasOwnProperty('DnsSearch')) {
          obj['DnsSearch'] = _ApiClient["default"].convertToType(data['DnsSearch'], ['String']);
        }

        if (data.hasOwnProperty('ExtraHosts')) {
          obj['ExtraHosts'] = _ApiClient["default"].convertToType(data['ExtraHosts'], ['String']);
        }

        if (data.hasOwnProperty('GroupAdd')) {
          obj['GroupAdd'] = _ApiClient["default"].convertToType(data['GroupAdd'], ['String']);
        }

        if (data.hasOwnProperty('IpcMode')) {
          obj['IpcMode'] = _ApiClient["default"].convertToType(data['IpcMode'], 'String');
        }

        if (data.hasOwnProperty('Cgroup')) {
          obj['Cgroup'] = _ApiClient["default"].convertToType(data['Cgroup'], 'String');
        }

        if (data.hasOwnProperty('Links')) {
          obj['Links'] = _ApiClient["default"].convertToType(data['Links'], ['String']);
        }

        if (data.hasOwnProperty('OomScoreAdj')) {
          obj['OomScoreAdj'] = _ApiClient["default"].convertToType(data['OomScoreAdj'], 'Number');
        }

        if (data.hasOwnProperty('PidMode')) {
          obj['PidMode'] = _ApiClient["default"].convertToType(data['PidMode'], 'String');
        }

        if (data.hasOwnProperty('Privileged')) {
          obj['Privileged'] = _ApiClient["default"].convertToType(data['Privileged'], 'Boolean');
        }

        if (data.hasOwnProperty('PublishAllPorts')) {
          obj['PublishAllPorts'] = _ApiClient["default"].convertToType(data['PublishAllPorts'], 'Boolean');
        }

        if (data.hasOwnProperty('ReadonlyRootfs')) {
          obj['ReadonlyRootfs'] = _ApiClient["default"].convertToType(data['ReadonlyRootfs'], 'Boolean');
        }

        if (data.hasOwnProperty('SecurityOpt')) {
          obj['SecurityOpt'] = _ApiClient["default"].convertToType(data['SecurityOpt'], ['String']);
        }

        if (data.hasOwnProperty('StorageOpt')) {
          obj['StorageOpt'] = _ApiClient["default"].convertToType(data['StorageOpt'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Tmpfs')) {
          obj['Tmpfs'] = _ApiClient["default"].convertToType(data['Tmpfs'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('UTSMode')) {
          obj['UTSMode'] = _ApiClient["default"].convertToType(data['UTSMode'], 'String');
        }

        if (data.hasOwnProperty('UsernsMode')) {
          obj['UsernsMode'] = _ApiClient["default"].convertToType(data['UsernsMode'], 'String');
        }

        if (data.hasOwnProperty('ShmSize')) {
          obj['ShmSize'] = _ApiClient["default"].convertToType(data['ShmSize'], 'Number');
        }

        if (data.hasOwnProperty('Sysctls')) {
          obj['Sysctls'] = _ApiClient["default"].convertToType(data['Sysctls'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Runtime')) {
          obj['Runtime'] = _ApiClient["default"].convertToType(data['Runtime'], 'String');
        }

        if (data.hasOwnProperty('ConsoleSize')) {
          obj['ConsoleSize'] = _ApiClient["default"].convertToType(data['ConsoleSize'], ['Number']);
        }

        if (data.hasOwnProperty('Isolation')) {
          obj['Isolation'] = _ApiClient["default"].convertToType(data['Isolation'], 'String');
        }

        if (data.hasOwnProperty('MaskedPaths')) {
          obj['MaskedPaths'] = _ApiClient["default"].convertToType(data['MaskedPaths'], ['String']);
        }

        if (data.hasOwnProperty('ReadonlyPaths')) {
          obj['ReadonlyPaths'] = _ApiClient["default"].convertToType(data['ReadonlyPaths'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return HostConfig;
}();
/**
 * An integer value representing this container's relative CPU weight versus other containers. 
 * @member {Number} CpuShares
 */


HostConfig.prototype['CpuShares'] = undefined;
/**
 * Memory limit in bytes.
 * @member {Number} Memory
 * @default 0
 */

HostConfig.prototype['Memory'] = 0;
/**
 * Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist. 
 * @member {String} CgroupParent
 */

HostConfig.prototype['CgroupParent'] = undefined;
/**
 * Block IO weight (relative weight).
 * @member {Number} BlkioWeight
 */

HostConfig.prototype['BlkioWeight'] = undefined;
/**
 * Block IO weight (relative device weight) in the form:  ``` [{\"Path\": \"device_path\", \"Weight\": weight}] ``` 
 * @member {Array.<module:model/ResourcesBlkioWeightDevice>} BlkioWeightDevice
 */

HostConfig.prototype['BlkioWeightDevice'] = undefined;
/**
 * Limit read rate (bytes per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceReadBps
 */

HostConfig.prototype['BlkioDeviceReadBps'] = undefined;
/**
 * Limit write rate (bytes per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceWriteBps
 */

HostConfig.prototype['BlkioDeviceWriteBps'] = undefined;
/**
 * Limit read rate (IO per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceReadIOps
 */

HostConfig.prototype['BlkioDeviceReadIOps'] = undefined;
/**
 * Limit write rate (IO per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceWriteIOps
 */

HostConfig.prototype['BlkioDeviceWriteIOps'] = undefined;
/**
 * The length of a CPU period in microseconds.
 * @member {Number} CpuPeriod
 */

HostConfig.prototype['CpuPeriod'] = undefined;
/**
 * Microseconds of CPU time that the container can get in a CPU period. 
 * @member {Number} CpuQuota
 */

HostConfig.prototype['CpuQuota'] = undefined;
/**
 * The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks. 
 * @member {Number} CpuRealtimePeriod
 */

HostConfig.prototype['CpuRealtimePeriod'] = undefined;
/**
 * The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks. 
 * @member {Number} CpuRealtimeRuntime
 */

HostConfig.prototype['CpuRealtimeRuntime'] = undefined;
/**
 * CPUs in which to allow execution (e.g., `0-3`, `0,1`). 
 * @member {String} CpusetCpus
 */

HostConfig.prototype['CpusetCpus'] = undefined;
/**
 * Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems. 
 * @member {String} CpusetMems
 */

HostConfig.prototype['CpusetMems'] = undefined;
/**
 * A list of devices to add to the container.
 * @member {Array.<module:model/DeviceMapping>} Devices
 */

HostConfig.prototype['Devices'] = undefined;
/**
 * a list of cgroup rules to apply to the container
 * @member {Array.<String>} DeviceCgroupRules
 */

HostConfig.prototype['DeviceCgroupRules'] = undefined;
/**
 * A list of requests for devices to be sent to device drivers. 
 * @member {Array.<module:model/DeviceRequest>} DeviceRequests
 */

HostConfig.prototype['DeviceRequests'] = undefined;
/**
 * Kernel memory limit in bytes.  <p><br /></p>  > **Deprecated**: This field is deprecated as the kernel 5.4 deprecated > `kmem.limit_in_bytes`. 
 * @member {Number} KernelMemory
 */

HostConfig.prototype['KernelMemory'] = undefined;
/**
 * Hard limit for kernel TCP buffer memory (in bytes).
 * @member {Number} KernelMemoryTCP
 */

HostConfig.prototype['KernelMemoryTCP'] = undefined;
/**
 * Memory soft limit in bytes.
 * @member {Number} MemoryReservation
 */

HostConfig.prototype['MemoryReservation'] = undefined;
/**
 * Total memory limit (memory + swap). Set as `-1` to enable unlimited swap. 
 * @member {Number} MemorySwap
 */

HostConfig.prototype['MemorySwap'] = undefined;
/**
 * Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100. 
 * @member {Number} MemorySwappiness
 */

HostConfig.prototype['MemorySwappiness'] = undefined;
/**
 * CPU quota in units of 10<sup>-9</sup> CPUs.
 * @member {Number} NanoCpus
 */

HostConfig.prototype['NanoCpus'] = undefined;
/**
 * Disable OOM Killer for the container.
 * @member {Boolean} OomKillDisable
 */

HostConfig.prototype['OomKillDisable'] = undefined;
/**
 * Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used. 
 * @member {Boolean} Init
 */

HostConfig.prototype['Init'] = undefined;
/**
 * Tune a container's PIDs limit. Set `0` or `-1` for unlimited, or `null` to not change. 
 * @member {Number} PidsLimit
 */

HostConfig.prototype['PidsLimit'] = undefined;
/**
 * A list of resource limits to set in the container. For example:  ``` {\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048} ``` 
 * @member {Array.<module:model/ResourcesUlimits>} Ulimits
 */

HostConfig.prototype['Ulimits'] = undefined;
/**
 * The number of usable CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last. 
 * @member {Number} CpuCount
 */

HostConfig.prototype['CpuCount'] = undefined;
/**
 * The usable percentage of the available CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last. 
 * @member {Number} CpuPercent
 */

HostConfig.prototype['CpuPercent'] = undefined;
/**
 * Maximum IOps for the container system drive (Windows only)
 * @member {Number} IOMaximumIOps
 */

HostConfig.prototype['IOMaximumIOps'] = undefined;
/**
 * Maximum IO in bytes per second for the container system drive (Windows only). 
 * @member {Number} IOMaximumBandwidth
 */

HostConfig.prototype['IOMaximumBandwidth'] = undefined;
/**
 * A list of volume bindings for this container. Each volume binding is a string in one of these forms:  - `host-src:container-dest[:options]` to bind-mount a host path   into the container. Both `host-src`, and `container-dest` must   be an _absolute_ path. - `volume-name:container-dest[:options]` to bind-mount a volume   managed by a volume driver into the container. `container-dest`   must be an _absolute_ path.  `options` is an optional, comma-delimited list of:  - `nocopy` disables automatic copying of data from the container   path to the volume. The `nocopy` flag only applies to named volumes. - `[ro|rw]` mounts a volume read-only or read-write, respectively.   If omitted or set to `rw`, volumes are mounted read-write. - `[z|Z]` applies SELinux labels to allow or deny multiple containers   to read and write to the same volume.     - `z`: a _shared_ content label is applied to the content. This       label indicates that multiple containers can share the volume       content, for both reading and writing.     - `Z`: a _private unshared_ label is applied to the content.       This label indicates that only the current container can use       a private volume. Labeling systems such as SELinux require       proper labels to be placed on volume content that is mounted       into a container. Without a label, the security system can       prevent a container's processes from using the content. By       default, the labels set by the host operating system are not       modified. - `[[r]shared|[r]slave|[r]private]` specifies mount   [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).   This only applies to bind-mounted volumes, not internal volumes   or named volumes. Mount propagation requires the source mount   point (the location where the source directory is mounted in the   host operating system) to have the correct propagation properties.   For shared volumes, the source mount point must be set to `shared`.   For slave volumes, the mount must be set to either `shared` or   `slave`. 
 * @member {Array.<String>} Binds
 */

HostConfig.prototype['Binds'] = undefined;
/**
 * Path to a file where the container ID is written
 * @member {String} ContainerIDFile
 */

HostConfig.prototype['ContainerIDFile'] = undefined;
/**
 * @member {module:model/HostConfigAllOfLogConfig} LogConfig
 */

HostConfig.prototype['LogConfig'] = undefined;
/**
 * Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to. 
 * @member {String} NetworkMode
 */

HostConfig.prototype['NetworkMode'] = undefined;
/**
 * PortMap describes the mapping of container ports to host ports, using the container's port-number and protocol as key in the format `<port>/<protocol>`, for example, `80/udp`.  If a container's port is mapped for multiple protocols, separate entries are added to the mapping table. 
 * @member {Object.<String, Array.<module:model/PortBinding>>} PortBindings
 */

HostConfig.prototype['PortBindings'] = undefined;
/**
 * @member {module:model/RestartPolicy} RestartPolicy
 */

HostConfig.prototype['RestartPolicy'] = undefined;
/**
 * Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set. 
 * @member {Boolean} AutoRemove
 */

HostConfig.prototype['AutoRemove'] = undefined;
/**
 * Driver that this container uses to mount volumes.
 * @member {String} VolumeDriver
 */

HostConfig.prototype['VolumeDriver'] = undefined;
/**
 * A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`. 
 * @member {Array.<String>} VolumesFrom
 */

HostConfig.prototype['VolumesFrom'] = undefined;
/**
 * Specification for mounts to be added to the container. 
 * @member {Array.<module:model/Mount>} Mounts
 */

HostConfig.prototype['Mounts'] = undefined;
/**
 * A list of kernel capabilities to add to the container. Conflicts with option 'Capabilities'. 
 * @member {Array.<String>} CapAdd
 */

HostConfig.prototype['CapAdd'] = undefined;
/**
 * A list of kernel capabilities to drop from the container. Conflicts with option 'Capabilities'. 
 * @member {Array.<String>} CapDrop
 */

HostConfig.prototype['CapDrop'] = undefined;
/**
 * cgroup namespace mode for the container. Possible values are:  - `\"private\"`: the container runs in its own private cgroup namespace - `\"host\"`: use the host system's cgroup namespace  If not specified, the daemon default is used, which can either be `\"private\"` or `\"host\"`, depending on daemon version, kernel support and configuration. 
 * @member {module:model/HostConfig.CgroupnsModeEnum} CgroupnsMode
 */

HostConfig.prototype['CgroupnsMode'] = undefined;
/**
 * A list of DNS servers for the container to use.
 * @member {Array.<String>} Dns
 */

HostConfig.prototype['Dns'] = undefined;
/**
 * A list of DNS options.
 * @member {Array.<String>} DnsOptions
 */

HostConfig.prototype['DnsOptions'] = undefined;
/**
 * A list of DNS search domains.
 * @member {Array.<String>} DnsSearch
 */

HostConfig.prototype['DnsSearch'] = undefined;
/**
 * A list of hostnames/IP mappings to add to the container's `/etc/hosts` file. Specified in the form `[\"hostname:IP\"]`. 
 * @member {Array.<String>} ExtraHosts
 */

HostConfig.prototype['ExtraHosts'] = undefined;
/**
 * A list of additional groups that the container process will run as. 
 * @member {Array.<String>} GroupAdd
 */

HostConfig.prototype['GroupAdd'] = undefined;
/**
 * IPC sharing mode for the container. Possible values are:  - `\"none\"`: own private IPC namespace, with /dev/shm not mounted - `\"private\"`: own private IPC namespace - `\"shareable\"`: own private IPC namespace, with a possibility to share it with other containers - `\"container:<name|id>\"`: join another (shareable) container's IPC namespace - `\"host\"`: use the host system's IPC namespace  If not specified, daemon default is used, which can either be `\"private\"` or `\"shareable\"`, depending on daemon version and configuration. 
 * @member {String} IpcMode
 */

HostConfig.prototype['IpcMode'] = undefined;
/**
 * Cgroup to use for the container.
 * @member {String} Cgroup
 */

HostConfig.prototype['Cgroup'] = undefined;
/**
 * A list of links for the container in the form `container_name:alias`. 
 * @member {Array.<String>} Links
 */

HostConfig.prototype['Links'] = undefined;
/**
 * An integer value containing the score given to the container in order to tune OOM killer preferences. 
 * @member {Number} OomScoreAdj
 */

HostConfig.prototype['OomScoreAdj'] = undefined;
/**
 * Set the PID (Process) Namespace mode for the container. It can be either:  - `\"container:<name|id>\"`: joins another container's PID namespace - `\"host\"`: use the host's PID namespace inside the container 
 * @member {String} PidMode
 */

HostConfig.prototype['PidMode'] = undefined;
/**
 * Gives the container full access to the host.
 * @member {Boolean} Privileged
 */

HostConfig.prototype['Privileged'] = undefined;
/**
 * Allocates an ephemeral host port for all of a container's exposed ports.  Ports are de-allocated when the container stops and allocated when the container starts. The allocated port might be changed when restarting the container.  The port is selected from the ephemeral port range that depends on the kernel. For example, on Linux the range is defined by `/proc/sys/net/ipv4/ip_local_port_range`. 
 * @member {Boolean} PublishAllPorts
 */

HostConfig.prototype['PublishAllPorts'] = undefined;
/**
 * Mount the container's root filesystem as read only.
 * @member {Boolean} ReadonlyRootfs
 */

HostConfig.prototype['ReadonlyRootfs'] = undefined;
/**
 * A list of string values to customize labels for MLS systems, such as SELinux.
 * @member {Array.<String>} SecurityOpt
 */

HostConfig.prototype['SecurityOpt'] = undefined;
/**
 * Storage driver options for this container, in the form `{\"size\": \"120G\"}`. 
 * @member {Object.<String, String>} StorageOpt
 */

HostConfig.prototype['StorageOpt'] = undefined;
/**
 * A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example:  ``` { \"/run\": \"rw,noexec,nosuid,size=65536k\" } ``` 
 * @member {Object.<String, String>} Tmpfs
 */

HostConfig.prototype['Tmpfs'] = undefined;
/**
 * UTS namespace to use for the container.
 * @member {String} UTSMode
 */

HostConfig.prototype['UTSMode'] = undefined;
/**
 * Sets the usernamespace mode for the container when usernamespace remapping option is enabled. 
 * @member {String} UsernsMode
 */

HostConfig.prototype['UsernsMode'] = undefined;
/**
 * Size of `/dev/shm` in bytes. If omitted, the system uses 64MB. 
 * @member {Number} ShmSize
 */

HostConfig.prototype['ShmSize'] = undefined;
/**
 * A list of kernel parameters (sysctls) to set in the container. For example:  ``` {\"net.ipv4.ip_forward\": \"1\"} ``` 
 * @member {Object.<String, String>} Sysctls
 */

HostConfig.prototype['Sysctls'] = undefined;
/**
 * Runtime to use with this container.
 * @member {String} Runtime
 */

HostConfig.prototype['Runtime'] = undefined;
/**
 * Initial console size, as an `[height, width]` array. (Windows only) 
 * @member {Array.<Number>} ConsoleSize
 */

HostConfig.prototype['ConsoleSize'] = undefined;
/**
 * Isolation technology of the container. (Windows only) 
 * @member {module:model/HostConfig.IsolationEnum} Isolation
 */

HostConfig.prototype['Isolation'] = undefined;
/**
 * The list of paths to be masked inside the container (this overrides the default set of paths). 
 * @member {Array.<String>} MaskedPaths
 */

HostConfig.prototype['MaskedPaths'] = undefined;
/**
 * The list of paths to be set as read-only inside the container (this overrides the default set of paths). 
 * @member {Array.<String>} ReadonlyPaths
 */

HostConfig.prototype['ReadonlyPaths'] = undefined; // Implement Resources interface:

/**
 * An integer value representing this container's relative CPU weight versus other containers. 
 * @member {Number} CpuShares
 */

_Resources["default"].prototype['CpuShares'] = undefined;
/**
 * Memory limit in bytes.
 * @member {Number} Memory
 * @default 0
 */

_Resources["default"].prototype['Memory'] = 0;
/**
 * Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist. 
 * @member {String} CgroupParent
 */

_Resources["default"].prototype['CgroupParent'] = undefined;
/**
 * Block IO weight (relative weight).
 * @member {Number} BlkioWeight
 */

_Resources["default"].prototype['BlkioWeight'] = undefined;
/**
 * Block IO weight (relative device weight) in the form:  ``` [{\"Path\": \"device_path\", \"Weight\": weight}] ``` 
 * @member {Array.<module:model/ResourcesBlkioWeightDevice>} BlkioWeightDevice
 */

_Resources["default"].prototype['BlkioWeightDevice'] = undefined;
/**
 * Limit read rate (bytes per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceReadBps
 */

_Resources["default"].prototype['BlkioDeviceReadBps'] = undefined;
/**
 * Limit write rate (bytes per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceWriteBps
 */

_Resources["default"].prototype['BlkioDeviceWriteBps'] = undefined;
/**
 * Limit read rate (IO per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceReadIOps
 */

_Resources["default"].prototype['BlkioDeviceReadIOps'] = undefined;
/**
 * Limit write rate (IO per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceWriteIOps
 */

_Resources["default"].prototype['BlkioDeviceWriteIOps'] = undefined;
/**
 * The length of a CPU period in microseconds.
 * @member {Number} CpuPeriod
 */

_Resources["default"].prototype['CpuPeriod'] = undefined;
/**
 * Microseconds of CPU time that the container can get in a CPU period. 
 * @member {Number} CpuQuota
 */

_Resources["default"].prototype['CpuQuota'] = undefined;
/**
 * The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks. 
 * @member {Number} CpuRealtimePeriod
 */

_Resources["default"].prototype['CpuRealtimePeriod'] = undefined;
/**
 * The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks. 
 * @member {Number} CpuRealtimeRuntime
 */

_Resources["default"].prototype['CpuRealtimeRuntime'] = undefined;
/**
 * CPUs in which to allow execution (e.g., `0-3`, `0,1`). 
 * @member {String} CpusetCpus
 */

_Resources["default"].prototype['CpusetCpus'] = undefined;
/**
 * Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems. 
 * @member {String} CpusetMems
 */

_Resources["default"].prototype['CpusetMems'] = undefined;
/**
 * A list of devices to add to the container.
 * @member {Array.<module:model/DeviceMapping>} Devices
 */

_Resources["default"].prototype['Devices'] = undefined;
/**
 * a list of cgroup rules to apply to the container
 * @member {Array.<String>} DeviceCgroupRules
 */

_Resources["default"].prototype['DeviceCgroupRules'] = undefined;
/**
 * A list of requests for devices to be sent to device drivers. 
 * @member {Array.<module:model/DeviceRequest>} DeviceRequests
 */

_Resources["default"].prototype['DeviceRequests'] = undefined;
/**
 * Kernel memory limit in bytes.  <p><br /></p>  > **Deprecated**: This field is deprecated as the kernel 5.4 deprecated > `kmem.limit_in_bytes`. 
 * @member {Number} KernelMemory
 */

_Resources["default"].prototype['KernelMemory'] = undefined;
/**
 * Hard limit for kernel TCP buffer memory (in bytes).
 * @member {Number} KernelMemoryTCP
 */

_Resources["default"].prototype['KernelMemoryTCP'] = undefined;
/**
 * Memory soft limit in bytes.
 * @member {Number} MemoryReservation
 */

_Resources["default"].prototype['MemoryReservation'] = undefined;
/**
 * Total memory limit (memory + swap). Set as `-1` to enable unlimited swap. 
 * @member {Number} MemorySwap
 */

_Resources["default"].prototype['MemorySwap'] = undefined;
/**
 * Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100. 
 * @member {Number} MemorySwappiness
 */

_Resources["default"].prototype['MemorySwappiness'] = undefined;
/**
 * CPU quota in units of 10<sup>-9</sup> CPUs.
 * @member {Number} NanoCpus
 */

_Resources["default"].prototype['NanoCpus'] = undefined;
/**
 * Disable OOM Killer for the container.
 * @member {Boolean} OomKillDisable
 */

_Resources["default"].prototype['OomKillDisable'] = undefined;
/**
 * Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used. 
 * @member {Boolean} Init
 */

_Resources["default"].prototype['Init'] = undefined;
/**
 * Tune a container's PIDs limit. Set `0` or `-1` for unlimited, or `null` to not change. 
 * @member {Number} PidsLimit
 */

_Resources["default"].prototype['PidsLimit'] = undefined;
/**
 * A list of resource limits to set in the container. For example:  ``` {\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048} ``` 
 * @member {Array.<module:model/ResourcesUlimits>} Ulimits
 */

_Resources["default"].prototype['Ulimits'] = undefined;
/**
 * The number of usable CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last. 
 * @member {Number} CpuCount
 */

_Resources["default"].prototype['CpuCount'] = undefined;
/**
 * The usable percentage of the available CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last. 
 * @member {Number} CpuPercent
 */

_Resources["default"].prototype['CpuPercent'] = undefined;
/**
 * Maximum IOps for the container system drive (Windows only)
 * @member {Number} IOMaximumIOps
 */

_Resources["default"].prototype['IOMaximumIOps'] = undefined;
/**
 * Maximum IO in bytes per second for the container system drive (Windows only). 
 * @member {Number} IOMaximumBandwidth
 */

_Resources["default"].prototype['IOMaximumBandwidth'] = undefined; // Implement HostConfigAllOf interface:

/**
 * A list of volume bindings for this container. Each volume binding is a string in one of these forms:  - `host-src:container-dest[:options]` to bind-mount a host path   into the container. Both `host-src`, and `container-dest` must   be an _absolute_ path. - `volume-name:container-dest[:options]` to bind-mount a volume   managed by a volume driver into the container. `container-dest`   must be an _absolute_ path.  `options` is an optional, comma-delimited list of:  - `nocopy` disables automatic copying of data from the container   path to the volume. The `nocopy` flag only applies to named volumes. - `[ro|rw]` mounts a volume read-only or read-write, respectively.   If omitted or set to `rw`, volumes are mounted read-write. - `[z|Z]` applies SELinux labels to allow or deny multiple containers   to read and write to the same volume.     - `z`: a _shared_ content label is applied to the content. This       label indicates that multiple containers can share the volume       content, for both reading and writing.     - `Z`: a _private unshared_ label is applied to the content.       This label indicates that only the current container can use       a private volume. Labeling systems such as SELinux require       proper labels to be placed on volume content that is mounted       into a container. Without a label, the security system can       prevent a container's processes from using the content. By       default, the labels set by the host operating system are not       modified. - `[[r]shared|[r]slave|[r]private]` specifies mount   [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).   This only applies to bind-mounted volumes, not internal volumes   or named volumes. Mount propagation requires the source mount   point (the location where the source directory is mounted in the   host operating system) to have the correct propagation properties.   For shared volumes, the source mount point must be set to `shared`.   For slave volumes, the mount must be set to either `shared` or   `slave`. 
 * @member {Array.<String>} Binds
 */

_HostConfigAllOf["default"].prototype['Binds'] = undefined;
/**
 * Path to a file where the container ID is written
 * @member {String} ContainerIDFile
 */

_HostConfigAllOf["default"].prototype['ContainerIDFile'] = undefined;
/**
 * @member {module:model/HostConfigAllOfLogConfig} LogConfig
 */

_HostConfigAllOf["default"].prototype['LogConfig'] = undefined;
/**
 * Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to. 
 * @member {String} NetworkMode
 */

_HostConfigAllOf["default"].prototype['NetworkMode'] = undefined;
/**
 * PortMap describes the mapping of container ports to host ports, using the container's port-number and protocol as key in the format `<port>/<protocol>`, for example, `80/udp`.  If a container's port is mapped for multiple protocols, separate entries are added to the mapping table. 
 * @member {Object.<String, Array.<module:model/PortBinding>>} PortBindings
 */

_HostConfigAllOf["default"].prototype['PortBindings'] = undefined;
/**
 * @member {module:model/RestartPolicy} RestartPolicy
 */

_HostConfigAllOf["default"].prototype['RestartPolicy'] = undefined;
/**
 * Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set. 
 * @member {Boolean} AutoRemove
 */

_HostConfigAllOf["default"].prototype['AutoRemove'] = undefined;
/**
 * Driver that this container uses to mount volumes.
 * @member {String} VolumeDriver
 */

_HostConfigAllOf["default"].prototype['VolumeDriver'] = undefined;
/**
 * A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`. 
 * @member {Array.<String>} VolumesFrom
 */

_HostConfigAllOf["default"].prototype['VolumesFrom'] = undefined;
/**
 * Specification for mounts to be added to the container. 
 * @member {Array.<module:model/Mount>} Mounts
 */

_HostConfigAllOf["default"].prototype['Mounts'] = undefined;
/**
 * A list of kernel capabilities to add to the container. Conflicts with option 'Capabilities'. 
 * @member {Array.<String>} CapAdd
 */

_HostConfigAllOf["default"].prototype['CapAdd'] = undefined;
/**
 * A list of kernel capabilities to drop from the container. Conflicts with option 'Capabilities'. 
 * @member {Array.<String>} CapDrop
 */

_HostConfigAllOf["default"].prototype['CapDrop'] = undefined;
/**
 * cgroup namespace mode for the container. Possible values are:  - `\"private\"`: the container runs in its own private cgroup namespace - `\"host\"`: use the host system's cgroup namespace  If not specified, the daemon default is used, which can either be `\"private\"` or `\"host\"`, depending on daemon version, kernel support and configuration. 
 * @member {module:model/HostConfigAllOf.CgroupnsModeEnum} CgroupnsMode
 */

_HostConfigAllOf["default"].prototype['CgroupnsMode'] = undefined;
/**
 * A list of DNS servers for the container to use.
 * @member {Array.<String>} Dns
 */

_HostConfigAllOf["default"].prototype['Dns'] = undefined;
/**
 * A list of DNS options.
 * @member {Array.<String>} DnsOptions
 */

_HostConfigAllOf["default"].prototype['DnsOptions'] = undefined;
/**
 * A list of DNS search domains.
 * @member {Array.<String>} DnsSearch
 */

_HostConfigAllOf["default"].prototype['DnsSearch'] = undefined;
/**
 * A list of hostnames/IP mappings to add to the container's `/etc/hosts` file. Specified in the form `[\"hostname:IP\"]`. 
 * @member {Array.<String>} ExtraHosts
 */

_HostConfigAllOf["default"].prototype['ExtraHosts'] = undefined;
/**
 * A list of additional groups that the container process will run as. 
 * @member {Array.<String>} GroupAdd
 */

_HostConfigAllOf["default"].prototype['GroupAdd'] = undefined;
/**
 * IPC sharing mode for the container. Possible values are:  - `\"none\"`: own private IPC namespace, with /dev/shm not mounted - `\"private\"`: own private IPC namespace - `\"shareable\"`: own private IPC namespace, with a possibility to share it with other containers - `\"container:<name|id>\"`: join another (shareable) container's IPC namespace - `\"host\"`: use the host system's IPC namespace  If not specified, daemon default is used, which can either be `\"private\"` or `\"shareable\"`, depending on daemon version and configuration. 
 * @member {String} IpcMode
 */

_HostConfigAllOf["default"].prototype['IpcMode'] = undefined;
/**
 * Cgroup to use for the container.
 * @member {String} Cgroup
 */

_HostConfigAllOf["default"].prototype['Cgroup'] = undefined;
/**
 * A list of links for the container in the form `container_name:alias`. 
 * @member {Array.<String>} Links
 */

_HostConfigAllOf["default"].prototype['Links'] = undefined;
/**
 * An integer value containing the score given to the container in order to tune OOM killer preferences. 
 * @member {Number} OomScoreAdj
 */

_HostConfigAllOf["default"].prototype['OomScoreAdj'] = undefined;
/**
 * Set the PID (Process) Namespace mode for the container. It can be either:  - `\"container:<name|id>\"`: joins another container's PID namespace - `\"host\"`: use the host's PID namespace inside the container 
 * @member {String} PidMode
 */

_HostConfigAllOf["default"].prototype['PidMode'] = undefined;
/**
 * Gives the container full access to the host.
 * @member {Boolean} Privileged
 */

_HostConfigAllOf["default"].prototype['Privileged'] = undefined;
/**
 * Allocates an ephemeral host port for all of a container's exposed ports.  Ports are de-allocated when the container stops and allocated when the container starts. The allocated port might be changed when restarting the container.  The port is selected from the ephemeral port range that depends on the kernel. For example, on Linux the range is defined by `/proc/sys/net/ipv4/ip_local_port_range`. 
 * @member {Boolean} PublishAllPorts
 */

_HostConfigAllOf["default"].prototype['PublishAllPorts'] = undefined;
/**
 * Mount the container's root filesystem as read only.
 * @member {Boolean} ReadonlyRootfs
 */

_HostConfigAllOf["default"].prototype['ReadonlyRootfs'] = undefined;
/**
 * A list of string values to customize labels for MLS systems, such as SELinux.
 * @member {Array.<String>} SecurityOpt
 */

_HostConfigAllOf["default"].prototype['SecurityOpt'] = undefined;
/**
 * Storage driver options for this container, in the form `{\"size\": \"120G\"}`. 
 * @member {Object.<String, String>} StorageOpt
 */

_HostConfigAllOf["default"].prototype['StorageOpt'] = undefined;
/**
 * A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example:  ``` { \"/run\": \"rw,noexec,nosuid,size=65536k\" } ``` 
 * @member {Object.<String, String>} Tmpfs
 */

_HostConfigAllOf["default"].prototype['Tmpfs'] = undefined;
/**
 * UTS namespace to use for the container.
 * @member {String} UTSMode
 */

_HostConfigAllOf["default"].prototype['UTSMode'] = undefined;
/**
 * Sets the usernamespace mode for the container when usernamespace remapping option is enabled. 
 * @member {String} UsernsMode
 */

_HostConfigAllOf["default"].prototype['UsernsMode'] = undefined;
/**
 * Size of `/dev/shm` in bytes. If omitted, the system uses 64MB. 
 * @member {Number} ShmSize
 */

_HostConfigAllOf["default"].prototype['ShmSize'] = undefined;
/**
 * A list of kernel parameters (sysctls) to set in the container. For example:  ``` {\"net.ipv4.ip_forward\": \"1\"} ``` 
 * @member {Object.<String, String>} Sysctls
 */

_HostConfigAllOf["default"].prototype['Sysctls'] = undefined;
/**
 * Runtime to use with this container.
 * @member {String} Runtime
 */

_HostConfigAllOf["default"].prototype['Runtime'] = undefined;
/**
 * Initial console size, as an `[height, width]` array. (Windows only) 
 * @member {Array.<Number>} ConsoleSize
 */

_HostConfigAllOf["default"].prototype['ConsoleSize'] = undefined;
/**
 * Isolation technology of the container. (Windows only) 
 * @member {module:model/HostConfigAllOf.IsolationEnum} Isolation
 */

_HostConfigAllOf["default"].prototype['Isolation'] = undefined;
/**
 * The list of paths to be masked inside the container (this overrides the default set of paths). 
 * @member {Array.<String>} MaskedPaths
 */

_HostConfigAllOf["default"].prototype['MaskedPaths'] = undefined;
/**
 * The list of paths to be set as read-only inside the container (this overrides the default set of paths). 
 * @member {Array.<String>} ReadonlyPaths
 */

_HostConfigAllOf["default"].prototype['ReadonlyPaths'] = undefined;
/**
 * Allowed values for the <code>CgroupnsMode</code> property.
 * @enum {String}
 * @readonly
 */

HostConfig['CgroupnsModeEnum'] = {
  /**
   * value: "private"
   * @const
   */
  "private": "private",

  /**
   * value: "host"
   * @const
   */
  "host": "host"
};
/**
 * Allowed values for the <code>Isolation</code> property.
 * @enum {String}
 * @readonly
 */

HostConfig['IsolationEnum'] = {
  /**
   * value: "default"
   * @const
   */
  "default": "default",

  /**
   * value: "process"
   * @const
   */
  "process": "process",

  /**
   * value: "hyperv"
   * @const
   */
  "hyperv": "hyperv"
};
var _default = HostConfig;
exports["default"] = _default;