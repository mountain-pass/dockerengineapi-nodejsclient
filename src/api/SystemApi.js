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
    define(['ApiClient', 'model/AuthConfig', 'model/ErrorResponse', 'model/SystemAuthResponse', 'model/SystemDataUsageResponse', 'model/SystemEventsResponse', 'model/SystemInfo', 'model/SystemVersion'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/AuthConfig'), require('../model/ErrorResponse'), require('../model/SystemAuthResponse'), require('../model/SystemDataUsageResponse'), require('../model/SystemEventsResponse'), require('../model/SystemInfo'), require('../model/SystemVersion'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.SystemApi = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.AuthConfig, root.DockerEngineApi.ErrorResponse, root.DockerEngineApi.SystemAuthResponse, root.DockerEngineApi.SystemDataUsageResponse, root.DockerEngineApi.SystemEventsResponse, root.DockerEngineApi.SystemInfo, root.DockerEngineApi.SystemVersion);
  }
}(this, function(ApiClient, AuthConfig, ErrorResponse, SystemAuthResponse, SystemDataUsageResponse, SystemEventsResponse, SystemInfo, SystemVersion) {
  'use strict';

  /**
   * System service.
   * @module api/SystemApi
   * @version 1.41
   */

  /**
   * Constructs a new SystemApi. 
   * @alias module:api/SystemApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the systemAuth operation.
     * @callback module:api/SystemApi~systemAuthCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SystemAuthResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Check auth configuration
     * Validate credentials for a registry and, if available, get an identity token for accessing the registry without password. 
     * @param {Object} opts Optional parameters
     * @param {module:model/AuthConfig} opts.authConfig Authentication to check
     * @param {module:api/SystemApi~systemAuthCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SystemAuthResponse}
     */
    this.systemAuth = function(opts, callback) {
      opts = opts || {};
      var postBody = opts['authConfig'];


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
      var returnType = SystemAuthResponse;

      return this.apiClient.callApi(
        '/auth', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the systemDataUsage operation.
     * @callback module:api/SystemApi~systemDataUsageCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SystemDataUsageResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get data usage information
     * @param {module:api/SystemApi~systemDataUsageCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SystemDataUsageResponse}
     */
    this.systemDataUsage = function(callback) {
      var postBody = null;


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
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = SystemDataUsageResponse;

      return this.apiClient.callApi(
        '/system/df', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the systemEvents operation.
     * @callback module:api/SystemApi~systemEventsCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SystemEventsResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Monitor events
     * Stream real-time events from the server.  Various objects within Docker report events when something happens to them.  Containers report these events: `attach`, `commit`, `copy`, `create`, `destroy`, `detach`, `die`, `exec_create`, `exec_detach`, `exec_start`, `exec_die`, `export`, `health_status`, `kill`, `oom`, `pause`, `rename`, `resize`, `restart`, `start`, `stop`, `top`, `unpause`, `update`, and `prune`  Images report these events: `delete`, `import`, `load`, `pull`, `push`, `save`, `tag`, `untag`, and `prune`  Volumes report these events: `create`, `mount`, `unmount`, `destroy`, and `prune`  Networks report these events: `create`, `connect`, `disconnect`, `destroy`, `update`, `remove`, and `prune`  The Docker daemon reports these events: `reload`  Services report these events: `create`, `update`, and `remove`  Nodes report these events: `create`, `update`, and `remove`  Secrets report these events: `create`, `update`, and `remove`  Configs report these events: `create`, `update`, and `remove`  The Builder reports `prune` events 
     * @param {Object} opts Optional parameters
     * @param {String} opts.since Show events created since this timestamp then stream new events.
     * @param {String} opts.until Show events created until this timestamp then stop streaming.
     * @param {String} opts.filters A JSON encoded value of filters (a `map[string][]string`) to process on the event list. Available filters:  - `config=<string>` config name or ID - `container=<string>` container name or ID - `daemon=<string>` daemon name or ID - `event=<string>` event type - `image=<string>` image name or ID - `label=<string>` image or container label - `network=<string>` network name or ID - `node=<string>` node ID - `plugin`=<string> plugin name or ID - `scope`=<string> local or swarm - `secret=<string>` secret name or ID - `service=<string>` service name or ID - `type=<string>` object to filter by, one of `container`, `image`, `volume`, `network`, `daemon`, `plugin`, `node`, `service`, `secret` or `config` - `volume=<string>` volume name 
     * @param {module:api/SystemApi~systemEventsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SystemEventsResponse}
     */
    this.systemEvents = function(opts, callback) {
      opts = opts || {};
      var postBody = null;


      var pathParams = {
      };
      var queryParams = {
        'since': opts['since'],
        'until': opts['until'],
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
      var returnType = SystemEventsResponse;

      return this.apiClient.callApi(
        '/events', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the systemInfo operation.
     * @callback module:api/SystemApi~systemInfoCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SystemInfo} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get system information
     * @param {module:api/SystemApi~systemInfoCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SystemInfo}
     */
    this.systemInfo = function(callback) {
      var postBody = null;


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
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json'];
      var returnType = SystemInfo;

      return this.apiClient.callApi(
        '/info', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the systemPing operation.
     * @callback module:api/SystemApi~systemPingCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping
     * This is a dummy endpoint you can use to test if the server is accessible.
     * @param {module:api/SystemApi~systemPingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.systemPing = function(callback) {
      var postBody = null;


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
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['text/plain'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/_ping', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the systemPingHead operation.
     * @callback module:api/SystemApi~systemPingHeadCallback
     * @param {String} error Error message, if any.
     * @param {'String'} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping
     * This is a dummy endpoint you can use to test if the server is accessible.
     * @param {module:api/SystemApi~systemPingHeadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link 'String'}
     */
    this.systemPingHead = function(callback) {
      var postBody = null;


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
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['text/plain'];
      var returnType = 'String';

      return this.apiClient.callApi(
        '/_ping', 'HEAD',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the systemVersion operation.
     * @callback module:api/SystemApi~systemVersionCallback
     * @param {String} error Error message, if any.
     * @param {module:model/SystemVersion} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get version
     * Returns the version of Docker that is running and various information about the system that Docker is running on.
     * @param {module:api/SystemApi~systemVersionCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/SystemVersion}
     */
    this.systemVersion = function(callback) {
      var postBody = null;


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
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json'];
      var returnType = SystemVersion;

      return this.apiClient.callApi(
        '/version', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
