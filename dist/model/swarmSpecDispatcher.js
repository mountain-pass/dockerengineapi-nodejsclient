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
 * The SwarmSpecDispatcher model module.
 * @module model/SwarmSpecDispatcher
 * @version 1.41
 */
var SwarmSpecDispatcher = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpecDispatcher</code>.
   * Dispatcher configuration.
   * @alias module:model/SwarmSpecDispatcher
   */
  function SwarmSpecDispatcher() {
    _classCallCheck(this, SwarmSpecDispatcher);

    SwarmSpecDispatcher.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpecDispatcher, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpecDispatcher</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpecDispatcher} obj Optional instance to populate.
     * @return {module:model/SwarmSpecDispatcher} The populated <code>SwarmSpecDispatcher</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpecDispatcher();

        if (data.hasOwnProperty('HeartbeatPeriod')) {
          obj['HeartbeatPeriod'] = _ApiClient["default"].convertToType(data['HeartbeatPeriod'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SwarmSpecDispatcher;
}();
/**
 * The delay for an agent to send a heartbeat to the dispatcher. 
 * @member {Number} HeartbeatPeriod
 */


SwarmSpecDispatcher.prototype['HeartbeatPeriod'] = undefined;
var _default = SwarmSpecDispatcher;
exports["default"] = _default;