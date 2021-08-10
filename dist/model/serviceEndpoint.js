"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EndpointPortConfig = _interopRequireDefault(require("./EndpointPortConfig"));

var _EndpointSpec = _interopRequireDefault(require("./EndpointSpec"));

var _ServiceEndpointVirtualIPs = _interopRequireDefault(require("./ServiceEndpointVirtualIPs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceEndpoint model module.
 * @module model/ServiceEndpoint
 * @version 1.41
 */
var ServiceEndpoint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceEndpoint</code>.
   * @alias module:model/ServiceEndpoint
   */
  function ServiceEndpoint() {
    _classCallCheck(this, ServiceEndpoint);

    ServiceEndpoint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceEndpoint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceEndpoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceEndpoint} obj Optional instance to populate.
     * @return {module:model/ServiceEndpoint} The populated <code>ServiceEndpoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceEndpoint();

        if (data.hasOwnProperty('Spec')) {
          obj['Spec'] = _EndpointSpec["default"].constructFromObject(data['Spec']);
        }

        if (data.hasOwnProperty('Ports')) {
          obj['Ports'] = _ApiClient["default"].convertToType(data['Ports'], [_EndpointPortConfig["default"]]);
        }

        if (data.hasOwnProperty('VirtualIPs')) {
          obj['VirtualIPs'] = _ApiClient["default"].convertToType(data['VirtualIPs'], [_ServiceEndpointVirtualIPs["default"]]);
        }
      }

      return obj;
    }
  }]);

  return ServiceEndpoint;
}();
/**
 * @member {module:model/EndpointSpec} Spec
 */


ServiceEndpoint.prototype['Spec'] = undefined;
/**
 * @member {Array.<module:model/EndpointPortConfig>} Ports
 */

ServiceEndpoint.prototype['Ports'] = undefined;
/**
 * @member {Array.<module:model/ServiceEndpointVirtualIPs>} VirtualIPs
 */

ServiceEndpoint.prototype['VirtualIPs'] = undefined;
var _default = ServiceEndpoint;
exports["default"] = _default;