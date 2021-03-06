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
    describe('ContainerSummaryInner', function() {
      beforeEach(function() {
        instance = new DockerEngineApi.ContainerSummaryInner();
      });

      it('should create an instance of ContainerSummaryInner', function() {
        // TODO: update the code to test ContainerSummaryInner
        expect(instance).to.be.a(DockerEngineApi.ContainerSummaryInner);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property names (base name: "Names")', function() {
        // TODO: update the code to test the property names
        expect(instance).to.have.property('names');
        // expect(instance.names).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "Image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property imageID (base name: "ImageID")', function() {
        // TODO: update the code to test the property imageID
        expect(instance).to.have.property('imageID');
        // expect(instance.imageID).to.be(expectedValueLiteral);
      });

      it('should have the property command (base name: "Command")', function() {
        // TODO: update the code to test the property command
        expect(instance).to.have.property('command');
        // expect(instance.command).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "Created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property ports (base name: "Ports")', function() {
        // TODO: update the code to test the property ports
        expect(instance).to.have.property('ports');
        // expect(instance.ports).to.be(expectedValueLiteral);
      });

      it('should have the property sizeRw (base name: "SizeRw")', function() {
        // TODO: update the code to test the property sizeRw
        expect(instance).to.have.property('sizeRw');
        // expect(instance.sizeRw).to.be(expectedValueLiteral);
      });

      it('should have the property sizeRootFs (base name: "SizeRootFs")', function() {
        // TODO: update the code to test the property sizeRootFs
        expect(instance).to.have.property('sizeRootFs');
        // expect(instance.sizeRootFs).to.be(expectedValueLiteral);
      });

      it('should have the property labels (base name: "Labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property state (base name: "State")', function() {
        // TODO: update the code to test the property state
        expect(instance).to.have.property('state');
        // expect(instance.state).to.be(expectedValueLiteral);
      });

      it('should have the property status (base name: "Status")', function() {
        // TODO: update the code to test the property status
        expect(instance).to.have.property('status');
        // expect(instance.status).to.be(expectedValueLiteral);
      });

      it('should have the property hostConfig (base name: "HostConfig")', function() {
        // TODO: update the code to test the property hostConfig
        expect(instance).to.have.property('hostConfig');
        // expect(instance.hostConfig).to.be(expectedValueLiteral);
      });

      it('should have the property networkSettings (base name: "NetworkSettings")', function() {
        // TODO: update the code to test the property networkSettings
        expect(instance).to.have.property('networkSettings');
        // expect(instance.networkSettings).to.be(expectedValueLiteral);
      });

      it('should have the property mounts (base name: "Mounts")', function() {
        // TODO: update the code to test the property mounts
        expect(instance).to.have.property('mounts');
        // expect(instance.mounts).to.be(expectedValueLiteral);
      });

    });
  });

}));
