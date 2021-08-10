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
 * The TaskSpecRestartPolicy model module.
 * @module model/TaskSpecRestartPolicy
 * @version 1.41
 */
var TaskSpecRestartPolicy = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecRestartPolicy</code>.
   * Specification for the restart policy which applies to containers created as part of this service. 
   * @alias module:model/TaskSpecRestartPolicy
   */
  function TaskSpecRestartPolicy() {
    _classCallCheck(this, TaskSpecRestartPolicy);

    TaskSpecRestartPolicy.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecRestartPolicy, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecRestartPolicy</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecRestartPolicy} obj Optional instance to populate.
     * @return {module:model/TaskSpecRestartPolicy} The populated <code>TaskSpecRestartPolicy</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecRestartPolicy();

        if (data.hasOwnProperty('Condition')) {
          obj['Condition'] = _ApiClient["default"].convertToType(data['Condition'], 'String');
        }

        if (data.hasOwnProperty('Delay')) {
          obj['Delay'] = _ApiClient["default"].convertToType(data['Delay'], 'Number');
        }

        if (data.hasOwnProperty('MaxAttempts')) {
          obj['MaxAttempts'] = _ApiClient["default"].convertToType(data['MaxAttempts'], 'Number');
        }

        if (data.hasOwnProperty('Window')) {
          obj['Window'] = _ApiClient["default"].convertToType(data['Window'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TaskSpecRestartPolicy;
}();
/**
 * Condition for restart.
 * @member {module:model/TaskSpecRestartPolicy.ConditionEnum} Condition
 */


TaskSpecRestartPolicy.prototype['Condition'] = undefined;
/**
 * Delay between restart attempts.
 * @member {Number} Delay
 */

TaskSpecRestartPolicy.prototype['Delay'] = undefined;
/**
 * Maximum attempts to restart a given container before giving up (default value is 0, which is ignored). 
 * @member {Number} MaxAttempts
 * @default 0
 */

TaskSpecRestartPolicy.prototype['MaxAttempts'] = 0;
/**
 * Windows is the time window used to evaluate the restart policy (default value is 0, which is unbounded). 
 * @member {Number} Window
 * @default 0
 */

TaskSpecRestartPolicy.prototype['Window'] = 0;
/**
 * Allowed values for the <code>Condition</code> property.
 * @enum {String}
 * @readonly
 */

TaskSpecRestartPolicy['ConditionEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "on-failure"
   * @const
   */
  "on-failure": "on-failure",

  /**
   * value: "any"
   * @const
   */
  "any": "any"
};
var _default = TaskSpecRestartPolicy;
exports["default"] = _default;