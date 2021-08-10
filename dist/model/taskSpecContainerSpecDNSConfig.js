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
 * The TaskSpecContainerSpecDNSConfig model module.
 * @module model/TaskSpecContainerSpecDNSConfig
 * @version 1.41
 */
var TaskSpecContainerSpecDNSConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecContainerSpecDNSConfig</code>.
   * Specification for DNS related configurations in resolver configuration file (&#x60;resolv.conf&#x60;). 
   * @alias module:model/TaskSpecContainerSpecDNSConfig
   */
  function TaskSpecContainerSpecDNSConfig() {
    _classCallCheck(this, TaskSpecContainerSpecDNSConfig);

    TaskSpecContainerSpecDNSConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecContainerSpecDNSConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecContainerSpecDNSConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecContainerSpecDNSConfig} obj Optional instance to populate.
     * @return {module:model/TaskSpecContainerSpecDNSConfig} The populated <code>TaskSpecContainerSpecDNSConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecContainerSpecDNSConfig();

        if (data.hasOwnProperty('Nameservers')) {
          obj['Nameservers'] = _ApiClient["default"].convertToType(data['Nameservers'], ['String']);
        }

        if (data.hasOwnProperty('Search')) {
          obj['Search'] = _ApiClient["default"].convertToType(data['Search'], ['String']);
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return TaskSpecContainerSpecDNSConfig;
}();
/**
 * The IP addresses of the name servers.
 * @member {Array.<String>} Nameservers
 */


TaskSpecContainerSpecDNSConfig.prototype['Nameservers'] = undefined;
/**
 * A search list for host-name lookup.
 * @member {Array.<String>} Search
 */

TaskSpecContainerSpecDNSConfig.prototype['Search'] = undefined;
/**
 * A list of internal resolver variables to be modified (e.g., `debug`, `ndots:3`, etc.). 
 * @member {Array.<String>} Options
 */

TaskSpecContainerSpecDNSConfig.prototype['Options'] = undefined;
var _default = TaskSpecContainerSpecDNSConfig;
exports["default"] = _default;