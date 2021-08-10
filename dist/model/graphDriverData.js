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
 * The GraphDriverData model module.
 * @module model/GraphDriverData
 * @version 1.41
 */
var GraphDriverData = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>GraphDriverData</code>.
   * Information about a container&#39;s graph driver.
   * @alias module:model/GraphDriverData
   * @param name {String} 
   * @param data {Object.<String, String>} 
   */
  function GraphDriverData(name, data) {
    _classCallCheck(this, GraphDriverData);

    GraphDriverData.initialize(this, name, data);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(GraphDriverData, null, [{
    key: "initialize",
    value: function initialize(obj, name, data) {
      obj['Name'] = name;
      obj['Data'] = data;
    }
    /**
     * Constructs a <code>GraphDriverData</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/GraphDriverData} obj Optional instance to populate.
     * @return {module:model/GraphDriverData} The populated <code>GraphDriverData</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new GraphDriverData();

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Data')) {
          obj['Data'] = _ApiClient["default"].convertToType(data['Data'], {
            'String': 'String'
          });
        }
      }

      return obj;
    }
  }]);

  return GraphDriverData;
}();
/**
 * @member {String} Name
 */


GraphDriverData.prototype['Name'] = undefined;
/**
 * @member {Object.<String, String>} Data
 */

GraphDriverData.prototype['Data'] = undefined;
var _default = GraphDriverData;
exports["default"] = _default;