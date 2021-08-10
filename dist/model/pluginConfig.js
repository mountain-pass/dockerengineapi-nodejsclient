"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PluginConfigArgs = _interopRequireDefault(require("./PluginConfigArgs"));

var _PluginConfigInterface = _interopRequireDefault(require("./PluginConfigInterface"));

var _PluginConfigLinux = _interopRequireDefault(require("./PluginConfigLinux"));

var _PluginConfigNetwork = _interopRequireDefault(require("./PluginConfigNetwork"));

var _PluginConfigRootfs = _interopRequireDefault(require("./PluginConfigRootfs"));

var _PluginConfigUser = _interopRequireDefault(require("./PluginConfigUser"));

var _PluginEnv = _interopRequireDefault(require("./PluginEnv"));

var _PluginMount = _interopRequireDefault(require("./PluginMount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PluginConfig model module.
 * @module model/PluginConfig
 * @version 1.41
 */
var PluginConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginConfig</code>.
   * The config of a plugin.
   * @alias module:model/PluginConfig
   * @param description {String} 
   * @param documentation {String} 
   * @param _interface {module:model/PluginConfigInterface} 
   * @param entrypoint {Array.<String>} 
   * @param workDir {String} 
   * @param network {module:model/PluginConfigNetwork} 
   * @param linux {module:model/PluginConfigLinux} 
   * @param propagatedMount {String} 
   * @param ipcHost {Boolean} 
   * @param pidHost {Boolean} 
   * @param mounts {Array.<module:model/PluginMount>} 
   * @param env {Array.<module:model/PluginEnv>} 
   * @param args {module:model/PluginConfigArgs} 
   */
  function PluginConfig(description, documentation, _interface, entrypoint, workDir, network, linux, propagatedMount, ipcHost, pidHost, mounts, env, args) {
    _classCallCheck(this, PluginConfig);

    PluginConfig.initialize(this, description, documentation, _interface, entrypoint, workDir, network, linux, propagatedMount, ipcHost, pidHost, mounts, env, args);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginConfig, null, [{
    key: "initialize",
    value: function initialize(obj, description, documentation, _interface, entrypoint, workDir, network, linux, propagatedMount, ipcHost, pidHost, mounts, env, args) {
      obj['Description'] = description;
      obj['Documentation'] = documentation;
      obj['Interface'] = _interface;
      obj['Entrypoint'] = entrypoint;
      obj['WorkDir'] = workDir;
      obj['Network'] = network;
      obj['Linux'] = linux;
      obj['PropagatedMount'] = propagatedMount;
      obj['IpcHost'] = ipcHost;
      obj['PidHost'] = pidHost;
      obj['Mounts'] = mounts;
      obj['Env'] = env;
      obj['Args'] = args;
    }
    /**
     * Constructs a <code>PluginConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginConfig} obj Optional instance to populate.
     * @return {module:model/PluginConfig} The populated <code>PluginConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginConfig();

        if (data.hasOwnProperty('DockerVersion')) {
          obj['DockerVersion'] = _ApiClient["default"].convertToType(data['DockerVersion'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Documentation')) {
          obj['Documentation'] = _ApiClient["default"].convertToType(data['Documentation'], 'String');
        }

        if (data.hasOwnProperty('Interface')) {
          obj['Interface'] = _PluginConfigInterface["default"].constructFromObject(data['Interface']);
        }

        if (data.hasOwnProperty('Entrypoint')) {
          obj['Entrypoint'] = _ApiClient["default"].convertToType(data['Entrypoint'], ['String']);
        }

        if (data.hasOwnProperty('WorkDir')) {
          obj['WorkDir'] = _ApiClient["default"].convertToType(data['WorkDir'], 'String');
        }

        if (data.hasOwnProperty('User')) {
          obj['User'] = _PluginConfigUser["default"].constructFromObject(data['User']);
        }

        if (data.hasOwnProperty('Network')) {
          obj['Network'] = _PluginConfigNetwork["default"].constructFromObject(data['Network']);
        }

        if (data.hasOwnProperty('Linux')) {
          obj['Linux'] = _PluginConfigLinux["default"].constructFromObject(data['Linux']);
        }

        if (data.hasOwnProperty('PropagatedMount')) {
          obj['PropagatedMount'] = _ApiClient["default"].convertToType(data['PropagatedMount'], 'String');
        }

        if (data.hasOwnProperty('IpcHost')) {
          obj['IpcHost'] = _ApiClient["default"].convertToType(data['IpcHost'], 'Boolean');
        }

        if (data.hasOwnProperty('PidHost')) {
          obj['PidHost'] = _ApiClient["default"].convertToType(data['PidHost'], 'Boolean');
        }

        if (data.hasOwnProperty('Mounts')) {
          obj['Mounts'] = _ApiClient["default"].convertToType(data['Mounts'], [_PluginMount["default"]]);
        }

        if (data.hasOwnProperty('Env')) {
          obj['Env'] = _ApiClient["default"].convertToType(data['Env'], [_PluginEnv["default"]]);
        }

        if (data.hasOwnProperty('Args')) {
          obj['Args'] = _PluginConfigArgs["default"].constructFromObject(data['Args']);
        }

        if (data.hasOwnProperty('rootfs')) {
          obj['rootfs'] = _PluginConfigRootfs["default"].constructFromObject(data['rootfs']);
        }
      }

      return obj;
    }
  }]);

  return PluginConfig;
}();
/**
 * Docker Version used to create the plugin
 * @member {String} DockerVersion
 */


PluginConfig.prototype['DockerVersion'] = undefined;
/**
 * @member {String} Description
 */

PluginConfig.prototype['Description'] = undefined;
/**
 * @member {String} Documentation
 */

PluginConfig.prototype['Documentation'] = undefined;
/**
 * @member {module:model/PluginConfigInterface} Interface
 */

PluginConfig.prototype['Interface'] = undefined;
/**
 * @member {Array.<String>} Entrypoint
 */

PluginConfig.prototype['Entrypoint'] = undefined;
/**
 * @member {String} WorkDir
 */

PluginConfig.prototype['WorkDir'] = undefined;
/**
 * @member {module:model/PluginConfigUser} User
 */

PluginConfig.prototype['User'] = undefined;
/**
 * @member {module:model/PluginConfigNetwork} Network
 */

PluginConfig.prototype['Network'] = undefined;
/**
 * @member {module:model/PluginConfigLinux} Linux
 */

PluginConfig.prototype['Linux'] = undefined;
/**
 * @member {String} PropagatedMount
 */

PluginConfig.prototype['PropagatedMount'] = undefined;
/**
 * @member {Boolean} IpcHost
 */

PluginConfig.prototype['IpcHost'] = undefined;
/**
 * @member {Boolean} PidHost
 */

PluginConfig.prototype['PidHost'] = undefined;
/**
 * @member {Array.<module:model/PluginMount>} Mounts
 */

PluginConfig.prototype['Mounts'] = undefined;
/**
 * @member {Array.<module:model/PluginEnv>} Env
 */

PluginConfig.prototype['Env'] = undefined;
/**
 * @member {module:model/PluginConfigArgs} Args
 */

PluginConfig.prototype['Args'] = undefined;
/**
 * @member {module:model/PluginConfigRootfs} rootfs
 */

PluginConfig.prototype['rootfs'] = undefined;
var _default = PluginConfig;
exports["default"] = _default;