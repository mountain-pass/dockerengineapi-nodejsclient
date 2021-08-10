"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MountVolumeOptionsDriverConfig = _interopRequireDefault(require("./MountVolumeOptionsDriverConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The MountVolumeOptions model module.
 * @module model/MountVolumeOptions
 * @version 1.41
 */
var MountVolumeOptions = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MountVolumeOptions</code>.
   * Optional configuration for the &#x60;volume&#x60; type.
   * @alias module:model/MountVolumeOptions
   */
  function MountVolumeOptions() {
    _classCallCheck(this, MountVolumeOptions);

    MountVolumeOptions.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MountVolumeOptions, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MountVolumeOptions</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MountVolumeOptions} obj Optional instance to populate.
     * @return {module:model/MountVolumeOptions} The populated <code>MountVolumeOptions</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MountVolumeOptions();

        if (data.hasOwnProperty('NoCopy')) {
          obj['NoCopy'] = _ApiClient["default"].convertToType(data['NoCopy'], 'Boolean');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('DriverConfig')) {
          obj['DriverConfig'] = _MountVolumeOptionsDriverConfig["default"].constructFromObject(data['DriverConfig']);
        }
      }

      return obj;
    }
  }]);

  return MountVolumeOptions;
}();
/**
 * Populate volume with data from the target.
 * @member {Boolean} NoCopy
 * @default false
 */


MountVolumeOptions.prototype['NoCopy'] = false;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

MountVolumeOptions.prototype['Labels'] = undefined;
/**
 * @member {module:model/MountVolumeOptionsDriverConfig} DriverConfig
 */

MountVolumeOptions.prototype['DriverConfig'] = undefined;
var _default = MountVolumeOptions;
exports["default"] = _default;