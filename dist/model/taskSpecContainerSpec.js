"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HealthConfig = _interopRequireDefault(require("./HealthConfig"));

var _Mount = _interopRequireDefault(require("./Mount"));

var _ResourcesUlimits = _interopRequireDefault(require("./ResourcesUlimits"));

var _TaskSpecContainerSpecConfigs = _interopRequireDefault(require("./TaskSpecContainerSpecConfigs"));

var _TaskSpecContainerSpecDNSConfig = _interopRequireDefault(require("./TaskSpecContainerSpecDNSConfig"));

var _TaskSpecContainerSpecPrivileges = _interopRequireDefault(require("./TaskSpecContainerSpecPrivileges"));

var _TaskSpecContainerSpecSecrets = _interopRequireDefault(require("./TaskSpecContainerSpecSecrets"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskSpecContainerSpec model module.
 * @module model/TaskSpecContainerSpec
 * @version 1.41
 */
var TaskSpecContainerSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecContainerSpec</code>.
   * Container spec for the service.  &lt;p&gt;&lt;br /&gt;&lt;/p&gt;  &gt; **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are &gt; mutually exclusive. PluginSpec is only used when the Runtime field &gt; is set to &#x60;plugin&#x60;. NetworkAttachmentSpec is used when the Runtime &gt; field is set to &#x60;attachment&#x60;. 
   * @alias module:model/TaskSpecContainerSpec
   */
  function TaskSpecContainerSpec() {
    _classCallCheck(this, TaskSpecContainerSpec);

    TaskSpecContainerSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecContainerSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecContainerSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecContainerSpec} obj Optional instance to populate.
     * @return {module:model/TaskSpecContainerSpec} The populated <code>TaskSpecContainerSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecContainerSpec();

        if (data.hasOwnProperty('Image')) {
          obj['Image'] = _ApiClient["default"].convertToType(data['Image'], 'String');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Command')) {
          obj['Command'] = _ApiClient["default"].convertToType(data['Command'], ['String']);
        }

        if (data.hasOwnProperty('Args')) {
          obj['Args'] = _ApiClient["default"].convertToType(data['Args'], ['String']);
        }

        if (data.hasOwnProperty('Hostname')) {
          obj['Hostname'] = _ApiClient["default"].convertToType(data['Hostname'], 'String');
        }

        if (data.hasOwnProperty('Env')) {
          obj['Env'] = _ApiClient["default"].convertToType(data['Env'], ['String']);
        }

        if (data.hasOwnProperty('Dir')) {
          obj['Dir'] = _ApiClient["default"].convertToType(data['Dir'], 'String');
        }

        if (data.hasOwnProperty('User')) {
          obj['User'] = _ApiClient["default"].convertToType(data['User'], 'String');
        }

        if (data.hasOwnProperty('Groups')) {
          obj['Groups'] = _ApiClient["default"].convertToType(data['Groups'], ['String']);
        }

        if (data.hasOwnProperty('Privileges')) {
          obj['Privileges'] = _TaskSpecContainerSpecPrivileges["default"].constructFromObject(data['Privileges']);
        }

        if (data.hasOwnProperty('TTY')) {
          obj['TTY'] = _ApiClient["default"].convertToType(data['TTY'], 'Boolean');
        }

        if (data.hasOwnProperty('OpenStdin')) {
          obj['OpenStdin'] = _ApiClient["default"].convertToType(data['OpenStdin'], 'Boolean');
        }

        if (data.hasOwnProperty('ReadOnly')) {
          obj['ReadOnly'] = _ApiClient["default"].convertToType(data['ReadOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('Mounts')) {
          obj['Mounts'] = _ApiClient["default"].convertToType(data['Mounts'], [_Mount["default"]]);
        }

        if (data.hasOwnProperty('StopSignal')) {
          obj['StopSignal'] = _ApiClient["default"].convertToType(data['StopSignal'], 'String');
        }

        if (data.hasOwnProperty('StopGracePeriod')) {
          obj['StopGracePeriod'] = _ApiClient["default"].convertToType(data['StopGracePeriod'], 'Number');
        }

        if (data.hasOwnProperty('HealthCheck')) {
          obj['HealthCheck'] = _HealthConfig["default"].constructFromObject(data['HealthCheck']);
        }

        if (data.hasOwnProperty('Hosts')) {
          obj['Hosts'] = _ApiClient["default"].convertToType(data['Hosts'], ['String']);
        }

        if (data.hasOwnProperty('DNSConfig')) {
          obj['DNSConfig'] = _TaskSpecContainerSpecDNSConfig["default"].constructFromObject(data['DNSConfig']);
        }

        if (data.hasOwnProperty('Secrets')) {
          obj['Secrets'] = _ApiClient["default"].convertToType(data['Secrets'], [_TaskSpecContainerSpecSecrets["default"]]);
        }

        if (data.hasOwnProperty('Configs')) {
          obj['Configs'] = _ApiClient["default"].convertToType(data['Configs'], [_TaskSpecContainerSpecConfigs["default"]]);
        }

        if (data.hasOwnProperty('Isolation')) {
          obj['Isolation'] = _ApiClient["default"].convertToType(data['Isolation'], 'String');
        }

        if (data.hasOwnProperty('Init')) {
          obj['Init'] = _ApiClient["default"].convertToType(data['Init'], 'Boolean');
        }

        if (data.hasOwnProperty('Sysctls')) {
          obj['Sysctls'] = _ApiClient["default"].convertToType(data['Sysctls'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('CapabilityAdd')) {
          obj['CapabilityAdd'] = _ApiClient["default"].convertToType(data['CapabilityAdd'], ['String']);
        }

        if (data.hasOwnProperty('CapabilityDrop')) {
          obj['CapabilityDrop'] = _ApiClient["default"].convertToType(data['CapabilityDrop'], ['String']);
        }

        if (data.hasOwnProperty('Ulimits')) {
          obj['Ulimits'] = _ApiClient["default"].convertToType(data['Ulimits'], [_ResourcesUlimits["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TaskSpecContainerSpec;
}();
/**
 * The image name to use for the container
 * @member {String} Image
 */


TaskSpecContainerSpec.prototype['Image'] = undefined;
/**
 * User-defined key/value data.
 * @member {Object.<String, String>} Labels
 */

TaskSpecContainerSpec.prototype['Labels'] = undefined;
/**
 * The command to be run in the image.
 * @member {Array.<String>} Command
 */

TaskSpecContainerSpec.prototype['Command'] = undefined;
/**
 * Arguments to the command.
 * @member {Array.<String>} Args
 */

TaskSpecContainerSpec.prototype['Args'] = undefined;
/**
 * The hostname to use for the container, as a valid [RFC 1123](https://tools.ietf.org/html/rfc1123) hostname. 
 * @member {String} Hostname
 */

TaskSpecContainerSpec.prototype['Hostname'] = undefined;
/**
 * A list of environment variables in the form `VAR=value`. 
 * @member {Array.<String>} Env
 */

TaskSpecContainerSpec.prototype['Env'] = undefined;
/**
 * The working directory for commands to run in.
 * @member {String} Dir
 */

TaskSpecContainerSpec.prototype['Dir'] = undefined;
/**
 * The user inside the container.
 * @member {String} User
 */

TaskSpecContainerSpec.prototype['User'] = undefined;
/**
 * A list of additional groups that the container process will run as. 
 * @member {Array.<String>} Groups
 */

TaskSpecContainerSpec.prototype['Groups'] = undefined;
/**
 * @member {module:model/TaskSpecContainerSpecPrivileges} Privileges
 */

TaskSpecContainerSpec.prototype['Privileges'] = undefined;
/**
 * Whether a pseudo-TTY should be allocated.
 * @member {Boolean} TTY
 */

TaskSpecContainerSpec.prototype['TTY'] = undefined;
/**
 * Open `stdin`
 * @member {Boolean} OpenStdin
 */

TaskSpecContainerSpec.prototype['OpenStdin'] = undefined;
/**
 * Mount the container's root filesystem as read only.
 * @member {Boolean} ReadOnly
 */

TaskSpecContainerSpec.prototype['ReadOnly'] = undefined;
/**
 * Specification for mounts to be added to containers created as part of the service. 
 * @member {Array.<module:model/Mount>} Mounts
 */

TaskSpecContainerSpec.prototype['Mounts'] = undefined;
/**
 * Signal to stop the container.
 * @member {String} StopSignal
 */

TaskSpecContainerSpec.prototype['StopSignal'] = undefined;
/**
 * Amount of time to wait for the container to terminate before forcefully killing it. 
 * @member {Number} StopGracePeriod
 */

TaskSpecContainerSpec.prototype['StopGracePeriod'] = undefined;
/**
 * @member {module:model/HealthConfig} HealthCheck
 */

TaskSpecContainerSpec.prototype['HealthCheck'] = undefined;
/**
 * A list of hostname/IP mappings to add to the container's `hosts` file. The format of extra hosts is specified in the [hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html) man page:      IP_address canonical_hostname [aliases...] 
 * @member {Array.<String>} Hosts
 */

TaskSpecContainerSpec.prototype['Hosts'] = undefined;
/**
 * @member {module:model/TaskSpecContainerSpecDNSConfig} DNSConfig
 */

TaskSpecContainerSpec.prototype['DNSConfig'] = undefined;
/**
 * Secrets contains references to zero or more secrets that will be exposed to the service. 
 * @member {Array.<module:model/TaskSpecContainerSpecSecrets>} Secrets
 */

TaskSpecContainerSpec.prototype['Secrets'] = undefined;
/**
 * Configs contains references to zero or more configs that will be exposed to the service. 
 * @member {Array.<module:model/TaskSpecContainerSpecConfigs>} Configs
 */

TaskSpecContainerSpec.prototype['Configs'] = undefined;
/**
 * Isolation technology of the containers running the service. (Windows only) 
 * @member {module:model/TaskSpecContainerSpec.IsolationEnum} Isolation
 */

TaskSpecContainerSpec.prototype['Isolation'] = undefined;
/**
 * Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used. 
 * @member {Boolean} Init
 */

TaskSpecContainerSpec.prototype['Init'] = undefined;
/**
 * Set kernel namedspaced parameters (sysctls) in the container. The Sysctls option on services accepts the same sysctls as the are supported on containers. Note that while the same sysctls are supported, no guarantees or checks are made about their suitability for a clustered environment, and it's up to the user to determine whether a given sysctl will work properly in a Service. 
 * @member {Object.<String, String>} Sysctls
 */

TaskSpecContainerSpec.prototype['Sysctls'] = undefined;
/**
 * A list of kernel capabilities to add to the default set for the container. 
 * @member {Array.<String>} CapabilityAdd
 */

TaskSpecContainerSpec.prototype['CapabilityAdd'] = undefined;
/**
 * A list of kernel capabilities to drop from the default set for the container. 
 * @member {Array.<String>} CapabilityDrop
 */

TaskSpecContainerSpec.prototype['CapabilityDrop'] = undefined;
/**
 * A list of resource limits to set in the container. For example: `{\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048}`\" 
 * @member {Array.<module:model/ResourcesUlimits>} Ulimits
 */

TaskSpecContainerSpec.prototype['Ulimits'] = undefined;
/**
 * Allowed values for the <code>Isolation</code> property.
 * @enum {String}
 * @readonly
 */

TaskSpecContainerSpec['IsolationEnum'] = {
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
var _default = TaskSpecContainerSpec;
exports["default"] = _default;