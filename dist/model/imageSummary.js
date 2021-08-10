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
 * The ImageSummary model module.
 * @module model/ImageSummary
 * @version 1.41
 */
var ImageSummary = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>ImageSummary</code>.
   * @alias module:model/ImageSummary
   * @param id {String} 
   * @param parentId {String} 
   * @param repoTags {Array.<String>} 
   * @param repoDigests {Array.<String>} 
   * @param created {Number} 
   * @param size {Number} 
   * @param sharedSize {Number} 
   * @param virtualSize {Number} 
   * @param labels {Object.<String, String>} 
   * @param containers {Number} 
   */
  function ImageSummary(id, parentId, repoTags, repoDigests, created, size, sharedSize, virtualSize, labels, containers) {
    _classCallCheck(this, ImageSummary);

    ImageSummary.initialize(this, id, parentId, repoTags, repoDigests, created, size, sharedSize, virtualSize, labels, containers);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(ImageSummary, null, [{
    key: "initialize",
    value: function initialize(obj, id, parentId, repoTags, repoDigests, created, size, sharedSize, virtualSize, labels, containers) {
      obj['Id'] = id;
      obj['ParentId'] = parentId;
      obj['RepoTags'] = repoTags;
      obj['RepoDigests'] = repoDigests;
      obj['Created'] = created;
      obj['Size'] = size;
      obj['SharedSize'] = sharedSize;
      obj['VirtualSize'] = virtualSize;
      obj['Labels'] = labels;
      obj['Containers'] = containers;
    }
    /**
     * Constructs a <code>ImageSummary</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ImageSummary} obj Optional instance to populate.
     * @return {module:model/ImageSummary} The populated <code>ImageSummary</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new ImageSummary();

        if (data.hasOwnProperty('Id')) {
          obj['Id'] = _ApiClient["default"].convertToType(data['Id'], 'String');
        }

        if (data.hasOwnProperty('ParentId')) {
          obj['ParentId'] = _ApiClient["default"].convertToType(data['ParentId'], 'String');
        }

        if (data.hasOwnProperty('RepoTags')) {
          obj['RepoTags'] = _ApiClient["default"].convertToType(data['RepoTags'], ['String']);
        }

        if (data.hasOwnProperty('RepoDigests')) {
          obj['RepoDigests'] = _ApiClient["default"].convertToType(data['RepoDigests'], ['String']);
        }

        if (data.hasOwnProperty('Created')) {
          obj['Created'] = _ApiClient["default"].convertToType(data['Created'], 'Number');
        }

        if (data.hasOwnProperty('Size')) {
          obj['Size'] = _ApiClient["default"].convertToType(data['Size'], 'Number');
        }

        if (data.hasOwnProperty('SharedSize')) {
          obj['SharedSize'] = _ApiClient["default"].convertToType(data['SharedSize'], 'Number');
        }

        if (data.hasOwnProperty('VirtualSize')) {
          obj['VirtualSize'] = _ApiClient["default"].convertToType(data['VirtualSize'], 'Number');
        }

        if (data.hasOwnProperty('Labels')) {
          obj['Labels'] = _ApiClient["default"].convertToType(data['Labels'], {
            'String': 'String'
          });
        }

        if (data.hasOwnProperty('Containers')) {
          obj['Containers'] = _ApiClient["default"].convertToType(data['Containers'], 'Number');
        }
      }

      return obj;
    }
  }]);

  return ImageSummary;
}();
/**
 * @member {String} Id
 */


ImageSummary.prototype['Id'] = undefined;
/**
 * @member {String} ParentId
 */

ImageSummary.prototype['ParentId'] = undefined;
/**
 * @member {Array.<String>} RepoTags
 */

ImageSummary.prototype['RepoTags'] = undefined;
/**
 * @member {Array.<String>} RepoDigests
 */

ImageSummary.prototype['RepoDigests'] = undefined;
/**
 * @member {Number} Created
 */

ImageSummary.prototype['Created'] = undefined;
/**
 * @member {Number} Size
 */

ImageSummary.prototype['Size'] = undefined;
/**
 * @member {Number} SharedSize
 */

ImageSummary.prototype['SharedSize'] = undefined;
/**
 * @member {Number} VirtualSize
 */

ImageSummary.prototype['VirtualSize'] = undefined;
/**
 * @member {Object.<String, String>} Labels
 */

ImageSummary.prototype['Labels'] = undefined;
/**
 * @member {Number} Containers
 */

ImageSummary.prototype['Containers'] = undefined;
var _default = ImageSummary;
exports["default"] = _default;