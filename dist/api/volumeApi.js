"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _Volume = _interopRequireDefault(require("../model/Volume"));

var _VolumeConfig = _interopRequireDefault(require("../model/VolumeConfig"));

var _VolumeListResponse = _interopRequireDefault(require("../model/VolumeListResponse"));

var _VolumePruneResponse = _interopRequireDefault(require("../model/VolumePruneResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Volume service.
* @module api/VolumeApi
* @version 1.41
*/
var VolumeApi = /*#__PURE__*/function () {
  /**
  * Constructs a new VolumeApi. 
  * @alias module:api/VolumeApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function VolumeApi(apiClient) {
    _classCallCheck(this, VolumeApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the volumeCreate operation.
   * @callback module:api/VolumeApi~volumeCreateCallback
   * @param {String} error Error message, if any.
   * @param {module:model/Volume} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Create a volume
   * @param {module:model/VolumeConfig} volumeConfig 
   * @param {module:api/VolumeApi~volumeCreateCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/Volume}
   */


  _createClass(VolumeApi, [{
    key: "volumeCreate",
    value: function volumeCreate(volumeConfig, callback) {
      var postBody = volumeConfig; // verify the required parameter 'volumeConfig' is set

      if (volumeConfig === undefined || volumeConfig === null) {
        throw new Error("Missing the required parameter 'volumeConfig' when calling volumeCreate");
      }

      var pathParams = {};
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _Volume["default"];
      return this.apiClient.callApi('/volumes/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the volumeDelete operation.
     * @callback module:api/VolumeApi~volumeDeleteCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove a volume
     * Instruct the driver to remove the volume.
     * @param {String} name Volume name or ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Force the removal of the volume (default to false)
     * @param {module:api/VolumeApi~volumeDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "volumeDelete",
    value: function volumeDelete(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling volumeDelete");
      }

      var pathParams = {
        'name': name
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
      return this.apiClient.callApi('/volumes/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the volumeInspect operation.
     * @callback module:api/VolumeApi~volumeInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Volume} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect a volume
     * @param {String} name Volume name or ID
     * @param {module:api/VolumeApi~volumeInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Volume}
     */

  }, {
    key: "volumeInspect",
    value: function volumeInspect(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling volumeInspect");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _Volume["default"];
      return this.apiClient.callApi('/volumes/{name}', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the volumeList operation.
     * @callback module:api/VolumeApi~volumeListCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VolumeListResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List volumes
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters JSON encoded value of the filters (a `map[string][]string`) to process on the volumes list. Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), returns all    volumes that are not in use by a container. When set to `false`    (or `0`), only volumes that are in use by one or more    containers are returned. - `driver=<volume-driver-name>` Matches volumes based on their driver. - `label=<key>` or `label=<key>:<value>` Matches volumes based on    the presence of a `label` alone or a `label` and a value. - `name=<volume-name>` Matches all or part of a volume name. 
     * @param {module:api/VolumeApi~volumeListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VolumeListResponse}
     */

  }, {
    key: "volumeList",
    value: function volumeList(opts, callback) {
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
      var returnType = _VolumeListResponse["default"];
      return this.apiClient.callApi('/volumes', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the volumePrune operation.
     * @callback module:api/VolumeApi~volumePruneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/VolumePruneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete unused volumes
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune volumes with (or without, in case `label!=...` is used) the specified labels. 
     * @param {module:api/VolumeApi~volumePruneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/VolumePruneResponse}
     */

  }, {
    key: "volumePrune",
    value: function volumePrune(opts, callback) {
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
      var returnType = _VolumePruneResponse["default"];
      return this.apiClient.callApi('/volumes/prune', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return VolumeApi;
}();

exports["default"] = VolumeApi;