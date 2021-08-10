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
 * The VolumePruneResponse model module.
 * @module model/VolumePruneResponse
 * @version 1.41
 */
var VolumePruneResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>VolumePruneResponse</code>.
   * @alias module:model/VolumePruneResponse
   */
  function VolumePruneResponse() {
    _classCallCheck(this, VolumePruneResponse);

    VolumePruneResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(VolumePruneResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>VolumePruneResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/VolumePruneResponse} obj Optional instance to populate.
     * @return {module:model/VolumePruneResponse} The populated <code>VolumePruneResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new VolumePruneResponse();

        if (data.hasOwnProperty('VolumesDeleted')) {
          obj['VolumesDeleted'] = _ApiClient["default"].convertToType(data['VolumesDeleted'], ['String']);
        }

        if (data.hasOwnProperty('SpaceReclaimed')) {
          obj['SpaceReclaimed'] = _ApiClient["default"].convertToType(data['SpaceReclaimed'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return VolumePruneResponse;
}();
/**
 * Volumes that were deleted
 * @member {Array.<String>} VolumesDeleted
 */


VolumePruneResponse.prototype['VolumesDeleted'] = undefined;
/**
 * Disk space reclaimed in bytes
 * @member {Number} SpaceReclaimed
 */

VolumePruneResponse.prototype['SpaceReclaimed'] = undefined;
var _default = VolumePruneResponse;
exports["default"] = _default;