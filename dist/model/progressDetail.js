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
 * The ProgressDetail model module.
 * @module model/ProgressDetail
 * @version 1.41
 */
var ProgressDetail = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProgressDetail</code>.
   * @alias module:model/ProgressDetail
   */
  function ProgressDetail() {
    _classCallCheck(this, ProgressDetail);

    ProgressDetail.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProgressDetail, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProgressDetail</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProgressDetail} obj Optional instance to populate.
     * @return {module:model/ProgressDetail} The populated <code>ProgressDetail</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProgressDetail();

        if (data.hasOwnProperty('current')) {
          obj['current'] = _ApiClient["default"].convertToType(data['current'], 'Number');
        }

        if (data.hasOwnProperty('total')) {
          obj['total'] = _ApiClient["default"].convertToType(data['total'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ProgressDetail;
}();
/**
 * @member {Number} current
 */


ProgressDetail.prototype['current'] = undefined;
/**
 * @member {Number} total
 */

ProgressDetail.prototype['total'] = undefined;
var _default = ProgressDetail;
exports["default"] = _default;