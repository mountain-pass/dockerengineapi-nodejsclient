"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ObjectVersion = _interopRequireDefault(require("./ObjectVersion"));

var _SwarmSpec = _interopRequireDefault(require("./SwarmSpec"));

var _TLSInfo = _interopRequireDefault(require("./TLSInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ClusterInfo model module.
 * @module model/ClusterInfo
 * @version 1.41
 */
var ClusterInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ClusterInfo</code>.
   * ClusterInfo represents information about the swarm as is returned by the \&quot;/info\&quot; endpoint. Join-tokens are not included. 
   * @alias module:model/ClusterInfo
   */
  function ClusterInfo() {
    _classCallCheck(this, ClusterInfo);

    ClusterInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ClusterInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ClusterInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ClusterInfo} obj Optional instance to populate.
     * @return {module:model/ClusterInfo} The populated <code>ClusterInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ClusterInfo();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ObjectVersion["default"].constructFromObject(data['Version']);
        }

        if (data.hasOwnProperty('CreatedAt')) {
          obj['CreatedAt'] = _ApiClient["default"].convertToType(data['CreatedAt'], 'String');
        }

        if (data.hasOwnProperty('UpdatedAt')) {
          obj['UpdatedAt'] = _ApiClient["default"].convertToType(data['UpdatedAt'], 'String');
        }

        if (data.hasOwnProperty('Spec')) {
          obj['Spec'] = _SwarmSpec["default"].constructFromObject(data['Spec']);
        }

        if (data.hasOwnProperty('TLSInfo')) {
          obj['TLSInfo'] = _TLSInfo["default"].constructFromObject(data['TLSInfo']);
        }

        if (data.hasOwnProperty('RootRotationInProgress')) {
          obj['RootRotationInProgress'] = _ApiClient["default"].convertToType(data['RootRotationInProgress'], 'Boolean');
        }

        if (data.hasOwnProperty('DataPathPort')) {
          obj['DataPathPort'] = _ApiClient["default"].convertToType(data['DataPathPort'], 'Number');
        }

        if (data.hasOwnProperty('DefaultAddrPool')) {
          obj['DefaultAddrPool'] = _ApiClient["default"].convertToType(data['DefaultAddrPool'], ['String']);
        }

        if (data.hasOwnProperty('SubnetSize')) {
          obj['SubnetSize'] = _ApiClient["default"].convertToType(data['SubnetSize'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ClusterInfo;
}();
/**
 * The ID of the swarm.
 * @member {String} ID
 */


ClusterInfo.prototype['ID'] = undefined;
/**
 * @member {module:model/ObjectVersion} Version
 */

ClusterInfo.prototype['Version'] = undefined;
/**
 * Date and time at which the swarm was initialised in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} CreatedAt
 */

ClusterInfo.prototype['CreatedAt'] = undefined;
/**
 * Date and time at which the swarm was last updated in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} UpdatedAt
 */

ClusterInfo.prototype['UpdatedAt'] = undefined;
/**
 * @member {module:model/SwarmSpec} Spec
 */

ClusterInfo.prototype['Spec'] = undefined;
/**
 * @member {module:model/TLSInfo} TLSInfo
 */

ClusterInfo.prototype['TLSInfo'] = undefined;
/**
 * Whether there is currently a root CA rotation in progress for the swarm 
 * @member {Boolean} RootRotationInProgress
 */

ClusterInfo.prototype['RootRotationInProgress'] = undefined;
/**
 * DataPathPort specifies the data path port number for data traffic. Acceptable port range is 1024 to 49151. If no port is set or is set to 0, the default port (4789) is used. 
 * @member {Number} DataPathPort
 */

ClusterInfo.prototype['DataPathPort'] = undefined;
/**
 * Default Address Pool specifies default subnet pools for global scope networks. 
 * @member {Array.<String>} DefaultAddrPool
 */

ClusterInfo.prototype['DefaultAddrPool'] = undefined;
/**
 * SubnetSize specifies the subnet size of the networks created from the default subnet pool. 
 * @member {Number} SubnetSize
 */

ClusterInfo.prototype['SubnetSize'] = undefined;
var _default = ClusterInfo;
exports["default"] = _default;