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
 * The Commit model module.
 * @module model/Commit
 * @version 1.41
 */
var Commit = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Commit</code>.
   * Commit holds the Git-commit (SHA1) that a binary was built from, as reported in the version-string of external tools, such as &#x60;containerd&#x60;, or &#x60;runC&#x60;. 
   * @alias module:model/Commit
   */
  function Commit() {
    _classCallCheck(this, Commit);

    Commit.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Commit, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Commit</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Commit} obj Optional instance to populate.
     * @return {module:model/Commit} The populated <code>Commit</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Commit();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Expected')) {
          obj['Expected'] = _ApiClient["default"].convertToType(data['Expected'], 'String');
        }
      }

      return obj;
    }
  }]);

  return Commit;
}();
/**
 * Actual commit ID of external tool.
 * @member {String} ID
 */


Commit.prototype['ID'] = undefined;
/**
 * Commit ID of external tool expected by dockerd as set at build time. 
 * @member {String} Expected
 */

Commit.prototype['Expected'] = undefined;
var _default = Commit;
exports["default"] = _default;