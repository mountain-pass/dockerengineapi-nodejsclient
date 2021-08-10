"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _IndexInfo = _interopRequireDefault(require("./IndexInfo"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The RegistryServiceConfig model module.
 * @module model/RegistryServiceConfig
 * @version 1.41
 */
var RegistryServiceConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>RegistryServiceConfig</code>.
   * RegistryServiceConfig stores daemon registry services configuration. 
   * @alias module:model/RegistryServiceConfig
   */
  function RegistryServiceConfig() {
    _classCallCheck(this, RegistryServiceConfig);

    RegistryServiceConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(RegistryServiceConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>RegistryServiceConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/RegistryServiceConfig} obj Optional instance to populate.
     * @return {module:model/RegistryServiceConfig} The populated <code>RegistryServiceConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new RegistryServiceConfig();

        if (data.hasOwnProperty('AllowNondistributableArtifactsCIDRs')) {
          obj['AllowNondistributableArtifactsCIDRs'] = _ApiClient["default"].convertToType(data['AllowNondistributableArtifactsCIDRs'], ['String']);
        }

        if (data.hasOwnProperty('AllowNondistributableArtifactsHostnames')) {
          obj['AllowNondistributableArtifactsHostnames'] = _ApiClient["default"].convertToType(data['AllowNondistributableArtifactsHostnames'], ['String']);
        }

        if (data.hasOwnProperty('InsecureRegistryCIDRs')) {
          obj['InsecureRegistryCIDRs'] = _ApiClient["default"].convertToType(data['InsecureRegistryCIDRs'], ['String']);
        }

        if (data.hasOwnProperty('IndexConfigs')) {
          obj['IndexConfigs'] = _ApiClient["default"].convertToType(data['IndexConfigs'], {
            'String': _IndexInfo["default"]
          });
        }

        if (data.hasOwnProperty('Mirrors')) {
          obj['Mirrors'] = _ApiClient["default"].convertToType(data['Mirrors'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return RegistryServiceConfig;
}();
/**
 * List of IP ranges to which nondistributable artifacts can be pushed, using the CIDR syntax [RFC 4632](https://tools.ietf.org/html/4632).  Some images (for example, Windows base images) contain artifacts whose distribution is restricted by license. When these images are pushed to a registry, restricted artifacts are not included.  This configuration override this behavior, and enables the daemon to push nondistributable artifacts to all registries whose resolved IP address is within the subnet described by the CIDR syntax.  This option is useful when pushing images containing nondistributable artifacts to a registry on an air-gapped network so hosts on that network can pull the images without connecting to another server.  > **Warning**: Nondistributable artifacts typically have restrictions > on how and where they can be distributed and shared. Only use this > feature to push artifacts to private registries and ensure that you > are in compliance with any terms that cover redistributing > nondistributable artifacts. 
 * @member {Array.<String>} AllowNondistributableArtifactsCIDRs
 */


RegistryServiceConfig.prototype['AllowNondistributableArtifactsCIDRs'] = undefined;
/**
 * List of registry hostnames to which nondistributable artifacts can be pushed, using the format `<hostname>[:<port>]` or `<IP address>[:<port>]`.  Some images (for example, Windows base images) contain artifacts whose distribution is restricted by license. When these images are pushed to a registry, restricted artifacts are not included.  This configuration override this behavior for the specified registries.  This option is useful when pushing images containing nondistributable artifacts to a registry on an air-gapped network so hosts on that network can pull the images without connecting to another server.  > **Warning**: Nondistributable artifacts typically have restrictions > on how and where they can be distributed and shared. Only use this > feature to push artifacts to private registries and ensure that you > are in compliance with any terms that cover redistributing > nondistributable artifacts. 
 * @member {Array.<String>} AllowNondistributableArtifactsHostnames
 */

RegistryServiceConfig.prototype['AllowNondistributableArtifactsHostnames'] = undefined;
/**
 * List of IP ranges of insecure registries, using the CIDR syntax ([RFC 4632](https://tools.ietf.org/html/4632)). Insecure registries accept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates from unknown CAs) communication.  By default, local registries (`127.0.0.0/8`) are configured as insecure. All other registries are secure. Communicating with an insecure registry is not possible if the daemon assumes that registry is secure.  This configuration override this behavior, insecure communication with registries whose resolved IP address is within the subnet described by the CIDR syntax.  Registries can also be marked insecure by hostname. Those registries are listed under `IndexConfigs` and have their `Secure` field set to `false`.  > **Warning**: Using this option can be useful when running a local > registry, but introduces security vulnerabilities. This option > should therefore ONLY be used for testing purposes. For increased > security, users should add their CA to their system's list of trusted > CAs instead of enabling this option. 
 * @member {Array.<String>} InsecureRegistryCIDRs
 */

RegistryServiceConfig.prototype['InsecureRegistryCIDRs'] = undefined;
/**
 * @member {Object.<String, module:model/IndexInfo>} IndexConfigs
 */

RegistryServiceConfig.prototype['IndexConfigs'] = undefined;
/**
 * List of registry URLs that act as a mirror for the official (`docker.io`) registry. 
 * @member {Array.<String>} Mirrors
 */

RegistryServiceConfig.prototype['Mirrors'] = undefined;
var _default = RegistryServiceConfig;
exports["default"] = _default;