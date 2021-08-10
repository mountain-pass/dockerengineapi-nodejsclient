"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IPAM = _interopRequireDefault(require("./IPAM"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The InlineObject2 model module.
 * @module model/InlineObject2
 * @version 1.41
 */
var InlineObject2 = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>InlineObject2</code>.
   * @alias module:model/InlineObject2
   * @param name {String} The network's name.
   */
  function InlineObject2(name) {
    _classCallCheck(this, InlineObject2);

    InlineObject2.initialize(this, name);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(InlineObject2, null, [{
    key: "initialize",
    value: function initialize(obj, name) {
      obj['Name'] = name;
    }
    /**
     * Constructs a <code>InlineObject2</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/InlineObject2} obj Optional instance to populate.
     * @return {module:model/InlineObject2} The populated <code>InlineObject2</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new InlineObject2();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('CheckDuplicate')) {
          obj['CheckDuplicate'] = _ApiClient["default"].convertToType(data['CheckDuplicate'], 'Boolean');
        }

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
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

        if (data.hasOwnProperty('IPAM')) {
          obj['IPAM'] = _IPAM["default"].constructFromObject(data['IPAM']);
        }

        if (data.hasOwnProperty('EnableIPv6')) {
          obj['EnableIPv6'] = _ApiClient["default"].convertToType(data['EnableIPv6'], 'Boolean');
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

  return InlineObject2;
}();
/**
 * The network's name.
 * @member {String} Name
 */


InlineObject2.prototype['Name'] = undefined;
/**
 * Check for networks with duplicate names. Since Network is primarily keyed based on a random ID and not on the name, and network name is strictly a user-friendly alias to the network which is uniquely identified using ID, there is no guaranteed way to check for duplicates. CheckDuplicate is there to provide a best effort checking of any networks which has the same name but it is not guaranteed to catch all name collisions. 
 * @member {Boolean} CheckDuplicate
 */

InlineObject2.prototype['CheckDuplicate'] = undefined;
/**
 * Name of the network driver plugin to use.
 * @member {String} Driver
 * @default 'bridge'
 */

InlineObject2.prototype['Driver'] = 'bridge';
/**
 * Restrict external access to the network.
 * @member {Boolean} Internal
 */

InlineObject2.prototype['Internal'] = undefined;
/**
 * Globally scoped network is manually attachable by regular containers from workers in swarm mode. 
 * @member {Boolean} Attachable
 */

InlineObject2.prototype['Attachable'] = undefined;
/**
 * Ingress network is the network which provides the routing-mesh in swarm mode. 
 * @member {Boolean} Ingress
 */

InlineObject2.prototype['Ingress'] = undefined;
/**
 * @member {module:model/IPAM} IPAM
 */

InlineObject2.prototype['IPAM'] = undefined;
/**
 * Enable IPv6 on the network.
 * @member {Boolean} EnableIPv6
 */

InlineObject2.prototype['EnableIPv6'] = undefined;
/**
 * Network specific options to be used by the drivers.
 * @member {Object.<String, String>} Options
 */

InlineObject2.prototype['Options'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

InlineObject2.prototype['Labels'] = undefined;
var _default = InlineObject2;
exports["default"] = _default;