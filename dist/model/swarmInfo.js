"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ClusterInfo = _interopRequireDefault(require("./ClusterInfo"));

var _LocalNodeState = _interopRequireDefault(require("./LocalNodeState"));

var _PeerNode = _interopRequireDefault(require("./PeerNode"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SwarmInfo model module.
 * @module model/SwarmInfo
 * @version 1.41
 */
var SwarmInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmInfo</code>.
   * Represents generic information about swarm. 
   * @alias module:model/SwarmInfo
   */
  function SwarmInfo() {
    _classCallCheck(this, SwarmInfo);

    SwarmInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmInfo} obj Optional instance to populate.
     * @return {module:model/SwarmInfo} The populated <code>SwarmInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmInfo();

        if (data.hasOwnProperty('NodeID')) {
          obj['NodeID'] = _ApiClient["default"].convertToType(data['NodeID'], 'String');
        }

        if (data.hasOwnProperty('NodeAddr')) {
          obj['NodeAddr'] = _ApiClient["default"].convertToType(data['NodeAddr'], 'String');
        }

        if (data.hasOwnProperty('LocalNodeState')) {
          obj['LocalNodeState'] = _LocalNodeState["default"].constructFromObject(data['LocalNodeState']);
        }

        if (data.hasOwnProperty('ControlAvailable')) {
          obj['ControlAvailable'] = _ApiClient["default"].convertToType(data['ControlAvailable'], 'Boolean');
        }

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _ApiClient["default"].convertToType(data['Error'], 'String');
        }

        if (data.hasOwnProperty('RemoteManagers')) {
          obj['RemoteManagers'] = _ApiClient["default"].convertToType(data['RemoteManagers'], [_PeerNode["default"]]);
        }

        if (data.hasOwnProperty('Nodes')) {
          obj['Nodes'] = _ApiClient["default"].convertToType(data['Nodes'], 'Number');
        }

        if (data.hasOwnProperty('Managers')) {
          obj['Managers'] = _ApiClient["default"].convertToType(data['Managers'], 'Number');
        }

        if (data.hasOwnProperty('Cluster')) {
          obj['Cluster'] = _ClusterInfo["default"].constructFromObject(data['Cluster']);
        }
      }

      return obj;
    }
  }]);

  return SwarmInfo;
}();
/**
 * Unique identifier of for this node in the swarm.
 * @member {String} NodeID
 * @default ''
 */


SwarmInfo.prototype['NodeID'] = '';
/**
 * IP address at which this node can be reached by other nodes in the swarm. 
 * @member {String} NodeAddr
 * @default ''
 */

SwarmInfo.prototype['NodeAddr'] = '';
/**
 * @member {module:model/LocalNodeState} LocalNodeState
 */

SwarmInfo.prototype['LocalNodeState'] = undefined;
/**
 * @member {Boolean} ControlAvailable
 * @default false
 */

SwarmInfo.prototype['ControlAvailable'] = false;
/**
 * @member {String} Error
 * @default ''
 */

SwarmInfo.prototype['Error'] = '';
/**
 * List of ID's and addresses of other managers in the swarm. 
 * @member {Array.<module:model/PeerNode>} RemoteManagers
 */

SwarmInfo.prototype['RemoteManagers'] = undefined;
/**
 * Total number of nodes in the swarm.
 * @member {Number} Nodes
 */

SwarmInfo.prototype['Nodes'] = undefined;
/**
 * Total number of managers in the swarm.
 * @member {Number} Managers
 */

SwarmInfo.prototype['Managers'] = undefined;
/**
 * @member {module:model/ClusterInfo} Cluster
 */

SwarmInfo.prototype['Cluster'] = undefined;
var _default = SwarmInfo;
exports["default"] = _default;