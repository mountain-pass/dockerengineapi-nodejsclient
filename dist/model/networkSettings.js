"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Address = _interopRequireDefault(require("./Address"));

var _EndpointSettings = _interopRequireDefault(require("./EndpointSettings"));

var _PortBinding = _interopRequireDefault(require("./PortBinding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NetworkSettings model module.
 * @module model/NetworkSettings
 * @version 1.41
 */
var NetworkSettings = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NetworkSettings</code>.
   * NetworkSettings exposes the network settings in the API
   * @alias module:model/NetworkSettings
   */
  function NetworkSettings() {
    _classCallCheck(this, NetworkSettings);

    NetworkSettings.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkSettings, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkSettings</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkSettings} obj Optional instance to populate.
     * @return {module:model/NetworkSettings} The populated <code>NetworkSettings</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkSettings();

        if (data.hasOwnProperty('Bridge')) {
          obj['Bridge'] = _ApiClient["default"].convertToType(data['Bridge'], 'String');
        }

        if (data.hasOwnProperty('SandboxID')) {
          obj['SandboxID'] = _ApiClient["default"].convertToType(data['SandboxID'], 'String');
        }

        if (data.hasOwnProperty('HairpinMode')) {
          obj['HairpinMode'] = _ApiClient["default"].convertToType(data['HairpinMode'], 'Boolean');
        }

        if (data.hasOwnProperty('LinkLocalIPv6Address')) {
          obj['LinkLocalIPv6Address'] = _ApiClient["default"].convertToType(data['LinkLocalIPv6Address'], 'String');
        }

        if (data.hasOwnProperty('LinkLocalIPv6PrefixLen')) {
          obj['LinkLocalIPv6PrefixLen'] = _ApiClient["default"].convertToType(data['LinkLocalIPv6PrefixLen'], 'Number');
        }

        if (data.hasOwnProperty('Ports')) {
          obj['Ports'] = _ApiClient["default"].convertToType(data['Ports'], {
            'String': [_PortBinding["default"]]
          });
        }

        if (data.hasOwnProperty('SandboxKey')) {
          obj['SandboxKey'] = _ApiClient["default"].convertToType(data['SandboxKey'], 'String');
        }

        if (data.hasOwnProperty('SecondaryIPAddresses')) {
          obj['SecondaryIPAddresses'] = _ApiClient["default"].convertToType(data['SecondaryIPAddresses'], [_Address["default"]]);
        }

        if (data.hasOwnProperty('SecondaryIPv6Addresses')) {
          obj['SecondaryIPv6Addresses'] = _ApiClient["default"].convertToType(data['SecondaryIPv6Addresses'], [_Address["default"]]);
        }

        if (data.hasOwnProperty('EndpointID')) {
          obj['EndpointID'] = _ApiClient["default"].convertToType(data['EndpointID'], 'String');
        }

        if (data.hasOwnProperty('Gateway')) {
          obj['Gateway'] = _ApiClient["default"].convertToType(data['Gateway'], 'String');
        }

        if (data.hasOwnProperty('GlobalIPv6Address')) {
          obj['GlobalIPv6Address'] = _ApiClient["default"].convertToType(data['GlobalIPv6Address'], 'String');
        }

        if (data.hasOwnProperty('GlobalIPv6PrefixLen')) {
          obj['GlobalIPv6PrefixLen'] = _ApiClient["default"].convertToType(data['GlobalIPv6PrefixLen'], 'Number');
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

        if (data.hasOwnProperty('MacAddress')) {
          obj['MacAddress'] = _ApiClient["default"].convertToType(data['MacAddress'], 'String');
        }

        if (data.hasOwnProperty('Networks')) {
          obj['Networks'] = _ApiClient["default"].convertToType(data['Networks'], {
            'String': _EndpointSettings["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return NetworkSettings;
}();
/**
 * Name of the network'a bridge (for example, `docker0`).
 * @member {String} Bridge
 */


NetworkSettings.prototype['Bridge'] = undefined;
/**
 * SandboxID uniquely represents a container's network stack.
 * @member {String} SandboxID
 */

NetworkSettings.prototype['SandboxID'] = undefined;
/**
 * Indicates if hairpin NAT should be enabled on the virtual interface. 
 * @member {Boolean} HairpinMode
 */

NetworkSettings.prototype['HairpinMode'] = undefined;
/**
 * IPv6 unicast address using the link-local prefix.
 * @member {String} LinkLocalIPv6Address
 */

NetworkSettings.prototype['LinkLocalIPv6Address'] = undefined;
/**
 * Prefix length of the IPv6 unicast address.
 * @member {Number} LinkLocalIPv6PrefixLen
 */

NetworkSettings.prototype['LinkLocalIPv6PrefixLen'] = undefined;
/**
 * PortMap describes the mapping of container ports to host ports, using the container's port-number and protocol as key in the format `<port>/<protocol>`, for example, `80/udp`.  If a container's port is mapped for multiple protocols, separate entries are added to the mapping table. 
 * @member {Object.<String, Array.<module:model/PortBinding>>} Ports
 */

NetworkSettings.prototype['Ports'] = undefined;
/**
 * SandboxKey identifies the sandbox
 * @member {String} SandboxKey
 */

NetworkSettings.prototype['SandboxKey'] = undefined;
/**
 * 
 * @member {Array.<module:model/Address>} SecondaryIPAddresses
 */

NetworkSettings.prototype['SecondaryIPAddresses'] = undefined;
/**
 * 
 * @member {Array.<module:model/Address>} SecondaryIPv6Addresses
 */

NetworkSettings.prototype['SecondaryIPv6Addresses'] = undefined;
/**
 * EndpointID uniquely represents a service endpoint in a Sandbox.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
 * @member {String} EndpointID
 */

NetworkSettings.prototype['EndpointID'] = undefined;
/**
 * Gateway address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
 * @member {String} Gateway
 */

NetworkSettings.prototype['Gateway'] = undefined;
/**
 * Global IPv6 address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
 * @member {String} GlobalIPv6Address
 */

NetworkSettings.prototype['GlobalIPv6Address'] = undefined;
/**
 * Mask length of the global IPv6 address.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
 * @member {Number} GlobalIPv6PrefixLen
 */

NetworkSettings.prototype['GlobalIPv6PrefixLen'] = undefined;
/**
 * IPv4 address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
 * @member {String} IPAddress
 */

NetworkSettings.prototype['IPAddress'] = undefined;
/**
 * Mask length of the IPv4 address.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
 * @member {Number} IPPrefixLen
 */

NetworkSettings.prototype['IPPrefixLen'] = undefined;
/**
 * IPv6 gateway address for this network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
 * @member {String} IPv6Gateway
 */

NetworkSettings.prototype['IPv6Gateway'] = undefined;
/**
 * MAC address for the container on the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
 * @member {String} MacAddress
 */

NetworkSettings.prototype['MacAddress'] = undefined;
/**
 * Information about all networks that the container is connected to. 
 * @member {Object.<String, module:model/EndpointSettings>} Networks
 */

NetworkSettings.prototype['Networks'] = undefined;
var _default = NetworkSettings;
exports["default"] = _default;