"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainerChangeResponseItem = _interopRequireDefault(require("../model/ContainerChangeResponseItem"));

var _ContainerConfig = _interopRequireDefault(require("../model/ContainerConfig"));

var _ContainerCreateResponse = _interopRequireDefault(require("../model/ContainerCreateResponse"));

var _ContainerInspectResponse = _interopRequireDefault(require("../model/ContainerInspectResponse"));

var _ContainerPruneResponse = _interopRequireDefault(require("../model/ContainerPruneResponse"));

var _ContainerTopResponse = _interopRequireDefault(require("../model/ContainerTopResponse"));

var _ContainerUpdateResponse = _interopRequireDefault(require("../model/ContainerUpdateResponse"));

var _ContainerWaitResponse = _interopRequireDefault(require("../model/ContainerWaitResponse"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _InlineResponse = _interopRequireDefault(require("../model/InlineResponse400"));

var _Resources = _interopRequireDefault(require("../model/Resources"));

var _UNKNOWN_BASE_TYPE = _interopRequireDefault(require("../model/UNKNOWN_BASE_TYPE"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Container service.
* @module api/ContainerApi
* @version 1.41
*/
var ContainerApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ContainerApi. 
  * @alias module:api/ContainerApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ContainerApi(apiClient) {
    _classCallCheck(this, ContainerApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the containerArchive operation.
   * @callback module:api/ContainerApi~containerArchiveCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get an archive of a filesystem resource in a container
   * Get a tar archive of a resource in the filesystem of container id.
   * @param {String} id ID or name of the container
   * @param {String} path Resource in the container’s filesystem to archive.
   * @param {module:api/ContainerApi~containerArchiveCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(ContainerApi, [{
    key: "containerArchive",
    value: function containerArchive(id, path, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerArchive");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling containerArchive");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/x-tar', 'application/json'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/archive', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerArchiveInfo operation.
     * @callback module:api/ContainerApi~containerArchiveInfoCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get information about files in a container
     * A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 
     * @param {String} id ID or name of the container
     * @param {String} path Resource in the container’s filesystem to archive.
     * @param {module:api/ContainerApi~containerArchiveInfoCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerArchiveInfo",
    value: function containerArchiveInfo(id, path, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerArchiveInfo");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling containerArchiveInfo");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'path': path
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/archive', 'HEAD', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerAttach operation.
     * @callback module:api/ContainerApi~containerAttachCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach to a container
     * Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.  Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.  See the [documentation for the `docker attach` command](/engine/reference/commandline/attach/) for more details.  ### Hijacking  This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.  This is the response from the daemon for an attach request:  ``` HTTP/1.1 200 OK Content-Type: application/vnd.docker.raw-stream  [STREAM] ```  After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.  To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.  For example, the client sends this request to upgrade the connection:  ``` POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1 Upgrade: tcp Connection: Upgrade ```  The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Content-Type: application/vnd.docker.raw-stream Connection: Upgrade Upgrade: tcp  [STREAM] ```  ### Stream format  When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.  The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).  It is encoded on the first eight bytes like this:  ```go header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4} ```  `STREAM_TYPE` can be:  - 0: `stdin` (is written on `stdout`) - 1: `stdout` - 2: `stderr`  `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.  Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.  The simplest way to implement this protocol is the following:  1. Read 8 bytes. 2. Choose `stdout` or `stderr` depending on the first byte. 3. Extract the frame size from the last four bytes. 4. Read the extracted size and output it on the correct output. 5. Goto 1.  ### Stream format when using a TTY  When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client's `stdin`. 
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {String} opts.detachKeys Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`. 
     * @param {Boolean} opts.logs Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If `stream` is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output.  (default to false)
     * @param {Boolean} opts.stream Stream attached streams from the time the request was made onwards.  (default to false)
     * @param {Boolean} opts.stdin Attach to `stdin` (default to false)
     * @param {Boolean} opts.stdout Attach to `stdout` (default to false)
     * @param {Boolean} opts.stderr Attach to `stderr` (default to false)
     * @param {module:api/ContainerApi~containerAttachCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerAttach",
    value: function containerAttach(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerAttach");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'detachKeys': opts['detachKeys'],
        'logs': opts['logs'],
        'stream': opts['stream'],
        'stdin': opts['stdin'],
        'stdout': opts['stdout'],
        'stderr': opts['stderr']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/vnd.docker.raw-stream', 'application/json'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/attach', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerAttachWebsocket operation.
     * @callback module:api/ContainerApi~containerAttachWebsocketCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Attach to a container via a websocket
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {String} opts.detachKeys Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,`, or `_`. 
     * @param {Boolean} opts.logs Return logs (default to false)
     * @param {Boolean} opts.stream Return stream (default to false)
     * @param {Boolean} opts.stdin Attach to `stdin` (default to false)
     * @param {Boolean} opts.stdout Attach to `stdout` (default to false)
     * @param {Boolean} opts.stderr Attach to `stderr` (default to false)
     * @param {module:api/ContainerApi~containerAttachWebsocketCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerAttachWebsocket",
    value: function containerAttachWebsocket(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerAttachWebsocket");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'detachKeys': opts['detachKeys'],
        'logs': opts['logs'],
        'stream': opts['stream'],
        'stdin': opts['stdin'],
        'stdout': opts['stdout'],
        'stderr': opts['stderr']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/attach/ws', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerChanges operation.
     * @callback module:api/ContainerApi~containerChangesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ContainerChangeResponseItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get changes on a container’s filesystem
     * Returns which files in a container's filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified - `1`: Added - `2`: Deleted 
     * @param {String} id ID or name of the container
     * @param {module:api/ContainerApi~containerChangesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ContainerChangeResponseItem>}
     */

  }, {
    key: "containerChanges",
    value: function containerChanges(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerChanges");
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
      var returnType = [_ContainerChangeResponseItem["default"]];
      return this.apiClient.callApi('/containers/{id}/changes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerCreate operation.
     * @callback module:api/ContainerApi~containerCreateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerCreateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a container
     * @param {module:model/UNKNOWN_BASE_TYPE} body Container to create
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Assign the specified name to the container. Must match `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`. 
     * @param {module:api/ContainerApi~containerCreateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerCreateResponse}
     */

  }, {
    key: "containerCreate",
    value: function containerCreate(body, opts, callback) {
      opts = opts || {};
      var postBody = body; // verify the required parameter 'body' is set

      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling containerCreate");
      }

      var pathParams = {};
      var queryParams = {
        'name': opts['name']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json', 'application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = _ContainerCreateResponse["default"];
      return this.apiClient.callApi('/containers/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerDelete operation.
     * @callback module:api/ContainerApi~containerDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a container
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.v Remove anonymous volumes associated with the container. (default to false)
     * @param {Boolean} opts.force If the container is running, kill it before removing it. (default to false)
     * @param {Boolean} opts.link Remove the specified link associated with the container. (default to false)
     * @param {module:api/ContainerApi~containerDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerDelete",
    value: function containerDelete(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'v': opts['v'],
        'force': opts['force'],
        'link': opts['link']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerExport operation.
     * @callback module:api/ContainerApi~containerExportCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export a container
     * Export the contents of a container as a tarball.
     * @param {String} id ID or name of the container
     * @param {module:api/ContainerApi~containerExportCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerExport",
    value: function containerExport(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerExport");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/octet-stream', 'application/json'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/export', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerInspect operation.
     * @callback module:api/ContainerApi~containerInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerInspectResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a container
     * Return low-level information about a container.
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.size Return the size of container as fields `SizeRw` and `SizeRootFs` (default to false)
     * @param {module:api/ContainerApi~containerInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerInspectResponse}
     */

  }, {
    key: "containerInspect",
    value: function containerInspect(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerInspect");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'size': opts['size']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContainerInspectResponse["default"];
      return this.apiClient.callApi('/containers/{id}/json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerKill operation.
     * @callback module:api/ContainerApi~containerKillCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Kill a container
     * Send a POSIX signal to a container, defaulting to killing to the container. 
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {String} opts.signal Signal to send to the container as an integer or string (e.g. `SIGINT`) (default to 'SIGKILL')
     * @param {module:api/ContainerApi~containerKillCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerKill",
    value: function containerKill(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerKill");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'signal': opts['signal']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/kill', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerList operation.
     * @callback module:api/ContainerApi~containerListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<Object>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List containers
     * Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.all Return all containers. By default, only running containers are shown.  (default to false)
     * @param {Number} opts.limit Return this number of most recently created containers, including non-running ones. 
     * @param {Boolean} opts.size Return the size of container as fields `SizeRw` and `SizeRootFs`.  (default to false)
     * @param {String} opts.filters Filters to process on the container list, encoded as JSON (a `map[string][]string`). For example, `{\"status\": [\"paused\"]}` will only return paused containers.  Available filters:  - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`) - `before`=(`<container id>` or `<container name>`) - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `exited=<int>` containers with exit code of `<int>` - `health`=(`starting`|`healthy`|`unhealthy`|`none`) - `id=<ID>` a container's ID - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only) - `is-task=`(`true`|`false`) - `label=key` or `label=\"key=value\"` of a container label - `name=<name>` a container's name - `network`=(`<network id>` or `<network name>`) - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `since`=(`<container id>` or `<container name>`) - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`) - `volume`=(`<volume name>` or `<mount point destination>`) 
     * @param {module:api/ContainerApi~containerListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<Object>}
     */

  }, {
    key: "containerList",
    value: function containerList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'all': opts['all'],
        'limit': opts['limit'],
        'size': opts['size'],
        'filters': opts['filters']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [Object];
      return this.apiClient.callApi('/containers/json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerLogs operation.
     * @callback module:api/ContainerApi~containerLogsCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get container logs
     * Get `stdout` and `stderr` logs from a container.  Note: This endpoint works only for containers with the `json-file` or `journald` logging driver. 
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.follow Keep connection after returning logs. (default to false)
     * @param {Boolean} opts.stdout Return logs from `stdout` (default to false)
     * @param {Boolean} opts.stderr Return logs from `stderr` (default to false)
     * @param {Number} opts.since Only return logs since this time, as a UNIX timestamp (default to 0)
     * @param {Number} opts.until Only return logs before this time, as a UNIX timestamp (default to 0)
     * @param {Boolean} opts.timestamps Add timestamps to every log line (default to false)
     * @param {String} opts.tail Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.  (default to 'all')
     * @param {module:api/ContainerApi~containerLogsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "containerLogs",
    value: function containerLogs(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerLogs");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'follow': opts['follow'],
        'stdout': opts['stdout'],
        'stderr': opts['stderr'],
        'since': opts['since'],
        'until': opts['until'],
        'timestamps': opts['timestamps'],
        'tail': opts['tail']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = File;
      return this.apiClient.callApi('/containers/{id}/logs', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerPause operation.
     * @callback module:api/ContainerApi~containerPauseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Pause a container
     * Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 
     * @param {String} id ID or name of the container
     * @param {module:api/ContainerApi~containerPauseCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerPause",
    value: function containerPause(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerPause");
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
      return this.apiClient.callApi('/containers/{id}/pause', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerPrune operation.
     * @callback module:api/ContainerApi~containerPruneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerPruneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete stopped containers
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels. 
     * @param {module:api/ContainerApi~containerPruneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerPruneResponse}
     */

  }, {
    key: "containerPrune",
    value: function containerPrune(opts, callback) {
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
      var returnType = _ContainerPruneResponse["default"];
      return this.apiClient.callApi('/containers/prune', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerRename operation.
     * @callback module:api/ContainerApi~containerRenameCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Rename a container
     * @param {String} id ID or name of the container
     * @param {String} name New name for the container
     * @param {module:api/ContainerApi~containerRenameCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerRename",
    value: function containerRename(id, name, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerRename");
      } // verify the required parameter 'name' is set


      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling containerRename");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'name': name
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/rename', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerResize operation.
     * @callback module:api/ContainerApi~containerResizeCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Resize a container TTY
     * Resize the TTY for a container.
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {Number} opts.h Height of the TTY session in characters
     * @param {Number} opts.w Width of the TTY session in characters
     * @param {module:api/ContainerApi~containerResizeCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerResize",
    value: function containerResize(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerResize");
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
      var accepts = ['text/plain', 'application/json'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/resize', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerRestart operation.
     * @callback module:api/ContainerApi~containerRestartCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Restart a container
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {Number} opts.t Number of seconds to wait before killing the container
     * @param {module:api/ContainerApi~containerRestartCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerRestart",
    value: function containerRestart(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerRestart");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        't': opts['t']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/restart', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerStart operation.
     * @callback module:api/ContainerApi~containerStartCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Start a container
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {String} opts.detachKeys Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`. 
     * @param {module:api/ContainerApi~containerStartCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerStart",
    value: function containerStart(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerStart");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'detachKeys': opts['detachKeys']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/start', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerStats operation.
     * @callback module:api/ContainerApi~containerStatsCallback
     * @param {String} error Error message, if any.
     * @param {Object} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get container stats based on resource usage
     * This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `lenght(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.stream Stream the output. If false, the stats will be output once and then it will disconnect.  (default to true)
     * @param {Boolean} opts.oneShot Only get a single stat instead of waiting for 2 cycles. Must be used with `stream=false`.  (default to false)
     * @param {module:api/ContainerApi~containerStatsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Object}
     */

  }, {
    key: "containerStats",
    value: function containerStats(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerStats");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'stream': opts['stream'],
        'one-shot': opts['oneShot']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = Object;
      return this.apiClient.callApi('/containers/{id}/stats', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerStop operation.
     * @callback module:api/ContainerApi~containerStopCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Stop a container
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {Number} opts.t Number of seconds to wait before killing the container
     * @param {module:api/ContainerApi~containerStopCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerStop",
    value: function containerStop(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerStop");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        't': opts['t']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/stop', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerTop operation.
     * @callback module:api/ContainerApi~containerTopCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerTopResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List processes running inside a container
     * On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {String} opts.psArgs The arguments to pass to `ps`. For example, `aux` (default to '-ef')
     * @param {module:api/ContainerApi~containerTopCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerTopResponse}
     */

  }, {
    key: "containerTop",
    value: function containerTop(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerTop");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'ps_args': opts['psArgs']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = _ContainerTopResponse["default"];
      return this.apiClient.callApi('/containers/{id}/top', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerUnpause operation.
     * @callback module:api/ContainerApi~containerUnpauseCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Unpause a container
     * Resume a container which has been paused.
     * @param {String} id ID or name of the container
     * @param {module:api/ContainerApi~containerUnpauseCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "containerUnpause",
    value: function containerUnpause(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerUnpause");
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
      return this.apiClient.callApi('/containers/{id}/unpause', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerUpdate operation.
     * @callback module:api/ContainerApi~containerUpdateCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerUpdateResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a container
     * Change various configuration options of a container without having to recreate it. 
     * @param {String} id ID or name of the container
     * @param {module:model/UNKNOWN_BASE_TYPE} update 
     * @param {module:api/ContainerApi~containerUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerUpdateResponse}
     */

  }, {
    key: "containerUpdate",
    value: function containerUpdate(id, update, callback) {
      var postBody = update; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerUpdate");
      } // verify the required parameter 'update' is set


      if (update === undefined || update === null) {
        throw new Error("Missing the required parameter 'update' when calling containerUpdate");
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
      var returnType = _ContainerUpdateResponse["default"];
      return this.apiClient.callApi('/containers/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the containerWait operation.
     * @callback module:api/ContainerApi~containerWaitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ContainerWaitResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Wait for a container
     * Block until a container stops, then returns the exit code.
     * @param {String} id ID or name of the container
     * @param {Object} opts Optional parameters
     * @param {String} opts.condition Wait until a container state reaches the given condition, either 'not-running' (default), 'next-exit', or 'removed'.  (default to 'not-running')
     * @param {module:api/ContainerApi~containerWaitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ContainerWaitResponse}
     */

  }, {
    key: "containerWait",
    value: function containerWait(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling containerWait");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'condition': opts['condition']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _ContainerWaitResponse["default"];
      return this.apiClient.callApi('/containers/{id}/wait', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the putContainerArchive operation.
     * @callback module:api/ContainerApi~putContainerArchiveCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Extract an archive of files or folders to a directory in a container
     * Upload a tar archive to be extracted to a path in the filesystem of container id.
     * @param {String} id ID or name of the container
     * @param {String} path Path to a directory in the container to extract the archive’s contents into. 
     * @param {File} inputStream The input stream must be a tar archive compressed with one of the following algorithms: `identity` (no compression), `gzip`, `bzip2`, or `xz`. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.noOverwriteDirNonDir If `1`, `true`, or `True` then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa. 
     * @param {String} opts.copyUIDGID If `1`, `true`, then it will copy UID/GID maps to the dest file or dir 
     * @param {module:api/ContainerApi~putContainerArchiveCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "putContainerArchive",
    value: function putContainerArchive(id, path, inputStream, opts, callback) {
      opts = opts || {};
      var postBody = inputStream; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling putContainerArchive");
      } // verify the required parameter 'path' is set


      if (path === undefined || path === null) {
        throw new Error("Missing the required parameter 'path' when calling putContainerArchive");
      } // verify the required parameter 'inputStream' is set


      if (inputStream === undefined || inputStream === null) {
        throw new Error("Missing the required parameter 'inputStream' when calling putContainerArchive");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'path': path,
        'noOverwriteDirNonDir': opts['noOverwriteDirNonDir'],
        'copyUIDGID': opts['copyUIDGID']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/x-tar', 'application/octet-stream'];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/containers/{id}/archive', 'PUT', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ContainerApi;
}();

exports["default"] = ContainerApi;