"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ServiceSpecModeReplicated = _interopRequireDefault(require("./ServiceSpecModeReplicated"));

var _ServiceSpecModeReplicatedJob = _interopRequireDefault(require("./ServiceSpecModeReplicatedJob"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceSpecMode model module.
 * @module model/ServiceSpecMode
 * @version 1.41
 */
var ServiceSpecMode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceSpecMode</code>.
   * Scheduling mode for the service.
   * @alias module:model/ServiceSpecMode
   */
  function ServiceSpecMode() {
    _classCallCheck(this, ServiceSpecMode);

    ServiceSpecMode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceSpecMode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceSpecMode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceSpecMode} obj Optional instance to populate.
     * @return {module:model/ServiceSpecMode} The populated <code>ServiceSpecMode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceSpecMode();

        if (data.hasOwnProperty('Replicated')) {
          obj['Replicated'] = _ServiceSpecModeReplicated["default"].constructFromObject(data['Replicated']);
        }

        if (data.hasOwnProperty('Global')) {
          obj['Global'] = _ApiClient["default"].convertToType(data['Global'], Object);
        }

        if (data.hasOwnProperty('ReplicatedJob')) {
          obj['ReplicatedJob'] = _ServiceSpecModeReplicatedJob["default"].constructFromObject(data['ReplicatedJob']);
        }

        if (data.hasOwnProperty('GlobalJob')) {
          obj['GlobalJob'] = _ApiClient["default"].convertToType(data['GlobalJob'], Object);
        }
      }

      return obj;
    }
  }]);

  return ServiceSpecMode;
}();
/**
 * @member {module:model/ServiceSpecModeReplicated} Replicated
 */


ServiceSpecMode.prototype['Replicated'] = undefined;
/**
 * @member {Object} Global
 */

ServiceSpecMode.prototype['Global'] = undefined;
/**
 * @member {module:model/ServiceSpecModeReplicatedJob} ReplicatedJob
 */

ServiceSpecMode.prototype['ReplicatedJob'] = undefined;
/**
 * The mode used for services which run a task to the completed state on each valid node. 
 * @member {Object} GlobalJob
 */

ServiceSpecMode.prototype['GlobalJob'] = undefined;
var _default = ServiceSpecMode;
exports["default"] = _default;