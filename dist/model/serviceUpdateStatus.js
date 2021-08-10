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
 * The ServiceUpdateStatus model module.
 * @module model/ServiceUpdateStatus
 * @version 1.41
 */
var ServiceUpdateStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceUpdateStatus</code>.
   * The status of a service update.
   * @alias module:model/ServiceUpdateStatus
   */
  function ServiceUpdateStatus() {
    _classCallCheck(this, ServiceUpdateStatus);

    ServiceUpdateStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceUpdateStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceUpdateStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceUpdateStatus} obj Optional instance to populate.
     * @return {module:model/ServiceUpdateStatus} The populated <code>ServiceUpdateStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceUpdateStatus();

        if (data.hasOwnProperty('State')) {
          obj['State'] = _ApiClient["default"].convertToType(data['State'], 'String');
        }

        if (data.hasOwnProperty('StartedAt')) {
          obj['StartedAt'] = _ApiClient["default"].convertToType(data['StartedAt'], 'String');
        }

        if (data.hasOwnProperty('CompletedAt')) {
          obj['CompletedAt'] = _ApiClient["default"].convertToType(data['CompletedAt'], 'String');
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ServiceUpdateStatus;
}();
/**
 * @member {module:model/ServiceUpdateStatus.StateEnum} State
 */


ServiceUpdateStatus.prototype['State'] = undefined;
/**
 * @member {String} StartedAt
 */

ServiceUpdateStatus.prototype['StartedAt'] = undefined;
/**
 * @member {String} CompletedAt
 */

ServiceUpdateStatus.prototype['CompletedAt'] = undefined;
/**
 * @member {String} Message
 */

ServiceUpdateStatus.prototype['Message'] = undefined;
/**
 * Allowed values for the <code>State</code> property.
 * @enum {String}
 * @readonly
 */

ServiceUpdateStatus['StateEnum'] = {
  /**
   * value: "updating"
   * @const
   */
  "updating": "updating",

  /**
   * value: "paused"
   * @const
   */
  "paused": "paused",

  /**
   * value: "completed"
   * @const
   */
  "completed": "completed"
};
var _default = ServiceUpdateStatus;
exports["default"] = _default;