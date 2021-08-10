# DockerEngineApi.SwarmApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**swarmInit**](SwarmApi.md#swarmInit) | **POST** /swarm/init | Initialize a new swarm
[**swarmInspect**](SwarmApi.md#swarmInspect) | **GET** /swarm | Inspect swarm
[**swarmJoin**](SwarmApi.md#swarmJoin) | **POST** /swarm/join | Join an existing swarm
[**swarmLeave**](SwarmApi.md#swarmLeave) | **POST** /swarm/leave | Leave a swarm
[**swarmUnlock**](SwarmApi.md#swarmUnlock) | **POST** /swarm/unlock | Unlock a locked manager
[**swarmUnlockkey**](SwarmApi.md#swarmUnlockkey) | **GET** /swarm/unlockkey | Get the unlock key
[**swarmUpdate**](SwarmApi.md#swarmUpdate) | **POST** /swarm/update | Update a swarm


<a name="swarmInit"></a>
# **swarmInit**
> 'String' swarmInit(body)

Initialize a new swarm

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SwarmApi();

var body = new DockerEngineApi.Body1(); // Body1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.swarmInit(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body1**](Body1.md)|  | 

### Return type

**'String'**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="swarmInspect"></a>
# **swarmInspect**
> Swarm swarmInspect()

Inspect swarm

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SwarmApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.swarmInspect(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**Swarm**](Swarm.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="swarmJoin"></a>
# **swarmJoin**
> swarmJoin(body)

Join an existing swarm

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SwarmApi();

var body = new DockerEngineApi.Body2(); // Body2 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.swarmJoin(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body2**](Body2.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="swarmLeave"></a>
# **swarmLeave**
> swarmLeave(opts)

Leave a swarm

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SwarmApi();

var opts = { 
  'force': false // Boolean | Force leave swarm, even if this is the last manager or that it will break the cluster. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.swarmLeave(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **force** | **Boolean**| Force leave swarm, even if this is the last manager or that it will break the cluster.  | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="swarmUnlock"></a>
# **swarmUnlock**
> swarmUnlock(body)

Unlock a locked manager

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SwarmApi();

var body = new DockerEngineApi.Body3(); // Body3 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.swarmUnlock(body, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**Body3**](Body3.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="swarmUnlockkey"></a>
# **swarmUnlockkey**
> UnlockKeyResponse swarmUnlockkey()

Get the unlock key

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SwarmApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.swarmUnlockkey(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

[**UnlockKeyResponse**](UnlockKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

<a name="swarmUpdate"></a>
# **swarmUpdate**
> swarmUpdate(body, version, opts)

Update a swarm

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SwarmApi();

var body = new DockerEngineApi.SwarmSpec(); // SwarmSpec | 

var version = 789; // Number | The version number of the swarm object being updated. This is required to avoid conflicting writes. 

var opts = { 
  'rotateWorkerToken': false, // Boolean | Rotate the worker join token.
  'rotateManagerToken': false, // Boolean | Rotate the manager join token.
  'rotateManagerUnlockKey': false // Boolean | Rotate the manager unlock key.
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.swarmUpdate(body, version, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SwarmSpec**](SwarmSpec.md)|  | 
 **version** | **Number**| The version number of the swarm object being updated. This is required to avoid conflicting writes.  | 
 **rotateWorkerToken** | **Boolean**| Rotate the worker join token. | [optional] [default to false]
 **rotateManagerToken** | **Boolean**| Rotate the manager join token. | [optional] [default to false]
 **rotateManagerUnlockKey** | **Boolean**| Rotate the manager unlock key. | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

