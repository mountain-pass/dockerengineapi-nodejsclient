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
 * The ProcessConfig model module.
 * @module model/ProcessConfig
 * @version 1.41
 */
var ProcessConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ProcessConfig</code>.
   * @alias module:model/ProcessConfig
   */
  function ProcessConfig() {
    _classCallCheck(this, ProcessConfig);

    ProcessConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ProcessConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ProcessConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ProcessConfig} obj Optional instance to populate.
     * @return {module:model/ProcessConfig} The populated <code>ProcessConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ProcessConfig();

        if (data.hasOwnProperty('privileged')) {
          obj['privileged'] = _ApiClient["default"].convertToType(data['privileged'], 'Boolean');
        }

        if (data.hasOwnProperty('user')) {
          obj['user'] = _ApiClient["default"].convertToType(data['user'], 'String');
        }

        if (data.hasOwnProperty('tty')) {
          obj['tty'] = _ApiClient["default"].convertToType(data['tty'], 'Boolean');
        }

        if (data.hasOwnProperty('entrypoint')) {
          obj['entrypoint'] = _ApiClient["default"].convertToType(data['entrypoint'], 'String');
        }

        if (data.hasOwnProperty('arguments')) {
          obj['arguments'] = _ApiClient["default"].convertToType(data['arguments'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ProcessConfig;
}();
/**
 * @member {Boolean} privileged
 */


ProcessConfig.prototype['privileged'] = undefined;
/**
 * @member {String} user
 */

ProcessConfig.prototype['user'] = undefined;
/**
 * @member {Boolean} tty
 */

ProcessConfig.prototype['tty'] = undefined;
/**
 * @member {String} entrypoint
 */

ProcessConfig.prototype['entrypoint'] = undefined;
/**
 * @member {Array.<String>} arguments
 */

ProcessConfig.prototype['arguments'] = undefined;
var _default = ProcessConfig;
exports["default"] = _default;