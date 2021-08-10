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
    instance = new DockerEngineApi.InlineObject2();
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

  describe('InlineObject2', function() {
    it('should create an instance of InlineObject2', function() {
      // uncomment below and update the code to test InlineObject2
      //var instane = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be.a(DockerEngineApi.InlineObject2);
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property checkDuplicate (base name: "CheckDuplicate")', function() {
      // uncomment below and update the code to test the property checkDuplicate
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property driver (base name: "Driver")', function() {
      // uncomment below and update the code to test the property driver
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property internal (base name: "Internal")', function() {
      // uncomment below and update the code to test the property internal
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property attachable (base name: "Attachable")', function() {
      // uncomment below and update the code to test the property attachable
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property ingress (base name: "Ingress")', function() {
      // uncomment below and update the code to test the property ingress
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property IPAM (base name: "IPAM")', function() {
      // uncomment below and update the code to test the property IPAM
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property enableIPv6 (base name: "EnableIPv6")', function() {
      // uncomment below and update the code to test the property enableIPv6
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property options (base name: "Options")', function() {
      // uncomment below and update the code to test the property options
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "Labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new DockerEngineApi.InlineObject2();
      //expect(instance).to.be();
    });

  });

}));
