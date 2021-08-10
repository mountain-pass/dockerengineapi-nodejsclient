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
 * The TaskStatusContainerStatus model module.
 * @module model/TaskStatusContainerStatus
 * @version 1.41
 */
var TaskStatusContainerStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskStatusContainerStatus</code>.
   * @alias module:model/TaskStatusContainerStatus
   */
  function TaskStatusContainerStatus() {
    _classCallCheck(this, TaskStatusContainerStatus);

    TaskStatusContainerStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskStatusContainerStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskStatusContainerStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskStatusContainerStatus} obj Optional instance to populate.
     * @return {module:model/TaskStatusContainerStatus} The populated <code>TaskStatusContainerStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskStatusContainerStatus();

        if (data.hasOwnProperty('ContainerID')) {
          obj['ContainerID'] = _ApiClient["default"].convertToType(data['ContainerID'], 'String');
        }

        if (data.hasOwnProperty('PID')) {
          obj['PID'] = _ApiClient["default"].convertToType(data['PID'], 'Number');
        }

        if (data.hasOwnProperty('ExitCode')) {
          obj['ExitCode'] = _ApiClient["default"].convertToType(data['ExitCode'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TaskStatusContainerStatus;
}();
/**
 * @member {String} ContainerID
 */


TaskStatusContainerStatus.prototype['ContainerID'] = undefined;
/**
 * @member {Number} PID
 */

TaskStatusContainerStatus.prototype['PID'] = undefined;
/**
 * @member {Number} ExitCode
 */

TaskStatusContainerStatus.prototype['ExitCode'] = undefined;
var _default = TaskStatusContainerStatus;
exports["default"] = _default;