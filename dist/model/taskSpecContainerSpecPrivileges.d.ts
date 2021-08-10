import { TaskSpecContainerSpecPrivilegesCredentialSpec } from './taskSpecContainerSpecPrivilegesCredentialSpec';
import { TaskSpecContainerSpecPrivilegesSELinuxContext } from './taskSpecContainerSpecPrivilegesSELinuxContext';
export declare class TaskSpecContainerSpecPrivileges {
    'credentialSpec'?: TaskSpecContainerSpecPrivilegesCredentialSpec;
    'sELinuxContext'?: TaskSpecContainerSpecPrivilegesSELinuxContext;
    static discriminator: string | undefined;
    static attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
    }[];
}
