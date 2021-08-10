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
 * The Address model module.
 * @module model/Address
 * @version 1.41
 */
var Address = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Address</code>.
   * Address represents an IPv4 or IPv6 IP address.
   * @alias module:model/Address
   */
  function Address() {
    _classCallCheck(this, Address);

    Address.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Address, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Address</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Address} obj Optional instance to populate.
     * @return {module:model/Address} The populated <code>Address</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Address();

        if (data.hasOwnProperty('Addr')) {
          obj['Addr'] = _ApiClient["default"].convertToType(data['Addr'], 'String');
        }

        if (data.hasOwnProperty('PrefixLen')) {
          obj['PrefixLen'] = _ApiClient["default"].convertToType(data['PrefixLen'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Address;
}();
/**
 * IP address.
 * @member {String} Addr
 */


Address.prototype['Addr'] = undefined;
/**
 * Mask length of the IP address.
 * @member {Number} PrefixLen
 */

Address.prototype['PrefixLen'] = undefined;
var _default = Address;
exports["default"] = _default;