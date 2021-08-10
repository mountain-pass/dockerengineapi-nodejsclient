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
 * The IPAM model module.
 * @module model/IPAM
 * @version 1.41
 */
var IPAM = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IPAM</code>.
   * @alias module:model/IPAM
   */
  function IPAM() {
    _classCallCheck(this, IPAM);

    IPAM.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IPAM, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IPAM</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IPAM} obj Optional instance to populate.
     * @return {module:model/IPAM} The populated <code>IPAM</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IPAM();

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
        }

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _ApiClient["default"].convertToType(data['Config'], [{
            'String': 'String'
          }]);
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

  return IPAM;
}();
/**
 * Name of the IPAM driver to use.
 * @member {String} Driver
 * @default 'default'
 */


IPAM.prototype['Driver'] = 'default';
/**
 * List of IPAM configuration options, specified as a map:  ``` {\"Subnet\": <CIDR>, \"IPRange\": <CIDR>, \"Gateway\": <IP address>, \"AuxAddress\": <device_name:IP address>} ``` 
 * @member {Array.<Object.<String, String>>} Config
 */

IPAM.prototype['Config'] = undefined;
/**
 * Driver-specific options, specified as a map.
 * @member {Object.<String, String>} Options
 */

IPAM.prototype['Options'] = undefined;
var _default = IPAM;
exports["default"] = _default;