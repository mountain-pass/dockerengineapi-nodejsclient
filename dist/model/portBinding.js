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
 * The PortBinding model module.
 * @module model/PortBinding
 * @version 1.41
 */
var PortBinding = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PortBinding</code>.
   * PortBinding represents a binding between a host IP address and a host port. 
   * @alias module:model/PortBinding
   */
  function PortBinding() {
    _classCallCheck(this, PortBinding);

    PortBinding.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PortBinding, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PortBinding</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PortBinding} obj Optional instance to populate.
     * @return {module:model/PortBinding} The populated <code>PortBinding</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PortBinding();

        if (data.hasOwnProperty('HostIp')) {
          obj['HostIp'] = _ApiClient["default"].convertToType(data['HostIp'], 'String');
        }

        if (data.hasOwnProperty('HostPort')) {
          obj['HostPort'] = _ApiClient["default"].convertToType(data['HostPort'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PortBinding;
}();
/**
 * Host IP address that the container's port is mapped to.
 * @member {String} HostIp
 */


PortBinding.prototype['HostIp'] = undefined;
/**
 * Host port number that the container's port is mapped to.
 * @member {String} HostPort
 */

PortBinding.prototype['HostPort'] = undefined;
var _default = PortBinding;
exports["default"] = _default;