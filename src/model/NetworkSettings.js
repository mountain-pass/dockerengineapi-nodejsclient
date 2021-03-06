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
    define(['ApiClient', 'model/Address', 'model/EndpointSettings', 'model/PortMap'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('./Address'), require('./EndpointSettings'), require('./PortMap'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.NetworkSettings = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.Address, root.DockerEngineApi.EndpointSettings, root.DockerEngineApi.PortMap);
  }
}(this, function(ApiClient, Address, EndpointSettings, PortMap) {
  'use strict';

  /**
   * The NetworkSettings model module.
   * @module model/NetworkSettings
   * @version 1.41
   */

  /**
   * Constructs a new <code>NetworkSettings</code>.
   * NetworkSettings exposes the network settings in the API
   * @alias module:model/NetworkSettings
   * @class
   */
  var exports = function() {
  };

  /**
   * Constructs a <code>NetworkSettings</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/NetworkSettings} obj Optional instance to populate.
   * @return {module:model/NetworkSettings} The populated <code>NetworkSettings</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();
      if (data.hasOwnProperty('Bridge'))
        obj.bridge = ApiClient.convertToType(data['Bridge'], 'String');
      if (data.hasOwnProperty('SandboxID'))
        obj.sandboxID = ApiClient.convertToType(data['SandboxID'], 'String');
      if (data.hasOwnProperty('HairpinMode'))
        obj.hairpinMode = ApiClient.convertToType(data['HairpinMode'], 'Boolean');
      if (data.hasOwnProperty('LinkLocalIPv6Address'))
        obj.linkLocalIPv6Address = ApiClient.convertToType(data['LinkLocalIPv6Address'], 'String');
      if (data.hasOwnProperty('LinkLocalIPv6PrefixLen'))
        obj.linkLocalIPv6PrefixLen = ApiClient.convertToType(data['LinkLocalIPv6PrefixLen'], 'Number');
      if (data.hasOwnProperty('Ports'))
        obj.ports = PortMap.constructFromObject(data['Ports']);
      if (data.hasOwnProperty('SandboxKey'))
        obj.sandboxKey = ApiClient.convertToType(data['SandboxKey'], 'String');
      if (data.hasOwnProperty('SecondaryIPAddresses'))
        obj.secondaryIPAddresses = ApiClient.convertToType(data['SecondaryIPAddresses'], [Address]);
      if (data.hasOwnProperty('SecondaryIPv6Addresses'))
        obj.secondaryIPv6Addresses = ApiClient.convertToType(data['SecondaryIPv6Addresses'], [Address]);
      if (data.hasOwnProperty('EndpointID'))
        obj.endpointID = ApiClient.convertToType(data['EndpointID'], 'String');
      if (data.hasOwnProperty('Gateway'))
        obj.gateway = ApiClient.convertToType(data['Gateway'], 'String');
      if (data.hasOwnProperty('GlobalIPv6Address'))
        obj.globalIPv6Address = ApiClient.convertToType(data['GlobalIPv6Address'], 'String');
      if (data.hasOwnProperty('GlobalIPv6PrefixLen'))
        obj.globalIPv6PrefixLen = ApiClient.convertToType(data['GlobalIPv6PrefixLen'], 'Number');
      if (data.hasOwnProperty('IPAddress'))
        obj.iPAddress = ApiClient.convertToType(data['IPAddress'], 'String');
      if (data.hasOwnProperty('IPPrefixLen'))
        obj.iPPrefixLen = ApiClient.convertToType(data['IPPrefixLen'], 'Number');
      if (data.hasOwnProperty('IPv6Gateway'))
        obj.iPv6Gateway = ApiClient.convertToType(data['IPv6Gateway'], 'String');
      if (data.hasOwnProperty('MacAddress'))
        obj.macAddress = ApiClient.convertToType(data['MacAddress'], 'String');
      if (data.hasOwnProperty('Networks'))
        obj.networks = ApiClient.convertToType(data['Networks'], {'String': EndpointSettings});
    }
    return obj;
  }

  /**
   * Name of the network'a bridge (for example, `docker0`).
   * @member {String} bridge
   */
  exports.prototype.bridge = undefined;

  /**
   * SandboxID uniquely represents a container's network stack.
   * @member {String} sandboxID
   */
  exports.prototype.sandboxID = undefined;

  /**
   * Indicates if hairpin NAT should be enabled on the virtual interface. 
   * @member {Boolean} hairpinMode
   */
  exports.prototype.hairpinMode = undefined;

  /**
   * IPv6 unicast address using the link-local prefix.
   * @member {String} linkLocalIPv6Address
   */
  exports.prototype.linkLocalIPv6Address = undefined;

  /**
   * Prefix length of the IPv6 unicast address.
   * @member {Number} linkLocalIPv6PrefixLen
   */
  exports.prototype.linkLocalIPv6PrefixLen = undefined;

  /**
   * @member {module:model/PortMap} ports
   */
  exports.prototype.ports = undefined;

  /**
   * SandboxKey identifies the sandbox
   * @member {String} sandboxKey
   */
  exports.prototype.sandboxKey = undefined;

  /**
   * 
   * @member {Array.<module:model/Address>} secondaryIPAddresses
   */
  exports.prototype.secondaryIPAddresses = undefined;

  /**
   * 
   * @member {Array.<module:model/Address>} secondaryIPv6Addresses
   */
  exports.prototype.secondaryIPv6Addresses = undefined;

  /**
   * EndpointID uniquely represents a service endpoint in a Sandbox.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
   * @member {String} endpointID
   */
  exports.prototype.endpointID = undefined;

  /**
   * Gateway address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
   * @member {String} gateway
   */
  exports.prototype.gateway = undefined;

  /**
   * Global IPv6 address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
   * @member {String} globalIPv6Address
   */
  exports.prototype.globalIPv6Address = undefined;

  /**
   * Mask length of the global IPv6 address.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
   * @member {Number} globalIPv6PrefixLen
   */
  exports.prototype.globalIPv6PrefixLen = undefined;

  /**
   * IPv4 address for the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
   * @member {String} iPAddress
   */
  exports.prototype.iPAddress = undefined;

  /**
   * Mask length of the IPv4 address.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
   * @member {Number} iPPrefixLen
   */
  exports.prototype.iPPrefixLen = undefined;

  /**
   * IPv6 gateway address for this network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
   * @member {String} iPv6Gateway
   */
  exports.prototype.iPv6Gateway = undefined;

  /**
   * MAC address for the container on the default \"bridge\" network.  <p><br /></p>  > **Deprecated**: This field is only propagated when attached to the > default \"bridge\" network. Use the information from the \"bridge\" > network inside the `Networks` map instead, which contains the same > information. This field was deprecated in Docker 1.9 and is scheduled > to be removed in Docker 17.12.0 
   * @member {String} macAddress
   */
  exports.prototype.macAddress = undefined;

  /**
   * Information about all networks that the container is connected to. 
   * @member {Object.<String, module:model/EndpointSettings>} networks
   */
  exports.prototype.networks = undefined;


  return exports;

}));
