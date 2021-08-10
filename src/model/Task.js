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
    define(['ApiClient', 'model/GenericResources', 'model/ObjectVersion', 'model/TaskSpec', 'model/TaskState', 'model/TaskStatus'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./GenericResources'), require('./ObjectVersion'), require('./TaskSpec'), require('./TaskState'), require('./TaskStatus'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.Task = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.GenericResources, root.DockerEngineApi.ObjectVersion, root.DockerEngineApi.TaskSpec, root.DockerEngineApi.TaskState, root.DockerEngineApi.TaskStatus);
  }
}(this, function(ApiClient, GenericResources, ObjectVersion, TaskSpec, TaskState, TaskStatus) {
  'use strict';

  /**
   * The Task model module.
   * @module model/Task
   * @version 1.41
   */

  /**
   * Constructs a new <code>Task</code>.
   * @alias module:model/Task
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Task</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Task} obj Optional instance to populate.
   * @return {module:model/Task} The populated <code>Task</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ID'))
        obj.ID = ApiClient.convertToType(data['ID'], 'String');
      if (data.hasOwnProperty('Version'))
        obj.version = ObjectVersion.constructFromObject(data['Version']);
      if (data.hasOwnProperty('CreatedAt'))
        obj.createdAt = ApiClient.convertToType(data['CreatedAt'], 'String');
      if (data.hasOwnProperty('UpdatedAt'))
        obj.updatedAt = ApiClient.convertToType(data['UpdatedAt'], 'String');
      if (data.hasOwnProperty('Name'))
        obj.name = ApiClient.convertToType(data['Name'], 'String');
      if (data.hasOwnProperty('Labels'))
        obj.labels = ApiClient.convertToType(data['Labels'], {'String': 'String'});
      if (data.hasOwnProperty('Spec'))
        obj.spec = TaskSpec.constructFromObject(data['Spec']);
      if (data.hasOwnProperty('ServiceID'))
        obj.serviceID = ApiClient.convertToType(data['ServiceID'], 'String');
      if (data.hasOwnProperty('Slot'))
        obj.slot = ApiClient.convertToType(data['Slot'], 'Number');
      if (data.hasOwnProperty('NodeID'))
        obj.nodeID = ApiClient.convertToType(data['NodeID'], 'String');
      if (data.hasOwnProperty('AssignedGenericResources'))
        obj.assignedGenericResources = GenericResources.constructFromObject(data['AssignedGenericResources']);
      if (data.hasOwnProperty('Status'))
        obj.status = TaskStatus.constructFromObject(data['Status']);
      if (data.hasOwnProperty('DesiredState'))
        obj.desiredState = TaskState.constructFromObject(data['DesiredState']);
      if (data.hasOwnProperty('JobIteration'))
        obj.jobIteration = ObjectVersion.constructFromObject(data['JobIteration']);
    }
    return obj;
  }

  /**
   * The ID of the task.
   * @member {String} ID
   */
  exports.prototype.ID = undefined;

  /**
   * @member {module:model/ObjectVersion} version
   */
  exports.prototype.version = undefined;

  /**
   * @member {String} createdAt
   */
  exports.prototype.createdAt = undefined;

  /**
   * @member {String} updatedAt
   */
  exports.prototype.updatedAt = undefined;

  /**
   * Name of the task.
   * @member {String} name
   */
  exports.prototype.name = undefined;

  /**
   * User-defined key/value metadata.
   * @member {Object.<String, String>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * @member {module:model/TaskSpec} spec
   */
  exports.prototype.spec = undefined;

  /**
   * The ID of the service this task is part of.
   * @member {String} serviceID
   */
  exports.prototype.serviceID = undefined;

  /**
   * @member {Number} slot
   */
  exports.prototype.slot = undefined;

  /**
   * The ID of the node that this task is on.
   * @member {String} nodeID
   */
  exports.prototype.nodeID = undefined;

  /**
   * @member {module:model/GenericResources} assignedGenericResources
   */
  exports.prototype.assignedGenericResources = undefined;

  /**
   * @member {module:model/TaskStatus} status
   */
  exports.prototype.status = undefined;

  /**
   * @member {module:model/TaskState} desiredState
   */
  exports.prototype.desiredState = undefined;

  /**
   * If the Service this Task belongs to is a job-mode service, contains the JobIteration of the Service this Task was created for. Absent if the Task was created for a Replicated or Global Service. 
   * @member {module:model/ObjectVersion} jobIteration
   */
  exports.prototype.jobIteration = undefined;


  return exports;

}));