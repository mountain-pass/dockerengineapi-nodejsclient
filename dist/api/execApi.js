"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _ExecInspectResponse = _interopRequireDefault(require("../model/ExecInspectResponse"));

var _IdResponse = _interopRequireDefault(require("../model/IdResponse"));

var _InlineObject = _interopRequireDefault(require("../model/InlineObject"));

var _InlineObject2 = _interopRequireDefault(require("../model/InlineObject1"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Exec service.
* @module api/ExecApi
* @version 1.41
*/
var ExecApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ExecApi. 
  * @alias module:api/ExecApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ExecApi(apiClient) {
    _classCallCheck(this, ExecApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
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
   * @param {String} id ID or name of container
   * @param {module:model/InlineObject} execConfig 
   * @param {module:api/ExecApi~containerExecCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/IdResponse}
   */


  _createClass(ExecApi, [{
    key: "containerExec",
    value: function containerExec(id, execConfig, callback) {
      var postBody = execConfig; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerExec");
      } // verify the required parameter 'execConfig' is set


      if (execConfig === undefined || execConfig === null) {
        throw new Error("Missing the required parameter 'execConfig' when calling containerExec");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdResponse["default"];
      return this.apiClient.callApi('/containers/{id}/exec', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "execInspect",
    value: function execInspect(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling execInspect");
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
      var returnType = _ExecInspectResponse["default"];
      return this.apiClient.callApi('/exec/{id}/json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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

  }, {
    key: "execResize",
    value: function execResize(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling execResize");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'h': opts['h'],
        'w': opts['w']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/exec/{id}/resize', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
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
     * @param {module:model/InlineObject1} opts.execStartConfig 
     * @param {module:api/ExecApi~execStartCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "execStart",
    value: function execStart(id, opts, callback) {
      opts = opts || {};
      var postBody = opts['execStartConfig']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling execStart");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/vnd.docker.raw-stream'];
      var returnType = null;
      return this.apiClient.callApi('/exec/{id}/start', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ExecApi;
}();

exports["default"] = ExecApi;