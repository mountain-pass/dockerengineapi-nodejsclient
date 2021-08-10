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
 * The HealthConfig model module.
 * @module model/HealthConfig
 * @version 1.41
 */
var HealthConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HealthConfig</code>.
   * A test to perform to check that the container is healthy.
   * @alias module:model/HealthConfig
   */
  function HealthConfig() {
    _classCallCheck(this, HealthConfig);

    HealthConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HealthConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HealthConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HealthConfig} obj Optional instance to populate.
     * @return {module:model/HealthConfig} The populated <code>HealthConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HealthConfig();

        if (data.hasOwnProperty('Test')) {
          obj['Test'] = _ApiClient["default"].convertToType(data['Test'], ['String']);
        }

        if (data.hasOwnProperty('Interval')) {
          obj['Interval'] = _ApiClient["default"].convertToType(data['Interval'], 'Number');
        }

        if (data.hasOwnProperty('Timeout')) {
          obj['Timeout'] = _ApiClient["default"].convertToType(data['Timeout'], 'Number');
        }

        if (data.hasOwnProperty('Retries')) {
          obj['Retries'] = _ApiClient["default"].convertToType(data['Retries'], 'Number');
        }

        if (data.hasOwnProperty('StartPeriod')) {
          obj['StartPeriod'] = _ApiClient["default"].convertToType(data['StartPeriod'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return HealthConfig;
}();
/**
 * The test to perform. Possible values are:  - `[]` inherit healthcheck from image or parent image - `[\"NONE\"]` disable healthcheck - `[\"CMD\", args...]` exec arguments directly - `[\"CMD-SHELL\", command]` run command with system's default shell 
 * @member {Array.<String>} Test
 */


HealthConfig.prototype['Test'] = undefined;
/**
 * The time to wait between checks in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit. 
 * @member {Number} Interval
 */

HealthConfig.prototype['Interval'] = undefined;
/**
 * The time to wait before considering the check to have hung. It should be 0 or at least 1000000 (1 ms). 0 means inherit. 
 * @member {Number} Timeout
 */

HealthConfig.prototype['Timeout'] = undefined;
/**
 * The number of consecutive failures needed to consider a container as unhealthy. 0 means inherit. 
 * @member {Number} Retries
 */

HealthConfig.prototype['Retries'] = undefined;
/**
 * Start period for the container to initialize before starting health-retries countdown in nanoseconds. It should be 0 or at least 1000000 (1 ms). 0 means inherit. 
 * @member {Number} StartPeriod
 */

HealthConfig.prototype['StartPeriod'] = undefined;
var _default = HealthConfig;
exports["default"] = _default;