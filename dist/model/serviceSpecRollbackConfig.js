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
 * The ServiceSpecRollbackConfig model module.
 * @module model/ServiceSpecRollbackConfig
 * @version 1.41
 */
var ServiceSpecRollbackConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceSpecRollbackConfig</code>.
   * Specification for the rollback strategy of the service.
   * @alias module:model/ServiceSpecRollbackConfig
   */
  function ServiceSpecRollbackConfig() {
    _classCallCheck(this, ServiceSpecRollbackConfig);

    ServiceSpecRollbackConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceSpecRollbackConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceSpecRollbackConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceSpecRollbackConfig} obj Optional instance to populate.
     * @return {module:model/ServiceSpecRollbackConfig} The populated <code>ServiceSpecRollbackConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceSpecRollbackConfig();

        if (data.hasOwnProperty('Parallelism')) {
          obj['Parallelism'] = _ApiClient["default"].convertToType(data['Parallelism'], 'Number');
        }

        if (data.hasOwnProperty('Delay')) {
          obj['Delay'] = _ApiClient["default"].convertToType(data['Delay'], 'Number');
        }

        if (data.hasOwnProperty('FailureAction')) {
          obj['FailureAction'] = _ApiClient["default"].convertToType(data['FailureAction'], 'String');
        }

        if (data.hasOwnProperty('Monitor')) {
          obj['Monitor'] = _ApiClient["default"].convertToType(data['Monitor'], 'Number');
        }

        if (data.hasOwnProperty('MaxFailureRatio')) {
          obj['MaxFailureRatio'] = _ApiClient["default"].convertToType(data['MaxFailureRatio'], 'Number');
        }

        if (data.hasOwnProperty('Order')) {
          obj['Order'] = _ApiClient["default"].convertToType(data['Order'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ServiceSpecRollbackConfig;
}();
/**
 * Maximum number of tasks to be rolled back in one iteration (0 means unlimited parallelism). 
 * @member {Number} Parallelism
 */


ServiceSpecRollbackConfig.prototype['Parallelism'] = undefined;
/**
 * Amount of time between rollback iterations, in nanoseconds. 
 * @member {Number} Delay
 */

ServiceSpecRollbackConfig.prototype['Delay'] = undefined;
/**
 * Action to take if an rolled back task fails to run, or stops running during the rollback. 
 * @member {module:model/ServiceSpecRollbackConfig.FailureActionEnum} FailureAction
 */

ServiceSpecRollbackConfig.prototype['FailureAction'] = undefined;
/**
 * Amount of time to monitor each rolled back task for failures, in nanoseconds. 
 * @member {Number} Monitor
 */

ServiceSpecRollbackConfig.prototype['Monitor'] = undefined;
/**
 * The fraction of tasks that may fail during a rollback before the failure action is invoked, specified as a floating point number between 0 and 1. 
 * @member {Number} MaxFailureRatio
 */

ServiceSpecRollbackConfig.prototype['MaxFailureRatio'] = undefined;
/**
 * The order of operations when rolling back a task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down. 
 * @member {module:model/ServiceSpecRollbackConfig.OrderEnum} Order
 */

ServiceSpecRollbackConfig.prototype['Order'] = undefined;
/**
 * Allowed values for the <code>FailureAction</code> property.
 * @enum {String}
 * @readonly
 */

ServiceSpecRollbackConfig['FailureActionEnum'] = {
  /**
   * value: "continue"
   * @const
   */
  "continue": "continue",

  /**
   * value: "pause"
   * @const
   */
  "pause": "pause"
};
/**
 * Allowed values for the <code>Order</code> property.
 * @enum {String}
 * @readonly
 */

ServiceSpecRollbackConfig['OrderEnum'] = {
  /**
   * value: "stop-first"
   * @const
   */
  "stop-first": "stop-first",

  /**
   * value: "start-first"
   * @const
   */
  "start-first": "start-first"
};
var _default = ServiceSpecRollbackConfig;
exports["default"] = _default;