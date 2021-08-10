"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Driver = _interopRequireDefault(require("./Driver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SecretSpec model module.
 * @module model/SecretSpec
 * @version 1.41
 */
var SecretSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SecretSpec</code>.
   * @alias module:model/SecretSpec
   */
  function SecretSpec() {
    _classCallCheck(this, SecretSpec);

    SecretSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SecretSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SecretSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SecretSpec} obj Optional instance to populate.
     * @return {module:model/SecretSpec} The populated <code>SecretSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SecretSpec();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Data')) {
          obj['Data'] = _ApiClient["default"].convertToType(data['Data'], 'String');
        }

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _Driver["default"].constructFromObject(data['Driver']);
        }

        if (data.hasOwnProperty('Templating')) {
          obj['Templating'] = _Driver["default"].constructFromObject(data['Templating']);
        }
      }

      return obj;
    }
  }]);

  return SecretSpec;
}();
/**
 * User-defined name of the secret.
 * @member {String} Name
 */


SecretSpec.prototype['Name'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

SecretSpec.prototype['Labels'] = undefined;
/**
 * Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5)) data to store as secret.  This field is only used to _create_ a secret, and is not returned by other endpoints. 
 * @member {String} Data
 */

SecretSpec.prototype['Data'] = undefined;
/**
 * @member {module:model/Driver} Driver
 */

SecretSpec.prototype['Driver'] = undefined;
/**
 * @member {module:model/Driver} Templating
 */

SecretSpec.prototype['Templating'] = undefined;
var _default = SecretSpec;
exports["default"] = _default;