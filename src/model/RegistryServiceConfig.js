/*
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client's commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don't break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.41) is used. For example, calling `/info` is the same as calling `/v1.41/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ``` 
 *
 * OpenAPI spec version: 1.41
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient', 'model/IndexInfo'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./IndexInfo'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.RegistryServiceConfig = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.IndexInfo);
  }
}(this, function(ApiClient, IndexInfo) {
  'use strict';

  /**
   * The RegistryServiceConfig model module.
   * @module model/RegistryServiceConfig
   * @version 1.41
   */

  /**
   * Constructs a new <code>RegistryServiceConfig</code>.
   * RegistryServiceConfig stores daemon registry services configuration. 
   * @alias module:model/RegistryServiceConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>RegistryServiceConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/RegistryServiceConfig} obj Optional instance to populate.
   * @return {module:model/RegistryServiceConfig} The populated <code>RegistryServiceConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('AllowNondistributableArtifactsCIDRs'))
        obj.allowNondistributableArtifactsCIDRs = ApiClient.convertToType(data['AllowNondistributableArtifactsCIDRs'], ['String']);
      if (data.hasOwnProperty('AllowNondistributableArtifactsHostnames'))
        obj.allowNondistributableArtifactsHostnames = ApiClient.convertToType(data['AllowNondistributableArtifactsHostnames'], ['String']);
      if (data.hasOwnProperty('InsecureRegistryCIDRs'))
        obj.insecureRegistryCIDRs = ApiClient.convertToType(data['InsecureRegistryCIDRs'], ['String']);
      if (data.hasOwnProperty('IndexConfigs'))
        obj.indexConfigs = ApiClient.convertToType(data['IndexConfigs'], {'String': IndexInfo});
      if (data.hasOwnProperty('Mirrors'))
        obj.mirrors = ApiClient.convertToType(data['Mirrors'], ['String']);
    }
    return obj;
  }

  /**
   * List of IP ranges to which nondistributable artifacts can be pushed, using the CIDR syntax [RFC 4632](https://tools.ietf.org/html/4632).  Some images (for example, Windows base images) contain artifacts whose distribution is restricted by license. When these images are pushed to a registry, restricted artifacts are not included.  This configuration override this behavior, and enables the daemon to push nondistributable artifacts to all registries whose resolved IP address is within the subnet described by the CIDR syntax.  This option is useful when pushing images containing nondistributable artifacts to a registry on an air-gapped network so hosts on that network can pull the images without connecting to another server.  > **Warning**: Nondistributable artifacts typically have restrictions > on how and where they can be distributed and shared. Only use this > feature to push artifacts to private registries and ensure that you > are in compliance with any terms that cover redistributing > nondistributable artifacts. 
   * @member {Array.<String>} allowNondistributableArtifactsCIDRs
   */
  exports.prototype.allowNondistributableArtifactsCIDRs = undefined;

  /**
   * List of registry hostnames to which nondistributable artifacts can be pushed, using the format `<hostname>[:<port>]` or `<IP address>[:<port>]`.  Some images (for example, Windows base images) contain artifacts whose distribution is restricted by license. When these images are pushed to a registry, restricted artifacts are not included.  This configuration override this behavior for the specified registries.  This option is useful when pushing images containing nondistributable artifacts to a registry on an air-gapped network so hosts on that network can pull the images without connecting to another server.  > **Warning**: Nondistributable artifacts typically have restrictions > on how and where they can be distributed and shared. Only use this > feature to push artifacts to private registries and ensure that you > are in compliance with any terms that cover redistributing > nondistributable artifacts. 
   * @member {Array.<String>} allowNondistributableArtifactsHostnames
   */
  exports.prototype.allowNondistributableArtifactsHostnames = undefined;

  /**
   * List of IP ranges of insecure registries, using the CIDR syntax ([RFC 4632](https://tools.ietf.org/html/4632)). Insecure registries accept un-encrypted (HTTP) and/or untrusted (HTTPS with certificates from unknown CAs) communication.  By default, local registries (`127.0.0.0/8`) are configured as insecure. All other registries are secure. Communicating with an insecure registry is not possible if the daemon assumes that registry is secure.  This configuration override this behavior, insecure communication with registries whose resolved IP address is within the subnet described by the CIDR syntax.  Registries can also be marked insecure by hostname. Those registries are listed under `IndexConfigs` and have their `Secure` field set to `false`.  > **Warning**: Using this option can be useful when running a local > registry, but introduces security vulnerabilities. This option > should therefore ONLY be used for testing purposes. For increased > security, users should add their CA to their system's list of trusted > CAs instead of enabling this option. 
   * @member {Array.<String>} insecureRegistryCIDRs
   */
  exports.prototype.insecureRegistryCIDRs = undefined;

  /**
   * @member {Object.<String, module:model/IndexInfo>} indexConfigs
   */
  exports.prototype.indexConfigs = undefined;

  /**
   * List of registry URLs that act as a mirror for the official (`docker.io`) registry. 
   * @member {Array.<String>} mirrors
   */
  exports.prototype.mirrors = undefined;


  return exports;

}));
