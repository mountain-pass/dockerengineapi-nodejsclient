"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IPAM = _interopRequireDefault(require("./IPAM"));

var _NetworkContainer = _interopRequireDefault(require("./NetworkContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Network model module.
 * @module model/Network
 * @version 1.41
 */
var Network = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Network</code>.
   * @alias module:model/Network
   */
  function Network() {
    _classCallCheck(this, Network);

    Network.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Network, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Network</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Network} obj Optional instance to populate.
     * @return {module:model/Network} The populated <code>Network</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Network();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('Created')) {
          obj['Created'] = _ApiClient["default"].convertToType(data['Created'], 'String');
        }

        if (data.hasOwnProperty('Scope')) {
          obj['Scope'] = _ApiClient["default"].convertToType(data['Scope'], 'String');
        }

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
        }

        if (data.hasOwnProperty('EnableIPv6')) {
          obj['EnableIPv6'] = _ApiClient["default"].convertToType(data['EnableIPv6'], 'Boolean');
        }

        if (data.hasOwnProperty('IPAM')) {
          obj['IPAM'] = _IPAM["default"].constructFromObject(data['IPAM']);
        }

        if (data.hasOwnProperty('Internal')) {
          obj['Internal'] = _ApiClient["default"].convertToType(data['Internal'], 'Boolean');
        }

        if (data.hasOwnProperty('Attachable')) {
          obj['Attachable'] = _ApiClient["default"].convertToType(data['Attachable'], 'Boolean');
        }

        if (data.hasOwnProperty('Ingress')) {
          obj['Ingress'] = _ApiClient["default"].convertToType(data['Ingress'], 'Boolean');
        }

        if (data.hasOwnProperty('Containers')) {
          obj['Containers'] = _ApiClient["default"].convertToType(data['Containers'], {
            'String': _NetworkContainer["default"]
          });
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return Network;
}();
/**
 * @member {String} Name
 */


Network.prototype['Name'] = undefined;
/**
 * @member {String} Id
 */

Network.prototype['Id'] = undefined;
/**
 * @member {String} Created
 */

Network.prototype['Created'] = undefined;
/**
 * @member {String} Scope
 */

Network.prototype['Scope'] = undefined;
/**
 * @member {String} Driver
 */

Network.prototype['Driver'] = undefined;
/**
 * @member {Boolean} EnableIPv6
 */

Network.prototype['EnableIPv6'] = undefined;
/**
 * @member {module:model/IPAM} IPAM
 */

Network.prototype['IPAM'] = undefined;
/**
 * @member {Boolean} Internal
 */

Network.prototype['Internal'] = undefined;
/**
 * @member {Boolean} Attachable
 */

Network.prototype['Attachable'] = undefined;
/**
 * @member {Boolean} Ingress
 */

Network.prototype['Ingress'] = undefined;
/**
 * @member {Object.<String, module:model/NetworkContainer>} Containers
 */

Network.prototype['Containers'] = undefined;
/**
 * @member {Object.<String, String>} Options
 */

Network.prototype['Options'] = undefined;
/**
 * @member {Object.<String, String>} Labels
 */

Network.prototype['Labels'] = undefined;
var _default = Network;
exports["default"] = _default;