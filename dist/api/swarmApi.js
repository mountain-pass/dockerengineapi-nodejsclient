"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject5"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject6"));

var _InlineObject3 = _interopRequireDefault(require("../model/InlineObject7"));

var _Swarm = _interopRequireDefault(require("../model/Swarm"));

var _SwarmSpec = _interopRequireDefault(require("../model/SwarmSpec"));

var _UnlockKeyResponse = _interopRequireDefault(require("../model/UnlockKeyResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Swarm service.
* @module api/SwarmApi
* @version 1.41
*/
var SwarmApi = /*#__PURE__*/function () {
  /**
  * Constructs a new SwarmApi. 
  * @alias module:api/SwarmApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function SwarmApi(apiClient) {
    _classCallCheck(this, SwarmApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the swarmInit operation.
   * @callback module:api/SwarmApi~swarmInitCallback
   * @param {String} error Error message, if any.
   * @param {String} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Initialize a new swarm
   * @param {module:model/InlineObject5} body 
   * @param {module:api/SwarmApi~swarmInitCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link String}
   */


  _createClass(SwarmApi, [{
    key: "swarmInit",
    value: function swarmInit(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling swarmInit");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = 'String';
      return this.apiClient.callApi('/swarm/init', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the swarmInspect operation.
     * @callback module:api/SwarmApi~swarmInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Swarm} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect swarm
     * @param {module:api/SwarmApi~swarmInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Swarm}
     */

  }, {
    key: "swarmInspect",
    value: function swarmInspect(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _Swarm["default"];
      return this.apiClient.callApi('/swarm', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the swarmJoin operation.
     * @callback module:api/SwarmApi~swarmJoinCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Join an existing swarm
     * @param {module:model/InlineObject6} body 
     * @param {module:api/SwarmApi~swarmJoinCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "swarmJoin",
    value: function swarmJoin(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling swarmJoin");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/swarm/join', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the swarmLeave operation.
     * @callback module:api/SwarmApi~swarmLeaveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave a swarm
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Force leave swarm, even if this is the last manager or that it will break the cluster.  (default to false)
     * @param {module:api/SwarmApi~swarmLeaveCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "swarmLeave",
    value: function swarmLeave(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'force': opts['force']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/swarm/leave', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the swarmUnlock operation.
     * @callback module:api/SwarmApi~swarmUnlockCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unlock a locked manager
     * @param {module:model/InlineObject7} body 
     * @param {module:api/SwarmApi~swarmUnlockCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "swarmUnlock",
    value: function swarmUnlock(body, callback) {
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling swarmUnlock");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/swarm/unlock', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the swarmUnlockkey operation.
     * @callback module:api/SwarmApi~swarmUnlockkeyCallback
     * @param {String} error Error message, if any.
     * @param {module:model/UnlockKeyResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the unlock key
     * @param {module:api/SwarmApi~swarmUnlockkeyCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/UnlockKeyResponse}
     */

  }, {
    key: "swarmUnlockkey",
    value: function swarmUnlockkey(callback) {
      var postBody = null;
      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _UnlockKeyResponse["default"];
      return this.apiClient.callApi('/swarm/unlockkey', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the swarmUpdate operation.
     * @callback module:api/SwarmApi~swarmUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a swarm
     * @param {Number} version The version number of the swarm object being updated. This is required to avoid conflicting writes. 
     * @param {module:model/SwarmSpec} body 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.rotateWorkerToken Rotate the worker join token. (default to false)
     * @param {Boolean} opts.rotateManagerToken Rotate the manager join token. (default to false)
     * @param {Boolean} opts.rotateManagerUnlockKey Rotate the manager unlock key. (default to false)
     * @param {module:api/SwarmApi~swarmUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "swarmUpdate",
    value: function swarmUpdate(version, body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'version' is set

      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling swarmUpdate");
      } // verify the required parameter 'body' is set


      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling swarmUpdate");
      }

      var pathParams = {};
      var queryParams = {
        'version': version,
        'rotateWorkerToken': opts['rotateWorkerToken'],
        'rotateManagerToken': opts['rotateManagerToken'],
        'rotateManagerUnlockKey': opts['rotateManagerUnlockKey']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json', 'text/plain'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/swarm/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return SwarmApi;
}();

exports["default"] = SwarmApi;