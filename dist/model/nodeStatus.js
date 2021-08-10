"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _NodeState = _interopRequireDefault(require("./NodeState"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The NodeStatus model module.
 * @module model/NodeStatus
 * @version 1.41
 */
var NodeStatus = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NodeStatus</code>.
   * NodeStatus represents the status of a node.  It provides the current status of the node, as seen by the manager. 
   * @alias module:model/NodeStatus
   */
  function NodeStatus() {
    _classCallCheck(this, NodeStatus);

    NodeStatus.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NodeStatus, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NodeStatus</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeStatus} obj Optional instance to populate.
     * @return {module:model/NodeStatus} The populated <code>NodeStatus</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NodeStatus();

        if (data.hasOwnProperty('State')) {
          obj['State'] = _NodeState["default"].constructFromObject(data['State']);
        }

        if (data.hasOwnProperty('Message')) {
          obj['Message'] = _ApiClient["default"].convertToType(data['Message'], 'String');
        }

        if (data.hasOwnProperty('Addr')) {
          obj['Addr'] = _ApiClient["default"].convertToType(data['Addr'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NodeStatus;
}();
/**
 * @member {module:model/NodeState} State
 */


NodeStatus.prototype['State'] = undefined;
/**
 * @member {String} Message
 */

NodeStatus.prototype['Message'] = undefined;
/**
 * IP address of the node.
 * @member {String} Addr
 */

NodeStatus.prototype['Addr'] = undefined;
var _default = NodeStatus;
exports["default"] = _default;