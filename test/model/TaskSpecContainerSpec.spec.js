/*
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client's commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don't break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.41) is used. For example, calling `/info` is the same as calling `/v1.41/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ``` 
 *
 * OpenAPI spec version: 1.41
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.21
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.DockerEngineApi);
  }
}(this, function(expect, DockerEngineApi) {
  'use strict';

  var instance;

  describe('(package)', function() {
    describe('TaskSpecContainerSpec', function() {
      beforeEach(function() {
        instance = new DockerEngineApi.TaskSpecContainerSpec();
      });

      it('should create an instance of TaskSpecContainerSpec', function() {
        // TODO: update the code to test TaskSpecContainerSpec
        expect(instance).to.be.a(DockerEngineApi.TaskSpecContainerSpec);
      });

      it('should have the property image (base name: "Image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property labels (base name: "Labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property command (base name: "Command")', function() {
        // TODO: update the code to test the property command
        expect(instance).to.have.property('command');
        // expect(instance.command).to.be(expectedValueLiteral);
      });

      it('should have the property args (base name: "Args")', function() {
        // TODO: update the code to test the property args
        expect(instance).to.have.property('args');
        // expect(instance.args).to.be(expectedValueLiteral);
      });

      it('should have the property hostname (base name: "Hostname")', function() {
        // TODO: update the code to test the property hostname
        expect(instance).to.have.property('hostname');
        // expect(instance.hostname).to.be(expectedValueLiteral);
      });

      it('should have the property env (base name: "Env")', function() {
        // TODO: update the code to test the property env
        expect(instance).to.have.property('env');
        // expect(instance.env).to.be(expectedValueLiteral);
      });

      it('should have the property dir (base name: "Dir")', function() {
        // TODO: update the code to test the property dir
        expect(instance).to.have.property('dir');
        // expect(instance.dir).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "User")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property groups (base name: "Groups")', function() {
        // TODO: update the code to test the property groups
        expect(instance).to.have.property('groups');
        // expect(instance.groups).to.be(expectedValueLiteral);
      });

      it('should have the property privileges (base name: "Privileges")', function() {
        // TODO: update the code to test the property privileges
        expect(instance).to.have.property('privileges');
        // expect(instance.privileges).to.be(expectedValueLiteral);
      });

      it('should have the property TTY (base name: "TTY")', function() {
        // TODO: update the code to test the property TTY
        expect(instance).to.have.property('TTY');
        // expect(instance.TTY).to.be(expectedValueLiteral);
      });

      it('should have the property openStdin (base name: "OpenStdin")', function() {
        // TODO: update the code to test the property openStdin
        expect(instance).to.have.property('openStdin');
        // expect(instance.openStdin).to.be(expectedValueLiteral);
      });

      it('should have the property readOnly (base name: "ReadOnly")', function() {
        // TODO: update the code to test the property readOnly
        expect(instance).to.have.property('readOnly');
        // expect(instance.readOnly).to.be(expectedValueLiteral);
      });

      it('should have the property mounts (base name: "Mounts")', function() {
        // TODO: update the code to test the property mounts
        expect(instance).to.have.property('mounts');
        // expect(instance.mounts).to.be(expectedValueLiteral);
      });

      it('should have the property stopSignal (base name: "StopSignal")', function() {
        // TODO: update the code to test the property stopSignal
        expect(instance).to.have.property('stopSignal');
        // expect(instance.stopSignal).to.be(expectedValueLiteral);
      });

      it('should have the property stopGracePeriod (base name: "StopGracePeriod")', function() {
        // TODO: update the code to test the property stopGracePeriod
        expect(instance).to.have.property('stopGracePeriod');
        // expect(instance.stopGracePeriod).to.be(expectedValueLiteral);
      });

      it('should have the property healthCheck (base name: "HealthCheck")', function() {
        // TODO: update the code to test the property healthCheck
        expect(instance).to.have.property('healthCheck');
        // expect(instance.healthCheck).to.be(expectedValueLiteral);
      });

      it('should have the property hosts (base name: "Hosts")', function() {
        // TODO: update the code to test the property hosts
        expect(instance).to.have.property('hosts');
        // expect(instance.hosts).to.be(expectedValueLiteral);
      });

      it('should have the property dNSConfig (base name: "DNSConfig")', function() {
        // TODO: update the code to test the property dNSConfig
        expect(instance).to.have.property('dNSConfig');
        // expect(instance.dNSConfig).to.be(expectedValueLiteral);
      });

      it('should have the property secrets (base name: "Secrets")', function() {
        // TODO: update the code to test the property secrets
        expect(instance).to.have.property('secrets');
        // expect(instance.secrets).to.be(expectedValueLiteral);
      });

      it('should have the property configs (base name: "Configs")', function() {
        // TODO: update the code to test the property configs
        expect(instance).to.have.property('configs');
        // expect(instance.configs).to.be(expectedValueLiteral);
      });

      it('should have the property isolation (base name: "Isolation")', function() {
        // TODO: update the code to test the property isolation
        expect(instance).to.have.property('isolation');
        // expect(instance.isolation).to.be(expectedValueLiteral);
      });

      it('should have the property init (base name: "Init")', function() {
        // TODO: update the code to test the property init
        expect(instance).to.have.property('init');
        // expect(instance.init).to.be(expectedValueLiteral);
      });

      it('should have the property sysctls (base name: "Sysctls")', function() {
        // TODO: update the code to test the property sysctls
        expect(instance).to.have.property('sysctls');
        // expect(instance.sysctls).to.be(expectedValueLiteral);
      });

      it('should have the property capabilityAdd (base name: "CapabilityAdd")', function() {
        // TODO: update the code to test the property capabilityAdd
        expect(instance).to.have.property('capabilityAdd');
        // expect(instance.capabilityAdd).to.be(expectedValueLiteral);
      });

      it('should have the property capabilityDrop (base name: "CapabilityDrop")', function() {
        // TODO: update the code to test the property capabilityDrop
        expect(instance).to.have.property('capabilityDrop');
        // expect(instance.capabilityDrop).to.be(expectedValueLiteral);
      });

      it('should have the property ulimits (base name: "Ulimits")', function() {
        // TODO: update the code to test the property ulimits
        expect(instance).to.have.property('ulimits');
        // expect(instance.ulimits).to.be(expectedValueLiteral);
      });

    });
  });

}));
