"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _IdResponse = _interopRequireDefault(require("../model/IdResponse"));

var _Secret = _interopRequireDefault(require("../model/Secret"));

var _SecretSpec = _interopRequireDefault(require("../model/SecretSpec"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Secret service.
* @module api/SecretApi
* @version 1.41
*/
var SecretApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SecretApi. 
  * @alias module:api/SecretApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SecretApi(apiClient) {
    _classCallCheck(this, SecretApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the secretCreate operation.
   * @callback module:api/SecretApi~secretCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/IdResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a secret
   * @param {Object} opts Optional parameters
   * @param {module:model/UNKNOWN_BASE_TYPE} opts.body 
   * @param {module:api/SecretApi~secretCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IdResponse}
   */


  _createClass(SecretApi, [{
    key: "secretCreate",
    value: function secretCreate(opts, callback) {
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
      return this.apiClient.callApi('/secrets/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the secretDelete operation.
     * @callback module:api/SecretApi~secretDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a secret
     * @param {String} id ID of the secret
     * @param {module:api/SecretApi~secretDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "secretDelete",
    value: function secretDelete(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling secretDelete");
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
      return this.apiClient.callApi('/secrets/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the secretInspect operation.
     * @callback module:api/SecretApi~secretInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Secret} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a secret
     * @param {String} id ID of the secret
     * @param {module:api/SecretApi~secretInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Secret}
     */

  }, {
    key: "secretInspect",
    value: function secretInspect(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling secretInspect");
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
      var returnType = _Secret["default"];
      return this.apiClient.callApi('/secrets/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the secretList operation.
     * @callback module:api/SecretApi~secretListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Secret>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List secrets
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list.  Available filters:  - `id=<secret id>` - `label=<key> or label=<key>=value` - `name=<secret name>` - `names=<secret name>` 
     * @param {module:api/SecretApi~secretListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Secret>}
     */

  }, {
    key: "secretList",
    value: function secretList(opts, callback) {
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
      var returnType = [_Secret["default"]];
      return this.apiClient.callApi('/secrets', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the secretUpdate operation.
     * @callback module:api/SecretApi~secretUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a Secret
     * @param {String} id The ID or name of the secret
     * @param {Number} version The version number of the secret object being updated. This is required to avoid conflicting writes. 
     * @param {Object} opts Optional parameters
     * @param {module:model/SecretSpec} opts.body The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values. 
     * @param {module:api/SecretApi~secretUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "secretUpdate",
    value: function secretUpdate(id, version, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling secretUpdate");
      } // verify the required parameter 'version' is set


      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling secretUpdate");
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
      return this.apiClient.callApi('/secrets/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SecretApi;
}();

exports["default"] = SecretApi;