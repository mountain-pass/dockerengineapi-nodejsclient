# DockerEngineApi.SecretApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secretCreate**](SecretApi.md#secretCreate) | **POST** /secrets/create | Create a secret
[**secretDelete**](SecretApi.md#secretDelete) | **DELETE** /secrets/{id} | Delete a secret
[**secretInspect**](SecretApi.md#secretInspect) | **GET** /secrets/{id} | Inspect a secret
[**secretList**](SecretApi.md#secretList) | **GET** /secrets | List secrets
[**secretUpdate**](SecretApi.md#secretUpdate) | **POST** /secrets/{id}/update | Update a Secret


<a name="secretCreate"></a>
# **secretCreate**
> IdResponse secretCreate(opts)

Create a secret

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SecretApi();

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
apiInstance.secretCreate(opts, callback);
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

<a name="secretDelete"></a>
# **secretDelete**
> secretDelete(id)

Delete a secret

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SecretApi();

var id = "id_example"; // String | ID of the secret


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.secretDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the secret | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="secretInspect"></a>
# **secretInspect**
> Secret secretInspect(id)

Inspect a secret

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SecretApi();

var id = "id_example"; // String | ID of the secret


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.secretInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| ID of the secret | 

### Return type

[**Secret**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="secretList"></a>
# **secretList**
> [Secret] secretList(opts)

List secrets

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SecretApi();

var opts = { 
  'filters': "filters_example" // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list.  Available filters:  - `id=<secret id>` - `label=<key> or label=<key>=value` - `name=<secret name>` - `names=<secret name>` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.secretList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list.  Available filters:  - `id=<secret id>` - `label=<key> or label=<key>=value` - `name=<secret name>` - `names=<secret name>`  | [optional] 

### Return type

[**[Secret]**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="secretUpdate"></a>
# **secretUpdate**
> secretUpdate(id, version, opts)

Update a Secret

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SecretApi();

var id = "id_example"; // String | The ID or name of the secret

var version = 789; // Number | The version number of the secret object being updated. This is required to avoid conflicting writes. 

var opts = { 
  'body': new DockerEngineApi.SecretSpec() // SecretSpec | The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.secretUpdate(id, version, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or name of the secret | 
 **version** | **Number**| The version number of the secret object being updated. This is required to avoid conflicting writes.  | 
 **body** | [**SecretSpec**](SecretSpec.md)| The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values.  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

