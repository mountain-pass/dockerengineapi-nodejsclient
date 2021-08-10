"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Limit = _interopRequireDefault(require("./Limit"));

var _ResourceObject = _interopRequireDefault(require("./ResourceObject"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskSpecResources model module.
 * @module model/TaskSpecResources
 * @version 1.41
 */
var TaskSpecResources = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecResources</code>.
   * Resource requirements which apply to each individual container created as part of the service. 
   * @alias module:model/TaskSpecResources
   */
  function TaskSpecResources() {
    _classCallCheck(this, TaskSpecResources);

    TaskSpecResources.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecResources, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecResources</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecResources} obj Optional instance to populate.
     * @return {module:model/TaskSpecResources} The populated <code>TaskSpecResources</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecResources();

        if (data.hasOwnProperty('Limits')) {
          obj['Limits'] = _Limit["default"].constructFromObject(data['Limits']);
        }

        if (data.hasOwnProperty('Reservation')) {
          obj['Reservation'] = _ResourceObject["default"].constructFromObject(data['Reservation']);
        }
      }

      return obj;
    }
  }]);

  return TaskSpecResources;
}();
/**
 * @member {module:model/Limit} Limits
 */


TaskSpecResources.prototype['Limits'] = undefined;
/**
 * @member {module:model/ResourceObject} Reservation
 */

TaskSpecResources.prototype['Reservation'] = undefined;
var _default = TaskSpecResources;
exports["default"] = _default;