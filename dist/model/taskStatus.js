"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaskState = _interopRequireDefault(require("./TaskState"));

var _TaskStatusContainerStatus = _interopRequireDefault(require("./TaskStatusContainerStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskStatus model module.
 * @module model/TaskStatus
 * @version 1.41
 */
var TaskStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskStatus</code>.
   * @alias module:model/TaskStatus
   */
  function TaskStatus() {
    _classCallCheck(this, TaskStatus);

    TaskStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskStatus} obj Optional instance to populate.
     * @return {module:model/TaskStatus} The populated <code>TaskStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskStatus();

        if (data.hasOwnProperty('Timestamp')) {
          obj['Timestamp'] = _ApiClient["default"].convertToType(data['Timestamp'], 'String');
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _TaskState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }

        if (data.hasOwnProperty('Err')) {
          obj['Err'] = _ApiClient["default"].convertToType(data['Err'], 'String');
        }

        if (data.hasOwnProperty('ContainerStatus')) {
          obj['ContainerStatus'] = _TaskStatusContainerStatus["default"].constructFromObject(data['ContainerStatus']);
        }
      }

      return obj;
    }
  }]);

  return TaskStatus;
}();
/**
 * @member {String} Timestamp
 */


TaskStatus.prototype['Timestamp'] = undefined;
/**
 * @member {module:model/TaskState} State
 */

TaskStatus.prototype['State'] = undefined;
/**
 * @member {String} Message
 */

TaskStatus.prototype['Message'] = undefined;
/**
 * @member {String} Err
 */

TaskStatus.prototype['Err'] = undefined;
/**
 * @member {module:model/TaskStatusContainerStatus} ContainerStatus
 */

TaskStatus.prototype['ContainerStatus'] = undefined;
var _default = TaskStatus;
exports["default"] = _default;