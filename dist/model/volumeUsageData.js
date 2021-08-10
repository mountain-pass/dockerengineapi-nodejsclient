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
 * The VolumeUsageData model module.
 * @module model/VolumeUsageData
 * @version 1.41
 */
var VolumeUsageData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VolumeUsageData</code>.
   * Usage details about the volume. This information is used by the &#x60;GET /system/df&#x60; endpoint, and omitted in other endpoints. 
   * @alias module:model/VolumeUsageData
   * @param size {Number} Amount of disk space used by the volume (in bytes). This information is only available for volumes created with the `\"local\"` volume driver. For volumes created with other volume drivers, this field is set to `-1` (\"not available\") 
   * @param refCount {Number} The number of containers referencing this volume. This field is set to `-1` if the reference-count is not available. 
   */
  function VolumeUsageData(size, refCount) {
    _classCallCheck(this, VolumeUsageData);

    VolumeUsageData.initialize(this, size, refCount);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeUsageData, null, [{
    key: "initialize",
    value: function initialize(obj, size, refCount) {
      obj['Size'] = size;
      obj['RefCount'] = refCount;
    }
    /**
     * Constructs a <code>VolumeUsageData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeUsageData} obj Optional instance to populate.
     * @return {module:model/VolumeUsageData} The populated <code>VolumeUsageData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeUsageData();

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('RefCount')) {
          obj['RefCount'] = _ApiClient["default"].convertToType(data['RefCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return VolumeUsageData;
}();
/**
 * Amount of disk space used by the volume (in bytes). This information is only available for volumes created with the `\"local\"` volume driver. For volumes created with other volume drivers, this field is set to `-1` (\"not available\") 
 * @member {Number} Size
 */


VolumeUsageData.prototype['Size'] = undefined;
/**
 * The number of containers referencing this volume. This field is set to `-1` if the reference-count is not available. 
 * @member {Number} RefCount
 */

VolumeUsageData.prototype['RefCount'] = undefined;
var _default = VolumeUsageData;
exports["default"] = _default;