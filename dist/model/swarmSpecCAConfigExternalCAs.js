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
 * The SwarmSpecCAConfigExternalCAs model module.
 * @module model/SwarmSpecCAConfigExternalCAs
 * @version 1.41
 */
var SwarmSpecCAConfigExternalCAs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpecCAConfigExternalCAs</code>.
   * @alias module:model/SwarmSpecCAConfigExternalCAs
   */
  function SwarmSpecCAConfigExternalCAs() {
    _classCallCheck(this, SwarmSpecCAConfigExternalCAs);

    SwarmSpecCAConfigExternalCAs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpecCAConfigExternalCAs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpecCAConfigExternalCAs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpecCAConfigExternalCAs} obj Optional instance to populate.
     * @return {module:model/SwarmSpecCAConfigExternalCAs} The populated <code>SwarmSpecCAConfigExternalCAs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpecCAConfigExternalCAs();

        if (data.hasOwnProperty('Protocol')) {
          obj['Protocol'] = _ApiClient["default"].convertToType(data['Protocol'], 'String');
        }

        if (data.hasOwnProperty('URL')) {
          obj['URL'] = _ApiClient["default"].convertToType(data['URL'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('CACert')) {
          obj['CACert'] = _ApiClient["default"].convertToType(data['CACert'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SwarmSpecCAConfigExternalCAs;
}();
/**
 * Protocol for communication with the external CA (currently only `cfssl` is supported). 
 * @member {module:model/SwarmSpecCAConfigExternalCAs.ProtocolEnum} Protocol
 * @default 'cfssl'
 */


SwarmSpecCAConfigExternalCAs.prototype['Protocol'] = 'cfssl';
/**
 * URL where certificate signing requests should be sent. 
 * @member {String} URL
 */

SwarmSpecCAConfigExternalCAs.prototype['URL'] = undefined;
/**
 * An object with key/value pairs that are interpreted as protocol-specific options for the external CA driver. 
 * @member {Object.<String, String>} Options
 */

SwarmSpecCAConfigExternalCAs.prototype['Options'] = undefined;
/**
 * The root CA certificate (in PEM format) this external CA uses to issue TLS certificates (assumed to be to the current swarm root CA certificate if not provided). 
 * @member {String} CACert
 */

SwarmSpecCAConfigExternalCAs.prototype['CACert'] = undefined;
/**
 * Allowed values for the <code>Protocol</code> property.
 * @enum {String}
 * @readonly
 */

SwarmSpecCAConfigExternalCAs['ProtocolEnum'] = {
  /**
   * value: "cfssl"
   * @const
   */
  "cfssl": "cfssl"
};
var _default = SwarmSpecCAConfigExternalCAs;
exports["default"] = _default;