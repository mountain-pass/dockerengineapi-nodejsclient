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
 * The SystemAuthResponse model module.
 * @module model/SystemAuthResponse
 * @version 1.41
 */
var SystemAuthResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemAuthResponse</code>.
   * @alias module:model/SystemAuthResponse
   * @param status {String} The status of the authentication
   */
  function SystemAuthResponse(status) {
    _classCallCheck(this, SystemAuthResponse);

    SystemAuthResponse.initialize(this, status);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemAuthResponse, null, [{
    key: "initialize",
    value: function initialize(obj, status) {
      obj['Status'] = status;
    }
    /**
     * Constructs a <code>SystemAuthResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemAuthResponse} obj Optional instance to populate.
     * @return {module:model/SystemAuthResponse} The populated <code>SystemAuthResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemAuthResponse();

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], 'String');
        }

        if (data.hasOwnProperty('IdentityToken')) {
          obj['IdentityToken'] = _ApiClient["default"].convertToType(data['IdentityToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SystemAuthResponse;
}();
/**
 * The status of the authentication
 * @member {String} Status
 */


SystemAuthResponse.prototype['Status'] = undefined;
/**
 * An opaque token used to authenticate a user after a successful login
 * @member {String} IdentityToken
 */

SystemAuthResponse.prototype['IdentityToken'] = undefined;
var _default = SystemAuthResponse;
exports["default"] = _default;