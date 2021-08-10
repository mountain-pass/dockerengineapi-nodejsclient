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
 * The TaskSpecPlacementSpread model module.
 * @module model/TaskSpecPlacementSpread
 * @version 1.41
 */
var TaskSpecPlacementSpread = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecPlacementSpread</code>.
   * @alias module:model/TaskSpecPlacementSpread
   */
  function TaskSpecPlacementSpread() {
    _classCallCheck(this, TaskSpecPlacementSpread);

    TaskSpecPlacementSpread.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecPlacementSpread, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecPlacementSpread</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecPlacementSpread} obj Optional instance to populate.
     * @return {module:model/TaskSpecPlacementSpread} The populated <code>TaskSpecPlacementSpread</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecPlacementSpread();

        if (data.hasOwnProperty('SpreadDescriptor')) {
          obj['SpreadDescriptor'] = _ApiClient["default"].convertToType(data['SpreadDescriptor'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaskSpecPlacementSpread;
}();
/**
 * label descriptor, such as `engine.labels.az`. 
 * @member {String} SpreadDescriptor
 */


TaskSpecPlacementSpread.prototype['SpreadDescriptor'] = undefined;
var _default = TaskSpecPlacementSpread;
exports["default"] = _default;