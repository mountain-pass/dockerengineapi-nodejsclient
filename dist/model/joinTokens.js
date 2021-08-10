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
 * The JoinTokens model module.
 * @module model/JoinTokens
 * @version 1.41
 */
var JoinTokens = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>JoinTokens</code>.
   * JoinTokens contains the tokens workers and managers need to join the swarm. 
   * @alias module:model/JoinTokens
   */
  function JoinTokens() {
    _classCallCheck(this, JoinTokens);

    JoinTokens.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(JoinTokens, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>JoinTokens</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/JoinTokens} obj Optional instance to populate.
     * @return {module:model/JoinTokens} The populated <code>JoinTokens</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new JoinTokens();

        if (data.hasOwnProperty('Worker')) {
          obj['Worker'] = _ApiClient["default"].convertToType(data['Worker'], 'String');
        }

        if (data.hasOwnProperty('Manager')) {
          obj['Manager'] = _ApiClient["default"].convertToType(data['Manager'], 'String');
        }
      }

      return obj;
    }
  }]);

  return JoinTokens;
}();
/**
 * The token workers can use to join the swarm. 
 * @member {String} Worker
 */


JoinTokens.prototype['Worker'] = undefined;
/**
 * The token managers can use to join the swarm. 
 * @member {String} Manager
 */

JoinTokens.prototype['Manager'] = undefined;
var _default = JoinTokens;
exports["default"] = _default;