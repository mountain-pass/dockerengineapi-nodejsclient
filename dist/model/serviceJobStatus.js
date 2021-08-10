"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ObjectVersion = _interopRequireDefault(require("./ObjectVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceJobStatus model module.
 * @module model/ServiceJobStatus
 * @version 1.41
 */
var ServiceJobStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceJobStatus</code>.
   * The status of the service when it is in one of ReplicatedJob or GlobalJob modes. Absent on Replicated and Global mode services. The JobIteration is an ObjectVersion, but unlike the Service&#39;s version, does not need to be sent with an update request. 
   * @alias module:model/ServiceJobStatus
   */
  function ServiceJobStatus() {
    _classCallCheck(this, ServiceJobStatus);

    ServiceJobStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceJobStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceJobStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceJobStatus} obj Optional instance to populate.
     * @return {module:model/ServiceJobStatus} The populated <code>ServiceJobStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceJobStatus();

        if (data.hasOwnProperty('JobIteration')) {
          obj['JobIteration'] = _ObjectVersion["default"].constructFromObject(data['JobIteration']);
        }

        if (data.hasOwnProperty('LastExecution')) {
          obj['LastExecution'] = _ApiClient["default"].convertToType(data['LastExecution'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ServiceJobStatus;
}();
/**
 * @member {module:model/ObjectVersion} JobIteration
 */


ServiceJobStatus.prototype['JobIteration'] = undefined;
/**
 * The last time, as observed by the server, that this job was started. 
 * @member {String} LastExecution
 */

ServiceJobStatus.prototype['LastExecution'] = undefined;
var _default = ServiceJobStatus;
exports["default"] = _default;