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
 * The PluginPrivilegeItem model module.
 * @module model/PluginPrivilegeItem
 * @version 1.41
 */
var PluginPrivilegeItem = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginPrivilegeItem</code>.
   * Describes a permission the user has to accept upon installing the plugin. 
   * @alias module:model/PluginPrivilegeItem
   */
  function PluginPrivilegeItem() {
    _classCallCheck(this, PluginPrivilegeItem);

    PluginPrivilegeItem.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginPrivilegeItem, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PluginPrivilegeItem</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginPrivilegeItem} obj Optional instance to populate.
     * @return {module:model/PluginPrivilegeItem} The populated <code>PluginPrivilegeItem</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginPrivilegeItem();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PluginPrivilegeItem;
}();
/**
 * @member {String} Name
 */


PluginPrivilegeItem.prototype['Name'] = undefined;
/**
 * @member {String} Description
 */

PluginPrivilegeItem.prototype['Description'] = undefined;
/**
 * @member {Array.<String>} Value
 */

PluginPrivilegeItem.prototype['Value'] = undefined;
var _default = PluginPrivilegeItem;
exports["default"] = _default;