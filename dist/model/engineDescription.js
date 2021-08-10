"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EngineDescriptionPlugins = _interopRequireDefault(require("./EngineDescriptionPlugins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EngineDescription model module.
 * @module model/EngineDescription
 * @version 1.41
 */
var EngineDescription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EngineDescription</code>.
   * EngineDescription provides information about an engine.
   * @alias module:model/EngineDescription
   */
  function EngineDescription() {
    _classCallCheck(this, EngineDescription);

    EngineDescription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EngineDescription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EngineDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EngineDescription} obj Optional instance to populate.
     * @return {module:model/EngineDescription} The populated <code>EngineDescription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EngineDescription();

        if (data.hasOwnProperty('EngineVersion')) {
          obj['EngineVersion'] = _ApiClient["default"].convertToType(data['EngineVersion'], 'String');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Plugins')) {
          obj['Plugins'] = _ApiClient["default"].convertToType(data['Plugins'], [_EngineDescriptionPlugins["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EngineDescription;
}();
/**
 * @member {String} EngineVersion
 */


EngineDescription.prototype['EngineVersion'] = undefined;
/**
 * @member {Object.<String, String>} Labels
 */

EngineDescription.prototype['Labels'] = undefined;
/**
 * @member {Array.<module:model/EngineDescriptionPlugins>} Plugins
 */

EngineDescription.prototype['Plugins'] = undefined;
var _default = EngineDescription;
exports["default"] = _default;