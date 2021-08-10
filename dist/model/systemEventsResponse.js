"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SystemEventsResponseActor = _interopRequireDefault(require("./SystemEventsResponseActor"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SystemEventsResponse model module.
 * @module model/SystemEventsResponse
 * @version 1.41
 */
var SystemEventsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemEventsResponse</code>.
   * @alias module:model/SystemEventsResponse
   */
  function SystemEventsResponse() {
    _classCallCheck(this, SystemEventsResponse);

    SystemEventsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemEventsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SystemEventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemEventsResponse} obj Optional instance to populate.
     * @return {module:model/SystemEventsResponse} The populated <code>SystemEventsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemEventsResponse();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('Action')) {
          obj['Action'] = _ApiClient["default"].convertToType(data['Action'], 'String');
        }

        if (data.hasOwnProperty('Actor')) {
          obj['Actor'] = _SystemEventsResponseActor["default"].constructFromObject(data['Actor']);
        }

        if (data.hasOwnProperty('time')) {
          obj['time'] = _ApiClient["default"].convertToType(data['time'], 'Number');
        }

        if (data.hasOwnProperty('timeNano')) {
          obj['timeNano'] = _ApiClient["default"].convertToType(data['timeNano'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return SystemEventsResponse;
}();
/**
 * The type of object emitting the event
 * @member {String} Type
 */


SystemEventsResponse.prototype['Type'] = undefined;
/**
 * The type of event
 * @member {String} Action
 */

SystemEventsResponse.prototype['Action'] = undefined;
/**
 * @member {module:model/SystemEventsResponseActor} Actor
 */

SystemEventsResponse.prototype['Actor'] = undefined;
/**
 * Timestamp of event
 * @member {Number} time
 */

SystemEventsResponse.prototype['time'] = undefined;
/**
 * Timestamp of event, with nanosecond accuracy
 * @member {Number} timeNano
 */

SystemEventsResponse.prototype['timeNano'] = undefined;
var _default = SystemEventsResponse;
exports["default"] = _default;