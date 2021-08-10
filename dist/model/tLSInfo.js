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
 * The TLSInfo model module.
 * @module model/TLSInfo
 * @version 1.41
 */
var TLSInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TLSInfo</code>.
   * Information about the issuer of leaf TLS certificates and the trusted root CA certificate. 
   * @alias module:model/TLSInfo
   */
  function TLSInfo() {
    _classCallCheck(this, TLSInfo);

    TLSInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TLSInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TLSInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TLSInfo} obj Optional instance to populate.
     * @return {module:model/TLSInfo} The populated <code>TLSInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TLSInfo();

        if (data.hasOwnProperty('TrustRoot')) {
          obj['TrustRoot'] = _ApiClient["default"].convertToType(data['TrustRoot'], 'String');
        }

        if (data.hasOwnProperty('CertIssuerSubject')) {
          obj['CertIssuerSubject'] = _ApiClient["default"].convertToType(data['CertIssuerSubject'], 'String');
        }

        if (data.hasOwnProperty('CertIssuerPublicKey')) {
          obj['CertIssuerPublicKey'] = _ApiClient["default"].convertToType(data['CertIssuerPublicKey'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TLSInfo;
}();
/**
 * The root CA certificate(s) that are used to validate leaf TLS certificates. 
 * @member {String} TrustRoot
 */


TLSInfo.prototype['TrustRoot'] = undefined;
/**
 * The base64-url-safe-encoded raw subject bytes of the issuer.
 * @member {String} CertIssuerSubject
 */

TLSInfo.prototype['CertIssuerSubject'] = undefined;
/**
 * The base64-url-safe-encoded raw public key bytes of the issuer. 
 * @member {String} CertIssuerPublicKey
 */

TLSInfo.prototype['CertIssuerPublicKey'] = undefined;
var _default = TLSInfo;
exports["default"] = _default;