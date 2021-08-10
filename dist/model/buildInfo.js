"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorDetail = _interopRequireDefault(require("./ErrorDetail"));

var _ImageID = _interopRequireDefault(require("./ImageID"));

var _ProgressDetail = _interopRequireDefault(require("./ProgressDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The BuildInfo model module.
 * @module model/BuildInfo
 * @version 1.41
 */
var BuildInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BuildInfo</code>.
   * @alias module:model/BuildInfo
   */
  function BuildInfo() {
    _classCallCheck(this, BuildInfo);

    BuildInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BuildInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BuildInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BuildInfo} obj Optional instance to populate.
     * @return {module:model/BuildInfo} The populated <code>BuildInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BuildInfo();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

        if (data.hasOwnProperty('stream')) {
          obj['stream'] = _ApiClient["default"].convertToType(data['stream'], 'String');
        }

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
        }

        if (data.hasOwnProperty('errorDetail')) {
          obj['errorDetail'] = _ErrorDetail["default"].constructFromObject(data['errorDetail']);
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('progress')) {
          obj['progress'] = _ApiClient["default"].convertToType(data['progress'], 'String');
        }

        if (data.hasOwnProperty('progressDetail')) {
          obj['progressDetail'] = _ProgressDetail["default"].constructFromObject(data['progressDetail']);
        }

        if (data.hasOwnProperty('aux')) {
          obj['aux'] = _ImageID["default"].constructFromObject(data['aux']);
        }
      }

      return obj;
    }
  }]);

  return BuildInfo;
}();
/**
 * @member {String} id
 */


BuildInfo.prototype['id'] = undefined;
/**
 * @member {String} stream
 */

BuildInfo.prototype['stream'] = undefined;
/**
 * @member {String} error
 */

BuildInfo.prototype['error'] = undefined;
/**
 * @member {module:model/ErrorDetail} errorDetail
 */

BuildInfo.prototype['errorDetail'] = undefined;
/**
 * @member {String} status
 */

BuildInfo.prototype['status'] = undefined;
/**
 * @member {String} progress
 */

BuildInfo.prototype['progress'] = undefined;
/**
 * @member {module:model/ProgressDetail} progressDetail
 */

BuildInfo.prototype['progressDetail'] = undefined;
/**
 * @member {module:model/ImageID} aux
 */

BuildInfo.prototype['aux'] = undefined;
var _default = BuildInfo;
exports["default"] = _default;