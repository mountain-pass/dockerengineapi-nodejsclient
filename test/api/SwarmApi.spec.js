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
    instance = new DockerEngineApi.SwarmApi();
  });

  describe('(package)', function() {
    describe('SwarmApi', function() {
      describe('swarmInit', function() {
        it('should call swarmInit successfully', function(done) {
          // TODO: uncomment, update parameter values for swarmInit call and complete the assertions
          /*
          var body = new DockerEngineApi.Body1();
          body.listenAddr = "";
          body.advertiseAddr = "";
          body.dataPathAddr = "";
          body.dataPathPort = 0;
          body.defaultAddrPool = [""];
          body.forceNewCluster = false;
          body.subnetSize = 0;
          body.spec = new DockerEngineApi.SwarmSpec();
          body.spec.name = "default";
          body.spec.labels = {"com.example.corp.type":"production","com.example.corp.department":"engineering"};
          body.spec.orchestration = new DockerEngineApi.SwarmSpecOrchestration();
          body.spec.orchestration.taskHistoryRetentionLimit = 10;
          body.spec.raft = new DockerEngineApi.SwarmSpecRaft();
          body.spec.raft.snapshotInterval = 10000;
          body.spec.raft.keepOldSnapshots = 0;
          body.spec.raft.logEntriesForSlowFollowers = 500;
          body.spec.raft.electionTick = 3;
          body.spec.raft.heartbeatTick = 1;
          body.spec.dispatcher = new DockerEngineApi.SwarmSpecDispatcher();
          body.spec.dispatcher.heartbeatPeriod = 5000000000;
          body.spec.cAConfig = new DockerEngineApi.SwarmSpecCAConfig();
          body.spec.cAConfig.nodeCertExpiry = 7776000000000000;
          body.spec.cAConfig.externalCAs = [new DockerEngineApi.SwarmSpecCAConfigExternalCAs()];
          body.spec.cAConfig.externalCAs[0].protocol = "cfssl";
          body.spec.cAConfig.externalCAs[0].URL = "";
          body.spec.cAConfig.externalCAs[0].options = {key: ""};
          body.spec.cAConfig.externalCAs[0].cACert = "";
          body.spec.cAConfig.signingCACert = "";
          body.spec.cAConfig.signingCAKey = "";
          body.spec.cAConfig.forceRotate = 0;
          body.spec.encryptionConfig = new DockerEngineApi.SwarmSpecEncryptionConfig();
          body.spec.encryptionConfig.autoLockManagers = false;
          body.spec.taskDefaults = new DockerEngineApi.SwarmSpecTaskDefaults();
          body.spec.taskDefaults.logDriver = new DockerEngineApi.SwarmSpecTaskDefaultsLogDriver();
          body.spec.taskDefaults.logDriver.name = "json-file";
          body.spec.taskDefaults.logDriver.options = {"max-file":"10","max-size":"100m"};

          instance.swarmInit(body, function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a('string');
            // expect(data).to.be(null);

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('swarmInspect', function() {
        it('should call swarmInspect successfully', function(done) {
          // TODO: uncomment swarmInspect call and complete the assertions
          /*

          instance.swarmInspect(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DockerEngineApi.Swarm);
            expect(data.ID).to.be.a('string');
            expect(data.ID).to.be("abajmipo7b4xz5ip2nrla6b11");
            expect(data.version).to.be.a(DockerEngineApi.ObjectVersion);
                  expect(data.version.index).to.be.a('number');
              expect(data.version.index).to.be(373531);
            expect(data.createdAt).to.be.a('string');
            expect(data.createdAt).to.be("2016-08-18T10:44:24.496525531Z");
            expect(data.updatedAt).to.be.a('string');
            expect(data.updatedAt).to.be("2017-08-09T07:09:37.632105588Z");
            expect(data.spec).to.be.a(DockerEngineApi.SwarmSpec);
                  expect(data.spec.name).to.be.a('string');
              expect(data.spec.name).to.be("default");
              {
                let dataCtr = data.spec.labels;
                expect(dataCtr).to.be.an(Object);
                expect(dataCtr).to.not.be.empty();
                for (let p in dataCtr) {
                  let data = dataCtr[p];
                  expect(data).to.be.a('string');
                  expect(data).to.be("");
                }
              }
              expect(data.spec.orchestration).to.be.a(DockerEngineApi.SwarmSpecOrchestration);
                    expect(data.spec.orchestration.taskHistoryRetentionLimit).to.be.a('number');
                expect(data.spec.orchestration.taskHistoryRetentionLimit).to.be(10);
              expect(data.spec.raft).to.be.a(DockerEngineApi.SwarmSpecRaft);
                    expect(data.spec.raft.snapshotInterval).to.be.a('number');
                expect(data.spec.raft.snapshotInterval).to.be(10000);
                expect(data.spec.raft.keepOldSnapshots).to.be.a('number');
                expect(data.spec.raft.keepOldSnapshots).to.be(0);
                expect(data.spec.raft.logEntriesForSlowFollowers).to.be.a('number');
                expect(data.spec.raft.logEntriesForSlowFollowers).to.be(500);
                expect(data.spec.raft.electionTick).to.be.a('number');
                expect(data.spec.raft.electionTick).to.be(3);
                expect(data.spec.raft.heartbeatTick).to.be.a('number');
                expect(data.spec.raft.heartbeatTick).to.be(1);
              expect(data.spec.dispatcher).to.be.a(DockerEngineApi.SwarmSpecDispatcher);
                    expect(data.spec.dispatcher.heartbeatPeriod).to.be.a('number');
                expect(data.spec.dispatcher.heartbeatPeriod).to.be(5000000000);
              expect(data.spec.cAConfig).to.be.a(DockerEngineApi.SwarmSpecCAConfig);
                    expect(data.spec.cAConfig.nodeCertExpiry).to.be.a('number');
                expect(data.spec.cAConfig.nodeCertExpiry).to.be(7776000000000000);
                {
                  let dataCtr = data.spec.cAConfig.externalCAs;
                  expect(dataCtr).to.be.an(Array);
                  expect(dataCtr).to.not.be.empty();
                  for (let p in dataCtr) {
                    let data = dataCtr[p];
                    expect(data).to.be.a(DockerEngineApi.SwarmSpecCAConfigExternalCAs);
                    expect(data.protocol).to.be.a('string');
                    expect(data.protocol).to.be("cfssl");
                    expect(data.URL).to.be.a('string');
                    expect(data.URL).to.be("");
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
                    expect(data.cACert).to.be.a('string');
                    expect(data.cACert).to.be("");
    
                          }
                }
                expect(data.spec.cAConfig.signingCACert).to.be.a('string');
                expect(data.spec.cAConfig.signingCACert).to.be("");
                expect(data.spec.cAConfig.signingCAKey).to.be.a('string');
                expect(data.spec.cAConfig.signingCAKey).to.be("");
                expect(data.spec.cAConfig.forceRotate).to.be.a('number');
                expect(data.spec.cAConfig.forceRotate).to.be(0);
              expect(data.spec.encryptionConfig).to.be.a(DockerEngineApi.SwarmSpecEncryptionConfig);
                    expect(data.spec.encryptionConfig.autoLockManagers).to.be.a('boolean');
                expect(data.spec.encryptionConfig.autoLockManagers).to.be(false);
              expect(data.spec.taskDefaults).to.be.a(DockerEngineApi.SwarmSpecTaskDefaults);
                    expect(data.spec.taskDefaults.logDriver).to.be.a(DockerEngineApi.SwarmSpecTaskDefaultsLogDriver);
                      expect(data.spec.taskDefaults.logDriver.name).to.be.a('string');
                  expect(data.spec.taskDefaults.logDriver.name).to.be("json-file");
                  {
                    let dataCtr = data.spec.taskDefaults.logDriver.options;
                    expect(dataCtr).to.be.an(Object);
                    expect(dataCtr).to.not.be.empty();
                    for (let p in dataCtr) {
                      let data = dataCtr[p];
                      expect(data).to.be.a('string');
                      expect(data).to.be("");
                    }
                  }
            expect(data.tLSInfo).to.be.a(DockerEngineApi.TLSInfo);
                  expect(data.tLSInfo.trustRoot).to.be.a('string');
              expect(data.tLSInfo.trustRoot).to.be("");
              expect(data.tLSInfo.certIssuerSubject).to.be.a('string');
              expect(data.tLSInfo.certIssuerSubject).to.be("");
              expect(data.tLSInfo.certIssuerPublicKey).to.be.a('string');
              expect(data.tLSInfo.certIssuerPublicKey).to.be("");
            expect(data.rootRotationInProgress).to.be.a('boolean');
            expect(data.rootRotationInProgress).to.be(false);
            expect(data.dataPathPort).to.be.a('number');
            expect(data.dataPathPort).to.be(4789);
            {
              let dataCtr = data.defaultAddrPool;
              expect(dataCtr).to.be.an(Array);
              expect(dataCtr).to.not.be.empty();
              for (let p in dataCtr) {
                let data = dataCtr[p];
                expect(data).to.be.a('string');
                expect(data).to.be("");
              }
            }
            expect(data.subnetSize).to.be.a('number');
            expect(data.subnetSize).to.be(24);
            expect(data.joinTokens).to.be.a(DockerEngineApi.JoinTokens);
                  expect(data.joinTokens.worker).to.be.a('string');
              expect(data.joinTokens.worker).to.be("SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-1awxwuwd3z9j1z3puu7rcgdbx");
              expect(data.joinTokens.manager).to.be.a('string');
              expect(data.joinTokens.manager).to.be("SWMTKN-1-3pu6hszjas19xyp7ghgosyx9k8atbfcr8p2is99znpy26u2lkl-7p73s1dx5in4tatdymyhg9hu2");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('swarmJoin', function() {
        it('should call swarmJoin successfully', function(done) {
          // TODO: uncomment, update parameter values for swarmJoin call
          /*
          var body = new DockerEngineApi.Body2();
          body.listenAddr = "";
          body.advertiseAddr = "";
          body.dataPathAddr = "";
          body.remoteAddrs = [""];
          body.joinToken = "";

          instance.swarmJoin(body, function(error, data, response) {
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
      describe('swarmLeave', function() {
        it('should call swarmLeave successfully', function(done) {
          // TODO: uncomment, update parameter values for swarmLeave call
          /*
          var opts = {};
          opts.force = false;

          instance.swarmLeave(opts, function(error, data, response) {
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
      describe('swarmUnlock', function() {
        it('should call swarmUnlock successfully', function(done) {
          // TODO: uncomment, update parameter values for swarmUnlock call
          /*
          var body = new DockerEngineApi.Body3();
          body.unlockKey = "";

          instance.swarmUnlock(body, function(error, data, response) {
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
      describe('swarmUnlockkey', function() {
        it('should call swarmUnlockkey successfully', function(done) {
          // TODO: uncomment swarmUnlockkey call and complete the assertions
          /*

          instance.swarmUnlockkey(function(error, data, response) {
            if (error) {
              done(error);
              return;
            }
            // TODO: update response assertions
            expect(data).to.be.a(DockerEngineApi.UnlockKeyResponse);
            expect(data.unlockKey).to.be.a('string');
            expect(data.unlockKey).to.be("");

            done();
          });
          */
          // TODO: uncomment and complete method invocation above, then delete this line and the next:
          done();
        });
      });
      describe('swarmUpdate', function() {
        it('should call swarmUpdate successfully', function(done) {
          // TODO: uncomment, update parameter values for swarmUpdate call
          /*
          var body = new DockerEngineApi.SwarmSpec();
          body.name = "default";
          body.labels = {"com.example.corp.type":"production","com.example.corp.department":"engineering"};
          body.orchestration = new DockerEngineApi.SwarmSpecOrchestration();
          body.orchestration.taskHistoryRetentionLimit = 10;
          body.raft = new DockerEngineApi.SwarmSpecRaft();
          body.raft.snapshotInterval = 10000;
          body.raft.keepOldSnapshots = 0;
          body.raft.logEntriesForSlowFollowers = 500;
          body.raft.electionTick = 3;
          body.raft.heartbeatTick = 1;
          body.dispatcher = new DockerEngineApi.SwarmSpecDispatcher();
          body.dispatcher.heartbeatPeriod = 5000000000;
          body.cAConfig = new DockerEngineApi.SwarmSpecCAConfig();
          body.cAConfig.nodeCertExpiry = 7776000000000000;
          body.cAConfig.externalCAs = [new DockerEngineApi.SwarmSpecCAConfigExternalCAs()];
          body.cAConfig.externalCAs[0].protocol = "cfssl";
          body.cAConfig.externalCAs[0].URL = "";
          body.cAConfig.externalCAs[0].options = {key: ""};
          body.cAConfig.externalCAs[0].cACert = "";
          body.cAConfig.signingCACert = "";
          body.cAConfig.signingCAKey = "";
          body.cAConfig.forceRotate = 0;
          body.encryptionConfig = new DockerEngineApi.SwarmSpecEncryptionConfig();
          body.encryptionConfig.autoLockManagers = false;
          body.taskDefaults = new DockerEngineApi.SwarmSpecTaskDefaults();
          body.taskDefaults.logDriver = new DockerEngineApi.SwarmSpecTaskDefaultsLogDriver();
          body.taskDefaults.logDriver.name = "json-file";
          body.taskDefaults.logDriver.options = {"max-file":"10","max-size":"100m"};
          var version = 789;
          var opts = {};
          opts.rotateWorkerToken = false;
          opts.rotateManagerToken = false;
          opts.rotateManagerUnlockKey = false;

          instance.swarmUpdate(body, version, opts, function(error, data, response) {
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
    });
  });

}));
