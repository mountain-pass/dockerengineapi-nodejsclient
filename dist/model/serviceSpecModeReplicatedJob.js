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
 * The ServiceSpecModeReplicatedJob model module.
 * @module model/ServiceSpecModeReplicatedJob
 * @version 1.41
 */
var ServiceSpecModeReplicatedJob = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceSpecModeReplicatedJob</code>.
   * The mode used for services with a finite number of tasks that run to a completed state. 
   * @alias module:model/ServiceSpecModeReplicatedJob
   */
  function ServiceSpecModeReplicatedJob() {
    _classCallCheck(this, ServiceSpecModeReplicatedJob);

    ServiceSpecModeReplicatedJob.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceSpecModeReplicatedJob, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceSpecModeReplicatedJob</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceSpecModeReplicatedJob} obj Optional instance to populate.
     * @return {module:model/ServiceSpecModeReplicatedJob} The populated <code>ServiceSpecModeReplicatedJob</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceSpecModeReplicatedJob();

        if (data.hasOwnProperty('MaxConcurrent')) {
          obj['MaxConcurrent'] = _ApiClient["default"].convertToType(data['MaxConcurrent'], 'Number');
        }

        if (data.hasOwnProperty('TotalCompletions')) {
          obj['TotalCompletions'] = _ApiClient["default"].convertToType(data['TotalCompletions'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ServiceSpecModeReplicatedJob;
}();
/**
 * The maximum number of replicas to run simultaneously. 
 * @member {Number} MaxConcurrent
 * @default 1
 */


ServiceSpecModeReplicatedJob.prototype['MaxConcurrent'] = 1;
/**
 * The total number of replicas desired to reach the Completed state. If unset, will default to the value of `MaxConcurrent` 
 * @member {Number} TotalCompletions
 */

ServiceSpecModeReplicatedJob.prototype['TotalCompletions'] = undefined;
var _default = ServiceSpecModeReplicatedJob;
exports["default"] = _default;