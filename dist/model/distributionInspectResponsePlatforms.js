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
 * The DistributionInspectResponsePlatforms model module.
 * @module model/DistributionInspectResponsePlatforms
 * @version 1.41
 */
var DistributionInspectResponsePlatforms = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DistributionInspectResponsePlatforms</code>.
   * @alias module:model/DistributionInspectResponsePlatforms
   */
  function DistributionInspectResponsePlatforms() {
    _classCallCheck(this, DistributionInspectResponsePlatforms);

    DistributionInspectResponsePlatforms.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DistributionInspectResponsePlatforms, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>DistributionInspectResponsePlatforms</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DistributionInspectResponsePlatforms} obj Optional instance to populate.
     * @return {module:model/DistributionInspectResponsePlatforms} The populated <code>DistributionInspectResponsePlatforms</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DistributionInspectResponsePlatforms();

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ApiClient["default"].convertToType(data['Architecture'], 'String');
        }

        if (data.hasOwnProperty('OS')) {
          obj['OS'] = _ApiClient["default"].convertToType(data['OS'], 'String');
        }

        if (data.hasOwnProperty('OSVersion')) {
          obj['OSVersion'] = _ApiClient["default"].convertToType(data['OSVersion'], 'String');
        }

        if (data.hasOwnProperty('OSFeatures')) {
          obj['OSFeatures'] = _ApiClient["default"].convertToType(data['OSFeatures'], ['String']);
        }

        if (data.hasOwnProperty('Variant')) {
          obj['Variant'] = _ApiClient["default"].convertToType(data['Variant'], 'String');
        }

        if (data.hasOwnProperty('Features')) {
          obj['Features'] = _ApiClient["default"].convertToType(data['Features'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return DistributionInspectResponsePlatforms;
}();
/**
 * @member {String} Architecture
 */


DistributionInspectResponsePlatforms.prototype['Architecture'] = undefined;
/**
 * @member {String} OS
 */

DistributionInspectResponsePlatforms.prototype['OS'] = undefined;
/**
 * @member {String} OSVersion
 */

DistributionInspectResponsePlatforms.prototype['OSVersion'] = undefined;
/**
 * @member {Array.<String>} OSFeatures
 */

DistributionInspectResponsePlatforms.prototype['OSFeatures'] = undefined;
/**
 * @member {String} Variant
 */

DistributionInspectResponsePlatforms.prototype['Variant'] = undefined;
/**
 * @member {Array.<String>} Features
 */

DistributionInspectResponsePlatforms.prototype['Features'] = undefined;
var _default = DistributionInspectResponsePlatforms;
exports["default"] = _default;