"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HealthcheckResult = _interopRequireDefault(require("./HealthcheckResult"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Health model module.
 * @module model/Health
 * @version 1.41
 */
var Health = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Health</code>.
   * Health stores information about the container&#39;s healthcheck results. 
   * @alias module:model/Health
   */
  function Health() {
    _classCallCheck(this, Health);

    Health.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Health, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Health</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Health} obj Optional instance to populate.
     * @return {module:model/Health} The populated <code>Health</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Health();

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], 'String');
        }

        if (data.hasOwnProperty('FailingStreak')) {
          obj['FailingStreak'] = _ApiClient["default"].convertToType(data['FailingStreak'], 'Number');
        }

        if (data.hasOwnProperty('Log')) {
          obj['Log'] = _ApiClient["default"].convertToType(data['Log'], [_HealthcheckResult["default"]]);
        }
      }

      return obj;
    }
  }]);

  return Health;
}();
/**
 * Status is one of `none`, `starting`, `healthy` or `unhealthy`  - \"none\"      Indicates there is no healthcheck - \"starting\"  Starting indicates that the container is not yet ready - \"healthy\"   Healthy indicates that the container is running correctly - \"unhealthy\" Unhealthy indicates that the container has a problem 
 * @member {module:model/Health.StatusEnum} Status
 */


Health.prototype['Status'] = undefined;
/**
 * FailingStreak is the number of consecutive failures
 * @member {Number} FailingStreak
 */

Health.prototype['FailingStreak'] = undefined;
/**
 * Log contains the last few results (oldest first) 
 * @member {Array.<module:model/HealthcheckResult>} Log
 */

Health.prototype['Log'] = undefined;
/**
 * Allowed values for the <code>Status</code> property.
 * @enum {String}
 * @readonly
 */

Health['StatusEnum'] = {
  /**
   * value: "none"
   * @const
   */
  "none": "none",

  /**
   * value: "starting"
   * @const
   */
  "starting": "starting",

  /**
   * value: "healthy"
   * @const
   */
  "healthy": "healthy",

  /**
   * value: "unhealthy"
   * @const
   */
  "unhealthy": "unhealthy"
};
var _default = Health;
exports["default"] = _default;