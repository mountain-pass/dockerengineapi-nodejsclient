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
 * The NetworkCreateResponse model module.
 * @module model/NetworkCreateResponse
 * @version 1.41
 */
var NetworkCreateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NetworkCreateResponse</code>.
   * @alias module:model/NetworkCreateResponse
   */
  function NetworkCreateResponse() {
    _classCallCheck(this, NetworkCreateResponse);

    NetworkCreateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkCreateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkCreateResponse} obj Optional instance to populate.
     * @return {module:model/NetworkCreateResponse} The populated <code>NetworkCreateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkCreateResponse();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('Warning')) {
          obj['Warning'] = _ApiClient["default"].convertToType(data['Warning'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NetworkCreateResponse;
}();
/**
 * The ID of the created network.
 * @member {String} Id
 */


NetworkCreateResponse.prototype['Id'] = undefined;
/**
 * @member {String} Warning
 */

NetworkCreateResponse.prototype['Warning'] = undefined;
var _default = NetworkCreateResponse;
exports["default"] = _default;