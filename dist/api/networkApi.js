"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject2"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject3"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject4"));

var _Network = _interopRequireDefault(require("../model/Network"));

var _NetworkCreateResponse = _interopRequireDefault(require("../model/NetworkCreateResponse"));

var _NetworkPruneResponse = _interopRequireDefault(require("../model/NetworkPruneResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Network service.
* @module api/NetworkApi
* @version 1.41
*/
var NetworkApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NetworkApi. 
  * @alias module:api/NetworkApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NetworkApi(apiClient) {
    _classCallCheck(this, NetworkApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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
   * @param {module:model/InlineObject3} container 
   * @param {module:api/NetworkApi~networkConnectCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(NetworkApi, [{
    key: "networkConnect",
    value: function networkConnect(id, container, callback) {
      var postBody = container; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling networkConnect");
      } // verify the required parameter 'container' is set


      if (container === undefined || container === null) {
        throw new Error("Missing the required parameter 'container' when calling networkConnect");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/networks/{id}/connect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {module:model/InlineObject2} networkConfig 
     * @param {module:api/NetworkApi~networkCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/NetworkCreateResponse}
     */

  }, {
    key: "networkCreate",
    value: function networkCreate(networkConfig, callback) {
      var postBody = networkConfig; // verify the required parameter 'networkConfig' is set

      if (networkConfig === undefined || networkConfig === null) {
        throw new Error("Missing the required parameter 'networkConfig' when calling networkCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _NetworkCreateResponse["default"];
      return this.apiClient.callApi('/networks/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "networkDelete",
    value: function networkDelete(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling networkDelete");
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
      return this.apiClient.callApi('/networks/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {module:model/InlineObject4} container 
     * @param {module:api/NetworkApi~networkDisconnectCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "networkDisconnect",
    value: function networkDisconnect(id, container, callback) {
      var postBody = container; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling networkDisconnect");
      } // verify the required parameter 'container' is set


      if (container === undefined || container === null) {
        throw new Error("Missing the required parameter 'container' when calling networkDisconnect");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/networks/{id}/disconnect', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "networkInspect",
    value: function networkInspect(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling networkInspect");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'verbose': opts['verbose'],
        'scope': opts['scope']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Network["default"];
      return this.apiClient.callApi('/networks/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "networkList",
    value: function networkList(opts, callback) {
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
      var returnType = [_Network["default"]];
      return this.apiClient.callApi('/networks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "networkPrune",
    value: function networkPrune(opts, callback) {
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
      var returnType = _NetworkPruneResponse["default"];
      return this.apiClient.callApi('/networks/prune', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NetworkApi;
}();

exports["default"] = NetworkApi;