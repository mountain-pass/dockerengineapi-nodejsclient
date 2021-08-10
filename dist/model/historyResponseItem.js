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
 * The HistoryResponseItem model module.
 * @module model/HistoryResponseItem
 * @version 1.41
 */
var HistoryResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoryResponseItem</code>.
   * individual image layer information in response to ImageHistory operation
   * @alias module:model/HistoryResponseItem
   * @param id {String} 
   * @param created {Number} 
   * @param createdBy {String} 
   * @param tags {Array.<String>} 
   * @param size {Number} 
   * @param comment {String} 
   */
  function HistoryResponseItem(id, created, createdBy, tags, size, comment) {
    _classCallCheck(this, HistoryResponseItem);

    HistoryResponseItem.initialize(this, id, created, createdBy, tags, size, comment);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoryResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, id, created, createdBy, tags, size, comment) {
      obj['Id'] = id;
      obj['Created'] = created;
      obj['CreatedBy'] = createdBy;
      obj['Tags'] = tags;
      obj['Size'] = size;
      obj['Comment'] = comment;
    }
    /**
     * Constructs a <code>HistoryResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoryResponseItem} obj Optional instance to populate.
     * @return {module:model/HistoryResponseItem} The populated <code>HistoryResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoryResponseItem();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('Created')) {
          obj['Created'] = _ApiClient["default"].convertToType(data['Created'], 'Number');
        }

        if (data.hasOwnProperty('CreatedBy')) {
          obj['CreatedBy'] = _ApiClient["default"].convertToType(data['CreatedBy'], 'String');
        }

        if (data.hasOwnProperty('Tags')) {
          obj['Tags'] = _ApiClient["default"].convertToType(data['Tags'], ['String']);
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('Comment')) {
          obj['Comment'] = _ApiClient["default"].convertToType(data['Comment'], 'String');
        }
      }

      return obj;
    }
  }]);

  return HistoryResponseItem;
}();
/**
 * @member {String} Id
 */


HistoryResponseItem.prototype['Id'] = undefined;
/**
 * @member {Number} Created
 */

HistoryResponseItem.prototype['Created'] = undefined;
/**
 * @member {String} CreatedBy
 */

HistoryResponseItem.prototype['CreatedBy'] = undefined;
/**
 * @member {Array.<String>} Tags
 */

HistoryResponseItem.prototype['Tags'] = undefined;
/**
 * @member {Number} Size
 */

HistoryResponseItem.prototype['Size'] = undefined;
/**
 * @member {String} Comment
 */

HistoryResponseItem.prototype['Comment'] = undefined;
var _default = HistoryResponseItem;
exports["default"] = _default;