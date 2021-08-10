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
 * The EngineDescriptionPlugins model module.
 * @module model/EngineDescriptionPlugins
 * @version 1.41
 */
var EngineDescriptionPlugins = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EngineDescriptionPlugins</code>.
   * @alias module:model/EngineDescriptionPlugins
   */
  function EngineDescriptionPlugins() {
    _classCallCheck(this, EngineDescriptionPlugins);

    EngineDescriptionPlugins.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EngineDescriptionPlugins, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EngineDescriptionPlugins</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EngineDescriptionPlugins} obj Optional instance to populate.
     * @return {module:model/EngineDescriptionPlugins} The populated <code>EngineDescriptionPlugins</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EngineDescriptionPlugins();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EngineDescriptionPlugins;
}();
/**
 * @member {String} Type
 */


EngineDescriptionPlugins.prototype['Type'] = undefined;
/**
 * @member {String} Name
 */

EngineDescriptionPlugins.prototype['Name'] = undefined;
var _default = EngineDescriptionPlugins;
exports["default"] = _default;