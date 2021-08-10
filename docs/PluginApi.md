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



## getPluginPrivileges

> [PluginPrivilegeItem] getPluginPrivileges(remote)

Get plugin privileges

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let remote = "remote_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
apiInstance.getPluginPrivileges(remote, (error, data, response) => {
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
 **remote** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 

### Return type

[**[PluginPrivilegeItem]**](PluginPrivilegeItem.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## pluginCreate

> pluginCreate(name, opts)

Create a plugin

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
let opts = {
  'tarContext': "/path/to/file" // File | Path to tar containing plugin rootfs and manifest
};
apiInstance.pluginCreate(name, opts, (error, data, response) => {
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
 **name** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 
 **tarContext** | **File**| Path to tar containing plugin rootfs and manifest | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/x-tar
- **Accept**: application/json, text/plain


## pluginDelete

> Plugin pluginDelete(name, opts)

Remove a plugin

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
let opts = {
  'force': false // Boolean | Disable the plugin before removing. This may result in issues if the plugin is in use by a container. 
};
apiInstance.pluginDelete(name, opts, (error, data, response) => {
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
 **name** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 
 **force** | **Boolean**| Disable the plugin before removing. This may result in issues if the plugin is in use by a container.  | [optional] [default to false]

### Return type

[**Plugin**](Plugin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## pluginDisable

> pluginDisable(name)

Disable a plugin

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
apiInstance.pluginDisable(name, (error, data, response) => {
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
 **name** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## pluginEnable

> pluginEnable(name, opts)

Enable a plugin

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
let opts = {
  'timeout': 0 // Number | Set the HTTP client timeout (in seconds)
};
apiInstance.pluginEnable(name, opts, (error, data, response) => {
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
 **name** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 
 **timeout** | **Number**| Set the HTTP client timeout (in seconds) | [optional] [default to 0]

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## pluginInspect

> Plugin pluginInspect(name)

Inspect a plugin

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
apiInstance.pluginInspect(name, (error, data, response) => {
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
 **name** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 

### Return type

[**Plugin**](Plugin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## pluginList

> [Plugin] pluginList(opts)

List plugins

Returns information about installed plugins.

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let opts = {
  'filters': "filters_example" // String | A JSON encoded value of the filters (a `map[string][]string`) to process on the plugin list.  Available filters:  - `capability=<capability name>` - `enable=<true>|<false>` 
};
apiInstance.pluginList(opts, (error, data, response) => {
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
 **filters** | **String**| A JSON encoded value of the filters (a &#x60;map[string][]string&#x60;) to process on the plugin list.  Available filters:  - &#x60;capability&#x3D;&lt;capability name&gt;&#x60; - &#x60;enable&#x3D;&lt;true&gt;|&lt;false&gt;&#x60;  | [optional] 

### Return type

[**[Plugin]**](Plugin.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## pluginPull

> pluginPull(remote, opts)

Install a plugin

Pulls and installs a plugin. After the plugin is installed, it can be enabled using the [&#x60;POST /plugins/{name}/enable&#x60; endpoint](#operation/PostPluginsEnable). 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let remote = "remote_example"; // String | Remote reference for plugin to install.  The `:latest` tag is optional, and is used as the default if omitted. 
let opts = {
  'name': "name_example", // String | Local name for the pulled plugin.  The `:latest` tag is optional, and is used as the default if omitted. 
  'xRegistryAuth': "xRegistryAuth_example", // String | A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
  'body': [new DockerEngineApi.InlineObject()] // [InlineObject] | 
};
apiInstance.pluginPull(remote, opts, (error, data, response) => {
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
 **remote** | **String**| Remote reference for plugin to install.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted.  | 
 **name** | **String**| Local name for the pulled plugin.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted.  | [optional] 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 
 **body** | [**[InlineObject]**](InlineObject.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json


## pluginPush

> pluginPush(name)

Push a plugin

Push a plugin to the registry. 

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
apiInstance.pluginPush(name, (error, data, response) => {
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
 **name** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json, text/plain


## pluginSet

> pluginSet(name, opts)

Configure a plugin

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
let opts = {
  'body': ["null"] // [String] | 
};
apiInstance.pluginSet(name, opts, (error, data, response) => {
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
 **name** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 
 **body** | [**[String]**](String.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json
- **Accept**: application/json, text/plain


## pluginUpgrade

> pluginUpgrade(name, remote, opts)

Upgrade a plugin

### Example

```javascript
import DockerEngineApi from 'docker_engine_api';

let apiInstance = new DockerEngineApi.PluginApi();
let name = "name_example"; // String | The name of the plugin. The `:latest` tag is optional, and is the default if omitted. 
let remote = "remote_example"; // String | Remote reference to upgrade to.  The `:latest` tag is optional, and is used as the default if omitted. 
let opts = {
  'xRegistryAuth': "xRegistryAuth_example", // String | A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details. 
  'body': [new DockerEngineApi.InlineObject()] // [InlineObject] | 
};
apiInstance.pluginUpgrade(name, remote, opts, (error, data, response) => {
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
 **name** | **String**| The name of the plugin. The &#x60;:latest&#x60; tag is optional, and is the default if omitted.  | 
 **remote** | **String**| Remote reference to upgrade to.  The &#x60;:latest&#x60; tag is optional, and is used as the default if omitted.  | 
 **xRegistryAuth** | **String**| A base64url-encoded auth configuration to use when pulling a plugin from a registry.  Refer to the [authentication section](#section/Authentication) for details.  | [optional] 
 **body** | [**[InlineObject]**](InlineObject.md)|  | [optional] 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: application/json, text/plain
- **Accept**: application/json, text/plain

