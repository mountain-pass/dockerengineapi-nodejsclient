# DockerEngineApi.ConfigApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**configCreate**](ConfigApi.md#configCreate) | **POST** /configs/create | Create a config
[**configDelete**](ConfigApi.md#configDelete) | **DELETE** /configs/{id} | Delete a config
[**configInspect**](ConfigApi.md#configInspect) | **GET** /configs/{id} | Inspect a config
[**configList**](ConfigApi.md#configList) | **GET** /configs | List configs
[**configUpdate**](ConfigApi.md#configUpdate) | **POST** /configs/{id}/update | Update a Config


<a name="configCreate"></a>
# **configCreate**
> IdResponse configCreate(opts)

Create a config

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ConfigApi();

var opts = { 
  'body': new DockerEngineApi.object() // object | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configCreate(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**object**](.md)|  | [optional] 

### Return type

[**IdResponse**](IdResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="configDelete"></a>
# **configDelete**
> configDelete(id)

Delete a config

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ConfigApi();

var id = "id_example"; // String | ID of the config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the config | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="configInspect"></a>
# **configInspect**
> Config configInspect(id)

Inspect a config

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ConfigApi();

var id = "id_example"; // String | ID of the config


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the config | 

### Return type

[**Config**](Config.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="configList"></a>
# **configList**
> [Config] configList(opts)

List configs

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ConfigApi();

var opts = { 
  'filters': "filters_example" // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list.  Available filters:  - `id=<config id>` - `label=<key> or label=<key>=value` - `name=<config name>` - `names=<config name>` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.configList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| A JSON encoded value of the filters (a `map[string][]string`) to process on the configs list.  Available filters:  - `id=<config id>` - `label=<key> or label=<key>=value` - `name=<config name>` - `names=<config name>`  | [optional] 

### Return type

[**[Config]**](Config.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="configUpdate"></a>
# **configUpdate**
> configUpdate(id, version, opts)

Update a Config

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.ConfigApi();

var id = "id_example"; // String | The ID or name of the config

var version = 789; // Number | The version number of the config object being updated. This is required to avoid conflicting writes. 

var opts = { 
  'body': new DockerEngineApi.ConfigSpec() // ConfigSpec | The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.configUpdate(id, version, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or name of the config | 
 **version** | **Number**| The version number of the config object being updated. This is required to avoid conflicting writes.  | 
 **body** | [**ConfigSpec**](ConfigSpec.md)| The spec of the config to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [ConfigInspect endpoint](#operation/ConfigInspect) response values.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

