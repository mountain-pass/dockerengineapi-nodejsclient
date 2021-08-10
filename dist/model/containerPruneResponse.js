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
 * The ContainerPruneResponse model module.
 * @module model/ContainerPruneResponse
 * @version 1.41
 */
var ContainerPruneResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ContainerPruneResponse</code>.
   * @alias module:model/ContainerPruneResponse
   */
  function ContainerPruneResponse() {
    _classCallCheck(this, ContainerPruneResponse);

    ContainerPruneResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ContainerPruneResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>ContainerPruneResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerPruneResponse} obj Optional instance to populate.
     * @return {module:model/ContainerPruneResponse} The populated <code>ContainerPruneResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ContainerPruneResponse();

        if (data.hasOwnProperty('ContainersDeleted')) {
          obj['ContainersDeleted'] = _ApiClient["default"].convertToType(data['ContainersDeleted'], ['String']);
        }

        if (data.hasOwnProperty('SpaceReclaimed')) {
          obj['SpaceReclaimed'] = _ApiClient["default"].convertToType(data['SpaceReclaimed'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ContainerPruneResponse;
}();
/**
 * Container IDs that were deleted
 * @member {Array.<String>} ContainersDeleted
 */


ContainerPruneResponse.prototype['ContainersDeleted'] = undefined;
/**
 * Disk space reclaimed in bytes
 * @member {Number} SpaceReclaimed
 */

ContainerPruneResponse.prototype['SpaceReclaimed'] = undefined;
var _default = ContainerPruneResponse;
exports["default"] = _default;