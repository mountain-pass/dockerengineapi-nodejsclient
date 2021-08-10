"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _Plugin = _interopRequireDefault(require("../model/Plugin"));

var _PluginPrivilegeItem = _interopRequireDefault(require("../model/PluginPrivilegeItem"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Plugin service.
* @module api/PluginApi
* @version 1.41
*/
var PluginApi = /*#__PURE__*/function () {
  /**
  * Constructs a new PluginApi. 
  * @alias module:api/PluginApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function PluginApi(apiClient) {
    _classCallCheck(this, PluginApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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


  _createClass(PluginApi, [{
    key: "getPluginPrivileges",
    value: function getPluginPrivileges(remote, callback) {
      var postBody = null; // verify the required parameter 'remote' is set

      if (remote === undefined || remote === null) {
        throw new Error("Missing the required parameter 'remote' when calling getPluginPrivileges");
      }

      var pathParams = {};
      var queryParams = {
        'remote': remote
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = [_PluginPrivilegeItem["default"]];
      return this.apiClient.callApi('/plugins/privileges', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {File} opts.tarContext Path to tar containing plugin rootfs and manifest
     * @param {module:api/PluginApi~pluginCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "pluginCreate",
    value: function pluginCreate(name, opts, callback) {
      opts = opts || {};
      var postBody = opts['tarContext']; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginCreate");
      }

      var pathParams = {};
      var queryParams = {
        'name': name
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/x-tar'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/plugins/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "pluginDelete",
    value: function pluginDelete(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginDelete");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'force': opts['force']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _Plugin["default"];
      return this.apiClient.callApi('/plugins/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "pluginDisable",
    value: function pluginDisable(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginDisable");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/plugins/{name}/disable', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "pluginEnable",
    value: function pluginEnable(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginEnable");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'timeout': opts['timeout']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/plugins/{name}/enable', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "pluginInspect",
    value: function pluginInspect(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginInspect");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _Plugin["default"];
      return this.apiClient.callApi('/plugins/{name}/json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "pluginList",
    value: function pluginList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filters': opts['filters']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_Plugin["default"]];
      return this.apiClient.callApi('/plugins', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Array.<module:model/InlineObject>} opts.body 
     * @param {module:api/PluginApi~pluginPullCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "pluginPull",
    value: function pluginPull(remote, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'remote' is set

      if (remote === undefined || remote === null) {
        throw new Error("Missing the required parameter 'remote' when calling pluginPull");
      }

      var pathParams = {};
      var queryParams = {
        'remote': remote,
        'name': opts['name']
      };
      var headerParams = {
        'X-Registry-Auth': opts['xRegistryAuth']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/plugins/pull', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "pluginPush",
    value: function pluginPush(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginPush");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/plugins/{name}/push', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Array.<String>} opts.body 
     * @param {module:api/PluginApi~pluginSetCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "pluginSet",
    value: function pluginSet(name, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginSet");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/plugins/{name}/set', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {Array.<module:model/InlineObject>} opts.body 
     * @param {module:api/PluginApi~pluginUpgradeCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "pluginUpgrade",
    value: function pluginUpgrade(name, remote, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling pluginUpgrade");
      } // verify the required parameter 'remote' is set


      if (remote === undefined || remote === null) {
        throw new Error("Missing the required parameter 'remote' when calling pluginUpgrade");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'remote': remote
      };
      var headerParams = {
        'X-Registry-Auth': opts['xRegistryAuth']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/plugins/{name}/upgrade', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return PluginApi;
}();

exports["default"] = PluginApi;