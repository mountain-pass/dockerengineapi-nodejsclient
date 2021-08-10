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
 * The InlineObject6 model module.
 * @module model/InlineObject6
 * @version 1.41
 */
var InlineObject6 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject6</code>.
   * @alias module:model/InlineObject6
   */
  function InlineObject6() {
    _classCallCheck(this, InlineObject6);

    InlineObject6.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject6, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>InlineObject6</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject6} obj Optional instance to populate.
     * @return {module:model/InlineObject6} The populated <code>InlineObject6</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject6();

        if (data.hasOwnProperty('ListenAddr')) {
          obj['ListenAddr'] = _ApiClient["default"].convertToType(data['ListenAddr'], 'String');
        }

        if (data.hasOwnProperty('AdvertiseAddr')) {
          obj['AdvertiseAddr'] = _ApiClient["default"].convertToType(data['AdvertiseAddr'], 'String');
        }

        if (data.hasOwnProperty('DataPathAddr')) {
          obj['DataPathAddr'] = _ApiClient["default"].convertToType(data['DataPathAddr'], 'String');
        }

        if (data.hasOwnProperty('RemoteAddrs')) {
          obj['RemoteAddrs'] = _ApiClient["default"].convertToType(data['RemoteAddrs'], ['String']);
        }

        if (data.hasOwnProperty('JoinToken')) {
          obj['JoinToken'] = _ApiClient["default"].convertToType(data['JoinToken'], 'String');
        }
      }

      return obj;
    }
  }]);

  return InlineObject6;
}();
/**
 * Listen address used for inter-manager communication if the node gets promoted to manager, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP). 
 * @member {String} ListenAddr
 */


InlineObject6.prototype['ListenAddr'] = undefined;
/**
 * Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible. 
 * @member {String} AdvertiseAddr
 */

InlineObject6.prototype['AdvertiseAddr'] = undefined;
/**
 * Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`, or an interface, like `eth0`. If `DataPathAddr` is unspecified, the same addres as `AdvertiseAddr` is used.  The `DataPathAddr` specifies the address that global scope network drivers will publish towards other nodes in order to reach the containers running on this node. Using this parameter it is possible to separate the container data traffic from the management traffic of the cluster. 
 * @member {String} DataPathAddr
 */

InlineObject6.prototype['DataPathAddr'] = undefined;
/**
 * Addresses of manager nodes already participating in the swarm. 
 * @member {Array.<String>} RemoteAddrs
 */

InlineObject6.prototype['RemoteAddrs'] = undefined;
/**
 * Secret token for joining this swarm.
 * @member {String} JoinToken
 */

InlineObject6.prototype['JoinToken'] = undefined;
var _default = InlineObject6;
exports["default"] = _default;