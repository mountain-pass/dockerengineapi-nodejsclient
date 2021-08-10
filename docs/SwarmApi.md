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



## swarmInit

> String swarmInit(body)

Initialize a new swarm

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SwarmApi();
let body = new DockerEngineApi.InlineObject5(); // InlineObject5 | 
apiInstance.swarmInit(body, (error, data, response) => {
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
 **body** | [**InlineObject5**](InlineObject5.md)|  | 

### Return type

**String**

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, text/plain


## swarmInspect

> Swarm swarmInspect()

Inspect swarm

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SwarmApi();
apiInstance.swarmInspect((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Swarm**](Swarm.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## swarmJoin

> swarmJoin(body)

Join an existing swarm

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SwarmApi();
let body = new DockerEngineApi.InlineObject6(); // InlineObject6 | 
apiInstance.swarmJoin(body, (error, data, response) => {
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
 **body** | [**InlineObject6**](InlineObject6.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, text/plain


## swarmLeave

> swarmLeave(opts)

Leave a swarm

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SwarmApi();
let opts = {
  'force': false // Boolean | Force leave swarm, even if this is the last manager or that it will break the cluster. 
};
apiInstance.swarmLeave(opts, (error, data, response) => {
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
 **force** | **Boolean**| Force leave swarm, even if this is the last manager or that it will break the cluster.  | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## swarmUnlock

> swarmUnlock(body)

Unlock a locked manager

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SwarmApi();
let body = new DockerEngineApi.InlineObject7(); // InlineObject7 | 
apiInstance.swarmUnlock(body, (error, data, response) => {
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
 **body** | [**InlineObject7**](InlineObject7.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## swarmUnlockkey

> UnlockKeyResponse swarmUnlockkey()

Get the unlock key

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SwarmApi();
apiInstance.swarmUnlockkey((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**UnlockKeyResponse**](UnlockKeyResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## swarmUpdate

> swarmUpdate(version, body, opts)

Update a swarm

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SwarmApi();
let version = 789; // Number | The version number of the swarm object being updated. This is required to avoid conflicting writes. 
let body = new DockerEngineApi.SwarmSpec(); // SwarmSpec | 
let opts = {
  'rotateWorkerToken': false, // Boolean | Rotate the worker join token.
  'rotateManagerToken': false, // Boolean | Rotate the manager join token.
  'rotateManagerUnlockKey': false // Boolean | Rotate the manager unlock key.
};
apiInstance.swarmUpdate(version, body, opts, (error, data, response) => {
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
 **version** | **Number**| The version number of the swarm object being updated. This is required to avoid conflicting writes.  | 
 **body** | [**SwarmSpec**](SwarmSpec.md)|  | 
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

