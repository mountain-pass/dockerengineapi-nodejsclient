/**
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client's commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don't break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.41) is used. For example, calling `/info` is the same as calling `/v1.41/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ``` 
 *
 * The version of the OpenAPI document: 1.41
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DockerEngineApi);
  }
}(this, function(expect, DockerEngineApi) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new DockerEngineApi.PluginConfig();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('PluginConfig', function() {
    it('should create an instance of PluginConfig', function() {
      // uncomment below and update the code to test PluginConfig
      //var instane = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be.a(DockerEngineApi.PluginConfig);
    });

    it('should have the property dockerVersion (base name: "DockerVersion")', function() {
      // uncomment below and update the code to test the property dockerVersion
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "Description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property documentation (base name: "Documentation")', function() {
      // uncomment below and update the code to test the property documentation
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property _interface (base name: "Interface")', function() {
      // uncomment below and update the code to test the property _interface
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property entrypoint (base name: "Entrypoint")', function() {
      // uncomment below and update the code to test the property entrypoint
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property workDir (base name: "WorkDir")', function() {
      // uncomment below and update the code to test the property workDir
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "User")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property network (base name: "Network")', function() {
      // uncomment below and update the code to test the property network
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property linux (base name: "Linux")', function() {
      // uncomment below and update the code to test the property linux
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property propagatedMount (base name: "PropagatedMount")', function() {
      // uncomment below and update the code to test the property propagatedMount
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property ipcHost (base name: "IpcHost")', function() {
      // uncomment below and update the code to test the property ipcHost
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property pidHost (base name: "PidHost")', function() {
      // uncomment below and update the code to test the property pidHost
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property mounts (base name: "Mounts")', function() {
      // uncomment below and update the code to test the property mounts
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property env (base name: "Env")', function() {
      // uncomment below and update the code to test the property env
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property args (base name: "Args")', function() {
      // uncomment below and update the code to test the property args
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

    it('should have the property rootfs (base name: "rootfs")', function() {
      // uncomment below and update the code to test the property rootfs
      //var instance = new DockerEngineApi.PluginConfig();
      //expect(instance).to.be();
    });

  });

}));