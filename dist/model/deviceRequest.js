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
 * The DeviceRequest model module.
 * @module model/DeviceRequest
 * @version 1.41
 */
var DeviceRequest = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeviceRequest</code>.
   * A request for devices to be sent to device drivers
   * @alias module:model/DeviceRequest
   */
  function DeviceRequest() {
    _classCallCheck(this, DeviceRequest);

    DeviceRequest.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeviceRequest, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeviceRequest</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceRequest} obj Optional instance to populate.
     * @return {module:model/DeviceRequest} The populated <code>DeviceRequest</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeviceRequest();

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
        }

        if (data.hasOwnProperty('Count')) {
          obj['Count'] = _ApiClient["default"].convertToType(data['Count'], 'Number');
        }

        if (data.hasOwnProperty('DeviceIDs')) {
          obj['DeviceIDs'] = _ApiClient["default"].convertToType(data['DeviceIDs'], ['String']);
        }

        if (data.hasOwnProperty('Capabilities')) {
          obj['Capabilities'] = _ApiClient["default"].convertToType(data['Capabilities'], [['String']]);
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return DeviceRequest;
}();
/**
 * @member {String} Driver
 */


DeviceRequest.prototype['Driver'] = undefined;
/**
 * @member {Number} Count
 */

DeviceRequest.prototype['Count'] = undefined;
/**
 * @member {Array.<String>} DeviceIDs
 */

DeviceRequest.prototype['DeviceIDs'] = undefined;
/**
 * A list of capabilities; an OR list of AND lists of capabilities. 
 * @member {Array.<Array.<String>>} Capabilities
 */

DeviceRequest.prototype['Capabilities'] = undefined;
/**
 * Driver-specific options, specified as a key/value pairs. These options are passed directly to the driver. 
 * @member {Object.<String, String>} Options
 */

DeviceRequest.prototype['Options'] = undefined;
var _default = DeviceRequest;
exports["default"] = _default;