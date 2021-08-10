"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EndpointIPAMConfig = _interopRequireDefault(require("./EndpointIPAMConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EndpointSettings model module.
 * @module model/EndpointSettings
 * @version 1.41
 */
var EndpointSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EndpointSettings</code>.
   * Configuration for a network endpoint.
   * @alias module:model/EndpointSettings
   */
  function EndpointSettings() {
    _classCallCheck(this, EndpointSettings);

    EndpointSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EndpointSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EndpointSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointSettings} obj Optional instance to populate.
     * @return {module:model/EndpointSettings} The populated <code>EndpointSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EndpointSettings();

        if (data.hasOwnProperty('IPAMConfig')) {
          obj['IPAMConfig'] = _EndpointIPAMConfig["default"].constructFromObject(data['IPAMConfig']);
        }

        if (data.hasOwnProperty('Links')) {
          obj['Links'] = _ApiClient["default"].convertToType(data['Links'], ['String']);
        }

        if (data.hasOwnProperty('Aliases')) {
          obj['Aliases'] = _ApiClient["default"].convertToType(data['Aliases'], ['String']);
        }

        if (data.hasOwnProperty('NetworkID')) {
          obj['NetworkID'] = _ApiClient["default"].convertToType(data['NetworkID'], 'String');
        }

        if (data.hasOwnProperty('EndpointID')) {
          obj['EndpointID'] = _ApiClient["default"].convertToType(data['EndpointID'], 'String');
        }

        if (data.hasOwnProperty('Gateway')) {
          obj['Gateway'] = _ApiClient["default"].convertToType(data['Gateway'], 'String');
        }

        if (data.hasOwnProperty('IPAddress')) {
          obj['IPAddress'] = _ApiClient["default"].convertToType(data['IPAddress'], 'String');
        }

        if (data.hasOwnProperty('IPPrefixLen')) {
          obj['IPPrefixLen'] = _ApiClient["default"].convertToType(data['IPPrefixLen'], 'Number');
        }

        if (data.hasOwnProperty('IPv6Gateway')) {
          obj['IPv6Gateway'] = _ApiClient["default"].convertToType(data['IPv6Gateway'], 'String');
        }

        if (data.hasOwnProperty('GlobalIPv6Address')) {
          obj['GlobalIPv6Address'] = _ApiClient["default"].convertToType(data['GlobalIPv6Address'], 'String');
        }

        if (data.hasOwnProperty('GlobalIPv6PrefixLen')) {
          obj['GlobalIPv6PrefixLen'] = _ApiClient["default"].convertToType(data['GlobalIPv6PrefixLen'], 'Number');
        }

        if (data.hasOwnProperty('MacAddress')) {
          obj['MacAddress'] = _ApiClient["default"].convertToType(data['MacAddress'], 'String');
        }

        if (data.hasOwnProperty('DriverOpts')) {
          obj['DriverOpts'] = _ApiClient["default"].convertToType(data['DriverOpts'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return EndpointSettings;
}();
/**
 * @member {module:model/EndpointIPAMConfig} IPAMConfig
 */


EndpointSettings.prototype['IPAMConfig'] = undefined;
/**
 * @member {Array.<String>} Links
 */

EndpointSettings.prototype['Links'] = undefined;
/**
 * @member {Array.<String>} Aliases
 */

EndpointSettings.prototype['Aliases'] = undefined;
/**
 * Unique ID of the network. 
 * @member {String} NetworkID
 */

EndpointSettings.prototype['NetworkID'] = undefined;
/**
 * Unique ID for the service endpoint in a Sandbox. 
 * @member {String} EndpointID
 */

EndpointSettings.prototype['EndpointID'] = undefined;
/**
 * Gateway address for this network. 
 * @member {String} Gateway
 */

EndpointSettings.prototype['Gateway'] = undefined;
/**
 * IPv4 address. 
 * @member {String} IPAddress
 */

EndpointSettings.prototype['IPAddress'] = undefined;
/**
 * Mask length of the IPv4 address. 
 * @member {Number} IPPrefixLen
 */

EndpointSettings.prototype['IPPrefixLen'] = undefined;
/**
 * IPv6 gateway address. 
 * @member {String} IPv6Gateway
 */

EndpointSettings.prototype['IPv6Gateway'] = undefined;
/**
 * Global IPv6 address. 
 * @member {String} GlobalIPv6Address
 */

EndpointSettings.prototype['GlobalIPv6Address'] = undefined;
/**
 * Mask length of the global IPv6 address. 
 * @member {Number} GlobalIPv6PrefixLen
 */

EndpointSettings.prototype['GlobalIPv6PrefixLen'] = undefined;
/**
 * MAC address for the endpoint on this network. 
 * @member {String} MacAddress
 */

EndpointSettings.prototype['MacAddress'] = undefined;
/**
 * DriverOpts is a mapping of driver options and values. These options are passed directly to the driver and are driver specific. 
 * @member {Object.<String, String>} DriverOpts
 */

EndpointSettings.prototype['DriverOpts'] = undefined;
var _default = EndpointSettings;
exports["default"] = _default;