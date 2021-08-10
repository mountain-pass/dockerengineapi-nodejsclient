# DockerEngineApi.SessionApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**session**](SessionApi.md#session) | **POST** /session | Initialize interactive session


<a name="session"></a>
# **session**
> session()

Initialize interactive session

Start a new interactive session with a server. Session allows server to call back to the client for advanced capabilities.  ### Hijacking  This endpoint hijacks the HTTP connection to HTTP2 transport that allows the client to expose gPRC services on that connection.  For example, the client sends this request to upgrade the connection:  ``` POST /session HTTP/1.1 Upgrade: h2c Connection: Upgrade ```  The Docker daemon responds with a `101 UPGRADED` response follow with the raw stream:  ``` HTTP/1.1 101 UPGRADED Connection: Upgrade Upgrade: h2c ``` 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.SessionApi();

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.session(callback);
```

### Parameters
This endpoint does not need any parameter.

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/vnd.docker.raw-stream

