"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EndpointPortConfig = _interopRequireDefault(require("./EndpointPortConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EndpointSpec model module.
 * @module model/EndpointSpec
 * @version 1.41
 */
var EndpointSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EndpointSpec</code>.
   * Properties that can be configured to access and load balance a service.
   * @alias module:model/EndpointSpec
   */
  function EndpointSpec() {
    _classCallCheck(this, EndpointSpec);

    EndpointSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EndpointSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EndpointSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointSpec} obj Optional instance to populate.
     * @return {module:model/EndpointSpec} The populated <code>EndpointSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EndpointSpec();

        if (data.hasOwnProperty('Mode')) {
          obj['Mode'] = _ApiClient["default"].convertToType(data['Mode'], 'String');
        }

        if (data.hasOwnProperty('Ports')) {
          obj['Ports'] = _ApiClient["default"].convertToType(data['Ports'], [_EndpointPortConfig["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EndpointSpec;
}();
/**
 * The mode of resolution to use for internal load balancing between tasks. 
 * @member {module:model/EndpointSpec.ModeEnum} Mode
 * @default 'vip'
 */


EndpointSpec.prototype['Mode'] = 'vip';
/**
 * List of exposed ports that this service is accessible on from the outside. Ports can only be provided if `vip` resolution mode is used. 
 * @member {Array.<module:model/EndpointPortConfig>} Ports
 */

EndpointSpec.prototype['Ports'] = undefined;
/**
 * Allowed values for the <code>Mode</code> property.
 * @enum {String}
 * @readonly
 */

EndpointSpec['ModeEnum'] = {
  /**
   * value: "vip"
   * @const
   */
  "vip": "vip",

  /**
   * value: "dnsrr"
   * @const
   */
  "dnsrr": "dnsrr"
};
var _default = EndpointSpec;
exports["default"] = _default;