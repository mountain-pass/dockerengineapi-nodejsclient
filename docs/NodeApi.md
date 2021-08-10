# DockerEngineApi.NodeApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**nodeDelete**](NodeApi.md#nodeDelete) | **DELETE** /nodes/{id} | Delete a node
[**nodeInspect**](NodeApi.md#nodeInspect) | **GET** /nodes/{id} | Inspect a node
[**nodeList**](NodeApi.md#nodeList) | **GET** /nodes | List nodes
[**nodeUpdate**](NodeApi.md#nodeUpdate) | **POST** /nodes/{id}/update | Update a node


<a name="nodeDelete"></a>
# **nodeDelete**
> nodeDelete(id, opts)

Delete a node

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NodeApi();

var id = "id_example"; // String | The ID or name of the node

var opts = { 
  'force': false // Boolean | Force remove a node from the swarm
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.nodeDelete(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or name of the node | 
 **force** | **Boolean**| Force remove a node from the swarm | [optional] [default to false]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="nodeInspect"></a>
# **nodeInspect**
> Node nodeInspect(id)

Inspect a node

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NodeApi();

var id = "id_example"; // String | The ID or name of the node


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeInspect(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID or name of the node | 

### Return type

[**Node**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="nodeList"></a>
# **nodeList**
> [Node] nodeList(opts)

List nodes

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NodeApi();

var opts = { 
  'filters': "filters_example" // String | Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).  Available filters: - `id=<node id>` - `label=<engine label>` - `membership=`(`accepted`|`pending`)` - `name=<node name>` - `node.label=<node label>` - `role=`(`manager`|`worker`)` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.nodeList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| Filters to process on the nodes list, encoded as JSON (a `map[string][]string`).  Available filters: - `id=<node id>` - `label=<engine label>` - `membership=`(`accepted`|`pending`)` - `name=<node name>` - `node.label=<node label>` - `role=`(`manager`|`worker`)`  | [optional] 

### Return type

[**[Node]**](Node.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="nodeUpdate"></a>
# **nodeUpdate**
> nodeUpdate(id, version, opts)

Update a node

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NodeApi();

var id = "id_example"; // String | The ID of the node

var version = 789; // Number | The version number of the node object being updated. This is required to avoid conflicting writes. 

var opts = { 
  'body': new DockerEngineApi.NodeSpec() // NodeSpec | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.nodeUpdate(id, version, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| The ID of the node | 
 **version** | **Number**| The version number of the node object being updated. This is required to avoid conflicting writes.  | 
 **body** | [**NodeSpec**](NodeSpec.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

