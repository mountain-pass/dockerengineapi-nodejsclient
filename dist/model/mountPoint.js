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
 * The MountPoint model module.
 * @module model/MountPoint
 * @version 1.41
 */
var MountPoint = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>MountPoint</code>.
   * A mount point inside a container
   * @alias module:model/MountPoint
   */
  function MountPoint() {
    _classCallCheck(this, MountPoint);

    MountPoint.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(MountPoint, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>MountPoint</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/MountPoint} obj Optional instance to populate.
     * @return {module:model/MountPoint} The populated <code>MountPoint</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new MountPoint();

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Source')) {
          obj['Source'] = _ApiClient["default"].convertToType(data['Source'], 'String');
        }

        if (data.hasOwnProperty('Destination')) {
          obj['Destination'] = _ApiClient["default"].convertToType(data['Destination'], 'String');
        }

        if (data.hasOwnProperty('Driver')) {
          obj['Driver'] = _ApiClient["default"].convertToType(data['Driver'], 'String');
        }

        if (data.hasOwnProperty('Mode')) {
          obj['Mode'] = _ApiClient["default"].convertToType(data['Mode'], 'String');
        }

        if (data.hasOwnProperty('RW')) {
          obj['RW'] = _ApiClient["default"].convertToType(data['RW'], 'Boolean');
        }

        if (data.hasOwnProperty('Propagation')) {
          obj['Propagation'] = _ApiClient["default"].convertToType(data['Propagation'], 'String');
        }
      }

      return obj;
    }
  }]);

  return MountPoint;
}();
/**
 * @member {String} Type
 */


MountPoint.prototype['Type'] = undefined;
/**
 * @member {String} Name
 */

MountPoint.prototype['Name'] = undefined;
/**
 * @member {String} Source
 */

MountPoint.prototype['Source'] = undefined;
/**
 * @member {String} Destination
 */

MountPoint.prototype['Destination'] = undefined;
/**
 * @member {String} Driver
 */

MountPoint.prototype['Driver'] = undefined;
/**
 * @member {String} Mode
 */

MountPoint.prototype['Mode'] = undefined;
/**
 * @member {Boolean} RW
 */

MountPoint.prototype['RW'] = undefined;
/**
 * @member {String} Propagation
 */

MountPoint.prototype['Propagation'] = undefined;
var _default = MountPoint;
exports["default"] = _default;