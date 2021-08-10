"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NetworkAttachmentConfig = _interopRequireDefault(require("./NetworkAttachmentConfig"));

var _TaskSpecContainerSpec = _interopRequireDefault(require("./TaskSpecContainerSpec"));

var _TaskSpecLogDriver = _interopRequireDefault(require("./TaskSpecLogDriver"));

var _TaskSpecNetworkAttachmentSpec = _interopRequireDefault(require("./TaskSpecNetworkAttachmentSpec"));

var _TaskSpecPlacement = _interopRequireDefault(require("./TaskSpecPlacement"));

var _TaskSpecPluginSpec = _interopRequireDefault(require("./TaskSpecPluginSpec"));

var _TaskSpecResources = _interopRequireDefault(require("./TaskSpecResources"));

var _TaskSpecRestartPolicy = _interopRequireDefault(require("./TaskSpecRestartPolicy"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskSpec model module.
 * @module model/TaskSpec
 * @version 1.41
 */
var TaskSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpec</code>.
   * User modifiable task configuration.
   * @alias module:model/TaskSpec
   */
  function TaskSpec() {
    _classCallCheck(this, TaskSpec);

    TaskSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpec} obj Optional instance to populate.
     * @return {module:model/TaskSpec} The populated <code>TaskSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpec();

        if (data.hasOwnProperty('PluginSpec')) {
          obj['PluginSpec'] = _TaskSpecPluginSpec["default"].constructFromObject(data['PluginSpec']);
        }

        if (data.hasOwnProperty('ContainerSpec')) {
          obj['ContainerSpec'] = _TaskSpecContainerSpec["default"].constructFromObject(data['ContainerSpec']);
        }

        if (data.hasOwnProperty('NetworkAttachmentSpec')) {
          obj['NetworkAttachmentSpec'] = _TaskSpecNetworkAttachmentSpec["default"].constructFromObject(data['NetworkAttachmentSpec']);
        }

        if (data.hasOwnProperty('Resources')) {
          obj['Resources'] = _TaskSpecResources["default"].constructFromObject(data['Resources']);
        }

        if (data.hasOwnProperty('RestartPolicy')) {
          obj['RestartPolicy'] = _TaskSpecRestartPolicy["default"].constructFromObject(data['RestartPolicy']);
        }

        if (data.hasOwnProperty('Placement')) {
          obj['Placement'] = _TaskSpecPlacement["default"].constructFromObject(data['Placement']);
        }

        if (data.hasOwnProperty('ForceUpdate')) {
          obj['ForceUpdate'] = _ApiClient["default"].convertToType(data['ForceUpdate'], 'Number');
        }

        if (data.hasOwnProperty('Runtime')) {
          obj['Runtime'] = _ApiClient["default"].convertToType(data['Runtime'], 'String');
        }

        if (data.hasOwnProperty('Networks')) {
          obj['Networks'] = _ApiClient["default"].convertToType(data['Networks'], [_NetworkAttachmentConfig["default"]]);
        }

        if (data.hasOwnProperty('LogDriver')) {
          obj['LogDriver'] = _TaskSpecLogDriver["default"].constructFromObject(data['LogDriver']);
        }
      }

      return obj;
    }
  }]);

  return TaskSpec;
}();
/**
 * @member {module:model/TaskSpecPluginSpec} PluginSpec
 */


TaskSpec.prototype['PluginSpec'] = undefined;
/**
 * @member {module:model/TaskSpecContainerSpec} ContainerSpec
 */

TaskSpec.prototype['ContainerSpec'] = undefined;
/**
 * @member {module:model/TaskSpecNetworkAttachmentSpec} NetworkAttachmentSpec
 */

TaskSpec.prototype['NetworkAttachmentSpec'] = undefined;
/**
 * @member {module:model/TaskSpecResources} Resources
 */

TaskSpec.prototype['Resources'] = undefined;
/**
 * @member {module:model/TaskSpecRestartPolicy} RestartPolicy
 */

TaskSpec.prototype['RestartPolicy'] = undefined;
/**
 * @member {module:model/TaskSpecPlacement} Placement
 */

TaskSpec.prototype['Placement'] = undefined;
/**
 * A counter that triggers an update even if no relevant parameters have been changed. 
 * @member {Number} ForceUpdate
 */

TaskSpec.prototype['ForceUpdate'] = undefined;
/**
 * Runtime is the type of runtime specified for the task executor. 
 * @member {String} Runtime
 */

TaskSpec.prototype['Runtime'] = undefined;
/**
 * Specifies which networks the service should attach to.
 * @member {Array.<module:model/NetworkAttachmentConfig>} Networks
 */

TaskSpec.prototype['Networks'] = undefined;
/**
 * @member {module:model/TaskSpecLogDriver} LogDriver
 */

TaskSpec.prototype['LogDriver'] = undefined;
var _default = TaskSpec;
exports["default"] = _default;