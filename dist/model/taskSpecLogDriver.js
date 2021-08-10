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
 * The TaskSpecLogDriver model module.
 * @module model/TaskSpecLogDriver
 * @version 1.41
 */
var TaskSpecLogDriver = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecLogDriver</code>.
   * Specifies the log driver to use for tasks created from this spec. If not present, the default one for the swarm will be used, finally falling back to the engine default if not specified. 
   * @alias module:model/TaskSpecLogDriver
   */
  function TaskSpecLogDriver() {
    _classCallCheck(this, TaskSpecLogDriver);

    TaskSpecLogDriver.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecLogDriver, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecLogDriver</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecLogDriver} obj Optional instance to populate.
     * @return {module:model/TaskSpecLogDriver} The populated <code>TaskSpecLogDriver</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecLogDriver();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Options')) {
          obj['Options'] = _ApiClient["default"].convertToType(data['Options'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return TaskSpecLogDriver;
}();
/**
 * @member {String} Name
 */


TaskSpecLogDriver.prototype['Name'] = undefined;
/**
 * @member {Object.<String, String>} Options
 */

TaskSpecLogDriver.prototype['Options'] = undefined;
var _default = TaskSpecLogDriver;
exports["default"] = _default;