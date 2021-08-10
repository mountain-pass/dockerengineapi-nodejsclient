"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EndpointSpec = _interopRequireDefault(require("./EndpointSpec"));

var _NetworkAttachmentConfig = _interopRequireDefault(require("./NetworkAttachmentConfig"));

var _ServiceSpecMode = _interopRequireDefault(require("./ServiceSpecMode"));

var _ServiceSpecRollbackConfig = _interopRequireDefault(require("./ServiceSpecRollbackConfig"));

var _ServiceSpecUpdateConfig = _interopRequireDefault(require("./ServiceSpecUpdateConfig"));

var _TaskSpec = _interopRequireDefault(require("./TaskSpec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ServiceSpec model module.
 * @module model/ServiceSpec
 * @version 1.41
 */
var ServiceSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ServiceSpec</code>.
   * User modifiable configuration for a service.
   * @alias module:model/ServiceSpec
   */
  function ServiceSpec() {
    _classCallCheck(this, ServiceSpec);

    ServiceSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ServiceSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ServiceSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ServiceSpec} obj Optional instance to populate.
     * @return {module:model/ServiceSpec} The populated <code>ServiceSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ServiceSpec();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('TaskTemplate')) {
          obj['TaskTemplate'] = _TaskSpec["default"].constructFromObject(data['TaskTemplate']);
        }

        if (data.hasOwnProperty('Mode')) {
          obj['Mode'] = _ServiceSpecMode["default"].constructFromObject(data['Mode']);
        }

        if (data.hasOwnProperty('UpdateConfig')) {
          obj['UpdateConfig'] = _ServiceSpecUpdateConfig["default"].constructFromObject(data['UpdateConfig']);
        }

        if (data.hasOwnProperty('RollbackConfig')) {
          obj['RollbackConfig'] = _ServiceSpecRollbackConfig["default"].constructFromObject(data['RollbackConfig']);
        }

        if (data.hasOwnProperty('Networks')) {
          obj['Networks'] = _ApiClient["default"].convertToType(data['Networks'], [_NetworkAttachmentConfig["default"]]);
        }

        if (data.hasOwnProperty('EndpointSpec')) {
          obj['EndpointSpec'] = _EndpointSpec["default"].constructFromObject(data['EndpointSpec']);
        }
      }

      return obj;
    }
  }]);

  return ServiceSpec;
}();
/**
 * Name of the service.
 * @member {String} Name
 */


ServiceSpec.prototype['Name'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

ServiceSpec.prototype['Labels'] = undefined;
/**
 * @member {module:model/TaskSpec} TaskTemplate
 */

ServiceSpec.prototype['TaskTemplate'] = undefined;
/**
 * @member {module:model/ServiceSpecMode} Mode
 */

ServiceSpec.prototype['Mode'] = undefined;
/**
 * @member {module:model/ServiceSpecUpdateConfig} UpdateConfig
 */

ServiceSpec.prototype['UpdateConfig'] = undefined;
/**
 * @member {module:model/ServiceSpecRollbackConfig} RollbackConfig
 */

ServiceSpec.prototype['RollbackConfig'] = undefined;
/**
 * Specifies which networks the service should attach to.
 * @member {Array.<module:model/NetworkAttachmentConfig>} Networks
 */

ServiceSpec.prototype['Networks'] = undefined;
/**
 * @member {module:model/EndpointSpec} EndpointSpec
 */

ServiceSpec.prototype['EndpointSpec'] = undefined;
var _default = ServiceSpec;
exports["default"] = _default;