"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BuildCache = _interopRequireDefault(require("./BuildCache"));

var _ImageSummary = _interopRequireDefault(require("./ImageSummary"));

var _Volume = _interopRequireDefault(require("./Volume"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SystemDataUsageResponse model module.
 * @module model/SystemDataUsageResponse
 * @version 1.41
 */
var SystemDataUsageResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemDataUsageResponse</code>.
   * @alias module:model/SystemDataUsageResponse
   */
  function SystemDataUsageResponse() {
    _classCallCheck(this, SystemDataUsageResponse);

    SystemDataUsageResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemDataUsageResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SystemDataUsageResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemDataUsageResponse} obj Optional instance to populate.
     * @return {module:model/SystemDataUsageResponse} The populated <code>SystemDataUsageResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemDataUsageResponse();

        if (data.hasOwnProperty('LayersSize')) {
          obj['LayersSize'] = _ApiClient["default"].convertToType(data['LayersSize'], 'Number');
        }

        if (data.hasOwnProperty('Images')) {
          obj['Images'] = _ApiClient["default"].convertToType(data['Images'], [_ImageSummary["default"]]);
        }

        if (data.hasOwnProperty('Containers')) {
          obj['Containers'] = _ApiClient["default"].convertToType(data['Containers'], [Array]);
        }

        if (data.hasOwnProperty('Volumes')) {
          obj['Volumes'] = _ApiClient["default"].convertToType(data['Volumes'], [_Volume["default"]]);
        }

        if (data.hasOwnProperty('BuildCache')) {
          obj['BuildCache'] = _ApiClient["default"].convertToType(data['BuildCache'], [_BuildCache["default"]]);
        }
      }

      return obj;
    }
  }]);

  return SystemDataUsageResponse;
}();
/**
 * @member {Number} LayersSize
 */


SystemDataUsageResponse.prototype['LayersSize'] = undefined;
/**
 * @member {Array.<module:model/ImageSummary>} Images
 */

SystemDataUsageResponse.prototype['Images'] = undefined;
/**
 * @member {Array.<Array.<Object>>} Containers
 */

SystemDataUsageResponse.prototype['Containers'] = undefined;
/**
 * @member {Array.<module:model/Volume>} Volumes
 */

SystemDataUsageResponse.prototype['Volumes'] = undefined;
/**
 * @member {Array.<module:model/BuildCache>} BuildCache
 */

SystemDataUsageResponse.prototype['BuildCache'] = undefined;
var _default = SystemDataUsageResponse;
exports["default"] = _default;