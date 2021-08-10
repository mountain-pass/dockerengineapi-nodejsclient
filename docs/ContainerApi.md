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



## containerArchive

> containerArchive(id, path)

Get an archive of a filesystem resource in a container

Get a tar archive of a resource in the filesystem of container id.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let path = "path_example"; // String | Resource in the container’s filesystem to archive.
apiInstance.containerArchive(id, path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/x-tar, application/json


## containerArchiveInfo

> containerArchiveInfo(id, path)

Get information about files in a container

A response header &#x60;X-Docker-Container-Path-Stat&#x60; is returned, containing a base64 - encoded JSON object with some filesystem header information about the path. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let path = "path_example"; // String | Resource in the container’s filesystem to archive.
apiInstance.containerArchiveInfo(id, path, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerAttach

> containerAttach(id, opts)

Attach to a container

Attach to a container to read its output or send it input. You can attach to the same container multiple times and you can reattach to containers that have been detached.  Either the &#x60;stream&#x60; or &#x60;logs&#x60; parameter must be &#x60;true&#x60; for this endpoint to do anything.  See the [documentation for the &#x60;docker attach&#x60; command](/engine/reference/commandline/attach/) for more details.  ### Hijacking  This endpoint hijacks the HTTP connection to transport &#x60;stdin&#x60;, &#x60;stdout&#x60;, and &#x60;stderr&#x60; on the same socket.  This is the response from the daemon for an attach request:  &#x60;&#x60;&#x60; HTTP/1.1 200 OK Content-Type: application/vnd.docker.raw-stream  [STREAM] &#x60;&#x60;&#x60;  After the headers and two new lines, the TCP connection can now be used for raw, bidirectional communication between the client and server.  To hint potential proxies about connection hijacking, the Docker client can also optionally send connection upgrade headers.  For example, the client sends this request to upgrade the connection:  &#x60;&#x60;&#x60; POST /containers/16253994b7c4/attach?stream&#x3D;1&amp;stdout&#x3D;1 HTTP/1.1 Upgrade: tcp Connection: Upgrade &#x60;&#x60;&#x60;  The Docker daemon will respond with a &#x60;101 UPGRADED&#x60; response, and will similarly follow with the raw stream:  &#x60;&#x60;&#x60; HTTP/1.1 101 UPGRADED Content-Type: application/vnd.docker.raw-stream Connection: Upgrade Upgrade: tcp  [STREAM] &#x60;&#x60;&#x60;  ### Stream format  When the TTY setting is disabled in [&#x60;POST /containers/create&#x60;](#operation/ContainerCreate), the stream over the hijacked connected is multiplexed to separate out &#x60;stdout&#x60; and &#x60;stderr&#x60;. The stream consists of a series of frames, each containing a header and a payload.  The header contains the information which the stream writes (&#x60;stdout&#x60; or &#x60;stderr&#x60;). It also contains the size of the associated frame encoded in the last four bytes (&#x60;uint32&#x60;).  It is encoded on the first eight bytes like this:  &#x60;&#x60;&#x60;go header :&#x3D; [8]byte{STREAM_TYPE, 0, 0, 0, SIZE1, SIZE2, SIZE3, SIZE4} &#x60;&#x60;&#x60;  &#x60;STREAM_TYPE&#x60; can be:  - 0: &#x60;stdin&#x60; (is written on &#x60;stdout&#x60;) - 1: &#x60;stdout&#x60; - 2: &#x60;stderr&#x60;  &#x60;SIZE1, SIZE2, SIZE3, SIZE4&#x60; are the four bytes of the &#x60;uint32&#x60; size encoded as big endian.  Following the header is the payload, which is the specified number of bytes of &#x60;STREAM_TYPE&#x60;.  The simplest way to implement this protocol is the following:  1. Read 8 bytes. 2. Choose &#x60;stdout&#x60; or &#x60;stderr&#x60; depending on the first byte. 3. Extract the frame size from the last four bytes. 4. Read the extracted size and output it on the correct output. 5. Goto 1.  ### Stream format when using a TTY  When the TTY setting is enabled in [&#x60;POST /containers/create&#x60;](#operation/ContainerCreate), the stream is not multiplexed. The data exchanged over the hijacked connection is simply the raw data from the process PTY and client&#39;s &#x60;stdin&#x60;. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'detachKeys': "detachKeys_example", // String | Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`. 
  'logs': false, // Boolean | Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If `stream` is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output. 
  'stream': false, // Boolean | Stream attached streams from the time the request was made onwards. 
  'stdin': false, // Boolean | Attach to `stdin`
  'stdout': false, // Boolean | Attach to `stdout`
  'stderr': false // Boolean | Attach to `stderr`
};
apiInstance.containerAttach(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **detachKeys** | **String**| Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;.  | [optional] 
 **logs** | **Boolean**| Replay previous logs from the container.  This is useful for attaching to a container that has started and you want to output everything since the container started.  If &#x60;stream&#x60; is also enabled, once all the previous output has been returned, it will seamlessly transition into streaming current output.  | [optional] [default to false]
 **stream** | **Boolean**| Stream attached streams from the time the request was made onwards.  | [optional] [default to false]
 **stdin** | **Boolean**| Attach to &#x60;stdin&#x60; | [optional] [default to false]
 **stdout** | **Boolean**| Attach to &#x60;stdout&#x60; | [optional] [default to false]
 **stderr** | **Boolean**| Attach to &#x60;stderr&#x60; | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.docker.raw-stream, application/json


## containerAttachWebsocket

> containerAttachWebsocket(id, opts)

Attach to a container via a websocket

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'detachKeys': "detachKeys_example", // String | Override the key sequence for detaching a container.Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,`, or `_`. 
  'logs': false, // Boolean | Return logs
  'stream': false, // Boolean | Return stream
  'stdin': false, // Boolean | Attach to `stdin`
  'stdout': false, // Boolean | Attach to `stdout`
  'stderr': false // Boolean | Attach to `stderr`
};
apiInstance.containerAttachWebsocket(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **detachKeys** | **String**| Override the key sequence for detaching a container.Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60;, or &#x60;_&#x60;.  | [optional] 
 **logs** | **Boolean**| Return logs | [optional] [default to false]
 **stream** | **Boolean**| Return stream | [optional] [default to false]
 **stdin** | **Boolean**| Attach to &#x60;stdin&#x60; | [optional] [default to false]
 **stdout** | **Boolean**| Attach to &#x60;stdout&#x60; | [optional] [default to false]
 **stderr** | **Boolean**| Attach to &#x60;stderr&#x60; | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerChanges

> [ContainerChangeResponseItem] containerChanges(id)

Get changes on a container’s filesystem

Returns which files in a container&#39;s filesystem have been added, deleted, or modified. The &#x60;Kind&#x60; of modification can be one of:  - &#x60;0&#x60;: Modified - &#x60;1&#x60;: Added - &#x60;2&#x60;: Deleted 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
apiInstance.containerChanges(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/json


## containerCreate

> ContainerCreateResponse containerCreate(body, opts)

Create a container

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let body = new DockerEngineApi.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | Container to create
let opts = {
  'name': "name_example" // String | Assign the specified name to the container. Must match `/?[a-zA-Z0-9][a-zA-Z0-9_.-]+`. 
};
apiInstance.containerCreate(body, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)| Container to create | 
 **name** | **String**| Assign the specified name to the container. Must match &#x60;/?[a-zA-Z0-9][a-zA-Z0-9_.-]+&#x60;.  | [optional] 

### Return type

[**ContainerCreateResponse**](ContainerCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, application/octet-stream
- **Accept**: application/json


## containerDelete

> containerDelete(id, opts)

Remove a container

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'v': false, // Boolean | Remove anonymous volumes associated with the container.
  'force': false, // Boolean | If the container is running, kill it before removing it.
  'link': false // Boolean | Remove the specified link associated with the container.
};
apiInstance.containerDelete(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerExport

> containerExport(id)

Export a container

Export the contents of a container as a tarball.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
apiInstance.containerExport(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/octet-stream, application/json


## containerInspect

> ContainerInspectResponse containerInspect(id, opts)

Inspect a container

Return low-level information about a container.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'size': false // Boolean | Return the size of container as fields `SizeRw` and `SizeRootFs`
};
apiInstance.containerInspect(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **size** | **Boolean**| Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60; | [optional] [default to false]

### Return type

[**ContainerInspectResponse**](ContainerInspectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## containerKill

> containerKill(id, opts)

Kill a container

Send a POSIX signal to a container, defaulting to killing to the container. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'signal': "'SIGKILL'" // String | Signal to send to the container as an integer or string (e.g. `SIGINT`)
};
apiInstance.containerKill(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **signal** | **String**| Signal to send to the container as an integer or string (e.g. &#x60;SIGINT&#x60;) | [optional] [default to &#39;SIGKILL&#39;]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerList

> [Object] containerList(opts)

List containers

Returns a list of containers. For details on the format, see the [inspect endpoint](#operation/ContainerInspect).  Note that it uses a different, smaller representation of a container than inspecting a single container. For example, the list of linked containers is not propagated . 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let opts = {
  'all': false, // Boolean | Return all containers. By default, only running containers are shown. 
  'limit': 56, // Number | Return this number of most recently created containers, including non-running ones. 
  'size': false, // Boolean | Return the size of container as fields `SizeRw` and `SizeRootFs`. 
  'filters': "filters_example" // String | Filters to process on the container list, encoded as JSON (a `map[string][]string`). For example, `{\"status\": [\"paused\"]}` will only return paused containers.  Available filters:  - `ancestor`=(`<image-name>[:<tag>]`, `<image id>`, or `<image@digest>`) - `before`=(`<container id>` or `<container name>`) - `expose`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `exited=<int>` containers with exit code of `<int>` - `health`=(`starting`|`healthy`|`unhealthy`|`none`) - `id=<ID>` a container's ID - `isolation=`(`default`|`process`|`hyperv`) (Windows daemon only) - `is-task=`(`true`|`false`) - `label=key` or `label=\"key=value\"` of a container label - `name=<name>` a container's name - `network`=(`<network id>` or `<network name>`) - `publish`=(`<port>[/<proto>]`|`<startport-endport>/[<proto>]`) - `since`=(`<container id>` or `<container name>`) - `status=`(`created`|`restarting`|`running`|`removing`|`paused`|`exited`|`dead`) - `volume`=(`<volume name>` or `<mount point destination>`) 
};
apiInstance.containerList(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **all** | **Boolean**| Return all containers. By default, only running containers are shown.  | [optional] [default to false]
 **limit** | **Number**| Return this number of most recently created containers, including non-running ones.  | [optional] 
 **size** | **Boolean**| Return the size of container as fields &#x60;SizeRw&#x60; and &#x60;SizeRootFs&#x60;.  | [optional] [default to false]
 **filters** | **String**| Filters to process on the container list, encoded as JSON (a &#x60;map[string][]string&#x60;). For example, &#x60;{\&quot;status\&quot;: [\&quot;paused\&quot;]}&#x60; will only return paused containers.  Available filters:  - &#x60;ancestor&#x60;&#x3D;(&#x60;&lt;image-name&gt;[:&lt;tag&gt;]&#x60;, &#x60;&lt;image id&gt;&#x60;, or &#x60;&lt;image@digest&gt;&#x60;) - &#x60;before&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;expose&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;exited&#x3D;&lt;int&gt;&#x60; containers with exit code of &#x60;&lt;int&gt;&#x60; - &#x60;health&#x60;&#x3D;(&#x60;starting&#x60;|&#x60;healthy&#x60;|&#x60;unhealthy&#x60;|&#x60;none&#x60;) - &#x60;id&#x3D;&lt;ID&gt;&#x60; a container&#39;s ID - &#x60;isolation&#x3D;&#x60;(&#x60;default&#x60;|&#x60;process&#x60;|&#x60;hyperv&#x60;) (Windows daemon only) - &#x60;is-task&#x3D;&#x60;(&#x60;true&#x60;|&#x60;false&#x60;) - &#x60;label&#x3D;key&#x60; or &#x60;label&#x3D;\&quot;key&#x3D;value\&quot;&#x60; of a container label - &#x60;name&#x3D;&lt;name&gt;&#x60; a container&#39;s name - &#x60;network&#x60;&#x3D;(&#x60;&lt;network id&gt;&#x60; or &#x60;&lt;network name&gt;&#x60;) - &#x60;publish&#x60;&#x3D;(&#x60;&lt;port&gt;[/&lt;proto&gt;]&#x60;|&#x60;&lt;startport-endport&gt;/[&lt;proto&gt;]&#x60;) - &#x60;since&#x60;&#x3D;(&#x60;&lt;container id&gt;&#x60; or &#x60;&lt;container name&gt;&#x60;) - &#x60;status&#x3D;&#x60;(&#x60;created&#x60;|&#x60;restarting&#x60;|&#x60;running&#x60;|&#x60;removing&#x60;|&#x60;paused&#x60;|&#x60;exited&#x60;|&#x60;dead&#x60;) - &#x60;volume&#x60;&#x3D;(&#x60;&lt;volume name&gt;&#x60; or &#x60;&lt;mount point destination&gt;&#x60;)  | [optional] 

### Return type

**[Object]**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## containerLogs

> File containerLogs(id, opts)

Get container logs

Get &#x60;stdout&#x60; and &#x60;stderr&#x60; logs from a container.  Note: This endpoint works only for containers with the &#x60;json-file&#x60; or &#x60;journald&#x60; logging driver. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'follow': false, // Boolean | Keep connection after returning logs.
  'stdout': false, // Boolean | Return logs from `stdout`
  'stderr': false, // Boolean | Return logs from `stderr`
  'since': 0, // Number | Only return logs since this time, as a UNIX timestamp
  'until': 0, // Number | Only return logs before this time, as a UNIX timestamp
  'timestamps': false, // Boolean | Add timestamps to every log line
  'tail': "'all'" // String | Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines. 
};
apiInstance.containerLogs(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **follow** | **Boolean**| Keep connection after returning logs. | [optional] [default to false]
 **stdout** | **Boolean**| Return logs from &#x60;stdout&#x60; | [optional] [default to false]
 **stderr** | **Boolean**| Return logs from &#x60;stderr&#x60; | [optional] [default to false]
 **since** | **Number**| Only return logs since this time, as a UNIX timestamp | [optional] [default to 0]
 **until** | **Number**| Only return logs before this time, as a UNIX timestamp | [optional] [default to 0]
 **timestamps** | **Boolean**| Add timestamps to every log line | [optional] [default to false]
 **tail** | **String**| Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines.  | [optional] [default to &#39;all&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerPause

> containerPause(id)

Pause a container

Use the freezer cgroup to suspend all processes in a container.  Traditionally, when suspending a process the &#x60;SIGSTOP&#x60; signal is used, which is observable by the process being suspended. With the freezer cgroup the process is unaware, and unable to capture, that it is being suspended, and subsequently resumed. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
apiInstance.containerPause(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerPrune

> ContainerPruneResponse containerPrune(opts)

Delete stopped containers

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let opts = {
  'filters': "filters_example" // String | Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune containers created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune containers with (or without, in case `label!=...` is used) the specified labels. 
};
apiInstance.containerPrune(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| Filters to process on the prune list, encoded as JSON (a &#x60;map[string][]string&#x60;).  Available filters: - &#x60;until&#x3D;&lt;timestamp&gt;&#x60; Prune containers created before this timestamp. The &#x60;&lt;timestamp&gt;&#x60; can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. &#x60;10m&#x60;, &#x60;1h30m&#x60;) computed relative to the daemon machine’s time. - &#x60;label&#x60; (&#x60;label&#x3D;&lt;key&gt;&#x60;, &#x60;label&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;, &#x60;label!&#x3D;&lt;key&gt;&#x60;, or &#x60;label!&#x3D;&lt;key&gt;&#x3D;&lt;value&gt;&#x60;) Prune containers with (or without, in case &#x60;label!&#x3D;...&#x60; is used) the specified labels.  | [optional] 

### Return type

[**ContainerPruneResponse**](ContainerPruneResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## containerRename

> containerRename(id, name)

Rename a container

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let name = "name_example"; // String | New name for the container
apiInstance.containerRename(id, name, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerResize

> containerResize(id, opts)

Resize a container TTY

Resize the TTY for a container.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'h': 56, // Number | Height of the TTY session in characters
  'w': 56 // Number | Width of the TTY session in characters
};
apiInstance.containerResize(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json


## containerRestart

> containerRestart(id, opts)

Restart a container

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  't': 56 // Number | Number of seconds to wait before killing the container
};
apiInstance.containerRestart(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerStart

> containerStart(id, opts)

Start a container

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'detachKeys': "detachKeys_example" // String | Override the key sequence for detaching a container. Format is a single character `[a-Z]` or `ctrl-<value>` where `<value>` is one of: `a-z`, `@`, `^`, `[`, `,` or `_`. 
};
apiInstance.containerStart(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **detachKeys** | **String**| Override the key sequence for detaching a container. Format is a single character &#x60;[a-Z]&#x60; or &#x60;ctrl-&lt;value&gt;&#x60; where &#x60;&lt;value&gt;&#x60; is one of: &#x60;a-z&#x60;, &#x60;@&#x60;, &#x60;^&#x60;, &#x60;[&#x60;, &#x60;,&#x60; or &#x60;_&#x60;.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerStats

> Object containerStats(id, opts)

Get container stats based on resource usage

This endpoint returns a live stream of a container’s resource usage statistics.  The &#x60;precpu_stats&#x60; is the CPU statistic of the *previous* read, and is used to calculate the CPU usage percentage. It is not an exact copy of the &#x60;cpu_stats&#x60; field.  If either &#x60;precpu_stats.online_cpus&#x60; or &#x60;cpu_stats.online_cpus&#x60; is nil then for compatibility with older daemons the length of the corresponding &#x60;cpu_usage.percpu_usage&#x60; array should be used.  On a cgroup v2 host, the following fields are not set * &#x60;blkio_stats&#x60;: all fields other than &#x60;io_service_bytes_recursive&#x60; * &#x60;cpu_stats&#x60;: &#x60;cpu_usage.percpu_usage&#x60; * &#x60;memory_stats&#x60;: &#x60;max_usage&#x60; and &#x60;failcnt&#x60; Also, &#x60;memory_stats.stats&#x60; fields are incompatible with cgroup v1.  To calculate the values shown by the &#x60;stats&#x60; command of the docker cli tool the following formulas can be used: * used_memory &#x3D; &#x60;memory_stats.usage - memory_stats.stats.cache&#x60; * available_memory &#x3D; &#x60;memory_stats.limit&#x60; * Memory usage % &#x3D; &#x60;(used_memory / available_memory) * 100.0&#x60; * cpu_delta &#x3D; &#x60;cpu_stats.cpu_usage.total_usage - precpu_stats.cpu_usage.total_usage&#x60; * system_cpu_delta &#x3D; &#x60;cpu_stats.system_cpu_usage - precpu_stats.system_cpu_usage&#x60; * number_cpus &#x3D; &#x60;lenght(cpu_stats.cpu_usage.percpu_usage)&#x60; or &#x60;cpu_stats.online_cpus&#x60; * CPU usage % &#x3D; &#x60;(cpu_delta / system_cpu_delta) * number_cpus * 100.0&#x60; 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'stream': true, // Boolean | Stream the output. If false, the stats will be output once and then it will disconnect. 
  'oneShot': false // Boolean | Only get a single stat instead of waiting for 2 cycles. Must be used with `stream=false`. 
};
apiInstance.containerStats(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **stream** | **Boolean**| Stream the output. If false, the stats will be output once and then it will disconnect.  | [optional] [default to true]
 **oneShot** | **Boolean**| Only get a single stat instead of waiting for 2 cycles. Must be used with &#x60;stream&#x3D;false&#x60;.  | [optional] [default to false]

### Return type

**Object**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## containerStop

> containerStop(id, opts)

Stop a container

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  't': 56 // Number | Number of seconds to wait before killing the container
};
apiInstance.containerStop(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerTop

> ContainerTopResponse containerTop(id, opts)

List processes running inside a container

On Unix systems, this is done by running the &#x60;ps&#x60; command. This endpoint is not supported on Windows. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'psArgs': "'-ef'" // String | The arguments to pass to `ps`. For example, `aux`
};
apiInstance.containerTop(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **psArgs** | **String**| The arguments to pass to &#x60;ps&#x60;. For example, &#x60;aux&#x60; | [optional] [default to &#39;-ef&#39;]

### Return type

[**ContainerTopResponse**](ContainerTopResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerUnpause

> containerUnpause(id)

Unpause a container

Resume a container which has been paused.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
apiInstance.containerUnpause(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
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

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## containerUpdate

> ContainerUpdateResponse containerUpdate(id, update)

Update a container

Change various configuration options of a container without having to recreate it. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let update = new DockerEngineApi.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
apiInstance.containerUpdate(id, update, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **update** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 

### Return type

[**ContainerUpdateResponse**](ContainerUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## containerWait

> ContainerWaitResponse containerWait(id, opts)

Wait for a container

Block until a container stops, then returns the exit code.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let opts = {
  'condition': "'not-running'" // String | Wait until a container state reaches the given condition, either 'not-running' (default), 'next-exit', or 'removed'. 
};
apiInstance.containerWait(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **condition** | **String**| Wait until a container state reaches the given condition, either &#39;not-running&#39; (default), &#39;next-exit&#39;, or &#39;removed&#39;.  | [optional] [default to &#39;not-running&#39;]

### Return type

[**ContainerWaitResponse**](ContainerWaitResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## putContainerArchive

> putContainerArchive(id, path, inputStream, opts)

Extract an archive of files or folders to a directory in a container

Upload a tar archive to be extracted to a path in the filesystem of container id.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ContainerApi();
let id = "id_example"; // String | ID or name of the container
let path = "path_example"; // String | Path to a directory in the container to extract the archive’s contents into. 
let inputStream = "/path/to/file"; // File | The input stream must be a tar archive compressed with one of the following algorithms: `identity` (no compression), `gzip`, `bzip2`, or `xz`. 
let opts = {
  'noOverwriteDirNonDir': "noOverwriteDirNonDir_example", // String | If `1`, `true`, or `True` then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa. 
  'copyUIDGID': "copyUIDGID_example" // String | If `1`, `true`, then it will copy UID/GID maps to the dest file or dir 
};
apiInstance.putContainerArchive(id, path, inputStream, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the container | 
 **path** | **String**| Path to a directory in the container to extract the archive’s contents into.  | 
 **inputStream** | **File**| The input stream must be a tar archive compressed with one of the following algorithms: &#x60;identity&#x60; (no compression), &#x60;gzip&#x60;, &#x60;bzip2&#x60;, or &#x60;xz&#x60;.  | 
 **noOverwriteDirNonDir** | **String**| If &#x60;1&#x60;, &#x60;true&#x60;, or &#x60;True&#x60; then it will be an error if unpacking the given content would cause an existing directory to be replaced with a non-directory and vice versa.  | [optional] 
 **copyUIDGID** | **String**| If &#x60;1&#x60;, &#x60;true&#x60;, then it will copy UID/GID maps to the dest file or dir  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-tar, application/octet-stream
- **Accept**: application/json, text/plain

