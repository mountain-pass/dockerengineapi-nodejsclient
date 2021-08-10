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
 * The ServiceSpecUpdateConfig model module.
 * @module model/ServiceSpecUpdateConfig
 * @version 1.41
 */
var ServiceSpecUpdateConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceSpecUpdateConfig</code>.
   * Specification for the update strategy of the service.
   * @alias module:model/ServiceSpecUpdateConfig
   */
  function ServiceSpecUpdateConfig() {
    _classCallCheck(this, ServiceSpecUpdateConfig);

    ServiceSpecUpdateConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceSpecUpdateConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceSpecUpdateConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceSpecUpdateConfig} obj Optional instance to populate.
     * @return {module:model/ServiceSpecUpdateConfig} The populated <code>ServiceSpecUpdateConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceSpecUpdateConfig();

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

  return ServiceSpecUpdateConfig;
}();
/**
 * Maximum number of tasks to be updated in one iteration (0 means unlimited parallelism). 
 * @member {Number} Parallelism
 */


ServiceSpecUpdateConfig.prototype['Parallelism'] = undefined;
/**
 * Amount of time between updates, in nanoseconds.
 * @member {Number} Delay
 */

ServiceSpecUpdateConfig.prototype['Delay'] = undefined;
/**
 * Action to take if an updated task fails to run, or stops running during the update. 
 * @member {module:model/ServiceSpecUpdateConfig.FailureActionEnum} FailureAction
 */

ServiceSpecUpdateConfig.prototype['FailureAction'] = undefined;
/**
 * Amount of time to monitor each updated task for failures, in nanoseconds. 
 * @member {Number} Monitor
 */

ServiceSpecUpdateConfig.prototype['Monitor'] = undefined;
/**
 * The fraction of tasks that may fail during an update before the failure action is invoked, specified as a floating point number between 0 and 1. 
 * @member {Number} MaxFailureRatio
 */

ServiceSpecUpdateConfig.prototype['MaxFailureRatio'] = undefined;
/**
 * The order of operations when rolling out an updated task. Either the old task is shut down before the new task is started, or the new task is started before the old task is shut down. 
 * @member {module:model/ServiceSpecUpdateConfig.OrderEnum} Order
 */

ServiceSpecUpdateConfig.prototype['Order'] = undefined;
/**
 * Allowed values for the <code>FailureAction</code> property.
 * @enum {String}
 * @readonly
 */

ServiceSpecUpdateConfig['FailureActionEnum'] = {
  /**
   * value: "continue"
   * @const
   */
  "continue": "continue",

  /**
   * value: "pause"
   * @const
   */
  "pause": "pause",

  /**
   * value: "rollback"
   * @const
   */
  "rollback": "rollback"
};
/**
 * Allowed values for the <code>Order</code> property.
 * @enum {String}
 * @readonly
 */

ServiceSpecUpdateConfig['OrderEnum'] = {
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
var _default = ServiceSpecUpdateConfig;
exports["default"] = _default;