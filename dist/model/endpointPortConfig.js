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
 * The EndpointPortConfig model module.
 * @module model/EndpointPortConfig
 * @version 1.41
 */
var EndpointPortConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EndpointPortConfig</code>.
   * @alias module:model/EndpointPortConfig
   */
  function EndpointPortConfig() {
    _classCallCheck(this, EndpointPortConfig);

    EndpointPortConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EndpointPortConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EndpointPortConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EndpointPortConfig} obj Optional instance to populate.
     * @return {module:model/EndpointPortConfig} The populated <code>EndpointPortConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EndpointPortConfig();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Protocol')) {
          obj['Protocol'] = _ApiClient["default"].convertToType(data['Protocol'], 'String');
        }

        if (data.hasOwnProperty('TargetPort')) {
          obj['TargetPort'] = _ApiClient["default"].convertToType(data['TargetPort'], 'Number');
        }

        if (data.hasOwnProperty('PublishedPort')) {
          obj['PublishedPort'] = _ApiClient["default"].convertToType(data['PublishedPort'], 'Number');
        }

        if (data.hasOwnProperty('PublishMode')) {
          obj['PublishMode'] = _ApiClient["default"].convertToType(data['PublishMode'], 'String');
        }
      }

      return obj;
    }
  }]);

  return EndpointPortConfig;
}();
/**
 * @member {String} Name
 */


EndpointPortConfig.prototype['Name'] = undefined;
/**
 * @member {module:model/EndpointPortConfig.ProtocolEnum} Protocol
 */

EndpointPortConfig.prototype['Protocol'] = undefined;
/**
 * The port inside the container.
 * @member {Number} TargetPort
 */

EndpointPortConfig.prototype['TargetPort'] = undefined;
/**
 * The port on the swarm hosts.
 * @member {Number} PublishedPort
 */

EndpointPortConfig.prototype['PublishedPort'] = undefined;
/**
 * The mode in which port is published.  <p><br /></p>  - \"ingress\" makes the target port accessible on every node,   regardless of whether there is a task for the service running on   that node or not. - \"host\" bypasses the routing mesh and publish the port directly on   the swarm node where that service is running. 
 * @member {module:model/EndpointPortConfig.PublishModeEnum} PublishMode
 * @default 'ingress'
 */

EndpointPortConfig.prototype['PublishMode'] = 'ingress';
/**
 * Allowed values for the <code>Protocol</code> property.
 * @enum {String}
 * @readonly
 */

EndpointPortConfig['ProtocolEnum'] = {
  /**
   * value: "tcp"
   * @const
   */
  "tcp": "tcp",

  /**
   * value: "udp"
   * @const
   */
  "udp": "udp",

  /**
   * value: "sctp"
   * @const
   */
  "sctp": "sctp"
};
/**
 * Allowed values for the <code>PublishMode</code> property.
 * @enum {String}
 * @readonly
 */

EndpointPortConfig['PublishModeEnum'] = {
  /**
   * value: "ingress"
   * @const
   */
  "ingress": "ingress",

  /**
   * value: "host"
   * @const
   */
  "host": "host"
};
var _default = EndpointPortConfig;
exports["default"] = _default;