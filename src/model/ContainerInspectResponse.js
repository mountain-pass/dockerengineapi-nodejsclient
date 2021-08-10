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
import ContainerState from './ContainerState';
import GraphDriverData from './GraphDriverData';
import HostConfig from './HostConfig';
import MountPoint from './MountPoint';
import NetworkSettings from './NetworkSettings';

/**
 * The ContainerInspectResponse model module.
 * @module model/ContainerInspectResponse
 * @version 1.41
 */
class ContainerInspectResponse {
    /**
     * Constructs a new <code>ContainerInspectResponse</code>.
     * @alias module:model/ContainerInspectResponse
     */
    constructor() { 
        
        ContainerInspectResponse.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>ContainerInspectResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/ContainerInspectResponse} obj Optional instance to populate.
     * @return {module:model/ContainerInspectResponse} The populated <code>ContainerInspectResponse</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ContainerInspectResponse();

            if (data.hasOwnProperty('Id')) {
                obj['Id'] = ApiClient.convertToType(data['Id'], 'String');
            }
            if (data.hasOwnProperty('Created')) {
                obj['Created'] = ApiClient.convertToType(data['Created'], 'String');
            }
            if (data.hasOwnProperty('Path')) {
                obj['Path'] = ApiClient.convertToType(data['Path'], 'String');
            }
            if (data.hasOwnProperty('Args')) {
                obj['Args'] = ApiClient.convertToType(data['Args'], ['String']);
            }
            if (data.hasOwnProperty('State')) {
                obj['State'] = ContainerState.constructFromObject(data['State']);
            }
            if (data.hasOwnProperty('Image')) {
                obj['Image'] = ApiClient.convertToType(data['Image'], 'String');
            }
            if (data.hasOwnProperty('ResolvConfPath')) {
                obj['ResolvConfPath'] = ApiClient.convertToType(data['ResolvConfPath'], 'String');
            }
            if (data.hasOwnProperty('HostnamePath')) {
                obj['HostnamePath'] = ApiClient.convertToType(data['HostnamePath'], 'String');
            }
            if (data.hasOwnProperty('HostsPath')) {
                obj['HostsPath'] = ApiClient.convertToType(data['HostsPath'], 'String');
            }
            if (data.hasOwnProperty('LogPath')) {
                obj['LogPath'] = ApiClient.convertToType(data['LogPath'], 'String');
            }
            if (data.hasOwnProperty('Name')) {
                obj['Name'] = ApiClient.convertToType(data['Name'], 'String');
            }
            if (data.hasOwnProperty('RestartCount')) {
                obj['RestartCount'] = ApiClient.convertToType(data['RestartCount'], 'Number');
            }
            if (data.hasOwnProperty('Driver')) {
                obj['Driver'] = ApiClient.convertToType(data['Driver'], 'String');
            }
            if (data.hasOwnProperty('Platform')) {
                obj['Platform'] = ApiClient.convertToType(data['Platform'], 'String');
            }
            if (data.hasOwnProperty('MountLabel')) {
                obj['MountLabel'] = ApiClient.convertToType(data['MountLabel'], 'String');
            }
            if (data.hasOwnProperty('ProcessLabel')) {
                obj['ProcessLabel'] = ApiClient.convertToType(data['ProcessLabel'], 'String');
            }
            if (data.hasOwnProperty('AppArmorProfile')) {
                obj['AppArmorProfile'] = ApiClient.convertToType(data['AppArmorProfile'], 'String');
            }
            if (data.hasOwnProperty('ExecIDs')) {
                obj['ExecIDs'] = ApiClient.convertToType(data['ExecIDs'], ['String']);
            }
            if (data.hasOwnProperty('HostConfig')) {
                obj['HostConfig'] = HostConfig.constructFromObject(data['HostConfig']);
            }
            if (data.hasOwnProperty('GraphDriver')) {
                obj['GraphDriver'] = GraphDriverData.constructFromObject(data['GraphDriver']);
            }
            if (data.hasOwnProperty('SizeRw')) {
                obj['SizeRw'] = ApiClient.convertToType(data['SizeRw'], 'Number');
            }
            if (data.hasOwnProperty('SizeRootFs')) {
                obj['SizeRootFs'] = ApiClient.convertToType(data['SizeRootFs'], 'Number');
            }
            if (data.hasOwnProperty('Mounts')) {
                obj['Mounts'] = ApiClient.convertToType(data['Mounts'], [MountPoint]);
            }
            if (data.hasOwnProperty('Config')) {
                obj['Config'] = ContainerConfig.constructFromObject(data['Config']);
            }
            if (data.hasOwnProperty('NetworkSettings')) {
                obj['NetworkSettings'] = NetworkSettings.constructFromObject(data['NetworkSettings']);
            }
        }
        return obj;
    }


}

