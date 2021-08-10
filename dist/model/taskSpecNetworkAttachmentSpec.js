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
 * The TaskSpecNetworkAttachmentSpec model module.
 * @module model/TaskSpecNetworkAttachmentSpec
 * @version 1.41
 */
var TaskSpecNetworkAttachmentSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecNetworkAttachmentSpec</code>.
   * Read-only spec type for non-swarm containers attached to swarm overlay networks.  &lt;p&gt;&lt;br /&gt;&lt;/p&gt;  &gt; **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are &gt; mutually exclusive. PluginSpec is only used when the Runtime field &gt; is set to &#x60;plugin&#x60;. NetworkAttachmentSpec is used when the Runtime &gt; field is set to &#x60;attachment&#x60;. 
   * @alias module:model/TaskSpecNetworkAttachmentSpec
   */
  function TaskSpecNetworkAttachmentSpec() {
    _classCallCheck(this, TaskSpecNetworkAttachmentSpec);

    TaskSpecNetworkAttachmentSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecNetworkAttachmentSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecNetworkAttachmentSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecNetworkAttachmentSpec} obj Optional instance to populate.
     * @return {module:model/TaskSpecNetworkAttachmentSpec} The populated <code>TaskSpecNetworkAttachmentSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecNetworkAttachmentSpec();

        if (data.hasOwnProperty('ContainerID')) {
          obj['ContainerID'] = _ApiClient["default"].convertToType(data['ContainerID'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaskSpecNetworkAttachmentSpec;
}();
/**
 * ID of the container represented by this task
 * @member {String} ContainerID
 */


TaskSpecNetworkAttachmentSpec.prototype['ContainerID'] = undefined;
var _default = TaskSpecNetworkAttachmentSpec;
exports["default"] = _default;