# DockerEngineApi.TaskApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taskInspect**](TaskApi.md#taskInspect) | **GET** /tasks/{id} | Inspect a task
[**taskList**](TaskApi.md#taskList) | **GET** /tasks | List tasks
[**taskLogs**](TaskApi.md#taskLogs) | **GET** /tasks/{id}/logs | Get task logs


<a name="taskInspect"></a>
# **taskInspect**
> Task taskInspect(id)

Inspect a task

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.TaskApi();

var id = "id_example"; // String | ID of the task


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taskInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the task | 

### Return type

[**Task**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="taskList"></a>
# **taskList**
> [Task] taskList(opts)

List tasks

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.TaskApi();

var opts = { 
  'filters': "filters_example" // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the tasks list.  Available filters:  - `desired-state=(running | shutdown | accepted)` - `id=<task id>` - `label=key` or `label=\"key=value\"` - `name=<task name>` - `node=<node id or name>` - `service=<service name>` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.taskList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| A JSON encoded value of the filters (a `map[string][]string`) to process on the tasks list.  Available filters:  - `desired-state=(running | shutdown | accepted)` - `id=<task id>` - `label=key` or `label=\"key=value\"` - `name=<task name>` - `node=<node id or name>` - `service=<service name>`  | [optional] 

### Return type

[**[Task]**](Task.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="taskLogs"></a>
# **taskLogs**
> 'Blob' taskLogs(id, opts)

Get task logs

Get `stdout` and `stderr` logs from a task. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.TaskApi();

var id = "id_example"; // String | ID of the task

var opts = { 
  'details': false, // Boolean | Show task context and extra details provided to logs.
  'follow': false, // Boolean | Keep connection after returning logs.
  'stdout': false, // Boolean | Return logs from `stdout`
  'stderr': false, // Boolean | Return logs from `stderr`
  'since': 0, // Number | Only return logs since this time, as a UNIX timestamp
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
apiInstance.taskLogs(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the task | 
 **details** | **Boolean**| Show task context and extra details provided to logs. | [optional] [default to false]
 **follow** | **Boolean**| Keep connection after returning logs. | [optional] [default to false]
 **stdout** | **Boolean**| Return logs from `stdout` | [optional] [default to false]
 **stderr** | **Boolean**| Return logs from `stderr` | [optional] [default to false]
 **since** | **Number**| Only return logs since this time, as a UNIX timestamp | [optional] [default to 0]
 **timestamps** | **Boolean**| Add timestamps to every log line | [optional] [default to false]
 **tail** | **String**| Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines.  | [optional] [default to all]

### Return type

**'Blob'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

