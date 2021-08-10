"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SwarmSpecTaskDefaultsLogDriver = _interopRequireDefault(require("./SwarmSpecTaskDefaultsLogDriver"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SwarmSpecTaskDefaults model module.
 * @module model/SwarmSpecTaskDefaults
 * @version 1.41
 */
var SwarmSpecTaskDefaults = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpecTaskDefaults</code>.
   * Defaults for creating tasks in this cluster.
   * @alias module:model/SwarmSpecTaskDefaults
   */
  function SwarmSpecTaskDefaults() {
    _classCallCheck(this, SwarmSpecTaskDefaults);

    SwarmSpecTaskDefaults.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpecTaskDefaults, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpecTaskDefaults</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpecTaskDefaults} obj Optional instance to populate.
     * @return {module:model/SwarmSpecTaskDefaults} The populated <code>SwarmSpecTaskDefaults</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpecTaskDefaults();

        if (data.hasOwnProperty('LogDriver')) {
          obj['LogDriver'] = _SwarmSpecTaskDefaultsLogDriver["default"].constructFromObject(data['LogDriver']);
        }
      }

      return obj;
    }
  }]);

  return SwarmSpecTaskDefaults;
}();
/**
 * @member {module:model/SwarmSpecTaskDefaultsLogDriver} LogDriver
 */


SwarmSpecTaskDefaults.prototype['LogDriver'] = undefined;
var _default = SwarmSpecTaskDefaults;
exports["default"] = _default;