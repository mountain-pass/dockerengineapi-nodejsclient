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
 * The ContainerCreateResponse model module.
 * @module model/ContainerCreateResponse
 * @version 1.41
 */
var ContainerCreateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerCreateResponse</code>.
   * OK response to ContainerCreate operation
   * @alias module:model/ContainerCreateResponse
   * @param id {String} The ID of the created container
   * @param warnings {Array.<String>} Warnings encountered when creating the container
   */
  function ContainerCreateResponse(id, warnings) {
    _classCallCheck(this, ContainerCreateResponse);

    ContainerCreateResponse.initialize(this, id, warnings);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerCreateResponse, null, [{
    key: "initialize",
    value: function initialize(obj, id, warnings) {
      obj['Id'] = id;
      obj['Warnings'] = warnings;
    }
    /**
     * Constructs a <code>ContainerCreateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerCreateResponse} obj Optional instance to populate.
     * @return {module:model/ContainerCreateResponse} The populated <code>ContainerCreateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerCreateResponse();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('Warnings')) {
          obj['Warnings'] = _ApiClient["default"].convertToType(data['Warnings'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ContainerCreateResponse;
}();
/**
 * The ID of the created container
 * @member {String} Id
 */


ContainerCreateResponse.prototype['Id'] = undefined;
/**
 * Warnings encountered when creating the container
 * @member {Array.<String>} Warnings
 */

ContainerCreateResponse.prototype['Warnings'] = undefined;
var _default = ContainerCreateResponse;
exports["default"] = _default;