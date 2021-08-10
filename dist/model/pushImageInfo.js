"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProgressDetail = _interopRequireDefault(require("./ProgressDetail"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The PushImageInfo model module.
 * @module model/PushImageInfo
 * @version 1.41
 */
var PushImageInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PushImageInfo</code>.
   * @alias module:model/PushImageInfo
   */
  function PushImageInfo() {
    _classCallCheck(this, PushImageInfo);

    PushImageInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PushImageInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PushImageInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PushImageInfo} obj Optional instance to populate.
     * @return {module:model/PushImageInfo} The populated <code>PushImageInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PushImageInfo();

        if (data.hasOwnProperty('error')) {
          obj['error'] = _ApiClient["default"].convertToType(data['error'], 'String');
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
      }

      return obj;
    }
  }]);

  return PushImageInfo;
}();
/**
 * @member {String} error
 */


PushImageInfo.prototype['error'] = undefined;
/**
 * @member {String} status
 */

PushImageInfo.prototype['status'] = undefined;
/**
 * @member {String} progress
 */

PushImageInfo.prototype['progress'] = undefined;
/**
 * @member {module:model/ProgressDetail} progressDetail
 */

PushImageInfo.prototype['progressDetail'] = undefined;
var _default = PushImageInfo;
exports["default"] = _default;