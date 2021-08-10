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
import IPAM from './IPAM';
import NetworkContainer from './NetworkContainer';

/**
 * The Network model module.
 * @module model/Network
 * @version 1.41
 */
class Network {
    /**
     * Constructs a new <code>Network</code>.
     * @alias module:model/Network
     */
    constructor() { 
        
        Network.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Network</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Network} obj Optional instance to populate.
     * @return {module:model/Network} The populated <code>Network</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Network();

            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('Created')) {
                obj['Created'] = ApiClient.convertToType(data['Created'], 'String');
            }
            if (data.hasOwnProperty('Scope')) {
                obj['Scope'] = ApiClient.convertToType(data['Scope'], 'String');
            }
            if (data.hasOwnProperty('Driver')) {
                obj['Driver'] = ApiClient.convertToType(data['Driver'], 'String');
            }
            if (data.hasOwnProperty('EnableIPv6')) {
                obj['EnableIPv6'] = ApiClient.convertToType(data['EnableIPv6'], 'Boolean');
            }
            if (data.hasOwnProperty('IPAM')) {
                obj['IPAM'] = IPAM.constructFromObject(data['IPAM']);
            }
            if (data.hasOwnProperty('Internal')) {
                obj['Internal'] = ApiClient.convertToType(data['Internal'], 'Boolean');
            }
            if (data.hasOwnProperty('Attachable')) {
                obj['Attachable'] = ApiClient.convertToType(data['Attachable'], 'Boolean');
            }
            if (data.hasOwnProperty('Ingress')) {
                obj['Ingress'] = ApiClient.convertToType(data['Ingress'], 'Boolean');
            }
            if (data.hasOwnProperty('Containers')) {
                obj['Containers'] = ApiClient.convertToType(data['Containers'], {'String': NetworkContainer});
            }
            if (data.hasOwnProperty('Options')) {
                obj['Options'] = ApiClient.convertToType(data['Options'], {'String': 'String'});
            }
            if (data.hasOwnProperty('Labels')) {
                obj['Labels'] = ApiClient.convertToType(data['Labels'], {'String': 'String'});
            }
        }
        return obj;
    }


}

/**
 * @member {String} Name
 */
Network.prototype['Name'] = undefined;

/**
 * @member {String} Id
 */
Network.prototype['Id'] = undefined;

/**
 * @member {String} Created
 */
Network.prototype['Created'] = undefined;

/**
 * @member {String} Scope
 */
Network.prototype['Scope'] = undefined;

/**
 * @member {String} Driver
 */
Network.prototype['Driver'] = undefined;

/**
 * @member {Boolean} EnableIPv6
 */
Network.prototype['EnableIPv6'] = undefined;

/**
 * @member {module:model/IPAM} IPAM
 */
Network.prototype['IPAM'] = undefined;

/**
 * @member {Boolean} Internal
 */
Network.prototype['Internal'] = undefined;

/**
 * @member {Boolean} Attachable
 */
Network.prototype['Attachable'] = undefined;

/**
 * @member {Boolean} Ingress
 */
Network.prototype['Ingress'] = undefined;

/**
 * @member {Object.<String, module:model/NetworkContainer>} Containers
 */
Network.prototype['Containers'] = undefined;

/**
 * @member {Object.<String, String>} Options
 */
Network.prototype['Options'] = undefined;

/**
 * @member {Object.<String, String>} Labels
 */
Network.prototype['Labels'] = undefined;






export default Network;

