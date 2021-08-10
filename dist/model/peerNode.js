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
 * The PeerNode model module.
 * @module model/PeerNode
 * @version 1.41
 */
var PeerNode = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>PeerNode</code>.
   * Represents a peer-node in the swarm
   * @alias module:model/PeerNode
   */
  function PeerNode() {
    _classCallCheck(this, PeerNode);

    PeerNode.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(PeerNode, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>PeerNode</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/PeerNode} obj Optional instance to populate.
     * @return {module:model/PeerNode} The populated <code>PeerNode</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new PeerNode();

        if (data.hasOwnProperty('NodeID')) {
          obj['NodeID'] = _ApiClient["default"].convertToType(data['NodeID'], 'String');
        }

        if (data.hasOwnProperty('Addr')) {
          obj['Addr'] = _ApiClient["default"].convertToType(data['Addr'], 'String');
        }
      }

      return obj;
    }
  }]);

  return PeerNode;
}();
/**
 * Unique identifier of for this node in the swarm.
 * @member {String} NodeID
 */


PeerNode.prototype['NodeID'] = undefined;
/**
 * IP address and ports at which this node can be reached. 
 * @member {String} Addr
 */

PeerNode.prototype['Addr'] = undefined;
var _default = PeerNode;
exports["default"] = _default;