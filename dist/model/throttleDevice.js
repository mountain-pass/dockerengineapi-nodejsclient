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
 * The ThrottleDevice model module.
 * @module model/ThrottleDevice
 * @version 1.41
 */
var ThrottleDevice = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ThrottleDevice</code>.
   * @alias module:model/ThrottleDevice
   */
  function ThrottleDevice() {
    _classCallCheck(this, ThrottleDevice);

    ThrottleDevice.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ThrottleDevice, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ThrottleDevice</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ThrottleDevice} obj Optional instance to populate.
     * @return {module:model/ThrottleDevice} The populated <code>ThrottleDevice</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ThrottleDevice();

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }

        if (data.hasOwnProperty('Rate')) {
          obj['Rate'] = _ApiClient["default"].convertToType(data['Rate'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ThrottleDevice;
}();
/**
 * Device path
 * @member {String} Path
 */


ThrottleDevice.prototype['Path'] = undefined;
/**
 * Rate
 * @member {Number} Rate
 */

ThrottleDevice.prototype['Rate'] = undefined;
var _default = ThrottleDevice;
exports["default"] = _default;