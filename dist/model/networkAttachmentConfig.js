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
 * The NetworkAttachmentConfig model module.
 * @module model/NetworkAttachmentConfig
 * @version 1.41
 */
var NetworkAttachmentConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NetworkAttachmentConfig</code>.
   * Specifies how a service should be attached to a particular network. 
   * @alias module:model/NetworkAttachmentConfig
   */
  function NetworkAttachmentConfig() {
    _classCallCheck(this, NetworkAttachmentConfig);

    NetworkAttachmentConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkAttachmentConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkAttachmentConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkAttachmentConfig} obj Optional instance to populate.
     * @return {module:model/NetworkAttachmentConfig} The populated <code>NetworkAttachmentConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkAttachmentConfig();

        if (data.hasOwnProperty('Target')) {
          obj['Target'] = _ApiClient["default"].convertToType(data['Target'], 'String');
        }

        if (data.hasOwnProperty('Aliases')) {
          obj['Aliases'] = _ApiClient["default"].convertToType(data['Aliases'], ['String']);
        }

        if (data.hasOwnProperty('DriverOpts')) {
          obj['DriverOpts'] = _ApiClient["default"].convertToType(data['DriverOpts'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return NetworkAttachmentConfig;
}();
/**
 * The target network for attachment. Must be a network name or ID. 
 * @member {String} Target
 */


NetworkAttachmentConfig.prototype['Target'] = undefined;
/**
 * Discoverable alternate names for the service on this network. 
 * @member {Array.<String>} Aliases
 */

NetworkAttachmentConfig.prototype['Aliases'] = undefined;
/**
 * Driver attachment options for the network target. 
 * @member {Object.<String, String>} DriverOpts
 */

NetworkAttachmentConfig.prototype['DriverOpts'] = undefined;
var _default = NetworkAttachmentConfig;
exports["default"] = _default;