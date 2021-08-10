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
 * The SystemInfoDefaultAddressPools model module.
 * @module model/SystemInfoDefaultAddressPools
 * @version 1.41
 */
var SystemInfoDefaultAddressPools = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemInfoDefaultAddressPools</code>.
   * @alias module:model/SystemInfoDefaultAddressPools
   */
  function SystemInfoDefaultAddressPools() {
    _classCallCheck(this, SystemInfoDefaultAddressPools);

    SystemInfoDefaultAddressPools.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemInfoDefaultAddressPools, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SystemInfoDefaultAddressPools</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemInfoDefaultAddressPools} obj Optional instance to populate.
     * @return {module:model/SystemInfoDefaultAddressPools} The populated <code>SystemInfoDefaultAddressPools</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemInfoDefaultAddressPools();

        if (data.hasOwnProperty('Base')) {
          obj['Base'] = _ApiClient["default"].convertToType(data['Base'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SystemInfoDefaultAddressPools;
}();
/**
 * The network address in CIDR format
 * @member {String} Base
 */


SystemInfoDefaultAddressPools.prototype['Base'] = undefined;
/**
 * The network pool size
 * @member {Number} Size
 */

SystemInfoDefaultAddressPools.prototype['Size'] = undefined;
var _default = SystemInfoDefaultAddressPools;
exports["default"] = _default;