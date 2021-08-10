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
 * The DeviceMapping model module.
 * @module model/DeviceMapping
 * @version 1.41
 */
var DeviceMapping = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DeviceMapping</code>.
   * A device mapping between the host and container
   * @alias module:model/DeviceMapping
   */
  function DeviceMapping() {
    _classCallCheck(this, DeviceMapping);

    DeviceMapping.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DeviceMapping, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DeviceMapping</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DeviceMapping} obj Optional instance to populate.
     * @return {module:model/DeviceMapping} The populated <code>DeviceMapping</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DeviceMapping();

        if (data.hasOwnProperty('PathOnHost')) {
          obj['PathOnHost'] = _ApiClient["default"].convertToType(data['PathOnHost'], 'String');
        }

        if (data.hasOwnProperty('PathInContainer')) {
          obj['PathInContainer'] = _ApiClient["default"].convertToType(data['PathInContainer'], 'String');
        }

        if (data.hasOwnProperty('CgroupPermissions')) {
          obj['CgroupPermissions'] = _ApiClient["default"].convertToType(data['CgroupPermissions'], 'String');
        }
      }

      return obj;
    }
  }]);

  return DeviceMapping;
}();
/**
 * @member {String} PathOnHost
 */


DeviceMapping.prototype['PathOnHost'] = undefined;
/**
 * @member {String} PathInContainer
 */

DeviceMapping.prototype['PathInContainer'] = undefined;
/**
 * @member {String} CgroupPermissions
 */

DeviceMapping.prototype['CgroupPermissions'] = undefined;
var _default = DeviceMapping;
exports["default"] = _default;