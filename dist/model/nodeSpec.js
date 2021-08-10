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
 * The NodeSpec model module.
 * @module model/NodeSpec
 * @version 1.41
 */
var NodeSpec = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>NodeSpec</code>.
   * @alias module:model/NodeSpec
   */
  function NodeSpec() {
    _classCallCheck(this, NodeSpec);

    NodeSpec.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(NodeSpec, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>NodeSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/NodeSpec} obj Optional instance to populate.
     * @return {module:model/NodeSpec} The populated <code>NodeSpec</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new NodeSpec();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Role')) {
          obj['Role'] = _ApiClient["default"].convertToType(data['Role'], 'String');
        }

        if (data.hasOwnProperty('Availability')) {
          obj['Availability'] = _ApiClient["default"].convertToType(data['Availability'], 'String');
        }
      }

      return obj;
    }
  }]);

  return NodeSpec;
}();
/**
 * Name for the node.
 * @member {String} Name
 */


NodeSpec.prototype['Name'] = undefined;
/**
 * User-defined key/value metadata.
 * @member {Object.<String, String>} Labels
 */

NodeSpec.prototype['Labels'] = undefined;
/**
 * Role of the node.
 * @member {module:model/NodeSpec.RoleEnum} Role
 */

NodeSpec.prototype['Role'] = undefined;
/**
 * Availability of the node.
 * @member {module:model/NodeSpec.AvailabilityEnum} Availability
 */

NodeSpec.prototype['Availability'] = undefined;
/**
 * Allowed values for the <code>Role</code> property.
 * @enum {String}
 * @readonly
 */

NodeSpec['RoleEnum'] = {
  /**
   * value: "worker"
   * @const
   */
  "worker": "worker",

  /**
   * value: "manager"
   * @const
   */
  "manager": "manager"
};
/**
 * Allowed values for the <code>Availability</code> property.
 * @enum {String}
 * @readonly
 */

NodeSpec['AvailabilityEnum'] = {
  /**
   * value: "active"
   * @const
   */
  "active": "active",

  /**
   * value: "pause"
   * @const
   */
  "pause": "pause",

  /**
   * value: "drain"
   * @const
   */
  "drain": "drain"
};
var _default = NodeSpec;
exports["default"] = _default;