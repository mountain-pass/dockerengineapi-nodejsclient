"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Runtime model module.
 * @module model/Runtime
 * @version 1.41
 */
var Runtime = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Runtime</code>.
   * Runtime describes an [OCI compliant](https://github.com/opencontainers/runtime-spec) runtime.  The runtime is invoked by the daemon via the &#x60;containerd&#x60; daemon. OCI runtimes act as an interface to the Linux kernel namespaces, cgroups, and SELinux. 
   * @alias module:model/Runtime
   */
  function Runtime() {
    _classCallCheck(this, Runtime);

    Runtime.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Runtime, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Runtime</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Runtime} obj Optional instance to populate.
     * @return {module:model/Runtime} The populated <code>Runtime</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Runtime();

        if (data.hasOwnProperty('path')) {
          obj['path'] = _ApiClient["default"].convertToType(data['path'], 'String');
        }

        if (data.hasOwnProperty('runtimeArgs')) {
          obj['runtimeArgs'] = _ApiClient["default"].convertToType(data['runtimeArgs'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return Runtime;
}();
/**
 * Name and, optional, path, of the OCI executable binary.  If the path is omitted, the daemon searches the host's `$PATH` for the binary and uses the first result. 
 * @member {String} path
 */


Runtime.prototype['path'] = undefined;
/**
 * List of command-line arguments to pass to the runtime when invoked. 
 * @member {Array.<String>} runtimeArgs
 */

Runtime.prototype['runtimeArgs'] = undefined;
var _default = Runtime;
exports["default"] = _default;