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
 * The NetworkContainer model module.
 * @module model/NetworkContainer
 * @version 1.41
 */
var NetworkContainer = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NetworkContainer</code>.
   * @alias module:model/NetworkContainer
   */
  function NetworkContainer() {
    _classCallCheck(this, NetworkContainer);

    NetworkContainer.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkContainer, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkContainer</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkContainer} obj Optional instance to populate.
     * @return {module:model/NetworkContainer} The populated <code>NetworkContainer</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkContainer();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('EndpointID')) {
          obj['EndpointID'] = _ApiClient["default"].convertToType(data['EndpointID'], 'String');
        }

        if (data.hasOwnProperty('MacAddress')) {
          obj['MacAddress'] = _ApiClient["default"].convertToType(data['MacAddress'], 'String');
        }

        if (data.hasOwnProperty('IPv4Address')) {
          obj['IPv4Address'] = _ApiClient["default"].convertToType(data['IPv4Address'], 'String');
        }

        if (data.hasOwnProperty('IPv6Address')) {
          obj['IPv6Address'] = _ApiClient["default"].convertToType(data['IPv6Address'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NetworkContainer;
}();
/**
 * @member {String} Name
 */


NetworkContainer.prototype['Name'] = undefined;
/**
 * @member {String} EndpointID
 */

NetworkContainer.prototype['EndpointID'] = undefined;
/**
 * @member {String} MacAddress
 */

NetworkContainer.prototype['MacAddress'] = undefined;
/**
 * @member {String} IPv4Address
 */

NetworkContainer.prototype['IPv4Address'] = undefined;
/**
 * @member {String} IPv6Address
 */

NetworkContainer.prototype['IPv6Address'] = undefined;
var _default = NetworkContainer;
exports["default"] = _default;