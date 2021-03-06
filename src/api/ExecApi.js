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
    define(['ApiClient', 'model/ErrorResponse', 'model/ExecConfig', 'model/ExecInspectResponse', 'model/ExecStartConfig', 'model/IdResponse'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/ErrorResponse'), require('../model/ExecConfig'), require('../model/ExecInspectResponse'), require('../model/ExecStartConfig'), require('../model/IdResponse'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.ExecApi = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.ErrorResponse, root.DockerEngineApi.ExecConfig, root.DockerEngineApi.ExecInspectResponse, root.DockerEngineApi.ExecStartConfig, root.DockerEngineApi.IdResponse);
  }
}(this, function(ApiClient, ErrorResponse, ExecConfig, ExecInspectResponse, ExecStartConfig, IdResponse) {
  'use strict';

  /**
   * Exec service.
   * @module api/ExecApi
   * @version 1.41
   */

  /**
   * Constructs a new ExecApi. 
   * @alias module:api/ExecApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the containerExec operation.
     * @callback module:api/ExecApi~containerExecCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an exec instance
     * Run a command inside a running container.
     * @param {module:model/ExecConfig} execConfig Exec configuration
     * @param {String} id ID or name of container
     * @param {module:api/ExecApi~containerExecCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdResponse}
     */
    this.containerExec = function(execConfig, id, callback) {
      var postBody = execConfig;

      // verify the required parameter 'execConfig' is set
      if (execConfig === undefined || execConfig === null) {
        throw new Error("Missing the required parameter 'execConfig' when calling containerExec");
      }

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerExec");
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
      var accepts = ['application/json'];
      var returnType = IdResponse;

      return this.apiClient.callApi(
        '/containers/{id}/exec', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the execInspect operation.
     * @callback module:api/ExecApi~execInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ExecInspectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect an exec instance
     * Return low-level information about an exec instance.
     * @param {String} id Exec instance ID
     * @param {module:api/ExecApi~execInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ExecInspectResponse}
     */
    this.execInspect = function(id, callback) {
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling execInspect");
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
      var accepts = ['application/json'];
      var returnType = ExecInspectResponse;

      return this.apiClient.callApi(
        '/exec/{id}/json', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the execResize operation.
     * @callback module:api/ExecApi~execResizeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resize an exec instance
     * Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 
     * @param {String} id Exec instance ID
     * @param {Object} opts Optional parameters
     * @param {Number} opts.h Height of the TTY session in characters
     * @param {Number} opts.w Width of the TTY session in characters
     * @param {module:api/ExecApi~execResizeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.execResize = function(id, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling execResize");
      }


      var pathParams = {
        'id': id
      };
      var queryParams = {
        'h': opts['h'],
        'w': opts['w'],
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
        '/exec/{id}/resize', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the execStart operation.
     * @callback module:api/ExecApi~execStartCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start an exec instance
     * Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 
     * @param {String} id Exec instance ID
     * @param {Object} opts Optional parameters
     * @param {module:model/ExecStartConfig} opts.execStartConfig 
     * @param {module:api/ExecApi~execStartCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.execStart = function(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['execStartConfig'];

      // verify the required parameter 'id' is set
      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling execStart");
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
      var accepts = ['application/vnd.docker.raw-stream'];
      var returnType = null;

      return this.apiClient.callApi(
        '/exec/{id}/start', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
