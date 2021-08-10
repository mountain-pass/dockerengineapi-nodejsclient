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
 * The BuildCache model module.
 * @module model/BuildCache
 * @version 1.41
 */
var BuildCache = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>BuildCache</code>.
   * @alias module:model/BuildCache
   */
  function BuildCache() {
    _classCallCheck(this, BuildCache);

    BuildCache.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(BuildCache, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>BuildCache</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/BuildCache} obj Optional instance to populate.
     * @return {module:model/BuildCache} The populated <code>BuildCache</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new BuildCache();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Parent')) {
          obj['Parent'] = _ApiClient["default"].convertToType(data['Parent'], 'String');
        }

        if (data.hasOwnProperty('Type')) {
          obj['Type'] = _ApiClient["default"].convertToType(data['Type'], 'String');
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _ApiClient["default"].convertToType(data['Description'], 'String');
        }

        if (data.hasOwnProperty('InUse')) {
          obj['InUse'] = _ApiClient["default"].convertToType(data['InUse'], 'Boolean');
        }

        if (data.hasOwnProperty('Shared')) {
          obj['Shared'] = _ApiClient["default"].convertToType(data['Shared'], 'Boolean');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('CreatedAt')) {
          obj['CreatedAt'] = _ApiClient["default"].convertToType(data['CreatedAt'], 'String');
        }

        if (data.hasOwnProperty('LastUsedAt')) {
          obj['LastUsedAt'] = _ApiClient["default"].convertToType(data['LastUsedAt'], 'String');
        }

        if (data.hasOwnProperty('UsageCount')) {
          obj['UsageCount'] = _ApiClient["default"].convertToType(data['UsageCount'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return BuildCache;
}();
/**
 * @member {String} ID
 */


BuildCache.prototype['ID'] = undefined;
/**
 * @member {String} Parent
 */

BuildCache.prototype['Parent'] = undefined;
/**
 * @member {String} Type
 */

BuildCache.prototype['Type'] = undefined;
/**
 * @member {String} Description
 */

BuildCache.prototype['Description'] = undefined;
/**
 * @member {Boolean} InUse
 */

BuildCache.prototype['InUse'] = undefined;
/**
 * @member {Boolean} Shared
 */

BuildCache.prototype['Shared'] = undefined;
/**
 * Amount of disk space used by the build cache (in bytes). 
 * @member {Number} Size
 */

BuildCache.prototype['Size'] = undefined;
/**
 * Date and time at which the build cache was created in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} CreatedAt
 */

BuildCache.prototype['CreatedAt'] = undefined;
/**
 * Date and time at which the build cache was last used in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} LastUsedAt
 */

BuildCache.prototype['LastUsedAt'] = undefined;
/**
 * @member {Number} UsageCount
 */

BuildCache.prototype['UsageCount'] = undefined;
var _default = BuildCache;
exports["default"] = _default;