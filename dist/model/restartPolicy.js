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
 * The RestartPolicy model module.
 * @module model/RestartPolicy
 * @version 1.41
 */
var RestartPolicy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RestartPolicy</code>.
   * The behavior to apply when the container exits. The default is not to restart.  An ever increasing delay (double the previous delay, starting at 100ms) is added before each restart to prevent flooding the server. 
   * @alias module:model/RestartPolicy
   */
  function RestartPolicy() {
    _classCallCheck(this, RestartPolicy);

    RestartPolicy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RestartPolicy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RestartPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RestartPolicy} obj Optional instance to populate.
     * @return {module:model/RestartPolicy} The populated <code>RestartPolicy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RestartPolicy();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('MaximumRetryCount')) {
          obj['MaximumRetryCount'] = _ApiClient["default"].convertToType(data['MaximumRetryCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return RestartPolicy;
}();
/**
 * - Empty string means not to restart - `always` Always restart - `unless-stopped` Restart always except when the user has manually stopped the container - `on-failure` Restart only when the container exit code is non-zero 
 * @member {module:model/RestartPolicy.NameEnum} Name
 */


RestartPolicy.prototype['Name'] = undefined;
/**
 * If `on-failure` is used, the number of times to retry before giving up. 
 * @member {Number} MaximumRetryCount
 */

RestartPolicy.prototype['MaximumRetryCount'] = undefined;
/**
 * Allowed values for the <code>Name</code> property.
 * @enum {String}
 * @readonly
 */

RestartPolicy['NameEnum'] = {
  /**
   * value: ""
   * @const
   */
  "empty": "",

  /**
   * value: "always"
   * @const
   */
  "always": "always",

  /**
   * value: "unless-stopped"
   * @const
   */
  "unless-stopped": "unless-stopped",

  /**
   * value: "on-failure"
   * @const
   */
  "on-failure": "on-failure"
};
var _default = RestartPolicy;
exports["default"] = _default;