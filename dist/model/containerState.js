"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Health = _interopRequireDefault(require("./Health"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContainerState model module.
 * @module model/ContainerState
 * @version 1.41
 */
var ContainerState = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerState</code>.
   * ContainerState stores container&#39;s running state. It&#39;s part of ContainerJSONBase and will be returned by the \&quot;inspect\&quot; command. 
   * @alias module:model/ContainerState
   */
  function ContainerState() {
    _classCallCheck(this, ContainerState);

    ContainerState.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerState, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContainerState</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerState} obj Optional instance to populate.
     * @return {module:model/ContainerState} The populated <code>ContainerState</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerState();

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], 'String');
        }

        if (data.hasOwnProperty('Running')) {
          obj['Running'] = _ApiClient["default"].convertToType(data['Running'], 'Boolean');
        }

        if (data.hasOwnProperty('Paused')) {
          obj['Paused'] = _ApiClient["default"].convertToType(data['Paused'], 'Boolean');
        }

        if (data.hasOwnProperty('Restarting')) {
          obj['Restarting'] = _ApiClient["default"].convertToType(data['Restarting'], 'Boolean');
        }

        if (data.hasOwnProperty('OOMKilled')) {
          obj['OOMKilled'] = _ApiClient["default"].convertToType(data['OOMKilled'], 'Boolean');
        }

        if (data.hasOwnProperty('Dead')) {
          obj['Dead'] = _ApiClient["default"].convertToType(data['Dead'], 'Boolean');
        }

        if (data.hasOwnProperty('Pid')) {
          obj['Pid'] = _ApiClient["default"].convertToType(data['Pid'], 'Number');
        }

        if (data.hasOwnProperty('ExitCode')) {
          obj['ExitCode'] = _ApiClient["default"].convertToType(data['ExitCode'], 'Number');
        }

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _ApiClient["default"].convertToType(data['Error'], 'String');
        }

        if (data.hasOwnProperty('StartedAt')) {
          obj['StartedAt'] = _ApiClient["default"].convertToType(data['StartedAt'], 'String');
        }

        if (data.hasOwnProperty('FinishedAt')) {
          obj['FinishedAt'] = _ApiClient["default"].convertToType(data['FinishedAt'], 'String');
        }

        if (data.hasOwnProperty('Health')) {
          obj['Health'] = _Health["default"].constructFromObject(data['Health']);
        }
      }

      return obj;
    }
  }]);

  return ContainerState;
}();
/**
 * String representation of the container state. Can be one of \"created\", \"running\", \"paused\", \"restarting\", \"removing\", \"exited\", or \"dead\". 
 * @member {module:model/ContainerState.StatusEnum} Status
 */


ContainerState.prototype['Status'] = undefined;
/**
 * Whether this container is running.  Note that a running container can be _paused_. The `Running` and `Paused` booleans are not mutually exclusive:  When pausing a container (on Linux), the freezer cgroup is used to suspend all processes in the container. Freezing the process requires the process to be running. As a result, paused containers are both `Running` _and_ `Paused`.  Use the `Status` field instead to determine if a container's state is \"running\". 
 * @member {Boolean} Running
 */

ContainerState.prototype['Running'] = undefined;
/**
 * Whether this container is paused.
 * @member {Boolean} Paused
 */

ContainerState.prototype['Paused'] = undefined;
/**
 * Whether this container is restarting.
 * @member {Boolean} Restarting
 */

ContainerState.prototype['Restarting'] = undefined;
/**
 * Whether this container has been killed because it ran out of memory. 
 * @member {Boolean} OOMKilled
 */

ContainerState.prototype['OOMKilled'] = undefined;
/**
 * @member {Boolean} Dead
 */

ContainerState.prototype['Dead'] = undefined;
/**
 * The process ID of this container
 * @member {Number} Pid
 */

ContainerState.prototype['Pid'] = undefined;
/**
 * The last exit code of this container
 * @member {Number} ExitCode
 */

ContainerState.prototype['ExitCode'] = undefined;
/**
 * @member {String} Error
 */

ContainerState.prototype['Error'] = undefined;
/**
 * The time when this container was last started.
 * @member {String} StartedAt
 */

ContainerState.prototype['StartedAt'] = undefined;
/**
 * The time when this container last exited.
 * @member {String} FinishedAt
 */

ContainerState.prototype['FinishedAt'] = undefined;
/**
 * @member {module:model/Health} Health
 */

ContainerState.prototype['Health'] = undefined;
/**
 * Allowed values for the <code>Status</code> property.
 * @enum {String}
 * @readonly
 */

ContainerState['StatusEnum'] = {
  /**
   * value: "created"
   * @const
   */
  "created": "created",

  /**
   * value: "running"
   * @const
   */
  "running": "running",

  /**
   * value: "paused"
   * @const
   */
  "paused": "paused",

  /**
   * value: "restarting"
   * @const
   */
  "restarting": "restarting",

  /**
   * value: "removing"
   * @const
   */
  "removing": "removing",

  /**
   * value: "exited"
   * @const
   */
  "exited": "exited",

  /**
   * value: "dead"
   * @const
   */
  "dead": "dead"
};
var _default = ContainerState;
exports["default"] = _default;