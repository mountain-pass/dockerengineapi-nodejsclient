"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Config = _interopRequireDefault(require("../model/Config"));

var _ConfigSpec = _interopRequireDefault(require("../model/ConfigSpec"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _IdResponse = _interopRequireDefault(require("../model/IdResponse"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Config service.
* @module api/ConfigApi
* @version 1.41
*/
var ConfigApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ConfigApi. 
  * @alias module:api/ConfigApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ConfigApi(apiClient) {
    _classCallCheck(this, ConfigApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the configCreate operation.
   * @callback module:api/ConfigApi~configCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IdResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a config
   * @param {Object} opts Optional parameters
   * @param {module:model/UNKNOWN_BASE_TYPE} opts.body 
   * @param {module:api/ConfigApi~configCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IdResponse}
   */


  _createClass(ConfigApi, [{
    key: "configCreate",
    value: function configCreate(opts, callback) {
      opts = opts || {};
      var postBody = opts['body'];
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdResponse["default"];
      return this.apiClient.callApi('/configs/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configDelete operation.
     * @callback module:api/ConfigApi~configDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a config
     * @param {String} id ID of the config
     * @param {module:api/ConfigApi~configDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "configDelete",
    value: function configDelete(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling configDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/configs/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configInspect operation.
     * @callback module:api/ConfigApi~configInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Config} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a config
     * @param {String} id ID of the config
     * @param {module:api/ConfigApi~configInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Config}
     */

  }, {
    key: "configInspect",
    value: function configInspect(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling configInspect");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Config["default"];
      return this.apiClient.callApi('/configs/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configList operation.
     * @callback module:api/ConfigApi~configListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Config>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List configs
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list.  Available filters:  - `id=<config id>` - `label=<key> or label=<key>=value` - `name=<config name>` - `names=<config name>` 
     * @param {module:api/ConfigApi~configListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Config>}
     */

  }, {
    key: "configList",
    value: function configList(opts, callback) {
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
      var returnType = [_Config["default"]];
      return this.apiClient.callApi('/configs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the configUpdate operation.
     * @callback module:api/ConfigApi~configUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Config
     * @param {String} id The ID or name of the config
     * @param {Number} version The version number of the config object being updated. This is required to avoid conflicting writes. 
     * @param {Object} opts Optional parameters
     * @param {module:model/ConfigSpec} opts.body The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values. 
     * @param {module:api/ConfigApi~configUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "configUpdate",
    value: function configUpdate(id, version, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling configUpdate");
      } // verify the required parameter 'version' is set


      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling configUpdate");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'version': version
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/configs/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ConfigApi;
}();

exports["default"] = ConfigApi;