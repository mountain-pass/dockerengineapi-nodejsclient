"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PluginInterfaceType model module.
 * @module model/PluginInterfaceType
 * @version 1.41
 */
var PluginInterfaceType = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginInterfaceType</code>.
   * @alias module:model/PluginInterfaceType
   * @param prefix {String} 
   * @param capability {String} 
   * @param version {String} 
   */
  function PluginInterfaceType(prefix, capability, version) {
    _classCallCheck(this, PluginInterfaceType);

    PluginInterfaceType.initialize(this, prefix, capability, version);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginInterfaceType, null, [{
    key: "initialize",
    value: function initialize(obj, prefix, capability, version) {
      obj['Prefix'] = prefix;
      obj['Capability'] = capability;
      obj['Version'] = version;
    }
    /**
     * Constructs a <code>PluginInterfaceType</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginInterfaceType} obj Optional instance to populate.
     * @return {module:model/PluginInterfaceType} The populated <code>PluginInterfaceType</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginInterfaceType();

        if (data.hasOwnProperty('Prefix')) {
          obj['Prefix'] = _ApiClient["default"].convertToType(data['Prefix'], 'String');
        }

        if (data.hasOwnProperty('Capability')) {
          obj['Capability'] = _ApiClient["default"].convertToType(data['Capability'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PluginInterfaceType;
}();
/**
 * @member {String} Prefix
 */


PluginInterfaceType.prototype['Prefix'] = undefined;
/**
 * @member {String} Capability
 */

PluginInterfaceType.prototype['Capability'] = undefined;
/**
 * @member {String} Version
 */

PluginInterfaceType.prototype['Version'] = undefined;
var _default = PluginInterfaceType;
exports["default"] = _default;