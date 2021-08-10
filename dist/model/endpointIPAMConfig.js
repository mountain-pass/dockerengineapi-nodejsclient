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
 * The EndpointIPAMConfig model module.
 * @module model/EndpointIPAMConfig
 * @version 1.41
 */
var EndpointIPAMConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EndpointIPAMConfig</code>.
   * EndpointIPAMConfig represents an endpoint&#39;s IPAM configuration. 
   * @alias module:model/EndpointIPAMConfig
   */
  function EndpointIPAMConfig() {
    _classCallCheck(this, EndpointIPAMConfig);

    EndpointIPAMConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EndpointIPAMConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EndpointIPAMConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointIPAMConfig} obj Optional instance to populate.
     * @return {module:model/EndpointIPAMConfig} The populated <code>EndpointIPAMConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EndpointIPAMConfig();

        if (data.hasOwnProperty('IPv4Address')) {
          obj['IPv4Address'] = _ApiClient["default"].convertToType(data['IPv4Address'], 'String');
        }

        if (data.hasOwnProperty('IPv6Address')) {
          obj['IPv6Address'] = _ApiClient["default"].convertToType(data['IPv6Address'], 'String');
        }

        if (data.hasOwnProperty('LinkLocalIPs')) {
          obj['LinkLocalIPs'] = _ApiClient["default"].convertToType(data['LinkLocalIPs'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return EndpointIPAMConfig;
}();
/**
 * @member {String} IPv4Address
 */


EndpointIPAMConfig.prototype['IPv4Address'] = undefined;
/**
 * @member {String} IPv6Address
 */

EndpointIPAMConfig.prototype['IPv6Address'] = undefined;
/**
 * @member {Array.<String>} LinkLocalIPs
 */

EndpointIPAMConfig.prototype['LinkLocalIPs'] = undefined;
var _default = EndpointIPAMConfig;
exports["default"] = _default;