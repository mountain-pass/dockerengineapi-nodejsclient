"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PluginDevice = _interopRequireDefault(require("./PluginDevice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PluginConfigLinux model module.
 * @module model/PluginConfigLinux
 * @version 1.41
 */
var PluginConfigLinux = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginConfigLinux</code>.
   * @alias module:model/PluginConfigLinux
   * @param capabilities {Array.<String>} 
   * @param allowAllDevices {Boolean} 
   * @param devices {Array.<module:model/PluginDevice>} 
   */
  function PluginConfigLinux(capabilities, allowAllDevices, devices) {
    _classCallCheck(this, PluginConfigLinux);

    PluginConfigLinux.initialize(this, capabilities, allowAllDevices, devices);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginConfigLinux, null, [{
    key: "initialize",
    value: function initialize(obj, capabilities, allowAllDevices, devices) {
      obj['Capabilities'] = capabilities;
      obj['AllowAllDevices'] = allowAllDevices;
      obj['Devices'] = devices;
    }
    /**
     * Constructs a <code>PluginConfigLinux</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginConfigLinux} obj Optional instance to populate.
     * @return {module:model/PluginConfigLinux} The populated <code>PluginConfigLinux</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginConfigLinux();

        if (data.hasOwnProperty('Capabilities')) {
          obj['Capabilities'] = _ApiClient["default"].convertToType(data['Capabilities'], ['String']);
        }

        if (data.hasOwnProperty('AllowAllDevices')) {
          obj['AllowAllDevices'] = _ApiClient["default"].convertToType(data['AllowAllDevices'], 'Boolean');
        }

        if (data.hasOwnProperty('Devices')) {
          obj['Devices'] = _ApiClient["default"].convertToType(data['Devices'], [_PluginDevice["default"]]);
        }
      }

      return obj;
    }
  }]);

  return PluginConfigLinux;
}();
/**
 * @member {Array.<String>} Capabilities
 */


PluginConfigLinux.prototype['Capabilities'] = undefined;
/**
 * @member {Boolean} AllowAllDevices
 */

PluginConfigLinux.prototype['AllowAllDevices'] = undefined;
/**
 * @member {Array.<module:model/PluginDevice>} Devices
 */

PluginConfigLinux.prototype['Devices'] = undefined;
var _default = PluginConfigLinux;
exports["default"] = _default;