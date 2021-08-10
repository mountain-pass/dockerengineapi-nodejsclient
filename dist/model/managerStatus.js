"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Reachability = _interopRequireDefault(require("./Reachability"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The ManagerStatus model module.
 * @module model/ManagerStatus
 * @version 1.41
 */
var ManagerStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ManagerStatus</code>.
   * ManagerStatus represents the status of a manager.  It provides the current status of a node&#39;s manager component, if the node is a manager. 
   * @alias module:model/ManagerStatus
   */
  function ManagerStatus() {
    _classCallCheck(this, ManagerStatus);

    ManagerStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ManagerStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ManagerStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ManagerStatus} obj Optional instance to populate.
     * @return {module:model/ManagerStatus} The populated <code>ManagerStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ManagerStatus();

        if (data.hasOwnProperty('Leader')) {
          obj['Leader'] = _ApiClient["default"].convertToType(data['Leader'], 'Boolean');
        }

        if (data.hasOwnProperty('Reachability')) {
          obj['Reachability'] = _Reachability["default"].constructFromObject(data['Reachability']);
        }

        if (data.hasOwnProperty('Addr')) {
          obj['Addr'] = _ApiClient["default"].convertToType(data['Addr'], 'String');
        }
      }

      return obj;
    }
  }]);

  return ManagerStatus;
}();
/**
 * @member {Boolean} Leader
 * @default false
 */


ManagerStatus.prototype['Leader'] = false;
/**
 * @member {module:model/Reachability} Reachability
 */

ManagerStatus.prototype['Reachability'] = undefined;
/**
 * The IP address and port at which the manager is reachable. 
 * @member {String} Addr
 */

ManagerStatus.prototype['Addr'] = undefined;
var _default = ManagerStatus;
exports["default"] = _default;