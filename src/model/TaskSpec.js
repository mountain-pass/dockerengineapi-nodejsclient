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
import NetworkAttachmentConfig from './NetworkAttachmentConfig';
import TaskSpecContainerSpec from './TaskSpecContainerSpec';
import TaskSpecLogDriver from './TaskSpecLogDriver';
import TaskSpecNetworkAttachmentSpec from './TaskSpecNetworkAttachmentSpec';
import TaskSpecPlacement from './TaskSpecPlacement';
import TaskSpecPluginSpec from './TaskSpecPluginSpec';
import TaskSpecResources from './TaskSpecResources';
import TaskSpecRestartPolicy from './TaskSpecRestartPolicy';

/**
 * The TaskSpec model module.
 * @module model/TaskSpec
 * @version 1.41
 */
class TaskSpec {
    /**
     * Constructs a new <code>TaskSpec</code>.
     * User modifiable task configuration.
     * @alias module:model/TaskSpec
     */
    constructor() { 
        
        TaskSpec.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>TaskSpec</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/TaskSpec} obj Optional instance to populate.
     * @return {module:model/TaskSpec} The populated <code>TaskSpec</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new TaskSpec();

            if (data.hasOwnProperty('PluginSpec')) {
                obj['PluginSpec'] = TaskSpecPluginSpec.constructFromObject(data['PluginSpec']);
            }
            if (data.hasOwnProperty('ContainerSpec')) {
                obj['ContainerSpec'] = TaskSpecContainerSpec.constructFromObject(data['ContainerSpec']);
            }
            if (data.hasOwnProperty('NetworkAttachmentSpec')) {
                obj['NetworkAttachmentSpec'] = TaskSpecNetworkAttachmentSpec.constructFromObject(data['NetworkAttachmentSpec']);
            }
            if (data.hasOwnProperty('Resources')) {
                obj['Resources'] = TaskSpecResources.constructFromObject(data['Resources']);
            }
            if (data.hasOwnProperty('RestartPolicy')) {
                obj['RestartPolicy'] = TaskSpecRestartPolicy.constructFromObject(data['RestartPolicy']);
            }
            if (data.hasOwnProperty('Placement')) {
                obj['Placement'] = TaskSpecPlacement.constructFromObject(data['Placement']);
            }
            if (data.hasOwnProperty('ForceUpdate')) {
                obj['ForceUpdate'] = ApiClient.convertToType(data['ForceUpdate'], 'Number');
            }
            if (data.hasOwnProperty('Runtime')) {
                obj['Runtime'] = ApiClient.convertToType(data['Runtime'], 'String');
            }
            if (data.hasOwnProperty('Networks')) {
                obj['Networks'] = ApiClient.convertToType(data['Networks'], [NetworkAttachmentConfig]);
            }
            if (data.hasOwnProperty('LogDriver')) {
                obj['LogDriver'] = TaskSpecLogDriver.constructFromObject(data['LogDriver']);
            }
        }
        return obj;
    }


}

/**
 * @member {module:model/TaskSpecPluginSpec} PluginSpec
 */
TaskSpec.prototype['PluginSpec'] = undefined;

/**
 * @member {module:model/TaskSpecContainerSpec} ContainerSpec
 */
TaskSpec.prototype['ContainerSpec'] = undefined;

/**
 * @member {module:model/TaskSpecNetworkAttachmentSpec} NetworkAttachmentSpec
 */
TaskSpec.prototype['NetworkAttachmentSpec'] = undefined;

/**
 * @member {module:model/TaskSpecResources} Resources
 */
TaskSpec.prototype['Resources'] = undefined;

/**
 * @member {module:model/TaskSpecRestartPolicy} RestartPolicy
 */
TaskSpec.prototype['RestartPolicy'] = undefined;

/**
 * @member {module:model/TaskSpecPlacement} Placement
 */
TaskSpec.prototype['Placement'] = undefined;

/**
 * A counter that triggers an update even if no relevant parameters have been changed. 
 * @member {Number} ForceUpdate
 */
TaskSpec.prototype['ForceUpdate'] = undefined;

/**
 * Runtime is the type of runtime specified for the task executor. 
 * @member {String} Runtime
 */
TaskSpec.prototype['Runtime'] = undefined;

/**
 * Specifies which networks the service should attach to.
 * @member {Array.<module:model/NetworkAttachmentConfig>} Networks
 */
TaskSpec.prototype['Networks'] = undefined;

/**
 * @member {module:model/TaskSpecLogDriver} LogDriver
 */
TaskSpec.prototype['LogDriver'] = undefined;






export default TaskSpec;
