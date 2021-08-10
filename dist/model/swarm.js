"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClusterInfo = _interopRequireDefault(require("./ClusterInfo"));

var _JoinTokens = _interopRequireDefault(require("./JoinTokens"));

var _ObjectVersion = _interopRequireDefault(require("./ObjectVersion"));

var _SwarmAllOf = _interopRequireDefault(require("./SwarmAllOf"));

var _SwarmSpec = _interopRequireDefault(require("./SwarmSpec"));

var _TLSInfo = _interopRequireDefault(require("./TLSInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Swarm model module.
 * @module model/Swarm
 * @version 1.41
 */
var Swarm = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Swarm</code>.
   * @alias module:model/Swarm
   * @implements module:model/ClusterInfo
   * @implements module:model/SwarmAllOf
   */
  function Swarm() {
    _classCallCheck(this, Swarm);

    _ClusterInfo["default"].initialize(this);

    _SwarmAllOf["default"].initialize(this);

    Swarm.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Swarm, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Swarm</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Swarm} obj Optional instance to populate.
     * @return {module:model/Swarm} The populated <code>Swarm</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Swarm();

        _ClusterInfo["default"].constructFromObject(data, obj);

        _SwarmAllOf["default"].constructFromObject(data, obj);

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

        if (data.hasOwnProperty('JoinTokens')) {
          obj['JoinTokens'] = _JoinTokens["default"].constructFromObject(data['JoinTokens']);
        }
      }

      return obj;
    }
  }]);

  return Swarm;
}();
/**
 * The ID of the swarm.
 * @member {String} ID
 */


Swarm.prototype['ID'] = undefined;
/**
 * @member {module:model/ObjectVersion} Version
 */

Swarm.prototype['Version'] = undefined;
/**
 * Date and time at which the swarm was initialised in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} CreatedAt
 */

Swarm.prototype['CreatedAt'] = undefined;
/**
 * Date and time at which the swarm was last updated in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} UpdatedAt
 */

Swarm.prototype['UpdatedAt'] = undefined;
/**
 * @member {module:model/SwarmSpec} Spec
 */

Swarm.prototype['Spec'] = undefined;
/**
 * @member {module:model/TLSInfo} TLSInfo
 */

Swarm.prototype['TLSInfo'] = undefined;
/**
 * Whether there is currently a root CA rotation in progress for the swarm 
 * @member {Boolean} RootRotationInProgress
 */

Swarm.prototype['RootRotationInProgress'] = undefined;
/**
 * DataPathPort specifies the data path port number for data traffic. Acceptable port range is 1024 to 49151. If no port is set or is set to 0, the default port (4789) is used. 
 * @member {Number} DataPathPort
 */

Swarm.prototype['DataPathPort'] = undefined;
/**
 * Default Address Pool specifies default subnet pools for global scope networks. 
 * @member {Array.<String>} DefaultAddrPool
 */

Swarm.prototype['DefaultAddrPool'] = undefined;
/**
 * SubnetSize specifies the subnet size of the networks created from the default subnet pool. 
 * @member {Number} SubnetSize
 */

Swarm.prototype['SubnetSize'] = undefined;
/**
 * @member {module:model/JoinTokens} JoinTokens
 */

Swarm.prototype['JoinTokens'] = undefined; // Implement ClusterInfo interface:

/**
 * The ID of the swarm.
 * @member {String} ID
 */

_ClusterInfo["default"].prototype['ID'] = undefined;
/**
 * @member {module:model/ObjectVersion} Version
 */

_ClusterInfo["default"].prototype['Version'] = undefined;
/**
 * Date and time at which the swarm was initialised in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} CreatedAt
 */

_ClusterInfo["default"].prototype['CreatedAt'] = undefined;
/**
 * Date and time at which the swarm was last updated in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} UpdatedAt
 */

_ClusterInfo["default"].prototype['UpdatedAt'] = undefined;
/**
 * @member {module:model/SwarmSpec} Spec
 */

_ClusterInfo["default"].prototype['Spec'] = undefined;
/**
 * @member {module:model/TLSInfo} TLSInfo
 */

_ClusterInfo["default"].prototype['TLSInfo'] = undefined;
/**
 * Whether there is currently a root CA rotation in progress for the swarm 
 * @member {Boolean} RootRotationInProgress
 */

_ClusterInfo["default"].prototype['RootRotationInProgress'] = undefined;
/**
 * DataPathPort specifies the data path port number for data traffic. Acceptable port range is 1024 to 49151. If no port is set or is set to 0, the default port (4789) is used. 
 * @member {Number} DataPathPort
 */

_ClusterInfo["default"].prototype['DataPathPort'] = undefined;
/**
 * Default Address Pool specifies default subnet pools for global scope networks. 
 * @member {Array.<String>} DefaultAddrPool
 */

_ClusterInfo["default"].prototype['DefaultAddrPool'] = undefined;
/**
 * SubnetSize specifies the subnet size of the networks created from the default subnet pool. 
 * @member {Number} SubnetSize
 */

_ClusterInfo["default"].prototype['SubnetSize'] = undefined; // Implement SwarmAllOf interface:

/**
 * @member {module:model/JoinTokens} JoinTokens
 */

_SwarmAllOf["default"].prototype['JoinTokens'] = undefined;
var _default = Swarm;
exports["default"] = _default;