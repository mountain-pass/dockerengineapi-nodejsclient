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
    define(['ApiClient', 'model/Container', 'model/Container1', 'model/ErrorResponse', 'model/Network', 'model/NetworkConfig', 'model/NetworkCreateResponse', 'model/NetworkPruneResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Container'), require('../model/Container1'), require('../model/ErrorResponse'), require('../model/Network'), require('../model/NetworkConfig'), require('../model/NetworkCreateResponse'), require('../model/NetworkPruneResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.NetworkApi = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.Container, root.DockerEngineApi.Container1, root.DockerEngineApi.ErrorResponse, root.DockerEngineApi.Network, root.DockerEngineApi.NetworkConfig, root.DockerEngineApi.NetworkCreateResponse, root.DockerEngineApi.NetworkPruneResponse);
  }
}(this, function(ApiClient, Container, Container1, ErrorResponse, Network, NetworkConfig, NetworkCreateResponse, NetworkPruneResponse) {
  'use strict';

  /**
   * Network service.
   * @module api/NetworkApi
   * @version 1.41
   */

  /**
   * Constructs a new NetworkApi. 
   * @alias module:api/NetworkApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the networkConnect operation.
     * @callback module:api/NetworkApi~networkConnectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Connect a container to a network
     * @param {String} id Network ID or name
     * @param {module:model/Container} container 
     * @param {module:api/NetworkApi~networkConnectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.networkConnect = function(id, container, callback) {
      var postBody = container;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling networkConnect");
      }

      // verify the required parameter 'container' is set
      if (container === undefined || container === null) {
        throw new Error("Missing the required parameter 'container' when calling networkConnect");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/networks/{id}/connect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the networkCreate operation.
     * @callback module:api/NetworkApi~networkCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a network
     * @param {module:model/NetworkConfig} networkConfig Network configuration
     * @param {module:api/NetworkApi~networkCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkCreateResponse}
     */
    this.networkCreate = function(networkConfig, callback) {
      var postBody = networkConfig;

      // verify the required parameter 'networkConfig' is set
      if (networkConfig === undefined || networkConfig === null) {
        throw new Error("Missing the required parameter 'networkConfig' when calling networkCreate");
      }


      var pathParams = {
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = NetworkCreateResponse;

      return this.apiClient.callApi(
        '/networks/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the networkDelete operation.
     * @callback module:api/NetworkApi~networkDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a network
     * @param {String} id Network ID or name
     * @param {module:api/NetworkApi~networkDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.networkDelete = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling networkDelete");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/networks/{id}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the networkDisconnect operation.
     * @callback module:api/NetworkApi~networkDisconnectCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disconnect a container from a network
     * @param {String} id Network ID or name
     * @param {module:model/Container1} container 
     * @param {module:api/NetworkApi~networkDisconnectCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.networkDisconnect = function(id, container, callback) {
      var postBody = container;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling networkDisconnect");
      }

      // verify the required parameter 'container' is set
      if (container === undefined || container === null) {
        throw new Error("Missing the required parameter 'container' when calling networkDisconnect");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/networks/{id}/disconnect', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the networkInspect operation.
     * @callback module:api/NetworkApi~networkInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Network} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a network
     * @param {String} id Network ID or name
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.verbose Detailed inspect output for troubleshooting (default to false)
     * @param {String} opts.scope Filter the network by scope (swarm, global, or local)
     * @param {module:api/NetworkApi~networkInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Network}
     */
    this.networkInspect = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling networkInspect");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'verbose': opts['verbose'],
        'scope': opts['scope'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json'];
      var returnType = Network;

      return this.apiClient.callApi(
        '/networks/{id}', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the networkList operation.
     * @callback module:api/NetworkApi~networkListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Network>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List networks
     * Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters JSON encoded value of the filters (a `map[string][]string`) to process on the networks list.  Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), returns all    networks that are not in use by a container. When set to `false`    (or `0`), only networks that are in use by one or more    containers are returned. - `driver=<driver-name>` Matches a network's driver. - `id=<network-id>` Matches all or part of a network ID. - `label=<key>` or `label=<key>=<value>` of a network label. - `name=<network-name>` Matches all or part of a network name. - `scope=[\"swarm\"|\"global\"|\"local\"]` Filters networks by scope (`swarm`, `global`, or `local`). - `type=[\"custom\"|\"builtin\"]` Filters networks by type. The `custom` keyword returns all user-defined networks. 
     * @param {module:api/NetworkApi~networkListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Network>}
     */
    this.networkList = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filters': opts['filters'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json'];
      var returnType = [Network];

      return this.apiClient.callApi(
        '/networks', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the networkPrune operation.
     * @callback module:api/NetworkApi~networkPruneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/NetworkPruneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete unused networks
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels. 
     * @param {module:api/NetworkApi~networkPruneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkPruneResponse}
     */
    this.networkPrune = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'filters': opts['filters'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json'];
      var returnType = NetworkPruneResponse;

      return this.apiClient.callApi(
        '/networks/prune', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));