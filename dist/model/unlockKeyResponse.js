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
 * The UnlockKeyResponse model module.
 * @module model/UnlockKeyResponse
 * @version 1.41
 */
var UnlockKeyResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>UnlockKeyResponse</code>.
   * @alias module:model/UnlockKeyResponse
   */
  function UnlockKeyResponse() {
    _classCallCheck(this, UnlockKeyResponse);

    UnlockKeyResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(UnlockKeyResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>UnlockKeyResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/UnlockKeyResponse} obj Optional instance to populate.
     * @return {module:model/UnlockKeyResponse} The populated <code>UnlockKeyResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new UnlockKeyResponse();

        if (data.hasOwnProperty('UnlockKey')) {
          obj['UnlockKey'] = _ApiClient["default"].convertToType(data['UnlockKey'], 'String');
        }
      }

      return obj;
    }
  }]);

  return UnlockKeyResponse;
}();
/**
 * The swarm's unlock key.
 * @member {String} UnlockKey
 */


UnlockKeyResponse.prototype['UnlockKey'] = undefined;
var _default = UnlockKeyResponse;
exports["default"] = _default;