"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ObjectVersion = _interopRequireDefault(require("./ObjectVersion"));

var _TaskSpec = _interopRequireDefault(require("./TaskSpec"));

var _TaskState = _interopRequireDefault(require("./TaskState"));

var _TaskStatus = _interopRequireDefault(require("./TaskStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Task model module.
 * @module model/Task
 * @version 1.41
 */
var Task = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Task</code>.
   * @alias module:model/Task
   */
  function Task() {
    _classCallCheck(this, Task);

    Task.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Task, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Task} obj Optional instance to populate.
     * @return {module:model/Task} The populated <code>Task</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Task();

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

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Spec')) {
          obj['Spec'] = _TaskSpec["default"].constructFromObject(data['Spec']);
        }

        if (data.hasOwnProperty('ServiceID')) {
          obj['ServiceID'] = _ApiClient["default"].convertToType(data['ServiceID'], 'String');
        }

        if (data.hasOwnProperty('Slot')) {
          obj['Slot'] = _ApiClient["default"].convertToType(data['Slot'], 'Number');
        }

        if (data.hasOwnProperty('NodeID')) {
          obj['NodeID'] = _ApiClient["default"].convertToType(data['NodeID'], 'String');
        }

        if (data.hasOwnProperty('AssignedGenericResources')) {
          obj['AssignedGenericResources'] = _ApiClient["default"].convertToType(data['AssignedGenericResources'], [Object]);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _TaskStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('DesiredState')) {
          obj['DesiredState'] = _TaskState["default"].constructFromObject(data['DesiredState']);
        }

        if (data.hasOwnProperty('JobIteration')) {
          obj['JobIteration'] = _ObjectVersion["default"].constructFromObject(data['JobIteration']);
        }
      }

      return obj;
    }
  }]);

  return Task;
}();
/**
 * The ID of the task.
 * @member {String} ID
 */


Task.prototype['ID'] = undefined;
/**
 * @member {module:model/ObjectVersion} Version
 */

Task.prototype['Version'] = undefined;
/**
 * @member {String} CreatedAt
 */

Task.prototype['CreatedAt'] = undefined;
/**
 * @member {String} UpdatedAt
 */

Task.prototype['UpdatedAt'] = undefined;
/**
 * Name of the task.
 * @member {String} Name
 */

Task.prototype['Name'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

Task.prototype['Labels'] = undefined;
/**
 * @member {module:model/TaskSpec} Spec
 */

Task.prototype['Spec'] = undefined;
/**
 * The ID of the service this task is part of.
 * @member {String} ServiceID
 */

Task.prototype['ServiceID'] = undefined;
/**
 * @member {Number} Slot
 */

Task.prototype['Slot'] = undefined;
/**
 * The ID of the node that this task is on.
 * @member {String} NodeID
 */

Task.prototype['NodeID'] = undefined;
/**
 * User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`). 
 * @member {Array.<Object>} AssignedGenericResources
 */

Task.prototype['AssignedGenericResources'] = undefined;
/**
 * @member {module:model/TaskStatus} Status
 */

Task.prototype['Status'] = undefined;
/**
 * @member {module:model/TaskState} DesiredState
 */

Task.prototype['DesiredState'] = undefined;
/**
 * @member {module:model/ObjectVersion} JobIteration
 */

Task.prototype['JobIteration'] = undefined;
var _default = Task;
exports["default"] = _default;