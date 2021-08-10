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
 * The ServiceServiceStatus model module.
 * @module model/ServiceServiceStatus
 * @version 1.41
 */
var ServiceServiceStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceServiceStatus</code>.
   * The status of the service&#39;s tasks. Provided only when requested as part of a ServiceList operation. 
   * @alias module:model/ServiceServiceStatus
   */
  function ServiceServiceStatus() {
    _classCallCheck(this, ServiceServiceStatus);

    ServiceServiceStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceServiceStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceServiceStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceServiceStatus} obj Optional instance to populate.
     * @return {module:model/ServiceServiceStatus} The populated <code>ServiceServiceStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceServiceStatus();

        if (data.hasOwnProperty('RunningTasks')) {
          obj['RunningTasks'] = _ApiClient["default"].convertToType(data['RunningTasks'], 'Number');
        }

        if (data.hasOwnProperty('DesiredTasks')) {
          obj['DesiredTasks'] = _ApiClient["default"].convertToType(data['DesiredTasks'], 'Number');
        }

        if (data.hasOwnProperty('CompletedTasks')) {
          obj['CompletedTasks'] = _ApiClient["default"].convertToType(data['CompletedTasks'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ServiceServiceStatus;
}();
/**
 * The number of tasks for the service currently in the Running state. 
 * @member {Number} RunningTasks
 */


ServiceServiceStatus.prototype['RunningTasks'] = undefined;
/**
 * The number of tasks for the service desired to be running. For replicated services, this is the replica count from the service spec. For global services, this is computed by taking count of all tasks for the service with a Desired State other than Shutdown. 
 * @member {Number} DesiredTasks
 */

ServiceServiceStatus.prototype['DesiredTasks'] = undefined;
/**
 * The number of tasks for a job that are in the Completed state. This field must be cross-referenced with the service type, as the value of 0 may mean the service is not in a job mode, or it may mean the job-mode service has no tasks yet Completed. 
 * @member {Number} CompletedTasks
 */

ServiceServiceStatus.prototype['CompletedTasks'] = undefined;
var _default = ServiceServiceStatus;
exports["default"] = _default;