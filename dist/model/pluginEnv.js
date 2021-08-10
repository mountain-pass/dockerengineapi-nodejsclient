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
 * The PluginEnv model module.
 * @module model/PluginEnv
 * @version 1.41
 */
var PluginEnv = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginEnv</code>.
   * @alias module:model/PluginEnv
   * @param name {String} 
   * @param description {String} 
   * @param settable {Array.<String>} 
   * @param value {String} 
   */
  function PluginEnv(name, description, settable, value) {
    _classCallCheck(this, PluginEnv);

    PluginEnv.initialize(this, name, description, settable, value);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginEnv, null, [{
    key: "initialize",
    value: function initialize(obj, name, description, settable, value) {
      obj['Name'] = name;
      obj['Description'] = description;
      obj['Settable'] = settable;
      obj['Value'] = value;
    }
    /**
     * Constructs a <code>PluginEnv</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginEnv} obj Optional instance to populate.
     * @return {module:model/PluginEnv} The populated <code>PluginEnv</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginEnv();

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
          obj['Value'] = _ApiClient["default"].convertToType(data['Value'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PluginEnv;
}();
/**
 * @member {String} Name
 */


PluginEnv.prototype['Name'] = undefined;
/**
 * @member {String} Description
 */

PluginEnv.prototype['Description'] = undefined;
/**
 * @member {Array.<String>} Settable
 */

PluginEnv.prototype['Settable'] = undefined;
/**
 * @member {String} Value
 */

PluginEnv.prototype['Value'] = undefined;
var _default = PluginEnv;
exports["default"] = _default;