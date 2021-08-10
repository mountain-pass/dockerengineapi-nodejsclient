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
 * The CreateImageInfo model module.
 * @module model/CreateImageInfo
 * @version 1.41
 */
var CreateImageInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>CreateImageInfo</code>.
   * @alias module:model/CreateImageInfo
   */
  function CreateImageInfo() {
    _classCallCheck(this, CreateImageInfo);

    CreateImageInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(CreateImageInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>CreateImageInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CreateImageInfo} obj Optional instance to populate.
     * @return {module:model/CreateImageInfo} The populated <code>CreateImageInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new CreateImageInfo();

        if (data.hasOwnProperty('id')) {
          obj['id'] = _ApiClient["default"].convertToType(data['id'], 'String');
        }

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

  return CreateImageInfo;
}();
/**
 * @member {String} id
 */


CreateImageInfo.prototype['id'] = undefined;
/**
 * @member {String} error
 */

CreateImageInfo.prototype['error'] = undefined;
/**
 * @member {String} status
 */

CreateImageInfo.prototype['status'] = undefined;
/**
 * @member {String} progress
 */

CreateImageInfo.prototype['progress'] = undefined;
/**
 * @member {module:model/ProgressDetail} progressDetail
 */

CreateImageInfo.prototype['progressDetail'] = undefined;
var _default = CreateImageInfo;
exports["default"] = _default;