/**
 * The ID of the container
 * @member {String} Id
 */
ContainerInspectResponse.prototype['Id'] = undefined;

/**
 * The time the container was created
 * @member {String} Created
 */
ContainerInspectResponse.prototype['Created'] = undefined;

/**
 * The path to the command being run
 * @member {String} Path
 */
ContainerInspectResponse.prototype['Path'] = undefined;

/**
 * The arguments to the command being run
 * @member {Array.<String>} Args
 */
ContainerInspectResponse.prototype['Args'] = undefined;

/**
 * @member {module:model/ContainerState} State
 */
ContainerInspectResponse.prototype['State'] = undefined;

/**
 * The container's image ID
 * @member {String} Image
 */
ContainerInspectResponse.prototype['Image'] = undefined;

/**
 * @member {String} ResolvConfPath
 */
ContainerInspectResponse.prototype['ResolvConfPath'] = undefined;

/**
 * @member {String} HostnamePath
 */
ContainerInspectResponse.prototype['HostnamePath'] = undefined;

/**
 * @member {String} HostsPath
 */
ContainerInspectResponse.prototype['HostsPath'] = undefined;

/**
 * @member {String} LogPath
 */
ContainerInspectResponse.prototype['LogPath'] = undefined;

/**
 * @member {String} Name
 */
ContainerInspectResponse.prototype['Name'] = undefined;

/**
 * @member {Number} RestartCount
 */
ContainerInspectResponse.prototype['RestartCount'] = undefined;

/**
 * @member {String} Driver
 */
ContainerInspectResponse.prototype['Driver'] = undefined;

/**
 * @member {String} Platform
 */
ContainerInspectResponse.prototype['Platform'] = undefined;

/**
 * @member {String} MountLabel
 */
ContainerInspectResponse.prototype['MountLabel'] = undefined;

/**
 * @member {String} ProcessLabel
 */
ContainerInspectResponse.prototype['ProcessLabel'] = undefined;

/**
 * @member {String} AppArmorProfile
 */
ContainerInspectResponse.prototype['AppArmorProfile'] = undefined;

/**
 * IDs of exec instances that are running in the container.
 * @member {Array.<String>} ExecIDs
 */
ContainerInspectResponse.prototype['ExecIDs'] = undefined;

/**
 * @member {module:model/HostConfig} HostConfig
 */
ContainerInspectResponse.prototype['HostConfig'] = undefined;

/**
 * @member {module:model/GraphDriverData} GraphDriver
 */
ContainerInspectResponse.prototype['GraphDriver'] = undefined;

/**
 * The size of files that have been created or changed by this container. 
 * @member {Number} SizeRw
 */
ContainerInspectResponse.prototype['SizeRw'] = undefined;

/**
 * The total size of all the files in this container.
 * @member {Number} SizeRootFs
 */
ContainerInspectResponse.prototype['SizeRootFs'] = undefined;

/**
 * @member {Array.<module:model/MountPoint>} Mounts
 */
ContainerInspectResponse.prototype['Mounts'] = undefined;

/**
 * @member {module:model/ContainerConfig} Config
 */
ContainerInspectResponse.prototype['Config'] = undefined;

/**
 * @member {module:model/NetworkSettings} NetworkSettings
 */
ContainerInspectResponse.prototype['NetworkSettings'] = undefined;






export default ContainerInspectResponse;

