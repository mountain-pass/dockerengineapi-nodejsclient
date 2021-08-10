"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainerWaitResponseError = _interopRequireDefault(require("./ContainerWaitResponseError"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContainerWaitResponse model module.
 * @module model/ContainerWaitResponse
 * @version 1.41
 */
var ContainerWaitResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerWaitResponse</code>.
   * OK response to ContainerWait operation
   * @alias module:model/ContainerWaitResponse
   * @param statusCode {Number} Exit code of the container
   */
  function ContainerWaitResponse(statusCode) {
    _classCallCheck(this, ContainerWaitResponse);

    ContainerWaitResponse.initialize(this, statusCode);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerWaitResponse, null, [{
    key: "initialize",
    value: function initialize(obj, statusCode) {
      obj['StatusCode'] = statusCode;
    }
    /**
     * Constructs a <code>ContainerWaitResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerWaitResponse} obj Optional instance to populate.
     * @return {module:model/ContainerWaitResponse} The populated <code>ContainerWaitResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerWaitResponse();

        if (data.hasOwnProperty('StatusCode')) {
          obj['StatusCode'] = _ApiClient["default"].convertToType(data['StatusCode'], 'Number');
        }

        if (data.hasOwnProperty('Error')) {
          obj['Error'] = _ContainerWaitResponseError["default"].constructFromObject(data['Error']);
        }
      }

      return obj;
    }
  }]);

  return ContainerWaitResponse;
}();
/**
 * Exit code of the container
 * @member {Number} StatusCode
 */


ContainerWaitResponse.prototype['StatusCode'] = undefined;
/**
 * @member {module:model/ContainerWaitResponseError} Error
 */

ContainerWaitResponse.prototype['Error'] = undefined;
var _default = ContainerWaitResponse;
exports["default"] = _default;