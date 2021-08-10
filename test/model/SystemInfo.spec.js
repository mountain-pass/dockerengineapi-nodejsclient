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
    instance = new DockerEngineApi.SystemInfo();
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

  describe('SystemInfo', function() {
    it('should create an instance of SystemInfo', function() {
      // uncomment below and update the code to test SystemInfo
      //var instane = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be.a(DockerEngineApi.SystemInfo);
    });

    it('should have the property ID (base name: "ID")', function() {
      // uncomment below and update the code to test the property ID
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property containers (base name: "Containers")', function() {
      // uncomment below and update the code to test the property containers
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property containersRunning (base name: "ContainersRunning")', function() {
      // uncomment below and update the code to test the property containersRunning
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property containersPaused (base name: "ContainersPaused")', function() {
      // uncomment below and update the code to test the property containersPaused
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property containersStopped (base name: "ContainersStopped")', function() {
      // uncomment below and update the code to test the property containersStopped
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property images (base name: "Images")', function() {
      // uncomment below and update the code to test the property images
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property driver (base name: "Driver")', function() {
      // uncomment below and update the code to test the property driver
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property driverStatus (base name: "DriverStatus")', function() {
      // uncomment below and update the code to test the property driverStatus
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property dockerRootDir (base name: "DockerRootDir")', function() {
      // uncomment below and update the code to test the property dockerRootDir
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property plugins (base name: "Plugins")', function() {
      // uncomment below and update the code to test the property plugins
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property memoryLimit (base name: "MemoryLimit")', function() {
      // uncomment below and update the code to test the property memoryLimit
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property swapLimit (base name: "SwapLimit")', function() {
      // uncomment below and update the code to test the property swapLimit
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property kernelMemory (base name: "KernelMemory")', function() {
      // uncomment below and update the code to test the property kernelMemory
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuCfsPeriod (base name: "CpuCfsPeriod")', function() {
      // uncomment below and update the code to test the property cpuCfsPeriod
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property cpuCfsQuota (base name: "CpuCfsQuota")', function() {
      // uncomment below and update the code to test the property cpuCfsQuota
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property cPUShares (base name: "CPUShares")', function() {
      // uncomment below and update the code to test the property cPUShares
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property cPUSet (base name: "CPUSet")', function() {
      // uncomment below and update the code to test the property cPUSet
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property pidsLimit (base name: "PidsLimit")', function() {
      // uncomment below and update the code to test the property pidsLimit
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property oomKillDisable (base name: "OomKillDisable")', function() {
      // uncomment below and update the code to test the property oomKillDisable
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property iPv4Forwarding (base name: "IPv4Forwarding")', function() {
      // uncomment below and update the code to test the property iPv4Forwarding
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property bridgeNfIptables (base name: "BridgeNfIptables")', function() {
      // uncomment below and update the code to test the property bridgeNfIptables
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property bridgeNfIp6tables (base name: "BridgeNfIp6tables")', function() {
      // uncomment below and update the code to test the property bridgeNfIp6tables
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property debug (base name: "Debug")', function() {
      // uncomment below and update the code to test the property debug
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property nFd (base name: "NFd")', function() {
      // uncomment below and update the code to test the property nFd
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property nGoroutines (base name: "NGoroutines")', function() {
      // uncomment below and update the code to test the property nGoroutines
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property systemTime (base name: "SystemTime")', function() {
      // uncomment below and update the code to test the property systemTime
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property loggingDriver (base name: "LoggingDriver")', function() {
      // uncomment below and update the code to test the property loggingDriver
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property cgroupDriver (base name: "CgroupDriver")', function() {
      // uncomment below and update the code to test the property cgroupDriver
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property cgroupVersion (base name: "CgroupVersion")', function() {
      // uncomment below and update the code to test the property cgroupVersion
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property nEventsListener (base name: "NEventsListener")', function() {
      // uncomment below and update the code to test the property nEventsListener
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property kernelVersion (base name: "KernelVersion")', function() {
      // uncomment below and update the code to test the property kernelVersion
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property operatingSystem (base name: "OperatingSystem")', function() {
      // uncomment below and update the code to test the property operatingSystem
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property oSVersion (base name: "OSVersion")', function() {
      // uncomment below and update the code to test the property oSVersion
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property oSType (base name: "OSType")', function() {
      // uncomment below and update the code to test the property oSType
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property architecture (base name: "Architecture")', function() {
      // uncomment below and update the code to test the property architecture
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property NCPU (base name: "NCPU")', function() {
      // uncomment below and update the code to test the property NCPU
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property memTotal (base name: "MemTotal")', function() {
      // uncomment below and update the code to test the property memTotal
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property indexServerAddress (base name: "IndexServerAddress")', function() {
      // uncomment below and update the code to test the property indexServerAddress
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property registryConfig (base name: "RegistryConfig")', function() {
      // uncomment below and update the code to test the property registryConfig
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property genericResources (base name: "GenericResources")', function() {
      // uncomment below and update the code to test the property genericResources
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property httpProxy (base name: "HttpProxy")', function() {
      // uncomment below and update the code to test the property httpProxy
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property httpsProxy (base name: "HttpsProxy")', function() {
      // uncomment below and update the code to test the property httpsProxy
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property noProxy (base name: "NoProxy")', function() {
      // uncomment below and update the code to test the property noProxy
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property name (base name: "Name")', function() {
      // uncomment below and update the code to test the property name
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property labels (base name: "Labels")', function() {
      // uncomment below and update the code to test the property labels
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property experimentalBuild (base name: "ExperimentalBuild")', function() {
      // uncomment below and update the code to test the property experimentalBuild
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property serverVersion (base name: "ServerVersion")', function() {
      // uncomment below and update the code to test the property serverVersion
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property clusterStore (base name: "ClusterStore")', function() {
      // uncomment below and update the code to test the property clusterStore
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property clusterAdvertise (base name: "ClusterAdvertise")', function() {
      // uncomment below and update the code to test the property clusterAdvertise
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property runtimes (base name: "Runtimes")', function() {
      // uncomment below and update the code to test the property runtimes
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property defaultRuntime (base name: "DefaultRuntime")', function() {
      // uncomment below and update the code to test the property defaultRuntime
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property swarm (base name: "Swarm")', function() {
      // uncomment below and update the code to test the property swarm
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property liveRestoreEnabled (base name: "LiveRestoreEnabled")', function() {
      // uncomment below and update the code to test the property liveRestoreEnabled
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property isolation (base name: "Isolation")', function() {
      // uncomment below and update the code to test the property isolation
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property initBinary (base name: "InitBinary")', function() {
      // uncomment below and update the code to test the property initBinary
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property containerdCommit (base name: "ContainerdCommit")', function() {
      // uncomment below and update the code to test the property containerdCommit
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property runcCommit (base name: "RuncCommit")', function() {
      // uncomment below and update the code to test the property runcCommit
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property initCommit (base name: "InitCommit")', function() {
      // uncomment below and update the code to test the property initCommit
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property securityOptions (base name: "SecurityOptions")', function() {
      // uncomment below and update the code to test the property securityOptions
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property productLicense (base name: "ProductLicense")', function() {
      // uncomment below and update the code to test the property productLicense
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property defaultAddressPools (base name: "DefaultAddressPools")', function() {
      // uncomment below and update the code to test the property defaultAddressPools
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

    it('should have the property warnings (base name: "Warnings")', function() {
      // uncomment below and update the code to test the property warnings
      //var instance = new DockerEngineApi.SystemInfo();
      //expect(instance).to.be();
    });

  });

}));
