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
 * The Limit model module.
 * @module model/Limit
 * @version 1.41
 */
var Limit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Limit</code>.
   * An object describing a limit on resources which can be requested by a task. 
   * @alias module:model/Limit
   */
  function Limit() {
    _classCallCheck(this, Limit);

    Limit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Limit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Limit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Limit} obj Optional instance to populate.
     * @return {module:model/Limit} The populated <code>Limit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Limit();

        if (data.hasOwnProperty('NanoCPUs')) {
          obj['NanoCPUs'] = _ApiClient["default"].convertToType(data['NanoCPUs'], 'Number');
        }

        if (data.hasOwnProperty('MemoryBytes')) {
          obj['MemoryBytes'] = _ApiClient["default"].convertToType(data['MemoryBytes'], 'Number');
        }

        if (data.hasOwnProperty('Pids')) {
          obj['Pids'] = _ApiClient["default"].convertToType(data['Pids'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return Limit;
}();
/**
 * @member {Number} NanoCPUs
 */


Limit.prototype['NanoCPUs'] = undefined;
/**
 * @member {Number} MemoryBytes
 */

Limit.prototype['MemoryBytes'] = undefined;
/**
 * Limits the maximum number of PIDs in the container. Set `0` for unlimited. 
 * @member {Number} Pids
 * @default 0
 */

Limit.prototype['Pids'] = 0;
var _default = Limit;
exports["default"] = _default;