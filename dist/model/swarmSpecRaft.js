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
 * The SwarmSpecRaft model module.
 * @module model/SwarmSpecRaft
 * @version 1.41
 */
var SwarmSpecRaft = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpecRaft</code>.
   * Raft configuration.
   * @alias module:model/SwarmSpecRaft
   */
  function SwarmSpecRaft() {
    _classCallCheck(this, SwarmSpecRaft);

    SwarmSpecRaft.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpecRaft, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpecRaft</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpecRaft} obj Optional instance to populate.
     * @return {module:model/SwarmSpecRaft} The populated <code>SwarmSpecRaft</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpecRaft();

        if (data.hasOwnProperty('SnapshotInterval')) {
          obj['SnapshotInterval'] = _ApiClient["default"].convertToType(data['SnapshotInterval'], 'Number');
        }

        if (data.hasOwnProperty('KeepOldSnapshots')) {
          obj['KeepOldSnapshots'] = _ApiClient["default"].convertToType(data['KeepOldSnapshots'], 'Number');
        }

        if (data.hasOwnProperty('LogEntriesForSlowFollowers')) {
          obj['LogEntriesForSlowFollowers'] = _ApiClient["default"].convertToType(data['LogEntriesForSlowFollowers'], 'Number');
        }

        if (data.hasOwnProperty('ElectionTick')) {
          obj['ElectionTick'] = _ApiClient["default"].convertToType(data['ElectionTick'], 'Number');
        }

        if (data.hasOwnProperty('HeartbeatTick')) {
          obj['HeartbeatTick'] = _ApiClient["default"].convertToType(data['HeartbeatTick'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SwarmSpecRaft;
}();
/**
 * The number of log entries between snapshots.
 * @member {Number} SnapshotInterval
 */


SwarmSpecRaft.prototype['SnapshotInterval'] = undefined;
/**
 * The number of snapshots to keep beyond the current snapshot. 
 * @member {Number} KeepOldSnapshots
 */

SwarmSpecRaft.prototype['KeepOldSnapshots'] = undefined;
/**
 * The number of log entries to keep around to sync up slow followers after a snapshot is created. 
 * @member {Number} LogEntriesForSlowFollowers
 */

SwarmSpecRaft.prototype['LogEntriesForSlowFollowers'] = undefined;
/**
 * The number of ticks that a follower will wait for a message from the leader before becoming a candidate and starting an election. `ElectionTick` must be greater than `HeartbeatTick`.  A tick currently defaults to one second, so these translate directly to seconds currently, but this is NOT guaranteed. 
 * @member {Number} ElectionTick
 */

SwarmSpecRaft.prototype['ElectionTick'] = undefined;
/**
 * The number of ticks between heartbeats. Every HeartbeatTick ticks, the leader will send a heartbeat to the followers.  A tick currently defaults to one second, so these translate directly to seconds currently, but this is NOT guaranteed. 
 * @member {Number} HeartbeatTick
 */

SwarmSpecRaft.prototype['HeartbeatTick'] = undefined;
var _default = SwarmSpecRaft;
exports["default"] = _default;