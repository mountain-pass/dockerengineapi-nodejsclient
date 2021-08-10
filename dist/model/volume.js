"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _VolumeUsageData = _interopRequireDefault(require("./VolumeUsageData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Volume model module.
 * @module model/Volume
 * @version 1.41
 */
var Volume = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Volume</code>.
   * @alias module:model/Volume
   * @param name {String} Name of the volume.
   * @param driver {String} Name of the volume driver used by the volume.
   * @param mountpoint {String} Mount path of the volume on the host.
   * @param labels {Object.<String, String>} User-defined key/value metadata.
   * @param scope {module:model/Volume.ScopeEnum} The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level. 
   * @param options {Object.<String, String>} The driver specific options used when creating the volume. 
   */
  function Volume(name, driver, mountpoint, labels, scope, options) {
    _classCallCheck(this, Volume);

    Volume.initialize(this, name, driver, mountpoint, labels, scope, options);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Volume, null, [{
    key: "initialize",
    value: function initialize(obj, name, driver, mountpoint, labels, scope, options) {
      obj['Name'] = name;
      obj['Driver'] = driver;
      obj['Mountpoint'] = mountpoint;
      obj['Labels'] = labels;
      obj['Scope'] = scope || 'local';
      obj['Options'] = options;
    }
    /**
     * Constructs a <code>Volume</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Volume} obj Optional instance to populate.
     * @return {module:model/Volume} The populated <code>Volume</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Volume();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
        }

        if (data.hasOwnProperty('Mountpoint')) {
          obj['Mountpoint'] = _ApiClient["default"].convertToType(data['Mountpoint'], 'String');
        }

        if (data.hasOwnProperty('CreatedAt')) {
          obj['CreatedAt'] = _ApiClient["default"].convertToType(data['CreatedAt'], 'String');
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _ApiClient["default"].convertToType(data['Status'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _ApiClient["default"].convertToType(data['Scope'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('UsageData')) {
          obj['UsageData'] = _VolumeUsageData["default"].constructFromObject(data['UsageData']);
        }
      }

      return obj;
    }
  }]);

  return Volume;
}();
/**
 * Name of the volume.
 * @member {String} Name
 */


Volume.prototype['Name'] = undefined;
/**
 * Name of the volume driver used by the volume.
 * @member {String} Driver
 */

Volume.prototype['Driver'] = undefined;
/**
 * Mount path of the volume on the host.
 * @member {String} Mountpoint
 */

Volume.prototype['Mountpoint'] = undefined;
/**
 * Date/Time the volume was created.
 * @member {String} CreatedAt
 */

Volume.prototype['CreatedAt'] = undefined;
/**
 * Low-level details about the volume, provided by the volume driver. Details are returned as a map with key/value pairs: `{\"key\":\"value\",\"key2\":\"value2\"}`.  The `Status` field is optional, and is omitted if the volume driver does not support this feature. 
 * @member {Object.<String, Object>} Status
 */

Volume.prototype['Status'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

Volume.prototype['Labels'] = undefined;
/**
 * The level at which the volume exists. Either `global` for cluster-wide, or `local` for machine level. 
 * @member {module:model/Volume.ScopeEnum} Scope
 * @default 'local'
 */

Volume.prototype['Scope'] = 'local';
/**
 * The driver specific options used when creating the volume. 
 * @member {Object.<String, String>} Options
 */

Volume.prototype['Options'] = undefined;
/**
 * @member {module:model/VolumeUsageData} UsageData
 */

Volume.prototype['UsageData'] = undefined;
/**
 * Allowed values for the <code>Scope</code> property.
 * @enum {String}
 * @readonly
 */

Volume['ScopeEnum'] = {
  /**
   * value: "local"
   * @const
   */
  "local": "local",

  /**
   * value: "global"
   * @const
   */
  "global": "global"
};
var _default = Volume;
exports["default"] = _default;