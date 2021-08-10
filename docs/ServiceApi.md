# DockerEngineApi.ServiceApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**serviceCreate**](ServiceApi.md#serviceCreate) | **POST** /services/create | Create a service
[**serviceDelete**](ServiceApi.md#serviceDelete) | **DELETE** /services/{id} | Delete a service
[**serviceInspect**](ServiceApi.md#serviceInspect) | **GET** /services/{id} | Inspect a service
[**serviceList**](ServiceApi.md#serviceList) | **GET** /services | List services
[**serviceLogs**](ServiceApi.md#serviceLogs) | **GET** /services/{id}/logs | Get service logs
[**serviceUpdate**](ServiceApi.md#serviceUpdate) | **POST** /services/{id}/update | Update a service


<a name="serviceCreate"></a>
# **serviceCreate**
> ServiceCreateResponse serviceCreate(body, opts)

Create a service

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ServiceApi();

var body = new DockerEngineApi.object(); // object | 

var opts = { 
  'xRegistryAuth': "xRegistryAuth_example" // String | A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceCreate(body, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**object**](.md)|  | 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 

### Return type

[**ServiceCreateResponse**](ServiceCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="serviceDelete"></a>
# **serviceDelete**
> serviceDelete(id)

Delete a service

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ServiceApi();

var id = "id_example"; // String | ID or name of service.


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.serviceDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of service. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="serviceInspect"></a>
# **serviceInspect**
> Service serviceInspect(id, opts)

Inspect a service

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ServiceApi();

var id = "id_example"; // String | ID or name of service.

var opts = { 
  'insertDefaults': false // Boolean | Fill empty fields with default values.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceInspect(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of service. | 
 **insertDefaults** | **Boolean**| Fill empty fields with default values. | [optional] [default to false]

### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="serviceList"></a>
# **serviceList**
> [Service] serviceList(opts)

List services

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ServiceApi();

var opts = { 
  'filters': "filters_example", // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the services list.  Available filters:  - `id=<service id>` - `label=<service label>` - `mode=[\"replicated\"|\"global\"]` - `name=<service name>` 
  'status': true // Boolean | Include service status, with count of running and desired tasks. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| A JSON encoded value of the filters (a `map[string][]string`) to process on the services list.  Available filters:  - `id=<service id>` - `label=<service label>` - `mode=[\"replicated\"|\"global\"]` - `name=<service name>`  | [optional] 
 **status** | **Boolean**| Include service status, with count of running and desired tasks.  | [optional] 

### Return type

[**[Service]**](Service.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="serviceLogs"></a>
# **serviceLogs**
> 'Blob' serviceLogs(id, opts)

Get service logs

Get `stdout` and `stderr` logs from a service. See also [`/containers/{id}/logs`](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the `local`, `json-file` or `journald` logging drivers. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ServiceApi();

var id = "id_example"; // String | ID or name of the service

var opts = { 
  'details': false, // Boolean | Show service context and extra details provided to logs.
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
apiInstance.serviceLogs(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of the service | 
 **details** | **Boolean**| Show service context and extra details provided to logs. | [optional] [default to false]
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

<a name="serviceUpdate"></a>
# **serviceUpdate**
> ServiceUpdateResponse serviceUpdate(id, body, version, opts)

Update a service

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ServiceApi();

var id = "id_example"; // String | ID or name of service.

var body = new DockerEngineApi.object(); // object | 

var version = 56; // Number | The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling `GET /services/{id}` 

var opts = { 
  'registryAuthFrom': "spec", // String | If the `X-Registry-Auth` header is not specified, this parameter indicates where to find registry authorization credentials. 
  'rollback': "rollback_example", // String | Set to this parameter to `previous` to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case. 
  'xRegistryAuth': "xRegistryAuth_example" // String | A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.serviceUpdate(id, body, version, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID or name of service. | 
 **body** | [**object**](.md)|  | 
 **version** | **Number**| The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling `GET /services/{id}`  | 
 **registryAuthFrom** | **String**| If the `X-Registry-Auth` header is not specified, this parameter indicates where to find registry authorization credentials.  | [optional] [default to spec]
 **rollback** | **String**| Set to this parameter to `previous` to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case.  | [optional] 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 

### Return type

[**ServiceUpdateResponse**](ServiceUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

