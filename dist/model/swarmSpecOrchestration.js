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
 * The SwarmSpecOrchestration model module.
 * @module model/SwarmSpecOrchestration
 * @version 1.41
 */
var SwarmSpecOrchestration = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpecOrchestration</code>.
   * Orchestration configuration.
   * @alias module:model/SwarmSpecOrchestration
   */
  function SwarmSpecOrchestration() {
    _classCallCheck(this, SwarmSpecOrchestration);

    SwarmSpecOrchestration.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpecOrchestration, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpecOrchestration</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpecOrchestration} obj Optional instance to populate.
     * @return {module:model/SwarmSpecOrchestration} The populated <code>SwarmSpecOrchestration</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpecOrchestration();

        if (data.hasOwnProperty('TaskHistoryRetentionLimit')) {
          obj['TaskHistoryRetentionLimit'] = _ApiClient["default"].convertToType(data['TaskHistoryRetentionLimit'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SwarmSpecOrchestration;
}();
/**
 * The number of historic tasks to keep per instance or node. If negative, never remove completed or failed tasks. 
 * @member {Number} TaskHistoryRetentionLimit
 */


SwarmSpecOrchestration.prototype['TaskHistoryRetentionLimit'] = undefined;
var _default = SwarmSpecOrchestration;
exports["default"] = _default;