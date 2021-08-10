"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PluginDevice = _interopRequireDefault(require("./PluginDevice"));

var _PluginMount = _interopRequireDefault(require("./PluginMount"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PluginSettings model module.
 * @module model/PluginSettings
 * @version 1.41
 */
var PluginSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginSettings</code>.
   * Settings that can be modified by users.
   * @alias module:model/PluginSettings
   * @param mounts {Array.<module:model/PluginMount>} 
   * @param env {Array.<String>} 
   * @param args {Array.<String>} 
   * @param devices {Array.<module:model/PluginDevice>} 
   */
  function PluginSettings(mounts, env, args, devices) {
    _classCallCheck(this, PluginSettings);

    PluginSettings.initialize(this, mounts, env, args, devices);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginSettings, null, [{
    key: "initialize",
    value: function initialize(obj, mounts, env, args, devices) {
      obj['Mounts'] = mounts;
      obj['Env'] = env;
      obj['Args'] = args;
      obj['Devices'] = devices;
    }
    /**
     * Constructs a <code>PluginSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginSettings} obj Optional instance to populate.
     * @return {module:model/PluginSettings} The populated <code>PluginSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginSettings();

        if (data.hasOwnProperty('Mounts')) {
          obj['Mounts'] = _ApiClient["default"].convertToType(data['Mounts'], [_PluginMount["default"]]);
        }

        if (data.hasOwnProperty('Env')) {
          obj['Env'] = _ApiClient["default"].convertToType(data['Env'], ['String']);
        }

        if (data.hasOwnProperty('Args')) {
          obj['Args'] = _ApiClient["default"].convertToType(data['Args'], ['String']);
        }

        if (data.hasOwnProperty('Devices')) {
          obj['Devices'] = _ApiClient["default"].convertToType(data['Devices'], [_PluginDevice["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PluginSettings;
}();
/**
 * @member {Array.<module:model/PluginMount>} Mounts
 */


PluginSettings.prototype['Mounts'] = undefined;
/**
 * @member {Array.<String>} Env
 */

PluginSettings.prototype['Env'] = undefined;
/**
 * @member {Array.<String>} Args
 */

PluginSettings.prototype['Args'] = undefined;
/**
 * @member {Array.<module:model/PluginDevice>} Devices
 */

PluginSettings.prototype['Devices'] = undefined;
var _default = PluginSettings;
exports["default"] = _default;