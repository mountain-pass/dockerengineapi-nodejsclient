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
 * The TaskSpecContainerSpecPrivilegesCredentialSpec model module.
 * @module model/TaskSpecContainerSpecPrivilegesCredentialSpec
 * @version 1.41
 */
var TaskSpecContainerSpecPrivilegesCredentialSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecContainerSpecPrivilegesCredentialSpec</code>.
   * CredentialSpec for managed service account (Windows only)
   * @alias module:model/TaskSpecContainerSpecPrivilegesCredentialSpec
   */
  function TaskSpecContainerSpecPrivilegesCredentialSpec() {
    _classCallCheck(this, TaskSpecContainerSpecPrivilegesCredentialSpec);

    TaskSpecContainerSpecPrivilegesCredentialSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecContainerSpecPrivilegesCredentialSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecContainerSpecPrivilegesCredentialSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecContainerSpecPrivilegesCredentialSpec} obj Optional instance to populate.
     * @return {module:model/TaskSpecContainerSpecPrivilegesCredentialSpec} The populated <code>TaskSpecContainerSpecPrivilegesCredentialSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecContainerSpecPrivilegesCredentialSpec();

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _ApiClient["default"].convertToType(data['Config'], 'String');
        }

        if (data.hasOwnProperty('File')) {
          obj['File'] = _ApiClient["default"].convertToType(data['File'], 'String');
        }

        if (data.hasOwnProperty('Registry')) {
          obj['Registry'] = _ApiClient["default"].convertToType(data['Registry'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaskSpecContainerSpecPrivilegesCredentialSpec;
}();
/**
 * Load credential spec from a Swarm Config with the given ID. The specified config must also be present in the Configs field with the Runtime property set.  <p><br /></p>   > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`, > and `CredentialSpec.Config` are mutually exclusive. 
 * @member {String} Config
 */


TaskSpecContainerSpecPrivilegesCredentialSpec.prototype['Config'] = undefined;
/**
 * Load credential spec from this file. The file is read by the daemon, and must be present in the `CredentialSpecs` subdirectory in the docker data directory, which defaults to `C:\\ProgramData\\Docker\\` on Windows.  For example, specifying `spec.json` loads `C:\\ProgramData\\Docker\\CredentialSpecs\\spec.json`.  <p><br /></p>  > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`, > and `CredentialSpec.Config` are mutually exclusive. 
 * @member {String} File
 */

TaskSpecContainerSpecPrivilegesCredentialSpec.prototype['File'] = undefined;
/**
 * Load credential spec from this value in the Windows registry. The specified registry value must be located in:  `HKLM\\SOFTWARE\\Microsoft\\Windows NT\\CurrentVersion\\Virtualization\\Containers\\CredentialSpecs`  <p><br /></p>   > **Note**: `CredentialSpec.File`, `CredentialSpec.Registry`, > and `CredentialSpec.Config` are mutually exclusive. 
 * @member {String} Registry
 */

TaskSpecContainerSpecPrivilegesCredentialSpec.prototype['Registry'] = undefined;
var _default = TaskSpecContainerSpecPrivilegesCredentialSpec;
exports["default"] = _default;