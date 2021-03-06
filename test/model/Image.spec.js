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
    describe('Image', function() {
      beforeEach(function() {
        instance = new DockerEngineApi.Image();
      });

      it('should create an instance of Image', function() {
        // TODO: update the code to test Image
        expect(instance).to.be.a(DockerEngineApi.Image);
      });

      it('should have the property id (base name: "Id")', function() {
        // TODO: update the code to test the property id
        expect(instance).to.have.property('id');
        // expect(instance.id).to.be(expectedValueLiteral);
      });

      it('should have the property repoTags (base name: "RepoTags")', function() {
        // TODO: update the code to test the property repoTags
        expect(instance).to.have.property('repoTags');
        // expect(instance.repoTags).to.be(expectedValueLiteral);
      });

      it('should have the property repoDigests (base name: "RepoDigests")', function() {
        // TODO: update the code to test the property repoDigests
        expect(instance).to.have.property('repoDigests');
        // expect(instance.repoDigests).to.be(expectedValueLiteral);
      });

      it('should have the property parent (base name: "Parent")', function() {
        // TODO: update the code to test the property parent
        expect(instance).to.have.property('parent');
        // expect(instance.parent).to.be(expectedValueLiteral);
      });

      it('should have the property comment (base name: "Comment")', function() {
        // TODO: update the code to test the property comment
        expect(instance).to.have.property('comment');
        // expect(instance.comment).to.be(expectedValueLiteral);
      });

      it('should have the property created (base name: "Created")', function() {
        // TODO: update the code to test the property created
        expect(instance).to.have.property('created');
        // expect(instance.created).to.be(expectedValueLiteral);
      });

      it('should have the property container (base name: "Container")', function() {
        // TODO: update the code to test the property container
        expect(instance).to.have.property('container');
        // expect(instance.container).to.be(expectedValueLiteral);
      });

      it('should have the property containerConfig (base name: "ContainerConfig")', function() {
        // TODO: update the code to test the property containerConfig
        expect(instance).to.have.property('containerConfig');
        // expect(instance.containerConfig).to.be(expectedValueLiteral);
      });

      it('should have the property dockerVersion (base name: "DockerVersion")', function() {
        // TODO: update the code to test the property dockerVersion
        expect(instance).to.have.property('dockerVersion');
        // expect(instance.dockerVersion).to.be(expectedValueLiteral);
      });

      it('should have the property author (base name: "Author")', function() {
        // TODO: update the code to test the property author
        expect(instance).to.have.property('author');
        // expect(instance.author).to.be(expectedValueLiteral);
      });

      it('should have the property config (base name: "Config")', function() {
        // TODO: update the code to test the property config
        expect(instance).to.have.property('config');
        // expect(instance.config).to.be(expectedValueLiteral);
      });

      it('should have the property architecture (base name: "Architecture")', function() {
        // TODO: update the code to test the property architecture
        expect(instance).to.have.property('architecture');
        // expect(instance.architecture).to.be(expectedValueLiteral);
      });

      it('should have the property os (base name: "Os")', function() {
        // TODO: update the code to test the property os
        expect(instance).to.have.property('os');
        // expect(instance.os).to.be(expectedValueLiteral);
      });

      it('should have the property osVersion (base name: "OsVersion")', function() {
        // TODO: update the code to test the property osVersion
        expect(instance).to.have.property('osVersion');
        // expect(instance.osVersion).to.be(expectedValueLiteral);
      });

      it('should have the property size (base name: "Size")', function() {
        // TODO: update the code to test the property size
        expect(instance).to.have.property('size');
        // expect(instance.size).to.be(expectedValueLiteral);
      });

      it('should have the property virtualSize (base name: "VirtualSize")', function() {
        // TODO: update the code to test the property virtualSize
        expect(instance).to.have.property('virtualSize');
        // expect(instance.virtualSize).to.be(expectedValueLiteral);
      });

      it('should have the property graphDriver (base name: "GraphDriver")', function() {
        // TODO: update the code to test the property graphDriver
        expect(instance).to.have.property('graphDriver');
        // expect(instance.graphDriver).to.be(expectedValueLiteral);
      });

      it('should have the property rootFS (base name: "RootFS")', function() {
        // TODO: update the code to test the property rootFS
        expect(instance).to.have.property('rootFS');
        // expect(instance.rootFS).to.be(expectedValueLiteral);
      });

      it('should have the property metadata (base name: "Metadata")', function() {
        // TODO: update the code to test the property metadata
        expect(instance).to.have.property('metadata');
        // expect(instance.metadata).to.be(expectedValueLiteral);
      });

    });
  });

}));
