"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Volume = _interopRequireDefault(require("./Volume"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The VolumeListResponse model module.
 * @module model/VolumeListResponse
 * @version 1.41
 */
var VolumeListResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VolumeListResponse</code>.
   * Volume list response
   * @alias module:model/VolumeListResponse
   * @param volumes {Array.<module:model/Volume>} List of volumes
   * @param warnings {Array.<String>} Warnings that occurred when fetching the list of volumes. 
   */
  function VolumeListResponse(volumes, warnings) {
    _classCallCheck(this, VolumeListResponse);

    VolumeListResponse.initialize(this, volumes, warnings);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumeListResponse, null, [{
    key: "initialize",
    value: function initialize(obj, volumes, warnings) {
      obj['Volumes'] = volumes;
      obj['Warnings'] = warnings;
    }
    /**
     * Constructs a <code>VolumeListResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumeListResponse} obj Optional instance to populate.
     * @return {module:model/VolumeListResponse} The populated <code>VolumeListResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumeListResponse();

        if (data.hasOwnProperty('Volumes')) {
          obj['Volumes'] = _ApiClient["default"].convertToType(data['Volumes'], [_Volume["default"]]);
        }

        if (data.hasOwnProperty('Warnings')) {
          obj['Warnings'] = _ApiClient["default"].convertToType(data['Warnings'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return VolumeListResponse;
}();
/**
 * List of volumes
 * @member {Array.<module:model/Volume>} Volumes
 */


VolumeListResponse.prototype['Volumes'] = undefined;
/**
 * Warnings that occurred when fetching the list of volumes. 
 * @member {Array.<String>} Warnings
 */

VolumeListResponse.prototype['Warnings'] = undefined;
var _default = VolumeListResponse;
exports["default"] = _default;