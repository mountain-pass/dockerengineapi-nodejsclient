# DockerEngineApi.ExecApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerExec**](ExecApi.md#containerExec) | **POST** /containers/{id}/exec | Create an exec instance
[**execInspect**](ExecApi.md#execInspect) | **GET** /exec/{id}/json | Inspect an exec instance
[**execResize**](ExecApi.md#execResize) | **POST** /exec/{id}/resize | Resize an exec instance
[**execStart**](ExecApi.md#execStart) | **POST** /exec/{id}/start | Start an exec instance



## containerExec

> IdResponse containerExec(id, execConfig)

Create an exec instance

Run a command inside a running container.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ExecApi();
let id = "id_example"; // String | ID or name of container
let execConfig = new DockerEngineApi.InlineObject(); // InlineObject | 
apiInstance.containerExec(id, execConfig, (error, data, response) => {
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
 **id** | **String**| ID or name of container | 
 **execConfig** | [**InlineObject**](InlineObject.md)|  | 

### Return type

[**IdResponse**](IdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## execInspect

> ExecInspectResponse execInspect(id)

Inspect an exec instance

Return low-level information about an exec instance.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ExecApi();
let id = "id_example"; // String | Exec instance ID
apiInstance.execInspect(id, (error, data, response) => {
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
 **id** | **String**| Exec instance ID | 

### Return type

[**ExecInspectResponse**](ExecInspectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## execResize

> execResize(id, opts)

Resize an exec instance

Resize the TTY session used by an exec instance. This endpoint only works if &#x60;tty&#x60; was specified as part of creating and starting the exec instance. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ExecApi();
let id = "id_example"; // String | Exec instance ID
let opts = {
  'h': 56, // Number | Height of the TTY session in characters
  'w': 56 // Number | Width of the TTY session in characters
};
apiInstance.execResize(id, opts, (error, data, response) => {
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
 **id** | **String**| Exec instance ID | 
 **h** | **Number**| Height of the TTY session in characters | [optional] 
 **w** | **Number**| Width of the TTY session in characters | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## execStart

> execStart(id, opts)

Start an exec instance

Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ExecApi();
let id = "id_example"; // String | Exec instance ID
let opts = {
  'execStartConfig': new DockerEngineApi.InlineObject1() // InlineObject1 | 
};
apiInstance.execStart(id, opts, (error, data, response) => {
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
 **id** | **String**| Exec instance ID | 
 **execStartConfig** | [**InlineObject1**](InlineObject1.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/vnd.docker.raw-stream

