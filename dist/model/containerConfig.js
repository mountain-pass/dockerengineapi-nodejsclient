"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _HealthConfig = _interopRequireDefault(require("./HealthConfig"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ContainerConfig model module.
 * @module model/ContainerConfig
 * @version 1.41
 */
var ContainerConfig = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerConfig</code>.
   * Configuration for a container that is portable between hosts
   * @alias module:model/ContainerConfig
   */
  function ContainerConfig() {
    _classCallCheck(this, ContainerConfig);

    ContainerConfig.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerConfig, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContainerConfig</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerConfig} obj Optional instance to populate.
     * @return {module:model/ContainerConfig} The populated <code>ContainerConfig</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerConfig();

        if (data.hasOwnProperty('Hostname')) {
          obj['Hostname'] = _ApiClient["default"].convertToType(data['Hostname'], 'String');
        }

        if (data.hasOwnProperty('Domainname')) {
          obj['Domainname'] = _ApiClient["default"].convertToType(data['Domainname'], 'String');
        }

        if (data.hasOwnProperty('User')) {
          obj['User'] = _ApiClient["default"].convertToType(data['User'], 'String');
        }

        if (data.hasOwnProperty('AttachStdin')) {
          obj['AttachStdin'] = _ApiClient["default"].convertToType(data['AttachStdin'], 'Boolean');
        }

        if (data.hasOwnProperty('AttachStdout')) {
          obj['AttachStdout'] = _ApiClient["default"].convertToType(data['AttachStdout'], 'Boolean');
        }

        if (data.hasOwnProperty('AttachStderr')) {
          obj['AttachStderr'] = _ApiClient["default"].convertToType(data['AttachStderr'], 'Boolean');
        }

        if (data.hasOwnProperty('ExposedPorts')) {
          obj['ExposedPorts'] = _ApiClient["default"].convertToType(data['ExposedPorts'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('Tty')) {
          obj['Tty'] = _ApiClient["default"].convertToType(data['Tty'], 'Boolean');
        }

        if (data.hasOwnProperty('OpenStdin')) {
          obj['OpenStdin'] = _ApiClient["default"].convertToType(data['OpenStdin'], 'Boolean');
        }

        if (data.hasOwnProperty('StdinOnce')) {
          obj['StdinOnce'] = _ApiClient["default"].convertToType(data['StdinOnce'], 'Boolean');
        }

        if (data.hasOwnProperty('Env')) {
          obj['Env'] = _ApiClient["default"].convertToType(data['Env'], ['String']);
        }

        if (data.hasOwnProperty('Cmd')) {
          obj['Cmd'] = _ApiClient["default"].convertToType(data['Cmd'], ['String']);
        }

        if (data.hasOwnProperty('Healthcheck')) {
          obj['Healthcheck'] = _HealthConfig["default"].constructFromObject(data['Healthcheck']);
        }

        if (data.hasOwnProperty('ArgsEscaped')) {
          obj['ArgsEscaped'] = _ApiClient["default"].convertToType(data['ArgsEscaped'], 'Boolean');
        }

        if (data.hasOwnProperty('Image')) {
          obj['Image'] = _ApiClient["default"].convertToType(data['Image'], 'String');
        }

        if (data.hasOwnProperty('Volumes')) {
          obj['Volumes'] = _ApiClient["default"].convertToType(data['Volumes'], {
            'String': Object
          });
        }

        if (data.hasOwnProperty('WorkingDir')) {
          obj['WorkingDir'] = _ApiClient["default"].convertToType(data['WorkingDir'], 'String');
        }

        if (data.hasOwnProperty('Entrypoint')) {
          obj['Entrypoint'] = _ApiClient["default"].convertToType(data['Entrypoint'], ['String']);
        }

        if (data.hasOwnProperty('NetworkDisabled')) {
          obj['NetworkDisabled'] = _ApiClient["default"].convertToType(data['NetworkDisabled'], 'Boolean');
        }

        if (data.hasOwnProperty('MacAddress')) {
          obj['MacAddress'] = _ApiClient["default"].convertToType(data['MacAddress'], 'String');
        }

        if (data.hasOwnProperty('OnBuild')) {
          obj['OnBuild'] = _ApiClient["default"].convertToType(data['OnBuild'], ['String']);
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('StopSignal')) {
          obj['StopSignal'] = _ApiClient["default"].convertToType(data['StopSignal'], 'String');
        }

        if (data.hasOwnProperty('StopTimeout')) {
          obj['StopTimeout'] = _ApiClient["default"].convertToType(data['StopTimeout'], 'Number');
        }

        if (data.hasOwnProperty('Shell')) {
          obj['Shell'] = _ApiClient["default"].convertToType(data['Shell'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return ContainerConfig;
}();
/**
 * The hostname to use for the container, as a valid RFC 1123 hostname.
 * @member {String} Hostname
 */


ContainerConfig.prototype['Hostname'] = undefined;
/**
 * The domain name to use for the container.
 * @member {String} Domainname
 */

ContainerConfig.prototype['Domainname'] = undefined;
/**
 * The user that commands are run as inside the container.
 * @member {String} User
 */

ContainerConfig.prototype['User'] = undefined;
/**
 * Whether to attach to `stdin`.
 * @member {Boolean} AttachStdin
 * @default false
 */

ContainerConfig.prototype['AttachStdin'] = false;
/**
 * Whether to attach to `stdout`.
 * @member {Boolean} AttachStdout
 * @default true
 */

ContainerConfig.prototype['AttachStdout'] = true;
/**
 * Whether to attach to `stderr`.
 * @member {Boolean} AttachStderr
 * @default true
 */

ContainerConfig.prototype['AttachStderr'] = true;
/**
 * An object mapping ports to an empty object in the form:  `{\"<port>/<tcp|udp|sctp>\": {}}` 
 * @member {Object.<String, Object>} ExposedPorts
 */

ContainerConfig.prototype['ExposedPorts'] = undefined;
/**
 * Attach standard streams to a TTY, including `stdin` if it is not closed. 
 * @member {Boolean} Tty
 * @default false
 */

ContainerConfig.prototype['Tty'] = false;
/**
 * Open `stdin`
 * @member {Boolean} OpenStdin
 * @default false
 */

ContainerConfig.prototype['OpenStdin'] = false;
/**
 * Close `stdin` after one attached client disconnects
 * @member {Boolean} StdinOnce
 * @default false
 */

ContainerConfig.prototype['StdinOnce'] = false;
/**
 * A list of environment variables to set inside the container in the form `[\"VAR=value\", ...]`. A variable without `=` is removed from the environment, rather than to have an empty value. 
 * @member {Array.<String>} Env
 */

ContainerConfig.prototype['Env'] = undefined;
/**
 * Command to run specified as a string or an array of strings. 
 * @member {Array.<String>} Cmd
 */

ContainerConfig.prototype['Cmd'] = undefined;
/**
 * @member {module:model/HealthConfig} Healthcheck
 */

ContainerConfig.prototype['Healthcheck'] = undefined;
/**
 * Command is already escaped (Windows only)
 * @member {Boolean} ArgsEscaped
 */

ContainerConfig.prototype['ArgsEscaped'] = undefined;
/**
 * The name of the image to use when creating the container/ 
 * @member {String} Image
 */

ContainerConfig.prototype['Image'] = undefined;
/**
 * An object mapping mount point paths inside the container to empty objects. 
 * @member {Object.<String, Object>} Volumes
 */

ContainerConfig.prototype['Volumes'] = undefined;
/**
 * The working directory for commands to run in.
 * @member {String} WorkingDir
 */

ContainerConfig.prototype['WorkingDir'] = undefined;
/**
 * The entry point for the container as a string or an array of strings.  If the array consists of exactly one empty string (`[\"\"]`) then the entry point is reset to system default (i.e., the entry point used by docker when there is no `ENTRYPOINT` instruction in the `Dockerfile`). 
 * @member {Array.<String>} Entrypoint
 */

ContainerConfig.prototype['Entrypoint'] = undefined;
/**
 * Disable networking for the container.
 * @member {Boolean} NetworkDisabled
 */

ContainerConfig.prototype['NetworkDisabled'] = undefined;
/**
 * MAC address of the container.
 * @member {String} MacAddress
 */

ContainerConfig.prototype['MacAddress'] = undefined;
/**
 * `ONBUILD` metadata that were defined in the image's `Dockerfile`. 
 * @member {Array.<String>} OnBuild
 */

ContainerConfig.prototype['OnBuild'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

ContainerConfig.prototype['Labels'] = undefined;
/**
 * Signal to stop a container as a string or unsigned integer. 
 * @member {String} StopSignal
 * @default 'SIGTERM'
 */

ContainerConfig.prototype['StopSignal'] = 'SIGTERM';
/**
 * Timeout to stop a container in seconds.
 * @member {Number} StopTimeout
 */

ContainerConfig.prototype['StopTimeout'] = undefined;
/**
 * Shell for when `RUN`, `CMD`, and `ENTRYPOINT` uses a shell. 
 * @member {Array.<String>} Shell
 */

ContainerConfig.prototype['Shell'] = undefined;
var _default = ContainerConfig;
exports["default"] = _default;