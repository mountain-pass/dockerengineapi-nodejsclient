"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _AuthConfig = _interopRequireDefault(require("../model/AuthConfig"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _SystemAuthResponse = _interopRequireDefault(require("../model/SystemAuthResponse"));

var _SystemDataUsageResponse = _interopRequireDefault(require("../model/SystemDataUsageResponse"));

var _SystemEventsResponse = _interopRequireDefault(require("../model/SystemEventsResponse"));

var _SystemInfo = _interopRequireDefault(require("../model/SystemInfo"));

var _SystemVersion = _interopRequireDefault(require("../model/SystemVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* System service.
* @module api/SystemApi
* @version 1.41
*/
var SystemApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SystemApi. 
  * @alias module:api/SystemApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SystemApi(apiClient) {
    _classCallCheck(this, SystemApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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


  _createClass(SystemApi, [{
    key: "systemAuth",
    value: function systemAuth(opts, callback) {
      opts = opts || {};
      var postBody = opts['authConfig'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _SystemAuthResponse["default"];
      return this.apiClient.callApi('/auth', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "systemDataUsage",
    value: function systemDataUsage(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _SystemDataUsageResponse["default"];
      return this.apiClient.callApi('/system/df', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "systemEvents",
    value: function systemEvents(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'since': opts['since'],
        'until': opts['until'],
        'filters': opts['filters']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SystemEventsResponse["default"];
      return this.apiClient.callApi('/events', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "systemInfo",
    value: function systemInfo(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SystemInfo["default"];
      return this.apiClient.callApi('/info', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the systemPing operation.
     * @callback module:api/SystemApi~systemPingCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping
     * This is a dummy endpoint you can use to test if the server is accessible.
     * @param {module:api/SystemApi~systemPingCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "systemPing",
    value: function systemPing(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/_ping', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the systemPingHead operation.
     * @callback module:api/SystemApi~systemPingHeadCallback
     * @param {String} error Error message, if any.
     * @param {String} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Ping
     * This is a dummy endpoint you can use to test if the server is accessible.
     * @param {module:api/SystemApi~systemPingHeadCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link String}
     */

  }, {
    key: "systemPingHead",
    value: function systemPingHead(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/_ping', 'HEAD', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "systemVersion",
    value: function systemVersion(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _SystemVersion["default"];
      return this.apiClient.callApi('/version', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SystemApi;
}();

exports["default"] = SystemApi;