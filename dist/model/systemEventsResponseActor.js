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
 * The SystemEventsResponseActor model module.
 * @module model/SystemEventsResponseActor
 * @version 1.41
 */
var SystemEventsResponseActor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SystemEventsResponseActor</code>.
   * @alias module:model/SystemEventsResponseActor
   */
  function SystemEventsResponseActor() {
    _classCallCheck(this, SystemEventsResponseActor);

    SystemEventsResponseActor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SystemEventsResponseActor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SystemEventsResponseActor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SystemEventsResponseActor} obj Optional instance to populate.
     * @return {module:model/SystemEventsResponseActor} The populated <code>SystemEventsResponseActor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SystemEventsResponseActor();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Attributes')) {
          obj['Attributes'] = _ApiClient["default"].convertToType(data['Attributes'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return SystemEventsResponseActor;
}();
/**
 * The ID of the object emitting the event
 * @member {String} ID
 */


SystemEventsResponseActor.prototype['ID'] = undefined;
/**
 * Various key/value attributes of the object, depending on its type
 * @member {Object.<String, String>} Attributes
 */

SystemEventsResponseActor.prototype['Attributes'] = undefined;
var _default = SystemEventsResponseActor;
exports["default"] = _default;