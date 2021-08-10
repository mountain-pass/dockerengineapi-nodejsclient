"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _ContainerConfig = _interopRequireDefault(require("./ContainerConfig"));

var _GraphDriverData = _interopRequireDefault(require("./GraphDriverData"));

var _ImageMetadata = _interopRequireDefault(require("./ImageMetadata"));

var _ImageRootFS = _interopRequireDefault(require("./ImageRootFS"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The Image model module.
 * @module model/Image
 * @version 1.41
 */
var Image = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>Image</code>.
   * @alias module:model/Image
   * @param id {String} 
   * @param parent {String} 
   * @param comment {String} 
   * @param created {String} 
   * @param container {String} 
   * @param dockerVersion {String} 
   * @param author {String} 
   * @param architecture {String} 
   * @param os {String} 
   * @param size {Number} 
   * @param virtualSize {Number} 
   * @param graphDriver {module:model/GraphDriverData} 
   * @param rootFS {module:model/ImageRootFS} 
   */
  function Image(id, parent, comment, created, container, dockerVersion, author, architecture, os, size, virtualSize, graphDriver, rootFS) {
    _classCallCheck(this, Image);

    Image.initialize(this, id, parent, comment, created, container, dockerVersion, author, architecture, os, size, virtualSize, graphDriver, rootFS);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(Image, null, [{
    key: "initialize",
    value: function initialize(obj, id, parent, comment, created, container, dockerVersion, author, architecture, os, size, virtualSize, graphDriver, rootFS) {
      obj['Id'] = id;
      obj['Parent'] = parent;
      obj['Comment'] = comment;
      obj['Created'] = created;
      obj['Container'] = container;
      obj['DockerVersion'] = dockerVersion;
      obj['Author'] = author;
      obj['Architecture'] = architecture;
      obj['Os'] = os;
      obj['Size'] = size;
      obj['VirtualSize'] = virtualSize;
      obj['GraphDriver'] = graphDriver;
      obj['RootFS'] = rootFS;
    }
    /**
     * Constructs a <code>Image</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Image} obj Optional instance to populate.
     * @return {module:model/Image} The populated <code>Image</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new Image();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('RepoTags')) {
          obj['RepoTags'] = _ApiClient["default"].convertToType(data['RepoTags'], ['String']);
        }

        if (data.hasOwnProperty('RepoDigests')) {
          obj['RepoDigests'] = _ApiClient["default"].convertToType(data['RepoDigests'], ['String']);
        }

        if (data.hasOwnProperty('Parent')) {
          obj['Parent'] = _ApiClient["default"].convertToType(data['Parent'], 'String');
        }

        if (data.hasOwnProperty('Comment')) {
          obj['Comment'] = _ApiClient["default"].convertToType(data['Comment'], 'String');
        }

        if (data.hasOwnProperty('Created')) {
          obj['Created'] = _ApiClient["default"].convertToType(data['Created'], 'String');
        }

        if (data.hasOwnProperty('Container')) {
          obj['Container'] = _ApiClient["default"].convertToType(data['Container'], 'String');
        }

        if (data.hasOwnProperty('ContainerConfig')) {
          obj['ContainerConfig'] = _ContainerConfig["default"].constructFromObject(data['ContainerConfig']);
        }

        if (data.hasOwnProperty('DockerVersion')) {
          obj['DockerVersion'] = _ApiClient["default"].convertToType(data['DockerVersion'], 'String');
        }

        if (data.hasOwnProperty('Author')) {
          obj['Author'] = _ApiClient["default"].convertToType(data['Author'], 'String');
        }

        if (data.hasOwnProperty('Config')) {
          obj['Config'] = _ContainerConfig["default"].constructFromObject(data['Config']);
        }

        if (data.hasOwnProperty('Architecture')) {
          obj['Architecture'] = _ApiClient["default"].convertToType(data['Architecture'], 'String');
        }

        if (data.hasOwnProperty('Os')) {
          obj['Os'] = _ApiClient["default"].convertToType(data['Os'], 'String');
        }

        if (data.hasOwnProperty('OsVersion')) {
          obj['OsVersion'] = _ApiClient["default"].convertToType(data['OsVersion'], 'String');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('VirtualSize')) {
          obj['VirtualSize'] = _ApiClient["default"].convertToType(data['VirtualSize'], 'Number');
        }

        if (data.hasOwnProperty('GraphDriver')) {
          obj['GraphDriver'] = _GraphDriverData["default"].constructFromObject(data['GraphDriver']);
        }

        if (data.hasOwnProperty('RootFS')) {
          obj['RootFS'] = _ImageRootFS["default"].constructFromObject(data['RootFS']);
        }

        if (data.hasOwnProperty('Metadata')) {
          obj['Metadata'] = _ImageMetadata["default"].constructFromObject(data['Metadata']);
        }
      }

      return obj;
    }
  }]);

  return Image;
}();
/**
 * @member {String} Id
 */


Image.prototype['Id'] = undefined;
/**
 * @member {Array.<String>} RepoTags
 */

Image.prototype['RepoTags'] = undefined;
/**
 * @member {Array.<String>} RepoDigests
 */

Image.prototype['RepoDigests'] = undefined;
/**
 * @member {String} Parent
 */

Image.prototype['Parent'] = undefined;
/**
 * @member {String} Comment
 */

Image.prototype['Comment'] = undefined;
/**
 * @member {String} Created
 */

Image.prototype['Created'] = undefined;
/**
 * @member {String} Container
 */

Image.prototype['Container'] = undefined;
/**
 * @member {module:model/ContainerConfig} ContainerConfig
 */

Image.prototype['ContainerConfig'] = undefined;
/**
 * @member {String} DockerVersion
 */

Image.prototype['DockerVersion'] = undefined;
/**
 * @member {String} Author
 */

Image.prototype['Author'] = undefined;
/**
 * @member {module:model/ContainerConfig} Config
 */

Image.prototype['Config'] = undefined;
/**
 * @member {String} Architecture
 */

Image.prototype['Architecture'] = undefined;
/**
 * @member {String} Os
 */

Image.prototype['Os'] = undefined;
/**
 * @member {String} OsVersion
 */

Image.prototype['OsVersion'] = undefined;
/**
 * @member {Number} Size
 */

Image.prototype['Size'] = undefined;
/**
 * @member {Number} VirtualSize
 */

Image.prototype['VirtualSize'] = undefined;
/**
 * @member {module:model/GraphDriverData} GraphDriver
 */

Image.prototype['GraphDriver'] = undefined;
/**
 * @member {module:model/ImageRootFS} RootFS
 */

Image.prototype['RootFS'] = undefined;
/**
 * @member {module:model/ImageMetadata} Metadata
 */

Image.prototype['Metadata'] = undefined;
var _default = Image;
exports["default"] = _default;