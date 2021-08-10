"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _EndpointSettings = _interopRequireDefault(require("./EndpointSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NetworkingConfig model module.
 * @module model/NetworkingConfig
 * @version 1.41
 */
var NetworkingConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NetworkingConfig</code>.
   * NetworkingConfig represents the container&#39;s networking configuration for each of its interfaces. It is used for the networking configs specified in the &#x60;docker create&#x60; and &#x60;docker network connect&#x60; commands. 
   * @alias module:model/NetworkingConfig
   */
  function NetworkingConfig() {
    _classCallCheck(this, NetworkingConfig);

    NetworkingConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NetworkingConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NetworkingConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NetworkingConfig} obj Optional instance to populate.
     * @return {module:model/NetworkingConfig} The populated <code>NetworkingConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NetworkingConfig();

        if (data.hasOwnProperty('EndpointsConfig')) {
          obj['EndpointsConfig'] = _ApiClient["default"].convertToType(data['EndpointsConfig'], {
            'String': _EndpointSettings["default"]
          });
        }
      }

      return obj;
    }
  }]);

  return NetworkingConfig;
}();
/**
 * A mapping of network name to endpoint configuration for that network. 
 * @member {Object.<String, module:model/EndpointSettings>} EndpointsConfig
 */


NetworkingConfig.prototype['EndpointsConfig'] = undefined;
var _default = NetworkingConfig;
exports["default"] = _default;