"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaskSpecContainerSpecPrivilegesCredentialSpec = _interopRequireDefault(require("./TaskSpecContainerSpecPrivilegesCredentialSpec"));

var _TaskSpecContainerSpecPrivilegesSELinuxContext = _interopRequireDefault(require("./TaskSpecContainerSpecPrivilegesSELinuxContext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskSpecContainerSpecPrivileges model module.
 * @module model/TaskSpecContainerSpecPrivileges
 * @version 1.41
 */
var TaskSpecContainerSpecPrivileges = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecContainerSpecPrivileges</code>.
   * Security options for the container
   * @alias module:model/TaskSpecContainerSpecPrivileges
   */
  function TaskSpecContainerSpecPrivileges() {
    _classCallCheck(this, TaskSpecContainerSpecPrivileges);

    TaskSpecContainerSpecPrivileges.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecContainerSpecPrivileges, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecContainerSpecPrivileges</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecContainerSpecPrivileges} obj Optional instance to populate.
     * @return {module:model/TaskSpecContainerSpecPrivileges} The populated <code>TaskSpecContainerSpecPrivileges</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecContainerSpecPrivileges();

        if (data.hasOwnProperty('CredentialSpec')) {
          obj['CredentialSpec'] = _TaskSpecContainerSpecPrivilegesCredentialSpec["default"].constructFromObject(data['CredentialSpec']);
        }

        if (data.hasOwnProperty('SELinuxContext')) {
          obj['SELinuxContext'] = _TaskSpecContainerSpecPrivilegesSELinuxContext["default"].constructFromObject(data['SELinuxContext']);
        }
      }

      return obj;
    }
  }]);

  return TaskSpecContainerSpecPrivileges;
}();
/**
 * @member {module:model/TaskSpecContainerSpecPrivilegesCredentialSpec} CredentialSpec
 */


TaskSpecContainerSpecPrivileges.prototype['CredentialSpec'] = undefined;
/**
 * @member {module:model/TaskSpecContainerSpecPrivilegesSELinuxContext} SELinuxContext
 */

TaskSpecContainerSpecPrivileges.prototype['SELinuxContext'] = undefined;
var _default = TaskSpecContainerSpecPrivileges;
exports["default"] = _default;