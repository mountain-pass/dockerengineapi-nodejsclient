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
    define(['ApiClient', 'model/TaskSpecContainerSpecPrivilegesCredentialSpec', 'model/TaskSpecContainerSpecPrivilegesSELinuxContext'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./TaskSpecContainerSpecPrivilegesCredentialSpec'), require('./TaskSpecContainerSpecPrivilegesSELinuxContext'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.TaskSpecContainerSpecPrivileges = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.TaskSpecContainerSpecPrivilegesCredentialSpec, root.DockerEngineApi.TaskSpecContainerSpecPrivilegesSELinuxContext);
  }
}(this, function(ApiClient, TaskSpecContainerSpecPrivilegesCredentialSpec, TaskSpecContainerSpecPrivilegesSELinuxContext) {
  'use strict';

  /**
   * The TaskSpecContainerSpecPrivileges model module.
   * @module model/TaskSpecContainerSpecPrivileges
   * @version 1.41
   */

  /**
   * Constructs a new <code>TaskSpecContainerSpecPrivileges</code>.
   * Security options for the container
   * @alias module:model/TaskSpecContainerSpecPrivileges
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaskSpecContainerSpecPrivileges</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskSpecContainerSpecPrivileges} obj Optional instance to populate.
   * @return {module:model/TaskSpecContainerSpecPrivileges} The populated <code>TaskSpecContainerSpecPrivileges</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('CredentialSpec'))
        obj.credentialSpec = TaskSpecContainerSpecPrivilegesCredentialSpec.constructFromObject(data['CredentialSpec']);
      if (data.hasOwnProperty('SELinuxContext'))
        obj.sELinuxContext = TaskSpecContainerSpecPrivilegesSELinuxContext.constructFromObject(data['SELinuxContext']);
    }
    return obj;
  }

  /**
   * @member {module:model/TaskSpecContainerSpecPrivilegesCredentialSpec} credentialSpec
   */
  exports.prototype.credentialSpec = undefined;

  /**
   * @member {module:model/TaskSpecContainerSpecPrivilegesSELinuxContext} sELinuxContext
   */
  exports.prototype.sELinuxContext = undefined;


  return exports;

}));
