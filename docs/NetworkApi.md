# DockerEngineApi.NetworkApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**networkConnect**](NetworkApi.md#networkConnect) | **POST** /networks/{id}/connect | Connect a container to a network
[**networkCreate**](NetworkApi.md#networkCreate) | **POST** /networks/create | Create a network
[**networkDelete**](NetworkApi.md#networkDelete) | **DELETE** /networks/{id} | Remove a network
[**networkDisconnect**](NetworkApi.md#networkDisconnect) | **POST** /networks/{id}/disconnect | Disconnect a container from a network
[**networkInspect**](NetworkApi.md#networkInspect) | **GET** /networks/{id} | Inspect a network
[**networkList**](NetworkApi.md#networkList) | **GET** /networks | List networks
[**networkPrune**](NetworkApi.md#networkPrune) | **POST** /networks/prune | Delete unused networks


<a name="networkConnect"></a>
# **networkConnect**
> networkConnect(id, container)

Connect a container to a network

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NetworkApi();

var id = "id_example"; // String | Network ID or name

var container = new DockerEngineApi.Container(); // Container | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.networkConnect(id, container, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Network ID or name | 
 **container** | [**Container**](Container.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

<a name="networkCreate"></a>
# **networkCreate**
> NetworkCreateResponse networkCreate(networkConfig)

Create a network

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NetworkApi();

var networkConfig = new DockerEngineApi.NetworkConfig(); // NetworkConfig | Network configuration


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.networkCreate(networkConfig, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **networkConfig** | [**NetworkConfig**](NetworkConfig.md)| Network configuration | 

### Return type

[**NetworkCreateResponse**](NetworkCreateResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="networkDelete"></a>
# **networkDelete**
> networkDelete(id)

Remove a network

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NetworkApi();

var id = "id_example"; // String | Network ID or name


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.networkDelete(id, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Network ID or name | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="networkDisconnect"></a>
# **networkDisconnect**
> networkDisconnect(id, container)

Disconnect a container from a network

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NetworkApi();

var id = "id_example"; // String | Network ID or name

var container = new DockerEngineApi.Container1(); // Container1 | 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.networkDisconnect(id, container, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Network ID or name | 
 **container** | [**Container1**](Container1.md)|  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

<a name="networkInspect"></a>
# **networkInspect**
> Network networkInspect(id, opts)

Inspect a network

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NetworkApi();

var id = "id_example"; // String | Network ID or name

var opts = { 
  'verbose': false, // Boolean | Detailed inspect output for troubleshooting
  'scope': "scope_example" // String | Filter the network by scope (swarm, global, or local)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.networkInspect(id, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**| Network ID or name | 
 **verbose** | **Boolean**| Detailed inspect output for troubleshooting | [optional] [default to false]
 **scope** | **String**| Filter the network by scope (swarm, global, or local) | [optional] 

### Return type

[**Network**](Network.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="networkList"></a>
# **networkList**
> [Network] networkList(opts)

List networks

Returns a list of networks. For details on the format, see the [network inspect endpoint](#operation/NetworkInspect).  Note that it uses a different, smaller representation of a network than inspecting a single network. For example, the list of containers attached to the network is not propagated in API versions 1.28 and up. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NetworkApi();

var opts = { 
  'filters': "filters_example" // String | JSON encoded value of the filters (a `map[string][]string`) to process on the networks list.  Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), returns all    networks that are not in use by a container. When set to `false`    (or `0`), only networks that are in use by one or more    containers are returned. - `driver=<driver-name>` Matches a network's driver. - `id=<network-id>` Matches all or part of a network ID. - `label=<key>` or `label=<key>=<value>` of a network label. - `name=<network-name>` Matches all or part of a network name. - `scope=[\"swarm\"|\"global\"|\"local\"]` Filters networks by scope (`swarm`, `global`, or `local`). - `type=[\"custom\"|\"builtin\"]` Filters networks by type. The `custom` keyword returns all user-defined networks. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.networkList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| JSON encoded value of the filters (a `map[string][]string`) to process on the networks list.  Available filters:  - `dangling=<boolean>` When set to `true` (or `1`), returns all    networks that are not in use by a container. When set to `false`    (or `0`), only networks that are in use by one or more    containers are returned. - `driver=<driver-name>` Matches a network's driver. - `id=<network-id>` Matches all or part of a network ID. - `label=<key>` or `label=<key>=<value>` of a network label. - `name=<network-name>` Matches all or part of a network name. - `scope=[\"swarm\"|\"global\"|\"local\"]` Filters networks by scope (`swarm`, `global`, or `local`). - `type=[\"custom\"|\"builtin\"]` Filters networks by type. The `custom` keyword returns all user-defined networks.  | [optional] 

### Return type

[**[Network]**](Network.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="networkPrune"></a>
# **networkPrune**
> NetworkPruneResponse networkPrune(opts)

Delete unused networks

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.NetworkApi();

var opts = { 
  'filters': "filters_example" // String | Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.networkPrune(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| Filters to process on the prune list, encoded as JSON (a `map[string][]string`).  Available filters: - `until=<timestamp>` Prune networks created before this timestamp. The `<timestamp>` can be Unix timestamps, date formatted timestamps, or Go duration strings (e.g. `10m`, `1h30m`) computed relative to the daemon machine’s time. - `label` (`label=<key>`, `label=<key>=<value>`, `label!=<key>`, or `label!=<key>=<value>`) Prune networks with (or without, in case `label!=...` is used) the specified labels.  | [optional] 

### Return type

[**NetworkPruneResponse**](NetworkPruneResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

