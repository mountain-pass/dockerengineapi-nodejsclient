"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SystemVersionComponents = _interopRequireDefault(require("./SystemVersionComponents"));

var _SystemVersionPlatform = _interopRequireDefault(require("./SystemVersionPlatform"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SystemVersion model module.
 * @module model/SystemVersion
 * @version 1.41
 */
var SystemVersion = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemVersion</code>.
   * Response of Engine API: GET \&quot;/version\&quot; 
   * @alias module:model/SystemVersion
   */
  function SystemVersion() {
    _classCallCheck(this, SystemVersion);

    SystemVersion.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemVersion, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SystemVersion</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemVersion} obj Optional instance to populate.
     * @return {module:model/SystemVersion} The populated <code>SystemVersion</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemVersion();

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _SystemVersionPlatform["default"].constructFromObject(data['Platform']);
        }

        if (data.hasOwnProperty('Components')) {
          obj['Components'] = _ApiClient["default"].convertToType(data['Components'], [_SystemVersionComponents["default"]]);
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }

        if (data.hasOwnProperty('ApiVersion')) {
          obj['ApiVersion'] = _ApiClient["default"].convertToType(data['ApiVersion'], 'String');
        }

        if (data.hasOwnProperty('MinAPIVersion')) {
          obj['MinAPIVersion'] = _ApiClient["default"].convertToType(data['MinAPIVersion'], 'String');
        }

        if (data.hasOwnProperty('GitCommit')) {
          obj['GitCommit'] = _ApiClient["default"].convertToType(data['GitCommit'], 'String');
        }

        if (data.hasOwnProperty('GoVersion')) {
          obj['GoVersion'] = _ApiClient["default"].convertToType(data['GoVersion'], 'String');
        }

        if (data.hasOwnProperty('Os')) {
          obj['Os'] = _ApiClient["default"].convertToType(data['Os'], 'String');
        }

        if (data.hasOwnProperty('Arch')) {
          obj['Arch'] = _ApiClient["default"].convertToType(data['Arch'], 'String');
        }

        if (data.hasOwnProperty('KernelVersion')) {
          obj['KernelVersion'] = _ApiClient["default"].convertToType(data['KernelVersion'], 'String');
        }

        if (data.hasOwnProperty('Experimental')) {
          obj['Experimental'] = _ApiClient["default"].convertToType(data['Experimental'], 'Boolean');
        }

        if (data.hasOwnProperty('BuildTime')) {
          obj['BuildTime'] = _ApiClient["default"].convertToType(data['BuildTime'], 'String');
        }
      }

      return obj;
    }
  }]);

  return SystemVersion;
}();
/**
 * @member {module:model/SystemVersionPlatform} Platform
 */


SystemVersion.prototype['Platform'] = undefined;
/**
 * Information about system components 
 * @member {Array.<module:model/SystemVersionComponents>} Components
 */

SystemVersion.prototype['Components'] = undefined;
/**
 * The version of the daemon
 * @member {String} Version
 */

SystemVersion.prototype['Version'] = undefined;
/**
 * The default (and highest) API version that is supported by the daemon 
 * @member {String} ApiVersion
 */

SystemVersion.prototype['ApiVersion'] = undefined;
/**
 * The minimum API version that is supported by the daemon 
 * @member {String} MinAPIVersion
 */

SystemVersion.prototype['MinAPIVersion'] = undefined;
/**
 * The Git commit of the source code that was used to build the daemon 
 * @member {String} GitCommit
 */

SystemVersion.prototype['GitCommit'] = undefined;
/**
 * The version Go used to compile the daemon, and the version of the Go runtime in use. 
 * @member {String} GoVersion
 */

SystemVersion.prototype['GoVersion'] = undefined;
/**
 * The operating system that the daemon is running on (\"linux\" or \"windows\") 
 * @member {String} Os
 */

SystemVersion.prototype['Os'] = undefined;
/**
 * The architecture that the daemon is running on 
 * @member {String} Arch
 */

SystemVersion.prototype['Arch'] = undefined;
/**
 * The kernel version (`uname -r`) that the daemon is running on.  This field is omitted when empty. 
 * @member {String} KernelVersion
 */

SystemVersion.prototype['KernelVersion'] = undefined;
/**
 * Indicates if the daemon is started with experimental features enabled.  This field is omitted when empty / false. 
 * @member {Boolean} Experimental
 */

SystemVersion.prototype['Experimental'] = undefined;
/**
 * The date and time that the daemon was compiled. 
 * @member {String} BuildTime
 */

SystemVersion.prototype['BuildTime'] = undefined;
var _default = SystemVersion;
exports["default"] = _default;