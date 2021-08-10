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

/**
 * The Port model module.
 * @module model/Port
 * @version 1.41
 */
class Port {
    /**
     * Constructs a new <code>Port</code>.
     * An open port on a container
     * @alias module:model/Port
     * @param privatePort {Number} Port on the container
     * @param type {module:model/Port.TypeEnum} 
     */
    constructor(privatePort, type) { 
        
        Port.initialize(this, privatePort, type);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj, privatePort, type) { 
        obj['PrivatePort'] = privatePort;
        obj['Type'] = type;
    }

    /**
     * Constructs a <code>Port</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Port} obj Optional instance to populate.
     * @return {module:model/Port} The populated <code>Port</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Port();

            if (data.hasOwnProperty('IP')) {
                obj['IP'] = ApiClient.convertToType(data['IP'], 'String');
            }
            if (data.hasOwnProperty('PrivatePort')) {
                obj['PrivatePort'] = ApiClient.convertToType(data['PrivatePort'], 'Number');
            }
            if (data.hasOwnProperty('PublicPort')) {
                obj['PublicPort'] = ApiClient.convertToType(data['PublicPort'], 'Number');
            }
            if (data.hasOwnProperty('Type')) {
                obj['Type'] = ApiClient.convertToType(data['Type'], 'String');
            }
        }
        return obj;
    }


}

/**
 * Host IP address that the container's port is mapped to
 * @member {String} IP
 */
Port.prototype['IP'] = undefined;

/**
 * Port on the container
 * @member {Number} PrivatePort
 */
Port.prototype['PrivatePort'] = undefined;

/**
 * Port exposed on the host
 * @member {Number} PublicPort
 */
Port.prototype['PublicPort'] = undefined;

/**
 * @member {module:model/Port.TypeEnum} Type
 */
Port.prototype['Type'] = undefined;





/**
 * Allowed values for the <code>Type</code> property.
 * @enum {String}
 * @readonly
 */
Port['TypeEnum'] = {

    /**
     * value: "tcp"
     * @const
     */
    "tcp": "tcp",

    /**
     * value: "udp"
     * @const
     */
    "udp": "udp",

    /**
     * value: "sctp"
     * @const
     */
    "sctp": "sctp"
};



export default Port;

