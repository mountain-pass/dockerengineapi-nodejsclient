"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _PluginConfig = _interopRequireDefault(require("./PluginConfig"));

var _PluginSettings = _interopRequireDefault(require("./PluginSettings"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Plugin model module.
 * @module model/Plugin
 * @version 1.41
 */
var Plugin = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Plugin</code>.
   * A plugin for the Engine API
   * @alias module:model/Plugin
   * @param name {String} 
   * @param enabled {Boolean} True if the plugin is running. False if the plugin is not running, only installed.
   * @param settings {module:model/PluginSettings} 
   * @param config {module:model/PluginConfig} 
   */
  function Plugin(name, enabled, settings, config) {
    _classCallCheck(this, Plugin);

    Plugin.initialize(this, name, enabled, settings, config);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Plugin, null, [{
    key: "initialize",
    value: function initialize(obj, name, enabled, settings, config) {
      obj['Name'] = name;
      obj['Enabled'] = enabled;
      obj['Settings'] = settings;
      obj['Config'] = config;
    }
    /**
     * Constructs a <code>Plugin</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Plugin} obj Optional instance to populate.
     * @return {module:model/Plugin} The populated <code>Plugin</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Plugin();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('Name')) {
          obj['Name'] = _ApiClient["default"].convertToType(data['Name'], 'String');
        }

        if (data.hasOwnProperty('Enabled')) {
          obj['Enabled'] = _ApiClient["default"].convertToType(data['Enabled'], 'Boolean');
        }

        if (data.hasOwnProperty('Settings')) {
          obj['Settings'] = _PluginSettings["default"].constructFromObject(data['Settings']);
        }

        if (data.hasOwnProperty('PluginReference')) {
          obj['PluginReference'] = _ApiClient["default"].convertToType(data['PluginReference'], 'String');
        }

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _PluginConfig["default"].constructFromObject(data['Config']);
        }
      }

      return obj;
    }
  }]);

  return Plugin;
}();
/**
 * @member {String} Id
 */


Plugin.prototype['Id'] = undefined;
/**
 * @member {String} Name
 */

Plugin.prototype['Name'] = undefined;
/**
 * True if the plugin is running. False if the plugin is not running, only installed.
 * @member {Boolean} Enabled
 */

Plugin.prototype['Enabled'] = undefined;
/**
 * @member {module:model/PluginSettings} Settings
 */

Plugin.prototype['Settings'] = undefined;
/**
 * plugin remote reference used to push/pull the plugin
 * @member {String} PluginReference
 */

Plugin.prototype['PluginReference'] = undefined;
/**
 * @member {module:model/PluginConfig} Config
 */

Plugin.prototype['Config'] = undefined;
var _default = Plugin;
exports["default"] = _default;