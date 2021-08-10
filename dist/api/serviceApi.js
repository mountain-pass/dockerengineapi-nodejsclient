"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _Service = _interopRequireDefault(require("../model/Service"));

var _ServiceCreateResponse = _interopRequireDefault(require("../model/ServiceCreateResponse"));

var _ServiceSpec = _interopRequireDefault(require("../model/ServiceSpec"));

var _ServiceUpdateResponse = _interopRequireDefault(require("../model/ServiceUpdateResponse"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Service service.
* @module api/ServiceApi
* @version 1.41
*/
var ServiceApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ServiceApi. 
  * @alias module:api/ServiceApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ServiceApi(apiClient) {
    _classCallCheck(this, ServiceApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the serviceCreate operation.
   * @callback module:api/ServiceApi~serviceCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/ServiceCreateResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a service
   * @param {module:model/UNKNOWN_BASE_TYPE} body 
   * @param {Object} opts Optional parameters
   * @param {String} opts.xRegistryAuth A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
   * @param {module:api/ServiceApi~serviceCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/ServiceCreateResponse}
   */


  _createClass(ServiceApi, [{
    key: "serviceCreate",
    value: function serviceCreate(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling serviceCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {
        'X-Registry-Auth': opts['xRegistryAuth']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ServiceCreateResponse["default"];
      return this.apiClient.callApi('/services/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the serviceDelete operation.
     * @callback module:api/ServiceApi~serviceDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a service
     * @param {String} id ID or name of service.
     * @param {module:api/ServiceApi~serviceDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "serviceDelete",
    value: function serviceDelete(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling serviceDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/services/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the serviceInspect operation.
     * @callback module:api/ServiceApi~serviceInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Service} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a service
     * @param {String} id ID or name of service.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.insertDefaults Fill empty fields with default values. (default to false)
     * @param {module:api/ServiceApi~serviceInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Service}
     */

  }, {
    key: "serviceInspect",
    value: function serviceInspect(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling serviceInspect");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'insertDefaults': opts['insertDefaults']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _Service["default"];
      return this.apiClient.callApi('/services/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the serviceList operation.
     * @callback module:api/ServiceApi~serviceListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Service>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List services
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the services list.  Available filters:  - `id=<service id>` - `label=<service label>` - `mode=[\"replicated\"|\"global\"]` - `name=<service name>` 
     * @param {Boolean} opts.status Include service status, with count of running and desired tasks. 
     * @param {module:api/ServiceApi~serviceListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Service>}
     */

  }, {
    key: "serviceList",
    value: function serviceList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'filters': opts['filters'],
        'status': opts['status']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = [_Service["default"]];
      return this.apiClient.callApi('/services', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the serviceLogs operation.
     * @callback module:api/ServiceApi~serviceLogsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get service logs
     * Get `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * @param {String} id ID or name of the service
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.details Show service context and extra details provided to logs. (default to false)
     * @param {Boolean} opts.follow Keep connection after returning logs. (default to false)
     * @param {Boolean} opts.stdout Return logs from `stdout` (default to false)
     * @param {Boolean} opts.stderr Return logs from `stderr` (default to false)
     * @param {Number} opts.since Only return logs since this time, as a UNIX timestamp (default to 0)
     * @param {Boolean} opts.timestamps Add timestamps to every log line (default to false)
     * @param {String} opts.tail Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.  (default to 'all')
     * @param {module:api/ServiceApi~serviceLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "serviceLogs",
    value: function serviceLogs(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling serviceLogs");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'details': opts['details'],
        'follow': opts['follow'],
        'stdout': opts['stdout'],
        'stderr': opts['stderr'],
        'since': opts['since'],
        'timestamps': opts['timestamps'],
        'tail': opts['tail']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = File;
      return this.apiClient.callApi('/services/{id}/logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the serviceUpdate operation.
     * @callback module:api/ServiceApi~serviceUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ServiceUpdateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a service
     * @param {String} id ID or name of service.
     * @param {Number} version The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling `GET /services/{id}` 
     * @param {module:model/UNKNOWN_BASE_TYPE} body 
     * @param {Object} opts Optional parameters
     * @param {module:model/String} opts.registryAuthFrom If the `X-Registry-Auth` header is not specified, this parameter indicates where to find registry authorization credentials.  (default to 'spec')
     * @param {String} opts.rollback Set to this parameter to `previous` to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case. 
     * @param {String} opts.xRegistryAuth A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param {module:api/ServiceApi~serviceUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ServiceUpdateResponse}
     */

  }, {
    key: "serviceUpdate",
    value: function serviceUpdate(id, version, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling serviceUpdate");
      } // verify the required parameter 'version' is set


      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling serviceUpdate");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling serviceUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'version': version,
        'registryAuthFrom': opts['registryAuthFrom'],
        'rollback': opts['rollback']
      };
      var headerParams = {
        'X-Registry-Auth': opts['xRegistryAuth']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _ServiceUpdateResponse["default"];
      return this.apiClient.callApi('/services/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ServiceApi;
}();

exports["default"] = ServiceApi;