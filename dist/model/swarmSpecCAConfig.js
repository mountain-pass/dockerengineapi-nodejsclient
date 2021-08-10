"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SwarmSpecCAConfigExternalCAs = _interopRequireDefault(require("./SwarmSpecCAConfigExternalCAs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SwarmSpecCAConfig model module.
 * @module model/SwarmSpecCAConfig
 * @version 1.41
 */
var SwarmSpecCAConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpecCAConfig</code>.
   * CA configuration.
   * @alias module:model/SwarmSpecCAConfig
   */
  function SwarmSpecCAConfig() {
    _classCallCheck(this, SwarmSpecCAConfig);

    SwarmSpecCAConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpecCAConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpecCAConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpecCAConfig} obj Optional instance to populate.
     * @return {module:model/SwarmSpecCAConfig} The populated <code>SwarmSpecCAConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpecCAConfig();

        if (data.hasOwnProperty('NodeCertExpiry')) {
          obj['NodeCertExpiry'] = _ApiClient["default"].convertToType(data['NodeCertExpiry'], 'Number');
        }

        if (data.hasOwnProperty('ExternalCAs')) {
          obj['ExternalCAs'] = _ApiClient["default"].convertToType(data['ExternalCAs'], [_SwarmSpecCAConfigExternalCAs["default"]]);
        }

        if (data.hasOwnProperty('SigningCACert')) {
          obj['SigningCACert'] = _ApiClient["default"].convertToType(data['SigningCACert'], 'String');
        }

        if (data.hasOwnProperty('SigningCAKey')) {
          obj['SigningCAKey'] = _ApiClient["default"].convertToType(data['SigningCAKey'], 'String');
        }

        if (data.hasOwnProperty('ForceRotate')) {
          obj['ForceRotate'] = _ApiClient["default"].convertToType(data['ForceRotate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SwarmSpecCAConfig;
}();
/**
 * The duration node certificates are issued for.
 * @member {Number} NodeCertExpiry
 */


SwarmSpecCAConfig.prototype['NodeCertExpiry'] = undefined;
/**
 * Configuration for forwarding signing requests to an external certificate authority. 
 * @member {Array.<module:model/SwarmSpecCAConfigExternalCAs>} ExternalCAs
 */

SwarmSpecCAConfig.prototype['ExternalCAs'] = undefined;
/**
 * The desired signing CA certificate for all swarm node TLS leaf certificates, in PEM format. 
 * @member {String} SigningCACert
 */

SwarmSpecCAConfig.prototype['SigningCACert'] = undefined;
/**
 * The desired signing CA key for all swarm node TLS leaf certificates, in PEM format. 
 * @member {String} SigningCAKey
 */

SwarmSpecCAConfig.prototype['SigningCAKey'] = undefined;
/**
 * An integer whose purpose is to force swarm to generate a new signing CA certificate and key, if none have been specified in `SigningCACert` and `SigningCAKey` 
 * @member {Number} ForceRotate
 */

SwarmSpecCAConfig.prototype['ForceRotate'] = undefined;
var _default = SwarmSpecCAConfig;
exports["default"] = _default;