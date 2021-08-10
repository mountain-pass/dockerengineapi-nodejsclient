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
 * The DistributionInspectResponseDescriptor model module.
 * @module model/DistributionInspectResponseDescriptor
 * @version 1.41
 */
var DistributionInspectResponseDescriptor = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DistributionInspectResponseDescriptor</code>.
   * A descriptor struct containing digest, media type, and size. 
   * @alias module:model/DistributionInspectResponseDescriptor
   */
  function DistributionInspectResponseDescriptor() {
    _classCallCheck(this, DistributionInspectResponseDescriptor);

    DistributionInspectResponseDescriptor.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DistributionInspectResponseDescriptor, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DistributionInspectResponseDescriptor</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DistributionInspectResponseDescriptor} obj Optional instance to populate.
     * @return {module:model/DistributionInspectResponseDescriptor} The populated <code>DistributionInspectResponseDescriptor</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DistributionInspectResponseDescriptor();

        if (data.hasOwnProperty('MediaType')) {
          obj['MediaType'] = _ApiClient["default"].convertToType(data['MediaType'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('Digest')) {
          obj['Digest'] = _ApiClient["default"].convertToType(data['Digest'], 'String');
        }

        if (data.hasOwnProperty('URLs')) {
          obj['URLs'] = _ApiClient["default"].convertToType(data['URLs'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DistributionInspectResponseDescriptor;
}();
/**
 * @member {String} MediaType
 */


DistributionInspectResponseDescriptor.prototype['MediaType'] = undefined;
/**
 * @member {Number} Size
 */

DistributionInspectResponseDescriptor.prototype['Size'] = undefined;
/**
 * @member {String} Digest
 */

DistributionInspectResponseDescriptor.prototype['Digest'] = undefined;
/**
 * @member {Array.<String>} URLs
 */

DistributionInspectResponseDescriptor.prototype['URLs'] = undefined;
var _default = DistributionInspectResponseDescriptor;
exports["default"] = _default;