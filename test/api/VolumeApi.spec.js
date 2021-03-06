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

  beforeEach(function() {
    instance = new DockerEngineApi.VolumeApi();
  });

  describe('(package)', function() {
    describe('VolumeApi', function() {
      describe('volumeCreate', function() {
        it('should call volumeCreate successfully', function(done) {
          // TODO: uncomment, update parameter values for volumeCreate call and complete the assertions
          /*
          var volumeConfig = new DockerEngineApi.VolumeConfig();
          volumeConfig.name = "";
          volumeConfig.driver = "";
          volumeConfig.driverOpts = {key: ""};
          volumeConfig.labels = {key: ""};

          instance.volumeCreate(volumeConfig, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DockerEngineApi.Volume);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.driver).to.be.a('string');
            expect(data.driver).to.be("");
            expect(data.mountpoint).to.be.a('string');
            expect(data.mountpoint).to.be("");
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("");
            {
              let dataCtr = data.status;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.scope).to.be.a('string');
            expect(data.scope).to.be("local");
            {
              let dataCtr = data.options;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.usageData).to.be.a(DockerEngineApi.VolumeUsageData);
                  expect(data.usageData.size).to.be.a('number');
              expect(data.usageData.size).to.be(0);
              expect(data.usageData.refCount).to.be.a('number');
              expect(data.usageData.refCount).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('volumeDelete', function() {
        it('should call volumeDelete successfully', function(done) {
          // TODO: uncomment, update parameter values for volumeDelete call
          /*
          var name = "name_example";
          var opts = {};
          opts.force = false;

          instance.volumeDelete(name, opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('volumeInspect', function() {
        it('should call volumeInspect successfully', function(done) {
          // TODO: uncomment, update parameter values for volumeInspect call and complete the assertions
          /*
          var name = "name_example";

          instance.volumeInspect(name, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DockerEngineApi.Volume);
            expect(data.name).to.be.a('string');
            expect(data.name).to.be("");
            expect(data.driver).to.be.a('string');
            expect(data.driver).to.be("");
            expect(data.mountpoint).to.be.a('string');
            expect(data.mountpoint).to.be("");
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("");
            {
              let dataCtr = data.status;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(Object);
                expect(data).to.be();
              }
            }
            {
              let dataCtr = data.labels;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.scope).to.be.a('string');
            expect(data.scope).to.be("local");
            {
              let dataCtr = data.options;
              expect(dataCtr).to.be.an(Object);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.usageData).to.be.a(DockerEngineApi.VolumeUsageData);
                  expect(data.usageData.size).to.be.a('number');
              expect(data.usageData.size).to.be(0);
              expect(data.usageData.refCount).to.be.a('number');
              expect(data.usageData.refCount).to.be(0);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('volumeList', function() {
        it('should call volumeList successfully', function(done) {
          // TODO: uncomment, update parameter values for volumeList call and complete the assertions
          /*
          var opts = {};
          opts.filters = "filters_example";

          instance.volumeList(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DockerEngineApi.VolumeListResponse);
            {
              let dataCtr = data.volumes;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a(DockerEngineApi.Volume);
                expect(data.name).to.be.a('string');
                expect(data.name).to.be("");
                expect(data.driver).to.be.a('string');
                expect(data.driver).to.be("");
                expect(data.mountpoint).to.be.a('string');
                expect(data.mountpoint).to.be("");
                expect(data.createdAt).to.be.a('string');
                expect(data.createdAt).to.be("");
                {
                  let dataCtr = data.status;
                  expect(dataCtr).to.be.an(Object);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(Object);
                    expect(data).to.be();
                  }
                }
                {
                  let dataCtr = data.labels;
                  expect(dataCtr).to.be.an(Object);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.scope).to.be.a('string');
                expect(data.scope).to.be("local");
                {
                  let dataCtr = data.options;
                  expect(dataCtr).to.be.an(Object);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a('string');
                    expect(data).to.be("");
                  }
                }
                expect(data.usageData).to.be.a(DockerEngineApi.VolumeUsageData);
                      expect(data.usageData.size).to.be.a('number');
                  expect(data.usageData.size).to.be(0);
                  expect(data.usageData.refCount).to.be.a('number');
                  expect(data.usageData.refCount).to.be(0);

                      }
            }
            {
              let dataCtr = data.warnings;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('volumePrune', function() {
        it('should call volumePrune successfully', function(done) {
          // TODO: uncomment, update parameter values for volumePrune call and complete the assertions
          /*
          var opts = {};
          opts.filters = "filters_example";

          instance.volumePrune(opts, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DockerEngineApi.VolumePruneResponse);
            {
              let dataCtr = data.volumesDeleted;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.spaceReclaimed).to.be.a('number');
            expect(data.spaceReclaimed).to.be("0");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
    });
  });

}));
