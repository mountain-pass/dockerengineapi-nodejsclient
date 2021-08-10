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
 * The PluginMount model module.
 * @module model/PluginMount
 * @version 1.41
 */
var PluginMount = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PluginMount</code>.
   * @alias module:model/PluginMount
   * @param name {String} 
   * @param description {String} 
   * @param settable {Array.<String>} 
   * @param source {String} 
   * @param destination {String} 
   * @param type {String} 
   * @param options {Array.<String>} 
   */
  function PluginMount(name, description, settable, source, destination, type, options) {
    _classCallCheck(this, PluginMount);

    PluginMount.initialize(this, name, description, settable, source, destination, type, options);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PluginMount, null, [{
    key: "initialize",
    value: function initialize(obj, name, description, settable, source, destination, type, options) {
      obj['Name'] = name;
      obj['Description'] = description;
      obj['Settable'] = settable;
      obj['Source'] = source;
      obj['Destination'] = destination;
      obj['Type'] = type;
      obj['Options'] = options;
    }
    /**
     * Constructs a <code>PluginMount</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PluginMount} obj Optional instance to populate.
     * @return {module:model/PluginMount} The populated <code>PluginMount</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PluginMount();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('Settable')) {
          obj['Settable'] = _ApiClient["default"].convertToType(data['Settable'], ['String']);
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _ApiClient["default"].convertToType(data['Source'], 'String');
        }

        if (data.hasOwnProperty('Destination')) {
          obj['Destination'] = _ApiClient["default"].convertToType(data['Destination'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return PluginMount;
}();
/**
 * @member {String} Name
 */


PluginMount.prototype['Name'] = undefined;
/**
 * @member {String} Description
 */

PluginMount.prototype['Description'] = undefined;
/**
 * @member {Array.<String>} Settable
 */

PluginMount.prototype['Settable'] = undefined;
/**
 * @member {String} Source
 */

PluginMount.prototype['Source'] = undefined;
/**
 * @member {String} Destination
 */

PluginMount.prototype['Destination'] = undefined;
/**
 * @member {String} Type
 */

PluginMount.prototype['Type'] = undefined;
/**
 * @member {Array.<String>} Options
 */

PluginMount.prototype['Options'] = undefined;
var _default = PluginMount;
exports["default"] = _default;