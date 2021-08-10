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
 * The SwarmSpecEncryptionConfig model module.
 * @module model/SwarmSpecEncryptionConfig
 * @version 1.41
 */
var SwarmSpecEncryptionConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpecEncryptionConfig</code>.
   * Parameters related to encryption-at-rest.
   * @alias module:model/SwarmSpecEncryptionConfig
   */
  function SwarmSpecEncryptionConfig() {
    _classCallCheck(this, SwarmSpecEncryptionConfig);

    SwarmSpecEncryptionConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpecEncryptionConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpecEncryptionConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpecEncryptionConfig} obj Optional instance to populate.
     * @return {module:model/SwarmSpecEncryptionConfig} The populated <code>SwarmSpecEncryptionConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpecEncryptionConfig();

        if (data.hasOwnProperty('AutoLockManagers')) {
          obj['AutoLockManagers'] = _ApiClient["default"].convertToType(data['AutoLockManagers'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return SwarmSpecEncryptionConfig;
}();
/**
 * If set, generate a key and use it to lock data stored on the managers. 
 * @member {Boolean} AutoLockManagers
 */


SwarmSpecEncryptionConfig.prototype['AutoLockManagers'] = undefined;
var _default = SwarmSpecEncryptionConfig;
exports["default"] = _default;