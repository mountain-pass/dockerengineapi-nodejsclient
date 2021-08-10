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
    describe('ContainerState', function() {
      beforeEach(function() {
        instance = new DockerEngineApi.ContainerState();
      });

      it('should create an instance of ContainerState', function() {
        // TODO: update the code to test ContainerState
        expect(instance).to.be.a(DockerEngineApi.ContainerState);
      });

      it('should have the property status (base name: "Status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property running (base name: "Running")', function() {
        // TODO: update the code to test the property running
        expect(instance).to.have.property('running');
        // expect(instance.running).to.be(expectedValueLiteral);
      });

      it('should have the property paused (base name: "Paused")', function() {
        // TODO: update the code to test the property paused
        expect(instance).to.have.property('paused');
        // expect(instance.paused).to.be(expectedValueLiteral);
      });

      it('should have the property restarting (base name: "Restarting")', function() {
        // TODO: update the code to test the property restarting
        expect(instance).to.have.property('restarting');
        // expect(instance.restarting).to.be(expectedValueLiteral);
      });

      it('should have the property oOMKilled (base name: "OOMKilled")', function() {
        // TODO: update the code to test the property oOMKilled
        expect(instance).to.have.property('oOMKilled');
        // expect(instance.oOMKilled).to.be(expectedValueLiteral);
      });

      it('should have the property dead (base name: "Dead")', function() {
        // TODO: update the code to test the property dead
        expect(instance).to.have.property('dead');
        // expect(instance.dead).to.be(expectedValueLiteral);
      });

      it('should have the property pid (base name: "Pid")', function() {
        // TODO: update the code to test the property pid
        expect(instance).to.have.property('pid');
        // expect(instance.pid).to.be(expectedValueLiteral);
      });

      it('should have the property exitCode (base name: "ExitCode")', function() {
        // TODO: update the code to test the property exitCode
        expect(instance).to.have.property('exitCode');
        // expect(instance.exitCode).to.be(expectedValueLiteral);
      });

      it('should have the property error (base name: "Error")', function() {
        // TODO: update the code to test the property error
        expect(instance).to.have.property('error');
        // expect(instance.error).to.be(expectedValueLiteral);
      });

      it('should have the property startedAt (base name: "StartedAt")', function() {
        // TODO: update the code to test the property startedAt
        expect(instance).to.have.property('startedAt');
        // expect(instance.startedAt).to.be(expectedValueLiteral);
      });

      it('should have the property finishedAt (base name: "FinishedAt")', function() {
        // TODO: update the code to test the property finishedAt
        expect(instance).to.have.property('finishedAt');
        // expect(instance.finishedAt).to.be(expectedValueLiteral);
      });

      it('should have the property health (base name: "Health")', function() {
        // TODO: update the code to test the property health
        expect(instance).to.have.property('health');
        // expect(instance.health).to.be(expectedValueLiteral);
      });

    });
  });

}));
