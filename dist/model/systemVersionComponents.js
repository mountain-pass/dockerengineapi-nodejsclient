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
 * The SystemVersionComponents model module.
 * @module model/SystemVersionComponents
 * @version 1.41
 */
var SystemVersionComponents = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemVersionComponents</code>.
   * @alias module:model/SystemVersionComponents
   * @param name {String} Name of the component 
   * @param version {String} Version of the component 
   */
  function SystemVersionComponents(name, version) {
    _classCallCheck(this, SystemVersionComponents);

    SystemVersionComponents.initialize(this, name, version);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemVersionComponents, null, [{
    key: "initialize",
    value: function initialize(obj, name, version) {
      obj['Name'] = name;
      obj['Version'] = version;
    }
    /**
     * Constructs a <code>SystemVersionComponents</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemVersionComponents} obj Optional instance to populate.
     * @return {module:model/SystemVersionComponents} The populated <code>SystemVersionComponents</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemVersionComponents();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ApiClient["default"].convertToType(data['Version'], 'String');
        }

        if (data.hasOwnProperty('Details')) {
          obj['Details'] = _ApiClient["default"].convertToType(data['Details'], Object);
        }
      }

      return obj;
    }
  }]);

  return SystemVersionComponents;
}();
/**
 * Name of the component 
 * @member {String} Name
 */


SystemVersionComponents.prototype['Name'] = undefined;
/**
 * Version of the component 
 * @member {String} Version
 */

SystemVersionComponents.prototype['Version'] = undefined;
/**
 * Key/value pairs of strings with additional information about the component. These values are intended for informational purposes only, and their content is not defined, and not part of the API specification.  These messages can be printed by the client as information to the user. 
 * @member {Object} Details
 */

SystemVersionComponents.prototype['Details'] = undefined;
var _default = SystemVersionComponents;
exports["default"] = _default;