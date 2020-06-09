import { BaseApplicationCustomizer } from '@microsoft/sp-application-base';
/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISpfxcssApplicationCustomizerProperties {
    testMessage: string;
    cssurl: string;
    pagecss: string;
}
/** A Custom Action which can be run during execution of a Client Side Application */
export default class SpfxcssApplicationCustomizer extends BaseApplicationCustomizer<ISpfxcssApplicationCustomizerProperties> {
    private _externalJsUrl;
    private _externalJsUrl1;
    onInit(): Promise<void>;
}
//# sourceMappingURL=SpfxcssApplicationCustomizer.d.ts.map