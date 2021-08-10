# DockerEngineApi.ContainerApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerArchive**](ContainerApi.md#containerArchive) | **GET** /containers/{id}/archive | Get an archive of a filesystem resource in a container
[**containerArchiveInfo**](ContainerApi.md#containerArchiveInfo) | **HEAD** /containers/{id}/archive | Get information about files in a container
[**containerAttach**](ContainerApi.md#containerAttach) | **POST** /containers/{id}/attach | Attach to a container
[**containerAttachWebsocket**](ContainerApi.md#containerAttachWebsocket) | **GET** /containers/{id}/attach/ws | Attach to a container via a websocket
[**containerChanges**](ContainerApi.md#containerChanges) | **GET** /containers/{id}/changes | Get changes on a container’s filesystem
[**containerCreate**](ContainerApi.md#containerCreate) | **POST** /containers/create | Create a container
[**containerDelete**](ContainerApi.md#containerDelete) | **DELETE** /containers/{id} | Remove a container
[**containerExport**](ContainerApi.md#containerExport) | **GET** /containers/{id}/export | Export a container
[**containerInspect**](ContainerApi.md#containerInspect) | **GET** /containers/{id}/json | Inspect a container
[**containerKill**](ContainerApi.md#containerKill) | **POST** /containers/{id}/kill | Kill a container
[**containerList**](ContainerApi.md#containerList) | **GET** /containers/json | List containers
[**containerLogs**](ContainerApi.md#containerLogs) | **GET** /containers/{id}/logs | Get container logs
[**containerPause**](ContainerApi.md#containerPause) | **POST** /containers/{id}/pause | Pause a container
[**containerPrune**](ContainerApi.md#containerPrune) | **POST** /containers/prune | Delete stopped containers
[**containerRename**](ContainerApi.md#containerRename) | **POST** /containers/{id}/rename | Rename a container
[**containerResize**](ContainerApi.md#containerResize) | **POST** /containers/{id}/resize | Resize a container TTY
[**containerRestart**](ContainerApi.md#containerRestart) | **POST** /containers/{id}/restart | Restart a container
[**containerStart**](ContainerApi.md#containerStart) | **POST** /containers/{id}/start | Start a container
[**containerStats**](ContainerApi.md#containerStats) | **GET** /containers/{id}/stats | Get container stats based on resource usage
[**containerStop**](ContainerApi.md#containerStop) | **POST** /containers/{id}/stop | Stop a container
[**containerTop**](ContainerApi.md#containerTop) | **GET** /containers/{id}/top | List processes running inside a container
[**containerUnpause**](ContainerApi.md#containerUnpause) | **POST** /containers/{id}/unpause | Unpause a container
[**containerUpdate**](ContainerApi.md#containerUpdate) | **POST** /containers/{id}/update | Update a container
[**containerWait**](ContainerApi.md#containerWait) | **POST** /containers/{id}/wait | Wait for a container
[**putContainerArchive**](ContainerApi.md#putContainerArchive) | **PUT** /containers/{id}/archive | Extract an archive of files or folders to a directory in a container


<a name="containerArchive"></a>
# **containerArchive**
> containerArchive(id, path)

Get an archive of a filesystem resource in a container

Get a tar archive of a resource in the filesystem of container id.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var path = "path_example"; // String | Resource in the container’s filesystem to archive.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerArchive(id, path, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **path** | **String**| Resource in the container’s filesystem to archive. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/x-tar

<a name="containerArchiveInfo"></a>
# **containerArchiveInfo**
> containerArchiveInfo(id, path)

Get information about files in a container

A response header `X-Docker-Container-Path-Stat` is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var path = "path_example"; // String | Resource in the container’s filesystem to archive.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerArchiveInfo(id, path, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **path** | **String**| Resource in the container’s filesystem to archive. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerAttach"></a>
# **containerAttach**
> containerAttach(id, opts)

Attach to a container

Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.  Either the `stream` or `logs` parameter must be `true` for this endpoint to do anything.  See the [documentation for the `docker attach` command](/engine/reference/commandline/attach/) for more details.  ### Hijacking  This endpoint hijacks the HTTP connection to transport `stdin`, `stdout`, and `stderr` on the same socket.  This is the response from the daemon for an attach request:  ``` HTTP/1.1 200 OK Content-Type: application/vnd.docker.raw-stream  [STREAM] ```  After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.  To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.  For example, the client sends this request to upgrade the connection:  ``` POST /containers/16253994b7c4/attach?stream=1&stdout=1 HTTP/1.1 Upgrade: tcp Connection: Upgrade ```  The Docker daemon will respond with a `101 UPGRADED` response, and will similarly follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Content-Type: application/vnd.docker.raw-stream Connection: Upgrade Upgrade: tcp  [STREAM] ```  ### Stream format  When the TTY setting is disabled in [`POST /containers/create`](#operation/ContainerCreate), the stream over the hijacked connected is multiplexed to separate out `stdout` and `stderr`. The stream consists of a series of frames, each containing a header and a payload.  The header contains the information which the stream writes (`stdout` or `stderr`). It also contains the size of the associated frame encoded in the last four bytes (`uint32`).  It is encoded on the first eight bytes like this:  ```go header := [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4} ```  `STREAM_TYPE` can be:  - 0: `stdin` (is written on `stdout`) - 1: `stdout` - 2: `stderr`  `SIZE1, SIZE2, SIZE3, SIZE4` are the four bytes of the `uint32` size encoded as big endian.  Following the header is the payload, which is the specified number of bytes of `STREAM_TYPE`.  The simplest way to implement this protocol is the following:  1. Read 8 bytes. 2. Choose `stdout` or `stderr` depending on the first byte. 3. Extract the frame size from the last four bytes. 4. Read the extracted size and output it on the correct output. 5. Goto 1.  ### Stream format when using a TTY  When the TTY setting is enabled in [`POST /containers/create`](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client's `stdin`. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'detachKeys': "detachKeys_example", // String | Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`. 
  'logs': false, // Boolean | Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If `stream` is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output. 
  'stream': false, // Boolean | Stream attached streams from the time the request was made onwards. 
  'stdin': false, // Boolean | Attach to `stdin`
  'stdout': false, // Boolean | Attach to `stdout`
  'stderr': false // Boolean | Attach to `stderr`
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerAttach(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **detachKeys** | **String**| Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.  | [optional] 
 **logs** | **Boolean**| Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If `stream` is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output.  | [optional] [default to false]
 **stream** | **Boolean**| Stream attached streams from the time the request was made onwards.  | [optional] [default to false]
 **stdin** | **Boolean**| Attach to `stdin` | [optional] [default to false]
 **stdout** | **Boolean**| Attach to `stdout` | [optional] [default to false]
 **stderr** | **Boolean**| Attach to `stderr` | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/vnd.docker.raw-stream

<a name="containerAttachWebsocket"></a>
# **containerAttachWebsocket**
> containerAttachWebsocket(id, opts)

Attach to a container via a websocket

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'detachKeys': "detachKeys_example", // String | Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,`, or `_`. 
  'logs': false, // Boolean | Return logs
  'stream': false, // Boolean | Return stream
  'stdin': false, // Boolean | Attach to `stdin`
  'stdout': false, // Boolean | Attach to `stdout`
  'stderr': false // Boolean | Attach to `stderr`
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerAttachWebsocket(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **detachKeys** | **String**| Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,`, or `_`.  | [optional] 
 **logs** | **Boolean**| Return logs | [optional] [default to false]
 **stream** | **Boolean**| Return stream | [optional] [default to false]
 **stdin** | **Boolean**| Attach to `stdin` | [optional] [default to false]
 **stdout** | **Boolean**| Attach to `stdout` | [optional] [default to false]
 **stderr** | **Boolean**| Attach to `stderr` | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerChanges"></a>
# **containerChanges**
> [ContainerChangeResponseItem] containerChanges(id)

Get changes on a container’s filesystem

Returns which files in a container's filesystem have been added, deleted, or modified. The `Kind` of modification can be one of:  - `0`: Modified - `1`: Added - `2`: Deleted 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerChanges(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 

### Return type

[**[ContainerChangeResponseItem]**](ContainerChangeResponseItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="containerCreate"></a>
# **containerCreate**
> ContainerCreateResponse containerCreate(body, opts)

Create a container

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var body = new DockerEngineApi.object(); // object | Container to create

var opts = { 
  'name': "name_example" // String | Assign the specified name to the container. Must match `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerCreate(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**object**](.md)| Container to create | 
 **name** | **String**| Assign the specified name to the container. Must match `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`.  | [optional] 

### Return type

[**ContainerCreateResponse**](ContainerCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/octet-stream
 - **Accept**: application/json

<a name="containerDelete"></a>
# **containerDelete**
> containerDelete(id, opts)

Remove a container

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'v': false, // Boolean | Remove anonymous volumes associated with the container.
  'force': false, // Boolean | If the container is running, kill it before removing it.
  'link': false // Boolean | Remove the specified link associated with the container.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerDelete(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **v** | **Boolean**| Remove anonymous volumes associated with the container. | [optional] [default to false]
 **force** | **Boolean**| If the container is running, kill it before removing it. | [optional] [default to false]
 **link** | **Boolean**| Remove the specified link associated with the container. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerExport"></a>
# **containerExport**
> containerExport(id)

Export a container

Export the contents of a container as a tarball.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerExport(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/octet-stream

<a name="containerInspect"></a>
# **containerInspect**
> ContainerInspectResponse containerInspect(id, opts)

Inspect a container

Return low-level information about a container.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'size': false // Boolean | Return the size of container as fields `SizeRw` and `SizeRootFs`
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerInspect(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **size** | **Boolean**| Return the size of container as fields `SizeRw` and `SizeRootFs` | [optional] [default to false]

### Return type

[**ContainerInspectResponse**](ContainerInspectResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="containerKill"></a>
# **containerKill**
> containerKill(id, opts)

Kill a container

Send a POSIX signal to a container, defaulting to killing to the container. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'signal': "SIGKILL" // String | Signal to send to the container as an integer or string (e.g. `SIGINT`)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerKill(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **signal** | **String**| Signal to send to the container as an integer or string (e.g. `SIGINT`) | [optional] [default to SIGKILL]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerList"></a>
# **containerList**
> ContainerSummary containerList(opts)

List containers

Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var opts = { 
  'all': false, // Boolean | Return all containers. By default, only running containers are shown. 
  'limit': 56, // Number | Return this number of most recently created containers, including non-running ones. 
  'size': false, // Boolean | Return the size of container as fields `SizeRw` and `SizeRootFs`. 
  'filters': "filters_example" // String | Filters to process on the container list, encoded as JSON (a `map[string][]string`). For example, `{\"status\": [\"paused\"]}` will only return paused containers.  Available filters:  - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`) - `before`=(`<container id>` or `<container name>`) - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `exited=<int>` containers with exit code of `<int>` - `health`=(`starting`|`healthy`|`unhealthy`|`none`) - `id=<ID>` a container's ID - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only) - `is-task=`(`true`|`false`) - `label=key` or `label=\"key=value\"` of a container label - `name=<name>` a container's name - `network`=(`<network id>` or `<network name>`) - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `since`=(`<container id>` or `<container name>`) - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`) - `volume`=(`<volume name>` or `<mount point destination>`) 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Return all containers. By default, only running containers are shown.  | [optional] [default to false]
 **limit** | **Number**| Return this number of most recently created containers, including non-running ones.  | [optional] 
 **size** | **Boolean**| Return the size of container as fields `SizeRw` and `SizeRootFs`.  | [optional] [default to false]
 **filters** | **String**| Filters to process on the container list, encoded as JSON (a `map[string][]string`). For example, `{\"status\": [\"paused\"]}` will only return paused containers.  Available filters:  - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`) - `before`=(`<container id>` or `<container name>`) - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `exited=<int>` containers with exit code of `<int>` - `health`=(`starting`|`healthy`|`unhealthy`|`none`) - `id=<ID>` a container's ID - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only) - `is-task=`(`true`|`false`) - `label=key` or `label=\"key=value\"` of a container label - `name=<name>` a container's name - `network`=(`<network id>` or `<network name>`) - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `since`=(`<container id>` or `<container name>`) - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`) - `volume`=(`<volume name>` or `<mount point destination>`)  | [optional] 

### Return type

[**ContainerSummary**](ContainerSummary.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="containerLogs"></a>
# **containerLogs**
> 'Blob' containerLogs(id, opts)

Get container logs

Get `stdout` and `stderr` logs from a container.  Note: This endpoint works only for containers with the `json-file` or `journald` logging driver. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'follow': false, // Boolean | Keep connection after returning logs.
  'stdout': false, // Boolean | Return logs from `stdout`
  'stderr': false, // Boolean | Return logs from `stderr`
  'since': 0, // Number | Only return logs since this time, as a UNIX timestamp
  'until': 0, // Number | Only return logs before this time, as a UNIX timestamp
  'timestamps': false, // Boolean | Add timestamps to every log line
  'tail': "all" // String | Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerLogs(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **follow** | **Boolean**| Keep connection after returning logs. | [optional] [default to false]
 **stdout** | **Boolean**| Return logs from `stdout` | [optional] [default to false]
 **stderr** | **Boolean**| Return logs from `stderr` | [optional] [default to false]
 **since** | **Number**| Only return logs since this time, as a UNIX timestamp | [optional] [default to 0]
 **until** | **Number**| Only return logs before this time, as a UNIX timestamp | [optional] [default to 0]
 **timestamps** | **Boolean**| Add timestamps to every log line | [optional] [default to false]
 **tail** | **String**| Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.  | [optional] [default to all]

### Return type

**'Blob'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerPause"></a>
# **containerPause**
> containerPause(id)

Pause a container

Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the `SIGSTOP` signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerPause(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerPrune"></a>
# **containerPrune**
> ContainerPruneResponse containerPrune(opts)

Delete stopped containers

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var opts = { 
  'filters': "filters_example" // String | Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerPrune(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels.  | [optional] 

### Return type

[**ContainerPruneResponse**](ContainerPruneResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="containerRename"></a>
# **containerRename**
> containerRename(id, name)

Rename a container

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var name = "name_example"; // String | New name for the container


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerRename(id, name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **name** | **String**| New name for the container | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerResize"></a>
# **containerResize**
> containerResize(id, opts)

Resize a container TTY

Resize the TTY for a container.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'h': 56, // Number | Height of the TTY session in characters
  'w': 56 // Number | Width of the TTY session in characters
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerResize(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **h** | **Number**| Height of the TTY session in characters | [optional] 
 **w** | **Number**| Width of the TTY session in characters | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/octet-stream
 - **Accept**: text/plain

<a name="containerRestart"></a>
# **containerRestart**
> containerRestart(id, opts)

Restart a container

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  't': 56 // Number | Number of seconds to wait before killing the container
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerRestart(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **t** | **Number**| Number of seconds to wait before killing the container | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerStart"></a>
# **containerStart**
> containerStart(id, opts)

Start a container

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'detachKeys': "detachKeys_example" // String | Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerStart(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **detachKeys** | **String**| Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerStats"></a>
# **containerStats**
> Object containerStats(id, opts)

Get container stats based on resource usage

This endpoint returns a live stream of a container’s resource usage statistics.  The `precpu_stats` is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the `cpu_stats` field.  If either `precpu_stats.online_cpus` or `cpu_stats.online_cpus` is nil then for compatibility with older daemons the length of the corresponding `cpu_usage.percpu_usage` array should be used.  On a cgroup v2 host, the following fields are not set * `blkio_stats`: all fields other than `io_service_bytes_recursive` * `cpu_stats`: `cpu_usage.percpu_usage` * `memory_stats`: `max_usage` and `failcnt` Also, `memory_stats.stats` fields are incompatible with cgroup v1.  To calculate the values shown by the `stats` command of the docker cli tool the following formulas can be used: * used_memory = `memory_stats.usage - memory_stats.stats.cache` * available_memory = `memory_stats.limit` * Memory usage % = `(used_memory / available_memory) * 100.0` * cpu_delta = `cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage` * system_cpu_delta = `cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage` * number_cpus = `lenght(cpu_stats.cpu_usage.percpu_usage)` or `cpu_stats.online_cpus` * CPU usage % = `(cpu_delta / system_cpu_delta) * number_cpus * 100.0` 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'stream': true, // Boolean | Stream the output. If false, the stats will be output once and then it will disconnect. 
  'oneShot': false // Boolean | Only get a single stat instead of waiting for 2 cycles. Must be used with `stream=false`. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerStats(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **stream** | **Boolean**| Stream the output. If false, the stats will be output once and then it will disconnect.  | [optional] [default to true]
 **oneShot** | **Boolean**| Only get a single stat instead of waiting for 2 cycles. Must be used with `stream=false`.  | [optional] [default to false]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="containerStop"></a>
# **containerStop**
> containerStop(id, opts)

Stop a container

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  't': 56 // Number | Number of seconds to wait before killing the container
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerStop(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **t** | **Number**| Number of seconds to wait before killing the container | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerTop"></a>
# **containerTop**
> ContainerTopResponse containerTop(id, opts)

List processes running inside a container

On Unix systems, this is done by running the `ps` command. This endpoint is not supported on Windows. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'psArgs': "-ef" // String | The arguments to pass to `ps`. For example, `aux`
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerTop(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **psArgs** | **String**| The arguments to pass to `ps`. For example, `aux` | [optional] [default to -ef]

### Return type

[**ContainerTopResponse**](ContainerTopResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerUnpause"></a>
# **containerUnpause**
> containerUnpause(id)

Unpause a container

Resume a container which has been paused.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.containerUnpause(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="containerUpdate"></a>
# **containerUpdate**
> ContainerUpdateResponse containerUpdate(id, update)

Update a container

Change various configuration options of a container without having to recreate it. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var update = new DockerEngineApi.object(); // object | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerUpdate(id, update, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **update** | [**object**](.md)|  | 

### Return type

[**ContainerUpdateResponse**](ContainerUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="containerWait"></a>
# **containerWait**
> ContainerWaitResponse containerWait(id, opts)

Wait for a container

Block until a container stops, then returns the exit code.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var opts = { 
  'condition': "not-running" // String | Wait until a container state reaches the given condition, either 'not-running' (default), 'next-exit', or 'removed'. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerWait(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **condition** | **String**| Wait until a container state reaches the given condition, either 'not-running' (default), 'next-exit', or 'removed'.  | [optional] [default to not-running]

### Return type

[**ContainerWaitResponse**](ContainerWaitResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="putContainerArchive"></a>
# **putContainerArchive**
> putContainerArchive(id, path, inputStream, opts)

Extract an archive of files or folders to a directory in a container

Upload a tar archive to be extracted to a path in the filesystem of container id.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ContainerApi();

var id = "id_example"; // String | ID or name of the container

var path = "path_example"; // String | Path to a directory in the container to extract the archive’s contents into. 

var inputStream = "QmFzZTY0IGV4YW1wbGU="; // Blob | The input stream must be a tar archive compressed with one of the following algorithms: `identity` (no compression), `gzip`, `bzip2`, or `xz`. 

var opts = { 
  'noOverwriteDirNonDir': "noOverwriteDirNonDir_example", // String | If `1`, `true`, or `True` then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa. 
  'copyUIDGID': "copyUIDGID_example" // String | If `1`, `true`, then it will copy UID/GID maps to the dest file or dir 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.putContainerArchive(id, path, inputStream, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **path** | **String**| Path to a directory in the container to extract the archive’s contents into.  | 
 **inputStream** | **Blob**| The input stream must be a tar archive compressed with one of the following algorithms: `identity` (no compression), `gzip`, `bzip2`, or `xz`.  | 
 **noOverwriteDirNonDir** | **String**| If `1`, `true`, or `True` then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa.  | [optional] 
 **copyUIDGID** | **String**| If `1`, `true`, then it will copy UID/GID maps to the dest file or dir  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-tar, application/octet-stream
 - **Accept**: application/json, text/plain

