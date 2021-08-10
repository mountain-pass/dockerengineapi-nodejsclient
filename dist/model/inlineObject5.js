"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SwarmSpec = _interopRequireDefault(require("./SwarmSpec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject5 model module.
 * @module model/InlineObject5
 * @version 1.41
 */
var InlineObject5 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject5</code>.
   * @alias module:model/InlineObject5
   */
  function InlineObject5() {
    _classCallCheck(this, InlineObject5);

    InlineObject5.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject5, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject5</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject5} obj Optional instance to populate.
     * @return {module:model/InlineObject5} The populated <code>InlineObject5</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject5();

        if (data.hasOwnProperty('ListenAddr')) {
          obj['ListenAddr'] = _ApiClient["default"].convertToType(data['ListenAddr'], 'String');
        }

        if (data.hasOwnProperty('AdvertiseAddr')) {
          obj['AdvertiseAddr'] = _ApiClient["default"].convertToType(data['AdvertiseAddr'], 'String');
        }

        if (data.hasOwnProperty('DataPathAddr')) {
          obj['DataPathAddr'] = _ApiClient["default"].convertToType(data['DataPathAddr'], 'String');
        }

        if (data.hasOwnProperty('DataPathPort')) {
          obj['DataPathPort'] = _ApiClient["default"].convertToType(data['DataPathPort'], 'Number');
        }

        if (data.hasOwnProperty('DefaultAddrPool')) {
          obj['DefaultAddrPool'] = _ApiClient["default"].convertToType(data['DefaultAddrPool'], ['String']);
        }

        if (data.hasOwnProperty('ForceNewCluster')) {
          obj['ForceNewCluster'] = _ApiClient["default"].convertToType(data['ForceNewCluster'], 'Boolean');
        }

        if (data.hasOwnProperty('SubnetSize')) {
          obj['SubnetSize'] = _ApiClient["default"].convertToType(data['SubnetSize'], 'Number');
        }

        if (data.hasOwnProperty('Spec')) {
          obj['Spec'] = _SwarmSpec["default"].constructFromObject(data['Spec']);
        }
      }

      return obj;
    }
  }]);

  return InlineObject5;
}();
/**
 * Listen address used for inter-manager communication, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP). This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the default swarm listening port is used. 
 * @member {String} ListenAddr
 */


InlineObject5.prototype['ListenAddr'] = undefined;
/**
 * Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible. 
 * @member {String} AdvertiseAddr
 */

InlineObject5.prototype['AdvertiseAddr'] = undefined;
/**
 * Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`, or an interface, like `eth0`. If `DataPathAddr` is unspecified, the same address as `AdvertiseAddr` is used.  The `DataPathAddr` specifies the address that global scope network drivers will publish towards other  nodes in order to reach the containers running on this node. Using this parameter it is possible to separate the container data traffic from the management traffic of the cluster. 
 * @member {String} DataPathAddr
 */

InlineObject5.prototype['DataPathAddr'] = undefined;
/**
 * DataPathPort specifies the data path port number for data traffic. Acceptable port range is 1024 to 49151. if no port is set or is set to 0, default port 4789 will be used. 
 * @member {Number} DataPathPort
 */

InlineObject5.prototype['DataPathPort'] = undefined;
/**
 * Default Address Pool specifies default subnet pools for global scope networks. 
 * @member {Array.<String>} DefaultAddrPool
 */

InlineObject5.prototype['DefaultAddrPool'] = undefined;
/**
 * Force creation of a new swarm.
 * @member {Boolean} ForceNewCluster
 */

InlineObject5.prototype['ForceNewCluster'] = undefined;
/**
 * SubnetSize specifies the subnet size of the networks created from the default subnet pool. 
 * @member {Number} SubnetSize
 */

InlineObject5.prototype['SubnetSize'] = undefined;
/**
 * @member {module:model/SwarmSpec} Spec
 */

InlineObject5.prototype['Spec'] = undefined;
var _default = InlineObject5;
exports["default"] = _default;