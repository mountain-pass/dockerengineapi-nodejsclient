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
    describe('ContainerConfig', function() {
      beforeEach(function() {
        instance = new DockerEngineApi.ContainerConfig();
      });

      it('should create an instance of ContainerConfig', function() {
        // TODO: update the code to test ContainerConfig
        expect(instance).to.be.a(DockerEngineApi.ContainerConfig);
      });

      it('should have the property hostname (base name: "Hostname")', function() {
        // TODO: update the code to test the property hostname
        expect(instance).to.have.property('hostname');
        // expect(instance.hostname).to.be(expectedValueLiteral);
      });

      it('should have the property domainname (base name: "Domainname")', function() {
        // TODO: update the code to test the property domainname
        expect(instance).to.have.property('domainname');
        // expect(instance.domainname).to.be(expectedValueLiteral);
      });

      it('should have the property user (base name: "User")', function() {
        // TODO: update the code to test the property user
        expect(instance).to.have.property('user');
        // expect(instance.user).to.be(expectedValueLiteral);
      });

      it('should have the property attachStdin (base name: "AttachStdin")', function() {
        // TODO: update the code to test the property attachStdin
        expect(instance).to.have.property('attachStdin');
        // expect(instance.attachStdin).to.be(expectedValueLiteral);
      });

      it('should have the property attachStdout (base name: "AttachStdout")', function() {
        // TODO: update the code to test the property attachStdout
        expect(instance).to.have.property('attachStdout');
        // expect(instance.attachStdout).to.be(expectedValueLiteral);
      });

      it('should have the property attachStderr (base name: "AttachStderr")', function() {
        // TODO: update the code to test the property attachStderr
        expect(instance).to.have.property('attachStderr');
        // expect(instance.attachStderr).to.be(expectedValueLiteral);
      });

      it('should have the property exposedPorts (base name: "ExposedPorts")', function() {
        // TODO: update the code to test the property exposedPorts
        expect(instance).to.have.property('exposedPorts');
        // expect(instance.exposedPorts).to.be(expectedValueLiteral);
      });

      it('should have the property tty (base name: "Tty")', function() {
        // TODO: update the code to test the property tty
        expect(instance).to.have.property('tty');
        // expect(instance.tty).to.be(expectedValueLiteral);
      });

      it('should have the property openStdin (base name: "OpenStdin")', function() {
        // TODO: update the code to test the property openStdin
        expect(instance).to.have.property('openStdin');
        // expect(instance.openStdin).to.be(expectedValueLiteral);
      });

      it('should have the property stdinOnce (base name: "StdinOnce")', function() {
        // TODO: update the code to test the property stdinOnce
        expect(instance).to.have.property('stdinOnce');
        // expect(instance.stdinOnce).to.be(expectedValueLiteral);
      });

      it('should have the property env (base name: "Env")', function() {
        // TODO: update the code to test the property env
        expect(instance).to.have.property('env');
        // expect(instance.env).to.be(expectedValueLiteral);
      });

      it('should have the property cmd (base name: "Cmd")', function() {
        // TODO: update the code to test the property cmd
        expect(instance).to.have.property('cmd');
        // expect(instance.cmd).to.be(expectedValueLiteral);
      });

      it('should have the property healthcheck (base name: "Healthcheck")', function() {
        // TODO: update the code to test the property healthcheck
        expect(instance).to.have.property('healthcheck');
        // expect(instance.healthcheck).to.be(expectedValueLiteral);
      });

      it('should have the property argsEscaped (base name: "ArgsEscaped")', function() {
        // TODO: update the code to test the property argsEscaped
        expect(instance).to.have.property('argsEscaped');
        // expect(instance.argsEscaped).to.be(expectedValueLiteral);
      });

      it('should have the property image (base name: "Image")', function() {
        // TODO: update the code to test the property image
        expect(instance).to.have.property('image');
        // expect(instance.image).to.be(expectedValueLiteral);
      });

      it('should have the property volumes (base name: "Volumes")', function() {
        // TODO: update the code to test the property volumes
        expect(instance).to.have.property('volumes');
        // expect(instance.volumes).to.be(expectedValueLiteral);
      });

      it('should have the property workingDir (base name: "WorkingDir")', function() {
        // TODO: update the code to test the property workingDir
        expect(instance).to.have.property('workingDir');
        // expect(instance.workingDir).to.be(expectedValueLiteral);
      });

      it('should have the property entrypoint (base name: "Entrypoint")', function() {
        // TODO: update the code to test the property entrypoint
        expect(instance).to.have.property('entrypoint');
        // expect(instance.entrypoint).to.be(expectedValueLiteral);
      });

      it('should have the property networkDisabled (base name: "NetworkDisabled")', function() {
        // TODO: update the code to test the property networkDisabled
        expect(instance).to.have.property('networkDisabled');
        // expect(instance.networkDisabled).to.be(expectedValueLiteral);
      });

      it('should have the property macAddress (base name: "MacAddress")', function() {
        // TODO: update the code to test the property macAddress
        expect(instance).to.have.property('macAddress');
        // expect(instance.macAddress).to.be(expectedValueLiteral);
      });

      it('should have the property onBuild (base name: "OnBuild")', function() {
        // TODO: update the code to test the property onBuild
        expect(instance).to.have.property('onBuild');
        // expect(instance.onBuild).to.be(expectedValueLiteral);
      });

      it('should have the property labels (base name: "Labels")', function() {
        // TODO: update the code to test the property labels
        expect(instance).to.have.property('labels');
        // expect(instance.labels).to.be(expectedValueLiteral);
      });

      it('should have the property stopSignal (base name: "StopSignal")', function() {
        // TODO: update the code to test the property stopSignal
        expect(instance).to.have.property('stopSignal');
        // expect(instance.stopSignal).to.be(expectedValueLiteral);
      });

      it('should have the property stopTimeout (base name: "StopTimeout")', function() {
        // TODO: update the code to test the property stopTimeout
        expect(instance).to.have.property('stopTimeout');
        // expect(instance.stopTimeout).to.be(expectedValueLiteral);
      });

      it('should have the property shell (base name: "Shell")', function() {
        // TODO: update the code to test the property shell
        expect(instance).to.have.property('shell');
        // expect(instance.shell).to.be(expectedValueLiteral);
      });

    });
  });

}));
