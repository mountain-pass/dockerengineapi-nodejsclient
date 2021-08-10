"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _InlineObject = _interopRequireDefault(require("./InlineObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskSpecPluginSpec model module.
 * @module model/TaskSpecPluginSpec
 * @version 1.41
 */
var TaskSpecPluginSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecPluginSpec</code>.
   * Plugin spec for the service.  *(Experimental release only.)*  &lt;p&gt;&lt;br /&gt;&lt;/p&gt;  &gt; **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are &gt; mutually exclusive. PluginSpec is only used when the Runtime field &gt; is set to &#x60;plugin&#x60;. NetworkAttachmentSpec is used when the Runtime &gt; field is set to &#x60;attachment&#x60;. 
   * @alias module:model/TaskSpecPluginSpec
   */
  function TaskSpecPluginSpec() {
    _classCallCheck(this, TaskSpecPluginSpec);

    TaskSpecPluginSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecPluginSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecPluginSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecPluginSpec} obj Optional instance to populate.
     * @return {module:model/TaskSpecPluginSpec} The populated <code>TaskSpecPluginSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecPluginSpec();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Remote')) {
          obj['Remote'] = _ApiClient["default"].convertToType(data['Remote'], 'String');
        }

        if (data.hasOwnProperty('Disabled')) {
          obj['Disabled'] = _ApiClient["default"].convertToType(data['Disabled'], 'Boolean');
        }

        if (data.hasOwnProperty('PluginPrivilege')) {
          obj['PluginPrivilege'] = _ApiClient["default"].convertToType(data['PluginPrivilege'], [_InlineObject["default"]]);
        }
      }

      return obj;
    }
  }]);

  return TaskSpecPluginSpec;
}();
/**
 * The name or 'alias' to use for the plugin.
 * @member {String} Name
 */


TaskSpecPluginSpec.prototype['Name'] = undefined;
/**
 * The plugin image reference to use.
 * @member {String} Remote
 */

TaskSpecPluginSpec.prototype['Remote'] = undefined;
/**
 * Disable the plugin once scheduled.
 * @member {Boolean} Disabled
 */

TaskSpecPluginSpec.prototype['Disabled'] = undefined;
/**
 * @member {Array.<module:model/InlineObject>} PluginPrivilege
 */

TaskSpecPluginSpec.prototype['PluginPrivilege'] = undefined;
var _default = TaskSpecPluginSpec;
exports["default"] = _default;