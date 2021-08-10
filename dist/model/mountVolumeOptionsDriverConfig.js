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
 * The MountVolumeOptionsDriverConfig model module.
 * @module model/MountVolumeOptionsDriverConfig
 * @version 1.41
 */
var MountVolumeOptionsDriverConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MountVolumeOptionsDriverConfig</code>.
   * Map of driver specific options
   * @alias module:model/MountVolumeOptionsDriverConfig
   */
  function MountVolumeOptionsDriverConfig() {
    _classCallCheck(this, MountVolumeOptionsDriverConfig);

    MountVolumeOptionsDriverConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MountVolumeOptionsDriverConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MountVolumeOptionsDriverConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MountVolumeOptionsDriverConfig} obj Optional instance to populate.
     * @return {module:model/MountVolumeOptionsDriverConfig} The populated <code>MountVolumeOptionsDriverConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MountVolumeOptionsDriverConfig();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return MountVolumeOptionsDriverConfig;
}();
/**
 * Name of the driver to use to create the volume.
 * @member {String} Name
 */


MountVolumeOptionsDriverConfig.prototype['Name'] = undefined;
/**
 * key/value map of driver specific options.
 * @member {Object.<String, String>} Options
 */

MountVolumeOptionsDriverConfig.prototype['Options'] = undefined;
var _default = MountVolumeOptionsDriverConfig;
exports["default"] = _default;