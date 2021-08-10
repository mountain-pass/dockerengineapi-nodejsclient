# DockerEngineApi.ImageApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**buildPrune**](ImageApi.md#buildPrune) | **POST** /build/prune | Delete builder cache
[**imageBuild**](ImageApi.md#imageBuild) | **POST** /build | Build an image
[**imageCommit**](ImageApi.md#imageCommit) | **POST** /commit | Create a new image from a container
[**imageCreate**](ImageApi.md#imageCreate) | **POST** /images/create | Create an image
[**imageDelete**](ImageApi.md#imageDelete) | **DELETE** /images/{name} | Remove an image
[**imageGet**](ImageApi.md#imageGet) | **GET** /images/{name}/get | Export an image
[**imageGetAll**](ImageApi.md#imageGetAll) | **GET** /images/get | Export several images
[**imageHistory**](ImageApi.md#imageHistory) | **GET** /images/{name}/history | Get the history of an image
[**imageInspect**](ImageApi.md#imageInspect) | **GET** /images/{name}/json | Inspect an image
[**imageList**](ImageApi.md#imageList) | **GET** /images/json | List Images
[**imageLoad**](ImageApi.md#imageLoad) | **POST** /images/load | Import images
[**imagePrune**](ImageApi.md#imagePrune) | **POST** /images/prune | Delete unused images
[**imagePush**](ImageApi.md#imagePush) | **POST** /images/{name}/push | Push an image
[**imageSearch**](ImageApi.md#imageSearch) | **GET** /images/search | Search images
[**imageTag**](ImageApi.md#imageTag) | **POST** /images/{name}/tag | Tag an image


<a name="buildPrune"></a>
# **buildPrune**
> BuildPruneResponse buildPrune(opts)

Delete builder cache

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var opts = { 
  'keepStorage': 789, // Number | Amount of disk space in bytes to keep for cache
  'all': true, // Boolean | Remove all types of build cache
  'filters': "filters_example" // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the list of build cache objects.  Available filters:  - `until=<duration>`: duration relative to daemon's time, during which build cache was not used, in Go's duration format (e.g., '24h') - `id=<id>` - `parent=<id>` - `type=<string>` - `description=<string>` - `inuse` - `shared` - `private` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.buildPrune(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **keepStorage** | **Number**| Amount of disk space in bytes to keep for cache | [optional] 
 **all** | **Boolean**| Remove all types of build cache | [optional] 
 **filters** | **String**| A JSON encoded value of the filters (a `map[string][]string`) to process on the list of build cache objects.  Available filters:  - `until=<duration>`: duration relative to daemon's time, during which build cache was not used, in Go's duration format (e.g., '24h') - `id=<id>` - `parent=<id>` - `type=<string>` - `description=<string>` - `inuse` - `shared` - `private`  | [optional] 

### Return type

[**BuildPruneResponse**](BuildPruneResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="imageBuild"></a>
# **imageBuild**
> imageBuild(opts)

Build an image

Build an image from a tar archive with a `Dockerfile` in it.  The `Dockerfile` specifies how the image is built from the tar archive. It is typically in the archive's root, but can be at a different path or have a different name by specifying the `dockerfile` parameter. [See the `Dockerfile` reference for more information](/engine/reference/builder/).  The Docker daemon performs a preliminary validation of the `Dockerfile` before starting the build, and returns an error if the syntax is incorrect. After that, each instruction is run one-by-one until the ID of the new image is output.  The build is canceled if the client drops the connection by quitting or being killed. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var opts = { 
  'inputStream': "QmFzZTY0IGV4YW1wbGU=", // Blob | A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz.
  'dockerfile': "Dockerfile", // String | Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`.
  't': "t_example", // String | A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters.
  'extrahosts': "extrahosts_example", // String | Extra hosts to add to /etc/hosts
  'remote': "remote_example", // String | A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball.
  'q': false, // Boolean | Suppress verbose build output.
  'nocache': false, // Boolean | Do not use the cache when building the image.
  'cachefrom': "cachefrom_example", // String | JSON array of images used for build cache resolution.
  'pull': "pull_example", // String | Attempt to pull the image even if an older image exists locally.
  'rm': true, // Boolean | Remove intermediate containers after a successful build.
  'forcerm': false, // Boolean | Always remove intermediate containers, even upon failure.
  'memory': 56, // Number | Set memory limit for build.
  'memswap': 56, // Number | Total memory (memory + swap). Set as `-1` to disable swap.
  'cpushares': 56, // Number | CPU shares (relative weight).
  'cpusetcpus': "cpusetcpus_example", // String | CPUs in which to allow execution (e.g., `0-3`, `0,1`).
  'cpuperiod': 56, // Number | The length of a CPU period in microseconds.
  'cpuquota': 56, // Number | Microseconds of CPU time that the container can get in a CPU period.
  'buildargs': "buildargs_example", // String | JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.  For example, the build arg `FOO=bar` would become `{\"FOO\":\"bar\"}` in JSON. This would result in the query parameter `buildargs={\"FOO\":\"bar\"}`. Note that `{\"FOO\":\"bar\"}` should be URI component encoded.  [Read more about the buildargs instruction.](/engine/reference/builder/#arg) 
  'shmsize': 56, // Number | Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB.
  'squash': true, // Boolean | Squash the resulting images layers into a single layer. *(Experimental release only.)*
  'labels': "labels_example", // String | Arbitrary key/value labels to set on the image, as a JSON map of string pairs.
  'networkmode': "networkmode_example", // String | Sets the networking mode for the run commands during build. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name or ID to which this container should connect to. 
  'contentType': "application/x-tar", // String | 
  'xRegistryConfig': "xRegistryConfig_example", // String | This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  ``` {   \"docker.example.com\": {     \"username\": \"janedoe\",     \"password\": \"hunter2\"   },   \"https://index.docker.io/v1/\": {     \"username\": \"mobydock\",     \"password\": \"conta1n3rize14\"   } } ```  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API. 
  'platform': "", // String | Platform in the format os[/arch[/variant]]
  'target': "", // String | Target build stage
  'outputs': "" // String | BuildKit output configuration
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.imageBuild(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **inputStream** | **Blob**| A tar archive compressed with one of the following algorithms: identity (no compression), gzip, bzip2, xz. | [optional] 
 **dockerfile** | **String**| Path within the build context to the `Dockerfile`. This is ignored if `remote` is specified and points to an external `Dockerfile`. | [optional] [default to Dockerfile]
 **t** | **String**| A name and optional tag to apply to the image in the `name:tag` format. If you omit the tag the default `latest` value is assumed. You can provide several `t` parameters. | [optional] 
 **extrahosts** | **String**| Extra hosts to add to /etc/hosts | [optional] 
 **remote** | **String**| A Git repository URI or HTTP/HTTPS context URI. If the URI points to a single text file, the file’s contents are placed into a file called `Dockerfile` and the image is built from that file. If the URI points to a tarball, the file is downloaded by the daemon and the contents therein used as the context for the build. If the URI points to a tarball and the `dockerfile` parameter is also specified, there must be a file with the corresponding path inside the tarball. | [optional] 
 **q** | **Boolean**| Suppress verbose build output. | [optional] [default to false]
 **nocache** | **Boolean**| Do not use the cache when building the image. | [optional] [default to false]
 **cachefrom** | **String**| JSON array of images used for build cache resolution. | [optional] 
 **pull** | **String**| Attempt to pull the image even if an older image exists locally. | [optional] 
 **rm** | **Boolean**| Remove intermediate containers after a successful build. | [optional] [default to true]
 **forcerm** | **Boolean**| Always remove intermediate containers, even upon failure. | [optional] [default to false]
 **memory** | **Number**| Set memory limit for build. | [optional] 
 **memswap** | **Number**| Total memory (memory + swap). Set as `-1` to disable swap. | [optional] 
 **cpushares** | **Number**| CPU shares (relative weight). | [optional] 
 **cpusetcpus** | **String**| CPUs in which to allow execution (e.g., `0-3`, `0,1`). | [optional] 
 **cpuperiod** | **Number**| The length of a CPU period in microseconds. | [optional] 
 **cpuquota** | **Number**| Microseconds of CPU time that the container can get in a CPU period. | [optional] 
 **buildargs** | **String**| JSON map of string pairs for build-time variables. Users pass these values at build-time. Docker uses the buildargs as the environment context for commands run via the `Dockerfile` RUN instruction, or for variable expansion in other `Dockerfile` instructions. This is not meant for passing secret values.  For example, the build arg `FOO=bar` would become `{\"FOO\":\"bar\"}` in JSON. This would result in the query parameter `buildargs={\"FOO\":\"bar\"}`. Note that `{\"FOO\":\"bar\"}` should be URI component encoded.  [Read more about the buildargs instruction.](/engine/reference/builder/#arg)  | [optional] 
 **shmsize** | **Number**| Size of `/dev/shm` in bytes. The size must be greater than 0. If omitted the system uses 64MB. | [optional] 
 **squash** | **Boolean**| Squash the resulting images layers into a single layer. *(Experimental release only.)* | [optional] 
 **labels** | **String**| Arbitrary key/value labels to set on the image, as a JSON map of string pairs. | [optional] 
 **networkmode** | **String**| Sets the networking mode for the run commands during build. Supported standard values are: `bridge`, `host`, `none`, and `container:<name|id>`. Any other value is taken as a custom network's name or ID to which this container should connect to.  | [optional] 
 **contentType** | **String**|  | [optional] [default to application/x-tar]
 **xRegistryConfig** | **String**| This is a base64-encoded JSON object with auth configurations for multiple registries that a build may refer to.  The key is a registry URL, and the value is an auth configuration object, [as described in the authentication section](#section/Authentication). For example:  ``` {   \"docker.example.com\": {     \"username\": \"janedoe\",     \"password\": \"hunter2\"   },   \"https://index.docker.io/v1/\": {     \"username\": \"mobydock\",     \"password\": \"conta1n3rize14\"   } } ```  Only the registry domain name (and port if not the default 443) are required. However, for legacy reasons, the Docker Hub registry must be specified with both a `https://` prefix and a `/v1/` suffix even though Docker will prefer to use the v2 registry API.  | [optional] 
 **platform** | **String**| Platform in the format os[/arch[/variant]] | [optional] [default to ]
 **target** | **String**| Target build stage | [optional] [default to ]
 **outputs** | **String**| BuildKit output configuration | [optional] [default to ]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json

<a name="imageCommit"></a>
# **imageCommit**
> IdResponse imageCommit(opts)

Create a new image from a container

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var opts = { 
  'containerConfig': new DockerEngineApi.ContainerConfig(), // ContainerConfig | The container configuration
  'container': "container_example", // String | The ID or name of the container to commit
  'repo': "repo_example", // String | Repository name for the created image
  'tag': "tag_example", // String | Tag name for the create image
  'comment': "comment_example", // String | Commit message
  'author': "author_example", // String | Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`)
  'pause': true, // Boolean | Whether to pause the container before committing
  'changes': "changes_example" // String | `Dockerfile` instructions to apply while committing
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageCommit(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **containerConfig** | [**ContainerConfig**](ContainerConfig.md)| The container configuration | [optional] 
 **container** | **String**| The ID or name of the container to commit | [optional] 
 **repo** | **String**| Repository name for the created image | [optional] 
 **tag** | **String**| Tag name for the create image | [optional] 
 **comment** | **String**| Commit message | [optional] 
 **author** | **String**| Author of the image (e.g., `John Hannibal Smith <hannibal@a-team.com>`) | [optional] 
 **pause** | **Boolean**| Whether to pause the container before committing | [optional] [default to true]
 **changes** | **String**| `Dockerfile` instructions to apply while committing | [optional] 

### Return type

[**IdResponse**](IdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="imageCreate"></a>
# **imageCreate**
> imageCreate(opts)

Create an image

Create an image by either pulling it from a registry or importing it.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var opts = { 
  'fromImage': "fromImage_example", // String | Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed.
  'fromSrc': "fromSrc_example", // String | Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image.
  'repo': "repo_example", // String | Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image.
  'tag': "tag_example", // String | Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled.
  'message': "message_example", // String | Set commit message for imported image.
  'inputImage': "inputImage_example", // String | Image content if the value `-` has been specified in fromSrc query parameter
  'xRegistryAuth': "xRegistryAuth_example", // String | A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 
  'platform': "" // String | Platform in the format os[/arch[/variant]]
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.imageCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fromImage** | **String**| Name of the image to pull. The name may include a tag or digest. This parameter may only be used when pulling an image. The pull is cancelled if the HTTP connection is closed. | [optional] 
 **fromSrc** | **String**| Source to import. The value may be a URL from which the image can be retrieved or `-` to read the image from the request body. This parameter may only be used when importing an image. | [optional] 
 **repo** | **String**| Repository name given to an image when it is imported. The repo may include a tag. This parameter may only be used when importing an image. | [optional] 
 **tag** | **String**| Tag or digest. If empty when pulling an image, this causes all tags for the given image to be pulled. | [optional] 
 **message** | **String**| Set commit message for imported image. | [optional] 
 **inputImage** | **String**| Image content if the value `-` has been specified in fromSrc query parameter | [optional] 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 
 **platform** | **String**| Platform in the format os[/arch[/variant]] | [optional] [default to ]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: text/plain, application/octet-stream
 - **Accept**: application/json

<a name="imageDelete"></a>
# **imageDelete**
> [ImageDeleteResponseItem] imageDelete(name, opts)

Remove an image

Remove an image, along with any untagged parent images that were referenced by that image.  Images can't be removed if they have descendant images, are being used by a running container or are being used by a build. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var name = "name_example"; // String | Image name or ID

var opts = { 
  'force': false, // Boolean | Remove the image even if it is being used by stopped containers or has other tags
  'noprune': false // Boolean | Do not delete untagged parent images
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageDelete(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image name or ID | 
 **force** | **Boolean**| Remove the image even if it is being used by stopped containers or has other tags | [optional] [default to false]
 **noprune** | **Boolean**| Do not delete untagged parent images | [optional] [default to false]

### Return type

[**[ImageDeleteResponseItem]**](ImageDeleteResponseItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="imageGet"></a>
# **imageGet**
> 'Blob' imageGet(name)

Export an image

Get a tarball containing all images and metadata for a repository.  If `name` is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned. If `name` is an image ID, similarly only that image (and its parents) are returned, but with the exclusion of the `repositories` file in the tarball, as there were no image names referenced.  ### Image tarball format  An image tarball contains one directory per image layer (named using its long ID), each containing these files:  - `VERSION`: currently `1.0` - the file format version - `json`: detailed layer information, similar to `docker inspect layer_id` - `layer.tar`: A tarfile containing the filesystem changes in this layer  The `layer.tar` file contains `aufs` style `.wh..wh.aufs` files and directories for storing attribute changes and deletions.  If the tarball defines a repository, the tarball should also include a `repositories` file at the root that contains a list of repository and tag names mapped to layer IDs.  ```json {   \"hello-world\": {     \"latest\": \"565a9d68a73f6706862bfe8409a7f659776d4d60a8d096eb4a3cbce6999cc2a1\"   } } ``` 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var name = "name_example"; // String | Image name or ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageGet(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image name or ID | 

### Return type

**'Blob'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/x-tar

<a name="imageGetAll"></a>
# **imageGetAll**
> 'Blob' imageGetAll(opts)

Export several images

Get a tarball containing all images and metadata for several image repositories.  For each value of the `names` parameter: if it is a specific name and tag (e.g. `ubuntu:latest`), then only that image (and its parents) are returned; if it is an image ID, similarly only that image (and its parents) are returned and there would be no names referenced in the 'repositories' file for this image ID.  For details on the format, see the [export image endpoint](#operation/ImageGet). 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var opts = { 
  'names': ["names_example"] // [String] | Image names to filter by
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageGetAll(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **names** | [**[String]**](String.md)| Image names to filter by | [optional] 

### Return type

**'Blob'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/x-tar

<a name="imageHistory"></a>
# **imageHistory**
> [HistoryResponseItem] imageHistory(name)

Get the history of an image

Return parent layers of an image.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var name = "name_example"; // String | Image name or ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageHistory(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image name or ID | 

### Return type

[**[HistoryResponseItem]**](HistoryResponseItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="imageInspect"></a>
# **imageInspect**
> Image imageInspect(name)

Inspect an image

Return low-level information about an image.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var name = "name_example"; // String | Image name or id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageInspect(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image name or id | 

### Return type

[**Image**](Image.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="imageList"></a>
# **imageList**
> [ImageSummary] imageList(opts)

List Images

Returns a list of images on the server. Note that it uses a different, smaller representation of an image than inspecting a single image.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var opts = { 
  'all': false, // Boolean | Show all images. Only images from a final layer (no children) are shown by default.
  'filters': "filters_example", // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the images list.  Available filters:  - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `dangling=true` - `label=key` or `label=\"key=value\"` of an image label - `reference`=(`<image-name>[:<tag>]`) - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) 
  'digests': false // Boolean | Show digest information as a `RepoDigests` field on each image.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Show all images. Only images from a final layer (no children) are shown by default. | [optional] [default to false]
 **filters** | **String**| A JSON encoded value of the filters (a `map[string][]string`) to process on the images list.  Available filters:  - `before`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`) - `dangling=true` - `label=key` or `label=\"key=value\"` of an image label - `reference`=(`<image-name>[:<tag>]`) - `since`=(`<image-name>[:<tag>]`,  `<image id>` or `<image@digest>`)  | [optional] 
 **digests** | **Boolean**| Show digest information as a `RepoDigests` field on each image. | [optional] [default to false]

### Return type

[**[ImageSummary]**](ImageSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="imageLoad"></a>
# **imageLoad**
> imageLoad(opts)

Import images

Load a set of images and tags into a repository.  For details on the format, see the [export image endpoint](#operation/ImageGet). 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var opts = { 
  'imagesTarball': "QmFzZTY0IGV4YW1wbGU=", // Blob | Tar archive containing images
  'quiet': false // Boolean | Suppress progress details during load.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.imageLoad(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imagesTarball** | **Blob**| Tar archive containing images | [optional] 
 **quiet** | **Boolean**| Suppress progress details during load. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-tar
 - **Accept**: application/json

<a name="imagePrune"></a>
# **imagePrune**
> ImagePruneResponse imagePrune(opts)

Delete unused images

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var opts = { 
  'filters': "filters_example" // String | Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), prune only    unused *and* untagged images. When set to `false`    (or `0`), all unused images are pruned. - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imagePrune(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| Filters to process on the prune list, encoded as JSON (a `map[string][]string`). Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), prune only    unused *and* untagged images. When set to `false`    (or `0`), all unused images are pruned. - `until=<string>` Prune images created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune images with (or without, in case `label!=...` is used) the specified labels.  | [optional] 

### Return type

[**ImagePruneResponse**](ImagePruneResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="imagePush"></a>
# **imagePush**
> imagePush(name, xRegistryAuth, opts)

Push an image

Push an image to a registry.  If you wish to push an image on to a private registry, that image must already have a tag which references the registry. For example, `registry.example.com/myimage:latest`.  The push is cancelled if the HTTP connection is closed. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var name = "name_example"; // String | Image name or ID.

var xRegistryAuth = "xRegistryAuth_example"; // String | A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details. 

var opts = { 
  'tag': "tag_example" // String | The tag to associate with the image on the registry.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.imagePush(name, xRegistryAuth, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image name or ID. | 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration.  Refer to the [authentication section](#section/Authentication) for details.  | 
 **tag** | **String**| The tag to associate with the image on the registry. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: application/json, text/plain

<a name="imageSearch"></a>
# **imageSearch**
> [ImageSearchResponseItem] imageSearch(term, opts)

Search images

Search for an image on Docker Hub.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var term = "term_example"; // String | Term to search

var opts = { 
  'limit': 56, // Number | Maximum number of results to return
  'filters': "filters_example" // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:  - `is-automated=(true|false)` - `is-official=(true|false)` - `stars=<number>` Matches images that has at least 'number' stars. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.imageSearch(term, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **term** | **String**| Term to search | 
 **limit** | **Number**| Maximum number of results to return | [optional] 
 **filters** | **String**| A JSON encoded value of the filters (a `map[string][]string`) to process on the images list. Available filters:  - `is-automated=(true|false)` - `is-official=(true|false)` - `stars=<number>` Matches images that has at least 'number' stars.  | [optional] 

### Return type

[**[ImageSearchResponseItem]**](ImageSearchResponseItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="imageTag"></a>
# **imageTag**
> imageTag(name, opts)

Tag an image

Tag an image so that it becomes part of a repository.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ImageApi();

var name = "name_example"; // String | Image name or ID to tag.

var opts = { 
  'repo': "repo_example", // String | The repository to tag in. For example, `someuser/someimage`.
  'tag': "tag_example" // String | The name of the new tag.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.imageTag(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| Image name or ID to tag. | 
 **repo** | **String**| The repository to tag in. For example, `someuser/someimage`. | [optional] 
 **tag** | **String**| The name of the new tag. | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

