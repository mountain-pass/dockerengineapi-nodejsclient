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
 * The ContainerWaitResponseError model module.
 * @module model/ContainerWaitResponseError
 * @version 1.41
 */
var ContainerWaitResponseError = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerWaitResponseError</code>.
   * container waiting error, if any
   * @alias module:model/ContainerWaitResponseError
   */
  function ContainerWaitResponseError() {
    _classCallCheck(this, ContainerWaitResponseError);

    ContainerWaitResponseError.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerWaitResponseError, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContainerWaitResponseError</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerWaitResponseError} obj Optional instance to populate.
     * @return {module:model/ContainerWaitResponseError} The populated <code>ContainerWaitResponseError</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerWaitResponseError();

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ContainerWaitResponseError;
}();
/**
 * Details of an error
 * @member {String} Message
 */


ContainerWaitResponseError.prototype['Message'] = undefined;
var _default = ContainerWaitResponseError;
exports["default"] = _default;