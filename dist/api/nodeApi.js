"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _Node = _interopRequireDefault(require("../model/Node"));

var _NodeSpec = _interopRequireDefault(require("../model/NodeSpec"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Node service.
* @module api/NodeApi
* @version 1.41
*/
var NodeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new NodeApi. 
  * @alias module:api/NodeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function NodeApi(apiClient) {
    _classCallCheck(this, NodeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the nodeDelete operation.
   * @callback module:api/NodeApi~nodeDeleteCallback
   * @param {String} error Error message, if any.
   * @param data This operation does not return a value.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete a node
   * @param {String} id The ID or name of the node
   * @param {Object} opts Optional parameters
   * @param {Boolean} opts.force Force remove a node from the swarm (default to false)
   * @param {module:api/NodeApi~nodeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
   */


  _createClass(NodeApi, [{
    key: "nodeDelete",
    value: function nodeDelete(id, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling nodeDelete");
      }

      var pathParams = {
        'id': id
      };
      var queryParams = {
        'force': opts['force']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/nodes/{id}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the nodeInspect operation.
     * @callback module:api/NodeApi~nodeInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Node} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a node
     * @param {String} id The ID or name of the node
     * @param {module:api/NodeApi~nodeInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Node}
     */

  }, {
    key: "nodeInspect",
    value: function nodeInspect(id, callback) {
      var postBody = null; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling nodeInspect");
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
      var returnType = _Node["default"];
      return this.apiClient.callApi('/nodes/{id}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the nodeList operation.
     * @callback module:api/NodeApi~nodeListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/Node>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List nodes
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).  Available filters: - `id=<node id>` - `label=<engine label>` - `membership=`(`accepted`|`pending`)` - `name=<node name>` - `node.label=<node label>` - `role=`(`manager`|`worker`)` 
     * @param {module:api/NodeApi~nodeListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/Node>}
     */

  }, {
    key: "nodeList",
    value: function nodeList(opts, callback) {
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
      var accepts = ['application/json', 'text/plain'];
      var returnType = [_Node["default"]];
      return this.apiClient.callApi('/nodes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the nodeUpdate operation.
     * @callback module:api/NodeApi~nodeUpdateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a node
     * @param {String} id The ID of the node
     * @param {Number} version The version number of the node object being updated. This is required to avoid conflicting writes. 
     * @param {Object} opts Optional parameters
     * @param {module:model/NodeSpec} opts.body 
     * @param {module:api/NodeApi~nodeUpdateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "nodeUpdate",
    value: function nodeUpdate(id, version, opts, callback) {
      opts = opts || {};
      var postBody = opts['body']; // verify the required parameter 'id' is set

      if (id === undefined || id === null) {
        throw new Error("Missing the required parameter 'id' when calling nodeUpdate");
      } // verify the required parameter 'version' is set


      if (version === undefined || version === null) {
        throw new Error("Missing the required parameter 'version' when calling nodeUpdate");
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
      return this.apiClient.callApi('/nodes/{id}/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return NodeApi;
}();

exports["default"] = NodeApi;