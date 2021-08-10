"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _Task = _interopRequireDefault(require("../model/Task"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Task service.
* @module api/TaskApi
* @version 1.41
*/
var TaskApi = /*#__PURE__*/function () {
  /**
  * Constructs a new TaskApi. 
  * @alias module:api/TaskApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function TaskApi(apiClient) {
    _classCallCheck(this, TaskApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the taskInspect operation.
   * @callback module:api/TaskApi~taskInspectCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Task} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Inspect a task
   * @param {String} id ID of the task
   * @param {module:api/TaskApi~taskInspectCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Task}
   */


  _createClass(TaskApi, [{
    key: "taskInspect",
    value: function taskInspect(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling taskInspect");
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
      var returnType = _Task["default"];
      return this.apiClient.callApi('/tasks/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the taskList operation.
     * @callback module:api/TaskApi~taskListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Task>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List tasks
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the tasks list.  Available filters:  - `desired-state=(running | shutdown | accepted)` - `id=<task id>` - `label=key` or `label=\"key=value\"` - `name=<task name>` - `node=<node id or name>` - `service=<service name>` 
     * @param {module:api/TaskApi~taskListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Task>}
     */

  }, {
    key: "taskList",
    value: function taskList(opts, callback) {
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
      var returnType = [_Task["default"]];
      return this.apiClient.callApi('/tasks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the taskLogs operation.
     * @callback module:api/TaskApi~taskLogsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get task logs
     * Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 
     * @param {String} id ID of the task
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.details Show task context and extra details provided to logs. (default to false)
     * @param {Boolean} opts.follow Keep connection after returning logs. (default to false)
     * @param {Boolean} opts.stdout Return logs from `stdout` (default to false)
     * @param {Boolean} opts.stderr Return logs from `stderr` (default to false)
     * @param {Number} opts.since Only return logs since this time, as a UNIX timestamp (default to 0)
     * @param {Boolean} opts.timestamps Add timestamps to every log line (default to false)
     * @param {String} opts.tail Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.  (default to 'all')
     * @param {module:api/TaskApi~taskLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "taskLogs",
    value: function taskLogs(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling taskLogs");
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
      return this.apiClient.callApi('/tasks/{id}/logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return TaskApi;
}();

exports["default"] = TaskApi;