"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _MountBindOptions = _interopRequireDefault(require("./MountBindOptions"));

var _MountTmpfsOptions = _interopRequireDefault(require("./MountTmpfsOptions"));

var _MountVolumeOptions = _interopRequireDefault(require("./MountVolumeOptions"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Mount model module.
 * @module model/Mount
 * @version 1.41
 */
var Mount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Mount</code>.
   * @alias module:model/Mount
   */
  function Mount() {
    _classCallCheck(this, Mount);

    Mount.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Mount, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Mount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Mount} obj Optional instance to populate.
     * @return {module:model/Mount} The populated <code>Mount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Mount();

        if (data.hasOwnProperty('Target')) {
          obj['Target'] = _ApiClient["default"].convertToType(data['Target'], 'String');
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _ApiClient["default"].convertToType(data['Source'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('ReadOnly')) {
          obj['ReadOnly'] = _ApiClient["default"].convertToType(data['ReadOnly'], 'Boolean');
        }

        if (data.hasOwnProperty('Consistency')) {
          obj['Consistency'] = _ApiClient["default"].convertToType(data['Consistency'], 'String');
        }

        if (data.hasOwnProperty('BindOptions')) {
          obj['BindOptions'] = _MountBindOptions["default"].constructFromObject(data['BindOptions']);
        }

        if (data.hasOwnProperty('VolumeOptions')) {
          obj['VolumeOptions'] = _MountVolumeOptions["default"].constructFromObject(data['VolumeOptions']);
        }

        if (data.hasOwnProperty('TmpfsOptions')) {
          obj['TmpfsOptions'] = _MountTmpfsOptions["default"].constructFromObject(data['TmpfsOptions']);
        }
      }

      return obj;
    }
  }]);

  return Mount;
}();
/**
 * Container path.
 * @member {String} Target
 */


Mount.prototype['Target'] = undefined;
/**
 * Mount source (e.g. a volume name, a host path).
 * @member {String} Source
 */

Mount.prototype['Source'] = undefined;
/**
 * The mount type. Available types:  - `bind` Mounts a file or directory from the host into the container. Must exist prior to creating the container. - `volume` Creates a volume with the given name and options (or uses a pre-existing volume with the same name and options). These are **not** removed when the container is removed. - `tmpfs` Create a tmpfs with the given options. The mount source cannot be specified for tmpfs. - `npipe` Mounts a named pipe from the host into the container. Must exist prior to creating the container. 
 * @member {module:model/Mount.TypeEnum} Type
 */

Mount.prototype['Type'] = undefined;
/**
 * Whether the mount should be read-only.
 * @member {Boolean} ReadOnly
 */

Mount.prototype['ReadOnly'] = undefined;
/**
 * The consistency requirement for the mount: `default`, `consistent`, `cached`, or `delegated`.
 * @member {String} Consistency
 */

Mount.prototype['Consistency'] = undefined;
/**
 * @member {module:model/MountBindOptions} BindOptions
 */

Mount.prototype['BindOptions'] = undefined;
/**
 * @member {module:model/MountVolumeOptions} VolumeOptions
 */

Mount.prototype['VolumeOptions'] = undefined;
/**
 * @member {module:model/MountTmpfsOptions} TmpfsOptions
 */

Mount.prototype['TmpfsOptions'] = undefined;
/**
 * Allowed values for the <code>Type</code> property.
 * @enum {String}
 * @readonly
 */

Mount['TypeEnum'] = {
  /**
   * value: "bind"
   * @const
   */
  "bind": "bind",

  /**
   * value: "volume"
   * @const
   */
  "volume": "volume",

  /**
   * value: "tmpfs"
   * @const
   */
  "tmpfs": "tmpfs",

  /**
   * value: "npipe"
   * @const
   */
  "npipe": "npipe"
};
var _default = Mount;
exports["default"] = _default;