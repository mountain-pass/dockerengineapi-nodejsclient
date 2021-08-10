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
 * The ImageDeleteResponseItem model module.
 * @module model/ImageDeleteResponseItem
 * @version 1.41
 */
var ImageDeleteResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImageDeleteResponseItem</code>.
   * @alias module:model/ImageDeleteResponseItem
   */
  function ImageDeleteResponseItem() {
    _classCallCheck(this, ImageDeleteResponseItem);

    ImageDeleteResponseItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImageDeleteResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImageDeleteResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageDeleteResponseItem} obj Optional instance to populate.
     * @return {module:model/ImageDeleteResponseItem} The populated <code>ImageDeleteResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImageDeleteResponseItem();

        if (data.hasOwnProperty('Untagged')) {
          obj['Untagged'] = _ApiClient["default"].convertToType(data['Untagged'], 'String');
        }

        if (data.hasOwnProperty('Deleted')) {
          obj['Deleted'] = _ApiClient["default"].convertToType(data['Deleted'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ImageDeleteResponseItem;
}();
/**
 * The image ID of an image that was untagged
 * @member {String} Untagged
 */


ImageDeleteResponseItem.prototype['Untagged'] = undefined;
/**
 * The image ID of an image that was deleted
 * @member {String} Deleted
 */

ImageDeleteResponseItem.prototype['Deleted'] = undefined;
var _default = ImageDeleteResponseItem;
exports["default"] = _default;