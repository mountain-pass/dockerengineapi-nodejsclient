# DockerEngineApi.SecretApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**secretCreate**](SecretApi.md#secretCreate) | **POST** /secrets/create | Create a secret
[**secretDelete**](SecretApi.md#secretDelete) | **DELETE** /secrets/{id} | Delete a secret
[**secretInspect**](SecretApi.md#secretInspect) | **GET** /secrets/{id} | Inspect a secret
[**secretList**](SecretApi.md#secretList) | **GET** /secrets | List secrets
[**secretUpdate**](SecretApi.md#secretUpdate) | **POST** /secrets/{id}/update | Update a Secret



## secretCreate

> IdResponse secretCreate(opts)

Create a secret

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SecretApi();
let opts = {
  'body': new DockerEngineApi.UNKNOWN_BASE_TYPE() // UNKNOWN_BASE_TYPE | 
};
apiInstance.secretCreate(opts, (error, data, response) => {
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
 **body** | [**UNKNOWN_BASE_TYPE**](UNKNOWN_BASE_TYPE.md)|  | [optional] 

### Return type

[**IdResponse**](IdResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json


## secretDelete

> secretDelete(id)

Delete a secret

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SecretApi();
let id = "id_example"; // String | ID of the secret
apiInstance.secretDelete(id, (error, data, response) => {
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
 **id** | **String**| ID of the secret | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretInspect

> Secret secretInspect(id)

Inspect a secret

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SecretApi();
let id = "id_example"; // String | ID of the secret
apiInstance.secretInspect(id, (error, data, response) => {
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
 **id** | **String**| ID of the secret | 

### Return type

[**Secret**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretList

> [Secret] secretList(opts)

List secrets

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SecretApi();
let opts = {
  'filters': "filters_example" // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the secrets list.  Available filters:  - `id=<secret id>` - `label=<key> or label=<key>=value` - `name=<secret name>` - `names=<secret name>` 
};
apiInstance.secretList(opts, (error, data, response) => {
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
 **filters** | **String**| A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the secrets list.  Available filters:  - &#x60;id&#x3D;&lt;secret id&gt;&#x60; - &#x60;label&#x3D;&lt;key&gt; or label&#x3D;&lt;key&gt;&#x3D;value&#x60; - &#x60;name&#x3D;&lt;secret name&gt;&#x60; - &#x60;names&#x3D;&lt;secret name&gt;&#x60;  | [optional] 

### Return type

[**[Secret]**](Secret.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## secretUpdate

> secretUpdate(id, version, opts)

Update a Secret

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.SecretApi();
let id = "id_example"; // String | The ID or name of the secret
let version = 789; // Number | The version number of the secret object being updated. This is required to avoid conflicting writes. 
let opts = {
  'body': new DockerEngineApi.SecretSpec() // SecretSpec | The spec of the secret to update. Currently, only the Labels field can be updated. All other fields must remain unchanged from the [SecretInspect endpoint](#operation/SecretInspect) response values. 
};
apiInstance.secretUpdate(id, version, opts, (error, data, response) => {
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

