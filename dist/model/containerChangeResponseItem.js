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
 * The ContainerChangeResponseItem model module.
 * @module model/ContainerChangeResponseItem
 * @version 1.41
 */
var ContainerChangeResponseItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerChangeResponseItem</code>.
   * change item in response to ContainerChanges operation
   * @alias module:model/ContainerChangeResponseItem
   * @param path {String} Path to file that has changed
   * @param kind {Number} Kind of change
   */
  function ContainerChangeResponseItem(path, kind) {
    _classCallCheck(this, ContainerChangeResponseItem);

    ContainerChangeResponseItem.initialize(this, path, kind);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerChangeResponseItem, null, [{
    key: "initialize",
    value: function initialize(obj, path, kind) {
      obj['Path'] = path;
      obj['Kind'] = kind;
    }
    /**
     * Constructs a <code>ContainerChangeResponseItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerChangeResponseItem} obj Optional instance to populate.
     * @return {module:model/ContainerChangeResponseItem} The populated <code>ContainerChangeResponseItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerChangeResponseItem();

        if (data.hasOwnProperty('Path')) {
          obj['Path'] = _ApiClient["default"].convertToType(data['Path'], 'String');
        }

        if (data.hasOwnProperty('Kind')) {
          obj['Kind'] = _ApiClient["default"].convertToType(data['Kind'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ContainerChangeResponseItem;
}();
/**
 * Path to file that has changed
 * @member {String} Path
 */


ContainerChangeResponseItem.prototype['Path'] = undefined;
/**
 * Kind of change
 * @member {Number} Kind
 */

ContainerChangeResponseItem.prototype['Kind'] = undefined;
var _default = ContainerChangeResponseItem;
exports["default"] = _default;