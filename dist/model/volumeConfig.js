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
 * The VolumeConfig model module.
 * @module model/VolumeConfig
 * @version 1.41
 */
var VolumeConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VolumeConfig</code>.
   * Volume configuration
   * @alias module:model/VolumeConfig
   */
  function VolumeConfig() {
    _classCallCheck(this, VolumeConfig);

    VolumeConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VolumeConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeConfig} obj Optional instance to populate.
     * @return {module:model/VolumeConfig} The populated <code>VolumeConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeConfig();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
        }

        if (data.hasOwnProperty('DriverOpts')) {
          obj['DriverOpts'] = _ApiClient["default"].convertToType(data['DriverOpts'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return VolumeConfig;
}();
/**
 * The new volume's name. If not specified, Docker generates a name. 
 * @member {String} Name
 */


VolumeConfig.prototype['Name'] = undefined;
/**
 * Name of the volume driver to use.
 * @member {String} Driver
 * @default 'local'
 */

VolumeConfig.prototype['Driver'] = 'local';
/**
 * A mapping of driver options and values. These options are passed directly to the driver and are driver specific. 
 * @member {Object.<String, String>} DriverOpts
 */

VolumeConfig.prototype['DriverOpts'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

VolumeConfig.prototype['Labels'] = undefined;
var _default = VolumeConfig;
exports["default"] = _default;