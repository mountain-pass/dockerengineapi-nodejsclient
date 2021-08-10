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
 * The Port model module.
 * @module model/Port
 * @version 1.41
 */
var Port = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Port</code>.
   * An open port on a container
   * @alias module:model/Port
   * @param privatePort {Number} Port on the container
   * @param type {module:model/Port.TypeEnum} 
   */
  function Port(privatePort, type) {
    _classCallCheck(this, Port);

    Port.initialize(this, privatePort, type);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Port, null, [{
    key: "initialize",
    value: function initialize(obj, privatePort, type) {
      obj['PrivatePort'] = privatePort;
      obj['Type'] = type;
    }
    /**
     * Constructs a <code>Port</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Port} obj Optional instance to populate.
     * @return {module:model/Port} The populated <code>Port</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Port();

        if (data.hasOwnProperty('IP')) {
          obj['IP'] = _ApiClient["default"].convertToType(data['IP'], 'String');
        }

        if (data.hasOwnProperty('PrivatePort')) {
          obj['PrivatePort'] = _ApiClient["default"].convertToType(data['PrivatePort'], 'Number');
        }

        if (data.hasOwnProperty('PublicPort')) {
          obj['PublicPort'] = _ApiClient["default"].convertToType(data['PublicPort'], 'Number');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Port;
}();
/**
 * Host IP address that the container's port is mapped to
 * @member {String} IP
 */


Port.prototype['IP'] = undefined;
/**
 * Port on the container
 * @member {Number} PrivatePort
 */

Port.prototype['PrivatePort'] = undefined;
/**
 * Port exposed on the host
 * @member {Number} PublicPort
 */

Port.prototype['PublicPort'] = undefined;
/**
 * @member {module:model/Port.TypeEnum} Type
 */

Port.prototype['Type'] = undefined;
/**
 * Allowed values for the <code>Type</code> property.
 * @enum {String}
 * @readonly
 */

Port['TypeEnum'] = {
  /**
   * value: "tcp"
   * @const
   */
  "tcp": "tcp",

  /**
   * value: "udp"
   * @const
   */
  "udp": "udp",

  /**
   * value: "sctp"
   * @const
   */
  "sctp": "sctp"
};
var _default = Port;
exports["default"] = _default;