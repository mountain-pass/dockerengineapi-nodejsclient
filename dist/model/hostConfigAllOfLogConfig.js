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
 * The HostConfigAllOfLogConfig model module.
 * @module model/HostConfigAllOfLogConfig
 * @version 1.41
 */
var HostConfigAllOfLogConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HostConfigAllOfLogConfig</code>.
   * The logging configuration for this container
   * @alias module:model/HostConfigAllOfLogConfig
   */
  function HostConfigAllOfLogConfig() {
    _classCallCheck(this, HostConfigAllOfLogConfig);

    HostConfigAllOfLogConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HostConfigAllOfLogConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HostConfigAllOfLogConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HostConfigAllOfLogConfig} obj Optional instance to populate.
     * @return {module:model/HostConfigAllOfLogConfig} The populated <code>HostConfigAllOfLogConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HostConfigAllOfLogConfig();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _ApiClient["default"].convertToType(data['Config'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return HostConfigAllOfLogConfig;
}();
/**
 * @member {module:model/HostConfigAllOfLogConfig.TypeEnum} Type
 */


HostConfigAllOfLogConfig.prototype['Type'] = undefined;
/**
 * @member {Object.<String, String>} Config
 */

HostConfigAllOfLogConfig.prototype['Config'] = undefined;
/**
 * Allowed values for the <code>Type</code> property.
 * @enum {String}
 * @readonly
 */

HostConfigAllOfLogConfig['TypeEnum'] = {
  /**
   * value: "json-file"
   * @const
   */
  "json-file": "json-file",

  /**
   * value: "syslog"
   * @const
   */
  "syslog": "syslog",

  /**
   * value: "journald"
   * @const
   */
  "journald": "journald",

  /**
   * value: "gelf"
   * @const
   */
  "gelf": "gelf",

  /**
   * value: "fluentd"
   * @const
   */
  "fluentd": "fluentd",

  /**
   * value: "awslogs"
   * @const
   */
  "awslogs": "awslogs",

  /**
   * value: "splunk"
   * @const
   */
  "splunk": "splunk",

  /**
   * value: "etwlogs"
   * @const
   */
  "etwlogs": "etwlogs",

  /**
   * value: "none"
   * @const
   */
  "none": "none"
};
var _default = HostConfigAllOfLogConfig;
exports["default"] = _default;