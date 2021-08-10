"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _SwarmSpecCAConfig = _interopRequireDefault(require("./SwarmSpecCAConfig"));

var _SwarmSpecDispatcher = _interopRequireDefault(require("./SwarmSpecDispatcher"));

var _SwarmSpecEncryptionConfig = _interopRequireDefault(require("./SwarmSpecEncryptionConfig"));

var _SwarmSpecOrchestration = _interopRequireDefault(require("./SwarmSpecOrchestration"));

var _SwarmSpecRaft = _interopRequireDefault(require("./SwarmSpecRaft"));

var _SwarmSpecTaskDefaults = _interopRequireDefault(require("./SwarmSpecTaskDefaults"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The SwarmSpec model module.
 * @module model/SwarmSpec
 * @version 1.41
 */
var SwarmSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>SwarmSpec</code>.
   * User modifiable swarm configuration.
   * @alias module:model/SwarmSpec
   */
  function SwarmSpec() {
    _classCallCheck(this, SwarmSpec);

    SwarmSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(SwarmSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>SwarmSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmSpec} obj Optional instance to populate.
     * @return {module:model/SwarmSpec} The populated <code>SwarmSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new SwarmSpec();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Orchestration')) {
          obj['Orchestration'] = _SwarmSpecOrchestration["default"].constructFromObject(data['Orchestration']);
        }

        if (data.hasOwnProperty('Raft')) {
          obj['Raft'] = _SwarmSpecRaft["default"].constructFromObject(data['Raft']);
        }

        if (data.hasOwnProperty('Dispatcher')) {
          obj['Dispatcher'] = _SwarmSpecDispatcher["default"].constructFromObject(data['Dispatcher']);
        }

        if (data.hasOwnProperty('CAConfig')) {
          obj['CAConfig'] = _SwarmSpecCAConfig["default"].constructFromObject(data['CAConfig']);
        }

        if (data.hasOwnProperty('EncryptionConfig')) {
          obj['EncryptionConfig'] = _SwarmSpecEncryptionConfig["default"].constructFromObject(data['EncryptionConfig']);
        }

        if (data.hasOwnProperty('TaskDefaults')) {
          obj['TaskDefaults'] = _SwarmSpecTaskDefaults["default"].constructFromObject(data['TaskDefaults']);
        }
      }

      return obj;
    }
  }]);

  return SwarmSpec;
}();
/**
 * Name of the swarm.
 * @member {String} Name
 */


SwarmSpec.prototype['Name'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

SwarmSpec.prototype['Labels'] = undefined;
/**
 * @member {module:model/SwarmSpecOrchestration} Orchestration
 */

SwarmSpec.prototype['Orchestration'] = undefined;
/**
 * @member {module:model/SwarmSpecRaft} Raft
 */

SwarmSpec.prototype['Raft'] = undefined;
/**
 * @member {module:model/SwarmSpecDispatcher} Dispatcher
 */

SwarmSpec.prototype['Dispatcher'] = undefined;
/**
 * @member {module:model/SwarmSpecCAConfig} CAConfig
 */

SwarmSpec.prototype['CAConfig'] = undefined;
/**
 * @member {module:model/SwarmSpecEncryptionConfig} EncryptionConfig
 */

SwarmSpec.prototype['EncryptionConfig'] = undefined;
/**
 * @member {module:model/SwarmSpecTaskDefaults} TaskDefaults
 */

SwarmSpec.prototype['TaskDefaults'] = undefined;
var _default = SwarmSpec;
exports["default"] = _default;