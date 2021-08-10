"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ManagerStatus = _interopRequireDefault(require("./ManagerStatus"));

var _NodeDescription = _interopRequireDefault(require("./NodeDescription"));

var _NodeSpec = _interopRequireDefault(require("./NodeSpec"));

var _NodeStatus = _interopRequireDefault(require("./NodeStatus"));

var _ObjectVersion = _interopRequireDefault(require("./ObjectVersion"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Node model module.
 * @module model/Node
 * @version 1.41
 */
var Node = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Node</code>.
   * @alias module:model/Node
   */
  function Node() {
    _classCallCheck(this, Node);

    Node.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Node, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>Node</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Node} obj Optional instance to populate.
     * @return {module:model/Node} The populated <code>Node</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Node();

        if (data.hasOwnProperty('ID')) {
          obj['ID'] = _ApiClient["default"].convertToType(data['ID'], 'String');
        }

        if (data.hasOwnProperty('Version')) {
          obj['Version'] = _ObjectVersion["default"].constructFromObject(data['Version']);
        }

        if (data.hasOwnProperty('CreatedAt')) {
          obj['CreatedAt'] = _ApiClient["default"].convertToType(data['CreatedAt'], 'String');
        }

        if (data.hasOwnProperty('UpdatedAt')) {
          obj['UpdatedAt'] = _ApiClient["default"].convertToType(data['UpdatedAt'], 'String');
        }

        if (data.hasOwnProperty('Spec')) {
          obj['Spec'] = _NodeSpec["default"].constructFromObject(data['Spec']);
        }

        if (data.hasOwnProperty('Description')) {
          obj['Description'] = _NodeDescription["default"].constructFromObject(data['Description']);
        }

        if (data.hasOwnProperty('Status')) {
          obj['Status'] = _NodeStatus["default"].constructFromObject(data['Status']);
        }

        if (data.hasOwnProperty('ManagerStatus')) {
          obj['ManagerStatus'] = _ManagerStatus["default"].constructFromObject(data['ManagerStatus']);
        }
      }

      return obj;
    }
  }]);

  return Node;
}();
/**
 * @member {String} ID
 */


Node.prototype['ID'] = undefined;
/**
 * @member {module:model/ObjectVersion} Version
 */

Node.prototype['Version'] = undefined;
/**
 * Date and time at which the node was added to the swarm in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} CreatedAt
 */

Node.prototype['CreatedAt'] = undefined;
/**
 * Date and time at which the node was last updated in [RFC 3339](https://www.ietf.org/rfc/rfc3339.txt) format with nano-seconds. 
 * @member {String} UpdatedAt
 */

Node.prototype['UpdatedAt'] = undefined;
/**
 * @member {module:model/NodeSpec} Spec
 */

Node.prototype['Spec'] = undefined;
/**
 * @member {module:model/NodeDescription} Description
 */

Node.prototype['Description'] = undefined;
/**
 * @member {module:model/NodeStatus} Status
 */

Node.prototype['Status'] = undefined;
/**
 * @member {module:model/ManagerStatus} ManagerStatus
 */

Node.prototype['ManagerStatus'] = undefined;
var _default = Node;
exports["default"] = _default;