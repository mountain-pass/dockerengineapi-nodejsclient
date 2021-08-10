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
 * The HealthcheckResult model module.
 * @module model/HealthcheckResult
 * @version 1.41
 */
var HealthcheckResult = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HealthcheckResult</code>.
   * HealthcheckResult stores information about a single run of a healthcheck probe 
   * @alias module:model/HealthcheckResult
   */
  function HealthcheckResult() {
    _classCallCheck(this, HealthcheckResult);

    HealthcheckResult.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HealthcheckResult, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HealthcheckResult</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HealthcheckResult} obj Optional instance to populate.
     * @return {module:model/HealthcheckResult} The populated <code>HealthcheckResult</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HealthcheckResult();

        if (data.hasOwnProperty('Start')) {
          obj['Start'] = _ApiClient["default"].convertToType(data['Start'], 'Date');
        }

        if (data.hasOwnProperty('End')) {
          obj['End'] = _ApiClient["default"].convertToType(data['End'], 'String');
        }

        if (data.hasOwnProperty('ExitCode')) {
          obj['ExitCode'] = _ApiClient["default"].convertToType(data['ExitCode'], 'Number');
        }

        if (data.hasOwnProperty('Output')) {
          obj['Output'] = _ApiClient["default"].convertToType(data['Output'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HealthcheckResult;
}();
/**
 * Date and time at which this check started in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {Date} Start
 */


HealthcheckResult.prototype['Start'] = undefined;
/**
 * Date and time at which this check ended in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} End
 */

HealthcheckResult.prototype['End'] = undefined;
/**
 * ExitCode meanings:  - `0` healthy - `1` unhealthy - `2` reserved (considered unhealthy) - other values: error running probe 
 * @member {Number} ExitCode
 */

HealthcheckResult.prototype['ExitCode'] = undefined;
/**
 * Output from last check
 * @member {String} Output
 */

HealthcheckResult.prototype['Output'] = undefined;
var _default = HealthcheckResult;
exports["default"] = _default;