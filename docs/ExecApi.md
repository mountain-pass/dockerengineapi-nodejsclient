# DockerEngineApi.ExecApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**containerExec**](ExecApi.md#containerExec) | **POST** /containers/{id}/exec | Create an exec instance
[**execInspect**](ExecApi.md#execInspect) | **GET** /exec/{id}/json | Inspect an exec instance
[**execResize**](ExecApi.md#execResize) | **POST** /exec/{id}/resize | Resize an exec instance
[**execStart**](ExecApi.md#execStart) | **POST** /exec/{id}/start | Start an exec instance


<a name="containerExec"></a>
# **containerExec**
> IdResponse containerExec(execConfig, id)

Create an exec instance

Run a command inside a running container.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ExecApi();

var execConfig = new DockerEngineApi.ExecConfig(); // ExecConfig | Exec configuration

var id = "id_example"; // String | ID or name of container


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.containerExec(execConfig, id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **execConfig** | [**ExecConfig**](ExecConfig.md)| Exec configuration | 
 **id** | **String**| ID or name of container | 

### Return type

[**IdResponse**](IdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="execInspect"></a>
# **execInspect**
> ExecInspectResponse execInspect(id)

Inspect an exec instance

Return low-level information about an exec instance.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ExecApi();

var id = "id_example"; // String | Exec instance ID


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.execInspect(id, callback);
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

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="execResize"></a>
# **execResize**
> execResize(id, opts)

Resize an exec instance

Resize the TTY session used by an exec instance. This endpoint only works if `tty` was specified as part of creating and starting the exec instance. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ExecApi();

var id = "id_example"; // String | Exec instance ID

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
apiInstance.execResize(id, opts, callback);
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

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="execStart"></a>
# **execStart**
> execStart(id, opts)

Start an exec instance

Starts a previously set up exec instance. If detach is true, this endpoint returns immediately after starting the command. Otherwise, it sets up an interactive session with the command. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ExecApi();

var id = "id_example"; // String | Exec instance ID

var opts = { 
  'execStartConfig': new DockerEngineApi.ExecStartConfig() // ExecStartConfig | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.execStart(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Exec instance ID | 
 **execStartConfig** | [**ExecStartConfig**](ExecStartConfig.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/vnd.docker.raw-stream

