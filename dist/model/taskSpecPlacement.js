"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Platform = _interopRequireDefault(require("./Platform"));

var _TaskSpecPlacementPreferences = _interopRequireDefault(require("./TaskSpecPlacementPreferences"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskSpecPlacement model module.
 * @module model/TaskSpecPlacement
 * @version 1.41
 */
var TaskSpecPlacement = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecPlacement</code>.
   * @alias module:model/TaskSpecPlacement
   */
  function TaskSpecPlacement() {
    _classCallCheck(this, TaskSpecPlacement);

    TaskSpecPlacement.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecPlacement, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecPlacement</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecPlacement} obj Optional instance to populate.
     * @return {module:model/TaskSpecPlacement} The populated <code>TaskSpecPlacement</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecPlacement();

        if (data.hasOwnProperty('Constraints')) {
          obj['Constraints'] = _ApiClient["default"].convertToType(data['Constraints'], ['String']);
        }

        if (data.hasOwnProperty('Preferences')) {
          obj['Preferences'] = _ApiClient["default"].convertToType(data['Preferences'], [_TaskSpecPlacementPreferences["default"]]);
        }

        if (data.hasOwnProperty('MaxReplicas')) {
          obj['MaxReplicas'] = _ApiClient["default"].convertToType(data['MaxReplicas'], 'Number');
        }

        if (data.hasOwnProperty('Platforms')) {
          obj['Platforms'] = _ApiClient["default"].convertToType(data['Platforms'], [_Platform["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TaskSpecPlacement;
}();
/**
 * An array of constraint expressions to limit the set of nodes where a task can be scheduled. Constraint expressions can either use a _match_ (`==`) or _exclude_ (`!=`) rule. Multiple constraints find nodes that satisfy every expression (AND match). Constraints can match node or Docker Engine labels as follows:  node attribute       | matches                        | example ---------------------|--------------------------------|----------------------------------------------- `node.id`            | Node ID                        | `node.id==2ivku8v2gvtg4` `node.hostname`      | Node hostname                  | `node.hostname!=node-2` `node.role`          | Node role (`manager`/`worker`) | `node.role==manager` `node.platform.os`   | Node operating system          | `node.platform.os==windows` `node.platform.arch` | Node architecture              | `node.platform.arch==x86_64` `node.labels`        | User-defined node labels       | `node.labels.security==high` `engine.labels`      | Docker Engine's labels         | `engine.labels.operatingsystem==ubuntu-14.04`  `engine.labels` apply to Docker Engine labels like operating system, drivers, etc. Swarm administrators add `node.labels` for operational purposes by using the [`node update endpoint`](#operation/NodeUpdate). 
 * @member {Array.<String>} Constraints
 */


TaskSpecPlacement.prototype['Constraints'] = undefined;
/**
 * Preferences provide a way to make the scheduler aware of factors such as topology. They are provided in order from highest to lowest precedence. 
 * @member {Array.<module:model/TaskSpecPlacementPreferences>} Preferences
 */

TaskSpecPlacement.prototype['Preferences'] = undefined;
/**
 * Maximum number of replicas for per node (default value is 0, which is unlimited) 
 * @member {Number} MaxReplicas
 * @default 0
 */

TaskSpecPlacement.prototype['MaxReplicas'] = 0;
/**
 * Platforms stores all the platforms that the service's image can run on. This field is used in the platform filter for scheduling. If empty, then the platform filter is off, meaning there are no scheduling restrictions. 
 * @member {Array.<module:model/Platform>} Platforms
 */

TaskSpecPlacement.prototype['Platforms'] = undefined;
var _default = TaskSpecPlacement;
exports["default"] = _default;