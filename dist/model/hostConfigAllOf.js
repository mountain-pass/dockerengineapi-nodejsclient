"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HostConfigAllOfLogConfig = _interopRequireDefault(require("./HostConfigAllOfLogConfig"));

var _Mount = _interopRequireDefault(require("./Mount"));

var _PortBinding = _interopRequireDefault(require("./PortBinding"));

var _RestartPolicy = _interopRequireDefault(require("./RestartPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HostConfigAllOf model module.
 * @module model/HostConfigAllOf
 * @version 1.41
 */
var HostConfigAllOf = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HostConfigAllOf</code>.
   * @alias module:model/HostConfigAllOf
   */
  function HostConfigAllOf() {
    _classCallCheck(this, HostConfigAllOf);

    HostConfigAllOf.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HostConfigAllOf, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HostConfigAllOf</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HostConfigAllOf} obj Optional instance to populate.
     * @return {module:model/HostConfigAllOf} The populated <code>HostConfigAllOf</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HostConfigAllOf();

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

  return HostConfigAllOf;
}();
/**
 * A list of volume bindings for this container. Each volume binding is a string in one of these forms:  - `host-src:container-dest[:options]` to bind-mount a host path   into the container. Both `host-src`, and `container-dest` must   be an _absolute_ path. - `volume-name:container-dest[:options]` to bind-mount a volume   managed by a volume driver into the container. `container-dest`   must be an _absolute_ path.  `options` is an optional, comma-delimited list of:  - `nocopy` disables automatic copying of data from the container   path to the volume. The `nocopy` flag only applies to named volumes. - `[ro|rw]` mounts a volume read-only or read-write, respectively.   If omitted or set to `rw`, volumes are mounted read-write. - `[z|Z]` applies SELinux labels to allow or deny multiple containers   to read and write to the same volume.     - `z`: a _shared_ content label is applied to the content. This       label indicates that multiple containers can share the volume       content, for both reading and writing.     - `Z`: a _private unshared_ label is applied to the content.       This label indicates that only the current container can use       a private volume. Labeling systems such as SELinux require       proper labels to be placed on volume content that is mounted       into a container. Without a label, the security system can       prevent a container's processes from using the content. By       default, the labels set by the host operating system are not       modified. - `[[r]shared|[r]slave|[r]private]` specifies mount   [propagation behavior](https://www.kernel.org/doc/Documentation/filesystems/sharedsubtree.txt).   This only applies to bind-mounted volumes, not internal volumes   or named volumes. Mount propagation requires the source mount   point (the location where the source directory is mounted in the   host operating system) to have the correct propagation properties.   For shared volumes, the source mount point must be set to `shared`.   For slave volumes, the mount must be set to either `shared` or   `slave`. 
 * @member {Array.<String>} Binds
 */


HostConfigAllOf.prototype['Binds'] = undefined;
/**
 * Path to a file where the container ID is written
 * @member {String} ContainerIDFile
 */

HostConfigAllOf.prototype['ContainerIDFile'] = undefined;
/**
 * @member {module:model/HostConfigAllOfLogConfig} LogConfig
 */

HostConfigAllOf.prototype['LogConfig'] = undefined;
/**
 * Network mode to use for this container. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name to which this container should connect to. 
 * @member {String} NetworkMode
 */

HostConfigAllOf.prototype['NetworkMode'] = undefined;
/**
 * PortMap describes the mapping of container ports to host ports, using the container's port-number and protocol as key in the format `<port>/<protocol>`, for example, `80/udp`.  If a container's port is mapped for multiple protocols, separate entries are added to the mapping table. 
 * @member {Object.<String, Array.<module:model/PortBinding>>} PortBindings
 */

HostConfigAllOf.prototype['PortBindings'] = undefined;
/**
 * @member {module:model/RestartPolicy} RestartPolicy
 */

HostConfigAllOf.prototype['RestartPolicy'] = undefined;
/**
 * Automatically remove the container when the container's process exits. This has no effect if `RestartPolicy` is set. 
 * @member {Boolean} AutoRemove
 */

HostConfigAllOf.prototype['AutoRemove'] = undefined;
/**
 * Driver that this container uses to mount volumes.
 * @member {String} VolumeDriver
 */

HostConfigAllOf.prototype['VolumeDriver'] = undefined;
/**
 * A list of volumes to inherit from another container, specified in the form `<container name>[:<ro|rw>]`. 
 * @member {Array.<String>} VolumesFrom
 */

HostConfigAllOf.prototype['VolumesFrom'] = undefined;
/**
 * Specification for mounts to be added to the container. 
 * @member {Array.<module:model/Mount>} Mounts
 */

HostConfigAllOf.prototype['Mounts'] = undefined;
/**
 * A list of kernel capabilities to add to the container. Conflicts with option 'Capabilities'. 
 * @member {Array.<String>} CapAdd
 */

HostConfigAllOf.prototype['CapAdd'] = undefined;
/**
 * A list of kernel capabilities to drop from the container. Conflicts with option 'Capabilities'. 
 * @member {Array.<String>} CapDrop
 */

HostConfigAllOf.prototype['CapDrop'] = undefined;
/**
 * cgroup namespace mode for the container. Possible values are:  - `\"private\"`: the container runs in its own private cgroup namespace - `\"host\"`: use the host system's cgroup namespace  If not specified, the daemon default is used, which can either be `\"private\"` or `\"host\"`, depending on daemon version, kernel support and configuration. 
 * @member {module:model/HostConfigAllOf.CgroupnsModeEnum} CgroupnsMode
 */

HostConfigAllOf.prototype['CgroupnsMode'] = undefined;
/**
 * A list of DNS servers for the container to use.
 * @member {Array.<String>} Dns
 */

HostConfigAllOf.prototype['Dns'] = undefined;
/**
 * A list of DNS options.
 * @member {Array.<String>} DnsOptions
 */

HostConfigAllOf.prototype['DnsOptions'] = undefined;
/**
 * A list of DNS search domains.
 * @member {Array.<String>} DnsSearch
 */

HostConfigAllOf.prototype['DnsSearch'] = undefined;
/**
 * A list of hostnames/IP mappings to add to the container's `/etc/hosts` file. Specified in the form `[\"hostname:IP\"]`. 
 * @member {Array.<String>} ExtraHosts
 */

HostConfigAllOf.prototype['ExtraHosts'] = undefined;
/**
 * A list of additional groups that the container process will run as. 
 * @member {Array.<String>} GroupAdd
 */

HostConfigAllOf.prototype['GroupAdd'] = undefined;
/**
 * IPC sharing mode for the container. Possible values are:  - `\"none\"`: own private IPC namespace, with /dev/shm not mounted - `\"private\"`: own private IPC namespace - `\"shareable\"`: own private IPC namespace, with a possibility to share it with other containers - `\"container:<name|id>\"`: join another (shareable) container's IPC namespace - `\"host\"`: use the host system's IPC namespace  If not specified, daemon default is used, which can either be `\"private\"` or `\"shareable\"`, depending on daemon version and configuration. 
 * @member {String} IpcMode
 */

HostConfigAllOf.prototype['IpcMode'] = undefined;
/**
 * Cgroup to use for the container.
 * @member {String} Cgroup
 */

HostConfigAllOf.prototype['Cgroup'] = undefined;
/**
 * A list of links for the container in the form `container_name:alias`. 
 * @member {Array.<String>} Links
 */

HostConfigAllOf.prototype['Links'] = undefined;
/**
 * An integer value containing the score given to the container in order to tune OOM killer preferences. 
 * @member {Number} OomScoreAdj
 */

HostConfigAllOf.prototype['OomScoreAdj'] = undefined;
/**
 * Set the PID (Process) Namespace mode for the container. It can be either:  - `\"container:<name|id>\"`: joins another container's PID namespace - `\"host\"`: use the host's PID namespace inside the container 
 * @member {String} PidMode
 */

HostConfigAllOf.prototype['PidMode'] = undefined;
/**
 * Gives the container full access to the host.
 * @member {Boolean} Privileged
 */

HostConfigAllOf.prototype['Privileged'] = undefined;
/**
 * Allocates an ephemeral host port for all of a container's exposed ports.  Ports are de-allocated when the container stops and allocated when the container starts. The allocated port might be changed when restarting the container.  The port is selected from the ephemeral port range that depends on the kernel. For example, on Linux the range is defined by `/proc/sys/net/ipv4/ip_local_port_range`. 
 * @member {Boolean} PublishAllPorts
 */

HostConfigAllOf.prototype['PublishAllPorts'] = undefined;
/**
 * Mount the container's root filesystem as read only.
 * @member {Boolean} ReadonlyRootfs
 */

HostConfigAllOf.prototype['ReadonlyRootfs'] = undefined;
/**
 * A list of string values to customize labels for MLS systems, such as SELinux.
 * @member {Array.<String>} SecurityOpt
 */

HostConfigAllOf.prototype['SecurityOpt'] = undefined;
/**
 * Storage driver options for this container, in the form `{\"size\": \"120G\"}`. 
 * @member {Object.<String, String>} StorageOpt
 */

HostConfigAllOf.prototype['StorageOpt'] = undefined;
/**
 * A map of container directories which should be replaced by tmpfs mounts, and their corresponding mount options. For example:  ``` { \"/run\": \"rw,noexec,nosuid,size=65536k\" } ``` 
 * @member {Object.<String, String>} Tmpfs
 */

HostConfigAllOf.prototype['Tmpfs'] = undefined;
/**
 * UTS namespace to use for the container.
 * @member {String} UTSMode
 */

HostConfigAllOf.prototype['UTSMode'] = undefined;
/**
 * Sets the usernamespace mode for the container when usernamespace remapping option is enabled. 
 * @member {String} UsernsMode
 */

HostConfigAllOf.prototype['UsernsMode'] = undefined;
/**
 * Size of `/dev/shm` in bytes. If omitted, the system uses 64MB. 
 * @member {Number} ShmSize
 */

HostConfigAllOf.prototype['ShmSize'] = undefined;
/**
 * A list of kernel parameters (sysctls) to set in the container. For example:  ``` {\"net.ipv4.ip_forward\": \"1\"} ``` 
 * @member {Object.<String, String>} Sysctls
 */

HostConfigAllOf.prototype['Sysctls'] = undefined;
/**
 * Runtime to use with this container.
 * @member {String} Runtime
 */

HostConfigAllOf.prototype['Runtime'] = undefined;
/**
 * Initial console size, as an `[height, width]` array. (Windows only) 
 * @member {Array.<Number>} ConsoleSize
 */

HostConfigAllOf.prototype['ConsoleSize'] = undefined;
/**
 * Isolation technology of the container. (Windows only) 
 * @member {module:model/HostConfigAllOf.IsolationEnum} Isolation
 */

HostConfigAllOf.prototype['Isolation'] = undefined;
/**
 * The list of paths to be masked inside the container (this overrides the default set of paths). 
 * @member {Array.<String>} MaskedPaths
 */

HostConfigAllOf.prototype['MaskedPaths'] = undefined;
/**
 * The list of paths to be set as read-only inside the container (this overrides the default set of paths). 
 * @member {Array.<String>} ReadonlyPaths
 */

HostConfigAllOf.prototype['ReadonlyPaths'] = undefined;
/**
 * Allowed values for the <code>CgroupnsMode</code> property.
 * @enum {String}
 * @readonly
 */

HostConfigAllOf['CgroupnsModeEnum'] = {
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

HostConfigAllOf['IsolationEnum'] = {
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
var _default = HostConfigAllOf;
exports["default"] = _default;