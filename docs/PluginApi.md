# DockerEngineApi.PluginApi

All URIs are relative to *http://localhost/v1.41*

Method | HTTP request | Description
------------- | ------------- | -------------
[**getPluginPrivileges**](PluginApi.md#getPluginPrivileges) | **GET** /plugins/privileges | Get plugin privileges
[**pluginCreate**](PluginApi.md#pluginCreate) | **POST** /plugins/create | Create a plugin
[**pluginDelete**](PluginApi.md#pluginDelete) | **DELETE** /plugins/{name} | Remove a plugin
[**pluginDisable**](PluginApi.md#pluginDisable) | **POST** /plugins/{name}/disable | Disable a plugin
[**pluginEnable**](PluginApi.md#pluginEnable) | **POST** /plugins/{name}/enable | Enable a plugin
[**pluginInspect**](PluginApi.md#pluginInspect) | **GET** /plugins/{name}/json | Inspect a plugin
[**pluginList**](PluginApi.md#pluginList) | **GET** /plugins | List plugins
[**pluginPull**](PluginApi.md#pluginPull) | **POST** /plugins/pull | Install a plugin
[**pluginPush**](PluginApi.md#pluginPush) | **POST** /plugins/{name}/push | Push a plugin
[**pluginSet**](PluginApi.md#pluginSet) | **POST** /plugins/{name}/set | Configure a plugin
[**pluginUpgrade**](PluginApi.md#pluginUpgrade) | **POST** /plugins/{name}/upgrade | Upgrade a plugin


<a name="getPluginPrivileges"></a>
# **getPluginPrivileges**
> [PluginPrivilegeItem] getPluginPrivileges(remote)

Get plugin privileges

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var remote = "remote_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.getPluginPrivileges(remote, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **remote** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 

### Return type

[**[PluginPrivilegeItem]**](PluginPrivilegeItem.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="pluginCreate"></a>
# **pluginCreate**
> pluginCreate(name, opts)

Create a plugin

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 

var opts = { 
  'tarContext': "QmFzZTY0IGV4YW1wbGU=" // Blob | Path to tar containing plugin rootfs and manifest
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pluginCreate(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 
 **tarContext** | **Blob**| Path to tar containing plugin rootfs and manifest | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/x-tar
 - **Accept**: application/json, text/plain

<a name="pluginDelete"></a>
# **pluginDelete**
> Plugin pluginDelete(name, opts)

Remove a plugin

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 

var opts = { 
  'force': false // Boolean | Disable the plugin before removing. This may result in issues if the plugin is in use by a container. 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pluginDelete(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 
 **force** | **Boolean**| Disable the plugin before removing. This may result in issues if the plugin is in use by a container.  | [optional] [default to false]

### Return type

[**Plugin**](Plugin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="pluginDisable"></a>
# **pluginDisable**
> pluginDisable(name)

Disable a plugin

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pluginDisable(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="pluginEnable"></a>
# **pluginEnable**
> pluginEnable(name, opts)

Enable a plugin

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 

var opts = { 
  'timeout': 0 // Number | Set the HTTP client timeout (in seconds)
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pluginEnable(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 
 **timeout** | **Number**| Set the HTTP client timeout (in seconds) | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="pluginInspect"></a>
# **pluginInspect**
> Plugin pluginInspect(name)

Inspect a plugin

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pluginInspect(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 

### Return type

[**Plugin**](Plugin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="pluginList"></a>
# **pluginList**
> [Plugin] pluginList(opts)

List plugins

Returns information about installed plugins.

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var opts = { 
  'filters': "filters_example" // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the plugin list.  Available filters:  - `capability=<capability name>` - `enable=<true>|<false>` 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.pluginList(opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filters** | **String**| A JSON encoded value of the filters (a `map[string][]string`) to process on the plugin list.  Available filters:  - `capability=<capability name>` - `enable=<true>|<false>`  | [optional] 

### Return type

[**[Plugin]**](Plugin.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="pluginPull"></a>
# **pluginPull**
> pluginPull(remote, opts)

Install a plugin

Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [`POST /plugins/{name}/enable` endpoint](#operation/PostPluginsEnable). 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var remote = "remote_example"; // String | Remote reference for plugin to install.  The `:latest` tag is optional, and is used as the default if omitted. 

var opts = { 
  'name': "name_example", // String | Local name for the pulled plugin.  The `:latest` tag is optional, and is used as the default if omitted. 
  'xRegistryAuth': "xRegistryAuth_example", // String | A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
  'body': [new DockerEngineApi.Body()] // [Body] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pluginPull(remote, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **remote** | **String**| Remote reference for plugin to install.  The `:latest` tag is optional, and is used as the default if omitted.  | 
 **name** | **String**| Local name for the pulled plugin.  The `:latest` tag is optional, and is used as the default if omitted.  | [optional] 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 
 **body** | [**[Body]**](Body.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json

<a name="pluginPush"></a>
# **pluginPush**
> pluginPush(name)

Push a plugin

Push a plugin to the registry. 

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 


var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pluginPush(name, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

<a name="pluginSet"></a>
# **pluginSet**
> pluginSet(name, opts)

Configure a plugin

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 

var opts = { 
  'body': [new DockerEngineApi.[String]()] // [String] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pluginSet(name, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 
 **body** | **[String]**|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json, text/plain

<a name="pluginUpgrade"></a>
# **pluginUpgrade**
> pluginUpgrade(name, remote, opts)

Upgrade a plugin

### Example
```javascript
var DockerEngineApi = require('docker_engine_api');

var apiInstance = new DockerEngineApi.PluginApi();

var name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 

var remote = "remote_example"; // String | Remote reference to upgrade to.  The `:latest` tag is optional, and is used as the default if omitted. 

var opts = { 
  'xRegistryAuth': "xRegistryAuth_example", // String | A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
  'body': [new DockerEngineApi.Body()] // [Body] | 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully.');
  }
};
apiInstance.pluginUpgrade(name, remote, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **String**| The name of the plugin. The `:latest` tag is optional, and is the default if omitted.  | 
 **remote** | **String**| Remote reference to upgrade to.  The `:latest` tag is optional, and is used as the default if omitted.  | 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 
 **body** | [**[Body]**](Body.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, text/plain
 - **Accept**: application/json, text/plain

