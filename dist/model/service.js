"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ObjectVersion = _interopRequireDefault(require("./ObjectVersion"));

var _ServiceEndpoint = _interopRequireDefault(require("./ServiceEndpoint"));

var _ServiceJobStatus = _interopRequireDefault(require("./ServiceJobStatus"));

var _ServiceServiceStatus = _interopRequireDefault(require("./ServiceServiceStatus"));

var _ServiceSpec = _interopRequireDefault(require("./ServiceSpec"));

var _ServiceUpdateStatus = _interopRequireDefault(require("./ServiceUpdateStatus"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Service model module.
 * @module model/Service
 * @version 1.41
 */
var Service = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Service</code>.
   * @alias module:model/Service
   */
  function Service() {
    _classCallCheck(this, Service);

    Service.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Service, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Service</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Service} obj Optional instance to populate.
     * @return {module:model/Service} The populated <code>Service</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Service();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ObjectVersion["default"].constructFromObject(data['Version']);
        }

        if (data.hasOwnProperty('CreatedAt')) {
          obj['CreatedAt'] = _ApiClient["default"].convertToType(data['CreatedAt'], 'String');
        }

        if (data.hasOwnProperty('UpdatedAt')) {
          obj['UpdatedAt'] = _ApiClient["default"].convertToType(data['UpdatedAt'], 'String');
        }

        if (data.hasOwnProperty('Spec')) {
          obj['Spec'] = _ServiceSpec["default"].constructFromObject(data['Spec']);
        }

        if (data.hasOwnProperty('Endpoint')) {
          obj['Endpoint'] = _ServiceEndpoint["default"].constructFromObject(data['Endpoint']);
        }

        if (data.hasOwnProperty('UpdateStatus')) {
          obj['UpdateStatus'] = _ServiceUpdateStatus["default"].constructFromObject(data['UpdateStatus']);
        }

        if (data.hasOwnProperty('ServiceStatus')) {
          obj['ServiceStatus'] = _ServiceServiceStatus["default"].constructFromObject(data['ServiceStatus']);
        }

        if (data.hasOwnProperty('JobStatus')) {
          obj['JobStatus'] = _ServiceJobStatus["default"].constructFromObject(data['JobStatus']);
        }
      }

      return obj;
    }
  }]);

  return Service;
}();
/**
 * @member {String} ID
 */


Service.prototype['ID'] = undefined;
/**
 * @member {module:model/ObjectVersion} Version
 */

Service.prototype['Version'] = undefined;
/**
 * @member {String} CreatedAt
 */

Service.prototype['CreatedAt'] = undefined;
/**
 * @member {String} UpdatedAt
 */

Service.prototype['UpdatedAt'] = undefined;
/**
 * @member {module:model/ServiceSpec} Spec
 */

Service.prototype['Spec'] = undefined;
/**
 * @member {module:model/ServiceEndpoint} Endpoint
 */

Service.prototype['Endpoint'] = undefined;
/**
 * @member {module:model/ServiceUpdateStatus} UpdateStatus
 */

Service.prototype['UpdateStatus'] = undefined;
/**
 * @member {module:model/ServiceServiceStatus} ServiceStatus
 */

Service.prototype['ServiceStatus'] = undefined;
/**
 * @member {module:model/ServiceJobStatus} JobStatus
 */

Service.prototype['JobStatus'] = undefined;
var _default = Service;
exports["default"] = _default;