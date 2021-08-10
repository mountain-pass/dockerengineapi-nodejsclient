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
import ClusterInfo from './ClusterInfo';
import LocalNodeState from './LocalNodeState';
import PeerNode from './PeerNode';

/**
 * The SwarmInfo model module.
 * @module model/SwarmInfo
 * @version 1.41
 */
class SwarmInfo {
    /**
     * Constructs a new <code>SwarmInfo</code>.
     * Represents generic information about swarm. 
     * @alias module:model/SwarmInfo
     */
    constructor() { 
        
        SwarmInfo.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>SwarmInfo</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/SwarmInfo} obj Optional instance to populate.
     * @return {module:model/SwarmInfo} The populated <code>SwarmInfo</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SwarmInfo();

            if (data.hasOwnProperty('NodeID')) {
                obj['NodeID'] = ApiClient.convertToType(data['NodeID'], 'String');
            }
            if (data.hasOwnProperty('NodeAddr')) {
                obj['NodeAddr'] = ApiClient.convertToType(data['NodeAddr'], 'String');
            }
            if (data.hasOwnProperty('LocalNodeState')) {
                obj['LocalNodeState'] = LocalNodeState.constructFromObject(data['LocalNodeState']);
            }
            if (data.hasOwnProperty('ControlAvailable')) {
                obj['ControlAvailable'] = ApiClient.convertToType(data['ControlAvailable'], 'Boolean');
            }
            if (data.hasOwnProperty('Error')) {
                obj['Error'] = ApiClient.convertToType(data['Error'], 'String');
            }
            if (data.hasOwnProperty('RemoteManagers')) {
                obj['RemoteManagers'] = ApiClient.convertToType(data['RemoteManagers'], [PeerNode]);
            }
            if (data.hasOwnProperty('Nodes')) {
                obj['Nodes'] = ApiClient.convertToType(data['Nodes'], 'Number');
            }
            if (data.hasOwnProperty('Managers')) {
                obj['Managers'] = ApiClient.convertToType(data['Managers'], 'Number');
            }
            if (data.hasOwnProperty('Cluster')) {
                obj['Cluster'] = ClusterInfo.constructFromObject(data['Cluster']);
            }
        }
        return obj;
    }


}

/**
 * Unique identifier of for this node in the swarm.
 * @member {String} NodeID
 * @default ''
 */
SwarmInfo.prototype['NodeID'] = '';

/**
 * IP address at which this node can be reached by other nodes in the swarm. 
 * @member {String} NodeAddr
 * @default ''
 */
SwarmInfo.prototype['NodeAddr'] = '';

/**
 * @member {module:model/LocalNodeState} LocalNodeState
 */
SwarmInfo.prototype['LocalNodeState'] = undefined;

/**
 * @member {Boolean} ControlAvailable
 * @default false
 */
SwarmInfo.prototype['ControlAvailable'] = false;

/**
 * @member {String} Error
 * @default ''
 */
SwarmInfo.prototype['Error'] = '';

/**
 * List of ID's and addresses of other managers in the swarm. 
 * @member {Array.<module:model/PeerNode>} RemoteManagers
 */
SwarmInfo.prototype['RemoteManagers'] = undefined;

/**
 * Total number of nodes in the swarm.
 * @member {Number} Nodes
 */
SwarmInfo.prototype['Nodes'] = undefined;

/**
 * Total number of managers in the swarm.
 * @member {Number} Managers
 */
SwarmInfo.prototype['Managers'] = undefined;

/**
 * @member {module:model/ClusterInfo} Cluster
 */
SwarmInfo.prototype['Cluster'] = undefined;






export default SwarmInfo;

