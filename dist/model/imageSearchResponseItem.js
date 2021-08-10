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
 * The ImageSearchResponseItem model module.
 * @module model/ImageSearchResponseItem
 * @version 1.41
 */
var ImageSearchResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImageSearchResponseItem</code>.
   * @alias module:model/ImageSearchResponseItem
   */
  function ImageSearchResponseItem() {
    _classCallCheck(this, ImageSearchResponseItem);

    ImageSearchResponseItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImageSearchResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ImageSearchResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageSearchResponseItem} obj Optional instance to populate.
     * @return {module:model/ImageSearchResponseItem} The populated <code>ImageSearchResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImageSearchResponseItem();

        if (data.hasOwnProperty('description')) {
          obj['description'] = _ApiClient["default"].convertToType(data['description'], 'String');
        }

        if (data.hasOwnProperty('is_official')) {
          obj['is_official'] = _ApiClient["default"].convertToType(data['is_official'], 'Boolean');
        }

        if (data.hasOwnProperty('is_automated')) {
          obj['is_automated'] = _ApiClient["default"].convertToType(data['is_automated'], 'Boolean');
        }

        if (data.hasOwnProperty('name')) {
          obj['name'] = _ApiClient["default"].convertToType(data['name'], 'String');
        }

        if (data.hasOwnProperty('star_count')) {
          obj['star_count'] = _ApiClient["default"].convertToType(data['star_count'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ImageSearchResponseItem;
}();
/**
 * @member {String} description
 */


ImageSearchResponseItem.prototype['description'] = undefined;
/**
 * @member {Boolean} is_official
 */

ImageSearchResponseItem.prototype['is_official'] = undefined;
/**
 * @member {Boolean} is_automated
 */

ImageSearchResponseItem.prototype['is_automated'] = undefined;
/**
 * @member {String} name
 */

ImageSearchResponseItem.prototype['name'] = undefined;
/**
 * @member {Number} star_count
 */

ImageSearchResponseItem.prototype['star_count'] = undefined;
var _default = ImageSearchResponseItem;
exports["default"] = _default;