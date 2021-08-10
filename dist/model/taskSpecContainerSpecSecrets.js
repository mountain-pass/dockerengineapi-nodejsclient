"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _TaskSpecContainerSpecFile = _interopRequireDefault(require("./TaskSpecContainerSpecFile"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The TaskSpecContainerSpecSecrets model module.
 * @module model/TaskSpecContainerSpecSecrets
 * @version 1.41
 */
var TaskSpecContainerSpecSecrets = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>TaskSpecContainerSpecSecrets</code>.
   * @alias module:model/TaskSpecContainerSpecSecrets
   */
  function TaskSpecContainerSpecSecrets() {
    _classCallCheck(this, TaskSpecContainerSpecSecrets);

    TaskSpecContainerSpecSecrets.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(TaskSpecContainerSpecSecrets, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>TaskSpecContainerSpecSecrets</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpecContainerSpecSecrets} obj Optional instance to populate.
     * @return {module:model/TaskSpecContainerSpecSecrets} The populated <code>TaskSpecContainerSpecSecrets</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new TaskSpecContainerSpecSecrets();

        if (data.hasOwnProperty('File')) {
          obj['File'] = _TaskSpecContainerSpecFile["default"].constructFromObject(data['File']);
        }

        if (data.hasOwnProperty('SecretID')) {
          obj['SecretID'] = _ApiClient["default"].convertToType(data['SecretID'], 'String');
        }

        if (data.hasOwnProperty('SecretName')) {
          obj['SecretName'] = _ApiClient["default"].convertToType(data['SecretName'], 'String');
        }
      }

      return obj;
    }
  }]);

  return TaskSpecContainerSpecSecrets;
}();
/**
 * @member {module:model/TaskSpecContainerSpecFile} File
 */


TaskSpecContainerSpecSecrets.prototype['File'] = undefined;
/**
 * SecretID represents the ID of the specific secret that we're referencing. 
 * @member {String} SecretID
 */

TaskSpecContainerSpecSecrets.prototype['SecretID'] = undefined;
/**
 * SecretName is the name of the secret that this references, but this is just provided for lookup/display purposes. The secret in the reference will be identified by its ID. 
 * @member {String} SecretName
 */

TaskSpecContainerSpecSecrets.prototype['SecretName'] = undefined;
var _default = TaskSpecContainerSpecSecrets;
exports["default"] = _default;