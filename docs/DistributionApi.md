# DockerEngineApi.DistributionApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**distributionInspect**](DistributionApi.md#distributionInspect) | **GET** /distribution/{name}/json | Get image information from the registry


<a name="distributionInspect"></a>
# **distributionInspect**
> DistributionInspectResponse distributionInspect(name)

Get image information from the registry

Return image digest and platform information by contacting the registry. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.DistributionApi();

var name = "name_example"; // String | Image name or id


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.distributionInspect(name, callback);
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

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

