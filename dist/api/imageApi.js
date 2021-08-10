"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _BuildPruneResponse = _interopRequireDefault(require("../model/BuildPruneResponse"));

var _ContainerConfig = _interopRequireDefault(require("../model/ContainerConfig"));

var _ErrorResponse = _interopRequireDefault(require("../model/ErrorResponse"));

var _HistoryResponseItem = _interopRequireDefault(require("../model/HistoryResponseItem"));

var _IdResponse = _interopRequireDefault(require("../model/IdResponse"));

var _Image = _interopRequireDefault(require("../model/Image"));

var _ImageDeleteResponseItem = _interopRequireDefault(require("../model/ImageDeleteResponseItem"));

var _ImagePruneResponse = _interopRequireDefault(require("../model/ImagePruneResponse"));

var _ImageSearchResponseItem = _interopRequireDefault(require("../model/ImageSearchResponseItem"));

var _ImageSummary = _interopRequireDefault(require("../model/ImageSummary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
* Image service.
* @module api/ImageApi
* @version 1.41
*/
var ImageApi = /*#__PURE__*/function () {
  /**
  * Constructs a new ImageApi. 
  * @alias module:api/ImageApi
  * @class
  * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
  * default to {@link module:ApiClient#instance} if unspecified.
  */
  function ImageApi(apiClient) {
    _classCallCheck(this, ImageApi);

    this.apiClient = apiClient || _ApiClient["default"].instance;
  }
  /**
   * Callback function to receive the result of the buildPrune operation.
   * @callback module:api/ImageApi~buildPruneCallback
   * @param {String} error Error message, if any.
   * @param {module:model/BuildPruneResponse} data The data returned by the service call.
   * @param {String} response The complete HTTP response.
   */

  /**
   * Delete builder cache
   * @param {Object} opts Optional parameters
   * @param {Number} opts.keepStorage Amount of disk space in bytes to keep for cache
   * @param {Boolean} opts.all Remove all types of build cache
   * @param {String} opts.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the list of build cache objects.  Available filters:  - `until=<duration>`: duration relative to daemon's time, during which build cache was not used, in Go's duration format (e.g., '24h') - `id=<id>` - `parent=<id>` - `type=<string>` - `description=<string>` - `inuse` - `shared` - `private` 
   * @param {module:api/ImageApi~buildPruneCallback} callback The callback function, accepting three arguments: error, data, response
   * data is of type: {@link module:model/BuildPruneResponse}
   */


  _createClass(ImageApi, [{
    key: "buildPrune",
    value: function buildPrune(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'keep-storage': opts['keepStorage'],
        'all': opts['all'],
        'filters': opts['filters']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = _BuildPruneResponse["default"];
      return this.apiClient.callApi('/build/prune', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageBuild operation.
     * @callback module:api/ImageApi~imageBuildCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Build an image
     * Build an image from a tar archive with a `Dockerfile` in it.  The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](/engine/reference/builder/).  The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.  The build is canceled if the client drops the connection by quitting or being killed. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.dockerfile Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`. (default to 'Dockerfile')
     * @param {String} opts.t A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters.
     * @param {String} opts.extrahosts Extra hosts to add to /etc/hosts
     * @param {String} opts.remote A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball.
     * @param {Boolean} opts.q Suppress verbose build output. (default to false)
     * @param {Boolean} opts.nocache Do not use the cache when building the image. (default to false)
     * @param {String} opts.cachefrom JSON array of images used for build cache resolution.
     * @param {String} opts.pull Attempt to pull the image even if an older image exists locally.
     * @param {Boolean} opts.rm Remove intermediate containers after a successful build. (default to true)
     * @param {Boolean} opts.forcerm Always remove intermediate containers, even upon failure. (default to false)
     * @param {Number} opts.memory Set memory limit for build.
     * @param {Number} opts.memswap Total memory (memory + swap). Set as `-1` to disable swap.
     * @param {Number} opts.cpushares CPU shares (relative weight).
     * @param {String} opts.cpusetcpus CPUs in which to allow execution (e.g., `0-3`, `0,1`).
     * @param {Number} opts.cpuperiod The length of a CPU period in microseconds.
     * @param {Number} opts.cpuquota Microseconds of CPU time that the container can get in a CPU period.
     * @param {String} opts.buildargs JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.  For example, the build arg `FOO=bar` would become `{\"FOO\":\"bar\"}` in JSON. This would result in the query parameter `buildargs={\"FOO\":\"bar\"}`. Note that `{\"FOO\":\"bar\"}` should be URI component encoded.  [Read more about the buildargs instruction.](/engine/reference/builder/#arg) 
     * @param {Number} opts.shmsize Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB.
     * @param {Boolean} opts.squash Squash the resulting images layers into a single layer. *(Experimental release only.)*
     * @param {String} opts.labels Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
     * @param {String} opts.networkmode Sets the networking mode for the run commands during build. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name or ID to which this container should connect to. 
     * @param {module:model/String} opts.contentType  (default to 'application/x-tar')
     * @param {String} opts.xRegistryConfig This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  ``` {   \"docker.example.com\": {     \"username\": \"janedoe\",     \"password\": \"hunter2\"   },   \"https://index.docker.io/v1/\": {     \"username\": \"mobydock\",     \"password\": \"conta1n3rize14\"   } } ```  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API. 
     * @param {String} opts.platform Platform in the format os[/arch[/variant]]
     * @param {String} opts.target Target build stage
     * @param {String} opts.outputs BuildKit output configuration
     * @param {File} opts.inputStream A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
     * @param {module:api/ImageApi~imageBuildCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "imageBuild",
    value: function imageBuild(opts, callback) {
      opts = opts || {};
      var postBody = opts['inputStream'];
      var pathParams = {};
      var queryParams = {
        'dockerfile': opts['dockerfile'],
        't': opts['t'],
        'extrahosts': opts['extrahosts'],
        'remote': opts['remote'],
        'q': opts['q'],
        'nocache': opts['nocache'],
        'cachefrom': opts['cachefrom'],
        'pull': opts['pull'],
        'rm': opts['rm'],
        'forcerm': opts['forcerm'],
        'memory': opts['memory'],
        'memswap': opts['memswap'],
        'cpushares': opts['cpushares'],
        'cpusetcpus': opts['cpusetcpus'],
        'cpuperiod': opts['cpuperiod'],
        'cpuquota': opts['cpuquota'],
        'buildargs': opts['buildargs'],
        'shmsize': opts['shmsize'],
        'squash': opts['squash'],
        'labels': opts['labels'],
        'networkmode': opts['networkmode'],
        'platform': opts['platform'],
        'target': opts['target'],
        'outputs': opts['outputs']
      };
      var headerParams = {
        'Content-type': opts['contentType'],
        'X-Registry-Config': opts['xRegistryConfig']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/build', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageCommit operation.
     * @callback module:api/ImageApi~imageCommitCallback
     * @param {String} error Error message, if any.
     * @param {module:model/IdResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new image from a container
     * @param {Object} opts Optional parameters
     * @param {String} opts.container The ID or name of the container to commit
     * @param {String} opts.repo Repository name for the created image
     * @param {String} opts.tag Tag name for the create image
     * @param {String} opts.comment Commit message
     * @param {String} opts.author Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`)
     * @param {Boolean} opts.pause Whether to pause the container before committing (default to true)
     * @param {String} opts.changes `Dockerfile` instructions to apply while committing
     * @param {module:model/ContainerConfig} opts.containerConfig The container configuration
     * @param {module:api/ImageApi~imageCommitCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/IdResponse}
     */

  }, {
    key: "imageCommit",
    value: function imageCommit(opts, callback) {
      opts = opts || {};
      var postBody = opts['containerConfig'];
      var pathParams = {};
      var queryParams = {
        'container': opts['container'],
        'repo': opts['repo'],
        'tag': opts['tag'],
        'comment': opts['comment'],
        'author': opts['author'],
        'pause': opts['pause'],
        'changes': opts['changes']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/json'];
      var accepts = ['application/json'];
      var returnType = _IdResponse["default"];
      return this.apiClient.callApi('/commit', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageCreate operation.
     * @callback module:api/ImageApi~imageCreateCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create an image
     * Create an image by either pulling it from a registry or importing it.
     * @param {Object} opts Optional parameters
     * @param {String} opts.fromImage Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
     * @param {String} opts.fromSrc Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image.
     * @param {String} opts.repo Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
     * @param {String} opts.tag Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
     * @param {String} opts.message Set commit message for imported image.
     * @param {String} opts.xRegistryAuth A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param {String} opts.platform Platform in the format os[/arch[/variant]]
     * @param {String} opts.inputImage Image content if the value `-` has been specified in fromSrc query parameter
     * @param {module:api/ImageApi~imageCreateCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "imageCreate",
    value: function imageCreate(opts, callback) {
      opts = opts || {};
      var postBody = opts['inputImage'];
      var pathParams = {};
      var queryParams = {
        'fromImage': opts['fromImage'],
        'fromSrc': opts['fromSrc'],
        'repo': opts['repo'],
        'tag': opts['tag'],
        'message': opts['message'],
        'platform': opts['platform']
      };
      var headerParams = {
        'X-Registry-Auth': opts['xRegistryAuth']
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = ['text/plain', 'application/octet-stream'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/images/create', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageDelete operation.
     * @callback module:api/ImageApi~imageDeleteCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ImageDeleteResponseItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Remove an image
     * Remove an image, along with any untagged parent images that were referenced by that image.  Images can't be removed if they have descendant images, are being used by a running container or are being used by a build. 
     * @param {String} name Image name or ID
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.force Remove the image even if it is being used by stopped containers or has other tags (default to false)
     * @param {Boolean} opts.noprune Do not delete untagged parent images (default to false)
     * @param {module:api/ImageApi~imageDeleteCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ImageDeleteResponseItem>}
     */

  }, {
    key: "imageDelete",
    value: function imageDelete(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling imageDelete");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'force': opts['force'],
        'noprune': opts['noprune']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ImageDeleteResponseItem["default"]];
      return this.apiClient.callApi('/images/{name}', 'DELETE', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageGet operation.
     * @callback module:api/ImageApi~imageGetCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export an image
     * Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 
     * @param {String} name Image name or ID
     * @param {module:api/ImageApi~imageGetCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "imageGet",
    value: function imageGet(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling imageGet");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {};
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/x-tar'];
      var returnType = File;
      return this.apiClient.callApi('/images/{name}/get', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageGetAll operation.
     * @callback module:api/ImageApi~imageGetAllCallback
     * @param {String} error Error message, if any.
     * @param {File} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Export several images
     * Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the 'repositories' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * @param {Object} opts Optional parameters
     * @param {Array.<String>} opts.names Image names to filter by
     * @param {module:api/ImageApi~imageGetAllCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link File}
     */

  }, {
    key: "imageGetAll",
    value: function imageGetAll(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'names': this.apiClient.buildCollectionParam(opts['names'], 'csv')
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/x-tar'];
      var returnType = File;
      return this.apiClient.callApi('/images/get', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageHistory operation.
     * @callback module:api/ImageApi~imageHistoryCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/HistoryResponseItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get the history of an image
     * Return parent layers of an image.
     * @param {String} name Image name or ID
     * @param {module:api/ImageApi~imageHistoryCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/HistoryResponseItem>}
     */

  }, {
    key: "imageHistory",
    value: function imageHistory(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling imageHistory");
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
      var returnType = [_HistoryResponseItem["default"]];
      return this.apiClient.callApi('/images/{name}/history', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageInspect operation.
     * @callback module:api/ImageApi~imageInspectCallback
     * @param {String} error Error message, if any.
     * @param {module:model/Image} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Inspect an image
     * Return low-level information about an image.
     * @param {String} name Image name or id
     * @param {module:api/ImageApi~imageInspectCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/Image}
     */

  }, {
    key: "imageInspect",
    value: function imageInspect(name, callback) {
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling imageInspect");
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
      var returnType = _Image["default"];
      return this.apiClient.callApi('/images/{name}/json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageList operation.
     * @callback module:api/ImageApi~imageListCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ImageSummary>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List Images
     * Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.all Show all images. Only images from a final layer (no children) are shown by default. (default to false)
     * @param {String} opts.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the images list.  Available filters:  - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `dangling=true` - `label=key` or `label=\"key=value\"` of an image label - `reference`=(`<image-name>[:<tag>]`) - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) 
     * @param {Boolean} opts.digests Show digest information as a `RepoDigests` field on each image. (default to false)
     * @param {module:api/ImageApi~imageListCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ImageSummary>}
     */

  }, {
    key: "imageList",
    value: function imageList(opts, callback) {
      opts = opts || {};
      var postBody = null;
      var pathParams = {};
      var queryParams = {
        'all': opts['all'],
        'filters': opts['filters'],
        'digests': opts['digests']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ImageSummary["default"]];
      return this.apiClient.callApi('/images/json', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageLoad operation.
     * @callback module:api/ImageApi~imageLoadCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Import images
     * Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 
     * @param {Object} opts Optional parameters
     * @param {Boolean} opts.quiet Suppress progress details during load. (default to false)
     * @param {File} opts.imagesTarball Tar archive containing images
     * @param {module:api/ImageApi~imageLoadCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "imageLoad",
    value: function imageLoad(opts, callback) {
      opts = opts || {};
      var postBody = opts['imagesTarball'];
      var pathParams = {};
      var queryParams = {
        'quiet': opts['quiet']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = ['application/x-tar'];
      var accepts = ['application/json'];
      var returnType = null;
      return this.apiClient.callApi('/images/load', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imagePrune operation.
     * @callback module:api/ImageApi~imagePruneCallback
     * @param {String} error Error message, if any.
     * @param {module:model/ImagePruneResponse} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete unused images
     * @param {Object} opts Optional parameters
     * @param {String} opts.filters Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), prune only    unused *and* untagged images. When set to `false`    (or `0`), all unused images are pruned. - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels. 
     * @param {module:api/ImageApi~imagePruneCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link module:model/ImagePruneResponse}
     */

  }, {
    key: "imagePrune",
    value: function imagePrune(opts, callback) {
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
      var returnType = _ImagePruneResponse["default"];
      return this.apiClient.callApi('/images/prune', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imagePush operation.
     * @callback module:api/ImageApi~imagePushCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Push an image
     * Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 
     * @param {String} name Image name or ID.
     * @param {String} xRegistryAuth A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
     * @param {Object} opts Optional parameters
     * @param {String} opts.tag The tag to associate with the image on the registry.
     * @param {module:api/ImageApi~imagePushCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "imagePush",
    value: function imagePush(name, xRegistryAuth, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling imagePush");
      } // verify the required parameter 'xRegistryAuth' is set


      if (xRegistryAuth === undefined || xRegistryAuth === null) {
        throw new Error("Missing the required parameter 'xRegistryAuth' when calling imagePush");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'tag': opts['tag']
      };
      var headerParams = {
        'X-Registry-Auth': xRegistryAuth
      };
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/images/{name}/push', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageSearch operation.
     * @callback module:api/ImageApi~imageSearchCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/ImageSearchResponseItem>} data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Search images
     * Search for an image on Docker Hub.
     * @param {String} term Term to search
     * @param {Object} opts Optional parameters
     * @param {Number} opts.limit Maximum number of results to return
     * @param {String} opts.filters A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:  - `is-automated=(true|false)` - `is-official=(true|false)` - `stars=<number>` Matches images that has at least 'number' stars. 
     * @param {module:api/ImageApi~imageSearchCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link Array.<module:model/ImageSearchResponseItem>}
     */

  }, {
    key: "imageSearch",
    value: function imageSearch(term, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'term' is set

      if (term === undefined || term === null) {
        throw new Error("Missing the required parameter 'term' when calling imageSearch");
      }

      var pathParams = {};
      var queryParams = {
        'term': term,
        'limit': opts['limit'],
        'filters': opts['filters']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json'];
      var returnType = [_ImageSearchResponseItem["default"]];
      return this.apiClient.callApi('/images/search', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
    /**
     * Callback function to receive the result of the imageTag operation.
     * @callback module:api/ImageApi~imageTagCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Tag an image
     * Tag an image so that it becomes part of a repository.
     * @param {String} name Image name or ID to tag.
     * @param {Object} opts Optional parameters
     * @param {String} opts.repo The repository to tag in. For example, `someuser/someimage`.
     * @param {String} opts.tag The name of the new tag.
     * @param {module:api/ImageApi~imageTagCallback} callback The callback function, accepting three arguments: error, data, response
     */

  }, {
    key: "imageTag",
    value: function imageTag(name, opts, callback) {
      opts = opts || {};
      var postBody = null; // verify the required parameter 'name' is set

      if (name === undefined || name === null) {
        throw new Error("Missing the required parameter 'name' when calling imageTag");
      }

      var pathParams = {
        'name': name
      };
      var queryParams = {
        'repo': opts['repo'],
        'tag': opts['tag']
      };
      var headerParams = {};
      var formParams = {};
      var authNames = [];
      var contentTypes = [];
      var accepts = ['application/json', 'text/plain'];
      var returnType = null;
      return this.apiClient.callApi('/images/{name}/tag', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType, null, callback);
    }
  }]);

  return ImageApi;
}();

exports["default"] = ImageApi;