/**
 * Docker Engine API
 * The Engine API is an HTTP API served by Docker Engine. It is the API the Docker client uses to communicate with the Engine, so everything the Docker client can do can be done with the API.  Most of the client's commands map directly to API endpoints (e.g. `docker ps` is `GET /containers/json`). The notable exception is running containers, which consists of several API calls.  # Errors  The API uses standard HTTP status codes to indicate the success or failure of the API call. The body of the response will be JSON in the following format:  ``` {   \"message\": \"page not found\" } ```  # Versioning  The API is usually changed in each release, so API calls are versioned to ensure that clients don't break. To lock to a specific version of the API, you prefix the URL with its version, for example, call `/v1.30/info` to use the v1.30 version of the `/info` endpoint. If the API version specified in the URL is not supported by the daemon, a HTTP `400 Bad Request` error message is returned.  If you omit the version-prefix, the current version of the API (v1.41) is used. For example, calling `/info` is the same as calling `/v1.41/info`. Using the API without a version-prefix is deprecated and will be removed in a future release.  Engine releases in the near future should support this version of the API, so your client will continue to work even if it is talking to a newer Engine.  The API uses an open schema model, which means server may add extra properties to responses. Likewise, the server will ignore any extra query parameters and request body properties. When you write clients, you need to ignore additional properties in responses to ensure they do not break when talking to newer daemons.   # Authentication  Authentication for registries is handled client side. The client has to send authentication details to various endpoints that need to communicate with registries, such as `POST /images/(name)/push`. These are sent as `X-Registry-Auth` header as a [base64url encoded](https://tools.ietf.org/html/rfc4648#section-5) (JSON) string with the following structure:  ``` {   \"username\": \"string\",   \"password\": \"string\",   \"email\": \"string\",   \"serveraddress\": \"string\" } ```  The `serveraddress` is a domain/IP without a protocol. Throughout this structure, double quotes are required.  If you have already got an identity token from the [`/auth` endpoint](#operation/SystemAuth), you can just pass this instead of credentials:  ``` {   \"identitytoken\": \"9cbaf023786cd7...\" } ``` 
 *
 * The version of the OpenAPI document: 1.41
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

import ApiClient from '../ApiClient';
import ContainerConfig from './ContainerConfig';
import GraphDriverData from './GraphDriverData';
import ImageMetadata from './ImageMetadata';
import ImageRootFS from './ImageRootFS';

/**
 * The Image model module.
 * @module model/Image
 * @version 1.41
 */
class Image {
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
    constructor(id, parent, comment, created, container, dockerVersion, author, architecture, os, size, virtualSize, graphDriver, rootFS) { 
        
        Image.initialize(this, id, parent, comment, created, container, dockerVersion, author, architecture, os, size, virtualSize, graphDriver, rootFS);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, id, parent, comment, created, container, dockerVersion, author, architecture, os, size, virtualSize, graphDriver, rootFS) { 
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
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Image();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('RepoTags')) {
                obj['RepoTags'] = ApiClient.convertToType(data['RepoTags'], ['String']);
            }
            if (data.hasOwnProperty('RepoDigests')) {
                obj['RepoDigests'] = ApiClient.convertToType(data['RepoDigests'], ['String']);
            }
            if (data.hasOwnProperty('Parent')) {
                obj['Parent'] = ApiClient.convertToType(data['Parent'], 'String');
            }
            if (data.hasOwnProperty('Comment')) {
                obj['Comment'] = ApiClient.convertToType(data['Comment'], 'String');
            }
            if (data.hasOwnProperty('Created')) {
                obj['Created'] = ApiClient.convertToType(data['Created'], 'String');
            }
            if (data.hasOwnProperty('Container')) {
                obj['Container'] = ApiClient.convertToType(data['Container'], 'String');
            }
            if (data.hasOwnProperty('ContainerConfig')) {
                obj['ContainerConfig'] = ContainerConfig.constructFromObject(data['ContainerConfig']);
            }
            if (data.hasOwnProperty('DockerVersion')) {
                obj['DockerVersion'] = ApiClient.convertToType(data['DockerVersion'], 'String');
            }
            if (data.hasOwnProperty('Author')) {
                obj['Author'] = ApiClient.convertToType(data['Author'], 'String');
            }
            if (data.hasOwnProperty('Config')) {
                obj['Config'] = ContainerConfig.constructFromObject(data['Config']);
            }
            if (data.hasOwnProperty('Architecture')) {
                obj['Architecture'] = ApiClient.convertToType(data['Architecture'], 'String');
            }
            if (data.hasOwnProperty('Os')) {
                obj['Os'] = ApiClient.convertToType(data['Os'], 'String');
            }
            if (data.hasOwnProperty('OsVersion')) {
                obj['OsVersion'] = ApiClient.convertToType(data['OsVersion'], 'String');
            }
            if (data.hasOwnProperty('Size')) {
                obj['Size'] = ApiClient.convertToType(data['Size'], 'Number');
            }
            if (data.hasOwnProperty('VirtualSize')) {
                obj['VirtualSize'] = ApiClient.convertToType(data['VirtualSize'], 'Number');
            }
            if (data.hasOwnProperty('GraphDriver')) {
                obj['GraphDriver'] = GraphDriverData.constructFromObject(data['GraphDriver']);
            }
            if (data.hasOwnProperty('RootFS')) {
                obj['RootFS'] = ImageRootFS.constructFromObject(data['RootFS']);
            }
            if (data.hasOwnProperty('Metadata')) {
                obj['Metadata'] = ImageMetadata.constructFromObject(data['Metadata']);
            }
        }
        return obj;
    }


}

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






export default Image;

