"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Commit = _interopRequireDefault(require("./Commit"));

var _PluginsInfo = _interopRequireDefault(require("./PluginsInfo"));

var _RegistryServiceConfig = _interopRequireDefault(require("./RegistryServiceConfig"));

var _Runtime = _interopRequireDefault(require("./Runtime"));

var _SwarmInfo = _interopRequireDefault(require("./SwarmInfo"));

var _SystemInfoDefaultAddressPools = _interopRequireDefault(require("./SystemInfoDefaultAddressPools"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SystemInfo model module.
 * @module model/SystemInfo
 * @version 1.41
 */
var SystemInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemInfo</code>.
   * @alias module:model/SystemInfo
   */
  function SystemInfo() {
    _classCallCheck(this, SystemInfo);

    SystemInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SystemInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemInfo} obj Optional instance to populate.
     * @return {module:model/SystemInfo} The populated <code>SystemInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemInfo();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Containers')) {
          obj['Containers'] = _ApiClient["default"].convertToType(data['Containers'], 'Number');
        }

        if (data.hasOwnProperty('ContainersRunning')) {
          obj['ContainersRunning'] = _ApiClient["default"].convertToType(data['ContainersRunning'], 'Number');
        }

        if (data.hasOwnProperty('ContainersPaused')) {
          obj['ContainersPaused'] = _ApiClient["default"].convertToType(data['ContainersPaused'], 'Number');
        }

        if (data.hasOwnProperty('ContainersStopped')) {
          obj['ContainersStopped'] = _ApiClient["default"].convertToType(data['ContainersStopped'], 'Number');
        }

        if (data.hasOwnProperty('Images')) {
          obj['Images'] = _ApiClient["default"].convertToType(data['Images'], 'Number');
        }

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
        }

        if (data.hasOwnProperty('DriverStatus')) {
          obj['DriverStatus'] = _ApiClient["default"].convertToType(data['DriverStatus'], [['String']]);
        }

        if (data.hasOwnProperty('DockerRootDir')) {
          obj['DockerRootDir'] = _ApiClient["default"].convertToType(data['DockerRootDir'], 'String');
        }

        if (data.hasOwnProperty('Plugins')) {
          obj['Plugins'] = _PluginsInfo["default"].constructFromObject(data['Plugins']);
        }

        if (data.hasOwnProperty('MemoryLimit')) {
          obj['MemoryLimit'] = _ApiClient["default"].convertToType(data['MemoryLimit'], 'Boolean');
        }

        if (data.hasOwnProperty('SwapLimit')) {
          obj['SwapLimit'] = _ApiClient["default"].convertToType(data['SwapLimit'], 'Boolean');
        }

        if (data.hasOwnProperty('KernelMemory')) {
          obj['KernelMemory'] = _ApiClient["default"].convertToType(data['KernelMemory'], 'Boolean');
        }

        if (data.hasOwnProperty('CpuCfsPeriod')) {
          obj['CpuCfsPeriod'] = _ApiClient["default"].convertToType(data['CpuCfsPeriod'], 'Boolean');
        }

        if (data.hasOwnProperty('CpuCfsQuota')) {
          obj['CpuCfsQuota'] = _ApiClient["default"].convertToType(data['CpuCfsQuota'], 'Boolean');
        }

        if (data.hasOwnProperty('CPUShares')) {
          obj['CPUShares'] = _ApiClient["default"].convertToType(data['CPUShares'], 'Boolean');
        }

        if (data.hasOwnProperty('CPUSet')) {
          obj['CPUSet'] = _ApiClient["default"].convertToType(data['CPUSet'], 'Boolean');
        }

        if (data.hasOwnProperty('PidsLimit')) {
          obj['PidsLimit'] = _ApiClient["default"].convertToType(data['PidsLimit'], 'Boolean');
        }

        if (data.hasOwnProperty('OomKillDisable')) {
          obj['OomKillDisable'] = _ApiClient["default"].convertToType(data['OomKillDisable'], 'Boolean');
        }

        if (data.hasOwnProperty('IPv4Forwarding')) {
          obj['IPv4Forwarding'] = _ApiClient["default"].convertToType(data['IPv4Forwarding'], 'Boolean');
        }

        if (data.hasOwnProperty('BridgeNfIptables')) {
          obj['BridgeNfIptables'] = _ApiClient["default"].convertToType(data['BridgeNfIptables'], 'Boolean');
        }

        if (data.hasOwnProperty('BridgeNfIp6tables')) {
          obj['BridgeNfIp6tables'] = _ApiClient["default"].convertToType(data['BridgeNfIp6tables'], 'Boolean');
        }

        if (data.hasOwnProperty('Debug')) {
          obj['Debug'] = _ApiClient["default"].convertToType(data['Debug'], 'Boolean');
        }

        if (data.hasOwnProperty('NFd')) {
          obj['NFd'] = _ApiClient["default"].convertToType(data['NFd'], 'Number');
        }

        if (data.hasOwnProperty('NGoroutines')) {
          obj['NGoroutines'] = _ApiClient["default"].convertToType(data['NGoroutines'], 'Number');
        }

        if (data.hasOwnProperty('SystemTime')) {
          obj['SystemTime'] = _ApiClient["default"].convertToType(data['SystemTime'], 'String');
        }

        if (data.hasOwnProperty('LoggingDriver')) {
          obj['LoggingDriver'] = _ApiClient["default"].convertToType(data['LoggingDriver'], 'String');
        }

        if (data.hasOwnProperty('CgroupDriver')) {
          obj['CgroupDriver'] = _ApiClient["default"].convertToType(data['CgroupDriver'], 'String');
        }

        if (data.hasOwnProperty('CgroupVersion')) {
          obj['CgroupVersion'] = _ApiClient["default"].convertToType(data['CgroupVersion'], 'String');
        }

        if (data.hasOwnProperty('NEventsListener')) {
          obj['NEventsListener'] = _ApiClient["default"].convertToType(data['NEventsListener'], 'Number');
        }

        if (data.hasOwnProperty('KernelVersion')) {
          obj['KernelVersion'] = _ApiClient["default"].convertToType(data['KernelVersion'], 'String');
        }

        if (data.hasOwnProperty('OperatingSystem')) {
          obj['OperatingSystem'] = _ApiClient["default"].convertToType(data['OperatingSystem'], 'String');
        }

        if (data.hasOwnProperty('OSVersion')) {
          obj['OSVersion'] = _ApiClient["default"].convertToType(data['OSVersion'], 'String');
        }

        if (data.hasOwnProperty('OSType')) {
          obj['OSType'] = _ApiClient["default"].convertToType(data['OSType'], 'String');
        }

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ApiClient["default"].convertToType(data['Architecture'], 'String');
        }

        if (data.hasOwnProperty('NCPU')) {
          obj['NCPU'] = _ApiClient["default"].convertToType(data['NCPU'], 'Number');
        }

        if (data.hasOwnProperty('MemTotal')) {
          obj['MemTotal'] = _ApiClient["default"].convertToType(data['MemTotal'], 'Number');
        }

        if (data.hasOwnProperty('IndexServerAddress')) {
          obj['IndexServerAddress'] = _ApiClient["default"].convertToType(data['IndexServerAddress'], 'String');
        }

        if (data.hasOwnProperty('RegistryConfig')) {
          obj['RegistryConfig'] = _RegistryServiceConfig["default"].constructFromObject(data['RegistryConfig']);
        }

        if (data.hasOwnProperty('GenericResources')) {
          obj['GenericResources'] = _ApiClient["default"].convertToType(data['GenericResources'], [Object]);
        }

        if (data.hasOwnProperty('HttpProxy')) {
          obj['HttpProxy'] = _ApiClient["default"].convertToType(data['HttpProxy'], 'String');
        }

        if (data.hasOwnProperty('HttpsProxy')) {
          obj['HttpsProxy'] = _ApiClient["default"].convertToType(data['HttpsProxy'], 'String');
        }

        if (data.hasOwnProperty('NoProxy')) {
          obj['NoProxy'] = _ApiClient["default"].convertToType(data['NoProxy'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], ['String']);
        }

        if (data.hasOwnProperty('ExperimentalBuild')) {
          obj['ExperimentalBuild'] = _ApiClient["default"].convertToType(data['ExperimentalBuild'], 'Boolean');
        }

        if (data.hasOwnProperty('ServerVersion')) {
          obj['ServerVersion'] = _ApiClient["default"].convertToType(data['ServerVersion'], 'String');
        }

        if (data.hasOwnProperty('ClusterStore')) {
          obj['ClusterStore'] = _ApiClient["default"].convertToType(data['ClusterStore'], 'String');
        }

        if (data.hasOwnProperty('ClusterAdvertise')) {
          obj['ClusterAdvertise'] = _ApiClient["default"].convertToType(data['ClusterAdvertise'], 'String');
        }

        if (data.hasOwnProperty('Runtimes')) {
          obj['Runtimes'] = _ApiClient["default"].convertToType(data['Runtimes'], {
            'String': _Runtime["default"]
          });
        }

        if (data.hasOwnProperty('DefaultRuntime')) {
          obj['DefaultRuntime'] = _ApiClient["default"].convertToType(data['DefaultRuntime'], 'String');
        }

        if (data.hasOwnProperty('Swarm')) {
          obj['Swarm'] = _SwarmInfo["default"].constructFromObject(data['Swarm']);
        }

        if (data.hasOwnProperty('LiveRestoreEnabled')) {
          obj['LiveRestoreEnabled'] = _ApiClient["default"].convertToType(data['LiveRestoreEnabled'], 'Boolean');
        }

        if (data.hasOwnProperty('Isolation')) {
          obj['Isolation'] = _ApiClient["default"].convertToType(data['Isolation'], 'String');
        }

        if (data.hasOwnProperty('InitBinary')) {
          obj['InitBinary'] = _ApiClient["default"].convertToType(data['InitBinary'], 'String');
        }

        if (data.hasOwnProperty('ContainerdCommit')) {
          obj['ContainerdCommit'] = _Commit["default"].constructFromObject(data['ContainerdCommit']);
        }

        if (data.hasOwnProperty('RuncCommit')) {
          obj['RuncCommit'] = _Commit["default"].constructFromObject(data['RuncCommit']);
        }

        if (data.hasOwnProperty('InitCommit')) {
          obj['InitCommit'] = _Commit["default"].constructFromObject(data['InitCommit']);
        }

        if (data.hasOwnProperty('SecurityOptions')) {
          obj['SecurityOptions'] = _ApiClient["default"].convertToType(data['SecurityOptions'], ['String']);
        }

        if (data.hasOwnProperty('ProductLicense')) {
          obj['ProductLicense'] = _ApiClient["default"].convertToType(data['ProductLicense'], 'String');
        }

        if (data.hasOwnProperty('DefaultAddressPools')) {
          obj['DefaultAddressPools'] = _ApiClient["default"].convertToType(data['DefaultAddressPools'], [_SystemInfoDefaultAddressPools["default"]]);
        }

        if (data.hasOwnProperty('Warnings')) {
          obj['Warnings'] = _ApiClient["default"].convertToType(data['Warnings'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return SystemInfo;
}();
/**
 * Unique identifier of the daemon.  <p><br /></p>  > **Note**: The format of the ID itself is not part of the API, and > should not be considered stable. 
 * @member {String} ID
 */


SystemInfo.prototype['ID'] = undefined;
/**
 * Total number of containers on the host.
 * @member {Number} Containers
 */

SystemInfo.prototype['Containers'] = undefined;
/**
 * Number of containers with status `\"running\"`. 
 * @member {Number} ContainersRunning
 */

SystemInfo.prototype['ContainersRunning'] = undefined;
/**
 * Number of containers with status `\"paused\"`. 
 * @member {Number} ContainersPaused
 */

SystemInfo.prototype['ContainersPaused'] = undefined;
/**
 * Number of containers with status `\"stopped\"`. 
 * @member {Number} ContainersStopped
 */

SystemInfo.prototype['ContainersStopped'] = undefined;
/**
 * Total number of images on the host.  Both _tagged_ and _untagged_ (dangling) images are counted. 
 * @member {Number} Images
 */

SystemInfo.prototype['Images'] = undefined;
/**
 * Name of the storage driver in use.
 * @member {String} Driver
 */

SystemInfo.prototype['Driver'] = undefined;
/**
 * Information specific to the storage driver, provided as \"label\" / \"value\" pairs.  This information is provided by the storage driver, and formatted in a way consistent with the output of `docker info` on the command line.  <p><br /></p>  > **Note**: The information returned in this field, including the > formatting of values and labels, should not be considered stable, > and may change without notice. 
 * @member {Array.<Array.<String>>} DriverStatus
 */

SystemInfo.prototype['DriverStatus'] = undefined;
/**
 * Root directory of persistent Docker state.  Defaults to `/var/lib/docker` on Linux, and `C:\\ProgramData\\docker` on Windows. 
 * @member {String} DockerRootDir
 */

SystemInfo.prototype['DockerRootDir'] = undefined;
/**
 * @member {module:model/PluginsInfo} Plugins
 */

SystemInfo.prototype['Plugins'] = undefined;
/**
 * Indicates if the host has memory limit support enabled.
 * @member {Boolean} MemoryLimit
 */

SystemInfo.prototype['MemoryLimit'] = undefined;
/**
 * Indicates if the host has memory swap limit support enabled.
 * @member {Boolean} SwapLimit
 */

SystemInfo.prototype['SwapLimit'] = undefined;
/**
 * Indicates if the host has kernel memory limit support enabled.  <p><br /></p>  > **Deprecated**: This field is deprecated as the kernel 5.4 deprecated > `kmem.limit_in_bytes`. 
 * @member {Boolean} KernelMemory
 */

SystemInfo.prototype['KernelMemory'] = undefined;
/**
 * Indicates if CPU CFS(Completely Fair Scheduler) period is supported by the host. 
 * @member {Boolean} CpuCfsPeriod
 */

SystemInfo.prototype['CpuCfsPeriod'] = undefined;
/**
 * Indicates if CPU CFS(Completely Fair Scheduler) quota is supported by the host. 
 * @member {Boolean} CpuCfsQuota
 */

SystemInfo.prototype['CpuCfsQuota'] = undefined;
/**
 * Indicates if CPU Shares limiting is supported by the host. 
 * @member {Boolean} CPUShares
 */

SystemInfo.prototype['CPUShares'] = undefined;
/**
 * Indicates if CPUsets (cpuset.cpus, cpuset.mems) are supported by the host.  See [cpuset(7)](https://www.kernel.org/doc/Documentation/cgroup-v1/cpusets.txt) 
 * @member {Boolean} CPUSet
 */

SystemInfo.prototype['CPUSet'] = undefined;
/**
 * Indicates if the host kernel has PID limit support enabled.
 * @member {Boolean} PidsLimit
 */

SystemInfo.prototype['PidsLimit'] = undefined;
/**
 * Indicates if OOM killer disable is supported on the host.
 * @member {Boolean} OomKillDisable
 */

SystemInfo.prototype['OomKillDisable'] = undefined;
/**
 * Indicates IPv4 forwarding is enabled.
 * @member {Boolean} IPv4Forwarding
 */

SystemInfo.prototype['IPv4Forwarding'] = undefined;
/**
 * Indicates if `bridge-nf-call-iptables` is available on the host.
 * @member {Boolean} BridgeNfIptables
 */

SystemInfo.prototype['BridgeNfIptables'] = undefined;
/**
 * Indicates if `bridge-nf-call-ip6tables` is available on the host.
 * @member {Boolean} BridgeNfIp6tables
 */

SystemInfo.prototype['BridgeNfIp6tables'] = undefined;
/**
 * Indicates if the daemon is running in debug-mode / with debug-level logging enabled. 
 * @member {Boolean} Debug
 */

SystemInfo.prototype['Debug'] = undefined;
/**
 * The total number of file Descriptors in use by the daemon process.  This information is only returned if debug-mode is enabled. 
 * @member {Number} NFd
 */

SystemInfo.prototype['NFd'] = undefined;
/**
 * The  number of goroutines that currently exist.  This information is only returned if debug-mode is enabled. 
 * @member {Number} NGoroutines
 */

SystemInfo.prototype['NGoroutines'] = undefined;
/**
 * Current system-time in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} SystemTime
 */

SystemInfo.prototype['SystemTime'] = undefined;
/**
 * The logging driver to use as a default for new containers. 
 * @member {String} LoggingDriver
 */

SystemInfo.prototype['LoggingDriver'] = undefined;
/**
 * The driver to use for managing cgroups. 
 * @member {module:model/SystemInfo.CgroupDriverEnum} CgroupDriver
 * @default 'cgroupfs'
 */

SystemInfo.prototype['CgroupDriver'] = 'cgroupfs';
/**
 * The version of the cgroup. 
 * @member {module:model/SystemInfo.CgroupVersionEnum} CgroupVersion
 * @default '1'
 */

SystemInfo.prototype['CgroupVersion'] = '1';
/**
 * Number of event listeners subscribed.
 * @member {Number} NEventsListener
 */

SystemInfo.prototype['NEventsListener'] = undefined;
/**
 * Kernel version of the host.  On Linux, this information obtained from `uname`. On Windows this information is queried from the <kbd>HKEY_LOCAL_MACHINE\\\\SOFTWARE\\\\Microsoft\\\\Windows NT\\\\CurrentVersion\\\\</kbd> registry value, for example _\"10.0 14393 (14393.1198.amd64fre.rs1_release_sec.170427-1353)\"_. 
 * @member {String} KernelVersion
 */

SystemInfo.prototype['KernelVersion'] = undefined;
/**
 * Name of the host's operating system, for example: \"Ubuntu 16.04.2 LTS\" or \"Windows Server 2016 Datacenter\" 
 * @member {String} OperatingSystem
 */

SystemInfo.prototype['OperatingSystem'] = undefined;
/**
 * Version of the host's operating system  <p><br /></p>  > **Note**: The information returned in this field, including its > very existence, and the formatting of values, should not be considered > stable, and may change without notice. 
 * @member {String} OSVersion
 */

SystemInfo.prototype['OSVersion'] = undefined;
/**
 * Generic type of the operating system of the host, as returned by the Go runtime (`GOOS`).  Currently returned values are \"linux\" and \"windows\". A full list of possible values can be found in the [Go documentation](https://golang.org/doc/install/source#environment). 
 * @member {String} OSType
 */

SystemInfo.prototype['OSType'] = undefined;
/**
 * Hardware architecture of the host, as returned by the Go runtime (`GOARCH`).  A full list of possible values can be found in the [Go documentation](https://golang.org/doc/install/source#environment). 
 * @member {String} Architecture
 */

SystemInfo.prototype['Architecture'] = undefined;
/**
 * The number of logical CPUs usable by the daemon.  The number of available CPUs is checked by querying the operating system when the daemon starts. Changes to operating system CPU allocation after the daemon is started are not reflected. 
 * @member {Number} NCPU
 */

SystemInfo.prototype['NCPU'] = undefined;
/**
 * Total amount of physical memory available on the host, in bytes. 
 * @member {Number} MemTotal
 */

SystemInfo.prototype['MemTotal'] = undefined;
/**
 * Address / URL of the index server that is used for image search, and as a default for user authentication for Docker Hub and Docker Cloud. 
 * @member {String} IndexServerAddress
 * @default 'https://index.docker.io/v1/'
 */

SystemInfo.prototype['IndexServerAddress'] = 'https://index.docker.io/v1/';
/**
 * @member {module:model/RegistryServiceConfig} RegistryConfig
 */

SystemInfo.prototype['RegistryConfig'] = undefined;
/**
 * User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`). 
 * @member {Array.<Object>} GenericResources
 */

SystemInfo.prototype['GenericResources'] = undefined;
/**
 * HTTP-proxy configured for the daemon. This value is obtained from the [`HTTP_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable. Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL are masked in the API response.  Containers do not automatically inherit this configuration. 
 * @member {String} HttpProxy
 */

SystemInfo.prototype['HttpProxy'] = undefined;
/**
 * HTTPS-proxy configured for the daemon. This value is obtained from the [`HTTPS_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable. Credentials ([user info component](https://tools.ietf.org/html/rfc3986#section-3.2.1)) in the proxy URL are masked in the API response.  Containers do not automatically inherit this configuration. 
 * @member {String} HttpsProxy
 */

SystemInfo.prototype['HttpsProxy'] = undefined;
/**
 * Comma-separated list of domain extensions for which no proxy should be used. This value is obtained from the [`NO_PROXY`](https://www.gnu.org/software/wget/manual/html_node/Proxies.html) environment variable.  Containers do not automatically inherit this configuration. 
 * @member {String} NoProxy
 */

SystemInfo.prototype['NoProxy'] = undefined;
/**
 * Hostname of the host.
 * @member {String} Name
 */

SystemInfo.prototype['Name'] = undefined;
/**
 * User-defined labels (key/value metadata) as set on the daemon.  <p><br /></p>  > **Note**: When part of a Swarm, nodes can both have _daemon_ labels, > set through the daemon configuration, and _node_ labels, set from a > manager node in the Swarm. Node labels are not included in this > field. Node labels can be retrieved using the `/nodes/(id)` endpoint > on a manager node in the Swarm. 
 * @member {Array.<String>} Labels
 */

SystemInfo.prototype['Labels'] = undefined;
/**
 * Indicates if experimental features are enabled on the daemon. 
 * @member {Boolean} ExperimentalBuild
 */

SystemInfo.prototype['ExperimentalBuild'] = undefined;
/**
 * Version string of the daemon.  > **Note**: the [standalone Swarm API](/swarm/swarm-api/) > returns the Swarm version instead of the daemon  version, for example > `swarm/1.2.8`. 
 * @member {String} ServerVersion
 */

SystemInfo.prototype['ServerVersion'] = undefined;
/**
 * URL of the distributed storage backend.   The storage backend is used for multihost networking (to store network and endpoint information) and by the node discovery mechanism.  <p><br /></p>  > **Deprecated**: This field is only propagated when using standalone Swarm > mode, and overlay networking using an external k/v store. Overlay > networks with Swarm mode enabled use the built-in raft store, and > this field will be empty. 
 * @member {String} ClusterStore
 */

SystemInfo.prototype['ClusterStore'] = undefined;
/**
 * The network endpoint that the Engine advertises for the purpose of node discovery. ClusterAdvertise is a `host:port` combination on which the daemon is reachable by other hosts.  <p><br /></p>  > **Deprecated**: This field is only propagated when using standalone Swarm > mode, and overlay networking using an external k/v store. Overlay > networks with Swarm mode enabled use the built-in raft store, and > this field will be empty. 
 * @member {String} ClusterAdvertise
 */

SystemInfo.prototype['ClusterAdvertise'] = undefined;
/**
 * List of [OCI compliant](https://github.com/opencontainers/runtime-spec) runtimes configured on the daemon. Keys hold the \"name\" used to reference the runtime.  The Docker daemon relies on an OCI compliant runtime (invoked via the `containerd` daemon) as its interface to the Linux kernel namespaces, cgroups, and SELinux.  The default runtime is `runc`, and automatically configured. Additional runtimes can be configured by the user and will be listed here. 
 * @member {Object.<String, module:model/Runtime>} Runtimes
 */

SystemInfo.prototype['Runtimes'] = undefined;
/**
 * Name of the default OCI runtime that is used when starting containers.  The default can be overridden per-container at create time. 
 * @member {String} DefaultRuntime
 * @default 'runc'
 */

SystemInfo.prototype['DefaultRuntime'] = 'runc';
/**
 * @member {module:model/SwarmInfo} Swarm
 */

SystemInfo.prototype['Swarm'] = undefined;
/**
 * Indicates if live restore is enabled.  If enabled, containers are kept running when the daemon is shutdown or upon daemon start if running containers are detected. 
 * @member {Boolean} LiveRestoreEnabled
 * @default false
 */

SystemInfo.prototype['LiveRestoreEnabled'] = false;
/**
 * Represents the isolation technology to use as a default for containers. The supported values are platform-specific.  If no isolation value is specified on daemon start, on Windows client, the default is `hyperv`, and on Windows server, the default is `process`.  This option is currently not used on other platforms. 
 * @member {module:model/SystemInfo.IsolationEnum} Isolation
 * @default 'default'
 */

SystemInfo.prototype['Isolation'] = 'default';
/**
 * Name and, optional, path of the `docker-init` binary.  If the path is omitted, the daemon searches the host's `$PATH` for the binary and uses the first result. 
 * @member {String} InitBinary
 */

SystemInfo.prototype['InitBinary'] = undefined;
/**
 * @member {module:model/Commit} ContainerdCommit
 */

SystemInfo.prototype['ContainerdCommit'] = undefined;
/**
 * @member {module:model/Commit} RuncCommit
 */

SystemInfo.prototype['RuncCommit'] = undefined;
/**
 * @member {module:model/Commit} InitCommit
 */

SystemInfo.prototype['InitCommit'] = undefined;
/**
 * List of security features that are enabled on the daemon, such as apparmor, seccomp, SELinux, user-namespaces (userns), and rootless.  Additional configuration options for each security feature may be present, and are included as a comma-separated list of key/value pairs. 
 * @member {Array.<String>} SecurityOptions
 */

SystemInfo.prototype['SecurityOptions'] = undefined;
/**
 * Reports a summary of the product license on the daemon.  If a commercial license has been applied to the daemon, information such as number of nodes, and expiration are included. 
 * @member {String} ProductLicense
 */

SystemInfo.prototype['ProductLicense'] = undefined;
/**
 * List of custom default address pools for local networks, which can be specified in the daemon.json file or dockerd option.  Example: a Base \"10.10.0.0/16\" with Size 24 will define the set of 256 10.10.[0-255].0/24 address pools. 
 * @member {Array.<module:model/SystemInfoDefaultAddressPools>} DefaultAddressPools
 */

SystemInfo.prototype['DefaultAddressPools'] = undefined;
/**
 * List of warnings / informational messages about missing features, or issues related to the daemon configuration.  These messages can be printed by the client as information to the user. 
 * @member {Array.<String>} Warnings
 */

SystemInfo.prototype['Warnings'] = undefined;
/**
 * Allowed values for the <code>CgroupDriver</code> property.
 * @enum {String}
 * @readonly
 */

SystemInfo['CgroupDriverEnum'] = {
  /**
   * value: "cgroupfs"
   * @const
   */
  "cgroupfs": "cgroupfs",

  /**
   * value: "systemd"
   * @const
   */
  "systemd": "systemd",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
/**
 * Allowed values for the <code>CgroupVersion</code> property.
 * @enum {String}
 * @readonly
 */

SystemInfo['CgroupVersionEnum'] = {
  /**
   * value: "1"
   * @const
   */
  "1": "1",

  /**
   * value: "2"
   * @const
   */
  "2": "2"
};
/**
 * Allowed values for the <code>Isolation</code> property.
 * @enum {String}
 * @readonly
 */

SystemInfo['IsolationEnum'] = {
  /**
   * value: "default"
   * @const
   */
  "default": "default",

  /**
   * value: "hyperv"
   * @const
   */
  "hyperv": "hyperv",

  /**
   * value: "process"
   * @const
   */
  "process": "process"
};
var _default = SystemInfo;
exports["default"] = _default;