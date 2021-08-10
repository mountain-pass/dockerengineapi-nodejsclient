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
 * The SwarmSpecTaskDefaultsLogDriver model module.
 * @module model/SwarmSpecTaskDefaultsLogDriver
 * @version 1.41
 */
var SwarmSpecTaskDefaultsLogDriver = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpecTaskDefaultsLogDriver</code>.
   * The log driver to use for tasks created in the orchestrator if unspecified by a service.  Updating this value only affects new tasks. Existing tasks continue to use their previously configured log driver until recreated. 
   * @alias module:model/SwarmSpecTaskDefaultsLogDriver
   */
  function SwarmSpecTaskDefaultsLogDriver() {
    _classCallCheck(this, SwarmSpecTaskDefaultsLogDriver);

    SwarmSpecTaskDefaultsLogDriver.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpecTaskDefaultsLogDriver, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpecTaskDefaultsLogDriver</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpecTaskDefaultsLogDriver} obj Optional instance to populate.
     * @return {module:model/SwarmSpecTaskDefaultsLogDriver} The populated <code>SwarmSpecTaskDefaultsLogDriver</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpecTaskDefaultsLogDriver();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return SwarmSpecTaskDefaultsLogDriver;
}();
/**
 * The log driver to use as a default for new tasks. 
 * @member {String} Name
 */


SwarmSpecTaskDefaultsLogDriver.prototype['Name'] = undefined;
/**
 * Driver-specific options for the selectd log driver, specified as key/value pairs. 
 * @member {Object.<String, String>} Options
 */

SwarmSpecTaskDefaultsLogDriver.prototype['Options'] = undefined;
var _default = SwarmSpecTaskDefaultsLogDriver;
exports["default"] = _default;