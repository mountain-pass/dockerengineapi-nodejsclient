"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PluginInterfaceType = _interopRequireDefault(require("./PluginInterfaceType"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PluginConfigInterface model module.
 * @module model/PluginConfigInterface
 * @version 1.41
 */
var PluginConfigInterface = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginConfigInterface</code>.
   * The interface between Docker and the plugin
   * @alias module:model/PluginConfigInterface
   * @param types {Array.<module:model/PluginInterfaceType>} 
   * @param socket {String} 
   */
  function PluginConfigInterface(types, socket) {
    _classCallCheck(this, PluginConfigInterface);

    PluginConfigInterface.initialize(this, types, socket);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginConfigInterface, null, [{
    key: "initialize",
    value: function initialize(obj, types, socket) {
      obj['Types'] = types;
      obj['Socket'] = socket;
    }
    /**
     * Constructs a <code>PluginConfigInterface</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginConfigInterface} obj Optional instance to populate.
     * @return {module:model/PluginConfigInterface} The populated <code>PluginConfigInterface</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginConfigInterface();

        if (data.hasOwnProperty('Types')) {
          obj['Types'] = _ApiClient["default"].convertToType(data['Types'], [_PluginInterfaceType["default"]]);
        }

        if (data.hasOwnProperty('Socket')) {
          obj['Socket'] = _ApiClient["default"].convertToType(data['Socket'], 'String');
        }

        if (data.hasOwnProperty('ProtocolScheme')) {
          obj['ProtocolScheme'] = _ApiClient["default"].convertToType(data['ProtocolScheme'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PluginConfigInterface;
}();
/**
 * @member {Array.<module:model/PluginInterfaceType>} Types
 */


PluginConfigInterface.prototype['Types'] = undefined;
/**
 * @member {String} Socket
 */

PluginConfigInterface.prototype['Socket'] = undefined;
/**
 * Protocol to use for clients connecting to the plugin.
 * @member {module:model/PluginConfigInterface.ProtocolSchemeEnum} ProtocolScheme
 */

PluginConfigInterface.prototype['ProtocolScheme'] = undefined;
/**
 * Allowed values for the <code>ProtocolScheme</code> property.
 * @enum {String}
 * @readonly
 */

PluginConfigInterface['ProtocolSchemeEnum'] = {
  /**
   * value: ""
   * @const
   */
  "empty": "",

  /**
   * value: "moby.plugins.http/v1"
   * @const
   */
  "moby.plugins.http/v1": "moby.plugins.http/v1"
};
var _default = PluginConfigInterface;
exports["default"] = _default;