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
 * The PluginsInfo model module.
 * @module model/PluginsInfo
 * @version 1.41
 */
var PluginsInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginsInfo</code>.
   * Available plugins per type.  &lt;p&gt;&lt;br /&gt;&lt;/p&gt;  &gt; **Note**: Only unmanaged (V1) plugins are included in this list. &gt; V1 plugins are \&quot;lazily\&quot; loaded, and are not returned in this list &gt; if there is no resource using the plugin. 
   * @alias module:model/PluginsInfo
   */
  function PluginsInfo() {
    _classCallCheck(this, PluginsInfo);

    PluginsInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginsInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PluginsInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginsInfo} obj Optional instance to populate.
     * @return {module:model/PluginsInfo} The populated <code>PluginsInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginsInfo();

        if (data.hasOwnProperty('Volume')) {
          obj['Volume'] = _ApiClient["default"].convertToType(data['Volume'], ['String']);
        }

        if (data.hasOwnProperty('Network')) {
          obj['Network'] = _ApiClient["default"].convertToType(data['Network'], ['String']);
        }

        if (data.hasOwnProperty('Authorization')) {
          obj['Authorization'] = _ApiClient["default"].convertToType(data['Authorization'], ['String']);
        }

        if (data.hasOwnProperty('Log')) {
          obj['Log'] = _ApiClient["default"].convertToType(data['Log'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PluginsInfo;
}();
/**
 * Names of available volume-drivers, and network-driver plugins.
 * @member {Array.<String>} Volume
 */


PluginsInfo.prototype['Volume'] = undefined;
/**
 * Names of available network-drivers, and network-driver plugins.
 * @member {Array.<String>} Network
 */

PluginsInfo.prototype['Network'] = undefined;
/**
 * Names of available authorization plugins.
 * @member {Array.<String>} Authorization
 */

PluginsInfo.prototype['Authorization'] = undefined;
/**
 * Names of available logging-drivers, and logging-driver plugins.
 * @member {Array.<String>} Log
 */

PluginsInfo.prototype['Log'] = undefined;
var _default = PluginsInfo;
exports["default"] = _default;