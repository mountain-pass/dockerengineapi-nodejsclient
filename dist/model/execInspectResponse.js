"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ProcessConfig = _interopRequireDefault(require("./ProcessConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ExecInspectResponse model module.
 * @module model/ExecInspectResponse
 * @version 1.41
 */
var ExecInspectResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ExecInspectResponse</code>.
   * @alias module:model/ExecInspectResponse
   */
  function ExecInspectResponse() {
    _classCallCheck(this, ExecInspectResponse);

    ExecInspectResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ExecInspectResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ExecInspectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ExecInspectResponse} obj Optional instance to populate.
     * @return {module:model/ExecInspectResponse} The populated <code>ExecInspectResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ExecInspectResponse();

        if (data.hasOwnProperty('CanRemove')) {
          obj['CanRemove'] = _ApiClient["default"].convertToType(data['CanRemove'], 'Boolean');
        }

        if (data.hasOwnProperty('DetachKeys')) {
          obj['DetachKeys'] = _ApiClient["default"].convertToType(data['DetachKeys'], 'String');
        }

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Running')) {
          obj['Running'] = _ApiClient["default"].convertToType(data['Running'], 'Boolean');
        }

        if (data.hasOwnProperty('ExitCode')) {
          obj['ExitCode'] = _ApiClient["default"].convertToType(data['ExitCode'], 'Number');
        }

        if (data.hasOwnProperty('ProcessConfig')) {
          obj['ProcessConfig'] = _ProcessConfig["default"].constructFromObject(data['ProcessConfig']);
        }

        if (data.hasOwnProperty('OpenStdin')) {
          obj['OpenStdin'] = _ApiClient["default"].convertToType(data['OpenStdin'], 'Boolean');
        }

        if (data.hasOwnProperty('OpenStderr')) {
          obj['OpenStderr'] = _ApiClient["default"].convertToType(data['OpenStderr'], 'Boolean');
        }

        if (data.hasOwnProperty('OpenStdout')) {
          obj['OpenStdout'] = _ApiClient["default"].convertToType(data['OpenStdout'], 'Boolean');
        }

        if (data.hasOwnProperty('ContainerID')) {
          obj['ContainerID'] = _ApiClient["default"].convertToType(data['ContainerID'], 'String');
        }

        if (data.hasOwnProperty('Pid')) {
          obj['Pid'] = _ApiClient["default"].convertToType(data['Pid'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ExecInspectResponse;
}();
/**
 * @member {Boolean} CanRemove
 */


ExecInspectResponse.prototype['CanRemove'] = undefined;
/**
 * @member {String} DetachKeys
 */

ExecInspectResponse.prototype['DetachKeys'] = undefined;
/**
 * @member {String} ID
 */

ExecInspectResponse.prototype['ID'] = undefined;
/**
 * @member {Boolean} Running
 */

ExecInspectResponse.prototype['Running'] = undefined;
/**
 * @member {Number} ExitCode
 */

ExecInspectResponse.prototype['ExitCode'] = undefined;
/**
 * @member {module:model/ProcessConfig} ProcessConfig
 */

ExecInspectResponse.prototype['ProcessConfig'] = undefined;
/**
 * @member {Boolean} OpenStdin
 */

ExecInspectResponse.prototype['OpenStdin'] = undefined;
/**
 * @member {Boolean} OpenStderr
 */

ExecInspectResponse.prototype['OpenStderr'] = undefined;
/**
 * @member {Boolean} OpenStdout
 */

ExecInspectResponse.prototype['OpenStdout'] = undefined;
/**
 * @member {String} ContainerID
 */

ExecInspectResponse.prototype['ContainerID'] = undefined;
/**
 * The system process ID for the exec process.
 * @member {Number} Pid
 */

ExecInspectResponse.prototype['Pid'] = undefined;
var _default = ExecInspectResponse;
exports["default"] = _default;