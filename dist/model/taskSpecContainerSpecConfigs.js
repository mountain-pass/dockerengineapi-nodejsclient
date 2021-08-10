"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaskSpecContainerSpecFile = _interopRequireDefault(require("./TaskSpecContainerSpecFile1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskSpecContainerSpecConfigs model module.
 * @module model/TaskSpecContainerSpecConfigs
 * @version 1.41
 */
var TaskSpecContainerSpecConfigs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecContainerSpecConfigs</code>.
   * @alias module:model/TaskSpecContainerSpecConfigs
   */
  function TaskSpecContainerSpecConfigs() {
    _classCallCheck(this, TaskSpecContainerSpecConfigs);

    TaskSpecContainerSpecConfigs.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecContainerSpecConfigs, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecContainerSpecConfigs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecContainerSpecConfigs} obj Optional instance to populate.
     * @return {module:model/TaskSpecContainerSpecConfigs} The populated <code>TaskSpecContainerSpecConfigs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecContainerSpecConfigs();

        if (data.hasOwnProperty('File')) {
          obj['File'] = _TaskSpecContainerSpecFile["default"].constructFromObject(data['File']);
        }

        if (data.hasOwnProperty('Runtime')) {
          obj['Runtime'] = _ApiClient["default"].convertToType(data['Runtime'], Object);
        }

        if (data.hasOwnProperty('ConfigID')) {
          obj['ConfigID'] = _ApiClient["default"].convertToType(data['ConfigID'], 'String');
        }

        if (data.hasOwnProperty('ConfigName')) {
          obj['ConfigName'] = _ApiClient["default"].convertToType(data['ConfigName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaskSpecContainerSpecConfigs;
}();
/**
 * @member {module:model/TaskSpecContainerSpecFile1} File
 */


TaskSpecContainerSpecConfigs.prototype['File'] = undefined;
/**
 * Runtime represents a target that is not mounted into the container but is used by the task  <p><br /><p>  > **Note**: `Configs.File` and `Configs.Runtime` are mutually > exclusive 
 * @member {Object} Runtime
 */

TaskSpecContainerSpecConfigs.prototype['Runtime'] = undefined;
/**
 * ConfigID represents the ID of the specific config that we're referencing. 
 * @member {String} ConfigID
 */

TaskSpecContainerSpecConfigs.prototype['ConfigID'] = undefined;
/**
 * ConfigName is the name of the config that this references, but this is just provided for lookup/display purposes. The config in the reference will be identified by its ID. 
 * @member {String} ConfigName
 */

TaskSpecContainerSpecConfigs.prototype['ConfigName'] = undefined;
var _default = TaskSpecContainerSpecConfigs;
exports["default"] = _default;