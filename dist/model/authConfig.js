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
 * The AuthConfig model module.
 * @module model/AuthConfig
 * @version 1.41
 */
var AuthConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>AuthConfig</code>.
   * @alias module:model/AuthConfig
   */
  function AuthConfig() {
    _classCallCheck(this, AuthConfig);

    AuthConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(AuthConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>AuthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/AuthConfig} obj Optional instance to populate.
     * @return {module:model/AuthConfig} The populated <code>AuthConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new AuthConfig();

        if (data.hasOwnProperty('username')) {
          obj['username'] = _ApiClient["default"].convertToType(data['username'], 'String');
        }

        if (data.hasOwnProperty('password')) {
          obj['password'] = _ApiClient["default"].convertToType(data['password'], 'String');
        }

        if (data.hasOwnProperty('email')) {
          obj['email'] = _ApiClient["default"].convertToType(data['email'], 'String');
        }

        if (data.hasOwnProperty('serveraddress')) {
          obj['serveraddress'] = _ApiClient["default"].convertToType(data['serveraddress'], 'String');
        }
      }

      return obj;
    }
  }]);

  return AuthConfig;
}();
/**
 * @member {String} username
 */


AuthConfig.prototype['username'] = undefined;
/**
 * @member {String} password
 */

AuthConfig.prototype['password'] = undefined;
/**
 * @member {String} email
 */

AuthConfig.prototype['email'] = undefined;
/**
 * @member {String} serveraddress
 */

AuthConfig.prototype['serveraddress'] = undefined;
var _default = AuthConfig;
exports["default"] = _default;