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
    instance = new DockerEngineApi.ContainerConfig();
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

  describe('ContainerConfig', function() {
    it('should create an instance of ContainerConfig', function() {
      // uncomment below and update the code to test ContainerConfig
      //var instane = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be.a(DockerEngineApi.ContainerConfig);
    });

    it('should have the property hostname (base name: "Hostname")', function() {
      // uncomment below and update the code to test the property hostname
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property domainname (base name: "Domainname")', function() {
      // uncomment below and update the code to test the property domainname
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property user (base name: "User")', function() {
      // uncomment below and update the code to test the property user
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property attachStdin (base name: "AttachStdin")', function() {
      // uncomment below and update the code to test the property attachStdin
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property attachStdout (base name: "AttachStdout")', function() {
      // uncomment below and update the code to test the property attachStdout
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property attachStderr (base name: "AttachStderr")', function() {
      // uncomment below and update the code to test the property attachStderr
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property exposedPorts (base name: "ExposedPorts")', function() {
      // uncomment below and update the code to test the property exposedPorts
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property tty (base name: "Tty")', function() {
      // uncomment below and update the code to test the property tty
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property openStdin (base name: "OpenStdin")', function() {
      // uncomment below and update the code to test the property openStdin
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property stdinOnce (base name: "StdinOnce")', function() {
      // uncomment below and update the code to test the property stdinOnce
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property env (base name: "Env")', function() {
      // uncomment below and update the code to test the property env
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property cmd (base name: "Cmd")', function() {
      // uncomment below and update the code to test the property cmd
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property healthcheck (base name: "Healthcheck")', function() {
      // uncomment below and update the code to test the property healthcheck
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property argsEscaped (base name: "ArgsEscaped")', function() {
      // uncomment below and update the code to test the property argsEscaped
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property image (base name: "Image")', function() {
      // uncomment below and update the code to test the property image
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property volumes (base name: "Volumes")', function() {
      // uncomment below and update the code to test the property volumes
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property workingDir (base name: "WorkingDir")', function() {
      // uncomment below and update the code to test the property workingDir
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property entrypoint (base name: "Entrypoint")', function() {
      // uncomment below and update the code to test the property entrypoint
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property networkDisabled (base name: "NetworkDisabled")', function() {
      // uncomment below and update the code to test the property networkDisabled
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property macAddress (base name: "MacAddress")', function() {
      // uncomment below and update the code to test the property macAddress
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property onBuild (base name: "OnBuild")', function() {
      // uncomment below and update the code to test the property onBuild
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "Labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property stopSignal (base name: "StopSignal")', function() {
      // uncomment below and update the code to test the property stopSignal
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property stopTimeout (base name: "StopTimeout")', function() {
      // uncomment below and update the code to test the property stopTimeout
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

    it('should have the property shell (base name: "Shell")', function() {
      // uncomment below and update the code to test the property shell
      //var instance = new DockerEngineApi.ContainerConfig();
      //expect(instance).to.be();
    });

  });

}));
