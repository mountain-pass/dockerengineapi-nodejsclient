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
    define(['ApiClient', 'model/ContainerConfig', 'model/ContainerState', 'model/GraphDriverData', 'model/HostConfig', 'model/MountPoint', 'model/NetworkSettings'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./ContainerConfig'), require('./ContainerState'), require('./GraphDriverData'), require('./HostConfig'), require('./MountPoint'), require('./NetworkSettings'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.ContainerInspectResponse = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.ContainerConfig, root.DockerEngineApi.ContainerState, root.DockerEngineApi.GraphDriverData, root.DockerEngineApi.HostConfig, root.DockerEngineApi.MountPoint, root.DockerEngineApi.NetworkSettings);
  }
}(this, function(ApiClient, ContainerConfig, ContainerState, GraphDriverData, HostConfig, MountPoint, NetworkSettings) {
  'use strict';

  /**
   * The ContainerInspectResponse model module.
   * @module model/ContainerInspectResponse
   * @version 1.41
   */

  /**
   * Constructs a new <code>ContainerInspectResponse</code>.
   * @alias module:model/ContainerInspectResponse
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>ContainerInspectResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/ContainerInspectResponse} obj Optional instance to populate.
   * @return {module:model/ContainerInspectResponse} The populated <code>ContainerInspectResponse</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Id'))
        obj.id = ApiClient.convertToType(data['Id'], 'String');
      if (data.hasOwnProperty('Created'))
        obj.created = ApiClient.convertToType(data['Created'], 'String');
      if (data.hasOwnProperty('Path'))
        obj.path = ApiClient.convertToType(data['Path'], 'String');
      if (data.hasOwnProperty('Args'))
        obj.args = ApiClient.convertToType(data['Args'], ['String']);
      if (data.hasOwnProperty('State'))
        obj.state = ContainerState.constructFromObject(data['State']);
      if (data.hasOwnProperty('Image'))
        obj.image = ApiClient.convertToType(data['Image'], 'String');
      if (data.hasOwnProperty('ResolvConfPath'))
        obj.resolvConfPath = ApiClient.convertToType(data['ResolvConfPath'], 'String');
      if (data.hasOwnProperty('HostnamePath'))
        obj.hostnamePath = ApiClient.convertToType(data['HostnamePath'], 'String');
      if (data.hasOwnProperty('HostsPath'))
        obj.hostsPath = ApiClient.convertToType(data['HostsPath'], 'String');
      if (data.hasOwnProperty('LogPath'))
        obj.logPath = ApiClient.convertToType(data['LogPath'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('RestartCount'))
        obj.restartCount = ApiClient.convertToType(data['RestartCount'], 'Number');
      if (data.hasOwnProperty('Driver'))
        obj.driver = ApiClient.convertToType(data['Driver'], 'String');
      if (data.hasOwnProperty('Platform'))
        obj.platform = ApiClient.convertToType(data['Platform'], 'String');
      if (data.hasOwnProperty('MountLabel'))
        obj.mountLabel = ApiClient.convertToType(data['MountLabel'], 'String');
      if (data.hasOwnProperty('ProcessLabel'))
        obj.processLabel = ApiClient.convertToType(data['ProcessLabel'], 'String');
      if (data.hasOwnProperty('AppArmorProfile'))
        obj.appArmorProfile = ApiClient.convertToType(data['AppArmorProfile'], 'String');
      if (data.hasOwnProperty('ExecIDs'))
        obj.execIDs = ApiClient.convertToType(data['ExecIDs'], ['String']);
      if (data.hasOwnProperty('HostConfig'))
        obj.hostConfig = HostConfig.constructFromObject(data['HostConfig']);
      if (data.hasOwnProperty('GraphDriver'))
        obj.graphDriver = GraphDriverData.constructFromObject(data['GraphDriver']);
      if (data.hasOwnProperty('SizeRw'))
        obj.sizeRw = ApiClient.convertToType(data['SizeRw'], 'Number');
      if (data.hasOwnProperty('SizeRootFs'))
        obj.sizeRootFs = ApiClient.convertToType(data['SizeRootFs'], 'Number');
      if (data.hasOwnProperty('Mounts'))
        obj.mounts = ApiClient.convertToType(data['Mounts'], [MountPoint]);
      if (data.hasOwnProperty('Config'))
        obj.config = ContainerConfig.constructFromObject(data['Config']);
      if (data.hasOwnProperty('NetworkSettings'))
        obj.networkSettings = NetworkSettings.constructFromObject(data['NetworkSettings']);
    }
    return obj;
  }

  /**
   * The ID of the container
   * @member {String} id
   */
  exports.prototype.id = undefined;

  /**
   * The time the container was created
   * @member {String} created
   */
  exports.prototype.created = undefined;

  /**
   * The path to the command being run
   * @member {String} path
   */
  exports.prototype.path = undefined;

  /**
   * The arguments to the command being run
   * @member {Array.<String>} args
   */
  exports.prototype.args = undefined;

  /**
   * @member {module:model/ContainerState} state
   */
  exports.prototype.state = undefined;

  /**
   * The container's image ID
   * @member {String} image
   */
  exports.prototype.image = undefined;

  /**
   * @member {String} resolvConfPath
   */
  exports.prototype.resolvConfPath = undefined;

  /**
   * @member {String} hostnamePath
   */
  exports.prototype.hostnamePath = undefined;

  /**
   * @member {String} hostsPath
   */
  exports.prototype.hostsPath = undefined;

  /**
   * @member {String} logPath
   */
  exports.prototype.logPath = undefined;

  /**
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * @member {Number} restartCount
   */
  exports.prototype.restartCount = undefined;

  /**
   * @member {String} driver
   */
  exports.prototype.driver = undefined;

  /**
   * @member {String} platform
   */
  exports.prototype.platform = undefined;

  /**
   * @member {String} mountLabel
   */
  exports.prototype.mountLabel = undefined;

  /**
   * @member {String} processLabel
   */
  exports.prototype.processLabel = undefined;

  /**
   * @member {String} appArmorProfile
   */
  exports.prototype.appArmorProfile = undefined;

  /**
   * IDs of exec instances that are running in the container.
   * @member {Array.<String>} execIDs
   */
  exports.prototype.execIDs = undefined;

  /**
   * @member {module:model/HostConfig} hostConfig
   */
  exports.prototype.hostConfig = undefined;

  /**
   * @member {module:model/GraphDriverData} graphDriver
   */
  exports.prototype.graphDriver = undefined;

  /**
   * The size of files that have been created or changed by this container. 
   * @member {Number} sizeRw
   */
  exports.prototype.sizeRw = undefined;

  /**
   * The total size of all the files in this container.
   * @member {Number} sizeRootFs
   */
  exports.prototype.sizeRootFs = undefined;

  /**
   * @member {Array.<module:model/MountPoint>} mounts
   */
  exports.prototype.mounts = undefined;

  /**
   * @member {module:model/ContainerConfig} config
   */
  exports.prototype.config = undefined;

  /**
   * @member {module:model/NetworkSettings} networkSettings
   */
  exports.prototype.networkSettings = undefined;


  return exports;

}));
