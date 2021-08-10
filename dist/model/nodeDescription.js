"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EngineDescription = _interopRequireDefault(require("./EngineDescription"));

var _Platform = _interopRequireDefault(require("./Platform"));

var _ResourceObject = _interopRequireDefault(require("./ResourceObject"));

var _TLSInfo = _interopRequireDefault(require("./TLSInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NodeDescription model module.
 * @module model/NodeDescription
 * @version 1.41
 */
var NodeDescription = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NodeDescription</code>.
   * NodeDescription encapsulates the properties of the Node as reported by the agent. 
   * @alias module:model/NodeDescription
   */
  function NodeDescription() {
    _classCallCheck(this, NodeDescription);

    NodeDescription.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NodeDescription, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NodeDescription</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeDescription} obj Optional instance to populate.
     * @return {module:model/NodeDescription} The populated <code>NodeDescription</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NodeDescription();

        if (data.hasOwnProperty('Hostname')) {
          obj['Hostname'] = _ApiClient["default"].convertToType(data['Hostname'], 'String');
        }

        if (data.hasOwnProperty('Platform')) {
          obj['Platform'] = _Platform["default"].constructFromObject(data['Platform']);
        }

        if (data.hasOwnProperty('Resources')) {
          obj['Resources'] = _ResourceObject["default"].constructFromObject(data['Resources']);
        }

        if (data.hasOwnProperty('Engine')) {
          obj['Engine'] = _EngineDescription["default"].constructFromObject(data['Engine']);
        }

        if (data.hasOwnProperty('TLSInfo')) {
          obj['TLSInfo'] = _TLSInfo["default"].constructFromObject(data['TLSInfo']);
        }
      }

      return obj;
    }
  }]);

  return NodeDescription;
}();
/**
 * @member {String} Hostname
 */


NodeDescription.prototype['Hostname'] = undefined;
/**
 * @member {module:model/Platform} Platform
 */

NodeDescription.prototype['Platform'] = undefined;
/**
 * @member {module:model/ResourceObject} Resources
 */

NodeDescription.prototype['Resources'] = undefined;
/**
 * @member {module:model/EngineDescription} Engine
 */

NodeDescription.prototype['Engine'] = undefined;
/**
 * @member {module:model/TLSInfo} TLSInfo
 */

NodeDescription.prototype['TLSInfo'] = undefined;
var _default = NodeDescription;
exports["default"] = _default;