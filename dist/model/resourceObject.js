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
 * The ResourceObject model module.
 * @module model/ResourceObject
 * @version 1.41
 */
var ResourceObject = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ResourceObject</code>.
   * An object describing the resources which can be advertised by a node and requested by a task. 
   * @alias module:model/ResourceObject
   */
  function ResourceObject() {
    _classCallCheck(this, ResourceObject);

    ResourceObject.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ResourceObject, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ResourceObject</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ResourceObject} obj Optional instance to populate.
     * @return {module:model/ResourceObject} The populated <code>ResourceObject</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ResourceObject();

        if (data.hasOwnProperty('NanoCPUs')) {
          obj['NanoCPUs'] = _ApiClient["default"].convertToType(data['NanoCPUs'], 'Number');
        }

        if (data.hasOwnProperty('MemoryBytes')) {
          obj['MemoryBytes'] = _ApiClient["default"].convertToType(data['MemoryBytes'], 'Number');
        }

        if (data.hasOwnProperty('GenericResources')) {
          obj['GenericResources'] = _ApiClient["default"].convertToType(data['GenericResources'], [Object]);
        }
      }

      return obj;
    }
  }]);

  return ResourceObject;
}();
/**
 * @member {Number} NanoCPUs
 */


ResourceObject.prototype['NanoCPUs'] = undefined;
/**
 * @member {Number} MemoryBytes
 */

ResourceObject.prototype['MemoryBytes'] = undefined;
/**
 * User-defined resources can be either Integer resources (e.g, `SSD=3`) or String resources (e.g, `GPU=UUID1`). 
 * @member {Array.<Object>} GenericResources
 */

ResourceObject.prototype['GenericResources'] = undefined;
var _default = ResourceObject;
exports["default"] = _default;