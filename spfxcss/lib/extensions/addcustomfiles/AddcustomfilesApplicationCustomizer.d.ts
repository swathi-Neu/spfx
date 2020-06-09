import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface IAddcustomfilesApplicationCustomizerProperties {
    testMessage: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class AddcustomfilesApplicationCustomizer extends BaseApplicationCustomizer<IAddcustomfilesApplicationCustomizerProperties> {
    onInit(): Promise<void>;
}
//# sourceMappingURL=AddcustomfilesApplicationCustomizer.d.ts.map