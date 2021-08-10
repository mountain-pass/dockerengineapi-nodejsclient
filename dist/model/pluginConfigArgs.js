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
 * The PluginConfigArgs model module.
 * @module model/PluginConfigArgs
 * @version 1.41
 */
var PluginConfigArgs = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginConfigArgs</code>.
   * @alias module:model/PluginConfigArgs
   * @param name {String} 
   * @param description {String} 
   * @param settable {Array.<String>} 
   * @param value {Array.<String>} 
   */
  function PluginConfigArgs(name, description, settable, value) {
    _classCallCheck(this, PluginConfigArgs);

    PluginConfigArgs.initialize(this, name, description, settable, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginConfigArgs, null, [{
    key: "initialize",
    value: function initialize(obj, name, description, settable, value) {
      obj['Name'] = name;
      obj['Description'] = description;
      obj['Settable'] = settable;
      obj['Value'] = value;
    }
    /**
     * Constructs a <code>PluginConfigArgs</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginConfigArgs} obj Optional instance to populate.
     * @return {module:model/PluginConfigArgs} The populated <code>PluginConfigArgs</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginConfigArgs();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Settable')) {
          obj['Settable'] = _ApiClient["default"].convertToType(data['Settable'], ['String']);
        }

        if (data.hasOwnProperty('Value')) {
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PluginConfigArgs;
}();
/**
 * @member {String} Name
 */


PluginConfigArgs.prototype['Name'] = undefined;
/**
 * @member {String} Description
 */

PluginConfigArgs.prototype['Description'] = undefined;
/**
 * @member {Array.<String>} Settable
 */

PluginConfigArgs.prototype['Settable'] = undefined;
/**
 * @member {Array.<String>} Value
 */

PluginConfigArgs.prototype['Value'] = undefined;
var _default = PluginConfigArgs;
exports["default"] = _default;