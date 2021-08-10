"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ConfigSpec = _interopRequireDefault(require("./ConfigSpec"));

var _ObjectVersion = _interopRequireDefault(require("./ObjectVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Config model module.
 * @module model/Config
 * @version 1.41
 */
var Config = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Config</code>.
   * @alias module:model/Config
   */
  function Config() {
    _classCallCheck(this, Config);

    Config.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Config, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Config</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Config} obj Optional instance to populate.
     * @return {module:model/Config} The populated <code>Config</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Config();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ObjectVersion["default"].constructFromObject(data['Version']);
        }

        if (data.hasOwnProperty('CreatedAt')) {
          obj['CreatedAt'] = _ApiClient["default"].convertToType(data['CreatedAt'], 'String');
        }

        if (data.hasOwnProperty('UpdatedAt')) {
          obj['UpdatedAt'] = _ApiClient["default"].convertToType(data['UpdatedAt'], 'String');
        }

        if (data.hasOwnProperty('Spec')) {
          obj['Spec'] = _ConfigSpec["default"].constructFromObject(data['Spec']);
        }
      }

      return obj;
    }
  }]);

  return Config;
}();
/**
 * @member {String} ID
 */


Config.prototype['ID'] = undefined;
/**
 * @member {module:model/ObjectVersion} Version
 */

Config.prototype['Version'] = undefined;
/**
 * @member {String} CreatedAt
 */

Config.prototype['CreatedAt'] = undefined;
/**
 * @member {String} UpdatedAt
 */

Config.prototype['UpdatedAt'] = undefined;
/**
 * @member {module:model/ConfigSpec} Spec
 */

Config.prototype['Spec'] = undefined;
var _default = Config;
exports["default"] = _default;