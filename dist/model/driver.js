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
 * The Driver model module.
 * @module model/Driver
 * @version 1.41
 */
var Driver = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Driver</code>.
   * Driver represents a driver (network, logging, secrets).
   * @alias module:model/Driver
   * @param name {String} Name of the driver.
   */
  function Driver(name) {
    _classCallCheck(this, Driver);

    Driver.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Driver, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['Name'] = name;
    }
    /**
     * Constructs a <code>Driver</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Driver} obj Optional instance to populate.
     * @return {module:model/Driver} The populated <code>Driver</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Driver();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return Driver;
}();
/**
 * Name of the driver.
 * @member {String} Name
 */


Driver.prototype['Name'] = undefined;
/**
 * Key/value map of driver-specific options.
 * @member {Object.<String, String>} Options
 */

Driver.prototype['Options'] = undefined;
var _default = Driver;
exports["default"] = _default;