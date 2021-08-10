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
 * The ConfigSpec model module.
 * @module model/ConfigSpec
 * @version 1.41
 */
var ConfigSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ConfigSpec</code>.
   * @alias module:model/ConfigSpec
   */
  function ConfigSpec() {
    _classCallCheck(this, ConfigSpec);

    ConfigSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ConfigSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ConfigSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ConfigSpec} obj Optional instance to populate.
     * @return {module:model/ConfigSpec} The populated <code>ConfigSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ConfigSpec();

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

        if (data.hasOwnProperty('Templating')) {
          obj['Templating'] = _Driver["default"].constructFromObject(data['Templating']);
        }
      }

      return obj;
    }
  }]);

  return ConfigSpec;
}();
/**
 * User-defined name of the config.
 * @member {String} Name
 */


ConfigSpec.prototype['Name'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

ConfigSpec.prototype['Labels'] = undefined;
/**
 * Base64-url-safe-encoded ([RFC 4648](https://tools.ietf.org/html/rfc4648#section-5)) config data. 
 * @member {String} Data
 */

ConfigSpec.prototype['Data'] = undefined;
/**
 * @member {module:model/Driver} Templating
 */

ConfigSpec.prototype['Templating'] = undefined;
var _default = ConfigSpec;
exports["default"] = _default;