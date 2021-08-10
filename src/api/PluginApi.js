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
    define(['ApiClient', 'model/Body', 'model/ErrorResponse', 'model/Plugin', 'model/PluginPrivilegeItem'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'), require('../model/Body'), require('../model/ErrorResponse'), require('../model/Plugin'), require('../model/PluginPrivilegeItem'));
  } else {
    // Browser globals (root is window)
    if (!root.DockerEngineApi) {
      root.DockerEngineApi = {};
    }
    root.DockerEngineApi.PluginApi = factory(root.DockerEngineApi.ApiClient, root.DockerEngineApi.Body, root.DockerEngineApi.ErrorResponse, root.DockerEngineApi.Plugin, root.DockerEngineApi.PluginPrivilegeItem);
  }
}(this, function(ApiClient, Body, ErrorResponse, Plugin, PluginPrivilegeItem) {
  'use strict';

  /**
   * Plugin service.
   * @module api/PluginApi
   * @version 1.41
   */

  /**
   * Constructs a new PluginApi. 
   * @alias module:api/PluginApi
   * @class
   * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
   * default to {@link module:ApiClient#instance} if unspecified.
   */
  var exports = function(apiClient) {
    this.apiClient = apiClient || ApiClient.instance;


    /**
     * Callback function to receive the result of the getPluginPrivileges operation.
     * @callback module:api/PluginApi~getPluginPrivilegesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/PluginPrivilegeItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get plugin privileges
     * @param {String} remote The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {module:api/PluginApi~getPluginPrivilegesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/PluginPrivilegeItem>}
     */
    this.getPluginPrivileges = function(remote, callback) {
      var postBody = null;

      // verify the required parameter 'remote' is set
      if (remote === undefined || remote === null) {
        throw new Error("Missing the required parameter 'remote' when calling getPluginPrivileges");
      }


      var pathParams = {
      };
      var queryParams = {
        'remote': remote,
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
      var returnType = [PluginPrivilegeItem];

      return this.apiClient.callApi(
        '/plugins/privileges', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginCreate operation.
     * @callback module:api/PluginApi~pluginCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a plugin
     * @param {String} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {Object} opts Optional parameters
     * @param {Blob} opts.tarContext Path to tar containing plugin rootfs and manifest
     * @param {module:api/PluginApi~pluginCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pluginCreate = function(name, opts, callback) {
      opts = opts || {};
      var postBody = opts['tarContext'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginCreate");
      }


      var pathParams = {
      };
      var queryParams = {
        'name': name,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/x-tar'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/plugins/create', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginDelete operation.
     * @callback module:api/PluginApi~pluginDeleteCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Plugin} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a plugin
     * @param {String} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Disable the plugin before removing. This may result in issues if the plugin is in use by a container.  (default to false)
     * @param {module:api/PluginApi~pluginDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Plugin}
     */
    this.pluginDelete = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginDelete");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'force': opts['force'],
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
      var returnType = Plugin;

      return this.apiClient.callApi(
        '/plugins/{name}', 'DELETE',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginDisable operation.
     * @callback module:api/PluginApi~pluginDisableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Disable a plugin
     * @param {String} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {module:api/PluginApi~pluginDisableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pluginDisable = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginDisable");
      }


      var pathParams = {
        'name': name
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
        '/plugins/{name}/disable', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginEnable operation.
     * @callback module:api/PluginApi~pluginEnableCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Enable a plugin
     * @param {String} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {Object} opts Optional parameters
     * @param {Number} opts.timeout Set the HTTP client timeout (in seconds) (default to 0)
     * @param {module:api/PluginApi~pluginEnableCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pluginEnable = function(name, opts, callback) {
      opts = opts || {};
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginEnable");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'timeout': opts['timeout'],
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
        '/plugins/{name}/enable', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginInspect operation.
     * @callback module:api/PluginApi~pluginInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Plugin} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a plugin
     * @param {String} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {module:api/PluginApi~pluginInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Plugin}
     */
    this.pluginInspect = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginInspect");
      }


      var pathParams = {
        'name': name
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
      var returnType = Plugin;

      return this.apiClient.callApi(
        '/plugins/{name}/json', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginList operation.
     * @callback module:api/PluginApi~pluginListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Plugin>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List plugins
     * Returns information about installed plugins.
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the plugin list.  Available filters:  - `capability=<capability name>` - `enable=<true>|<false>` 
     * @param {module:api/PluginApi~pluginListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Plugin>}
     */
    this.pluginList = function(opts, callback) {
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
      var returnType = [Plugin];

      return this.apiClient.callApi(
        '/plugins', 'GET',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginPull operation.
     * @callback module:api/PluginApi~pluginPullCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Install a plugin
     * Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 
     * @param {String} remote Remote reference for plugin to install.  The `:latest` tag is optional, and is used as the default if omitted. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Local name for the pulled plugin.  The `:latest` tag is optional, and is used as the default if omitted. 
     * @param {String} opts.xRegistryAuth A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param {Array.<module:model/Body>} opts.body 
     * @param {module:api/PluginApi~pluginPullCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pluginPull = function(remote, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'remote' is set
      if (remote === undefined || remote === null) {
        throw new Error("Missing the required parameter 'remote' when calling pluginPull");
      }


      var pathParams = {
      };
      var queryParams = {
        'remote': remote,
        'name': opts['name'],
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Registry-Auth': opts['xRegistryAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json'];
      var returnType = null;

      return this.apiClient.callApi(
        '/plugins/pull', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginPush operation.
     * @callback module:api/PluginApi~pluginPushCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Push a plugin
     * Push a plugin to the registry. 
     * @param {String} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {module:api/PluginApi~pluginPushCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pluginPush = function(name, callback) {
      var postBody = null;

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginPush");
      }


      var pathParams = {
        'name': name
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
        '/plugins/{name}/push', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginSet operation.
     * @callback module:api/PluginApi~pluginSetCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Configure a plugin
     * @param {String} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {Object} opts Optional parameters
     * @param {Array.<module:model/String>} opts.body 
     * @param {module:api/PluginApi~pluginSetCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pluginSet = function(name, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginSet");
      }


      var pathParams = {
        'name': name
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
        '/plugins/{name}/set', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

    /**
     * Callback function to receive the result of the pluginUpgrade operation.
     * @callback module:api/PluginApi~pluginUpgradeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Upgrade a plugin
     * @param {String} name The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
     * @param {String} remote Remote reference to upgrade to.  The `:latest` tag is optional, and is used as the default if omitted. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.xRegistryAuth A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param {Array.<module:model/Body>} opts.body 
     * @param {module:api/PluginApi~pluginUpgradeCallback} callback The callback function, accepting three arguments: error, data, response
     */
    this.pluginUpgrade = function(name, remote, opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];

      // verify the required parameter 'name' is set
      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginUpgrade");
      }

      // verify the required parameter 'remote' is set
      if (remote === undefined || remote === null) {
        throw new Error("Missing the required parameter 'remote' when calling pluginUpgrade");
      }


      var pathParams = {
        'name': name
      };
      var queryParams = {
        'remote': remote,
      };
      var collectionQueryParams = {
      };
      var headerParams = {
        'X-Registry-Auth': opts['xRegistryAuth']
      };
      var formParams = {
      };

      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;

      return this.apiClient.callApi(
        '/plugins/{name}/upgrade', 'POST',
        pathParams, queryParams, collectionQueryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
  };

  return exports;
}));
