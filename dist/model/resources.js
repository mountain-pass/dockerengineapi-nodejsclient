"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DeviceMapping = _interopRequireDefault(require("./DeviceMapping"));

var _DeviceRequest = _interopRequireDefault(require("./DeviceRequest"));

var _ResourcesBlkioWeightDevice = _interopRequireDefault(require("./ResourcesBlkioWeightDevice"));

var _ResourcesUlimits = _interopRequireDefault(require("./ResourcesUlimits"));

var _ThrottleDevice = _interopRequireDefault(require("./ThrottleDevice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Resources model module.
 * @module model/Resources
 * @version 1.41
 */
var Resources = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Resources</code>.
   * A container&#39;s resources (cgroups config, ulimits, etc)
   * @alias module:model/Resources
   */
  function Resources() {
    _classCallCheck(this, Resources);

    Resources.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Resources, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Resources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Resources} obj Optional instance to populate.
     * @return {module:model/Resources} The populated <code>Resources</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Resources();

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
      }

      return obj;
    }
  }]);

  return Resources;
}();
/**
 * An integer value representing this container's relative CPU weight versus other containers. 
 * @member {Number} CpuShares
 */


Resources.prototype['CpuShares'] = undefined;
/**
 * Memory limit in bytes.
 * @member {Number} Memory
 * @default 0
 */

Resources.prototype['Memory'] = 0;
/**
 * Path to `cgroups` under which the container's `cgroup` is created. If the path is not absolute, the path is considered to be relative to the `cgroups` path of the init process. Cgroups are created if they do not already exist. 
 * @member {String} CgroupParent
 */

Resources.prototype['CgroupParent'] = undefined;
/**
 * Block IO weight (relative weight).
 * @member {Number} BlkioWeight
 */

Resources.prototype['BlkioWeight'] = undefined;
/**
 * Block IO weight (relative device weight) in the form:  ``` [{\"Path\": \"device_path\", \"Weight\": weight}] ``` 
 * @member {Array.<module:model/ResourcesBlkioWeightDevice>} BlkioWeightDevice
 */

Resources.prototype['BlkioWeightDevice'] = undefined;
/**
 * Limit read rate (bytes per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceReadBps
 */

Resources.prototype['BlkioDeviceReadBps'] = undefined;
/**
 * Limit write rate (bytes per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceWriteBps
 */

Resources.prototype['BlkioDeviceWriteBps'] = undefined;
/**
 * Limit read rate (IO per second) from a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceReadIOps
 */

Resources.prototype['BlkioDeviceReadIOps'] = undefined;
/**
 * Limit write rate (IO per second) to a device, in the form:  ``` [{\"Path\": \"device_path\", \"Rate\": rate}] ``` 
 * @member {Array.<module:model/ThrottleDevice>} BlkioDeviceWriteIOps
 */

Resources.prototype['BlkioDeviceWriteIOps'] = undefined;
/**
 * The length of a CPU period in microseconds.
 * @member {Number} CpuPeriod
 */

Resources.prototype['CpuPeriod'] = undefined;
/**
 * Microseconds of CPU time that the container can get in a CPU period. 
 * @member {Number} CpuQuota
 */

Resources.prototype['CpuQuota'] = undefined;
/**
 * The length of a CPU real-time period in microseconds. Set to 0 to allocate no time allocated to real-time tasks. 
 * @member {Number} CpuRealtimePeriod
 */

Resources.prototype['CpuRealtimePeriod'] = undefined;
/**
 * The length of a CPU real-time runtime in microseconds. Set to 0 to allocate no time allocated to real-time tasks. 
 * @member {Number} CpuRealtimeRuntime
 */

Resources.prototype['CpuRealtimeRuntime'] = undefined;
/**
 * CPUs in which to allow execution (e.g., `0-3`, `0,1`). 
 * @member {String} CpusetCpus
 */

Resources.prototype['CpusetCpus'] = undefined;
/**
 * Memory nodes (MEMs) in which to allow execution (0-3, 0,1). Only effective on NUMA systems. 
 * @member {String} CpusetMems
 */

Resources.prototype['CpusetMems'] = undefined;
/**
 * A list of devices to add to the container.
 * @member {Array.<module:model/DeviceMapping>} Devices
 */

Resources.prototype['Devices'] = undefined;
/**
 * a list of cgroup rules to apply to the container
 * @member {Array.<String>} DeviceCgroupRules
 */

Resources.prototype['DeviceCgroupRules'] = undefined;
/**
 * A list of requests for devices to be sent to device drivers. 
 * @member {Array.<module:model/DeviceRequest>} DeviceRequests
 */

Resources.prototype['DeviceRequests'] = undefined;
/**
 * Kernel memory limit in bytes.  <p><br /></p>  > **Deprecated**: This field is deprecated as the kernel 5.4 deprecated > `kmem.limit_in_bytes`. 
 * @member {Number} KernelMemory
 */

Resources.prototype['KernelMemory'] = undefined;
/**
 * Hard limit for kernel TCP buffer memory (in bytes).
 * @member {Number} KernelMemoryTCP
 */

Resources.prototype['KernelMemoryTCP'] = undefined;
/**
 * Memory soft limit in bytes.
 * @member {Number} MemoryReservation
 */

Resources.prototype['MemoryReservation'] = undefined;
/**
 * Total memory limit (memory + swap). Set as `-1` to enable unlimited swap. 
 * @member {Number} MemorySwap
 */

Resources.prototype['MemorySwap'] = undefined;
/**
 * Tune a container's memory swappiness behavior. Accepts an integer between 0 and 100. 
 * @member {Number} MemorySwappiness
 */

Resources.prototype['MemorySwappiness'] = undefined;
/**
 * CPU quota in units of 10<sup>-9</sup> CPUs.
 * @member {Number} NanoCpus
 */

Resources.prototype['NanoCpus'] = undefined;
/**
 * Disable OOM Killer for the container.
 * @member {Boolean} OomKillDisable
 */

Resources.prototype['OomKillDisable'] = undefined;
/**
 * Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used. 
 * @member {Boolean} Init
 */

Resources.prototype['Init'] = undefined;
/**
 * Tune a container's PIDs limit. Set `0` or `-1` for unlimited, or `null` to not change. 
 * @member {Number} PidsLimit
 */

Resources.prototype['PidsLimit'] = undefined;
/**
 * A list of resource limits to set in the container. For example:  ``` {\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048} ``` 
 * @member {Array.<module:model/ResourcesUlimits>} Ulimits
 */

Resources.prototype['Ulimits'] = undefined;
/**
 * The number of usable CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last. 
 * @member {Number} CpuCount
 */

Resources.prototype['CpuCount'] = undefined;
/**
 * The usable percentage of the available CPUs (Windows only).  On Windows Server containers, the processor resource controls are mutually exclusive. The order of precedence is `CPUCount` first, then `CPUShares`, and `CPUPercent` last. 
 * @member {Number} CpuPercent
 */

Resources.prototype['CpuPercent'] = undefined;
/**
 * Maximum IOps for the container system drive (Windows only)
 * @member {Number} IOMaximumIOps
 */

Resources.prototype['IOMaximumIOps'] = undefined;
/**
 * Maximum IO in bytes per second for the container system drive (Windows only). 
 * @member {Number} IOMaximumBandwidth
 */

Resources.prototype['IOMaximumBandwidth'] = undefined;
var _default = Resources;
exports["default"] = _default;