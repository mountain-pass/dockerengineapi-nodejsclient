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
 * The IndexInfo model module.
 * @module model/IndexInfo
 * @version 1.41
 */
var IndexInfo = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>IndexInfo</code>.
   * IndexInfo contains information about a registry.
   * @alias module:model/IndexInfo
   */
  function IndexInfo() {
    _classCallCheck(this, IndexInfo);

    IndexInfo.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(IndexInfo, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>IndexInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/IndexInfo} obj Optional instance to populate.
     * @return {module:model/IndexInfo} The populated <code>IndexInfo</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new IndexInfo();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Mirrors')) {
          obj['Mirrors'] = _ApiClient["default"].convertToType(data['Mirrors'], ['String']);
        }

        if (data.hasOwnProperty('Secure')) {
          obj['Secure'] = _ApiClient["default"].convertToType(data['Secure'], 'Boolean');
        }

        if (data.hasOwnProperty('Official')) {
          obj['Official'] = _ApiClient["default"].convertToType(data['Official'], 'Boolean');
        }
      }

      return obj;
    }
  }]);

  return IndexInfo;
}();
/**
 * Name of the registry, such as \"docker.io\". 
 * @member {String} Name
 */


IndexInfo.prototype['Name'] = undefined;
/**
 * List of mirrors, expressed as URIs. 
 * @member {Array.<String>} Mirrors
 */

IndexInfo.prototype['Mirrors'] = undefined;
/**
 * Indicates if the registry is part of the list of insecure registries.  If `false`, the registry is insecure. Insecure registries accept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates from unknown CAs) communication.  > **Warning**: Insecure registries can be useful when running a local > registry. However, because its use creates security vulnerabilities > it should ONLY be enabled for testing purposes. For increased > security, users should add their CA to their system's list of > trusted CAs instead of enabling this option. 
 * @member {Boolean} Secure
 */

IndexInfo.prototype['Secure'] = undefined;
/**
 * Indicates whether this is an official registry (i.e., Docker Hub / docker.io) 
 * @member {Boolean} Official
 */

IndexInfo.prototype['Official'] = undefined;
var _default = IndexInfo;
exports["default"] = _default;