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
    define(['ApiClient', 'model/HealthConfig', 'model/Mount', 'model/ResourcesUlimits', 'model/TaskSpecContainerSpecConfigs', 'model/TaskSpecContainerSpecDNSConfig', 'model/TaskSpecContainerSpecPrivileges', 'model/TaskSpecContainerSpecSecrets'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./HealthConfig'), require('./Mount'), require('./ResourcesUlimits'), require('./TaskSpecContainerSpecConfigs'), require('./TaskSpecContainerSpecDNSConfig'), require('./TaskSpecContainerSpecPrivileges'), require('./TaskSpecContainerSpecSecrets'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.TaskSpecContainerSpec = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.HealthConfig, root.DockerEngineApi.Mount, root.DockerEngineApi.ResourcesUlimits, root.DockerEngineApi.TaskSpecContainerSpecConfigs, root.DockerEngineApi.TaskSpecContainerSpecDNSConfig, root.DockerEngineApi.TaskSpecContainerSpecPrivileges, root.DockerEngineApi.TaskSpecContainerSpecSecrets);
  }
}(this, function(ApiClient, HealthConfig, Mount, ResourcesUlimits, TaskSpecContainerSpecConfigs, TaskSpecContainerSpecDNSConfig, TaskSpecContainerSpecPrivileges, TaskSpecContainerSpecSecrets) {
  'use strict';

  /**
   * The TaskSpecContainerSpec model module.
   * @module model/TaskSpecContainerSpec
   * @version 1.41
   */

  /**
   * Constructs a new <code>TaskSpecContainerSpec</code>.
   * Container spec for the service.  <p><br /></p>  > **Note**: ContainerSpec, NetworkAttachmentSpec, and PluginSpec are > mutually exclusive. PluginSpec is only used when the Runtime field > is set to `plugin`. NetworkAttachmentSpec is used when the Runtime > field is set to `attachment`. 
   * @alias module:model/TaskSpecContainerSpec
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>TaskSpecContainerSpec</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/TaskSpecContainerSpec} obj Optional instance to populate.
   * @return {module:model/TaskSpecContainerSpec} The populated <code>TaskSpecContainerSpec</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Image'))
        obj.image = ApiClient.convertToType(data['Image'], 'String');
      if (data.hasOwnProperty('Labels'))
        obj.labels = ApiClient.convertToType(data['Labels'], {'String': 'String'});
      if (data.hasOwnProperty('Command'))
        obj.command = ApiClient.convertToType(data['Command'], ['String']);
      if (data.hasOwnProperty('Args'))
        obj.args = ApiClient.convertToType(data['Args'], ['String']);
      if (data.hasOwnProperty('Hostname'))
        obj.hostname = ApiClient.convertToType(data['Hostname'], 'String');
      if (data.hasOwnProperty('Env'))
        obj.env = ApiClient.convertToType(data['Env'], ['String']);
      if (data.hasOwnProperty('Dir'))
        obj.dir = ApiClient.convertToType(data['Dir'], 'String');
      if (data.hasOwnProperty('User'))
        obj.user = ApiClient.convertToType(data['User'], 'String');
      if (data.hasOwnProperty('Groups'))
        obj.groups = ApiClient.convertToType(data['Groups'], ['String']);
      if (data.hasOwnProperty('Privileges'))
        obj.privileges = TaskSpecContainerSpecPrivileges.constructFromObject(data['Privileges']);
      if (data.hasOwnProperty('TTY'))
        obj.TTY = ApiClient.convertToType(data['TTY'], 'Boolean');
      if (data.hasOwnProperty('OpenStdin'))
        obj.openStdin = ApiClient.convertToType(data['OpenStdin'], 'Boolean');
      if (data.hasOwnProperty('ReadOnly'))
        obj.readOnly = ApiClient.convertToType(data['ReadOnly'], 'Boolean');
      if (data.hasOwnProperty('Mounts'))
        obj.mounts = ApiClient.convertToType(data['Mounts'], [Mount]);
      if (data.hasOwnProperty('StopSignal'))
        obj.stopSignal = ApiClient.convertToType(data['StopSignal'], 'String');
      if (data.hasOwnProperty('StopGracePeriod'))
        obj.stopGracePeriod = ApiClient.convertToType(data['StopGracePeriod'], 'Number');
      if (data.hasOwnProperty('HealthCheck'))
        obj.healthCheck = HealthConfig.constructFromObject(data['HealthCheck']);
      if (data.hasOwnProperty('Hosts'))
        obj.hosts = ApiClient.convertToType(data['Hosts'], ['String']);
      if (data.hasOwnProperty('DNSConfig'))
        obj.dNSConfig = TaskSpecContainerSpecDNSConfig.constructFromObject(data['DNSConfig']);
      if (data.hasOwnProperty('Secrets'))
        obj.secrets = ApiClient.convertToType(data['Secrets'], [TaskSpecContainerSpecSecrets]);
      if (data.hasOwnProperty('Configs'))
        obj.configs = ApiClient.convertToType(data['Configs'], [TaskSpecContainerSpecConfigs]);
      if (data.hasOwnProperty('Isolation'))
        obj.isolation = ApiClient.convertToType(data['Isolation'], 'String');
      if (data.hasOwnProperty('Init'))
        obj.init = ApiClient.convertToType(data['Init'], 'Boolean');
      if (data.hasOwnProperty('Sysctls'))
        obj.sysctls = ApiClient.convertToType(data['Sysctls'], {'String': 'String'});
      if (data.hasOwnProperty('CapabilityAdd'))
        obj.capabilityAdd = ApiClient.convertToType(data['CapabilityAdd'], ['String']);
      if (data.hasOwnProperty('CapabilityDrop'))
        obj.capabilityDrop = ApiClient.convertToType(data['CapabilityDrop'], ['String']);
      if (data.hasOwnProperty('Ulimits'))
        obj.ulimits = ApiClient.convertToType(data['Ulimits'], [ResourcesUlimits]);
    }
    return obj;
  }

  /**
   * The image name to use for the container
   * @member {String} image
   */
  exports.prototype.image = undefined;

  /**
   * User-defined key/value data.
   * @member {Object.<String, String>} labels
   */
  exports.prototype.labels = undefined;

  /**
   * The command to be run in the image.
   * @member {Array.<String>} command
   */
  exports.prototype.command = undefined;

  /**
   * Arguments to the command.
   * @member {Array.<String>} args
   */
  exports.prototype.args = undefined;

  /**
   * The hostname to use for the container, as a valid [RFC 1123](https://tools.ietf.org/html/rfc1123) hostname. 
   * @member {String} hostname
   */
  exports.prototype.hostname = undefined;

  /**
   * A list of environment variables in the form `VAR=value`. 
   * @member {Array.<String>} env
   */
  exports.prototype.env = undefined;

  /**
   * The working directory for commands to run in.
   * @member {String} dir
   */
  exports.prototype.dir = undefined;

  /**
   * The user inside the container.
   * @member {String} user
   */
  exports.prototype.user = undefined;

  /**
   * A list of additional groups that the container process will run as. 
   * @member {Array.<String>} groups
   */
  exports.prototype.groups = undefined;

  /**
   * @member {module:model/TaskSpecContainerSpecPrivileges} privileges
   */
  exports.prototype.privileges = undefined;

  /**
   * Whether a pseudo-TTY should be allocated.
   * @member {Boolean} TTY
   */
  exports.prototype.TTY = undefined;

  /**
   * Open `stdin`
   * @member {Boolean} openStdin
   */
  exports.prototype.openStdin = undefined;

  /**
   * Mount the container's root filesystem as read only.
   * @member {Boolean} readOnly
   */
  exports.prototype.readOnly = undefined;

  /**
   * Specification for mounts to be added to containers created as part of the service. 
   * @member {Array.<module:model/Mount>} mounts
   */
  exports.prototype.mounts = undefined;

  /**
   * Signal to stop the container.
   * @member {String} stopSignal
   */
  exports.prototype.stopSignal = undefined;

  /**
   * Amount of time to wait for the container to terminate before forcefully killing it. 
   * @member {Number} stopGracePeriod
   */
  exports.prototype.stopGracePeriod = undefined;

  /**
   * @member {module:model/HealthConfig} healthCheck
   */
  exports.prototype.healthCheck = undefined;

  /**
   * A list of hostname/IP mappings to add to the container's `hosts` file. The format of extra hosts is specified in the [hosts(5)](http://man7.org/linux/man-pages/man5/hosts.5.html) man page:      IP_address canonical_hostname [aliases...] 
   * @member {Array.<String>} hosts
   */
  exports.prototype.hosts = undefined;

  /**
   * @member {module:model/TaskSpecContainerSpecDNSConfig} dNSConfig
   */
  exports.prototype.dNSConfig = undefined;

  /**
   * Secrets contains references to zero or more secrets that will be exposed to the service. 
   * @member {Array.<module:model/TaskSpecContainerSpecSecrets>} secrets
   */
  exports.prototype.secrets = undefined;

  /**
   * Configs contains references to zero or more configs that will be exposed to the service. 
   * @member {Array.<module:model/TaskSpecContainerSpecConfigs>} configs
   */
  exports.prototype.configs = undefined;

  /**
   * Isolation technology of the containers running the service. (Windows only) 
   * @member {module:model/TaskSpecContainerSpec.IsolationEnum} isolation
   */
  exports.prototype.isolation = undefined;

  /**
   * Run an init inside the container that forwards signals and reaps processes. This field is omitted if empty, and the default (as configured on the daemon) is used. 
   * @member {Boolean} init
   */
  exports.prototype.init = undefined;

  /**
   * Set kernel namedspaced parameters (sysctls) in the container. The Sysctls option on services accepts the same sysctls as the are supported on containers. Note that while the same sysctls are supported, no guarantees or checks are made about their suitability for a clustered environment, and it's up to the user to determine whether a given sysctl will work properly in a Service. 
   * @member {Object.<String, String>} sysctls
   */
  exports.prototype.sysctls = undefined;

  /**
   * A list of kernel capabilities to add to the default set for the container. 
   * @member {Array.<String>} capabilityAdd
   */
  exports.prototype.capabilityAdd = undefined;

  /**
   * A list of kernel capabilities to drop from the default set for the container. 
   * @member {Array.<String>} capabilityDrop
   */
  exports.prototype.capabilityDrop = undefined;

  /**
   * A list of resource limits to set in the container. For example: `{\"Name\": \"nofile\", \"Soft\": 1024, \"Hard\": 2048}`\" 
   * @member {Array.<module:model/ResourcesUlimits>} ulimits
   */
  exports.prototype.ulimits = undefined;



  /**
   * Allowed values for the <code>isolation</code> property.
   * @enum {String}
   * @readonly
   */
  exports.IsolationEnum = {
    /**
     * value: "default"
     * @const
     */
    _default: "default",

    /**
     * value: "process"
     * @const
     */
    process: "process",

    /**
     * value: "hyperv"
     * @const
     */
    hyperv: "hyperv"
  };

  return exports;

}));
