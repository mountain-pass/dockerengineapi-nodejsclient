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
 * The ServiceUpdateResponse model module.
 * @module model/ServiceUpdateResponse
 * @version 1.41
 */
var ServiceUpdateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceUpdateResponse</code>.
   * @alias module:model/ServiceUpdateResponse
   */
  function ServiceUpdateResponse() {
    _classCallCheck(this, ServiceUpdateResponse);

    ServiceUpdateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceUpdateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceUpdateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceUpdateResponse} obj Optional instance to populate.
     * @return {module:model/ServiceUpdateResponse} The populated <code>ServiceUpdateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceUpdateResponse();

        if (data.hasOwnProperty('Warnings')) {
          obj['Warnings'] = _ApiClient["default"].convertToType(data['Warnings'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ServiceUpdateResponse;
}();
/**
 * Optional warning messages
 * @member {Array.<String>} Warnings
 */


ServiceUpdateResponse.prototype['Warnings'] = undefined;
var _default = ServiceUpdateResponse;
exports["default"] = _default;