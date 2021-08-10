"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DistributionInspectResponseDescriptor = _interopRequireDefault(require("./DistributionInspectResponseDescriptor"));

var _DistributionInspectResponsePlatforms = _interopRequireDefault(require("./DistributionInspectResponsePlatforms"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The DistributionInspectResponse model module.
 * @module model/DistributionInspectResponse
 * @version 1.41
 */
var DistributionInspectResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>DistributionInspectResponse</code>.
   * @alias module:model/DistributionInspectResponse
   * @param descriptor {module:model/DistributionInspectResponseDescriptor} 
   * @param platforms {Array.<module:model/DistributionInspectResponsePlatforms>} An array containing all platforms supported by the image. 
   */
  function DistributionInspectResponse(descriptor, platforms) {
    _classCallCheck(this, DistributionInspectResponse);

    DistributionInspectResponse.initialize(this, descriptor, platforms);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(DistributionInspectResponse, null, [{
    key: "initialize",
    value: function initialize(obj, descriptor, platforms) {
      obj['Descriptor'] = descriptor;
      obj['Platforms'] = platforms;
    }
    /**
     * Constructs a <code>DistributionInspectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/DistributionInspectResponse} obj Optional instance to populate.
     * @return {module:model/DistributionInspectResponse} The populated <code>DistributionInspectResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new DistributionInspectResponse();

        if (data.hasOwnProperty('Descriptor')) {
          obj['Descriptor'] = _DistributionInspectResponseDescriptor["default"].constructFromObject(data['Descriptor']);
        }

        if (data.hasOwnProperty('Platforms')) {
          obj['Platforms'] = _ApiClient["default"].convertToType(data['Platforms'], [_DistributionInspectResponsePlatforms["default"]]);
        }
      }

      return obj;
    }
  }]);

  return DistributionInspectResponse;
}();
/**
 * @member {module:model/DistributionInspectResponseDescriptor} Descriptor
 */


DistributionInspectResponse.prototype['Descriptor'] = undefined;
/**
 * An array containing all platforms supported by the image. 
 * @member {Array.<module:model/DistributionInspectResponsePlatforms>} Platforms
 */

DistributionInspectResponse.prototype['Platforms'] = undefined;
var _default = DistributionInspectResponse;
exports["default"] = _default;