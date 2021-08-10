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
 * The TaskSpecContainerSpecFile1 model module.
 * @module model/TaskSpecContainerSpecFile1
 * @version 1.41
 */
var TaskSpecContainerSpecFile1 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecContainerSpecFile1</code>.
   * File represents a specific target that is backed by a file.  &lt;p&gt;&lt;br /&gt;&lt;p&gt;  &gt; **Note**: &#x60;Configs.File&#x60; and &#x60;Configs.Runtime&#x60; are mutually exclusive 
   * @alias module:model/TaskSpecContainerSpecFile1
   */
  function TaskSpecContainerSpecFile1() {
    _classCallCheck(this, TaskSpecContainerSpecFile1);

    TaskSpecContainerSpecFile1.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecContainerSpecFile1, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecContainerSpecFile1</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecContainerSpecFile1} obj Optional instance to populate.
     * @return {module:model/TaskSpecContainerSpecFile1} The populated <code>TaskSpecContainerSpecFile1</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecContainerSpecFile1();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('UID')) {
          obj['UID'] = _ApiClient["default"].convertToType(data['UID'], 'String');
        }

        if (data.hasOwnProperty('GID')) {
          obj['GID'] = _ApiClient["default"].convertToType(data['GID'], 'String');
        }

        if (data.hasOwnProperty('Mode')) {
          obj['Mode'] = _ApiClient["default"].convertToType(data['Mode'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return TaskSpecContainerSpecFile1;
}();
/**
 * Name represents the final filename in the filesystem. 
 * @member {String} Name
 */


TaskSpecContainerSpecFile1.prototype['Name'] = undefined;
/**
 * UID represents the file UID.
 * @member {String} UID
 */

TaskSpecContainerSpecFile1.prototype['UID'] = undefined;
/**
 * GID represents the file GID.
 * @member {String} GID
 */

TaskSpecContainerSpecFile1.prototype['GID'] = undefined;
/**
 * Mode represents the FileMode of the file.
 * @member {Number} Mode
 */

TaskSpecContainerSpecFile1.prototype['Mode'] = undefined;
var _default = TaskSpecContainerSpecFile1;
exports["default"] = _default;