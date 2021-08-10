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
 * The TaskSpecContainerSpecPrivilegesSELinuxContext model module.
 * @module model/TaskSpecContainerSpecPrivilegesSELinuxContext
 * @version 1.41
 */
var TaskSpecContainerSpecPrivilegesSELinuxContext = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecContainerSpecPrivilegesSELinuxContext</code>.
   * SELinux labels of the container
   * @alias module:model/TaskSpecContainerSpecPrivilegesSELinuxContext
   */
  function TaskSpecContainerSpecPrivilegesSELinuxContext() {
    _classCallCheck(this, TaskSpecContainerSpecPrivilegesSELinuxContext);

    TaskSpecContainerSpecPrivilegesSELinuxContext.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecContainerSpecPrivilegesSELinuxContext, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecContainerSpecPrivilegesSELinuxContext</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecContainerSpecPrivilegesSELinuxContext} obj Optional instance to populate.
     * @return {module:model/TaskSpecContainerSpecPrivilegesSELinuxContext} The populated <code>TaskSpecContainerSpecPrivilegesSELinuxContext</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecContainerSpecPrivilegesSELinuxContext();

        if (data.hasOwnProperty('Disable')) {
          obj['Disable'] = _ApiClient["default"].convertToType(data['Disable'], 'Boolean');
        }

        if (data.hasOwnProperty('User')) {
          obj['User'] = _ApiClient["default"].convertToType(data['User'], 'String');
        }

        if (data.hasOwnProperty('Role')) {
          obj['Role'] = _ApiClient["default"].convertToType(data['Role'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('Level')) {
          obj['Level'] = _ApiClient["default"].convertToType(data['Level'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaskSpecContainerSpecPrivilegesSELinuxContext;
}();
/**
 * Disable SELinux
 * @member {Boolean} Disable
 */


TaskSpecContainerSpecPrivilegesSELinuxContext.prototype['Disable'] = undefined;
/**
 * SELinux user label
 * @member {String} User
 */

TaskSpecContainerSpecPrivilegesSELinuxContext.prototype['User'] = undefined;
/**
 * SELinux role label
 * @member {String} Role
 */

TaskSpecContainerSpecPrivilegesSELinuxContext.prototype['Role'] = undefined;
/**
 * SELinux type label
 * @member {String} Type
 */

TaskSpecContainerSpecPrivilegesSELinuxContext.prototype['Type'] = undefined;
/**
 * SELinux level label
 * @member {String} Level
 */

TaskSpecContainerSpecPrivilegesSELinuxContext.prototype['Level'] = undefined;
var _default = TaskSpecContainerSpecPrivilegesSELinuxContext;
exports["default"] = _default;