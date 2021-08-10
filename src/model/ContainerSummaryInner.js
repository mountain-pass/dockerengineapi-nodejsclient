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
    define(['ApiClient', 'model/ContainerSummaryInnerHostConfig', 'model/ContainerSummaryInnerNetworkSettings', 'model/Mount', 'model/Port'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContainerSummaryInnerHostConfig'), require('./ContainerSummaryInnerNetworkSettings'), require('./Mount'), require('./Port'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.ContainerSummaryInner = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.ContainerSummaryInnerHostConfig, root.DockerEngineApi.ContainerSummaryInnerNetworkSettings, root.DockerEngineApi.Mount, root.DockerEngineApi.Port);
  }
}(this, function(ApiClient, ContainerSummaryInnerHostConfig, ContainerSummaryInnerNetworkSettings, Mount, Port) {
  'use strict';

  /**
   * The ContainerSummaryInner model module.
   * @module model/ContainerSummaryInner
   * @version 1.41
   */

  /**
   * Constructs a new <code>ContainerSummaryInner</code>.
   * @alias module:model/ContainerSummaryInner
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ContainerSummaryInner</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContainerSummaryInner} obj Optional instance to populate.
   * @return {module:model/ContainerSummaryInner} The populated <code>ContainerSummaryInner</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'String');
      if (data.hasOwnProperty('Names'))
        obj.names = ApiClient.convertToType(data['Names'], ['String']);
      if (data.hasOwnProperty('Image'))
        obj.image = ApiClient.convertToType(data['Image'], 'String');
      if (data.hasOwnProperty('ImageID'))
        obj.imageID = ApiClient.convertToType(data['ImageID'], 'String');
      if (data.hasOwnProperty('Command'))
        obj.command = ApiClient.convertToType(data['Command'], 'String');
      if (data.hasOwnProperty('Created'))
        obj.created = ApiClient.convertToType(data['Created'], 'Number');
      if (data.hasOwnProperty('Ports'))
        obj.ports = ApiClient.convertToType(data['Ports'], [Port]);
      if (data.hasOwnProperty('SizeRw'))
        obj.sizeRw = ApiClient.convertToType(data['SizeRw'], 'Number');
      if (data.hasOwnProperty('SizeRootFs'))
        obj.sizeRootFs = ApiClient.convertToType(data['SizeRootFs'], 'Number');
      if (data.hasOwnProperty('Labels'))
        obj.labels = ApiClient.convertToType(data['Labels'], {'String': 'String'});
      if (data.hasOwnProperty('State'))
        obj.state = ApiClient.convertToType(data['State'], 'String');
      if (data.hasOwnProperty('Status'))
        obj.status = ApiClient.convertToType(data['Status'], 'String');
      if (data.hasOwnProperty('HostConfig'))
        obj.hostConfig = ContainerSummaryInnerHostConfig.constructFromObject(data['HostConfig']);
      if (data.hasOwnProperty('NetworkSettings'))
        obj.networkSettings = ContainerSummaryInnerNetworkSettings.constructFromObject(data['NetworkSettings']);
      if (data.hasOwnProperty('Mounts'))
        obj.mounts = ApiClient.convertToType(data['Mounts'], [Mount]);
    }
    return obj;
  }

  /**
   * The ID of this container
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * The names that this container has been given
   * @member {Array.<String>} names
   */
  exports.prototype.names = undefined;

  /**
   * The name of the image used when creating this container
   * @member {String} image
   */
  exports.prototype.image = undefined;

  /**
   * The ID of the image that this container was created from
   * @member {String} imageID
   */
  exports.prototype.imageID = undefined;

  /**
   * Command to run when starting the container
   * @member {String} command
   */
  exports.prototype.command = undefined;

  /**
   * When the container was created
   * @member {Number} created
   */
  exports.prototype.created = undefined;

  /**
   * The ports exposed by this container
   * @member {Array.<module:model/Port>} ports
   */
  exports.prototype.ports = undefined;

  /**
   * The size of files that have been created or changed by this container
   * @member {Number} sizeRw
   */
  exports.prototype.sizeRw = undefined;

  /**
   * The total size of all the files in this container
   * @member {Number} sizeRootFs
   */
  exports.prototype.sizeRootFs = undefined;

  /**
   * User-defined key/value metadata.
   * @member {Object.<String, String>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * The state of this container (e.g. `Exited`)
   * @member {String} state
   */
  exports.prototype.state = undefined;

  /**
   * Additional human-readable status of this container (e.g. `Exit 0`)
   * @member {String} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {module:model/ContainerSummaryInnerHostConfig} hostConfig
   */
  exports.prototype.hostConfig = undefined;

  /**
   * @member {module:model/ContainerSummaryInnerNetworkSettings} networkSettings
   */
  exports.prototype.networkSettings = undefined;

  /**
   * @member {Array.<module:model/Mount>} mounts
   */
  exports.prototype.mounts = undefined;


  return exports;

}));