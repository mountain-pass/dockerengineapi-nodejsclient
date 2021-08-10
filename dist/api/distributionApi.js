"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _DistributionInspectResponse = _interopRequireDefault(require("../model/DistributionInspectResponse"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Distribution service.
* @module api/DistributionApi
* @version 1.41
*/
var DistributionApi = /*#__PURE__*/function () {
  /**
  * Constructs a new DistributionApi. 
  * @alias module:api/DistributionApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function DistributionApi(apiClient) {
    _classCallCheck(this, DistributionApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the distributionInspect operation.
   * @callback module:api/DistributionApi~distributionInspectCallback
   * @param {String} error Error message, if any.
   * @param {module:model/DistributionInspectResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Get image information from the registry
   * Return image digest and platform information by contacting the registry. 
   * @param {String} name Image name or id
   * @param {module:api/DistributionApi~distributionInspectCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/DistributionInspectResponse}
   */


  _createClass(DistributionApi, [{
    key: "distributionInspect",
    value: function distributionInspect(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling distributionInspect");
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
      var returnType = _DistributionInspectResponse["default"];
      return this.apiClient.callApi('/distribution/{name}/json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return DistributionApi;
}();

exports["default"] = DistributionApi;