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
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.VolumeConfig = factory(root.DockerEngineApi.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';

  /**
   * The VolumeConfig model module.
   * @module model/VolumeConfig
   * @version 1.41
   */

  /**
   * Constructs a new <code>VolumeConfig</code>.
   * Volume configuration
   * @alias module:model/VolumeConfig
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>VolumeConfig</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/VolumeConfig} obj Optional instance to populate.
   * @return {module:model/VolumeConfig} The populated <code>VolumeConfig</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Driver'))
        obj.driver = ApiClient.convertToType(data['Driver'], 'String');
      if (data.hasOwnProperty('DriverOpts'))
        obj.driverOpts = ApiClient.convertToType(data['DriverOpts'], {'String': 'String'});
      if (data.hasOwnProperty('Labels'))
        obj.labels = ApiClient.convertToType(data['Labels'], {'String': 'String'});
    }
    return obj;
  }

  /**
   * The new volume's name. If not specified, Docker generates a name. 
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * Name of the volume driver to use.
   * @member {String} driver
   * @default 'local'
   */
  exports.prototype.driver = 'local';

  /**
   * A mapping of driver options and values. These options are passed directly to the driver and are driver specific. 
   * @member {Object.<String, String>} driverOpts
   */
  exports.prototype.driverOpts = undefined;

  /**
   * User-defined key/value metadata.
   * @member {Object.<String, String>} labels
   */
  exports.prototype.labels = undefined;


  return exports;

}));
