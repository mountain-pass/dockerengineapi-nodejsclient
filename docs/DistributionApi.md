# DockerEngineApi.DistributionApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionInspect**](DistributionApi.md#distributionInspect) | **GET** /distribution/{name}/json | Get image information from the registry



## distributionInspect

> DistributionInspectResponse distributionInspect(name)

Get image information from the registry

Return image digest and platform information by contacting the registry. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.DistributionApi();
let name = "name_example"; // String | Image name or id
apiInstance.distributionInspect(name, (error, data, response) => {
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
 **name** | **String**| Image name or id | 

### Return type

[**DistributionInspectResponse**](DistributionInspectResponse.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

