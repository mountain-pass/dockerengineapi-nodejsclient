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
    define(['ApiClient', 'model/SwarmSpec'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./SwarmSpec'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.Body1 = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.SwarmSpec);
  }
}(this, function(ApiClient, SwarmSpec) {
  'use strict';

  /**
   * The Body1 model module.
   * @module model/Body1
   * @version 1.41
   */

  /**
   * Constructs a new <code>Body1</code>.
   * @alias module:model/Body1
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>Body1</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/Body1} obj Optional instance to populate.
   * @return {module:model/Body1} The populated <code>Body1</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('ListenAddr'))
        obj.listenAddr = ApiClient.convertToType(data['ListenAddr'], 'String');
      if (data.hasOwnProperty('AdvertiseAddr'))
        obj.advertiseAddr = ApiClient.convertToType(data['AdvertiseAddr'], 'String');
      if (data.hasOwnProperty('DataPathAddr'))
        obj.dataPathAddr = ApiClient.convertToType(data['DataPathAddr'], 'String');
      if (data.hasOwnProperty('DataPathPort'))
        obj.dataPathPort = ApiClient.convertToType(data['DataPathPort'], 'Number');
      if (data.hasOwnProperty('DefaultAddrPool'))
        obj.defaultAddrPool = ApiClient.convertToType(data['DefaultAddrPool'], ['String']);
      if (data.hasOwnProperty('ForceNewCluster'))
        obj.forceNewCluster = ApiClient.convertToType(data['ForceNewCluster'], 'Boolean');
      if (data.hasOwnProperty('SubnetSize'))
        obj.subnetSize = ApiClient.convertToType(data['SubnetSize'], 'Number');
      if (data.hasOwnProperty('Spec'))
        obj.spec = SwarmSpec.constructFromObject(data['Spec']);
    }
    return obj;
  }

  /**
   * Listen address used for inter-manager communication, as well as determining the networking interface used for the VXLAN Tunnel Endpoint (VTEP). This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the default swarm listening port is used. 
   * @member {String} listenAddr
   */
  exports.prototype.listenAddr = undefined;

  /**
   * Externally reachable address advertised to other nodes. This can either be an address/port combination in the form `192.168.1.1:4567`, or an interface followed by a port number, like `eth0:4567`. If the port number is omitted, the port number from the listen address is used. If `AdvertiseAddr` is not specified, it will be automatically detected when possible. 
   * @member {String} advertiseAddr
   */
  exports.prototype.advertiseAddr = undefined;

  /**
   * Address or interface to use for data path traffic (format: `<ip|interface>`), for example,  `192.168.1.1`, or an interface, like `eth0`. If `DataPathAddr` is unspecified, the same address as `AdvertiseAddr` is used.  The `DataPathAddr` specifies the address that global scope network drivers will publish towards other  nodes in order to reach the containers running on this node. Using this parameter it is possible to separate the container data traffic from the management traffic of the cluster. 
   * @member {String} dataPathAddr
   */
  exports.prototype.dataPathAddr = undefined;

  /**
   * DataPathPort specifies the data path port number for data traffic. Acceptable port range is 1024 to 49151. if no port is set or is set to 0, default port 4789 will be used. 
   * @member {Number} dataPathPort
   */
  exports.prototype.dataPathPort = undefined;

  /**
   * Default Address Pool specifies default subnet pools for global scope networks. 
   * @member {Array.<String>} defaultAddrPool
   */
  exports.prototype.defaultAddrPool = undefined;

  /**
   * Force creation of a new swarm.
   * @member {Boolean} forceNewCluster
   */
  exports.prototype.forceNewCluster = undefined;

  /**
   * SubnetSize specifies the subnet size of the networks created from the default subnet pool. 
   * @member {Number} subnetSize
   */
  exports.prototype.subnetSize = undefined;

  /**
   * @member {module:model/SwarmSpec} spec
   */
  exports.prototype.spec = undefined;


  return exports;

}));