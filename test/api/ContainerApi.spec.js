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
    instance = new DockerEngineApi.ContainerApi();
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

  describe('ContainerApi', function() {
    describe('containerArchive', function() {
      it('should call containerArchive successfully', function(done) {
        //uncomment below and update the code to test containerArchive
        //instance.containerArchive(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerArchiveInfo', function() {
      it('should call containerArchiveInfo successfully', function(done) {
        //uncomment below and update the code to test containerArchiveInfo
        //instance.containerArchiveInfo(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerAttach', function() {
      it('should call containerAttach successfully', function(done) {
        //uncomment below and update the code to test containerAttach
        //instance.containerAttach(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerAttachWebsocket', function() {
      it('should call containerAttachWebsocket successfully', function(done) {
        //uncomment below and update the code to test containerAttachWebsocket
        //instance.containerAttachWebsocket(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerChanges', function() {
      it('should call containerChanges successfully', function(done) {
        //uncomment below and update the code to test containerChanges
        //instance.containerChanges(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerCreate', function() {
      it('should call containerCreate successfully', function(done) {
        //uncomment below and update the code to test containerCreate
        //instance.containerCreate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerDelete', function() {
      it('should call containerDelete successfully', function(done) {
        //uncomment below and update the code to test containerDelete
        //instance.containerDelete(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerExport', function() {
      it('should call containerExport successfully', function(done) {
        //uncomment below and update the code to test containerExport
        //instance.containerExport(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerInspect', function() {
      it('should call containerInspect successfully', function(done) {
        //uncomment below and update the code to test containerInspect
        //instance.containerInspect(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerKill', function() {
      it('should call containerKill successfully', function(done) {
        //uncomment below and update the code to test containerKill
        //instance.containerKill(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerList', function() {
      it('should call containerList successfully', function(done) {
        //uncomment below and update the code to test containerList
        //instance.containerList(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerLogs', function() {
      it('should call containerLogs successfully', function(done) {
        //uncomment below and update the code to test containerLogs
        //instance.containerLogs(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerPause', function() {
      it('should call containerPause successfully', function(done) {
        //uncomment below and update the code to test containerPause
        //instance.containerPause(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerPrune', function() {
      it('should call containerPrune successfully', function(done) {
        //uncomment below and update the code to test containerPrune
        //instance.containerPrune(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerRename', function() {
      it('should call containerRename successfully', function(done) {
        //uncomment below and update the code to test containerRename
        //instance.containerRename(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerResize', function() {
      it('should call containerResize successfully', function(done) {
        //uncomment below and update the code to test containerResize
        //instance.containerResize(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerRestart', function() {
      it('should call containerRestart successfully', function(done) {
        //uncomment below and update the code to test containerRestart
        //instance.containerRestart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerStart', function() {
      it('should call containerStart successfully', function(done) {
        //uncomment below and update the code to test containerStart
        //instance.containerStart(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerStats', function() {
      it('should call containerStats successfully', function(done) {
        //uncomment below and update the code to test containerStats
        //instance.containerStats(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerStop', function() {
      it('should call containerStop successfully', function(done) {
        //uncomment below and update the code to test containerStop
        //instance.containerStop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerTop', function() {
      it('should call containerTop successfully', function(done) {
        //uncomment below and update the code to test containerTop
        //instance.containerTop(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerUnpause', function() {
      it('should call containerUnpause successfully', function(done) {
        //uncomment below and update the code to test containerUnpause
        //instance.containerUnpause(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerUpdate', function() {
      it('should call containerUpdate successfully', function(done) {
        //uncomment below and update the code to test containerUpdate
        //instance.containerUpdate(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('containerWait', function() {
      it('should call containerWait successfully', function(done) {
        //uncomment below and update the code to test containerWait
        //instance.containerWait(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('putContainerArchive', function() {
      it('should call putContainerArchive successfully', function(done) {
        //uncomment below and update the code to test putContainerArchive
        //instance.putContainerArchive(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));