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



## serviceCreate

> ServiceCreateResponse serviceCreate(body, opts)

Create a service

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ServiceApi();
let body = new DockerEngineApi.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
let opts = {
  'xRegistryAuth': "xRegistryAuth_example" // String | A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
};
apiInstance.serviceCreate(body, opts, (error, data, response) => {
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
 **body** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 

### Return type

[**ServiceCreateResponse**](ServiceCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## serviceDelete

> serviceDelete(id)

Delete a service

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ServiceApi();
let id = "id_example"; // String | ID or name of service.
apiInstance.serviceDelete(id, (error, data, response) => {
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
 **id** | **String**| ID or name of service. | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## serviceInspect

> Service serviceInspect(id, opts)

Inspect a service

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ServiceApi();
let id = "id_example"; // String | ID or name of service.
let opts = {
  'insertDefaults': false // Boolean | Fill empty fields with default values.
};
apiInstance.serviceInspect(id, opts, (error, data, response) => {
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
 **id** | **String**| ID or name of service. | 
 **insertDefaults** | **Boolean**| Fill empty fields with default values. | [optional] [default to false]

### Return type

[**Service**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## serviceList

> [Service] serviceList(opts)

List services

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ServiceApi();
let opts = {
  'filters': "filters_example", // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the services list.  Available filters:  - `id=<service id>` - `label=<service label>` - `mode=[\"replicated\"|\"global\"]` - `name=<service name>` 
  'status': true // Boolean | Include service status, with count of running and desired tasks. 
};
apiInstance.serviceList(opts, (error, data, response) => {
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
 **filters** | **String**| A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the services list.  Available filters:  - &#x60;id&#x3D;&lt;service id&gt;&#x60; - &#x60;label&#x3D;&lt;service label&gt;&#x60; - &#x60;mode&#x3D;[\&quot;replicated\&quot;|\&quot;global\&quot;]&#x60; - &#x60;name&#x3D;&lt;service name&gt;&#x60;  | [optional] 
 **status** | **Boolean**| Include service status, with count of running and desired tasks.  | [optional] 

### Return type

[**[Service]**](Service.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## serviceLogs

> File serviceLogs(id, opts)

Get service logs

Get &#x60;stdout&#x60; and &#x60;stderr&#x60; logs from a service. See also [&#x60;/containers/{id}/logs&#x60;](#operation/ContainerLogs).  **Note**: This endpoint works only for services with the &#x60;local&#x60;, &#x60;json-file&#x60; or &#x60;journald&#x60; logging drivers. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ServiceApi();
let id = "id_example"; // String | ID or name of the service
let opts = {
  'details': false, // Boolean | Show service context and extra details provided to logs.
  'follow': false, // Boolean | Keep connection after returning logs.
  'stdout': false, // Boolean | Return logs from `stdout`
  'stderr': false, // Boolean | Return logs from `stderr`
  'since': 0, // Number | Only return logs since this time, as a UNIX timestamp
  'timestamps': false, // Boolean | Add timestamps to every log line
  'tail': "'all'" // String | Only return this number of log lines from the end of the logs. Specify as an integer or `all` to output all log lines. 
};
apiInstance.serviceLogs(id, opts, (error, data, response) => {
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
 **id** | **String**| ID or name of the service | 
 **details** | **Boolean**| Show service context and extra details provided to logs. | [optional] [default to false]
 **follow** | **Boolean**| Keep connection after returning logs. | [optional] [default to false]
 **stdout** | **Boolean**| Return logs from &#x60;stdout&#x60; | [optional] [default to false]
 **stderr** | **Boolean**| Return logs from &#x60;stderr&#x60; | [optional] [default to false]
 **since** | **Number**| Only return logs since this time, as a UNIX timestamp | [optional] [default to 0]
 **timestamps** | **Boolean**| Add timestamps to every log line | [optional] [default to false]
 **tail** | **String**| Only return this number of log lines from the end of the logs. Specify as an integer or &#x60;all&#x60; to output all log lines.  | [optional] [default to &#39;all&#39;]

### Return type

**File**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## serviceUpdate

> ServiceUpdateResponse serviceUpdate(id, version, body, opts)

Update a service

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.ServiceApi();
let id = "id_example"; // String | ID or name of service.
let version = 56; // Number | The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling `GET /services/{id}` 
let body = new DockerEngineApi.UNKNOWN_BASE_TYPE(); // UNKNOWN_BASE_TYPE | 
let opts = {
  'registryAuthFrom': "'spec'", // String | If the `X-Registry-Auth` header is not specified, this parameter indicates where to find registry authorization credentials. 
  'rollback': "rollback_example", // String | Set to this parameter to `previous` to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case. 
  'xRegistryAuth': "xRegistryAuth_example" // String | A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details. 
};
apiInstance.serviceUpdate(id, version, body, opts, (error, data, response) => {
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
 **id** | **String**| ID or name of service. | 
 **version** | **Number**| The version number of the service object being updated. This is required to avoid conflicting writes. This version number should be the value as currently set on the service *before* the update. You can find the current version by calling &#x60;GET /services/{id}&#x60;  | 
 **body** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | 
 **registryAuthFrom** | **String**| If the &#x60;X-Registry-Auth&#x60; header is not specified, this parameter indicates where to find registry authorization credentials.  | [optional] [default to &#39;spec&#39;]
 **rollback** | **String**| Set to this parameter to &#x60;previous&#x60; to cause a server-side rollback to the previous service spec. The supplied spec will be ignored in this case.  | [optional] 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration for pulling from private registries.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 

### Return type

[**ServiceUpdateResponse**](ServiceUpdateResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json

