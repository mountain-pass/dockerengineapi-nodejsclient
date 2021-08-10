"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainerConfig = _interopRequireDefault(require("./ContainerConfig"));

var _ContainerState = _interopRequireDefault(require("./ContainerState"));

var _GraphDriverData = _interopRequireDefault(require("./GraphDriverData"));

var _HostConfig = _interopRequireDefault(require("./HostConfig"));

var _MountPoint = _interopRequireDefault(require("./MountPoint"));

var _NetworkSettings = _interopRequireDefault(require("./NetworkSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContainerInspectResponse model module.
 * @module model/ContainerInspectResponse
 * @version 1.41
 */
var ContainerInspectResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerInspectResponse</code>.
   * @alias module:model/ContainerInspectResponse
   */
  function ContainerInspectResponse() {
    _classCallCheck(this, ContainerInspectResponse);

    ContainerInspectResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerInspectResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContainerInspectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerInspectResponse} obj Optional instance to populate.
     * @return {module:model/ContainerInspectResponse} The populated <code>ContainerInspectResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerInspectResponse();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('Created')) {
          obj['Created'] = _ApiClient["default"].convertToType(data['Created'], 'String');
        }

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }

        if (data.hasOwnProperty('Args')) {
          obj['Args'] = _ApiClient["default"].convertToType(data['Args'], ['String']);
        }

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ContainerState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Image')) {
          obj['Image'] = _ApiClient["default"].convertToType(data['Image'], 'String');
        }

        if (data.hasOwnProperty('ResolvConfPath')) {
          obj['ResolvConfPath'] = _ApiClient["default"].convertToType(data['ResolvConfPath'], 'String');
        }

        if (data.hasOwnProperty('HostnamePath')) {
          obj['HostnamePath'] = _ApiClient["default"].convertToType(data['HostnamePath'], 'String');
        }

        if (data.hasOwnProperty('HostsPath')) {
          obj['HostsPath'] = _ApiClient["default"].convertToType(data['HostsPath'], 'String');
        }

        if (data.hasOwnProperty('LogPath')) {
          obj['LogPath'] = _ApiClient["default"].convertToType(data['LogPath'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('RestartCount')) {
          obj['RestartCount'] = _ApiClient["default"].convertToType(data['RestartCount'], 'Number');
        }

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _ApiClient["default"].convertToType(data['Platform'], 'String');
        }

        if (data.hasOwnProperty('MountLabel')) {
          obj['MountLabel'] = _ApiClient["default"].convertToType(data['MountLabel'], 'String');
        }

        if (data.hasOwnProperty('ProcessLabel')) {
          obj['ProcessLabel'] = _ApiClient["default"].convertToType(data['ProcessLabel'], 'String');
        }

        if (data.hasOwnProperty('AppArmorProfile')) {
          obj['AppArmorProfile'] = _ApiClient["default"].convertToType(data['AppArmorProfile'], 'String');
        }

        if (data.hasOwnProperty('ExecIDs')) {
          obj['ExecIDs'] = _ApiClient["default"].convertToType(data['ExecIDs'], ['String']);
        }

        if (data.hasOwnProperty('HostConfig')) {
          obj['HostConfig'] = _HostConfig["default"].constructFromObject(data['HostConfig']);
        }

        if (data.hasOwnProperty('GraphDriver')) {
          obj['GraphDriver'] = _GraphDriverData["default"].constructFromObject(data['GraphDriver']);
        }

        if (data.hasOwnProperty('SizeRw')) {
          obj['SizeRw'] = _ApiClient["default"].convertToType(data['SizeRw'], 'Number');
        }

        if (data.hasOwnProperty('SizeRootFs')) {
          obj['SizeRootFs'] = _ApiClient["default"].convertToType(data['SizeRootFs'], 'Number');
        }

        if (data.hasOwnProperty('Mounts')) {
          obj['Mounts'] = _ApiClient["default"].convertToType(data['Mounts'], [_MountPoint["default"]]);
        }

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _ContainerConfig["default"].constructFromObject(data['Config']);
        }

        if (data.hasOwnProperty('NetworkSettings')) {
          obj['NetworkSettings'] = _NetworkSettings["default"].constructFromObject(data['NetworkSettings']);
        }
      }

      return obj;
    }
  }]);

  return ContainerInspectResponse;
}();
/**
 * The ID of the container
 * @member {String} Id
 */


ContainerInspectResponse.prototype['Id'] = undefined;
/**
 * The time the container was created
 * @member {String} Created
 */

ContainerInspectResponse.prototype['Created'] = undefined;
/**
 * The path to the command being run
 * @member {String} Path
 */

ContainerInspectResponse.prototype['Path'] = undefined;
/**
 * The arguments to the command being run
 * @member {Array.<String>} Args
 */

ContainerInspectResponse.prototype['Args'] = undefined;
/**
 * @member {module:model/ContainerState} State
 */

ContainerInspectResponse.prototype['State'] = undefined;
/**
 * The container's image ID
 * @member {String} Image
 */

ContainerInspectResponse.prototype['Image'] = undefined;
/**
 * @member {String} ResolvConfPath
 */

ContainerInspectResponse.prototype['ResolvConfPath'] = undefined;
/**
 * @member {String} HostnamePath
 */

ContainerInspectResponse.prototype['HostnamePath'] = undefined;
/**
 * @member {String} HostsPath
 */

ContainerInspectResponse.prototype['HostsPath'] = undefined;
/**
 * @member {String} LogPath
 */

ContainerInspectResponse.prototype['LogPath'] = undefined;
/**
 * @member {String} Name
 */

ContainerInspectResponse.prototype['Name'] = undefined;
/**
 * @member {Number} RestartCount
 */

ContainerInspectResponse.prototype['RestartCount'] = undefined;
/**
 * @member {String} Driver
 */

ContainerInspectResponse.prototype['Driver'] = undefined;
/**
 * @member {String} Platform
 */

ContainerInspectResponse.prototype['Platform'] = undefined;
/**
 * @member {String} MountLabel
 */

ContainerInspectResponse.prototype['MountLabel'] = undefined;
/**
 * @member {String} ProcessLabel
 */

ContainerInspectResponse.prototype['ProcessLabel'] = undefined;
/**
 * @member {String} AppArmorProfile
 */

ContainerInspectResponse.prototype['AppArmorProfile'] = undefined;
/**
 * IDs of exec instances that are running in the container.
 * @member {Array.<String>} ExecIDs
 */

ContainerInspectResponse.prototype['ExecIDs'] = undefined;
/**
 * @member {module:model/HostConfig} HostConfig
 */

ContainerInspectResponse.prototype['HostConfig'] = undefined;
/**
 * @member {module:model/GraphDriverData} GraphDriver
 */

ContainerInspectResponse.prototype['GraphDriver'] = undefined;
/**
 * The size of files that have been created or changed by this container. 
 * @member {Number} SizeRw
 */

ContainerInspectResponse.prototype['SizeRw'] = undefined;
/**
 * The total size of all the files in this container.
 * @member {Number} SizeRootFs
 */

ContainerInspectResponse.prototype['SizeRootFs'] = undefined;
/**
 * @member {Array.<module:model/MountPoint>} Mounts
 */

ContainerInspectResponse.prototype['Mounts'] = undefined;
/**
 * @member {module:model/ContainerConfig} Config
 */

ContainerInspectResponse.prototype['Config'] = undefined;
/**
 * @member {module:model/NetworkSettings} NetworkSettings
 */

ContainerInspectResponse.prototype['NetworkSettings'] = undefined;
var _default = ContainerInspectResponse;
exports["default"] = _default;